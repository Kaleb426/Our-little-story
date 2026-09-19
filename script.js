// =======================================
// WHAT I COULDN'T SAY
// Version 0.6
// =======================================


// =======================================
// ELEMENTS
// =======================================

const photo = document.getElementById("photo");
const text = document.getElementById("text");
const letter = document.getElementById("letter");

const button = document.getElementById("startButton");

const proposalButtons =
document.getElementById("proposalButtons");

const yesBtn =
document.getElementById("yesBtn");

const noBtn =
document.getElementById("noBtn");

const bgMusic = document.getElementById("bgMusic");


// =======================================
// INTRO
// =======================================

const introMessages = [

"Hello, Doofan.",

"You look Astonishingly gorgeous.",

"Before we go any further...",

"Put on your earphones."

];


// =======================================
// STORY
// =======================================

const story = [

{
text:" This was meant to be the story page where i say something like ",
time:3000
},

{
text:"Some gifts are meant to be worn.",
time:4000
},

{
text:"This one is meant to be felt.",
time:4000
},

{
text:"But instead ...",
time:3000
},

{
text:" I want to say i'm sorry for the way i hurt you.",
time:4500
},

{
text:"I never wanted to be the reason you cried, the reason you changed, or the reason you had to walk away.....",
time:4500,
},

{ 
text:"the truth is , i tried.  Maybe not enough, but i tried with the heart i had. And thats what hurts the most.",
time:4500
},

{
text:"I hate knowing that someone that i care for deeply carried pain because of me. ",
time:5000
}

];


// =======================================
// LETTER
// =======================================

const letterParagraphs = [

"I wasn’t searching, but somehow you became the answer.",

"The moment you appeared, everything ordinary lost its meaning. ",

"I want to know everything about you....What makes you laugh, what keeps you awake at night", 
"I realy want to know what pleasures a girl like you!!!",

" i want to be the person who take's your hand and leave the party early because nothing outside of us matters anyway?",

"I wanna be your favourite distraction...",

"I want to get a reaction by play fighting with you when i'm bored.",

"I want your attention with the only intention of making you go  deliciously crazy in the best possible way .",

"I.....", 
"want to kiss you mid-sentence, short circuit your overthinking, redirect your attention to something worthy of your time (US).", 

"I want you to think of me inappropriately cause ",

" i want to write you a Letter....... NOT WITH INK",

"But with my tongue as the pen and the space between your legs as the paper, so you feel every stroke of every word written into your body and the words read aloud in the depth of your moans.",

"I give you this bracelet,",

"Not because it was expensive.",

"But because i  want you to carry a piece of me with you ALWAYS! and a reminder of how much you mean to me."

];


// =======================================
// PROPOSAL
// =======================================

const proposal =

"Doofan...\n\nWill you be mine? ❤️";


// =======================================
// VARIABLES
// =======================================

let currentIntro = 0;

let currentParagraph = 0;

let letterContent = "";

let cursorVisible = true;

let blinkCursor = null;

let proposalMode = false;

// =======================================
// INTRO TYPEWRITER
// =======================================

function typeIntro(message, callback){

    let i = 0;

    const typing = setInterval(function(){

        text.innerHTML = message.substring(0, i + 1) + "▌";

        i++;

        if(i >= message.length){

            clearInterval(typing);

            text.innerHTML = message;

            setTimeout(callback, 1200);

        }

    },120);

}



// =======================================
// PLAY INTRO
// =======================================

function nextIntro(){

    if(currentIntro >= introMessages.length){

        button.style.display = "inline-block";

        return;

    }

    typeIntro(

        introMessages[currentIntro],

        function(){

            currentIntro++;

            nextIntro();

        }

    );

}



// =======================================
// START BUTTON
// =======================================

button.addEventListener("click",function(){

    startMusic();

    button.classList.add("fade-out");

    photo.classList.add("fade-out");

    text.classList.add("fade-out");

    setTimeout(function(){

        scene2();

    },1500);

});



// =======================================
// SCENE 2
// =======================================

function scene2(){

    photo.style.display = "none";

    button.style.display = "none";

    text.classList.remove("fade-out");

    text.style.fontStyle = "normal";

    text.classList.add("story-center");

    playStory(0);

}



// =======================================
// STORY ENGINE
// =======================================

function playStory(index){

    if(index >= story.length){

        scene3();

        return;

    }

    text.style.opacity = "0";

    setTimeout(function(){

        text.innerHTML = story[index].text;

        text.style.opacity = "1";

        setTimeout(function(){

            playStory(index + 1);

        },story[index].time);

    },600);

}



// =======================================
// START WEBSITE
// =======================================

window.onload = function(){

    photo.style.opacity = "1";

    setTimeout(function(){

        nextIntro();

    },5000);

};


// =======================================
// SCENE 3
// =======================================

function scene3(){

    text.classList.remove("story-center");

    text.style.opacity = "0";

    setTimeout(function(){

        text.style.display = "none";

        letter.style.display = "block";

        letter.style.opacity = "1";

        letter.classList.remove("proposal-mode");

        proposalMode = false;

        currentParagraph = 0;

        letterContent = "";

        startLetter();

    },1200);

}



// =======================================
// LETTER START
// =======================================

function startLetter(){

    letterContent = ",<br><br>";

    renderLetter();

    startCursor();

    setTimeout(function(){

        playParagraph();

    },900);

}



// =======================================
// PLAY PARAGRAPHS
// =======================================

