var mySlides = new Array();
mySlides[1] = new Image();
mySlides[2] = new Image();
mySlides[3] = new Image();
mySlides[4] = new Image();

mySlides[1].src = "/images/audi_logo.png";
mySlides[2].src = "/images/merc_logo.png";
mySlides[3].src = "/images/seat_logo.png";
mySlides[4].src = "/images/vw_logo.png";

var myCaptions = new Array();
myCaptions[1] = "This is the logo of Audi Automotive Group";
myCaptions[2] = "This is the logo of Mercedes-Benz Automotive Group";
myCaptions[3] = "This is the logo of Seat Automotive Group";
myCaptions[4] = "This is the logo of Volkswagen Automotive Group";

var slidenumber = 1;
var totalslides = mySlides.length - 1;

function showSlide(direction) {
    if (direction == "next") {
        (slidenumber == totalslides) ? slidenumber = 1 : slidenumber++;
    } else {
        (slidenumber == 1) ? slidenumber = totalslides : slidenumber--;
    }
    if (document.images) {
        document.slideframe.src = mySlides[slidenumber].src;
        document.getElementById("caption").innerHTML = myCaptions[slidenumber];
        document.slidecontrols.currentslide.value = slidenumber;
    }
}

var myAds = new Array();
myAds[1] = new Image();
myAds[2] = new Image();
myAds[3] = new Image();
myAds[4] = new Image();

myAds[1].src = "/images/audi_logo.png";
myAds[2].src = "/images/merc_logo.png";
myAds[3].src = "/images/seat_logo.png";
myAds[4].src = "/images/vw_logo.png";

var myTimings = new Array();
myTimings[1] = 3000;
myTimings[2] = 1500;
myTimings[3] = 1500;
myTimings[4] = 1500;

var mySites = new Array();
mySites[1] = "https://www.audi.com/en.html";
mySites[2] = "https://www.mercedes-benz.co.uk/";
mySites[3] = "https://www.seat.co.uk/";
mySites[4] = "https://www.volkswagen.co.uk/";

var adnumber = 0;
var totalads = myAds.length - 1;
var timerID = "";

function startBanner() {
    adnumber = 0;
    showAd();
}
function showAd() {
    if (document.images) {
        if (document.myBanner.complete) {
            adnumber++;
            (adnumber > totalads) ? adnumber = 1 : adnumber = adnumber;
            document.myBanner.src = myAds[adnumber].src;
        }
        timerID = setTimeout("showAd()", myTimings[adnumber]);
    }
}
function goSite() {
    clearTimeout(timerID);
    window.location.href = mySites[adnumber];
}
