/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu')
      navToggle = document.getElementById('nav-toggle')
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
        skillsHeader = document.querySelectorAll('.skills__header')

        function toggleSkills(){
            let itemsClass = this.parentNode.className

            for(i = 0; i < skillsContent.length; i++){
                skillsContent[i].className = 'skills__content skills__close'
            }
            if(itemsClass === 'skills__content skills__close'){
                this.parentNode.className = 'skills__content skills__open'
            }
        }

        skillsHeader.forEach((el) =>{
            el.addEventListener('click', toggleSkills)
        })
/*==================== QUALIFICATION TABS ====================*/

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal'),
        modalBtns = document.querySelectorAll('.services__button'),
        modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () =>{
        modal(i)
    })
})

modalCloses.forEach((modalClose) =>{
    modalClose.addEventListener('click', () =>{
        modalViews.forEach((modalView) =>{
            modalView.classList.remove('active-modal')
        } )
    })
} )

/*==================== PORTFOLIO SWIPER  ====================*/
let swiper = new Swiper('.portfolio__container',{
    cssMode: true,
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el:'.swiper-pagination',
        clickable: true,
    },
   
});

/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYoffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <=sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll',scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
        const nav = document.getElementById('header')
        if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll',scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')


const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrenticon = ()  => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'


if(selectedTheme){

    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () =>{
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme',getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrenticon())
} )


function validation(){
    var text = document.getElementById('email').value;
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    var error = document.getElementById('error-email');
    if(text.match(pattern))
    {
        error.innerHTML = 'valid email Address';
        error.style.color = '#00ff00' 
    }else{
        error.innerHTML = 'invalid email Address';
        error.style.color = 'red';
    }
    if(text == "")
    {
        error.innerHTML = "";   
    }  
}

function validationName(){
    var name = document.getElementById('label-name').value;
    var a = document.getElementById('name-error');
    var b = /^[a-zA-Z\-]+$/;
    
    if(name == ""){
        a.innerHTML = 'please fill the name';
        a.style.color = 'red';
    }
    if(name.length<3){
        a.innerHTML = 'name must be 3characters';
        a.style.color = 'red';
    }
    if(name.length>20){
        a.innerHTML = 'name must be less than 20charaters';
        a.style.color = 'red';
    }
    if(name.match(b)){
        a.innerHTML = "";

        true;
    }
    else{
        a.innerHTML = 'please enter alphabets only';
        a.style.color = 'red';
    }
}
function validationb(){
    var texta = document.getElementById('textb').value;
    var alert = document.getElementById('mbox');
  
    if(texta.length<5){
        alert.innerHTML = 'please enter atlest 10 words!';
        alert.style.color = 'red'
    }
    if(texta.length>10){
        alert.innerHTML = 'valid';
        alert.style.color = 'green';
    }
    if(texta == ""){
        alert.innerHTML = 'please fill the message!';
        alert.style.color = 'red';
    }
}
function validationpro(){
    var protext = document.getElementById('proA').value;
    var proAlert = document.getElementById('pro');
    
    if(protext.length<3 && protext.length>=1){
        proAlert.innerHTML = 'please enter atleast 5characters';
        proAlert.style.color = 'red';
    }
    else{
        proAlert.innerHTML = "";
    }
    if(protext == ""){
        proAlert.innerHTML = 'please fill the project';
    }
}