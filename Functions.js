let Vragen = ["Wat voor game is Undertale?", "Wanneer was Undertale uitgebracht?", "Wie is de eerste character die je personage ontmoet?", "Over je personage gesproken, hoe heet je personage?", "Wie is de 'Final Boss' van de 'Genocide Route'?", "Wie was de vorige Royal Scientist?"];
let Antwoorden = ["Een shooter-game", "Een Indie RPG", "Een Simulator", "Een clicker game", "1997", "2007", "2015", "2018", "Flowey", "Toriel", "Asgore", "sans.", "Kris", "Chara", "Frisk", "Quindle Dingle", "Papyrus", "sans.", "Asgore", "The Rock", "Spamton", "Annoying Dog", "Gaster", "Undyne"];
var vraagNummer = 1;
var vraagCorrect = 0;

function animateIntro() {
    const animateIntro = document.getElementById("Title");
    const title = "QUIZ TIME!";
    let index = 0;

    animateIntroText();

    function animateIntroText() {
        animateIntro.innerHTML = title.substring(0, index);
        index++;

        if (index <= title.length) {
            setTimeout(animateIntroText, 50);
        } else {
            setTimeout(flashBackground, 1000);
            setTimeout(fadeDone, 3500);
        }
    }
}

function animateTextDisappear() {
    const animateIntro = document.getElementById("Title");
    const text = animateIntro.innerHTML;
    if (text.length > 0) {
        animateIntro.innerHTML = text.substring(0, text.length - 1);
        setTimeout(animateTextDisappear, 50);
    } else {
        animateVraag();
    }
}

function flashBackground() {
    document.body.style.backgroundColor = "white";
    setTimeout(fadeBackground, 1000);
}

function fadeBackground() {
    document.body.style.backgroundColor = "rgb(100, 0, 0)";
}

function fadeDone() {
    var buttons = document.getElementsByClassName("afterFlash");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("hidden");
    }
}

function start() {
    var buttons = document.getElementsByClassName("afterFlash");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.add("hidden");
    }
    animateTextDisappear();
}

function animateVraag() {
    const vraagElement = document.getElementById("Vraag");
    const title = "Vraag " + vraagNummer + ":";
    let index = 0;

    animateText();

    function animateText() {
        vraagElement.innerHTML = title.substring(0, index);
        index++;

        if (index <= title.length) {
            setTimeout(animateText, 50);
        } else {
            setTimeout(VraagKlein, 100);
        }
    }
}

function VraagKlein() {
    const animateVraagKlein = document.getElementById("VraagKlein");
    const title = Vragen[vraagNummer - 1];
    let index = 0;

    animateVraagKleinText();

    function animateVraagKleinText() {
        animateVraagKlein.innerHTML = title.substring(0, index);
        index++;

        if (index <= title.length) {
            setTimeout(animateVraagKleinText, 50);
        } else {
            setTimeout(answerAppear, 100);
        }
    }
}

function answerAppear() {
    var answerButtons = document.getElementsByClassName("afterIntro");
    for (var i = 0; i < answerButtons.length; i++) {
        answerButtons[i].classList.remove("hidden");
    }
    answerTextAppear();
}

function answerTextAppear() {
    if (vraagNummer == 1) {
        document.getElementById("Answer1").innerHTML = Antwoorden[0];
        document.getElementById("Answer2").innerHTML = Antwoorden[1];
        document.getElementById("Answer3").innerHTML = Antwoorden[2];
        document.getElementById("Answer4").innerHTML = Antwoorden[3];
    } else 
        if (vraagNummer == 2) {
            document.getElementById("Answer1").innerHTML = Antwoorden[4];
            document.getElementById("Answer2").innerHTML = Antwoorden[5];
            document.getElementById("Answer3").innerHTML = Antwoorden[6];
            document.getElementById("Answer4").innerHTML = Antwoorden[7];
        }
     else 
        if (vraagNummer == 3) {
            document.getElementById("Answer1").innerHTML = Antwoorden[8];
            document.getElementById("Answer2").innerHTML = Antwoorden[9];
            document.getElementById("Answer3").innerHTML = Antwoorden[10];
            document.getElementById("Answer4").innerHTML = Antwoorden[11];
        }
    
        else 
        if (vraagNummer == 4) {
            document.getElementById("Answer1").innerHTML = Antwoorden[12];
            document.getElementById("Answer2").innerHTML = Antwoorden[13];
            document.getElementById("Answer3").innerHTML = Antwoorden[14];
            document.getElementById("Answer4").innerHTML = Antwoorden[15];
        }
        
        else 
        if (vraagNummer == 5) {
            document.getElementById("Answer1").innerHTML = Antwoorden[16];
            document.getElementById("Answer2").innerHTML = Antwoorden[17];
            document.getElementById("Answer3").innerHTML = Antwoorden[18];
            document.getElementById("Answer4").innerHTML = Antwoorden[19];
        }
        else 
        if (vraagNummer == "Final") {
            document.getElementById("Answer1").innerHTML = Antwoorden[20];
            document.getElementById("Answer2").innerHTML = Antwoorden[21];
            document.getElementById("Answer3").innerHTML = Antwoorden[22];
            document.getElementById("Answer4").innerHTML = Antwoorden[23];
    }
}

