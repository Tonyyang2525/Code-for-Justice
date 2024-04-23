function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
  }
  
  //click function for redirecting button//
  document.getElementById("btn").addEventListener("click", redirect);
  function redirect(){window.location.href = "page3.html"; }
  
  
  document.getElementById('recycling')