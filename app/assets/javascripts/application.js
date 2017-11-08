/* global $ */
/* global GOVUK */

console.log("here");

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}    

$(document).ready(function () {
  // Use GOV.UK shim-links-with-button-role.js to trigger a link styled to look like a button,
  // with role="button" when the space key is pressed.
  GOVUK.shimLinksWithButtonRole.init()

  // Show and hide toggled content
  // Where .multiple-choice uses the data-target attribute
  // to toggle hidden content
  var showHideContent = new GOVUK.ShowHideContent()
  showHideContent.init()
  
  if(document.getElementById('hasmail')) {
    var hasMail = document.getElementById('hasmail').innerHTML;
    var mailAddress = document.getElementById('mailaddress');
    if(hasMail == "No") {
      mailAddress.style.display = 'none';
    }
  }
  
  // DONE - The email needs to be removed when the user doesnt have one
  
  if (document.getElementById('usermail')) {
    var hasMail = document.getElementById('usermail').innerHTML;
    var email = document.getElementById('email');
    if (hasmail == "true") {
      email.style.display = 'block';
    } else {
      email.style.display = 'none';
    }
  }
    
    
    $('.header').click(function(){
     $(this).toggleClass('expand').nextUntil('tr.header').slideToggle(100);
});
    
$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

})
    
    $(document).ready(function() {

    $('.internal-table tr').click(function() {
        var href = $(this).find("a").attr("href");
        if(href) {
            window.location = href;
        }
    });

});
    
    // Change the selector if needed
var $table = $('internal-table'),
    $bodyCells = $table.find('tbody tr:first').children(),
    colWidth;

// Get the tbody columns width array
colWidth = $bodyCells.map(function() {
    return $(this).width();
}).get();

// Set the width of thead columns
$table.find('thead tr').children().each(function(i, v) {
    $(v).width(colWidth[i]);
}); 
  
})
