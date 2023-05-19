
// Array dato da esercizio


const { createApp } = Vue

  createApp({
    data() {
      return {
        activeImg: 0,
        cards : [
            {
                image: 'img/01.webp',
                title: 'Marvel\'s Spiderman Miles Morale',
                text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
            }, {
                image: 'img/02.webp',
                title: 'Ratchet & Clank: Rift Apart',
                text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
            }, {
                image: 'img/03.webp',
                title: 'Fortnite',
                text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
            }, {
                image: 'img/04.webp',
                title: 'Stray',
                text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
            }, {
                image: 'img/05.webp',
                title: "Marvel's Avengers",
                text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
            }
        ]
      }
    },
    methods:{
        addIndex(){
            
            if(this.activeImg === this.cards.length -1){
                this.activeImg = 0;
            }else{
            this.activeImg++;
            }
         },
        removeIndex(){

            if (this.activeImg === 0) {
                this.activeImg = this.cards.length - 1;
            }else{
            this.activeImg--;
            }
        
            }
    }
  
  }).mount('#app');

// /******************** ZONA BOTTONI PER SET INTERVAL  ***************************/

// // Set intervallo di 3 secondi per far cambiare posizione array
// let timer = setInterval(switchBottom,3000);

// // Assegno bottone per stoppare setinterval e funzione clearinterval
// const elStopButton = document.getElementById('stop-time');
// elStopButton.addEventListener('click', ()=> clearInterval(timer));

// // Assegno bottone per ricominciare seinterval e funzione setinterval
// const elPlayButton = document.getElementById('play-time');
// elPlayButton.addEventListener('click', ()=> {
//     clearInterval(timer);
//     timer = setInterval(switchBottom,3000);
// });

// // Assegno bottone per revertare seinterval e funzione setinterval al contrario
// const elRevertButton = document.getElementById('revert-time');
// elRevertButton.addEventListener('click', ()=> {
//     clearInterval(timer);
//     timer = setInterval(switchTop,3000)
// });

// /***********************************FUNCTIONS ****************************/

