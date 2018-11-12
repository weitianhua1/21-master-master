var timer;
function startTimer(speed) {
    timer = window.setInterval(changeNum,1000);
}
startTimer(100);
var h2obj = document.querySelector('h2');
var imgObj=document.querySelector('h2>img');
console.log(imgObj); 
var currentNo = 1;
function changeNum() {
    if (currentNo < 8) currentNo++;
    else currentNo = 1;
    h2obj.innerHTML = '<img src="./images/0' +currentNo +'.jpg" alt=""></img>';
    // console.log(currentNo);
}
var btnObj = document.getElementById('btnObj')
function startChange() {
startTimer(500);
        btnObj.textContent = "停止";
}
function stopChange() {
    window.clearInterval(timer);
    btnObj.textContent = "启动";
}
btnObj.addEventListener('mouseover', stopChange);
btnObj.addEventListener('mouseout', startChange);
