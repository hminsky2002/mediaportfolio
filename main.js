var navbar = document.querySelector(".topnav")
var ham = document.querySelector(".ham")
ham.addEventListener("click", toggleHamburger)

function toggleHamburger(){
  navbar.classList.toggle("showNav")
  ham.classList.toggle("showClose")
}
var menuLinks = document.querySelectorAll(".menuLink")
menuLinks.forEach(
  function(menuLink) {
    menuLink.addEventListener("click", toggleHamburger)
  }
)


function changeWriting(a) {
        document.getElementById("writing").src=a;
    }
function changeScript(b) {
            document.getElementById("script").src=b;
        }
var v = document.getElementById("video");
var t = document.getElementById("videotitle");
var d = document.getElementById("videodescription");

function changeVideo(delta) {
                    if (delta == 1){
                    v.src="https://drive.google.com/file/d/1xrO0mIa4do63HPMNVAr7ym05qlh44xKC/preview";
                    t.innerHTML= "The Silly Mayor";
                    d.innerHTML = "A 10 minute short film I wrote with my friend, about a zany little kid who gets to be mayor of a small town in nebrasak for one day due to the magic of make a wish";

                }
                else if (delta == 2){
                v.src="https://drive.google.com/file/d/1137HZkGVvGda_gfdU5nneSuTJGBflaqP/preview";
                t.innerHTML = "Sorting Hat";
                d.innerHTML = "A skit about the wizarding world of hogwarts";

            }
            else if (delta == 3){
            v.src="https://drive.google.com/file/d/13JMKUMXCceteo2pgy1ankMpwTjE9aXCj/preview";
            t.innerHTML = "General Anatomy";
            d.innerHTML = "A skit about medical professionals";
        } else {
            v.src="https://drive.google.com/file/d/1xrO0mIa4do63HPMNVAr7ym05qlh44xKC/preview";
            t.innerHTML = "The Silly Mayor";
            d.innerHTML = "A 10 minute short film I wrote with my friend, about a zany little kid who gets to be mayor of a small town in nebrasak for one day due to the magic of make a wish";
        }
    }
