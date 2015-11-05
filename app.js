/* your code should go in this file */

/* 
 * The data is available in the array *data*
 * Each element of the array has the following structure:
 *  {
 *    word_en : "Apple",  // word in english
 *    word_de : "Apfel"   // word in german
 *  }
 */ 

var tmpl = ' <li id="ID">' +
        '  <h3>WORD</h3>' +
        '  <h3 class="solution">SOLUTION</h3>'+
        ' </li> ';

$(document).ready(function(){
    
    var tot=0;
    $(".options").hide();
    $(".final").hide();
    
    for(var i=0;i<data.length;i++){
        
        var tmp=tmpl.replace("ID",i).replace("WORD",data[i].word_en).replace("SOLUTION",data[i].word_de);
        $(".cards").append(tmp);
        
    }
    
    $("#0").addClass("current");
    $(".solution").hide();
    
    $( ".cards" ).on( "click", "li", function() { 
        $(this).children().hide();
	$(".solution").show();
        $(".options").show();
    });

    $(".opt-correct").click(function(){
        tot+=1;
        var c=$(".current").attr("id");
        $("#"+c).removeClass("current");
        var c2=parseInt(c)+1;
       
        if(c2>=data.length){
            console.log("fine");
            $(".solution").hide();
            $(".options").hide();
           
            $("#tot").text(data.length);
            $("#tot-good").text(tot);
            $(".final").show();
           
            $(".final").show();
        }else{
            $("#"+c2).addClass("current");
            $(".solution").hide();
            $(".options").hide();}
        console.log(c2);
    });

    $(".opt-incorrect").click(function(){
       
        var c=$(".current").attr("id");
        $("#"+c).removeClass("current");
        var c2=parseInt(c)+1;
        if(c2>=data.length){
            console.log("fine");
            $(".solution").hide();
            $(".options").hide();
           
            $("#tot").text(data.length);
            $("#tot-good").text(tot);
            $(".final").show();
        }else{
            $("#"+c2).addClass("current");
            $(".solution").hide();
            $(".options").hide();
            console.log(c2);
        }
    });




});

