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
    
// Get the modal
var modal = document.getElementById('closeReason');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Get the modal
var modal1 = document.getElementById('holdReason');

// Get the button that opens the modal
var btn = document.getElementById("myBtn1");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close1")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal1.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
} 
  
})
