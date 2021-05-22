function openContent(evt, contentId) {
  // Declare all variables
  var i, tabcontent, tablinks, tabcontentright;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

 tabcontentright = document.getElementsByClassName("tabcontentright");
  for (i = 0; i < tabcontentright.length; i++) {
    tabcontentright[i].style.display = "none";
  }
  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tabcontent.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(contentId).style.display = "block";
  evt.currentTarget.className += " active";
}

// ------------------------------------------
function openContenttab(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("vtabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("vtablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
//--------------------------------------------------
function openContenttab1(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("htabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("htablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it



document.getElementById("defaultOpen").click();

$(document).ready(function() {
      $("#Feed").css('display','block');
});

$(document).on('click','.tablinks',function(){
  var getid = $(this).attr('id');
  if(getid == "feed_tab"){
    $('#feed_tab').addClass('active');
    $('#event_tab').removeClass('active');
  }
  else if(getid == "event_tab"){
    $('#event_tab').addClass('active');
    $('#feed_tab').removeClass('active');
  }
  
});



//My event page script 
document.getElementById("defaultOpen").click();

$(document).ready(function () {
  $("#Joined").css("display", "block");
});

$(document).on("click", ".tablinks", function () {
  var getid = $(this).attr("id");
  if (getid == "joined_tab") {
    $("#joined_tab").addClass("active");
    $("#created_tab").removeClass("active");
  } else if (getid == "created_tab") {
    $("#created_tab").addClass("active");
    $("#joined_tab").removeClass("active");
  }
});

