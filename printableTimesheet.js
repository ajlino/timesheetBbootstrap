$(document).ready(function(){
  $("#printable").click(function(){

    let myForm = document.getElementById('myForm');
    var formData = new FormData(myForm);
    let dte = [];
    let hrs = [];
    let selection = [];
    let x=0;
    let html;

    dte = formData.getAll('date');
    hrs = formData.getAll('hours');
    selection =formData.getAll('Selection')

    for (day of dte){
      html+= "<p class='printable'>"+ day + " | " + selection[x] +" | " + hrs[x] + "</h3>";
      x++;
    }

    $("#printData").html(html);
    $("#exampleModal").modal("show");
  });

  $("#print").click(function(){
    window.print();
  })
});
