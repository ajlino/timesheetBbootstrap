//button toggle
$(document).ready(function(){

	$("#buttons").on("click", ".btn", function(){
		var $value = $(this).siblings('.choice');
		var $btns = $(this).siblings(".btn");
		var $hrs = $(this).siblings('.hours');

		if ($(this).data("wasChecked") == "true"){
			$(this).removeClass("btn-danger");
			$(this).addClass("btn-light");
			$value.val("-");	//set value of sibling with ID="value"
			$(this).data('wasChecked', "false");

		} else {
			$(this).removeClass("btn-light")
			$(this).addClass("btn-danger")
			$(this).data('wasChecked', "true");
			$btns.removeClass("btn-danger");
			$btns.addClass("btn-light");

			$value.val($(this).val());	////set value of sibling with ID="value"
		}

		$(this).siblings().data("wasChecked", "false");

		if ($value.val() == "Regular"){
			$hrs.val("10");
		} else if ($value.val() == "Premium"){
			$hrs.val("8.5");
		}	else {
			$hrs.val("-")
		};


	});

	$("#buttons").on("click", ".hours", function(){
		if ($(this).data("hours") == "10"){
			$(this).data("hours", "8.5");
			$(this).val("8.5");
		} else {
			$(this).data("hours", "10");
			$(this).val("10");
		}
	});

	// $("#buttons").on("click", "#submit", function(){
	// 	let myForm = document.getElementById('myForm');
	// 	let formData = new FormData(myForm);
	//
	// 	for(var pair of formData.entries()) {
	// 	   console.log(pair[0]+ ', '+ pair[1]);
	// 	}
	//
	// });
});
