/* Navigation Menu */
var nav = document.querySelector('nav');
var hamburger_menu = document.querySelector('.hamburger-menu-wrap')
var close_icon=document.querySelector('.nav-close-icon');
hamburger_menu.addEventListener('click', (event) => {
    nav.classList.add('open')
});
close_icon.addEventListener('click', (event) => {
    nav.classList.remove('open')
});

// Custom Dropdown

/* Resource:https://andrejgajdos.com/custom-select-dropdown/ */

for (const dropdown of document.querySelectorAll(".custom-select-wrapper")) {
    dropdown.addEventListener('click', function() {
        this.querySelector('.custom-select').classList.toggle('open');
    })
}

for (const option of document.querySelectorAll(".custom-option")) {
    option.addEventListener('click', function() {
        if (!this.classList.contains('selected')) {
            this.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
            this.classList.add('selected');
            this.closest('.custom-select').querySelector('.custom-select__trigger span').textContent = this.textContent;
        }
    })
}
window.addEventListener('click', function(e) {
    for (const select of document.querySelectorAll('.custom-select')) {
        if (!select.contains(e.target)) {
            select.classList.remove('open');
        }
    }
});

/*
Custom Date Picker
 https://github.com/TylerPottsDev/custom-date-picker
 */
const date_picker_element = document.querySelector('.date-picker');
const selected_date_element = document.querySelector('.date-picker .selected-date');
const dates_element = document.querySelector('.date-picker .dates');
const mth_element = document.querySelector('.date-picker .dates .month .mth');
const next_mth_element = document.querySelector('.date-picker .dates .month .next-mth');
const prev_mth_element = document.querySelector('.date-picker .dates .month .prev-mth');
const days_element = document.querySelector('.date-picker .dates .days');

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

let selectedDate = date;
let selectedDay = day;
let selectedMonth = month;
let selectedYear = year;

mth_element.textContent = months[month] + ' ' + year;

selected_date_element.textContent = formatDate(date);
selected_date_element.dataset.value = selectedDate;

populateDates();

// EVENT LISTENERS
date_picker_element.addEventListener('click', toggleDatePicker);
next_mth_element.addEventListener('click', goToNextMonth);
prev_mth_element.addEventListener('click', goToPrevMonth);

// FUNCTIONS
function toggleDatePicker (e) {
    if (!checkEventPathForClass(e.path, 'dates')) {
        dates_element.classList.toggle('active');
    }
}

function goToNextMonth (e) {
    month++;
    if (month > 11) {
        month = 0;
        year++;
    }
    mth_element.textContent = months[month] + ' ' + year;
    populateDates();
}

function goToPrevMonth (e) {
    month--;
    if (month < 0) {
        month = 11;
        year--;
    }
    mth_element.textContent = months[month] + ' ' + year;
    populateDates();
}

function populateDates (e) {
    days_element.innerHTML = '';
    let amount_days = 31;

    if (month == 1) {
        amount_days = 28;
    }

    for (let i = 0; i < amount_days; i++) {
        const day_element = document.createElement('div');
        day_element.classList.add('day');
        day_element.textContent = i + 1;

        if (selectedDay == (i + 1) && selectedYear == year && selectedMonth == month) {
            day_element.classList.add('selected');
        }

        day_element.addEventListener('click', function () {
            selectedDate = new Date(year + '-' + (month + 1) + '-' + (i + 1));
            selectedDay = (i + 1);
            selectedMonth = month;
            selectedYear = year;

            selected_date_element.textContent = formatDate(selectedDate);
            selected_date_element.dataset.value = selectedDate;

            populateDates();
        });

        days_element.appendChild(day_element);
    }
}

// HELPER FUNCTIONS
function checkEventPathForClass (path, selector) {
    for (let i = 0; i < path.length; i++) {
        if (path[i].classList && path[i].classList.contains(selector)) {
            return true;
        }
    }

    return false;
}
function formatDate (d) {
    let day = d.getDate();
    if (day < 10) {
        day = '0' + day;
    }

    let month = d.getMonth() + 1;
    if (month < 10) {
        month = '0' + month;
    }

    let year = d.getFullYear();

    return day + ' / ' + month + ' / ' + year;
}
document.addEventListener('click',(e)=>{
    if(!date_picker_element.contains(e.target)){
        dates_element.classList.remove('active')
    }
})



/* Testimonials */
var previous=document.querySelector('#arrow-previous');
var next=document.querySelector('#arrow-next');
var testimonial_list=document.querySelectorAll('.testimonial-item');
var active=document.querySelector('.testimonial-item.active');
var index=0;

function toggleArrowPassive(){
    if (index===0){
        previous.classList.add("passive")
    }else{
        previous.classList.remove('passive');
    }
}

previous.addEventListener('click',(e)=>{
    index!==0 ? index++ : false;
    toggleArrowPassive();
    active.style.marginLeft=`${index}00%`;
})
next.addEventListener('click',()=>{
    Math.abs(index)===testimonial_list.length-1 ? index=0 : index--;
    toggleArrowPassive();
    active.style.marginLeft=`${index}00%`;
})



/* Scrool To Top*/
var arrowUp=document.querySelector('.arrow-up');
arrowUp.addEventListener('click',()=>{
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
})
window.addEventListener('scroll',()=>{
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        arrowUp.style.opacity = "1";
    } else {
        arrowUp.style.opacity = "0";
    }
})