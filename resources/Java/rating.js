const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
function Addrating(){
const x = new Date();
var date = x.getDate();
var month = months[x.getMonth()];
var year = x.getFullYear();
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
const a = document.getElementById("review").value;
const b = document.getElementById("name").value;
const c = document.getElementById("email").value;
if(a!=""&&b!=""&&c!=""&&c.includes('@')){
document.getElementById("rating").innerHTML+=`<div style="display: flex;gap: 20px; margin-top: 40px;" >
                <div class="N_img" style="height:150px;width: 150px;border:none;"><img src="../resources/Imgs/Indivdual Product/Review image.jpg" style="border-radius: 100px;"></div>
              <div>
                <div style="font-size: 30px; color: black;">
                  ★ ★ ★ ☆ ☆ 
                </div>
              <div class="New_subtitle" style="margin-top: 10px;margin-bottom: 3px;color: #555;font-size: 12px;"><strong>
              `+b+`, `+date+dateindex+` `+month+` `+year+`
              </strong></div>
              <div class="New_price" style="margin-top: 20px;color: #000000;font-size: 18px;max-width: 600px;"><strong>
              `+a+`
                </strong></div>
              </div></div>`;
}
else{
        if(b==""){alert("Please enter Name");}
        else if(c==""||!c.includes('@')){alert("Please enter Valid email");}
        else{alert("Enter the Review");}
}}