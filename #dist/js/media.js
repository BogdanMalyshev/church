"use strict";

const btns = document.querySelectorAll('.tabs__btn'),
      video = document.querySelector('.tabs__videos'),
      photos = document.querySelector('.tabs__photos');



btns.forEach((e, i) => {
    
    e.addEventListener('click', e => {
        if(i == 0){
            video.classList.remove('active');
            photos.classList.add('active');
        }else{
            video.classList.add('active');
            photos.classList.remove('active');
        }
    });
});



class NewPhoto{
    constructor(src, alt, perent){
        this.src = src;
        this.alt = alt;
        this.perent = document.querySelector(perent);
    }

    render(){
        const element = document.createElement('div');
        element.classList.add('tabs__photo');
        element.innerHTML = `
            <img src=${this.src} alt=${this.alt}>
        `;

        this.perent.append(element);
    }
}

fetch('db.json')
.then(res => res.json())
.then(res => res.photo[0].forEach(e => {
    new NewPhoto( e , 'title', '.tabs__photos').render();
}));

fetch('https://youtube.googleapis.com/youtube/v3/playlists?channelId=UC6qgZqHTcehNsABLqTVnCPA&id=PL9mV7UCwcw311abEBWQC7r_iPobUFGvud&maxResults=50&mine=true&key=[AIzaSyC4t_spkTCNv0s27rlzwetxmAc4JjbVnMs]')
.then(res => console.log(res));


// -----------------------------btns