function vraagKlaar1() {
    var answerButtons = document.getElementsByClassName("afterIntro");
    for (var i = 0; i < answerButtons.length; i++) {
        answerButtons[i].classList.add("hidden");
    }

    if (vraagNummer == 1) {
        wrongAnswer()
    } else 
        if (vraagNummer == 2) {
        wrongAnswer()
        }
     else 
        if (vraagNummer == 3) {
        correctAnswer()
        }
    
    else 
        if (vraagNummer == 4) {
        wrongAnswer()
        }
        
    else 
        if (vraagNummer == 5) {
        wrongAnswer()
        }
    else 
        if (vraagNummer == "Final") {
        wrongAnswerFinal()
        }
}

function vraagKlaar2() {
    var answerButtons = document.getElementsByClassName("afterIntro");
    for (var i = 0; i < answerButtons.length; i++) {
        answerButtons[i].classList.add("hidden");
    }
    if (vraagNummer == 1) {
        correctAnswer()
    } else 
        if (vraagNummer == 2) {
        wrongAnswer()
        }
     else 
        if (vraagNummer == 3) {
        wrongAnswer()
        }
    
    else 
        if (vraagNummer == 4) {
        wrongAnswer()
        }
        
    else 
        if (vraagNummer == 5) {
        correctAnswer()
    }

    else 
        if (vraagNummer == "Final") {
        wrongAnswerFinal()
        }
}

function vraagKlaar3() {
    var answerButtons = document.getElementsByClassName("afterIntro");
    for (var i = 0; i < answerButtons.length; i++) {
        answerButtons[i].classList.add("hidden");
    }
    if (vraagNummer == 1) {
        wrongAnswer()
    } else 
        if (vraagNummer == 2) {
        correctAnswer()
        }
     else 
        if (vraagNummer == 3) {
        wrongAnswer()
        }
    
    else 
        if (vraagNummer == 4) {
        correctAnswer()
        }
        
    else 
        if (vraagNummer == 5) {
        wrongAnswer()
        }

    else 
        if (vraagNummer == "Final") {
        correctAnswerFinal()
        }
}

function vraagKlaar4() {
    var answerButtons = document.getElementsByClassName("afterIntro");
    for (var i = 0; i < answerButtons.length; i++) {
        answerButtons[i].classList.add("hidden");
    }
    if (vraagNummer == 1) {
        wrongAnswer()
    } else 
        if (vraagNummer == 2) {
        wrongAnswer()
        }
     else 
        if (vraagNummer == 3) {
        wrongAnswer()
        }
    
    else 
        if (vraagNummer == 4) {
        wrongAnswer()
        }
        
    else 
        if (vraagNummer == 5) {
        wrongAnswer()
    }

    else 
        if (vraagNummer == "Final") {
        wrongAnswerFinal()
        }
}

function wrongAnswer() {
    document.body.style.backgroundColor = "red";
    setTimeout(fadeBackground, 1000);
    animateVraagDisappear();
}

function correctAnswer() {
    document.body.style.backgroundColor = "lime";
    setTimeout(fadeBackground, 1000);
    animateVraagDisappear();
    vraagCorrect++;
}

function animateVraagDisappear() {
    const vraagElement = document.getElementById("Vraag");
    const text = vraagElement.innerHTML;
    if (text.length > 0) {
        vraagElement.innerHTML = text.substring(0, text.length - 1);
        setTimeout(animateVraagDisappear, 50);
    } else {
        if (vraagNummer <= 4) {
            vraagNummer++;
            animateVraag();
        } else
            berekenScore();
    }
}

function berekenScore() {
    const animateIntro = document.getElementById("Title");
    animateIntro.innerHTML = "Uitslag!";
    const animateVraagKlein = document.getElementById("VraagKlein");
    animateVraagKlein.innerHTML = " ";
    setTimeout(showScore, 750)
    let vraagNummer = 1
}

