<?php
if ( ! function_exists( 'vwde_register_navigations' ) ) {
	function vwde_register_navigations() {
		register_nav_menus(
			array(
				'top'    => __( 'Top Navigation', 'vwde' ),
				'bottom' => __( 'Bottom Navigation', 'vwde' ),
			)
		);
	}
}
add_action( 'after_setup_theme', 'vwde_register_navigations' );