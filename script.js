// NAVBAR
let lasScrollTop = 0;
navbar = document.getElementById('navbar')

window.addEventListener('scroll',function() {
   const scrollTop = window.pageTOffset ||
   this.document.documentElement.scrollTop; 

   if (scrollTop > lastScrollTop) {
       navbar.style.top="-50px";
   } else {
       navbar.style.top ="0";
   }
   lastScrollTop = scrollTop;
})

// TYPED

var typed = new Typed('.typed', {
    strings: ["Coucou, je m'appelle Claudia", "Après une carrière dans le marketing digital et le e-commerce, j'ai décidé de me lancer en tant que chef de projet !"],
    typeSpeed: 20,
  });

// COMPTEUR LIVE
let compteur = 0;

$(window).scroll(function() {

    const top = $('.counter').offset().top - window.innerHeight;

    if (compteur == 0 && $(window).scrollTop() > top) {
        $('.counter-value').each(function() {
            let $this = $(this),
            countTo = $this.attr('data-count');
        $({
            countNum: $this.text()
        }).animate({
            countNum : countTo
        },
        {
            duration: 10000,
            easing: 'swing',
            step: function(){
                $this.text(Math.floor(this.countNum));
            },
            complete: function() {
                $this.text(this.countNum);
            }
        });
      });
      compteur = 1;
    }
})

// AOS
AOS.init();



