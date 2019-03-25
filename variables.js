$(document).ready(function(){
    $("#myModal2").modal('show');
});

$(document).ready(function() {
  $('li.active').removeClass('active');
});


$(document).ready(function () {
 $(".navbar-nav li.trigger-collapse a").click(function(event) {
   $(".navbar-collapse").collapse('hide');
 });