const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = "http://api.quotable.io/random";
const copyText = document.querySelector("#copyText");
const speechOut = document.querySelector("#speechOut");
synth = speechSynthesis;

async function getQuote(url) {
  const response = await fetch(url);
  var data = await response.json();

  quote.innerHTML = data.content;
  author.innerHTML = "~ " + data.author;
}

getQuote(api_url);

function tweet() {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      quote.innerHTML +
      " by " +
      author.innerHTML
  );
}
copyText.addEventListener("click", () => {
  navigator.clipboard.writeText(quote.innerText);
});

speechOut.addEventListener("click", () => {
  const message = `${quote.innerText} quote by ${author.innerText}`;
  const utterance = new SpeechSynthesisUtterance(message);
  speechSynthesis.speak(utterance);
});
