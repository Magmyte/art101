/*
   lab.js - This simple JavaScript/jQuery script appends new elements to an output div

   Requirements: jQuery must be loaded for this script to work.
Lab 10 Assignment
Authors: Charles Haiwen & Austin Allen
Date: 15 May 2025
*/

//initialize variable
var textLeft = true;

function generateRandomText() {
  const text = ["And my axe!", "We've had one, yes. But what about second breakfast?", "I suppose you think that was terribly clever.", "Less than half of what I'd hoped for.", "Fly, you fools!", "You shall not pass!", "Fool of a Took! Throw yourself in there next time and rid us of your stupidity!", "They're taking the hobbits to Isengard!", "Looks like meat's back on the menu, boys!", "No.", "All right then, keep your secrets.", "Po-tay-toes! Boil 'em, mash 'em, stick 'em in a stew.", "I have no memory of this place.", "That still only counts as one!", "Lovely! Lembas bread. And look! More lembas bread.", "Don't tell the elf.", "You have no power here, Gandalf the Grey.", "A wizard is never late, Frodo Baggins. Nor is he early. He arrives precisely as he means to.", "You've been officially labeled as a disturber of the peace.", "We don't want any more visitors, well-wishers, or distant relations!", "And what about very old friends?", "After all, why not? Why shouldn't I keep it?", "So you have chosen... death.", "That wound will never heal. He will carry it for the rest of his life.", "I was there, Gandalf. I was there three thousand years ago.", "Lembas - elvish waybread. One small bite is enough to fill the stomach of a grown man.", "Legolas, what do your elf eyes see?", "Stupid fat hobbit!", "Gandalf the White... Gandalf the Fool!", "Give it to us... raw.", "Shall I describe it to you? Or should I find you a box?", "So it begins.", "I'll have no pointy-ear outscoring me!", "I feel something. A slight tingle in my fingers. I think it's affecting me.", "Gondor calls for aid!", "The age of men is over.", "Share the load.", "I do not doubt his heart - only the reach of his arm.", "No matter what comes through that gate, you will stand your ground!", "I am no man.", "Certainty of death... Small chance of success... What are we waiting for?", "Never thought I'd die fighting side by side with an elf.", "How about side by side with a friend?", "Aye. I can do that.", "Come on, Frodo. I can't carry it for you. But I can carry you!"];

  const randText = Math.floor(Math.random() * text.length);
  
  return text[randText];
}

// click listener for button
$("#make-convo").click(function(){
  // get new fake dialogue
  const newText = generateRandomText();
  
  if (textLeft == true) {
    // append a new div to our output div
    $("#output").append('<div class="text"><p>' + newText + '</p></div>');
    textLeft = false;
  }
  else {
    $("#output").append('<div class="text textRight"><p>' + newText + '</p></div>');
    textLeft = true;
  }
});
