const shake = document.getElementById("shake-ball");
const shakeAgain = document.getElementById("shake-again");
const result = document.getElementById("result");
const headerMsg = document.getElementById("header-msg");

shake.addEventListener("click", () => {
  const shaked = shakeBall();
  // result.style.animationName = "demo-animation";
  result.innerHTML = shaked.toLowerCase();

  headerMsg.innerHTML = checkAnswer(shaked).toLowerCase();
  shake.style.display = "none";
  result.style.display = "flex";
  shakeAgain.style.display = "block";
});

shakeAgain.addEventListener("click", () => {
  //location.reload();
  result.style.display = "none";
  headerMsg.innerHTML = "think of your question and press the button!";
  shake.style.display = "block";
  shakeAgain.style.display = "none";
});

// const results = () => {
//   const memory = {
//     iic: { src: "8ball/answers/iic.png", alt: "it is certain." },
//     iids: { src: "8ball/answers/iids.png", alt: "it is decidely so." },
//     wad: { src: "8ball/answers/wad.png", alt: "without a doubt." },
//     yd: { src: "8ball/answers/yd.png", alt: "yes, definitely." },
//     ymroi: { src: "8ball/answers/ymroi.png", alt: "you may rely on it." },
//     aisiy: { src: "8ball/answers/aisiy.png", alt: "as i see it, yes." },
//     ml: { src: "8ball/answers/ml.png", alt: "most likely." },
//     og: { src: "8ball/answers/og.png", alt: "outlook good." },
//     y: { src: "8ball/answers/y.png", alt: "yes." },
//     spty: { src: "8ball/answers/spty.png", alt: "signs point to yes." },
//     rhta: { src: "8ball/answers/rhta.png", alt: "reply hazy, try again." },
//     agl: { src: "8ball/answers/agl.png", alt: "ask again later." },
//     bntyn: { src: "8ball/answers/bntyn.png", alt: "better not tell you now." },
//     cpn: { src: "8ball/answers/cpn.png", alt: "cannot predict now." },
//     caaa: { src: "8ball/answers/caaa.png", alt: "concentrate and ask again." },
//     dcoi: { src: "8ball/answers/dcoi.png", alt: "don't count on it." },
//     myin: { src: "8ball/answers/myin.png", alt: "my reply is no." },
//     mssn: { src: "8ball/answers/mssn.png", alt: "my sources say no." },
//     onsg: { src: "8ball/answers/onsg.png", alt: "outlook not so good." },
//     vd: { src: "8ball/answers/vd.png", alt: "very doubtful." },
//   };
//   console.log(memory.y);
// };
// results();

function shakeBall() {
  const results = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes - definitely.",
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