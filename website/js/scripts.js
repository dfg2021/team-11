// https://codepen.io/konovalchik/pen/addYVg
// ------------------------------ ASIA
jQuery(function() {

    jQuery("#asia").click(function(event) {
        jQuery('.asi').toggle();
        jQuery(".asi").addClass("animated flipInY");
    });

    jQuery("#asia").hover(function(event) {
        if ( jQuery(".asi").hasClass("animated flipInY") )
        {jQuery("#asimap").show();}
        else
        {jQuery("#asimap").toggle();}
    });

    jQuery(document).click(function (event) {
        if (jQuery(event.target).closest('.asi').length == 0 && jQuery(event.target).attr('id') != 'asia') {
            jQuery('.asi').hide();
            jQuery('#asimap').hide();
        }
    });

// ------------------------------ EUROPE
    jQuery(function() {
        jQuery("#euro").click(function(event) {
            jQuery('.eur').toggle();
            jQuery(".eur").addClass("animated flipInY");
            jQuery('#europe').show();
        });
        jQuery("#euro").hover(function(event) {
            if ( jQuery(".eur").hasClass("animated flipInY") )
            {jQuery("#europe").show();}
            else
            {jQuery("#europe").toggle();}
        });
        jQuery(document).click(function (event) {
            if (jQuery(event.target).closest('.eur').length == 0 && jQuery(event.target).attr('id') != 'euro') {
                jQuery('.eur').hide();
                jQuery('#europe').hide();
            }

        });
    });

// ------------------------------ Africa
    jQuery(function() {
        jQuery("#afri").click(function(event) {
            jQuery('.afr').toggle();
            jQuery(".afr").addClass("animated flipInY");
            jQuery('#africa').show();
        });
        jQuery("#afri").hover(function(event) {
            if ( jQuery(".afr").hasClass("animated flipInY") )
            {jQuery("#africa").show();}
            else
            {jQuery("#africa").toggle();}
        });
        jQuery(document).click(function (event) {
            if (jQuery(event.target).closest('.afr').length == 0 && jQuery(event.target).attr('id') != 'afri') {
                jQuery('.afr').hide();
                jQuery('#africa').hide();
            }

        });
    });

    // ------------------------------ Australia
    jQuery(function() {
        jQuery("#aust").click(function(event) {
            jQuery('.aus').toggle();
            jQuery(".aus").addClass("animated flipInY");
            jQuery('#australia').show();
        });
        jQuery("#aust").hover(function(event) {
            if ( jQuery(".aus").hasClass("animated flipInY") )
            {jQuery("#australia").show();}
            else
            {jQuery("#australia").toggle();}
        });
        jQuery(document).click(function (event) {
            if (jQuery(event.target).closest('.aus').length == 0 && jQuery(event.target).attr('id') != 'aust') {
                jQuery('.aus').hide();
                jQuery('#australia').hide();
            }

        });
    });

    // ------------------------------ South America
    jQuery(function() {
        jQuery("#southameri").click(function(event) {
            jQuery('.sam').toggle();
            jQuery(".sam").addClass("animated flipInY");
            jQuery('#ujam').show();
        });
        jQuery("#southameri").hover(function(event) {
            if ( jQuery(".sam").hasClass("animated flipInY") )
            {jQuery("#ujam").show();}
            else
            {jQuery("#ujam").toggle();}
        });
        jQuery(document).click(function (event) {
            if (jQuery(event.target).closest('.sam').length == 0 && jQuery(event.target).attr('id') != 'southameri') {
                jQuery('.sam').hide();
                jQuery('#ujam').hide();
            }

        });
    });

    // ------------------------------ North America
    jQuery(function() {
        jQuery("#northameri").click(function(event) {
            jQuery('.nam').toggle();
            jQuery(".nam").addClass("animated flipInY");
            jQuery('#sevam').show();
        });
        jQuery("#northameri").hover(function(event) {
            if ( jQuery(".nam").hasClass("animated flipInY") )
            {jQuery("#sevam").show();}
            else
            {jQuery("#sevam").toggle();}
        });
        jQuery(document).click(function (event) {
            if (jQuery(event.target).closest('.nam').length == 0 && jQuery(event.target).attr('id') != 'northameri') {
                jQuery('.nam').hide();
                jQuery('#sevam').hide();
            }

        });
    });
});