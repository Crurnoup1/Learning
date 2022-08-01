
let name = 'Kacper';
let lastName = 'Sokołowski';
console.log(name + ' ' + lastName);

name='Jan';
lastName='Kowalski';
console.log(name + ' ' + lastName);

let person1 = {
    name: 'Kacper',
    lastName: 'Sokołowski'
};
console.log(person1.name + ' ' + person1.lastName);

let person2 = {
    name: 'Jan',
    lastName: 'Kowalski'
    
};

console.log(person2.name + ' ' + person2.lastName)


let bool = 5 > 10;
console.log(bool);

let bool2 = 1 === 1;
console.log(bool2);

let bool3 = 1 !== 2;
console.log(bool3);

let bool4 = 'Kacper' === 'Kacper'
console.log(bool4);

let isBiggerThan10 = (number) => {
    if(number > 10) {
        console.log('liczba jest wieksza od 10')
    }

   else {
        console.log('Liczba nie jest wieksza od 10');
}
}

isBiggerThan10(20);

let wyliczanie = (number) => {

    if (number > 3) {
        console.log('git')
    } else {
        console.log('ajajaj')
    }
    
    }
    
    wyliczanie(10)

    let circleLength = (radius) => {
        console.log(2*radius*3.14);
    };
    
    for(let i = 1; i <= 20; i++) {
        circleLength(i);
    };



    let activeSlideNumber= 1;

let arrowLeft = document.querySelector('#arrow-left');
let arrowRight = document.querySelector('#arrow-right');

let hideActiveSlide = () => {
    let activeElement = document.querySelector('.active');
    activeElement.classList.remove('active');
};

let showSlide = (slideNumber) => {
    hideActiveSlide(); 
    let newActive = document.querySelector(`#slide${slideNumber}`)
    newActive.classList.add('active')
    console.log(newActive)
}
let showNextSlide = () => {
  if(activeSlideNumber === 3) {
    activeSlideNumber = 1;
    showSlide(activeSlideNumber);
  } else {
    activeSlideNumber++
    showSlide(activeSlideNumber);
  }
};
let showPreviousSlide = () => {
    if(activeSlideNumber === 1) {
        activeSlideNumber = 3; 
    } else {
        activeSlideNumber = activeSlideNumber -1;
    }
    showSlide(activeSlideNumber);
} 

for(let i = 1; 1 <=3; i++) {
    let showSlideI = () => {
        activeSlideNumber = i;
        showSlide(i);

    };
    document.querySelector('#dot'+i).addEventListener('click', showSlideI);
}

arrowRight.addEventListener('click', showNextSlide);
arrowLeft.addEventListener('click',  showPreviousSlide)


function translatemors() {
    if (text.value == '123') {
        mors.value = 'abc'
    } else{
        mors.value = 'pierdol sie'
    }
}


// tlumacz morsa

const text = document.querySelector('#text')
const mors = document.querySelector('#mors')
const klik = document.querySelector('#klik')
const TABLICA_ZNAKOW = {  
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-",
    " ": " / "
};

klik.addEventListener('click', (e) => {
    translatemors()
}) 
function translatemors() {
    let wynik = '' 
    let tekst = text.value
    Array.from(tekst).forEach(litera => {
        let odpowiednik = TABLICA_ZNAKOW[litera]
        wynik+=odpowiednik+" "
    })
    mors.value = wynik
}


// tlumacz morsa


let person = {
    '0':'eryk',
    '1': 20
};

console.log(person[1])


var b = 12
b += 3
console.log(b)


// Sprawdzanie długości danego wyrazu

var firstNameLength= 0;
var firstName = "Eryk";

firstNameLength = firstName.length;

console.log(firstNameLength)


// sprawdzanie ktorejs litery z kolei

var firstName = "Eryk";
var firstLetterOfFirstName = firstName[0]

console.log(firstLetterOfFirstName)


// działanie Array

console.log(Array.from('siema'))

// liczenie

