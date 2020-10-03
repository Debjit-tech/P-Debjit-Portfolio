var submit = document.querySelector(".submitbtn");


function Submit(){
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
    var purpose = document.getElementById("purpose").textContent;
    var freetime = document.getElementById("freetime").textContent;
    var message = document.getElementById("message").value;

    console.log(name);
    console.log(age);
    console.log(email);
    console.log(mobile);
    console.log(purpose);
    console.log(freetime);
    console.log(message);

    Email.send({ 
        SecureToken: '526df927-883c-40c5-bdd9-434b00c37d18', 
        To: 'dpramanick9990@gmail.com', 
        From: "cdorg27@gmail.com", 
        Subject: "New client for "+purpose, 
        Body: "Name: "+name+"\nAge: "+age+"\nE-Mail: "+email+"\nMobile No.: "+mobile+"\nPurpose: "+purpose+"Free time: "+freetime+"\n\n\n"+message, 
      }) 
        .then(function (message) { 
          alert("mail sent successfully") 
        }); 


}


submit.onclick = () =>{
    Submit();
}