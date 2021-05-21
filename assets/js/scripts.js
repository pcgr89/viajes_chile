$(document).ready(function () {
    /* Tooltips */
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
      })

    /* Navbar */

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.navbar').addClass('solid');
        } else {
            $('.navbar').removeClass('solid');
        }
    });

    /* Smooth Scroll*/

    $("a").click(function (event) {
        event.preventDefault()

        var gato = this.hash;

        $("html").animate({
            scrollTop: $(gato).offset().top - 58,
        }, 800
        );
    });
});