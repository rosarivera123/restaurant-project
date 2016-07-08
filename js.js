var info;
$("document").ready(function(){
    
  
 

  $("#btn-submit").click(function(){
      var food = $("#foodBox").val();
      var location = $("#locationBox").val();
      
      
        $.getJSON( "https://api.foursquare.com/v2/venues/search?ll=40.7,-74&client_id=YXYU5W4JWX4VPLIN5KU11RO2CUZDVMJRKGQCJJIFPCDTMHQR&client_secret=LCB5XTPVNKGALW1KSEG2GXSG4UX5NLREPKB5PLSUQU0NK4NO&v=20160707&query=" +food + location + "&limit=5",
    function(data) {
        info = data;
      var items = [];
      for (var i = 0; i < data.response.venues.length; i++) {
          items.push( "<div class = '4SquareResults'>" + data.response.venues[i].location.address + "</div>" );
         items.push( "<div class = '4SquareResults'>" + data.response.venues[i].contact.phone+ "</div>" );
         items.push( "<div class = '4SquareResults'>" + data.response.venues[i].name + "</div>" );
       
      }
      
      
   $("<div/>",{
       "class":"my-new-list",
       html:items.join("")
   }).appendTo("#random");
   
   
  });    
 

 $("#btn-clear").click(function(){
        $("#locationBox").val('');
        $("#foodBox").val('');

    });

});
});
    
    
    
    
    
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
