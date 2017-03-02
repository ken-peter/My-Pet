$(document).ready(function() {
 $("#change-color").click(function){
   if ("body").hasClass("white"){
   $("body").removeClass("white");
   $("body").addClass("grey");
 }else{
   ("body").removeClass("grey");
   ("body").addClass("white")
 }

});
});