var owoce = ['Jablko', 'banan'];
console.log(owoce.length);
var pierwszy = owoce[0];
console.log(pierwszy)
var ostatni = owoce[owoce.length - 1];
console.log(ostatni)

// branie liter od końca

var firstName ="Eryk";

var firstNameLastLetter = firstName [firstName.length - 1]

console.log(firstNameLastLetter)

// prosta funkcja
function wordBlanks (myNoun, myAjective, myVerb, myAdverb) {
    var resault="";
    resault += "The " + myAjective + " " + myNoun + " " + myVerb + " to the store"
    return resault;
}

console.log(wordBlanks("dog", "big", "ran", "quickly"));

// tworzenie podwojnych Array

var ourArray = [["the universe", 42], ["everything", 101010]];

var myArray = [["Bulls", 23],["White Sox", 45]]

// wyszukiwanie indexów Array

var ourArray = [50,60,70];
var ourData = ourArray[0];

var myArray = [50,60,70];
var myData = myArray[0]
console.log(myData)

// nadpisywanie wartosci Array

var ourArray = [18,64,99];
ourArray[1] = 45;

var myArray = [13,45,52]
myArray[0] = 18
console.log(myArray)

// wybieranie poszczególnych bracketów 

var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

var myData = myArray[2] [1];
console.log(myData)

// array push

var ourArray = ["Stimpson", "J", "cat"];
ourArray.push(["happy","joy"]);

var myArray = [["John", 23], ["cat",2]];

myArray.push(["dog", 3])
console.log(myArray)

//Usuwanie ostatniego elementu z array (.pop)

var ourArray = [1,2,3];
var removedFromOurArray = ourArray.pop();

var myArray = [["John", 23], ["cat", 2]];

var removedFromMyArray = myArray.pop();

console.log(myArray)


//usuwanie/dodawanie pierwszego elementu array

var ourArray = ["Stimpson", "J", ["cat"]];
ourArray.shift(); //usuwanie pierwszego
ourArray.unshift("Happy"); //dodawanie w miejsce pierwszego
console.log(ourArray)

var myArray = [["John", 23], ["dog",3]];
myArray.shift()

myArray.unshift(["Paul", 35]);

console.log(myArray)

// argumenty w funkcjach 

function ourFunctionWithArgs(a, b) {
    console.log(a-b);
}
ourFunctionWithArgs(10, 5);

function functionWithArgs(a, b) {
    console.log(a + b);
}

functionWithArgs(10, 5)

// 

var myGlobal = 10;

function fun1() {
    
}

oopsGlobal = 5;



function fun2() {
    var output= "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
        
    }
    console.log(output)
}

// działanie var dla funkcji (jeżeli var znajduje sie w srodku funkcji bedzie on dostepny tylko dla tej danej funkcji a nie poza nia)
function myLocalScope() {
    var myVar = 5;
    console.log(myVar);
}
myLocalScope();

// priorytet ma nie var globalny a lokalny czyli taki ktory jest przykładowo wpisany w funkcje

var outerWear = "T-Shirt"; //var globalny

function myOutfit() {
    var outerWear = "sweater";  //var lokalny

    return outerWear;
}

console.log(myOutfit());

function minusSeven(num) {
    return num - 7;
}

console.log(minusSeven(10))

function timesFive(num) {
    return num * 5;
}

console.log(timesFive(5));

// Dany var moze zostać określony jako wynik stworzonej wczesniej funkcji
var processed = 0;

function processArg(num) {
    return (num + 3) / 5;
}

processed = processArg(7);

console.log(processed)

// edytowanie funkcji

function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();
}

var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

//boolean
function welcomeToBooleans() {
    return false;
}

// funkcja oceniania prawdy

function ourTrueOrFalse(isItTrue) {
    if (isItTrue) {
        return "Yes, it's true";
    }
    return "No, it's false";
}

function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return "Yes,that was true"
    };
         return "No,that was false";
}
console.log(trueOrFalse(true));

// sprawdzanie czy cos jest równe

function testEqual(val) {
    if (val == 12) {
        return "Equal";
    }
    return "Not Equal";
}

