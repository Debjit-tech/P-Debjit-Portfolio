var slideindex = 1;
var currentindex = 1;


function vanish(){
    var p = document.getElementsByClassName('preloader')[0];
    p.style.display = "none";
}

setTimeout(vanish,3000);


function toggle(el){
    var navbar = document.getElementsByClassName('abtnavbar')[0].children;

    for( var i=0; i<navbar.length; i++){
        navbar[i].className = 'inactive';
    }

    el.className = 'active';
}

function toggle1(el){
    var navbar = document.getElementsByClassName('worksnavbar')[0].children;

    for( var i=0; i<navbar.length; i++){
        navbar[i].className = 'inactive';
    }

    el.className = 'active';
}


function showslides(n){
    var navpage= document.getElementById('navpages').children;

    if(n>navpage.length){slideindex = 1}
    if(n<1){slideindex = navpage.length}

    for(var i=0; i<navpage.length;i++){
        navpage[i].style.display = "none";
    }

    navpage[slideindex-1].style.display = "block";
}

function showslides1(n){
    var navpage2= document.getElementById('navpages2').children;

    if(n>navpage2.length){slideindex = 1}
    if(n<1){slideindex = navpage2.length}

    for(var i=0; i<navpage2.length;i++){
        navpage2[i].style.display = "none";
    }

    navpage2[slideindex-1].style.display = "grid";
}


showslides(slideindex);
showslides1(slideindex);

function plusslide(n){
    showslides(slideindex+=n);
}

function plusslide1(n){
    showslides1(slideindex+=n);
}


var showrate = document.getElementsByClassName("rate")[0];
var showeducation = document.getElementsByClassName("education")[0];
var showsocial = document.getElementsByClassName("social")[0];
var showweb = document.getElementsByClassName("webbar")[0];
var showlogos = document.getElementsByClassName("logobar")[0];
var showothers = document.getElementsByClassName("othersbar")[0];

var socialfb = document.getElementsByClassName("facebook")[0];
var socialln = document.getElementsByClassName("linkedin")[0];
var socialgit = document.getElementsByClassName("github")[0];


var visitSite1 = document.getElementsByClassName("visitbtn2")[0];
var visitSite2 = document.getElementsByClassName("visitbtn2")[1];
var visitSite3 = document.getElementsByClassName("visitbtn2")[2];


toggle(showrate);
toggle1(showweb);

showrate.onclick = () =>{
    if(currentindex == 2){
        plusslide(-1);
        toggle(showrate);
        currentindex = 1 ;
        
    }
    if(currentindex == 3){
        plusslide(-2);
        toggle(showrate);
        currentindex = 1 ;
    }
}

showeducation.onclick = () =>{
    if(currentindex == 1){
        plusslide(1);
        toggle(showeducation);
        currentindex = 2;
    }
    if(currentindex == 3){
        plusslide(-1);
        toggle(showeducation);
        currentindex = 2;
    }
}

showsocial.onclick = () =>{
    if(currentindex == 2){
        plusslide(1);
        toggle(showsocial);
        currentindex = 3;
        animplay();
    }
    if(currentindex == 1){
        plusslide(2);
        toggle(showsocial);
        currentindex = 3; 
        animplay();
    }

}

showweb.onclick = () =>{
    if(currentindex == 2){
        plusslide1(-1);
        toggle1(showweb);
        currentindex = 1 ;
        
    }
    if(currentindex == 3){
        plusslide1(-2);
        toggle1(showweb);
        currentindex = 1 ;
    }
}

showlogos.onclick = () =>{
    if(currentindex == 1){
        plusslide1(1);
        toggle1(showlogos);
        currentindex = 2;
    }
    if(currentindex == 3){
        plusslide1(-1);
        toggle1(showlogos);
        currentindex = 2;
    }
}

showothers.onclick = () =>{
    if(currentindex == 2){
        plusslide1(1);
        toggle1(showothers);
        currentindex = 3;
        animplay();
    }
    if(currentindex == 1){
        plusslide1(2);
        toggle1(showothers);
        currentindex = 3; 
        animplay();
    }

}


socialfb.onclick = () =>{
    url = "https://www.facebook.com/debjit.pramanick.56";
    window.open(url);
}
socialln.onclick = () =>{
    url = "https://www.linkedin.com/in/debjit-pramanick-7a6a971b1/";
    window.open(url);
}
socialgit.onclick = () =>{
    url = "https://github.com/Debjit-tech";
    window.open(url);
}


visitSite1.onclick = () =>{
    var url = "https://debjit-tech.github.io/Digital-Maketing-Website/";
    window.open(url, '_blank'); 
}
visitSite2.onclick = () =>{
    var url = "https://debjit-tech.github.io/Basic-business-website/";
    window.open(url, '_blank'); 
}
visitSite3.onclick = () =>{
    var url = "https://debjit-tech.github.io/Web-based-maze-game/";
    window.open(url, '_blank'); 
}




//---------------------------Resopnsive Design JS-----------------------------------


var showrate_1 = document.getElementsByClassName("rate2")[0];
var showeducation_1 = document.getElementsByClassName("education2")[0];
var showsocial_1 = document.getElementsByClassName("social2")[0];


var open = true;

function open_rate(){
    var hrrates = document.getElementsByClassName("hrrates")[1];
    var showrate_1 = document.getElementsByClassName("rate2")[0];
    if(!open){
        open = true;
        hrrates.style.display = "block";
        showrate_1.style.background = "#FF005C";
        return;
    }
    if(open){
        open = false;
        hrrates.style.display = "none";
        showrate_1.style.background = "none";
        return;
    }
}


function open_educ(){
    var recenteduc = document.getElementsByClassName("recenteduc")[1];
    var showeducation_1 = document.getElementsByClassName("education2")[0];

    if(!open){
        open = true;
        recenteduc.style.display = "block";
        showeducation_1.style.background = "#FF005C";
        return;
    }
    if(open){
        open = false;
        recenteduc.style.display = "none";
        showeducation_1.style.background = "none";
        return;
    }
}


function open_social(){
    var socialaccs = document.getElementsByClassName("socialaccs")[1];
    var showsocial_1 = document.getElementsByClassName("social2")[0];

    if(!open){
        open = true;
        socialaccs.style.display = "block";
        showsocial_1.style.background = "#FF005C";
        return;
    }
    if(open){
        open = false;
        socialaccs.style.display = "none";
        showsocial_1.style.background = "none";
        return;
    }
}