// Scroll to top button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollBtn").style.display = "block";
    } else {
        document.getElementById("scrollBtn").style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Smooth scrolling when clicking on navigation links
$(document).ready(function () {
    $('a.nav-link').on('click', function (event) {
        if (this.hash !== '') {
            event.preventDefault();
            const hash = this.hash;
            $('html, body').animate(
                {
                    scrollTop: $(hash).offset().top,
                },
                800
            );
        }
    });

    // Show/hide the "Scroll to top" button based on the scroll position
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('#scrollBtn').fadeIn();
        } else {
            $('#scrollBtn').fadeOut();
        }
    });

    // Scroll to top when the "Scroll to top" button is clicked
    $('#scrollBtn').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });
});