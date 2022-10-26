const shake = document.getElementById("shake-ball");
const shakeAgain = document.getElementById("shake-again");
const img = document.getElementById("result-img");
const headerMsg = document.getElementById("header-msg");
let str = "";
let alt = "";
let source = "";

shake.addEventListener("click", () => {
  const shaked = shakeBall();
  str = shaked.toLowerCase();
  memory();
  // add transitions/setInterval
  headerMsg.innerHTML = "the ball has shaken!";
  shake.style.display = "none";
  shakeAgain.style.display = "block";
  img.src = source;
  img.alt = alt;
});

shakeAgain.addEventListener("click", () => {
  headerMsg.innerHTML = display();
  shake.style.display = "block";
  shakeAgain.style.display = "none";
  img.src = "";
  img.alt = "";
});

const display = () => {
  return `<p>think of your</p>
  <p id='y-n'>yes || no</p>
  <p>question and press the button!</p>`;
};

const memory = () => {
  const memory = [
    { src: "8ball/answers/iic.png", alt: "it is certain." },
    { src: "8ball/answers/iids.png", alt: "it is decidely so." },
    { src: "8ball/answers/wad.png", alt: "without a doubt." },
    { src: "8ball/answers/yd.png", alt: "yes, definitely." },
    { src: "8ball/answers/ymroi.png", alt: "you may rely on it." },
    { src: "8ball/answers/aisiy.png", alt: "as i see it, yes." },
    { src: "8ball/answers/ml.png", alt: "most likely." },
    { src: "8ball/answers/og.png", alt: "outlook good." },
    { src: "8ball/answers/y.png", alt: "yes." },
    { src: "8ball/answers/spty.png", alt: "signs point to yes." },
    { src: "8ball/answers/rhta.png", alt: "reply hazy, try again." },
    { src: "8ball/answers/aal.png", alt: "ask again later." },
    { src: "8ball/answers/bntyn.png", alt: "better not tell you now." },
    { src: "8ball/answers/cpn.png", alt: "cannot predict now." },
    { src: "8ball/answers/caaa.png", alt: "concentrate and ask again." },
    { src: "8ball/answers/dcoi.png", alt: "don't count on it." },
    { src: "8ball/answers/mrin.png", alt: "my reply is no." },
    { src: "8ball/answers/mssn.png", alt: "my sources say no." },
    { src: "8ball/answers/onsg.png", alt: "outlook not so good." },
    { src: "8ball/answers/vd.png", alt: "very doubtful." },
  ];
  console.log(str);

  memory.forEach((sorc) => {
    if (sorc.alt === str) {
      alt = sorc.alt;
      source = sorc.src;
    }
  });
};

function shakeBall() {
  const results = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes, definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful.",
  ];
  let randomResults = Math.floor(Math.random() * results.length);
  return results[randomResults];
}
