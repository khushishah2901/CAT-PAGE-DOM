let blubImageEl = document.getElementById("blubImage");
let catImageEl = document.getElementById("catImage");
let switchTextEl = document.getElementById("switchText");
let offBtnEl = document.getElementById("offBtn");
let onBtnEl = document.getElementById("onBtn");







function onfunction(){
blubImageEl.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
catImageEl.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
switchTextEl.textContent = "Switch on";
offBtnEl.style.background = "red";
onBtnEl.style.background = "green";
}


function offfunction(){
    blubImageEl.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    catImageEl.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    switchTextEl.textContent = "Switch off";
    offBtnEl.style.background = "grey";
    onBtnEl.style.background = "green";

}