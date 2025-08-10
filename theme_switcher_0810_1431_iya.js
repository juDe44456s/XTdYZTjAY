// 代码生成时间: 2025-08-10 14:31:58
$(document).ready(function() {

    // Define theme data
    const themes = {
        "light": {
            backgroundColor: "#ffffff",
            textColor: "#000000"
        },
        "dark": {
            backgroundColor: "#333333",
            textColor: "#ffffff"
        }
    };

    // Function to switch themes
    function switchTheme(themeName) {
        if (!themes.hasOwnProperty(themeName)) {
            console.error("Theme not found: ", themeName);
            return;
        }

        // Apply theme styles to the body element
        $("body").css({
            "background-color": themes[themeName].backgroundColor,
            "color": themes[themeName].textColor
        });
    }

    // Event listener for theme switch button
    $('#themeSwitcherButton').click(function() {
        const currentTheme = $('body').data('current-theme');
        let newTheme;

        // Determine the new theme based on the current theme
        if (currentTheme === 'light') {
            newTheme = 'dark';
        } else {
            newTheme = 'light';
        }

        // Switch to the new theme
        switchTheme(newTheme);

        // Update the current theme data attribute
        $('body').data('current-theme', newTheme);
    });

    // Initialize the theme
    switchTheme($('body').data('current-theme') || 'light');
});