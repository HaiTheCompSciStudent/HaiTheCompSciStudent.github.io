var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(255, 255, 255)",
    "rgb(255, 0, 255)",
    "rgb(0, 0, 255)",
    "rgb(0, 255, 0)"
];

var isHard = true;

startGame();

function makeItHard() {

    isHard = true;
    startGame();


}

function makeItNotHard() {

    isHard = false;
    startGame();


}

function startGame() {

    let squares = document.querySelectorAll(".square");
    let colorDisplay = document.getElementById("colorDisplay");
    let titleContainer = document.getElementById("titleContainer");
    let menuBar = document.getElementById("menuBar");
    let button = document.getElementById("resetButton");
    let easyButton = document.getElementById("easyButton");
    let hardButton = document.getElementById("hardButton");

    titleContainer.style.background = "steelblue";
    button.style.color = "steelblue";
    hardButton.style.color = "steelblue";
    easyButton.style.color = "steelblue";


    let pickedColor = generateRandomColor();
    let pickedColorIndex = 0
    if (isHard) {
        pickedColorIndex = Math.floor(Math.random() * 5);
    } else {
        pickedColorIndex = Math.floor(Math.random() * 2);;
    }


    colorDisplay.textContent = pickedColor;

    if (isHard) {
        for (let i = 0; i < colors.length; i++) {
            if (i === pickedColorIndex) {
                colors[i] = pickedColor;
            } else {
                colors[i] = generateRandomColor();
            }
        }
    } else {
        for (let i = 0; i < (colors.length / 2); i++) {
            if (i === pickedColorIndex) {
                colors[i] = pickedColor;
            } else {
                colors[i] = generateRandomColor();
            }
        }
    }

    if (isHard) {
        for (let i = 0; i < squares.length; i++) {
            squares[i].style.background = colors[i];
            squares[i].style.opacity = "1";

            squares[i].addEventListener("click", function assignEvent() {

                let clickedColor = this.style.background;

                if (clickedColor === pickedColor) {
                    changeColor(pickedColor, squares);
                    titleContainer.style.background = pickedColor;
                    button.style.color = pickedColor;
                    hardButton.style.color = pickedColor;
                    easyButton.style.color = pickedColor;
                                         
                } else {
                    squares[i].style.opacity = "0";
                    squares[i].removeEventListener("click", assignEvent());
                }
            });

        }
    } else {
        for (let i = 0; i < squares.length / 2; i++) {
            squares[i].style.background = colors[i];
            squares[i].style.opacity = "1";

            squares[i].addEventListener("click", function assignEvent() {

                let clickedColor = this.style.background;

                if (clickedColor === pickedColor) {
                    changeColor(pickedColor, squares);
                    titleContainer.style.background = pickedColor;
                    button.style.color = pickedColor;
                    hardButton.style.color = pickedColor;
                    easyButton.style.color = pickedColor;
                
                    for(let i = 3; i <= 5; i++){
                        squares[i].style.opacity = "0";
                    }

                } else {
                    squares[i].style.opacity = "0";
                    squares[i].removeEventListener("click", assignEvent());
                }
            });
        }

        

        if (!isHard) {
            for (let i = 3; i <= 5; i++) {
                squares[i].style.opacity = "0";
            }
        }

        if(isHard){
            for (let i = 3; i <= 5; i++) {
                squares[i].style.opacity = "1";
            }
        }
    }

    function generateRandomColor() {
        let red = Math.floor(Math.random() * 255);
        let green = Math.floor(Math.random() * 255);
        let blue = Math.floor(Math.random() * 255);

        return "rgb(" + red + ", " + green + ", " + blue + ")";
    }

    function changeColor(color, list) {

        for (let i = 0; i < list.length; i++) {
            list[i].style.background = color;
            list[i].style.opacity = "1";
        }
    }
}
