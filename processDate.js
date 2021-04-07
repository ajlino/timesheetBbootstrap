//process date info

//create the date object using Day.js
function processDate(yr, mth){
	let d;
	let jsDate;
	jsDate = new Date(yr, mth, 1);
	d = dayjs(jsDate);
	return d;
}

//change date format (change class visibility) for small and large screens
function checkWidth() {

  if ($(window).width() <= 576) {
    $('.mobile').removeClass('d-none');
		$('.mobile').addClass('d-inline');
    $('.desktop').addClass('d-none');
	}	else {
      $('mobile').removeClass('d-inline');
			$('.mobile').addClass('d-none');

			$('.desktop').removeClass('d-none');

  }
}




$(document).ready(function() {
  checkWidth();

  $(window).resize(function() {
    checkWidth();
  });
});
