$(function() {
    $('#open-search').click(function(e) {
        e.preventDefault();
        $('#search').addClass('active');
    })
    $('#close-search').click(function() {
        $('#search').removeClass('active');
    })
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('#top').fadeIn();
        } else {
            $('#top').fadeOut();
        }
    })
    $('#top').click(function() {
        $('body, html').animate({ scrollTop: 0 }, 700);
    })
    $('.sidebar-toggler .btn').click(function() {
        $('.sidebar-toggle').slideToggle();
    })
    /*$('.thumbnails').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        },
        removalDelay: 500, //delay removal by X to allow out-animation
        callbacks: {
            beforeOpen: function() {
                // just a hack that adds mfp-anim class to markup
                this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                this.st.mainClass = this.st.el.attr('data-effect');
            }
        }
    });*/
})