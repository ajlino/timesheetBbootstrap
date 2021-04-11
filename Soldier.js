class Soldier{
	constructor(dateObject){
		this.dateObject = dateObject;
	}

	create(){
		let html;
		let x,y;

		x = this.dateObject //make it shorter
		let xMobile = x.format('M/D/YYYY');
		let xDesktop = x.format('dddd, MMMM D, YYYY');
		console.log("Clicked");


	html =
		'<div class="input-group mb-2 flex-nowrap">' +


			'<button class="btn btn-light" type="button" value="Regular" data-wasChecked = "false">Regular</button>' +
			'<button class="btn btn-light" type="button" value="Premium" data-wasChecked = "false">Premium</button>' +

			'<input type="text" name = "entry[hours][]" class="input-group-text hours"  data-hours="10" value="-">' +

			'<input type="text" name="entry[date][]" readonly class="form-control mobile d-none" value="'+xMobile+'">' +

			// '<input type="text" readonly class="form-control bg-light desktop" value="'+xDesktop+'">' +
			//
			'<input type="text" name="entry[selection][]" readonly class="form-control choice" value="-">' +

		'</div>';

	return html;

	}
}
