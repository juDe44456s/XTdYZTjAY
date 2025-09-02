// 代码生成时间: 2025-09-03 01:42:22
$(document).ready(function() {

    // Function to encrypt a password
    function encryptPassword(password) {
        try {
            // Use CryptoJS for encryption
            var encrypted = CryptoJS.AES.encrypt(password, 'secret key');
            return encrypted.toString();
        } catch (error) {
            console.error('Encryption failed:', error);
            return null;
        }
    }

    // Function to decrypt a password
    function decryptPassword(encryptedPassword) {
        try {
            // Use CryptoJS for decryption
            var decrypted = CryptoJS.AES.decrypt(encryptedPassword, 'secret key');
            return decrypted.toString(CryptoJS.enc.Utf8);
        } catch (error) {
            console.error('Decryption failed:', error);
            return null;
        }
    }

    // Event handler for encrypt button click
    $('#encryptBtn').click(function() {
        var password = $('#password').val();
        if (!password) {
            console.error('Password cannot be empty');
            return;
        }
        var encryptedPassword = encryptPassword(password);
        if (encryptedPassword) {
            $('#encryptedPassword').text(encryptedPassword);
        }
    });

    // Event handler for decrypt button click
    $('#decryptBtn').click(function() {
        var encryptedPassword = $('#encryptedPassword').val();
        if (!encryptedPassword) {
            console.error('Encrypted password cannot be empty');
            return;
        }
        var decryptedPassword = decryptPassword(encryptedPassword);
        if (decryptedPassword) {
            $('#decryptedPassword').text(decryptedPassword);
        }
    });

});

/**
 * Include CryptoJS library for encryption and decryption
 */
<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/crypto-js.min.js"></script>