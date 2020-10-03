var t1 = new TimelineMax();

t1.fromTo('.blogo',{scale:0},{scale: 1,duration: 1.2,ease: "elastic"},"+=3")
.fromTo('.caption',{opacity: 0,x: -200},{opacity: 1,x: 0, duration: 1.2, ease: "elastic"});

t1.play();

//-----------------------------------Additional Functions------------------------//

var text = document.querySelector(".num");
var load = document.querySelector(".load");

var text1 = document.querySelector(".num1");
var load1 = document.querySelector(".load1");

var firstnum = 0;
var secondnum = 0;

function setProgress(){
    var time = setInterval(function(){
        firstnum+=2;
        text.textContent = firstnum;
        
        if(firstnum === 92){
            clearInterval(time);
        }
    },50);
}


function setProgress1(){
    var time = setInterval(function(){
        secondnum+=2;
        text1.textContent = secondnum;
        
        if(secondnum === 90){
            clearInterval(time);
        }
    },50);
}



//-------------------About Section Animation---------------------//



var controller1= new ScrollMagic.Controller();


var t2 = new TimelineMax();
var t3 = new TimelineMax();
var t4 = new TimelineMax();
var t5 = new TimelineMax();
var t6 = new TimelineMax();
var t7 = new TimelineMax().add(setProgress);
var t8 = new TimelineMax().add(setProgress1);
var t9 = new TimelineMax();
var t10 = new TimelineMax();
var t11 = new TimelineMax();
var t12 = new TimelineMax();


t2.fromTo('.title1',{opacity: 0,y: 100},{opacity: 1,y: 0,duration: 0.7,ease: "power4"})
.fromTo('.intro',{opacity: 0,x: -200},{opacity: 1,x: 0, duration: 0.4, ease: "elastic"})
.fromTo('.location',{opacity: 0},{opacity: 1, duration: 0.3, ease: "linear"})
.fromTo('.para',{opacity: 0},{opacity: 1, duration: 0.3, ease: "linear"})
.fromTo('.face',{scale: 0},{scale: 1, duration: 1, ease: "elastic"});




t3.fromTo('.rate',{opacity: 0,y: 100},{opacity: 1,y: 0,duration: 0.6,ease: "linear"})
.fromTo('.education',{opacity: 0,y: 100},{opacity: 1,y: 0,duration: 0.4,ease: "linear"})
.fromTo('.social',{opacity: 0,y: 100},{opacity: 1,y: 0,duration: 0.2,ease: "linear"})
.fromTo('#navpages',{opacity: 0},{opacity: 1, duration: 0.4,ease: "linear"})
.fromTo('.left-col',{opacity: 0,rotationY: 180},{opacity: 1,rotationY: 0,duration: 0.6,ease: "back"})
.fromTo('.right-col',{opacity: 0,rotationY: 180},{opacity: 1,rotationY: 0,duration: 0.6,ease: "back"})
.fromTo('.note',{opacity: 0,x: -200},{opacity: 1,x: 0, duration: 0.4, ease: "elastic"});



t4.fromTo('.facebook',{opacity: 0,rotationY: 180},{opacity: 1,rotationY: 0,duration: 1.4,ease: "back"})
.fromTo('.linkedin',{opacity: 0,rotationY: 180},{opacity: 1,rotationY: 0,duration: 1.4,ease: "back"})
.fromTo('.github',{opacity: 0,rotationY: 180},{opacity: 1,rotationY: 0,duration: 1.4,ease: "back"});


t5.fromTo('.title2',{opacity: 0,y: 100},{opacity: 1,y: 0,duration: 0.7,ease: "power4"})
.fromTo('.card1',{opacity: 0,rotationY: 180},{opacity: 1,rotationY: 0,duration: 0.3,ease: "linear"})
.fromTo('.card2',{opacity: 0,rotationY: 180},{opacity: 1,rotationY: 0,duration: 0.3,ease: "linear"})
.fromTo('.card3',{opacity: 0,rotationY: 180},{opacity: 1,rotationY: 0,duration: 0.3,ease: "linear"})
.fromTo('.card4',{opacity: 0,rotationY: 180},{opacity: 1,rotationY: 0,duration: 0.3,ease: "linear"})
.fromTo('.card5',{opacity: 0,rotationY: 180},{opacity: 1,rotationY: 0,duration: 0.3,ease: "linear"})
.fromTo('.card6',{opacity: 0,rotationY: 180},{opacity: 1,rotationY: 0,duration: 0.3,ease: "linear"})
.fromTo('.sdetails',{opacity: 0,y: 80},{opacity: 1,y: 0,duration: 0.4,ease: "linear"});


t6.fromTo('.title3',{opacity: 0,y: 100},{opacity: 1,y: 0,duration: 0.7,ease: "power4"})
.fromTo('.htmlbar',{width: '0%'},{width: '92%', duration: 0.7,ease: "linear"})
.fromTo('.cssbar',{width: '0%'},{width: '87%', duration: 0.6,ease: "linear"})
.fromTo('.jsbar',{width: '0%'},{width: '76%', duration: 0.5,ease: "linear"})
.fromTo('.illsbar',{width: '0%'},{width: '82%', duration: 0.5,ease: "linear"})
.fromTo('.uibar',{width: '0%'},{width: '96%', duration: 0.5,ease: "linear"})
.fromTo('.psbar',{width: '0%'},{width: '60%', duration: 0.5,ease: "linear"});


