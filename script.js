//mobile nav
let hamburgerIcon = document.getElementById("icon_hamburger");
let mobileNav = document.getElementById("mobile_nav");
let page = document.getElementsByTagName("body");
hamburgerIcon.addEventListener("click", function(){
    if ( mobileNav.style.display == "none") {
    mobileNav.style.display="flex";
    document.body.style.overflow = 'hidden';
    hamburgerIcon.src = "images/cancel.png";
    } else {
        mobileNav.style.display="none";
        document.body.style.overflow = 'auto';
        hamburgerIcon.src = "images/hamburger-menu.png";
    }
})

//form
let formButton = document.getElementById("form_button");
let form = document.getElementById("form");
let closeForm = document.getElementById("form_close");

formButton.addEventListener("click", function(){
  if(form.style.opacity == "0") {
  form.style.opacity = "1";
  } else {
    form.style.opacity = "0";
  }
})

closeForm.addEventListener("click", function(){
  form.style.opacity = "0";
})


//slideshow
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slideshow");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block"; 
}

//chart
new Chart(document.getElementById("bar-chart"), {
  type: 'bar',
  data: {
    labels: ["8.00", "9.00","10.00","11.00","12.00", "13.00","14.00","15.00", "16.00", "17.00", "18.00", "19.00", "20.00", "21.00", "22.00"],
    datasets: [
      {
        label: "Pravděpodobnost fronty",
        backgroundColor: ["#FFC59B", "#F88C6C", "#FFC59B","#F88C6C", "#E64E21","#F88C6C","#F88C6C","#FFC59B","#FFC59B",
        "#E64E21", "#E64E21","#FFC59B", "#E64E21", "#FFC59B", "#FFC59B" ],
        data: [10, 15, 5, 14, 20, 13, 12, 10, 12, 19, 20, 15, 18, 8, 5],
        borderRadius: 20
      }
    ]
  },
  options: {
      scales: {
        legend: {
          display: false //This will do the task
       },
        yAxis: {
            display: false,
        },
        xAxis: {
          grid: 
          {
            display: false
          }
        }
    },
      responsive: true,
      plugins: {
        tooltip: {
          enabled: false
        },
        legend: false
      }
    
  }
});
