import "./style.css";

// NavBar 
const navBtn = document.querySelector("#menu");
const menuBar = document.querySelector('[role="menubar"]');

navBtn.addEventListener("click", () => {
  const isExpanded = JSON.parse(navBtn.getAttribute("aria-expanded")); // by default aria-expanded is false

  navBtn.setAttribute("aria-expanded", !isExpanded);
  // we are setting aria-expanded to opposite of wht isExpanded is..if true than false and if false then true

  menuBar.classList.toggle("hidden");
  menuBar.classList.toggle("flex");
});

// Form Validation.. not working rn if I keep it here but works if in HTML but messes up my label thing

function validation(){
  var form = document.getElementById("form");
  var email = document.getElementById("email").value;
  var text = document.getElementById("text");
  var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  
  if(email.match(pattern)){
    form.classList.add("valid");
    form.classList.remove("invalid");
    text.innerHTML = "Your Email Adress is Valid";
    text.style.color = "#50C878";
  }else{
    form.classList.add("invalid");
    form.classList.remove("valid");    
    text.innerHTML = "Whoops, make sure it's an email";
    text.style.color = "#d42a2a";
  }
};