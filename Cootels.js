$(document).ready(function() {
    // привяжем обработчик событий click к нажатию на иконку бургера,
    $('.menu-burger__header').click(function(event) {
            // добавляєм по нажатию класс ‘open-menu’
        $('.menu-burger__header').toggleClass('open-menu');
        // привязка класа ".nav" до мишкі
        $('.nav').toggleClass('open-menu');
        // не прокручовалось
        $('body').toggleClass('fixed-page');
    });
});