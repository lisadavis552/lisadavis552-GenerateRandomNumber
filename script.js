const startButton =document.getElementById ("start");
const guessSection =document.getElementById ("guess-section");
const resultDiv =document.getElementById ("result");
let numbersArray=[];

//generate random numbers
startButton.addEventListener("click", function(){
    numbersArray = [];
    for(let i=0;i<5; i++){
        numbersArray.push(Math.floor(Math.random()*10)+1);
    }

    //show guessing section
    alert("Random numbers have been generated! Try guessing a number.");
    guessSection.style.display ="block";
    resultDiv.innerHTML="";                                 //clear previous guesses
});

//guessing
document.getElementById("check").addEventListener("click", function(){
    const guessInput = document.getElementById("guess");
    const guess = parseInt(guessInput.value);

//validate input 
if (!Number.isFinite(guess)|| guess< 1 || guess > 10){
    alert("Please enter a valid number between 1 and 10");
    return;   
}
//count occurrences of the guessed number
let count= 0;
for(i=0;i<numbersArray.length;i++){
    if(numbersArray[i]===guess){
        count++;
    }
}
//display result
if (count ===0){
    resultDiv.innerHTML = "The number " + guess + " does not appear in the array.";
}else if (count ===1){
    resultDiv.innerHTML = "The number " + guess + " appears once in the array.";
}else {
    resultDiv.innerHTML = "The number " + guess + " appears " + count + " times in the array.";
}
//refresh the page after 5 seconds 
setTimeout (function(){
    window.location.reload(); //reload the page
    }, 5000);  // wait for 5 seconds before refreshing 

});
                               