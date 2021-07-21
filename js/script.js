let isMobile = {
   Android: function() {return navigator.userAgent.match(/Android/i);},
   BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
   iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
   Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
   Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
   any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
};
const footer = document.querySelector('.footer');

new fullpage('#page', {
	autoScrolling: true,
	scrollHorizontally: true,
	scrollOverflow: true,
	// afterLoad: function(origin){

	// 	if(origin.index == 3){
	// 		fullpage_api.setAutoScrolling(false);
	// 	} else {
	// 		fullpage_api.setAutoScrolling(true);
	// 	}

	// }

	// onLeave: function(origin, destination, direction){

	// 	if(origin.index == 1 && direction =='down'){
	// 		fullpage_api.setAutoScrolling(false);
	// 	} else {
	// 		fullpage_api.setAutoScrolling(true);
	// 	}

	// }

});

if (window.innerWidth < 992) {
	footer.style.display = 'none';	
}
window.onload = () => {
   if (window.innerWidth > 1024) {
      const header  = document.querySelector('.header');
const title   = document.querySelector('.intro__title');
const btn     = document.querySelector('.intro__btn');
const scroll  = document.querySelector('.intro__scroll');
const footer  = document.querySelector('.footer');

header.classList.add('animate__animated', 'animate__fadeInDown');
header.style.setProperty('--animate-duration', '1.8s');

title.classList.add('animate__animated', 'animate__fadeInLeft');
title.style.setProperty('--animate-duration', '1.8s');

btn.classList.add('animate__animated', 'animate__fadeInRight');
btn.style.setProperty('--animate-duration', '1.8s');

scroll.classList.add('animate__animated', 'animate__fadeInUp');
scroll.style.setProperty('--animate-duration', '1.8s');

footer.classList.add('animate__animated', 'animate__fadeInUp');
footer.style.setProperty('--animate-duration', '1.8s');

btn.addEventListener('animationend', () => {
   btn.classList.add('_anim');
   scroll.classList.add('_anim');
});
   }
   if (window.innerWidth < 768 && isMobile.any()) {
   const body   = document.querySelector('body');
   const burger = document.querySelector('.menu-header__btn');
   const menu   = document.querySelector('.menu__body');
   
   burger.addEventListener('click', () => {
      body.classList.toggle('_lock');
      burger.classList.toggle('_active');
      menu.classList.toggle('_active');
   });
}
   const lang    = document.querySelector('.info-header__column--lang');
const subMenu = document.querySelector('.info-header__submenu');

if (lang !== null) {
   lang.addEventListener('click', (e) => {
      subMenu.classList.toggle('_show');
      subMenu.previousElementSibling.classList.toggle('_show');
   });
} else {
   console.log('Селектор не найдён.');
}

document.addEventListener('click', (e) => {
   if (!e.target.closest('.info-header__column--lang')) {
      subMenu.classList.remove('_show');
      subMenu.previousElementSibling.classList.remove('_show');
   }
});
};