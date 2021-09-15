var app = new Vue({
    el: '#app',
    data: {
      hobbits: [
        {
          name: 'Pipino',
          surname: 'Peregrino Tuc',
          sourceImg: 'img/pipino-tuc.jpg'
        },
        {name: 'Bilbo',
         surname: 'Baggins',
         sourceImg: 'img/bilbo.jpg'
        },
        {
          name: 'Samwise',
          surname: 'Gamgee',
          sourceImg: 'img/Samwise_the_Brave.jpg'
        },
        {name: 'Frodo',
         surname: 'Baggins',
         sourceImg: 'img/frodo.jpg'
        },
        {
          name: 'Merry',
          surname: 'Peregrino Tuc',
          sourceImg: 'img/merry.jpg'
        },
        {name: 'Smigol',
         surname: 'Unknown',
         sourceImg: 'img/smigol.jpg'
        },
        {name: 'Gollum',
         surname: 'Unknown',
         sourceImg: 'img/gollum.jpg'
        },
      ],
      indexOfImg: 0,
    },

    methods: {

      goBack: function (){
        this.indexOfImg--
        if (this.indexOfImg < 0){
          this.indexOfImg = this.hobbits.length -1;
        }
      },
      goForward: function (){
        this.indexOfImg++
        if (this.indexOfImg >= this.hobbits.length){
          this.indexOfImg = 0;
        }
      },
    },
});