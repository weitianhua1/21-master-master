// var img4=document.querySelector('#images>a:nth-child(4)');
// var img4=document.getElementById('images').children[4];
// var img4=document.getElementsByClassName('hiddenImg')[3];
// var img4=document.getElementsByTagName('a')[4];

// console.log(img4);

// img4.style.dispaly="block";
// img0.style.dispaly="none";

var imagesA = document.getElementById("images").children;
var txtList = document.querySelector(".txt-box").children;

var currentNo = 0;
const nodeLength = 8;

function changeImg() {
    for (var i = 0; i < nodeLength; i++) {
        imagesA[i].className = "hiddenImg";
        txtList[i].className = "txtItem normalColor";
    }
    imagesA[currentNo].className = "displayImg";
    txtList[currentNo].className = "txtItem heighlightColor";
    //    console.log(currentNo);
}

function leftImg() {     
    if (currentNo > 0) { currentNo--; }
    else {
        currentNo = 7;
    } 
}


function rightImg() {
    if (currentNo < 7) { currentNo++; }
    else {
        currentNo = 0;
    }  
}

var timer = window.setInterval(rightImgGo, 1000);

function stopChange() {
    window.clearInterval(timer);
    // console.log('father');
}
function startChange() {
    timer = window.setInterval(rightImgGo, 1000);
}

var sliderDiv = document.querySelector(".slider");
//console.log(imagesDiv);
sliderDiv.addEventListener('mouseover', function () {
    window.clearInterval(timer);
    // console.log('father');
});
sliderDiv.addEventListener('mouseout', function () {
    timer = window.setInterval(rightImgGo, 1000);
});

for (var i = 0; i < txtList.length; i++) {
    txtList[i].addEventListener('mouseover',function () {
        // console.log(txtList[i]);
        // console.log(this.no);
        currentNo = this.no;
        changeImg();
    });
    txtList[i].no = i;
    //    console.log( txtList[i].no);

}

function gotoImg() {
    // console.log(txtList[i]);
    // console.log(this.no);
    currentNo = this.no;
    changeImg();
}
var leftButton = document.querySelector('.leftButton');
var rightButton = document.querySelector('.rightButton');
// console.log(leftButton);

leftButton.addEventListener('click', leftImgGo);
rightButton.addEventListener('click', rightImgGo);

function leftImgGo(){
    leftImg();
    changeImg();
}

function rightImgGo(){
    rightImg();
    changeImg();
}