// modify the width of the side menu to open and close it
function openMenu() {
    document.getElementById("sideMenu").style.width = "100%";}
  
    function closeMenu() {
    document.getElementById("sideMenu").style.width = "0";}
    
    // loop over submenus within the side menu to open and reveal their contents or be hidden
    var submenus = document.getElementsByClassName("dropdown_btn");
    for (var i = 0; i < submenus.length; i++) {
        // when submenu is clicked, hide or show the .active css class
        submenus[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var submenuProducts = this.nextElementSibling;
            if (submenuProducts.style.display == "block") {
                submenuProducts.style.display = "";
            } else {
                submenuProducts.style.display = "block";
            }
        });
    }