$(document).ready(function(){

  $("#create").click(function(){
    let dateObject; //the dayjs date object
    let army, soldier;

    dateObject = processDate($("#yr").val(), $("#mth").val());

    checkWidth();
    army  = new Army(dateObject);
    army.create();

  });


});
