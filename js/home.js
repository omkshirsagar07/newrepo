window.addEventListener('resize', function(){
    addRequiredClass();
})


function addRequiredClass() {
    if (window.innerWidth < 860) {
        document.body.classList.add('mobile')
    } else {
        document.body.classList.remove('mobile') 
    }
}

window.onload = addRequiredClass

let hamburger = document.querySelector('.hamburger')
let mobileNav = document.querySelector('.nav-list')
let stickySocial = document.querySelector('#sticky-container')
let hero = document.querySelector('.hero-container')

let bars = document.querySelectorAll('.hamburger span')

let isActive = false

hamburger.addEventListener('click', function() {
    mobileNav.classList.toggle('open')

    if(!isActive) {
        bars[0].style.transform = 'rotate(45deg)'
        bars[1].style.opacity = '0'
        bars[2].style.transform = 'rotate(-45deg)'
        stickySocial.style.display = 'none';
        hero.style.display = 'none';
        isActive = true
    } else {
        bars[0].style.transform = 'rotate(0deg)'
        bars[1].style.opacity = '1'
        bars[2].style.transform = 'rotate(0deg)'
        stickySocial.style.display = 'block';
        hero.style.display = 'block';
        isActive = false
    }
});

function socialLinks(media){
    setTimeout(function(){
        switch(media) {
            case 'fb':
                openInNewTab("https://www.instagram.com/getsuccesstoday");
                break;
            case 'twtr':
                break;
            case 'ig':
                openInNewTab("https://www.instagram.com/getsuccesstoday");
                break;
            case 'linked':
                openInNewTab("https://www.linkedin.com/company/getsuccesstoday");
                break;
            case 'yt':
                openInNewTab("https://m.youtube.com/c/AkashGoelMotivationalSpeaker?sub_confirmation=1");
                break;
            case 'wp':
                openInNewTab("https://wa.me/918077179308");
                break;
            default:
                break;
        }
    }, 300);
}

function openInNewTab(url) {
    window.open(url, '_blank').focus();
   }

   
function scrollUptoDiv() {
    console.log("Function called")
    $('html, body').animate({
        scrollTop: $("#whatyouwilllearn").offset().top
        }, 1000);
   }