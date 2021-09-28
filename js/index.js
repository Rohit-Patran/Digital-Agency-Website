var menuclass=document.getElementsByClassName("menu-class")[0]
var links=document.getElementsByClassName("links")[0]
function openMenu()
{
    
    if(menuclass.style.backgroundColor=="white")
    {
        
        links.style.display="flex"
        menuclass.style.backgroundColor="lightgrey"
        menuclass.style.transition="0.3s"
    }
    else
    {
        
        links.style.display="none"
        menuclass.style.backgroundColor="white"
        menuclass.style.transition="0.3s"
    }
    
}
function linkOps()
{
    links.style.display="none"
    menuclass.style.backgroundColor="white"
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementsByTagName("nav")[0].style.position = "sticky";
  } else {
    document.getElementsByTagName("nav")[0].style.position= "relative";
  }
  prevScrollpos = currentScrollPos;
}

