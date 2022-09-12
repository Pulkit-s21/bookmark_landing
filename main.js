import "./style.css";

// NavBar 
const navBtn = document.querySelector("#menu");
const closeBtn = document.querySelector(".cross");
const menuBar = document.querySelector('[role="menubar"]');

navBtn.addEventListener("click", () => {
  const isExpanded = JSON.parse(navBtn.getAttribute("aria-expanded")); // by default aria-expanded is false..it will store boolean value

  navBtn.setAttribute("aria-expanded", !isExpanded);
  // we are setting aria-expanded to opposite of wht isExpanded is..if true than false and if false then true

  menuBar.classList.toggle("hidden");
  menuBar.classList.toggle("flex");

  navBtn.classList.add("hidden");
  closeBtn.classList.remove("hidden");
});

closeBtn.addEventListener("click",() => {
  const isExpanded = JSON.parse(navBtn.getAttribute("aria-expanded")); // by default aria-expanded is false

  closeBtn.setAttribute("aria-expanded", !isExpanded);
  // we are setting aria-expanded to opposite of wht isExpanded is..if true than false and if false then true

  menuBar.classList.toggle("hidden");
  menuBar.classList.toggle("flex");

  navBtn.classList.remove("hidden");
  closeBtn.classList.add("hidden");
})

// Dark/Light mode toggle
const sunIcon = document.querySelector(".sun");
const moonIcon = document.querySelector(".moon");

// Theme vars
const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

// Icon toggling
const iconToggle = () => {
  sunIcon.classList.toggle("hidden");
  moonIcon.classList.toggle("hidden");
}

// Initial theme check
const themeCheck = () => {
  if (userTheme === 'dark' || (systemTheme && userTheme)){
    document.documentElement.classList.add("dark");
    moonIcon.classList.add("hidden");
    return;
  }
  sunIcon.classList.add("hidden");
}

// Manual switch
const themeSwtch = () => {
  if (document.documentElement.classList.contains("dark")){
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme","light");
    iconToggle();
    return;
  }
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme","dark");
    iconToggle();
}

// call theme switch on clicking button
sunIcon.addEventListener("click",()=>{
  themeSwtch();
});

moonIcon.addEventListener("click",()=>{
  themeSwtch();
});

// invoke them on initial load
themeCheck();


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