console.log(testEqual(10))

//  === nie konwertuje cyfer w kropkach "7"
function testStrict(val) {
    if (val === 7) {
        return "Equal";
    }
    return "Not Equal";
}

console.log(testStrict(7))

function compareEquality(a, b) {
    if (a === b) {
        return "Not Equal";
    }
}

console.log(compareEquality(10, "10"));


// Zastosowanie != (sprawdza czy dana rzecz nie jest rowna)
function testNotEqual(val) {
    if (val != 99) {
        return "Not Equal";
    }
    return"Equal";
}

console.log(testNotEqual(2));

// Funkcja cos jest wieksze od czegos

function testGreatherThan(val) {
    if (val > 100) {
        return "More Then 100"};
    if (val > 10) {
        return "more then 10"};
        
    return "it's less or equal ten";
}

console.log(testGreatherThan(10))

// dodawanie &&(and) aby skrocic kod

function testLogicalAnd(val){
    if (val <= 50 && val >= 25) {
        return "Yes";
    }
    return "No";
}

console.log(testLogicalAnd(30));

// dodawanie ||(or) tworzenie przedziału liczbowego

function testLogicalOr(val) {
    if (val <10|| val> 20){
        return "outside";
    }
    return "inside";
}
console.log(testLogicalOr(15));

// zasada używansia if /if else / else

function testSize(num) {
    if (num < 5) {
        return "tiny"
    } else if (num < 10) {
        return "Small"
    } else if (num < 15) {
        return "Medium"
    } else if (num < 20) {
        return "Large"
    } else {
        return "Huge"
    }
}

console.log(testSize(19));

// gra w golfa
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey"]
function golfScore(par, strokes) {
    if(strokes == 1) {
        return names[0]
    } else if (strokes <= par - 2){
        return names[1]
    } else if (strokes = par - 1){
        return names[2]
    } else if (strokes = par){
        return names[3]
    } else if (strokes = par + 1){
        return names[4]
    } else if (strokes = par + 2){
        return names[5]
    } else if (strokes <= par + 3){
        return names[6]
    }
}

console.log(golfScore(5, 4));

// Przypadki i przypisane do nich odpowiedzi

function caseInSwitch(val) {
    var anwser = "";
    switch(val) {
        case 1:
            anwser = "alpha"
            break;
        case 2:
            anwser = "beta"
            break;
        case 3:
            anwser = "gamma"
            break;
        case 4:
            anwser = "delta"
            break;
        
    }
    return anwser;
}
console.log(caseInSwitch(4))

// wiele przypadków przypisanych do tej samej odpowiedzi 
function sequentialSize (val) {
    var anwser = ""
    switch(val) {
        case 1:
        case 2:
        case 3:
            anwser = "Low";
            break;
        case 4:
        case 5:
        case 6:
            anwser = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            anwser = "High";
            break;
    }
    return anwser;
}
console.log(sequentialSize(9))

//tworzenie case

function chainToSwitch(val) {
    var anwser = "";

   switch(val) {
    case "bob":
        anwser = "Marley"
        break;
    case 42:
        anwser ="The Anwser";
        break;
    case 1:
        anwser= "There is no #1";
        break;
    case 99:
        anwser = "Missed me by this much!";
        break;
    case 7:
        anwser ="Ate Nine"
        break;

   } 
   return anwser
}
console.log(chainToSwitch(99))

// zamiana funkcji if/esle na zwykle return
function isBigger(a, b)
    if (a < b); {
    return true;
}; else {
    return false;
}
function isLess(a, b){
    return a < b;
}
console.log(isLess(10, 15))

