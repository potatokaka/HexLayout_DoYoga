// // Swiper OLD 1 Course
// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 1,
//   spaceBetween: 15,

//   // 768px 以上
//   breakpoints: {
//     768:{
//       slidesPerView: 4,
//       spaceBetween: 30,
//     },
//     992:{
//       slidesPerView: 1.3,
//       spaceBetween: 30,
//     },
//   },
//   autoplay: {
//     delay: 3000,
//   },
  
// });

// Swiper New Course
var swiper = new Swiper(".mySwiper", {
	slidesPerView: 1.3,
	spaceBetween: 30,

	// slidesPerView: 2,
	// spaceBetween: 15,


	// breakpoints: {
	// 	// when window width is >= 768px
	// 	768: {
	// 		slidesPerView: 2,
	// 		spaceBetween: 30,
	// 	},
	// 	992: {
	// 		slidesPerView: 1.3,
	// 		spaceBetween: 30,
	// 	},
	// }

  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },

  // 768px 以上
  // breakpoints: {
  //   768:{
  //     slidesPerView: 4,
  //     spaceBetween: 30,
  //   },
  //   992:{
  //     slidesPerView: 1.3,
  //     spaceBetween: 30,
  //   },
  // },
  
});

// Swiper New-----------------------------
// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 1,
//   spaceBetween: 0,
//   grid: {
//     rows: 3,
//     fill: 'column',
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true
//   },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   autoplay: {
//     delay: 3000,
//   },
//   breakpoints: {
//     // when window width is >= 768px
//     768: {
//       slidesPerView: 2,
//       spaceBetween: 30,
//       grid: {
//         rows: 2,
//         fill: 'row',
//       },
//     },
//     992: {
//       slidesPerView: 3,
//       spaceBetween: 30,
//       grid: {
//         rows: 2,
//         fill: 'row',
//       },
//     },
//   }
// });









// AOS Animation

//AOS.init();
AOS.init({
  once: true,
  offset: 400, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000 // values from 0 to 3000, with step 50ms
});