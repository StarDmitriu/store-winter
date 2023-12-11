let swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    
    slidesPerView: "auto",
    centeredSlides: true,
    // If we need pagination
    navigation: {
        nextEl: '.custom-next',
        prevEl: '.custom-prev',
    }
});


$('.single-item').slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	arrows: true,
	prevArrow: "<img src='../img/prev2.svg' class='prev' alt='1'>",
	nextArrow: "<img src='../img/next2.svg' class='next' alt='2'>",
	responsive: [
		{
			breakpoint: 1130,
			settings: {
				slidesToShow: 3,
			},
		},
		{
			breakpoint: 740,
			settings: {
				slidesToShow: 2,
			},
		},
		{
			breakpoint: 500,
			settings: {
				slidesToShow: 1,
			},
		},
	],
})



let man__header = document.getElementById('man__header');
let woman__header = document.getElementById('woman__header');
let child__header = document.getElementById('child__header');
let line1__header = document.getElementById('line1__header');
let line2__header = document.getElementById('line2__header');
let line3__header = document.getElementById('line3__header');

man__header.addEventListener('click', function() {
    line1__header.style.display = 'block';
    line2__header.style.display = 'none';
    line3__header.style.display = 'none';
});

woman__header.addEventListener('click', function() {
    line1__header.style.display = 'none';
    line2__header.style.display = 'block';
    line3__header.style.display = 'none';
});

child__header.addEventListener('click', function() {
    line1__header.style.display = 'none';
    line2__header.style.display = 'none';
    line3__header.style.display = 'block';
});



let man__header2 = document.getElementById('man__header2')
let woman__header2 = document.getElementById('woman__header2')
let child__header2 = document.getElementById('child__header2')
let line1__header2 = document.getElementById('line1__header2')
let line2__header2 = document.getElementById('line2__header2')
let line3__header2 = document.getElementById('line3__header2')

man__header2.addEventListener('click', function () {
	line1__header2.style.display = 'block'
	line2__header2.style.display = 'none'
	line3__header2.style.display = 'none'
})

woman__header2.addEventListener('click', function () {
	line1__header2.style.display = 'none'
	line2__header2.style.display = 'block'
	line3__header2.style.display = 'none'
})

child__header2.addEventListener('click', function () {
	line1__header2.style.display = 'none'
	line2__header2.style.display = 'none'
	line3__header2.style.display = 'block'
})





/*
let burger = document.getElementById('burger');
let burger__menu = document.querySelector('.burger__menu');*/

function myFunction() {
    let main = document.getElementById('main')
    let burger__menu = document.querySelector('.burger__menu')
	if (burger__menu.style.display === 'none') {
		burger__menu.style.display = 'block'
	} else {
		burger__menu.style.display = 'none'
	}
}

/*
function burgerBlock(){
    burger.addEventListener('click', function () {
        burger__menu.style.display = 'block'
    })
}

function burgerNone(){
    burger.addEventListener('click', function () {
        burger__menu.style.display = 'none';
    })
}


if (burger__menu.style.display === 'none') {
    burgerBlock();
} else {
    burgerNone();
}*/