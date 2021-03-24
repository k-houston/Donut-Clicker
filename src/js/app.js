var modal = document.getElementById("modal");
var modalTwo = document.getElementById("modalTwo");
var btn = document.getElementById("modalBtnOne");
var btnTwo = document.getElementById("modalBtnTwo");
var span = document.getElementsByClassName("close")[0];
var spanTwo = document.getElementsByClassName("closeTwo")[0];

let gameDonut = new Donut();

btn.onclick = function() {
    modal.style.display = "block";
  }

  btnTwo.onclick = function() {
    modalTwo.style.display = "block";
  }
span.onclick = function() {
    modal.style.display = "none";
}

spanTwo.onclick = function() {
    modalTwo.style.display = "none";
}

load();

function load() {
    addEventListeners();
}

function addEventListeners() {
    document.getElementById("Main-Click__Button").addEventListener("click", mainButtonClick);
    document.getElementById("AutoClickerBuy-Click__Button").addEventListener("click", buyAutoClicker);
    document.getElementById("MultiplierBuy-Click__Button").addEventListener("click", buyClickMultipler);
    document.getElementById("Restart-Click__Button").addEventListener("click", restartButtonClick);

    document.getElementById("Donut-Count").innerHTML = "Donut Count: " + gameDonut.getDonutCount();
    document.getElementById("Click-Value").innerHTML = "Click Value: " + gameDonut.getCurrentClickValue();
    document.getElementById("AutoClicker-Cost").innerHTML = "Cost: " + gameDonut.getAutoClickerCost();
    document.getElementById("Multiplier-Cost").innerHTML = "Cost: " + gameDonut.getClickMultiplierCost();
}

// Click
function mainButtonClick() {
    gameDonut.addDonutCount(gameDonut.getCurrentClickValue());

    checkDonutCount();
}

// Click
function buyClickMultipler() {
    gameDonut.addMultiplierCount();
    document.getElementById("Multiplier-Count").innerHTML = "Owned Multiplier Count: " + gameDonut.getClickMultiplierCount();
    gameDonut.addDonutCount(-(gameDonut.getClickMultiplierCost()));
    gameDonut.updateClickMultiplierCost();
    gameDonut.updateCurrentClickValue();

    checkDonutCount();
}

// Click
function buyAutoClicker() {
    StartAutoClick();

    gameDonut.addAutoClicker();
    document.getElementById("AutoClicker-Count").innerHTML =  "Owned AutoClicker Count: " + gameDonut.getAutoClickerCount();
    gameDonut.addDonutCount(-(gameDonut.getAutoClickerCost()));
    gameDonut.updateAutoClickerCost();

    checkDonutCount();
}

function checkDonutCount() {
    if (gameDonut.getDonutCount() >= gameDonut.getAutoClickerCost()) {
        document.getElementById("AutoClickerBuy-Click__Button").disabled = false;
    } 
    else {
        document.getElementById("AutoClickerBuy-Click__Button").disabled = true;
    }

    if (gameDonut.getDonutCount() >= gameDonut.getClickMultiplierCost()) {
        document.getElementById("MultiplierBuy-Click__Button").disabled = false;
    } 
    else {
        document.getElementById("MultiplierBuy-Click__Button").disabled = true;
    }

    updateHtmlElements();
}

function updateHtmlElements() {
    document.getElementById("Donut-Count").innerHTML = "Donut Count: " + gameDonut.getDonutCount().toFixed(2);
    document.getElementById("Click-Value").innerHTML = "Click Value: " + gameDonut.getCurrentClickValue().toFixed(2);
    document.getElementById("AutoClicker-Cost").innerHTML = "Cost: " + gameDonut.getAutoClickerCost().toFixed(2);
    document.getElementById("Multiplier-Cost").innerHTML = "Cost: " + gameDonut.getClickMultiplierCost().toFixed(2);
}

function StartAutoClick() {
    window.setInterval(() => {
        mainButtonClick();
    }, 1000);
}

function restartButtonClick() {
     window.location.reload();
}
