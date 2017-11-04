$(document).ready(() => {
    $('.member-card').mouseenter(() => {
        $(event.currentTarget).find('.more').css('text-decoration', 'underline');
    });
    $('.member-card').mouseleave(() => {
        $(event.currentTarget).find('.more').css('text-decoration', 'none');
    });
});