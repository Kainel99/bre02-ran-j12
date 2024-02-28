function selectColor(event) {
    let colorBox = event.target;
    let color = colorBox.style.backgroundColor;

    sessionStorage.setItem("selectedColor", color);
}

function getSelectedColor() {
    if (sessionStorage.getItem("selectedColor")) {
        return sessionStorage.getItem("selectedColor");
    }

    return null;
}

function loadPalette(palette) {
    let colors = palette;

    // le code de l'étape 1 se passe ici
    let divs = document.querySelectorAll(`header > div`);
    for (let i = 0; i < divs.length; i++) {
        let div = divs[i];
        div.style.backgroundColor = colors[i];
    }
}


window.addEventListener("DOMContentLoaded", function() {
    loadPalette(["#22f6f3", "#3daf7e", "#ffffff", "#ec8236", "#a9a7ee", "#ecc606", "#f783f2", "#e89e80"]);

    // le code de l'étape 2 se passe ici
    let headerDivs = document.querySelectorAll('header > div');
    headerDivs.forEach(function(div) {
        div.addEventListener("click", selectColor);
    });
    
    // le code de l'étape 3 se passe ici
    let mainDivs = document.querySelectorAll('main > div > div');
    mainDivs.forEach(function(div) {
        div.addEventListener('click', function(event){
            let element = event.target;
              let color = getSelectedColor();
          if (event.target.style.backgroundColor) {
                    event.target.style.backgroundColor = "";
                } else {
                    event.target.style.backgroundColor = color;
                }
        });
    });
});
