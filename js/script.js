/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/***
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/
// [START variable declaration]
var quote = [
  {quote:'Talk is cheap. Show me the code.', source:'Linus Torvalds'},
  {quote:'Programs must be written for people to read, and only incidentally for machines to execute.', source:'Harold Abelson', year:'1984'},
  {quote:'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.', source:'John Woods'},
  {quote:"That's the thing about people who think they hate computers. What they really hate is lousy programmers.", source:'Larry Niven'},
  {quote:"You've baked a really lovely cake, but then you've used dog shit for frosting.", source:'Steve Jobs'},
  {quote:"We build our computer (systems) the way we build our cities: over time, without a plan, on top of ruins.", source:'Ellen Ullman', citation:'Twitter'}
];
// [END variable declaration]

function getRandomInt(max){
  return Math.floor(Math.random() * Math.floor(max));
}

/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/

function getRandomQuote() {
  var randomNumber = getRandomInt(quote.length);
  return quote[randomNumber];
}

/***
  Create the `printQuote` function to:
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string.
***/

function printQuote() {
  var randomQuote = getRandomQuote();
  var html = "";

  html += '<p class="quote"> ' + randomQuote.quote + '</p>';
  html += '<p class="source">' + randomQuote.source;

  if (randomQuote.citation !== undefined) {
    html += '<span class="citation">' + randomQuote.citation + '</span>';
  }
  if (randomQuote.year !== undefined) {
    html += '<span class="year">' + randomQuote.year + '</span>';
  }
  html += '</p>';
  document.getElementById("quote-box").innerHTML = html;
}


/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
