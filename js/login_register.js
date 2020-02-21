$(function () {

    $('#login-form-link').click(function (e) {
        $("#login-form").delay(100).show();
        $("#register-form").delay(100).hide();
        $('#register-form-link').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });
    $('#register-form-link').click(function (e) {
        $("#register-form").delay(100).show();
        $("#login-form").delay(100).hide();
        $('#login-form-link').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });

});