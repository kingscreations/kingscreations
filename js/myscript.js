$(function() {

	"use strict";

	var topoffset = 50; //variable for menu height
	var slideqty = $('#featured .item').length;

	//Activate Scrollspy
	$('body').scrollspy({
		target: 'header .navbar',
		offset: topoffset
	});

	// add inbody class
	var hash = $(this).find('li.active a').attr('href');
	if(hash !== '#featured') {
		$('header nav').addClass('inbody');
	} else {
		$('header nav').removeClass('inbody');
	}


	// Add an inbody class to nav when scrollspy event fires
	$('.navbar-fixed-top').on('activate.bs.scrollspy', function() {
		var hash = $(this).find('li.active a').attr('href');
		if(hash !== '#featured') {
			$('header nav').addClass('inbody');
		} else {
			$('header nav').removeClass('inbody');
		}
	});


	//Use smooth scrolling when clicking on navigation
	$('.navbar a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') ===
			this.pathname.replace(/^\//,'') &&
			location.hostname === this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top-topoffset+2
				}, 500);
				return false;
			} //target.length
		} //click function
	}); //smooth scrolling



	function findAnchorLink() {
		if(location.href.indexOf('#') != -1) {
			var namedAnchor = window.location.hash;
			var faqToFind = namedAnchor + ' .faq_question';
			$(faqToFind).trigger('click');
		}

			// contact me modal button settings
		$('#modal-lg').on('shown.bs.modal', function () {
			$('#firstName #lastName #email #txtAreaComments').focus()
		})
		/**
		 * this resets all form fields when the "Reset" button is clicked.
		 **/
		$("#reset-form").click(function() {
			document.getElementById("sample-form").reset();
		});
	};

});
$(document).ready(function() {
//console.log("ok");
	$("#question1").click(function(){
		$("#answer1").slideToggle("slow");
	});
	$("#question2").click(function(){
		$("#answer2").slideToggle("slow");
	});
	$("#question3").click(function(){
		$("#answer3").slideToggle("slow");
	});
	$("#question4").click(function(){
		$("#answer4").slideToggle("slow");
	});
	//$('.faq').each(function(){
	//	$(this).append('<div class="letter_q"></div><div class="letter_a"></div>');
	//});
	//
	//$('.faq_question').click(function(){
	//	if ($(this).parent().is('.open')) {
	//		$(this).closest('.faq').find('.faq_answer_container').animate({'height':'0'},500);
	//		$(this).closest('.faq').find('.letter_a').fadeOut(500);
	//		$(this).closest('.faq').find('.letter_q').animate({'left':'25px'});
	//		$(this).closest('.faq').removeClass('open');
	//	}else{
	//		var newHeight = $(this).closest('.faq').find('.faq_answer').height() + 'px';
	//		$(this).closest('.faq').find('.faq_answer_container').animate({'height':newHeight},500);
	//		$(this).closest('.faq').find('.letter_a').fadeIn(500);
	//		$(this).closest('.faq').find('.letter_q').animate({'left':'10px'});
	//		$(this).closest('.faq').addClass('open');
	//	}
	//});
	findAnchorLink();

});