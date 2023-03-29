const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const pageLoader = document.querySelector(".page-loader");
const heroText = document.getElementById("hero-text");
const logo = document.querySelector(".logo");
const loader = document.querySelector(".loader");

function counter(){
        let count = setInterval(function(){
            let c = document.getElementById("counter"),
                int = parseInt(c.textContent);
                c.textContent = (++int).toString() + "%";
                if(int == 100){
                    clearInterval(count);
                    loader.style.animationPlayState = "paused";
                }
        })

}
counter()  




window.addEventListener("load", function(){
        
          
    pageLoader.classList.add("page-loader-end");

    setTimeout(function () {
        pageLoader.style.display = "none";
    }, 1000);

    heroText.classList.add("h1-active");

    logo.style.animationPlayState = "running";
})
        


document.onclick = function(e){
    menuBtn.classList.add('active');
    menu.classList.add('active');

    if(e.target.id !== 'menu-btn' && e.target.id !== 'menu' && e.target.id !== 'theme-select' && e.target.id !== 'lang-btn'){
        menuBtn.classList.remove('active');
        menu.classList.remove('active');
    }
}


window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);