import React, { createContext, useContext, useState } from 'react';
import Swal from 'sweetalert2';

const ImageUploaderContext = createContext();

export const ImageUploaderProvider = ({ children }) => {
  const [uploads, setUploads] = useState([]);
  const [gallery, setGallery] = useState([]);

  const validateImage = (file) => {
    return new Promise((resolve, reject) => {
      if (file.size > 2 * 1024 * 1024) {
        reject('La imagen supera los 2MB.');
        return;
      }

      const img = new Image();
      img.onload = () => {
        if (img.width !== img.height) {
          reject('Solo se permiten imágenes cuadradas.');
        } else {
          resolve();
        }
      };
      img.onerror = () => reject('No se pudo cargar la imagen.');
      img.src = URL.createObjectURL(file);
    });
  };

  const handleFiles = async (e) => {
    const files = Array.from(e.target.files);

    const validUploads = [];

    for (const file of files) {
      try {
        await validateImage(file);
        validUploads.push({
          file,
          preview: URL.createObjectURL(file),
          title: ''
        });
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Imagen no válida',
          text: error,
        });
      }
    }

    if (validUploads.length) {
      setUploads((prev) => [...prev, ...validUploads]);
    }
  };

  const removeUpload = (index) => {
    setUploads((prev) => prev.filter((_, i) => i !== index));
  };

  const updateTitle = (index, newTitle) => {
    setUploads((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, title: newTitle } : item
      )
    );
  };

  const uploadImages = () => {
    if (!uploads.length) {
      Swal.fire({
        icon: 'error',
        title: 'No hay imágenes para subir',
      });
      return;
    }

    setGallery((prev) => [...prev, ...uploads]);
    setUploads([]);

    Swal.fire({
      icon: 'success',
      title: 'Imágenes subidas correctamente',
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <ImageUploaderContext.Provider
      value={{ uploads, gallery, handleFiles, removeUpload, updateTitle, uploadImages }}
    >
      {children}
    </ImageUploaderContext.Provider>
  );
};

export const useImageUploader = () => useContext(ImageUploaderContext);
