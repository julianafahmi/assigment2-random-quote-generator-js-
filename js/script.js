

function displayQuote(){
    var quotes = [
        {
            quote: "You miss 100% of the shots you don't take.",
            author: "--Wayne Gretzy"
        },
    
        {
            quote: "Be yourself; everyone else is already taken.",
            author: "--Oscar Wilde"
        },
    
        {
            quote: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
            author: "-- Marilyn Monroe"
        },
        {
            quote: "So many books, so little time.",
            author: "--Frank Zappa"
        },
        {
            quote: "A room without books is like a body without a soul",
            author: "--Marcus Tullius Cicero"
        },
        {
            quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
            author: "--Bernard M. Baruch"
        },
        {
            quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
            author: "--Dr. Seuss"
        },
        {
            quote: "You only live once, but if you do it right, once is enough.",
            author: "--Mae West"
        },
        {
            quote: "Be the change that you wish to see in the world.",
            author: "-- Mahatma Gandhi"
        }

    
    ]
    var prevNumber=0
    while (true){
    var arrayIndex=Math.floor(Math.random()*quotes.length); 
    if (arrayIndex != prevNumber) {
        break;
      }
    }
    prevNumber = arrayIndex
    console.log(prevNumber);

    document.getElementById("quoteOutput").innerHTML=quotes[arrayIndex].quote;
    document.getElementById("autorOutput").innerHTML=quotes[arrayIndex].author;


    
   

}


