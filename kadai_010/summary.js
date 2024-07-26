$(function () {
    $('#change-color').on('click', function () {
        $('#target').css('color', 'red');
    })
    $('#change-text').on('click', function () {
        $('#target').text('こんばんは！');
    });
    $('#fade-Out').on('click', function () {
        $('#target').fadeOut();
    });
    $('#fade-In').on('click', function () {
        $('#target').fadeIn();
    });
});