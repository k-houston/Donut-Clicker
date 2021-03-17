let donutCount = 0;

load();

function load() {
    addEventListeners();
}

function addEventListener() {
    document.getElementById("mainButton").addEventListener("click", buttonClick);
    document.getElementById("MainButton").addEventListener("click", buttonClick);
    document.getElementById("MainButton").addEventListener("click", buttonClick);

    document.getElementById("Donut_Count").innerHTML = donutCount;
}

function mainButtonClick() {
    document.getElementById("Donut_Count").innerHTML = ++donutCount;
}

