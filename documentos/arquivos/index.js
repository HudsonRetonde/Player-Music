const cover = document.querySelector(".card-image");
const title = document.querySelector(".card-content h6");
const artist = document.querySelector(".card-content p");
const audio = document.querySelector("audio");

const data = {
    title: "Dragon Ball Z",
    cancao: "Cha-La Head-Cha-La",
    cover: "../../documentos/imgs/DBZ.jpg",
    audio: "../../documentos/audio/DragonBallZAbertura.mp3"
}

cover.style.background = `url('${data.cover}')`;
title.innerText = data.title;
artist.innerText = data.cancao;
audio.src = data.audio;  