// logicznosc matematyczna
function abTest(a, b) {
    if (a < 0 || b < 0) {
        return undefined;
    }

    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
console.log(abTest(-2,2));

// Black Jack

var count = 0;

function cc(card) {
    switch(card) {
        case 2:
        case 3:
        case 4:      
        case 5:
        case 6:     
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "A":
            count--;
            break; 
    }

    var holdbet = 'Hold'
    if (count > 0 ) {
        holdbet = 'Bet'
    }

    return count + " " + holdbet;
}
    cc(2); cc("K"); cc(10); cc('K'); cc('A');
    console.log(cc(4))

    //tworzenie obiektów

    var ourDog = {
        "name": "Camper",
        "legs": 4,
        "tails": 1,
        "friends":["everything"]
    };
    
    
    
    var myDog = {
        "name": "Quincy",
        "legs": 3,
        "tails": 2,
        "friends": []
    };
    
    console.log(myDog)

    // odczytywanie danej wytycznej z var
    var testObj = {
        "hat": "ballcap",
        "shirt": "jersey",
        "shoes": "cleats"
    
    };
    
    var hatValue = testObj.hat;
    var shirtValue = testObj.shirt;
    
    console.log(hatValue)

    // odczytywanie z bracketami
    var testObj = {
        "an entree": "hamburger",
        "my side" : "veggies",
        "the drink": "water"
    
    };
    
    var entreeValue = testObj ["an entree"];
    var drinkValue = testObj ['the drink'];
    
    console.log(drinkValue)

    // 

    var testObj = {
        12: "namath",
        16: "Montana",
        19: "Unitas"
    };
    
    var playerNumber = 16;
    var player = testObj[playerNumber];
    
    console.log(player)

    // jeżeli chciałbym usunąc przykładowo "namath" mógłbym wpisac 
    
    delete testObj[12];

    // Funkcja ktora daje odpowiednik

    function phoneticLookup(val) {
        var resault = "";
    
        var lookup = {
            "alpha": "Adams",
            "bravo": "Boston",
            "charlie": "Chicago",
            "delta" : "Denver",
            "echo" : "Easy",
            "foxtrot" : "frank"
        };
        resault = lookup[val];
    
        return resault
    }
    
    
    console.log(phoneticLookup("alpha"));

    // 

    var myObj = {
        gift: "pony",
        pet: "kitten",
        bed: "sleigh"
    };
    
    function checkObj(checkProp) {
        if(myObj.hasOwnProperty(checkProp))  {
            return myObj[checkProp]
        } else {
            return "Not Found"
        }
    }
    console.log(checkObj("gift"));


    // Szukanie obiektu w innych obiektach

    var myStorage = {
        "car": {
            "inside": {
                "glove box": "maps",
                "passenger seat":"crumbs"
            },
            "outside": {
                "trunk": "jack"
            }
        }
    };
    
    var gloveBoxContents = myStorage.car.inside["glove box"];
    
    console.log(gloveBoxContents)

    // wybieranie poszczególnych list przedmiotów

    var myPlants = [
        {
            type : "flowers",
            list: [
                "rose",
                "tulip",
                "dandelion"
            ]
        },
            
        {   type: "trees",
        list:[
            "fir",
            "pine",
            "birch"
            ]
        },
    
    ];
    
    var secondTree = myPlants[2].list[1];
    
    console.log(secondTree)
    
    // record update function

    var collection = {
        "2548": {
            "album": "Slippery When Wet",
            "artist": "Bon Jovi",
            "tracks": [
                "Let It Rock",
                "You Give Love a Bad Name"
            ]
        },
        "2468": {
            "album": "1999",
            "artist": "Prince",
            "tracks": [
                "1999",
                "Little Red Corvette"
            ]
        },
        "1245": {
            "artist": "Robert Palmer",
            "tracks": [ ]
        },
        "5439":{
            "album": "ABBA Gold"
        }
    };
    var collectionCopy = JSON.parse(JSON.stringify(collection));
    
    function updateRecords(id, prop, value) {
    if (value ==="") {
        delete collection[id][prop];
    } else if (prop === "tracks") {
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    } else {
        collection[id][prop] = value;
    }
        return collection
    }
    
    console.log(updateRecords(5439, "artist", "ABBA"));

    // tworzenie petli z while
   
    var myArray = [];
var i = 0;
while(i < 10) {
    myArray.push(i);
    i++;
}

console.log(myArray);