


let images = document.images,
    images_total_count = images.length,
    images_loaded_count = 0,
    perc_display = document.querySelector('#preloader-percent')

   
for(let i = 0; i < images_total_count; i++){
   let image_clone = new Image();
   image_clone.onload = image_loaded;
   image_clone.onerror = image_loaded;
   image_clone.src = images[i].src;
}

function image_loaded(){
   images_loaded_count++;

   perc_display.innerHTML = (( (100 / images_total_count) * images_loaded_count ) << 0) + '%'

   if( images_loaded_count >= images_total_count){
      setTimeout(()=>{
               let preloader = document.querySelector('.preloader');
               if(!preloader.classList.contains('done')){
                  preloader.classList.add('done');
                     }
            }, 1500)
   }
}


function parallax(e){
    this.querySelectorAll('.layer').forEach(layer =>{
        let speed = layer.getAttribute('data-speed')
        layer.style.transform = `translateX(${e.clientX*speed/1000}px)`
    })
}


document.addEventListener('mousemove', parallax);

const burger = document.querySelector('.menu_btn'),
      menu = document.querySelector('.nav__link'),
      burgerActive = document.querySelector('.burger'),
      nav = document.querySelector('.nav__link');



      burger.addEventListener('click',() =>{
          menu.classList.toggle("nav__link__active");
          burgerActive.classList.toggle("burger__active")
      });
      nav.addEventListener('click',() => {
          menu.classList.toggle("nav__link__active");
          burgerActive.classList.toggle("burger__active")
      })




