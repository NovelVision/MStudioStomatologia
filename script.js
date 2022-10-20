function menuRevealElements() {
    const menuElements = document.querySelectorAll('#menuElement');
    if (window.innerWidth < 955) {
        menuElements.forEach(menuElement => {
            if (menuElement.style.display === "block") {
                menuElement.style.display = "none";
            } else {
                menuElement.style.display = "block";
            }
        });
    }
}

$(document).ready(function() {
    if (!window.matchMedia)
        return;

    var current = $('head > link[rel="icon"][media]');
    $.each(current, function(i, icon) {
        var match = window.matchMedia(icon.media);
        function swap() {
            if (match.matches) {
                current.remove();
                current = $(icon).appendTo('head');
            }
        }
        match.addListener(swap);
        swap();
    });
});
