
/* Testimonials */

var previous=document.querySelector('#arrow-previous');
var next=document.querySelector('#arrow-next');
var testimonial_list=document.querySelectorAll('.testimonial-item');
var active=document.querySelector('.testimonial-item.active');

var index=0;
previous.addEventListener('click',()=>{
    if (index===0){
        index=-(testimonial_list.length-1);
    }
    else{
        index++;
    }
    console.log(index)
    active.style.marginLeft=`${index}00%`;
})
next.addEventListener('click',()=>{
    if (Math.abs(index)===testimonial_list.length-1){
        index=0;
    }
    else{
        index--;
    }
    console.log(index)
    active.style.marginLeft=`${index}00%`;
})