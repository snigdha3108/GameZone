let ori=Math.random()*100;
ori=parseInt(ori);
let guess;
let score=100;

while(guess!=ori)
    {
        score--;

        guess=prompt("Enter a number between 1 to 100.");

        if(guess == ori)
            {
                alert(`Congratulations!!! You guessed it right. \nScore = ${100-score}.`);
            }
        
        else if(guess>ori && guess<100)
            {
                alert("Wrong :( Guess a smaller number.");
            }
        
        else
        {
            alert("Wrong :( Guess a larger number.");
        }
    }
