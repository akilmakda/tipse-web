
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// home page arrow dropdown

 $(document).on('click','.angle',function(){
       var getid =  $(this).attr('id');
       
       if(getid == "fa_angle_up"){
          $(".toggle_part").toggle("slow");
          $(this).removeClass("fa-angle-up").addClass('fa-angle-down'); 
         // $(this).setAttribute("id", "fa_angle_down");
          document.getElementById("fa_angle_up").id = "fa_angle_down";
       }
       else if(getid == "fa_angle_up1"){
          $(".toggle_part1").toggle("slow");
          $(this).removeClass("fa-angle-up").addClass('fa-angle-down'); 
         // $(this).setAttribute("id", "fa_angle_down");
          document.getElementById("fa_angle_up1").id = "fa_angle_down1";
       }
       else if(getid == "fa_angle_up2"){
          $(".toggle_part2").toggle("slow");
          $(this).removeClass("fa-angle-up").addClass('fa-angle-down'); 
         // $(this).setAttribute("id", "fa_angle_down");
          document.getElementById("fa_angle_up2").id = "fa_angle_down2";
       }
       else if(getid == "fa_angle_up3"){
          $(".toggle_part3").toggle("slow");
          $(this).removeClass("fa-angle-up").addClass('fa-angle-down'); 
         // $(this).setAttribute("id", "fa_angle_down");
          document.getElementById("fa_angle_up3").id = "fa_angle_down3";
       }
       else if(getid == "fa_angle_up4"){
          $(".toggle_part4").toggle("slow");
          $(this).removeClass("fa-angle-up").addClass('fa-angle-down'); 
         // $(this).setAttribute("id", "fa_angle_down");
          document.getElementById("fa_angle_up4").id = "fa_angle_down4";
       }
       else if(getid == "fa_angle_up5"){
          $(".toggle_part5").toggle("slow");
          $(this).removeClass("fa-angle-up").addClass('fa-angle-down'); 
         // $(this).setAttribute("id", "fa_angle_down");
          document.getElementById("fa_angle_up5").id = "fa_angle_down5";
       }
       else if(getid == "fa_angle_up6"){
          $(".toggle_part6").toggle("slow");
          $(this).removeClass("fa-angle-up").addClass('fa-angle-down'); 
         // $(this).setAttribute("id", "fa_angle_down");
          document.getElementById("fa_angle_up6").id = "fa_angle_down6";
       }
       else if(getid == "fa_angle_up7"){
          $(".toggle_part7").toggle("slow");
          $(this).removeClass("fa-angle-up").addClass('fa-angle-down'); 
         // $(this).setAttribute("id", "fa_angle_down");
          document.getElementById("fa_angle_up7").id = "fa_angle_down7";
       }
       else if(getid == "fa_angle_up8"){
          $(".toggle_part8").toggle("slow");
          $(this).removeClass("fa-angle-up").addClass('fa-angle-down'); 
         // $(this).setAttribute("id", "fa_angle_down");
          document.getElementById("fa_angle_up8").id = "fa_angle_down8";
       }
       else if(getid == "fa_angle_up9"){
          $(".toggle_part9").toggle("slow");
          $(this).removeClass("fa-angle-up").addClass('fa-angle-down'); 
         // $(this).setAttribute("id", "fa_angle_down");
          document.getElementById("fa_angle_up9").id = "fa_angle_down9";
       }
       else if(getid == "fa_angle_up10"){
          $(".toggle_part10").toggle("slow");
          $(this).removeClass("fa-angle-up").addClass('fa-angle-down'); 
         // $(this).setAttribute("id", "fa_angle_down");
          document.getElementById("fa_angle_up10").id = "fa_angle_down10";
       }
       else if(getid == "fa_angle_up11"){
          $(".toggle_part11").toggle("slow");
          $(this).removeClass("fa-angle-up").addClass('fa-angle-down'); 
         // $(this).setAttribute("id", "fa_angle_down");
          document.getElementById("fa_angle_up11").id = "fa_angle_down11";
       }
       else if(getid == "fa_angle_up12"){
          $(".toggle_part12").toggle("slow");
          $(this).removeClass("fa-angle-up").addClass('fa-angle-down'); 
         // $(this).setAttribute("id", "fa_angle_down");
          document.getElementById("fa_angle_up12").id = "fa_angle_down12";
       }
       else{
        
          if(getid == "fa_angle_down"){

            $(".toggle_part").toggle("slow");
            $(this).removeClass("fa-angle-down").addClass('fa-angle-up');
            //$(this).setAttribute("id", "fa_angle_up");
            document.getElementById("fa_angle_down").id = "fa_angle_up";
          }
          else if(getid == "fa_angle_down1"){
             $(".toggle_part1").toggle("slow");
            $(this).removeClass("fa-angle-down").addClass('fa-angle-up');
            //$(this).setAttribute("id", "fa_angle_up");
            document.getElementById("fa_angle_down1").id = "fa_angle_up1"; 
          }
          else if(getid == "fa_angle_down2"){
             $(".toggle_part2").toggle("slow");
            $(this).removeClass("fa-angle-down").addClass('fa-angle-up');
            //$(this).setAttribute("id", "fa_angle_up");
            document.getElementById("fa_angle_down2").id = "fa_angle_up2"; 
          }
          else if(getid == "fa_angle_down3"){
             $(".toggle_part3").toggle("slow");
            $(this).removeClass("fa-angle-down").addClass('fa-angle-up');
            //$(this).setAttribute("id", "fa_angle_up");
            document.getElementById("fa_angle_down3").id = "fa_angle_up3"; 
          }
          else if(getid == "fa_angle_down4"){
             $(".toggle_part4").toggle("slow");
            $(this).removeClass("fa-angle-down").addClass('fa-angle-up');
            //$(this).setAttribute("id", "fa_angle_up");
            document.getElementById("fa_angle_down4").id = "fa_angle_up4"; 
          }
          else if(getid == "fa_angle_down5"){
             $(".toggle_part5").toggle("slow");
            $(this).removeClass("fa-angle-down").addClass('fa-angle-up');
            //$(this).setAttribute("id", "fa_angle_up");
            document.getElementById("fa_angle_down5").id = "fa_angle_up5"; 
          }
           else if(getid == "fa_angle_down6"){
             $(".toggle_part6").toggle("slow");
            $(this).removeClass("fa-angle-down").addClass('fa-angle-up');
            //$(this).setAttribute("id", "fa_angle_up");
            document.getElementById("fa_angle_down6").id = "fa_angle_up6"; 
          }
           else if(getid == "fa_angle_down7"){
             $(".toggle_part7").toggle("slow");
            $(this).removeClass("fa-angle-down").addClass('fa-angle-up');
            //$(this).setAttribute("id", "fa_angle_up");
            document.getElementById("fa_angle_down7").id = "fa_angle_up7"; 
          }
           else if(getid == "fa_angle_down8"){
             $(".toggle_part8").toggle("slow");
            $(this).removeClass("fa-angle-down").addClass('fa-angle-up');
            //$(this).setAttribute("id", "fa_angle_up");
            document.getElementById("fa_angle_down8").id = "fa_angle_up8"; 
          }
           else if(getid == "fa_angle_down9"){
             $(".toggle_part9").toggle("slow");
            $(this).removeClass("fa-angle-down").addClass('fa-angle-up');
            //$(this).setAttribute("id", "fa_angle_up");
            document.getElementById("fa_angle_down9").id = "fa_angle_up9"; 
          }
          else if(getid == "fa_angle_down10"){
             $(".toggle_part10").toggle("slow");
            $(this).removeClass("fa-angle-down").addClass('fa-angle-up');
            //$(this).setAttribute("id", "fa_angle_up");
            document.getElementById("fa_angle_down10").id = "fa_angle_up10"; 
          }
          else if(getid == "fa_angle_down11"){
             $(".toggle_part11").toggle("slow");
            $(this).removeClass("fa-angle-down").addClass('fa-angle-up');
            //$(this).setAttribute("id", "fa_angle_up");
            document.getElementById("fa_angle_down11").id = "fa_angle_up12"; 
          }
          else if(getid == "fa_angle_down12"){
             $(".toggle_part12").toggle("slow");
            $(this).removeClass("fa-angle-down").addClass('fa-angle-up');
            //$(this).setAttribute("id", "fa_angle_up");
            document.getElementById("fa_angle_down12").id = "fa_angle_up12"; 
          }
       }
//       alert(res[1]);
    });


//Bell Notification Dropdown js 

//     var main = function() {
//   $('.notification').click(function() {
//     $('.dropdown-menu1').toggle(); 
//   });
 
  
// }; 
// $(document).ready(main);

$('.notification').click( function(event){
    event.stopPropagation();
    $('.dropdown-menu1').toggle();
});

$(document).click( function(){
    $('.dropdown-menu1').hide();
});


// chat hover active change
      $(document).ready(function() {
            $(".chat_list").click(function () {
                $(".chat_list").removeClass("active_chat");
                // $(".tab").addClass("active"); // instead of this do the below 
                $(this).addClass("active_chat");   
});
});

// Icon dropdown

// $('.profile_name').click( function(event){
//     event.stopPropagation();
//     $('.dropdown-menu').toggle();
// });

// $(document).click( function(){
//     $('.dropdown-menu').hide();
// });


