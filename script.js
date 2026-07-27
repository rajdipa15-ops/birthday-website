const giftButton = document.getElementById("giftButton");
const welcome = document.querySelector(".welcome");

const giftSection = document.getElementById("giftSection");
const openBox = document.getElementById("openBox");

const messageSection = document.getElementById("messageSection");
const typingText = document.getElementById("typingText");

const memoryButton = document.getElementById("memoryButton");
const gallerySection = document.getElementById("gallerySection");

const finalButton = document.getElementById("finalButton");
const finalSection = document.getElementById("finalSection");

const bgMusic = document.getElementById("bgMusic");

const restartButton = document.getElementById("restartButton");
const closeStory = document.getElementById("closeStory");
let boxOpened = false;


// Welcome → Gift
giftButton.addEventListener("click",()=>{

    bgMusic.volume = 0.35;

bgMusic.play().catch(() => {});

    welcome.classList.add("fade-out");

    setTimeout(()=>{

        welcome.style.display="none";

        giftSection.style.display="flex";

        giftSection.classList.add("fade-in");

    },600);

});


// Open Gift Box
openBox.addEventListener("click", () => {

    if (!boxOpened) {

        boxOpened = true;

        const giftBox = document.querySelector(".gift-box");

        giftBox.classList.add("open");

        createConfetti();

        function sweetSixteenHearts(){

    for(let i=0;i<16;i++){

        setTimeout(()=>{

            const heart=document.createElement("div");

            heart.className="final-heart";

            heart.innerHTML=Math.random()>0.5 ? "💖" : "💕";

            heart.style.left=Math.random()*100+"vw";

            heart.style.fontSize=(22+Math.random()*18)+"px";

            heart.style.setProperty(
                "--move",
                (Math.random()*160-80)+"px"
            );

            document.body.appendChild(heart);

            setTimeout(()=>{
                heart.remove();
            },6000);

        },i*300);

    }

}


        setTimeout(() => {

            giftBox.innerHTML = "🧸💖";

            document.querySelector(".gift-card h2").innerHTML =
            "A Little Letter For You 💌";

            openBox.innerHTML =
            "Read My Letter 💖";

        },600);


    } else {


        openBox.style.display = "none";

        messageSection.style.display = "block";

        setTimeout(() => {

            typeMessage();

        },500);

    }

});



// Letter Typing Effect
function typeMessage(){

    typingText.innerHTML = "";

    const message = 
    "Happy Birthday Khyati 💖\n\n" +
    "I hope this birthday of yours becomes one of the most unforgettable days of your life. " +
    "May you achieve everything you are striving for and may happiness always find its way to you.\n\n" +
    "Thank you for being the amazing person you are. No matter what happens in life, " +
    "always remember to smile, enjoy every little moment and keep shining ✨";


    let i = 0;


    function typing(){

        if(i < message.length){

            typingText.innerHTML += message.charAt(i)
            .replace("\n","<br>");

            i++;

            setTimeout(typing,35);

        }

        else{

            memoryButton.style.display="inline-block";

        }

    }


    memoryButton.style.display="none";

    typing();

}



// Falling Hearts
function createConfetti(){

    for(let i=0;i<50;i++){

        const heart=document.createElement("div");

        heart.className="confetti";

        heart.innerHTML =
        Math.random()>0.5 ? "💖":"💕";


        heart.style.left =
        Math.random()*100+"vw";


        heart.style.setProperty(
        "--drift",
        (Math.random()*200-100)+"px"
        );


        heart.style.animationDuration =
        (Math.random()*2+3)+"s";


        heart.style.fontSize =
        (Math.random()*20+20)+"px";


        document.body.appendChild(heart);


        setTimeout(()=>{

            heart.remove();

        },5000);

    }

}

function sweetSixteenHearts(){

    for(let i=0;i<16;i++){

        setTimeout(()=>{

            const heart=document.createElement("div");

            heart.className="final-heart";

            const symbols=["💖","💕","💗","🌸","✨"];
            heart.innerHTML=symbols[Math.floor(Math.random()*symbols.length)];

            heart.style.left=Math.random()*100+"vw";

            heart.style.fontSize=(22+Math.random()*18)+"px";

            heart.style.setProperty(
                "--move",
                (Math.random()*160-80)+"px"
            );

            document.body.appendChild(heart);

            setTimeout(()=>{
                heart.remove();
            },6000);

        },i*300);

    }

}
function showGallery() {

    const cards = document.querySelectorAll(".photo-card");

    cards.forEach(card => {
        card.classList.remove("show");
    });

    finalButton.style.display = "none";

    cards.forEach((card, index) => {

        setTimeout(() => {

            card.classList.add("show");

            if(index === cards.length - 1){

                setTimeout(() => {

                    finalButton.style.display = "inline-block";

                },600);

            }

        }, index * 300);

    });

}


// Memories
memoryButton.addEventListener("click", () => {

    giftSection.style.display = "none";

    gallerySection.style.display = "flex";

    showGallery();

});



// Final Surprise
finalButton.addEventListener("click",()=>{

    gallerySection.style.display="none";

    finalSection.style.display="flex";

    setTimeout(()=>{

        sweetSixteenHearts();

    },1500);
});
restartButton.addEventListener("click",()=>{

    location.reload();

});
closeStory.addEventListener("click",()=>{

    if(bgMusic){

        const fade=setInterval(()=>{

            if(bgMusic.volume>0.02){

                bgMusic.volume-=0.02;

            }

            else{

                bgMusic.pause();

                clearInterval(fade);

            }

        },100);

    }

    document.body.innerHTML=`

    <div style="
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
    flex-direction:column;
    text-align:center;
    background:linear-gradient(135deg,#ffd6e7,#fff5fa);
    font-family:'Segoe UI',sans-serif;
    ">

        <h1 style="color:#ff4d94;">
            Thank You 💖
        </h1>

        <p style="
        max-width:600px;
        font-size:22px;
        color:#666;
        line-height:1.8;
        ">

        Thank you for taking the time to open this little gift.

        <br><br>

        I hope it made you smile.

        <br><br>

        Happy Sweet 16, Khyati. 🌸

        </p>

    </div>

    `;

});