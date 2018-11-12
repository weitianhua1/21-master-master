// var img4=document.querySelector('#images>a:nth-child(4)');
// var img4=document.getElementById('images').children[4];
// var img4=document.getElementsByClassName('hiddenImg')[3];
// var img4=document.getElementsByTagName('a')[4];

// console.log(img4);

// img4.style.dispaly="block";
// img0.style.dispaly="none";

var imagesA=document.getElementById("images").children;
console.log(imagesA);

// var img4=document.getElementById('images').children[4];
// img4.style.display="block";

// var img0=document.getElementsByClassName('displayImg')[0];
// img0.style.display="none";

var currentNo=0;

function changeImg(){
    for(var i=0;i<imagesA.length;i++){
        imagesA [i].className="hiddenImg";
        console.log(imagesA[i]);
    }

    imagesA[currentNo].className="displayImg";
    if(currentNo<7) currentNo++;
    else{
        currentNo=0;
    }
console.log(currentNo);
}
var timer=window.setInterval(changeImg,1000)
function stopChange (){
    window.clearInterval(timer);
}
function startChange(){
    timer=window.setInterval(changeImg,1000);
}

var imagesDiv=document.getElementById("images");
console.log(imagesDiv);
imagesDiv.addEventListener('mouseover',stopChange);
imagesDiv.addEventListener('mouseout',startChange);
