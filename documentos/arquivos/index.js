const cover = document.querySelector(".card-image img");
const title = document.querySelector(".card-content h6");
const artist = document.querySelector(".card-content p");
const audio = document.querySelector(".cart-content audio");

const data = {
    title: "Dragon Ball Z",
    cancao: "Cha-La Head-Cha-La",
    cover: "../imgs/DBZ.jpg",
    file: "../audio/DragonBallZAbertura.mp3"
}

cover.style.background = `url('${data.cover}')`;
title.innerText = data.title;
artist.innerText = data.cancao;
audio.src = data.file;  