function playParagraph(){

    if(currentParagraph >= letterParagraphs.length){

        stopCursor();

        setTimeout(function(){

            scene4();

        },800);

        return;

    }

    typeWords(letterParagraphs[currentParagraph]);

}



// =======================================
// WORD ENGINE
// =======================================

function startLetter(){

    letterContent = " My Cariño,<br><br>";

    renderLetter();

    startCursor();

    setTimeout(function(){

        playParagraph();

    },900);

}



// =======================================
// PLAY PARAGRAPHS
// =======================================

function playParagraph(){

    if(currentParagraph >= letterParagraphs.length){

        stopCursor();

        setTimeout(function(){

            scene4();

        },900);

        return;

    }

    typeWords(letterParagraphs[currentParagraph]);

}



// =======================================
// WORD ENGINE
// =======================================

function typeWords(sentence){

    const words = sentence.split(" ");

    let index = 0;

    function nextWord(){

        if(index >= words.length){

            letterContent += "<br><br>";

            renderLetter();

            currentParagraph++;

            setTimeout(playParagraph,1200);

            return;

        }

        letterContent += words[index] + " ";

        renderLetter();

        let delay = 500;

        const word = words[index];

        if(word.includes(",")) delay = 900;

        if(word.includes(".")) delay = 900;

        if(word.includes("…") || word.includes("....")) delay = 1200;

        index++;

        setTimeout(nextWord,delay);

    }

    nextWord();
}

// =======================================
// CURSOR
// =======================================

function renderLetter(){

    let display = letterContent;

    if(proposalMode){

        display =
        "<div class='proposal-box'>" +
        display +
        "</div>";
    }

    if(cursorVisible){

        display += "<span class='cursor'></span>";

    }

    letter.innerHTML = display;

    // Auto-scroll to follow the letter as it is being typed
    setTimeout(function(){

        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth"
        });

    },50);

}



function startCursor(){

    clearInterval(blinkCursor);

    cursorVisible = true;

    blinkCursor = setInterval(function(){

        cursorVisible = !cursorVisible;

        renderLetter();

    },500);

}



function stopCursor(){

    clearInterval(blinkCursor);

    cursorVisible = false;

    renderLetter();

}



// =======================================
// SCENE 4
// =======================================

function scene4(){

    // Fade out the letter
    letter.style.opacity = "0";

    setTimeout(function(){

        // Switch to proposal mode
        proposalMode = true;

        // Clear the old letter
        letterContent = "";

        renderLetter();

        // Give the browser one frame before fading in
        setTimeout(function(){

            letter.style.opacity = "1";

            // Wait a moment after the fade before typing
            setTimeout(function(){

                playProposal();

            },700);

        },100);

    },900);

}



// =======================================
// PROPOSAL
// =======================================

function playProposal(){

    startCursor();

    typeProposal(proposal);

}



function typeProposal(sentence){

    let i = 0;

    function nextLetter(){

        if(i >= sentence.length){

            stopCursor();

            setTimeout(showButtons,4000);

            return;

        }

        const character = sentence.charAt(i);

        if(character === "\n"){

            letterContent += "<br>";

        }

        else{

            letterContent += character;

        }

        renderLetter();

        i++;

        let delay = 70;

        if(i > sentence.length - 10){

            delay = 120;

        }

        setTimeout(nextLetter,delay);

    }

    nextLetter();

}

// =======================================
// BUTTONS
// =======================================

function showButtons(){

    proposalButtons.style.display = "block";

    proposalButtons.style.opacity = "1";

    yesBtn.style.opacity = "0";
    noBtn.style.opacity = "0";

    yesBtn.style.transform = "translateY(20px)";
    noBtn.style.transform = "translateY(20px)";

    setTimeout(function(){

        yesBtn.style.opacity = "1";
        yesBtn.style.transform = "translateY(0)";

    },300);

    setTimeout(function(){

        noBtn.style.opacity = "1";
        noBtn.style.transform = "translateY(0)";

    },600);

}



// =======================================
// YES
// =======================================

yesBtn.addEventListener("click",function(){

    proposalButtons.style.opacity = "0";

    // Fade the music out
    let volume = bgMusic.volume;

    const fadeOut = setInterval(function(){

        volume -= 0.03;

        if(volume <= 0){

            volume = 0;
            bgMusic.volume = 0;

            bgMusic.pause();
            bgMusic.currentTime = 0;

            clearInterval(fadeOut);

            // Show final message
            letter.innerHTML = "THEN KISS ME! ❤️";
            letter.style.opacity = "1";

            // Open WhatsApp after 2 seconds
            setTimeout(function(){

                const message = encodeURIComponent("yes, i will");

                window.open(
                    "https://wa.me/2349056191651?text=" + message,
                    "_blank"
                );

            },2000);

        }

        bgMusic.volume = volume;

    },50);

});


// =======================================
// NO
// =======================================

let escaped = false;

noBtn.addEventListener("mouseenter",function(){

    if(escaped) return;

    escaped = true;

    noBtn.style.position = "relative";

    noBtn.style.left = "120px";

    noBtn.style.transition = "left .4s";

});



noBtn.addEventListener("click",function(){

    if(!escaped){

        alert("😂 Nice try.");

        return;

    }

    alert("😂 Nice try.");

});
function startMusic(){

    bgMusic.currentTime = 0;
    bgMusic.volume = 0.25;

    bgMusic.play();

}