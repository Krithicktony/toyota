function showslider(){
    const sidebar = document.querySelector('.slider0')
    sidebar.style.display = 'flex'
    event.preventDefault();
}
function showhide(){
    const sidebar = document.querySelector('.slider0')
    sidebar.style.display = 'none'
    event.preventDefault();
}










// slider one

let slideposition=0;
const slider=document.querySelectorAll('.slideritem');
const totalslider=slider.length;
const prev=document.querySelector('.prev');
const next=document.querySelector('.next');

prev.addEventListener('click',function(){
    prevslide();
})
next.addEventListener('click',function(){
    nextslide()
})
function updateposition(){
    slider.forEach(slide=>{
        slide.classList.remove('active');
        slide.classList.add('hidden')

    });
    slider[slideposition].classList.add('active')
}


function prevslide(){
    if(slideposition==0){
        slideposition=totalslider-1;
    }else{
        slideposition--;
    }
    updateposition();
};
function nextslide(){
    if(slideposition==totalslider-1){
        slideposition=0;
    }else{
        slideposition++;
    }
    updateposition();
};