function showScore() {
    if (vraagCorrect == 0) {
        var animateVraagKlein = document.getElementById("VraagKlein");
        animateVraagKlein.innerHTML = "Helaas had je er 0 correct. (0%) Geeft niet. Je kon er ook -2 correct hebben.";
        showTerug()
    } else 
    if (vraagCorrect == 1) {
        var animateVraagKlein = document.getElementById("VraagKlein");
        animateVraagKlein.innerHTML = "Je had er 1 goed. (20%) Dat is beter dan geen!";
        showTerug()
        }
     else 
        if (vraagCorrect == 2) {
            var animateVraagKlein = document.getElementById("VraagKlein");
            animateVraagKlein.innerHTML = "Je had er 2 goed. (40%) Niet slecht, maar het kan beter!";
            showTerug()
        }
    
    else 
        if (vraagCorrect == 3) {
            var animateVraagKlein = document.getElementById("VraagKlein");
            animateVraagKlein.innerHTML = "Dit ging redelijk goed. Je had er 3 correct. (60%)";
            showTerug()
        }
        
    else 
        if (vraagCorrect == 4) {
            var animateVraagKlein = document.getElementById("VraagKlein");
            animateVraagKlein.innerHTML = "4 van de 5... Ik kan die perfecte score ruiken! (80%)";
            showTerug()
        }

    else
        if (vraagCorrect == 5) {
            var animateVraagKlein = document.getElementById("VraagKlein");
            animateVraagKlein.innerHTML = "Je hebt perfectie berijkt. Er is niks meer te vinden hier. (100%)";
            setTimeout(finalQuestionIntro, 2000)
        
    }
}

function finalQuestionIntro() {
    var animateVraagKlein = document.getElementById("VraagKlein");
            animateVraagKlein.innerHTML = "Maar ben je een echte fan van de game?";
            setTimeout(finalQuestionIntro2, 3000)
}

function finalQuestionIntro2() {
    var animateVraagKlein = document.getElementById("VraagKlein");
            animateVraagKlein.innerHTML = "Laten we kijken.";
            vraagNummer = "Final"
            setTimeout(finalQuestion, 2500)
}

function finalQuestion() {
    const animateIntro = document.getElementById("Title");
    animateIntro.innerHTML = "Laatste Vraag:";
    var animateVraagKlein = document.getElementById("VraagKlein");
        animateVraagKlein.innerHTML = Vragen[5];
        answerAppear()
}

function correctAnswerFinal() {
    const animateIntro = document.getElementById("Title");
    animateIntro.innerHTML = "";
    var animateVraagKlein = document.getElementById("VraagKlein");
    animateVraagKlein.innerHTML = "Dat is correct. Je weet hier wel wat van dus.";
    setTimeout (finalCalculation, 2500)
}

function finalCalculation() {
    var animateVraagKlein = document.getElementById("VraagKlein");
    animateVraagKlein.innerHTML = "Je totaalscore is nu 6/5 vragen correct..? (120%?)";
    setTimeout (goodbye, 2500)
}

function wrongAnswerFinal() {
    const animateIntro = document.getElementById("Title");
    animateIntro.innerHTML = "";
    var animateVraagKlein = document.getElementById("VraagKlein");
    animateVraagKlein.innerHTML = "Dat is incorrect. Zo dicht bij perfectie, voor je het verpest...";
    setTimeout (goodbye, 4000)
}

function goodbye() {
    var animateVraagKlein = document.getElementById("VraagKlein");
    animateVraagKlein.innerHTML = "Nou ja. We zijn hier klaar, dus laat ik maar gaan. Cya.";
    setTimeout (gone, 2500)
}

function gone() {
    var animateVraagKlein = document.getElementById("VraagKlein");
    animateVraagKlein.innerHTML = "";
    showTerug()
}

function debugVariabele() {
    document.getElementById("debug").innerHTML = "vraagNummer variabele: " + vraagNummer
    document.getElementById("debug2").innerHTML = "vraagCorrect variabele: " + vraagCorrect
}

function debugPlus1() {
    vraagNummer++
}

function debugCorrectPlus1() {
    vraagCorrect++
}

function showDebugTools() {
    var debugButtons = document.getElementsByClassName("debug");
    for (var i = 0; i < debugButtons.length; i++) {
        debugButtons[i].classList.remove("hidden");
    }
}

function hideDebugTools() {
    var debugButtons = document.getElementsByClassName("debug");
    for (var i = 0; i < debugButtons.length; i++) {
        debugButtons[i].classList.add("hidden");
    }
}

function hideAllButtons() {
    var debugButtons = document.getElementsByClassName("debug");
    for (var i = 0; i < debugButtons.length; i++) {
        debugButtons[i].classList.add("hidden");
    }

    var debugOperators = document.getElementsByClassName("debugOperator");
    for (var i = 0; i < debugOperators.length; i++) {
        debugOperators[i].classList.add("hidden");
    }

    document.getElementById("debug").innerHTML = ""
    document.getElementById("debug2").innerHTML = ""
}

function showTerug() {
    var terug = document.getElementsByClassName("terug");
    for (var i = 0; i < terug.length; i++) {
        terug[i].classList.remove("hidden");
    }
}