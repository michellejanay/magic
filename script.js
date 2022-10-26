const shake = document.getElementById("shake-ball");
const shakeAgain = document.getElementById("shake-again");
const result = document.getElementById("result");
const img = document.getElementById("result-img");
const headerMsg = document.getElementById("header-msg");
let str = "";
let alt = "";
let source = "";

shake.addEventListener("click", () => {
  const shaked = shakeBall();
  const check = checkAnswer(shaked);
  // add transitions/setInterval
  str = shaked.toLowerCase();
  //result.innerHTML = str;

  headerMsg.innerHTML = check.toLowerCase();
  shake.style.display = "none";
  //result.style.display = "flex";
  result.style.display = "none";
  shakeAgain.style.display = "block";
  results();

  img.src = source;
  img.alt = alt;
});

shakeAgain.addEventListener("click", () => {
  //location.reload();
  result.style.display = "none";
  headerMsg.innerHTML =
    "think of your yes || no question and press the button!";
  shake.style.display = "block";
  shakeAgain.style.display = "none";
  img.src = "";
  img.alt = "";
});

const results = () => {
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
  console.log(alt);
  console.log(source);
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
  console.log("The ball has shaken!");
  return results[randomResults];
}

function checkAnswer(answer) {
  const veryPositive = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes - definitely.",
    "You may rely on it.",
  ];
  const positive = [
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
  ];
  const negative = [
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
  ];
  const veryNegative = [
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful.",
  ];

  if (veryPositive.includes(answer)) {
    return "very positive";
  } else if (positive.includes(answer)) {
    return "positive";
  } else if (negative.includes(answer)) {
    return "negative";
  } else if (veryNegative.includes(answer)) {
    return "very negative";
  }
}
