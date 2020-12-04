'use strict'
window.onload = function() {

const likeBtn = document.querySelector('.like'),
dislikeBtn = document.querySelector('.dislike'),
likeScore = document.querySelector('.like-score'),
dislikeScore = document.querySelector('.dislike-score');

function likeModule() {
    let likeCounter = 0,
    dislikeCounter = 0;
    likeBtn.addEventListener('click', ()=> {
        likeCounter += 1;
        changeScore(likeScore, likeCounter);
    }); 
    dislikeBtn.addEventListener('click', ()=> {
        dislikeCounter += 1;
        changeScore(dislikeScore, dislikeCounter);
    });    
    function changeScore (elem, counter) {
        elem.textContent = counter;
    }

}

likeModule();

}