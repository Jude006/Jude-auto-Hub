menu = document.getElementById("menu")
menuicon = document.getElementById("menu-icon")

menuicon.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    if (!menu.classList.contains('hidden')) {
      landing.style.marginTop = menu.offsetHeight + 'px';
    } else {
      landing.style.marginTop = '100';
    }
  });

  document.addEventListener('DOMContentLoaded', function() {
    function animateCount(element, start, end, duration, intervalTime) {
      let current = start;
      const step = (end - start) / (duration / intervalTime); // Calculate step based on duration and interval time
      const interval = setInterval(() => {
        current += step;
        if ((step > 0 && current >= end) || (step < 0 && current <= end)) {
          current = end;
          clearInterval(interval);
        }
        element.textContent = Math.round(current);
      }, intervalTime); // Update every intervalTime ms
    }

    animateCount(document.getElementById('count1'), 0, 45, 2000, 100);
    animateCount(document.getElementById('count2'), 1000, 3200, 4000, 100);
    animateCount(document.getElementById('count3'), 1, 98, 3000, 100);
    animateCount(document.getElementById('count4'), 1, 1000, 5000, 100);
  });







//   document.addEventListener('DOMContentLoaded', function () {
//     var swiper = new Swiper('.swiper-container', {
//         pagination: {
//             el: '.swiper-pagination',
//             clickable: true,
//         },
//     });
// });

// window.addEventListener('load', function () {
//   // Hide the spinner and show the content
//   document.getElementById('spinner').classList.add('hidden');
//   document.getElementById('content').classList.remove('hidden');
// });

// window.addEventListener('load', function () {
//   // Hide the spinner and show the content
//   document.getElementById('spinner').classList.add('hidden');
//   document.getElementById('content').classList.remove('hidden');
// });

// document.addEventListener('DOMContentLoaded', function () {
//   new Typed('#typed', {
//       strings: ["fix cars.", "offer great services.", "value our customers."],
//       typeSpeed: 50,
//       backSpeed: 25,
//       backDelay: 1500,
//       startDelay: 500,
//       loop: true
//   });
// });

let accordo = document.getElementById("accordo")
let accord =document.getElementById("accord")



accord.addEventListener('click', () => {
  accordo.classList.toggle('hidden');
  if (!menu.classList.contains('hidden')) {
    landing.style.marginTop = menu.offsetHeight + 'px';
  } else {
    landing.style.marginTop = '100';
  }
});

     let menus = document.getElementById("menus")
let menuicono =document.getElementById("menuicono")



menuicono.addEventListener('click', () => {
  menus.classList.toggle('hidden');
  if (!menus.classList.contains('hidden')) {
    landing.style.marginTop = menus.offsetHeight + 'px';
  } else {
    landing.style.marginTop = '100';
  }
});

let princess = document.getElementById("princess")
let marve =document.getElementById("marve")

marve.addEventListener('click', () => {
  princess.classList.toggle('hidden');
  if (!princess.classList.contains('hidden')) {
    landing.style.marginTop = princess.offsetHeight + 'px';
  } else {
    landing.style.marginTop = '100';
  }
});



let boxone = document.getElementById("boxone")
let one = document.getElementById("one")
boxone.onclick = function(){
  one.classList.remove('hidden')
 
}


let appointmentButton = document.getElementById("appointmentButton")
let formModal = document.getElementById("formModal")
let close = document.getElementById("close")
let appointmentForm = document.getElementById("appointmentForm")

  appointmentButton.onclick = function(){
    formModal.classList.remove('hidden')
  }
  close.onclick = function(){
    formModal.classList.add('hidden')
  }
  
  window.addEventListener('click', (onclick) =>{
    if(onclick.target === formModal){
      formModal.classList.add('hidden')
    }
  })
 