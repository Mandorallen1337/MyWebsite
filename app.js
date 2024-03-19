    // Include Navbar using JavaScript
    document.addEventListener("DOMContentLoaded", function() {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                if (xhr.status == 200) {
                    document.getElementById("navbar-placeholder").innerHTML = xhr.responseText;
                } else {
                    console.error("Error loading navbar: " + xhr.status);
                }
            }
        };
        xhr.open("GET", "navbar.html", true);
        xhr.send();
    });
    
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar-menu');

menu.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});

menuLinks.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
    });


