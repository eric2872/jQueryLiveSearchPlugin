
(function ( $ ) {

	
jQuery.livesearch = function(data) {

	var formid = data.formid;
	var results_container = data.results_container_id;
    
  $(formid).on("keyup", "input", function() {
        
        var form_data = $(formid).serialize();
        var form_url = $(formid).attr("action");
        var form_method = $(formid).attr("method").toUpperCase();
        
        $.ajax({
            url: form_url, 
            type: form_method,      
            data: form_data,     
            cache: false,
            success: function(returnhtml){                          
                $(results_container).html(returnhtml); 
            }           
        });    
        
    });
};

}( jQuery ));