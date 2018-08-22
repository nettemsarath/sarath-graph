function arrayfunction(){
    i=0;var arr=new Array();
    do{

        arr[i]=Math.floor(Math.random() * (100 - 10 + 1)) + 10;
        i++;
    }while(i<10)
    console.log(arr);
    return arr;
  }
  
function array(){
    var ctx = document.getElementById("myCanvas").getContext('2d');
    //retrive from database
    $.get( "retrive", function( arr ) {
        console.log("retrived data");
       console.log(arr.a);

       //  $( "#mydiv" ).html( arr.join(',') );
        
   

    var data = {
  labels : ["match1", "match2", "match3", "match4", "match5","match6","match7","match8","match9","match10"],
  datasets : [
      {
          label : "TeamA score",
          data : arr.a,
          backgroundColor : "blue",
          borderColor : "lightblue",
          fill : false,
          lineTension : 0,
          pointRadius : 5
      }
     
     ]
    };

    var options = {
        title : {
         display : true,
         position : "top",
        text : "Line Graph",
        fontSize : 18,
         fontColor : "#111"
     },
    legend : {
      display : true,
      position : "bottom"
     }
    };

    var chart = new Chart( ctx, {
    type : "line",
     data : data,
    options : options
    } ); 

});

}

$(function() {
    $("#start").click(function(ev) {
        $("#mydiv").html("");
      ev.preventDefault();
       var x= arrayfunction();
       console.log(x);
       $.ajax({
        type: 'POST',
        url: '/store',
        data: JSON.stringify({s: x}),
        success: function(data) { console.log('data: ' + data); },
        contentType: "application/json",
        dataType: 'json'
       });
      
      $.each(x, function(index, value){
        $("#mydiv").append(  value + ', ');
    });
    
    array();
    
    });
    
});