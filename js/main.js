// Bonus:
// 1- al click su una thumb, visualizzare in grande l’immagine corrispondente
// 2- applicare l’autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
// 3- quando il mouse va in hover sullo slider, bloccare l’autoplay e farlo riprendere quando esce

// Destructoring di Vue
const { createApp } = Vue

  createApp({
    data() {
      return {
        activeItem: 0,   //variabile di stato
        timer: '',      //variabile timer per poter fermare setInterval
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
        addIndex(){   //Aumenta di 1 variabile
            if(this.activeItem === this.cards.length -1){
                this.activeItem = 0;
            }else{
            this.activeItem++;
            }
        },
        removeIndex(){   //Rimuovi di 1 variabile
            if (this.activeItem === 0) {
                this.activeItem = this.cards.length - 1;
            }else{
            this.activeItem--;
            }
        },
        clickChangeIndex(indice){  //Cambia valore active al click
            this.activeItem = indice;
        },
        stopInterval(){  //Ferma autoplay
            clearInterval(this.timer);
        },
        playInterval(){    //Riparte autoplay
            clearInterval(this.timer);
            this.timer = setInterval(this.addIndex,3000);
        }
    },
    mounted(){
        this.timer = setInterval(this.addIndex,3000);   //Inizia autoplay al caricamento dell'app

    }
  
  }).mount('#app');
