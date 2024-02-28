// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let hearts = document.getElementsByClassName("like-glyph")
Array.from(hearts).forEach(function (heart) {
  heart.addEventListener('click', () => {
  mimicServerCall()
  .then(data => {
    if (heart.innerHTML === FULL_HEART){
      heart.textContent = EMPTY_HEART
      heart.classList.remove("activated-heart")
    }
    else {
    heart.innerHTML = FULL_HEART
    heart.classList.add("activated-heart")
    }
  })
  .catch((error) => {
   let modal = document.getElementById('modal')
   let modalMessage = document.getElementById('modal-message')
   modalMessage.textContent = error
   modal.classList.remove("hidden")
   setTimeout(() => {
    modal.classList.add("hidden");
    }, 3000);
})
  })
})


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
