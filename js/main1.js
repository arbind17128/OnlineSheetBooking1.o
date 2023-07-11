const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)')
let count = document.getElementById('count');
let total = document.getElementById('total');
let movieSeleted = document.getElementById('movie-list');
let showTime = document.getElementById('time-id');
let button = document.querySelector('.btn');
let optionTime = document.querySelectorAll('.time');
let moviePrice = +movieSeleted.value;








// seats.addEventListener('click', hello);
// function hello() {
//     console.log('hello');
// }

function populateUI() {
    let selectedSeats = JSON.parse(localStorage.getItem('selectedSeat'))
    if (selectedSeats !== null && selectedSeats.length > 0) {
        console.log('lehh');
        seats.forEach((seat, index) => {
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected')
                // button.classList.add('bnt-color');

            }
        })
    }

    let selectedMovie = localStorage.getItem('MovieIndex');
    if (selectedMovie !== null) {

        movieSeleted.selectedIndex = selectedMovie;
    }


}


populateUI();
let intem = [];



var hello = updateSelectCount = () => {
    let selectedSeat = document.querySelectorAll('.row .seat.selected')
    let indexOfSeat = [...selectedSeat].map((seat) => [...seats].indexOf(seat));
    localStorage.setItem('selectedSeat', JSON.stringify(indexOfSeat))
    console.log(selectedSeat.length);

    count.textContent = selectedSeat.length;
    total.textContent = selectedSeat.length * moviePrice;

}
// store movie index and price into localStorage
function movieIndex(movieindex, price) {
    localStorage.setItem('MovieIndex', movieindex);
    localStorage.setItem('priceOfMovie', price);
}
showTime.addEventListener('change', (e) => {
    var selectedTime = e.target.value;
    let selectedSeat = document.querySelectorAll('.row .seat.selected');
    let indexOfSeat = [...selectedSeat].map((seat) => [...seats].indexOf(seat));
    selectedShowTime(indexOfSeat, e.target.selectedIndex);
});
function selectedShowTime(show, index) {
    // console.log(index);
    console.log(show, index);
    if (show !== null) {
        localStorage.setItem('fisrtshow', index);
        localStorage.setItem('selectedSeats1', JSON.stringify(show));

    }
}

movieSeleted, addEventListener('change', hi)
function hi(e) {
    moviePrice = +e.target.value;
    movieIndex(e.target.selectedIndex, e.target.value)
    updateSelectCount();
}

// movieSeleted.addEventListener('change', (e) => {
//     moviePrice = +e.target.value;
//     movieIndex(e.target.selectedIndex, e.target.value)
//     updateSelectCount();
// })


container.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected');
        button.classList = 'bnt-color';

        // updateSelectCount();
    }
})
button.addEventListener('mouseout', () => {
    button.classList.remove('bnt-color')
})
// updateSelectCount();


button.addEventListener('click', userForm);
function userForm() {
    window.location.href = 'https://arbind17128.github.io/fromValidator/'
}


// var details=[
//     {
//         seatindex: 1,
//         movieName: 1,
//         moviePrice: 10

//     }
// ];

// function createElement({seatindex,movieName,moviePrice}) {

    // count.textContent = selectedSeat.length;
    // total.textContent = selectedSeat.length * moviePrice;
    // console.log("heollo");
    // updateSelectCount();

// }

// details.forEach(createElement);




