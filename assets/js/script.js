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

    $(".dropdown").on("click", function() {
        $(this).toggleClass("active")
        $(this).hasClass("active") ? $(this).next(".submenu").slideDown(200) : $(this).next(".submenu").slideUp(200)
    })

    document.documentElement.onclick = function(event) {

        if (event.target == document.querySelector(".nav-link")) {
            console.log(event.target)
        }
    }

})