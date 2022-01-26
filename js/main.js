const openNav = document.getElementById('open-menu')
const closeNav = document.getElementById('close-menu');

const Elements = document.getElementsByClassName("menu-switch");

const openNavBar = () => {
    for (let i = 0; i < Elements.length; i++) {
        Elements[i].classList.add("is-active");
    }
    console.log("menu abierto")
}
const closeNavBar= () => {
    for (let j = 0; j < Elements.length; j++) {
        Elements[j].classList.remove("is-active");
    }
    console.log("menu cerrado")
}
  
openNav.addEventListener("click", openNavBar)
closeNav.addEventListener("click", closeNavBar)

