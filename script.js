cardArray=[
    {text: "A", image: "images/1.png"},
    {text: "A", image: "images/1.png"},
    {text: "B", image: "images/2.png"},
    {text: "B", image: "images/2.png"},
    {text: "C", image: "images/3.png"},
    {text: "C", image: "images/3.png"},
    {text: "D", image: "images/4.png"},
    {text: "D", image: "images/4.png"},
    {text: "E", image: "images/5.png"},
    {text: "E", image: "images/5.png"},
    {text: "F", image: "images/6.png"},
    {text: "F", image: "images/6.png"},
    {text: "G", image: "images/7.png"},
    {text: "G", image: "images/7.png"},
    {text: "H", image: "images/8.png"},
    {text: "H", image: "images/8.png"},
    {text: "I", image: "images/9.png"},
    {text: "I", image: "images/9.png"},
    {text: "J", image: "images/10.png"},
    {text: "J", image: "images/10.png"},
    {text: "K", image: "images/11.png"},
    {text: "K", image: "images/11.png"},
    {text: "L", image: "images/12.png"},
    {text: "L", image: "images/12.png"},

];

clickedCard=[];

matchedCard=[];

clicks=30;

///////////////////////////////////////// SHUFFLE DECK
var shuffleDeck=function(){
  // Using the Fisher-Yates (Knuth) shuffle
  var currentIndex = cardArray.length
  , temporaryValue
  , randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = cardArray[currentIndex];
    cardArray[currentIndex] = cardArray[randomIndex];
    cardArray[randomIndex] = temporaryValue;
  }
}
///////////////////////////////////////// End shuffle DECK
  shuffleDeck();
  console.log(cardArray);
var board=document.getElementById("board");

for(var i=0; i<cardArray.length; i++){

  // appending cards to board
  var cardsBack=document.createElement("div");
  cardsBack.classList.add("card");
  board.appendChild(cardsBack);

  // adding images to cardback
  var images=document.createElement("img");
  images.src = cardArray[i].image;
  images.className="image";
  cardsBack.appendChild(images);



  // Change color of cards on click
  cardsBack.addEventListener("click",function(){
  if (clicks>0){
    clicks--;
    console.log(clicks);
    document.getElementById('counter').innerHTML=clicks.toString();
    var card = this;
    if (clickedCard.length < 2){
     card.classList.add("image");
      card.classList.add("match"); // add class of match to all cards
      clickedCard.push(card.innerHTML);
      matchedCard.push(card);
      console.log("this is card" + card);

  console.log("this is clickedCard" + clickedCard);
      //// compares cards that are clicked on
      if (clickedCard.length === 2){
        if (clickedCard[0] === clickedCard[1]){

          console.log("It's a match!");
            clickedCard=[];
            matchedCard=[];
        } else {
          console.log("It's not a match!")
          setTimeout(turnOffAllCards, 1000);
          for (i=0; i<matchedCard.length; i++){
            matchedCard[i].classList.remove("match");
          }
          matchedCard=[];
           // calls turnOffAllCards
        }
      } // close if statement
    } // close second if statement
    } // close click if statement
  }) // event listener
} // close for loop

function turnOffAllCards(){
  var frontCards = document.querySelectorAll("div.image:not(.match)");
  for(var i = 0; i < frontCards.length; i++){
    frontCards[i].classList.remove("image");
    clickedCard=[];

  }

}
