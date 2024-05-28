

var Cir = document.getElementById("Circle");
var Tri = document.getElementById("Triangle");
var Sq = document.getElementById("Square");
let DD = document.getElementById("dropDownList");

DD.addEventListener("change", selectTheColor);
// Color.addEventListener("click", selectTheColor);


function Color1(){
    let textBoxColorName = document.getElementById("WriteText").value;
    Cir.style.backgroundColor = textBoxColorName;
    Tri.style.backgroundColor = textBoxColorName;
    Sq.style.backgroundColor = textBoxColorName;
}

function selectTheColor(){
    let selectOptions = document.getElementById("dropDownList").value;
    Cir.style.backgroundColor = selectOptions;
    Tri.style.borderBottomColor = selectOptions;
    Sq.style.backgroundColor = selectOptions;
}


function changeSize(n){
    console.log("Start")
    var Cir = document.getElementById("Circle");
    console.log(Cir)
    if(n){
        Cir.width = 400;
        Cir.height += 100;
        Tri.width += 100;
        Tri.height += 100;

        console.log("hiii")
    }
    else{
        Cir.width -=20;
        Cir.height -=20;
        console.log("hello")
    }
}






