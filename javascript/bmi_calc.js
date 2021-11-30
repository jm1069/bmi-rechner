var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var male = document.getElementById("m");
var female = document.getElementById("w");
var form = document.getElementById("form");

function validateForm(){
    if(age.value=='' || height.value=='' || (male.checked=false && female.checked==false)){
        alert("Bitte alle Felder ausfüllen um BMI zu berechnen!");
        document.getElementById("submit").removeEventListener("click", countBmi);
    } else {
        countBmi();
    }
}

document.getElementById("submit").addEventListener("click", validateForm);

function countBmi(){
    var p = [age.value, height.value, weight.value];
    
    if(male.checked){
        p.push("male");
    } else if (female.checked){
        p.push("female");
    }

    form.reset();

    var bmi = Number(p[2])/(Number(p[1])/100*Number(p[1])/100);
    var result='';

    if(bmi<18.5){
        result = 'Untergewicht';
    } else if (18.5<=bmi&&bmi<=24.9) {
        result = 'Gesund';
    } else if (25<=bmi&&bmi<=29.9) {
        result = 'leichtes Übergewicht'
    } else if (30<=bmi&&bmi<=34.9) {
        result = 'Übergewicht'
    } else if (35<=bmi) {
        result = 'starkes Übergewicht'
    }   

    console.log(result) //--> Ergebnis in Console anzeigen

    var h1 = document.createElement("h1");
    var h2 = document.createElement("h2");
    var t = document.createTextNode(result);
    var b = document.createTextNode('Ihr BMI beträgt: ');
    var r = document.createTextNode(parseFloat(bmi).toFixed(1));
    h1.appendChild(t);
    h2.appendChild(b);
    h2.appendChild(r);
    document.body.appendChild(h1);
    document.body.appendChild(h2);
    document.getElementById("submit").removeEventListener("click", countBmi);
    document.getElementById("submit").removeEventListener("click", validateForm);
}

document.getElementById("submit").addEventListener("click", countBmi);