// light styling
function toggleMode() {
    const themeElement = document.getElementById('theme');
    if(themeElement.getAttribute('href') === '../css/light.css'){
        document.getElementById('theme').setAttribute('href', '../css/dark.css');
        document.getElementById('toggle').className='fa-solid fa-toggle-off';
        document.getElementById('shapeTop').src='../assets/img/shape-top-black-80.png'; 
        document.getElementById('logoBottom').src='../assets/img/shape-top-dark-grey-80.png';
        document.getElementById('shapebottom').src='../assets/img/shape-top-dark-grey-80.png';
                }
    else {
        document.getElementById('theme').setAttribute('href', '../css/light.css');
        document.getElementById('toggle').className='fa-solid fa-toggle-on';
        document.getElementById('shapeTop').src='../assets/img/shape-top-white-80.png'; 
        document.getElementById('logoBottom').src='../assets/img/shape-top-grey-80.png';
        document.getElementById('shapebottom').src='../assets/img/shape-top-grey-80.png';
        }
    }


// hamburger styling
function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.style.display = navMenu.style.display ==='flex' ? 'none' : 'flex';
}

// countdown styling
        (function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;
  //I'm adding this section so I don't have to keep updating this pen every year :-)
  //remove this if you don't need it
  let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy + 1,
      dayMonth = "09/30/",
      birthday = dayMonth + yyyy;
  
  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }
  //end
  
  const countDown = new Date(birthday).getTime(),
      x = setInterval(function() {    

        const now = new Date().getTime(),
              distance = countDown - now;

        document.getElementById("dys").innerText = Math.floor(distance / (day)),
          document.getElementById("hrs").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("mis").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("ses").innerText = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        if (distance < 0) {
          document.getElementById("count").style.display = "EXPIRED";
          clearInterval(x);
        }
        //seconds
      }, 0)
  }());


// slide bar styling
// $(document).ready(function(){
//     $(".carousel").owl-carousel({
//         loop: true,
//         nav: true,
//         autoplay: true,
//         dots: true,
//         responsive:{
//             0: {
//                 items: 1,
//             },
//             600: {
//                 items: 1,  
//             },
//             1000: {
//                 items: 1,  
//             }
//         }
//     })
// })
    
