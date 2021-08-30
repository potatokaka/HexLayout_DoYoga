// Swiper - Testimonial
var swiper = new Swiper(".swiper-testimonial", {
	slidesPerView: 1,
	spaceBetween: 0,
	grid: {
		rows: 3,
		fill: 'column',
	},
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	pagination: {
		el: '.swiper-pagination',
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	breakpoints: {
		768: {
			slidesPerView: 2,
			grid: {
				rows: 2,
				fill: 'row',
			},
			spaceBetween: 30,
		},
		992: {
			slidesPerView: 3,
			grid: {
				rows: 2,
				fill: 'row',
			},
			spaceBetween: 30,
		},
	},
});

// Swiper - Course Intro
var swiper = new Swiper(".swiper-course-intro", {
	slidesPerView: 2,
	spaceBetween: 15,
	grid: {
		rows: 2,
		fill: 'row',
	},
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	breakpoints: {
		768: {
			slidesPerView: 2,
			grid: {
				rows: 2,
				fill: 'row',
			},
			spaceBetween: 30,
		},
		992: {
			slidesPerView: 1.5,
			grid: {
				rows: 1,
				fill: 'row',
			},
			spaceBetween: 30,
		},
	},
});

// Swiper - Course Spec
var swiper = new Swiper(".swiper-course-spec", {
	slidesPerView: 1,
	spaceBetween: 0,
	grid: {
		rows: 3,
		fill: 'column',
	},
	breakpoints: {
		768: {
			slidesPerView: 2.5,
			grid: {
				rows: 1,
				fill: 'row',
			},
			spaceBetween: 30,
		},
		992: {
			slidesPerView: 3,
			grid: {
				rows: 1,
				fill: 'row',
			},
			spaceBetween: 20,
		},
	},
});


// AOS Animation

//AOS.init();
AOS.init({
  once: true,
  offset: 400, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000 // values from 0 to 3000, with step 50ms
});