


    
    
var sidebar = null;

/*sticky side bar*/

if(jQuery('#block-views-block-research-atimeline-block-2').length){
    sidebar = jQuery("#block-views-block-research-atimeline-block-2");
}
else if(jQuery('#block-views-block-doctorate-atimeline-block-2').length){
    sidebar = jQuery("#block-views-block-doctorate-atimeline-block-2");
}else if(jQuery('#block-views-block-taught-atimeline-block-2').length){
    sidebar = jQuery("#block-views-block-taught-atimeline-block-2");
}




if (!(sidebar === null)){
    jQuery(window).on('scroll', function() {
        if (jQuery('.timeline-item-wrapper .views-field-field-at-info').css('position') === 'absolute'){
            var offset = sidebar.offset().top;
            var windowHeight = jQuery(window).scrollTop();
            sidebar.stop().clearQueue();
            console.log( windowHeight > offset);
            if (windowHeight > offset) {
                console.log(windowHeight);
                console.log('' + offset);
                sidebar.css('margin-top', windowHeight - offset + 200);
            } else {
                sidebar.css('margin-top', 0);
            }
        }
    });
    
}

