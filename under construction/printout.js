$(document).ready(function(){

	// $("#buttons").on("click", ".btn", function(){
  //
  // })
  let html;

  html = '<div class="grid-item">Day of the week</div>' +
      '<div class="grid-item">Day of the week</div>'+
      '<div class="grid-item">Date</div>'+
      '<div class="grid-item"></div>'+
      '<div class="grid-item"></div>'+
      '<div class="grid-item"></div>'+
      '<div class="grid-item"></div>'+
      '<div class="grid-item">Scheduled Hours Worked</div>'+
      '<div class="grid-item">Shift Diff Hours</div>'+
      '<div class="grid-item">Total Hours per day</div>'+

      '<div class="grid-item"></div>'+
      '<div class="grid-item"></div>'+
      '<div class="grid-item"></div>'+
      '<div class="grid-item"></div>'+
      '<div class="grid-item"></div>'+
      '<div class="grid-item"></div>'+
      '<div class="grid-item">Direct Billable Pt care Hours</div>'+
      '<div class="grid-item"></div>'+
      '<div class="grid-item"></div>';

  for (let x =0; x<=30; x++){
    html+=
      '<div class="grid-item"></div>' +
      '<div class="grid-item"></div>' +
      '<div class="grid-item"></div>' +
      '<div class="grid-item"></div>' +
      '<div class="grid-item"></div>' +
      '<div class="grid-item"></div>' +
      '<div class="grid-item"></div>' +
      '<div class="grid-item"></div>' +
      '<div class="grid-item"></div>'

      };

  $("#grid").html(html);

})
