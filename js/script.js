$(document).ready(function() {
    $(document).foundation();
    $('#accordion').on('toggled', function(event, accordion) {
        console.log(accordion);
    });

    $(".project_image").click(function(event) {
    	$(this).addClass('frame-hidden');
    	var youtubeFrame = $(this).next();
    	youtubeFrame.removeClass('frame-hidden');
    	youtubeFrame.attr('src', youtubeFrame.data('autoplay-src'));
    });
    var newPercentage = "50";
    var pledgeCount = 0;
    $(".pledge-button").click(function(event) {
    	pledgeCount++;
    	if (pledgeCount == 1) {
    		newPercentage = 40;
    	}
    	if (pledgeCount == 2) {
    		newPercentage = 75;
    	} 
    	if (pledgeCount == 3) {
    		newPercentage = 100;	
    	}
    	if (pledgeCount == 4) {
    		newPercentage = 0;
    		pledgeCount = 0;	
    	}
    	var path = $(this).parent().siblings('.milestone-path');
    	path.children('.milestone-meter').data('path-length', newPercentage).width(newPercentage + "%");
    	path.children('.milestone').each(function(index, el) {
    		if ($(el).data('anchor') <= newPercentage) {
    			$(el).addClass('completed');
    		} else {
    			$(el).removeClass('completed');
    		}
    	});
    });
});
