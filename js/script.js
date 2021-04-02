const quotes = [
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    saidby: "Nelson Mandela",
    citation: "Facebook",
    date: "2008",
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    saidby: "Walt Disney",
    citation: "Facebook",
    date: "2000",
  },
  {
    quote:
      "If life were predictable it would cease to be life, and be without flavor.",
    saidby: "Eleanor Roosevelt",
    citation: "Twitter",
    date: "2005",
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    saidby: "John Lennon",
    citation: "Facebook",
    date: "1995",
  },
  {
    quote:
      "It is during our darkest moments that we must focus to see the light.",
    saidby: "Artistotle",
    citation: "Facebook",
    date: "1980",
  },
];
//My Variables
var min = 1;
var max = quotes.length;
var quoted;

// getting a random quote function
function getRandomQuote(quotes) {
  var random = Math.floor(Math.random() * (max - min) + min);
  var quoted = quotes[random]
  return quoted; //the return will let the function returns one random quote
}
const setBg = () => {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  color.innerHTML = "#" + randomColor;
}
//printQuote function to print the new quote on screen
function printQuote() {
  var randomquote = getRandomQuote(quotes);
  var html =
    '<p class="quote">' +
    randomquote.quote +
    "</p>" +
    '<p class="source">' +
    randomquote.saidby;

  if (randomquote.citation !== "") {
    html += '<span class="citation">' + randomquote.citation + "</span>";
  }
  if (randomquote.date !== "") {
    html += '<span class="year">' + randomquote.date + "</span></p>";
  }
  document.getElementById("quote-box").innerHTML = html;
  setBg();
}

//the button calls the function when clicked
document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
