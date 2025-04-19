<?php
/* Template Name: Calculadora de Precios */
get_header(); ?>

<main id="primary" class="site-main">
  <!-- <h1 class="text-center text-3xl font-bold my-8">Calculadora</h1> -->
  <?php echo do_shortcode('[price_calculator]'); ?>
  </main>

<?php get_footer(); ?>
