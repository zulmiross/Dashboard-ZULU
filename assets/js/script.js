jQuery(function($) {

    $(".sidebar-dropdown > a").on('click', function() {

        // closeElement(this)

        if ($(this).parent().hasClass("active")) {
            $(this).next(".sidebar-submenu").slideUp(100);
            $(this).parent().removeClass("active")
        } else {
            $(".sidebar-dropdown").removeClass('active');
            $(".sidebar-submenu").slideUp(100);
            $(this).next(".sidebar-submenu").slideDown(100);
            $(this).parent().addClass("active")
        }

    })

    // $(".dropdown").on("click", function() {
    //     $(this).toggleClass("active")
    //     $(this).hasClass("active") ? $(this).next(".submenu").slideDown(50) : $(this).next(".submenu").slideUp(50)

    // })

    // $(document).on('click', function(e) {
    //     e.target.closest('.sidebar-dropdown') ? "" : closeElement(e);
    // });

    // function closeElement(el) {

    //     if ($(el).parent().hasClass("active")) {
    //         $(el).next(".sidebar-submenu").slideUp(100);
    //         $(el).parent().removeClass("active")
    //     } else {
    //         $(".sidebar-dropdown").removeClass('active');
    //         $(".sidebar-submenu").slideUp(100);
    //         $(el).next(".sidebar-submenu").slideDown(100);
    //         $(el).parent().addClass("active")
    //     }

    // }


})