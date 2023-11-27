ScrollReveal({ 
    reset: true,
    distance:'80px',
    duration:2000,
    delay:200
 });

 ScrollReveal().reveal('.about-img, .how-img, section', { origin: 'left'});
 ScrollReveal().reveal('.hhh,.about,.service-box,.rawr, .porto-box, .con', { origin: 'bottom'});
 ScrollReveal().reveal('.heading', { origin: 'top'});


 const typed = new Typed('.multiple-text',{
    strings:['Front-End Developer ','Back-End Developer','Student','Water Enjoyer '],
    typeSpeed:60,
    backSpeed:50,
    backdelay:1000,
    loop:true
});



