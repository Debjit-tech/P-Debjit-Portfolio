var webservice = document.querySelector(".card1");
var webuiservice = document.querySelector(".card2");
var wpservice = document.querySelector(".card3");
var logoservice = document.querySelector(".card4");
var bcardservice = document.querySelector(".card5");
var bannerservice = document.querySelector(".card6");


var purposebox = document.getElementById("purpose");


webservice.onclick = () =>{
    window.location.hash = "#contact";
    purposebox.textContent = "Web Design Service";
    purposebox.style.color = "white";
};

webuiservice.onclick = () =>{
    window.location.hash = "#contact";
    purposebox.textContent = "Web UI Design Service";
    purposebox.style.color = "white";
};

wpservice.onclick = () =>{
    window.location.hash = "#contact";
    purposebox.textContent = "Wordpress Site Design Service";
    purposebox.style.color = "white";
};

logoservice.onclick = () =>{
    window.location.hash = "#contact";
    purposebox.textContent = "Logo Design Service";
    purposebox.style.color = "white";
};

bcardservice.onclick = () =>{
    window.location.hash = "#contact";
    purposebox.textContent = "Business Card Design Service";
    purposebox.style.color = "white";
};

bannerservice.onclick = () =>{
    window.location.hash = "#contact";
    purposebox.textContent = "Banner Design Service";
    purposebox.style.color = "white";
};


for (const contactbtn of document.querySelectorAll(".contactbtn")) {
    contactbtn.addEventListener('click', function() {
        window.location.hash = "#contact";
    })
  }