t9.fromTo('.title4',{opacity: 0,y: 100},{opacity: 1,y: 0,duration: 0.7,ease: "power4"})
.fromTo('.startstate',{opacity: 0},{opacity: 1, duration: 0.4, ease: "linear"});


t10.fromTo('.webbar',{opacity: 0,y: 100},{opacity: 1,y: 0,duration: 0.6,ease: "linear"})
.fromTo('.logobar',{opacity: 0,y: 100},{opacity: 1,y: 0,duration: 0.4,ease: "linear"})
.fromTo('.othersbar',{opacity: 0,y: 100},{opacity: 1,y: 0,duration: 0.2,ease: "linear"})
.fromTo('#navpages2',{opacity: 0},{opacity: 1, duration: 0.4,ease: "linear"})
.fromTo('.wcard1',{opacity: 0,},{opacity: 1,duration: 0.6,ease: "back"})
.fromTo('.wcard2',{opacity: 0,},{opacity: 1,duration: 0.6,ease: "back"})
.fromTo('.wcard3',{opacity: 0,},{opacity: 1,duration: 0.6,ease: "back"});


t11.fromTo('.title5',{opacity: 0,y: 100},{opacity: 1,y: 0,duration: 0.7,ease: "power4"})
.fromTo('#name',{opacity: 0,width: '0'},{opacity: 1,width: '100%',duration: 0.3,ease: "linear"})
.fromTo('#age',{opacity: 0,width: '0'},{opacity: 1,width: '100%',duration: 0.3,ease: "linear"})
.fromTo('#email',{opacity: 0,width: '0'},{opacity: 1,width: '100%',duration: 0.3,ease: "linear"})
.fromTo('.mobile-div',{opacity: 0,width: '0'},{opacity: 1,width: '100%',duration: 0.3,ease: "linear"})
.fromTo('.selectp',{opacity: 0,width: '0'},{opacity: 1,width: '100%',duration: 0.3,ease: "linear"})
.fromTo('.selectf',{opacity: 0,width: '0'},{opacity: 1,width: '100%',duration: 0.3,ease: "linear"})
.fromTo('.messageform',{opacity: 0,width: '0'},{opacity: 1,width: '100%',duration: 0.3,ease: "linear"})
.fromTo('.submitbtn',{opacity: 0,y: 10},{opacity: 1,y:0,duration: 0.5,ease: "linear"})
.fromTo('.copyright',{opacity: 0,x: -1000},{opacity: 1,x:0,duration: 0.5,ease: "linear"});


t12.fromTo('.title6',{opacity: 0,y: 100},{opacity: 1,y: 0,duration: 0.7,ease: "power4"})
.fromTo('.tm1',{opacity: 0,y: 200},{opacity: 1,y: 0,duration: 0.3,ease: "elastic"})
.fromTo('.tm2',{opacity: 0,y: 200},{opacity: 1,y: 0,duration: 0.3,ease: "elastic"})
.fromTo('.tm3',{opacity: 0,y: 200},{opacity: 1,y: 0,duration: 0.3,ease: "elastic"})
.fromTo('.rnote',{opacity: 0,x: -1000},{opacity: 1,x: 0,duration: 1, ease: "linear"},"+=1");



var scene1 = new ScrollMagic.Scene({
    triggerElement: '#about',
    triggerHook: 0.6
})
.setTween(t2)
.addTo(controller1);


var scene2 = new ScrollMagic.Scene({
    triggerElement: '.abtnavbar',
    triggerHook: 1
})
.setTween(t3)
.addTo(controller1);


var scene3 = new ScrollMagic.Scene({
    triggerElement: '#services',
    triggerHook: 0.6
})
.setTween(t5)
.addTo(controller1);


var scene4 = new ScrollMagic.Scene({
    triggerElement: '#skills',
    triggerHook: 0.9
})
.setTween(t6)
.addTo(controller1);


var scene5 = new ScrollMagic.Scene({
    triggerElement: '.skillcards',
    triggerHook: 0.9
})
.setTween(t7)
.setClassToggle(".load","loading")
.addTo(controller1);


var scene6 = new ScrollMagic.Scene({
    triggerElement: '.skillcards',
    triggerHook: 0.9
})
.setTween(t8)
.setClassToggle(".load1","loading1")
.addTo(controller1);

function animplay(){
    t4.play();
}


var scene7 = new ScrollMagic.Scene({
    triggerElement: '#works',
    triggerHook: 0.9
})
.setTween(t9)
.addTo(controller1);


var scene8 = new ScrollMagic.Scene({
    triggerElement: '.worksnavbar',
    triggerHook: 0.9
})
.setTween(t10)
.addTo(controller1);


var scene9 = new ScrollMagic.Scene({
    triggerElement: '#contact',
    triggerHook: 0.7
})
.setTween(t11)
.addTo(controller1);


var scene9 = new ScrollMagic.Scene({
    triggerElement: '#testimonials',
    triggerHook: 0.9
})
.setTween(t12)
.addTo(controller1);



var scene10 = new ScrollMagic.Scene({
    triggerElement: '#about',
    triggerHook: 0
})
.setClassToggle('.topbtn','visible')
.addTo(controller1);