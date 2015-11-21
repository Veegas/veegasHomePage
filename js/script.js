$(document).ready(function() {
    $(document).foundation();
    $('#accordion').on('toggled', function(event, accordion) {
        console.log(accordion);
    });
});
