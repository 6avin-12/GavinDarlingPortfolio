//hamburger menu 
//document.querySelector('.hamburger-button').addEventListener('click', function() { 
//    document.querySelector('.nav-links').style.display =  
//    (document.querySelector('.nav-links').style.display == 'none') ? 'block' : 'none'; 
//}); 



//When the user clicks on the button, 
//toggle between hiding and showing the dropdown content
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


 //pretty pretty gallery 
 const model = document.querySelector(".model"); 
 const previews = document.querySelectorAll(".gallery img"); 
 const original = document.querySelector(".full-img");  
 const caption = document.querySelector(".caption"); 

 previews.forEach((preview) => { 
     preview.addEventListener("click", () => { 
         original.src = preview.getAttribute("data-original"); 
         model.classList.add("open"); 
         caption.textContent = preview.getAttribute("alt"); 
     }); 
 }); 
 
 model.addEventListener("click", (e) => { 
     if (e.currentTarget.classList.contains("model")) { 
         model.classList.remove("open"); 
         original.classList.remove("open"); 
     } 
 }); 
