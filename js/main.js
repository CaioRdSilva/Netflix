window.addEventListener('scroll', function(){
    let header = document.querySelector('.header-nav');
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('nav-actived', windowPosition)
})

class MobileNavBar{
    constructor(mobileMenu, menu ,links){
        this.mobileMenu = document.querySelector(mobileMenu)
        this.menu = document.querySelector(menu)
        this.links = document.querySelectorAll(links)
        this.active = "active";
        this.handleClick = this.handleClick.bind(this); 
    }

    animateLinks(){
        this.links.forEach((link, index) => {
            link.style.animation 
            ? (link.style.animation = '') 
            : (link.style.animation = `navLinkFade 0.5s ease forwards 0.15s`)
        })
    }

    handleClick(){
        this.menu.classList.toggle(this.active);
        this.mobileMenu.classList.toggle(this.active)
        this.animateLinks();
    }

    addClickEvent(){
        this.mobileMenu.addEventListener("click", this.handleClick)
    }
    init(){
        if(this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavBar = new MobileNavBar(
    ".mobile-menu",
    ".menu",
    ".links",
);
mobileNavBar.init()