class Army{
	constructor(dateObject){
		this.dateObject = dateObject;
	}

	create(){
		let d = this.dateObject;
		let army=[];
		let c=1;
		let dim = d.daysInMonth();
		console.log(dim);

		for (var x=1; x<=dim; x++){
			let soldier = new Soldier(d);
			army.push(soldier.create());
			d=d.add(1, 'day');
		}

		$("#main1").html(""); //clear html
		$("#main2").html(""); //clear html

		for (let i of army){
			if (c<=16){
				$("#main1").append(i);
			} else {
				$("#main2").append(i);
			}
			c++;

		}

		$("#main2").append(
			'<div class="row px-3">'+
			'<input type ="submit" form = "myForm" class="btn btn-primary" value="Submit Timesheet" /> ' +
		// 	// '<button id="submit" class = "text-center  btn-danger" type="button">Submit Timesheet</button>'+
			'</div>');

		checkWidth();



	}
}
