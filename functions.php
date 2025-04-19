<?php
function enqueue_price_calculator_assets() {
    if (!is_page_template('template-calculator.php')) return;

    wp_enqueue_script(
        'price-calculator',
        get_template_directory_uri() . '/price-calculator/dist/assets/index.js',
        array(),
        '1.0',
        true
    );

    wp_enqueue_style(
        'price-calculator-style',
        get_template_directory_uri() . '/price-calculator/dist/assets/index.css',
        array(),
        '1.0'
    );
}
add_action('wp_enqueue_scripts', 'enqueue_price_calculator_assets');

function price_calculator_shortcode() {
    return '<div id="price-calculator-root"></div>';
}

add_shortcode('price_calculator', 'price_calculator_shortcode');

add_action('rest_api_init', function () {
    register_rest_route('myplugin/v1', '/calculate', array(
        'methods' => 'POST',
        'callback' => 'handle_price_calculation',
        'permission_callback' => '__return_true',
    ));
});

function handle_price_calculation($request) {
    $data = $request->get_json_params();
    return new WP_REST_Response([
        'status' => 'ok',
        'data' => $data,
    ]);
}
