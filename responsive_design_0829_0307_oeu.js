// 代码生成时间: 2025-08-29 03:07:44
// Ensure jQuery is loaded before this script
if (typeof jQuery === 'undefined') {
    console.error('jQuery is not loaded. Please include jQuery before responsive_design.js');
} else {
    (function($) {
        // Function to handle responsive design
        function setupResponsiveDesign() {
            // Handle window resize event to adjust layout accordingly
            $(window).on('resize', function() {
                adjustLayout();
            });

            // Initial layout adjustment on page load
            adjustLayout();
        }

        // Function to adjust layout based on screen size
        function adjustLayout() {           
            var screenWidth = $(window).width();

            if (screenWidth < 768) {
                // Handle mobile layout
                $('.content').addClass('mobile-layout');
                $('.content').removeClass('desktop-layout tablet-layout');
            } else if (screenWidth >= 768 && screenWidth < 1024) {
                // Handle tablet layout
                $('.content').addClass('tablet-layout');
                $('.content').removeClass('mobile-layout desktop-layout');
            } else {
                // Handle desktop layout
                $('.content').addClass('desktop-layout');
                $('.content').removeClass('mobile-layout tablet-layout');
            }
        }

        // Initialize the responsive design setup on document ready
        $(document).ready(function() {
            try {
                setupResponsiveDesign();
            } catch (error) {
                console.error('An error occurred while setting up responsive design:', error);
            }
        });
    })(jQuery);
}
