$(document).ready(function() {

    $.each($('.checkbox'), function(index, val) {

        if($(this).find('input').prop('checked') == true) {
            $(this).addClass('active');
        }
    });

    $(document).on('click', '.checbox', function(event) {
        if ($(this).hasClass('active')) {
            $(this).find('input').prop('checked', false);
        } else {
            $(this).find('input').prop('checked', true);
        }
        $(this).toggleClass('active');

        return false;
    });

    $.each($('.radiobtn-item'), function(index, val) {

        if($(this).find('input').prop('checked') == true) {
            $(this).addClass('active');
        }

    });
    $(document).on('click', '.radiobtn-item', function(event) {
        $(this).parents('radiobtn').find('.radiobtn-item').removeClass('active');
        $(this).parents('radiobtn').find('.radiobtn-item input').prop('checked', false);
        $(this).toggleClass('active');
        $(this).find('input').prop('checked', true);
        return false;
    });

});