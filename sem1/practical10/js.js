var vwLogoImg = new Image;
var audiLogoImg = new Image;
var mercLogoImg = new Image;
var seatLogoImg = new Image;

vwLogoImg.src = "/images/vw_logo.png";
audiLogoImg.src = "/images/audi_logo.png";
mercLogoImg.src = "/images/merc_logo.png";
seatLogoImg.src = "/images/seat_logo.png";

function rollOn(brand) {
    document.getElementById("imageText").innerHTML = 
        `This is the ${brand} logo <br> 
        Click to go to their website`;
}
function rollOff() {
    document.getElementById("imageText").innerHTML = "";
}