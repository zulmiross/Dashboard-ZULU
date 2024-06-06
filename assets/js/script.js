jQuery(function($) {

    $(".sidebar-dropdown > a").on('click', function() {

        if ($(this).parent().hasClass("active")) {
            $(this).next(".sidebar-submenu").slideUp(200);
            $(this).parent().removeClass("active")
        } else {
            $(this).next(".sidebar-submenu").slideDown(200);
            $(this).parent().addClass("active")
        }
    })
})