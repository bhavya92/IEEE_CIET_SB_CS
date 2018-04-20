/*
|----------------------------------------------------------------------------
	Coming Soon Style 1 JS
	Author: Envalab
	Version: 1.0
|----------------------------------------------------------------------------
*/

jQuery(window).on('load', function(){

	// PRELOADER
	jQuery(".preloader-wrap").fadeOut(1000);


}); // end window load function

(function ($) {
	"use strict";

	/*
	|-----------------------------------------------------
		Countdown JS
	|-----------------------------------------------------
	*/
	var userDate = new Date($("#count-down-date").val()).getTime();
	function countDown(){

		var frontDays 		= $( '.days' );
		var frontHours		= $( '.hours' );
		var frontminutes	= $( '.minutes' );
		var frontSeconds	= $( '.seconds' );
		var expiredText		= $( '.expired-text' );
		var countDownUl		= $( '.count-down-list' );

		var currentDate = new Date().getTime();
		var difference = userDate - currentDate;
		
		if(difference < 0){
			clearInterval(countd);
			$(expiredText).removeClass('hidden');
			$(countDownUl).addClass('hidden');
		}
		else{
			var days = Math.floor(difference / (1000 * 60 * 60 * 24));
			var hours = Math.floor(difference % (1000 * 60 * 60 *24) / (1000 * 60 * 60));
			var minutes = Math.floor(difference % (1000 * 60 * 60) / (1000 * 60));
			var seconds = Math.floor(difference % (1000 * 60) / 1000);
			
			if(days < 10){days = "0" + days;}
			if(hours < 10){hours = "0" + hours;}
			if(minutes < 10){minutes = "0" + minutes;}
			if(seconds < 10) {seconds = "0" + seconds;}

			// Show value on the frontend
			$(frontDays).text(days);
			$(frontHours).text(hours);
			$(frontminutes).text(minutes);
			$(frontSeconds).text(seconds);
		}
	}
	countDown();
	var countd = setInterval(function(){
		countDown();
	}, 1000);

}(jQuery));