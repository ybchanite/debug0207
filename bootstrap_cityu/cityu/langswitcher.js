/*****/
/*faq*/
/*****/


/*expand all button*/


var lang = jQuery('html').attr('lang');

switch (lang) {
    case 'en':
        jQuery('<a id="expandButton">Expand All</span>').insertAfter("#views-exposed-form-taught-faq-block-block-1 .form-item-field-faq-category-target-id");
        break;
    case 'zh-hant':
        jQuery('<a id="expandButton">展開全部</span>').insertAfter("#views-exposed-form-taught-faq-block-block-1 .form-item-field-faq-category-target-id");
        break;
    default:
        jQuery('<a id="expandButton">Expand All</span>').insertAfter("#views-exposed-form-taught-faq-block-block-1 .form-item-field-faq-category-target-id");
        break;
}

var expandAllButton = 0;

jQuery('#expandButton').click(function(){

    if (expandAllButton === 0){
        jQuery('.view_taught_faq').css('background-color','#863275');
        jQuery('.view_taught_faq_plus').text("-");
        jQuery('.views-field-body').show('fast');
        expandAllButton = 1;
    }
    else{
        jQuery('.view_taught_faq').css('background-color','#aaa4ad');
        jQuery('.view_taught_faq_plus').text("+");
        jQuery('.views-field-body').hide('fast');
        expandAllButton = 0;
        
    }
        

});







