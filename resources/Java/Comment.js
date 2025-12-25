const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
function Addcomment(){
const x = new Date();
var hour=x.getHours();
var min= x.getMinutes();
var date = x.getDate();
var month = months[x.getMonth()];
var year = x.getFullYear();
if(hour<=12){
  var timeindex="am";
}else{
  var timeindex="pm";
  hour -= 12;
}
var dateindex;
  switch (date) {
    case 1:
    case 21:
    case 31:
      dateindex = "st";
      break;
    case 2:
    case 22:
      dateindex = "nd";
      break;
    case 3:
    case 23:
      dateindex = "rd";
      break;
    default:
      dateindex = "th";
  }
const random = Math.floor(Math.random() * 2) + 1;
const a = document.getElementById("commenttext").value;
const b = document.getElementById("Username").value;
const c = document.getElementById("email").value;
if(a!=""&&b!=""&&c!=""&&c.includes('@')){
document.getElementById("commentsec").innerHTML+=`<div class="team_container2"style="margin-top: 30px;">
                    <div class="team_card">
                      <div class="team_img2"><img src="../resources/Imgs/Indivudal blog/Comment `+random+`.jpg"style="border-radius: 100%;"></div>
                    </div>
                    <div class="team_par">
                      <div class="team_title">"`+a+`"</div>
                      <div class="team_subtitle">`+hour+`:`+min+timeindex+`, `+date+dateindex+` `+month+` `+year+`</div>
                    </div>
                  </div>`; 
}
else{
        if(b==""){alert("Please enter Username");}
        else if(c==""||!c.includes('@')){alert("Please enter Valid email");}
        else{alert("Enter the comment");}
}}