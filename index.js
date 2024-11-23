// carousel
//step 1: get DOM
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:1,
        itemsDesktop:[1000,1],
        itemsDesktopSmall:[979,1],
        itemsTablet:[768,1],
        pagination:true,
        transitionStyle:"backSlide",
        autoPlay:true
    });
});
}
// carousel end

// Aos Animation
AOS.init({
    offset: 200,
    duration: 1300
  });


// Event delegation to handle multiple cards
document.addEventListener("click", (event) => {
    // Check if clicked button is an increase or decrease button
    if (event.target.classList.contains("increaseBid") || event.target.classList.contains("decreaseBid")) {
      const bidControls = event.target.closest(".bid-controls"); // Get the closest parent bid-controls div
      const bidAmountElement = bidControls.querySelector(".bid-amount"); // Find the bid amount span
      let bidAmount = parseFloat(bidAmountElement.getAttribute("data-bid")); // Read current bid value
  
      // Adjust bid amount based on button clicked
      if (event.target.classList.contains("increaseBid")) {
        bidAmount += 5;
      } else if (event.target.classList.contains("decreaseBid") && bidAmount > 45) {
        bidAmount -= 5;
      }
  
      // Update UI and data attribute
      bidAmountElement.setAttribute("data-bid", bidAmount.toFixed(2));
      bidAmountElement.innerText = `$${bidAmount.toFixed(2)}`;
    }
  });

//   watches  Bid Increment/Decrement