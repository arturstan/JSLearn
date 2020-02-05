// alert("aaaa");

// setTimeout(someAlert,2000);
// alert("ccc"); 

// console.log(randomInt(10,20));
// tabPrint();
// objTest();
window.onload = change1Paragraph;

// typeofTest();
// equalTest();
// convertTest();
// stringMethod();
destructuring();

function someAlert(){
    alert("bbb");
}

function randomInt(start, end) {
    var rnd = Math.floor(Math.random() * (end - start) + start);
    return rnd;
}

function tabPrint() {
    var tab = [0, 1, 3];
    console.log(tab);
}

function objTest() {
    var obj = {
        prop1: "a",
        prop2: 2
    }

    console.log(obj.prop1);
    delete obj.prop1;    
    console.log(obj.prop1);
    obj.prop1 = "b";
    console.log(obj.prop1);

    console.log(obj);
}

function change1Paragraph() {
    var par1 = document.getElementById("idParagraph1");
    console.log(par1.innerHTML);
    par1.innerHTML += " dopisek";
    par1.setAttribute("class", "redtext");
}

function typeofTest() {
    console.log("typeof \"a\": " + typeof "a");
    console.log("typeof 1: " + typeof 1);
    console.log("typeof 1.1: " + typeof 1.1);
    console.log("typeof {}: " + typeof {});
    console.log("typeof []: " + typeof []);
    console.log("typeof 0/0: " + typeof 0/0);
    var nan = 0/0;
    console.log("var nan = 0/0; typeof nan: " + typeof nan);

    // console.log(0/0 == Nan);    
    console.log("isNaN(0/0): " + isNaN(0/0));
    // console.log("aaaa");
    var b = NaN == NaN;
    console.log("NaN == NaN: " + b);

    console.log("typeofTest END!!!");
}

function equalTest() {
    console.log("equalTest START!!!");
    var b = 99 == "99";
    console.log("99 == \"99\": " + b);
    b = 1 == "a";
    console.log("1 == \"a\": " + b);
    b = 1 == true;
    console.log("1 == true: " + b);
    b = 2 == true;
    console.log("2 == true: " + b);
    b = 0 == false;
    console.log("0 == false: " + b);
    b = 5 == false;
    console.log("5 == false: " + b);

    b = undefined == null;
    console.log("undefined == null: " + b);

    console.log("equalTest END!!!");
}

function convertTest() {
    console.log(2 + 3);
    console.log("2" + 3);
}

function stringMethod() {
    var phrase = "Ala ma kota";
    var i = phrase.indexOf("kot");
    console.log(i);

    var phrase2 = phrase.substr(4,2);
    console.log(phrase2);
    console.log(phrase.slice(4));   
}

function destructuring() {
    var obj = { first: "Artur", last: "Stanaszek", weight: 92 };

    const { first, weight, sth } = obj;
    console.log("first: " + first);
    console.log("weight: " + weight);
    console.log("sth: " + sth);
    destructuring2(obj);
    obj.weight = 91;
    console.log("weight: " + weight);
}

function destructuring2({ first, weight}) {
    console.log("destructuring2 first: " + first);
    console.log("destructuring2 weight: " + weight);
}