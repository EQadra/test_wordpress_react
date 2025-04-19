import React, { useState } from 'react';
import { useImageUploader } from '../context/ImageUploaderContext'; // ajusta el path si es necesario

export const ImageUploader = () => {
  const {
    uploads,
    gallery,
    handleFiles,
    removeUpload,
    updateTitle,
    uploadImages,
  } = useImageUploader();

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleFileChange = (e) => {
    handleFiles(e);
    // Verificar si hay imágenes rectangulares
    const newUploads = e.target.files;
    for (let i = 0; i < newUploads.length; i++) {
      const image = newUploads[i];
      const img = new Image();
      img.onload = () => {
        if (img.width > img.height) {
          setAlertMessage('¡Alerta! Has subido una imagen rectangular.');
          setShowAlert(true);
        }
      };
      img.src = URL.createObjectURL(image);
    }
  };

  const handleAlertDismiss = () => {
    setShowAlert(false);
  };

  const handleUploadImages = () => {
    // Validar que todas las imágenes tengan título antes de enviarlas
    const missingTitle = uploads.some((item) => !item.title.trim());
    
    if (missingTitle) {
      setErrorMessage('Por favor, asigna un título a todas las imágenes antes de enviarlas.');
      return;
    }
    
    setErrorMessage(''); // Limpiar mensaje de error si todo está bien
    uploadImages(); // Subir las imágenes si todo está correcto
  };

  return (
    <div>
      {/* FORMULARIO DE SUBIDA */}
      <h2 className="text-2xl font-bold mb-4">Subir Imágenes</h2>
      <input type="file" multiple accept="image/*" onChange={handleFileChange} className="mb-4" />

      {showAlert && (
        <div className="bg-yellow-400 text-black p-3 rounded-md mb-4 flex justify-between items-center">
          <span>{alertMessage}</span>
          <button onClick={handleAlertDismiss} className="bg-red-500 text-white rounded-full px-2 py-1">
            Cerrar
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
        {uploads.map((item, i) => (
          <div key={i} className="relative bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
            <img src={item.preview} alt={`preview-${i}`} className="w-full h-40 object-cover rounded-xl mb-2" />
            <input
              type="text"
              placeholder="Título de la imagen"
              value={item.title}
              onChange={(e) => updateTitle(i, e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-xl mb-2 dark:bg-gray-700 dark:text-white"
            />
            <button
              onClick={() => removeUpload(i)}
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}

      {uploads.length > 0 && (
        <button
          onClick={handleUploadImages}
          className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition"
        >
          Subir Imágenes
        </button>
      )}

      {/* GALERÍA SOCIAL */}
      {gallery.length > 0 && (
        <>
        <h2 className="text-2xl font-bold my-8">Galería Estilo Red Social</h2>
          <div className="grid grid-cols-2 mx-1 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {gallery.map((item, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
                {/* Flex container with justify-between to align the image and text at opposite ends */}
                <div className="flex justify-between items-center">
                <img
                    src={item.preview}
                    alt={`gallery-${i}`}
                    className="w-12 h-12 object-cover rounded-full" // Imagen más pequeña
                  />
                  <span className="text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full">
                    {item.title || 'Sin título'}
                  </span>
                
                </div>
              </div>
            ))}
          </div>

        </>
      )}
    </div>
  );
};
