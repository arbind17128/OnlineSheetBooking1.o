// Get references to the elements
var movieSelect = document.getElementById('movies');
var timeSelect = document.getElementById('times');
var movieContent = document.getElementById('movieContent');
var movieTitle = document.getElementById('movieTitle');
var movieDescription = document.getElementById('movieDescription');
const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)')
let count = document.getElementById('count');
let total = document.getElementById('total');
let button =document.querySelector('.btn');
var img = document.getElementById('img');
var movieSeleted1=document.querySelectorAll('span');
// console.log(movieSeleted1);
// console.log(movieSelect.options[0].id);
console.log(movieSelect.value);

// movieSelect.options[0].forEach(e=> { return e.id})





var selectElement = document.querySelector('select');
var optionElement = movieSelect.options[0]; // Access the first option

var value1 = optionElement.dataset.value1;
var value2 = optionElement.dataset.value2;
moviePrice=+value1






// Add event listeners to the elements
movieSelect.addEventListener('change', handleMovieChange);
timeSelect.addEventListener('change', handleTimeChange);
container.addEventListener('click', handleSelectedSheet);

// Event handlers
function handleMovieChange() {
  updateMovieContent();
}

function handleTimeChange() {
  updateMovieContent();
}
function handleSelectedSheet(e) {
    updateSelectsheet(e);
}
function updateSelectsheet(e) {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected');
        button.classList='bnt-color';
      
        updateSelectCount();
    }
}
function updateSelectCount() {
    let selectedSeat = document.querySelectorAll('.row .seat.selected')
    let indexOfSeat = [...selectedSeat].map((seat) => [...seats].indexOf(seat));
    localStorage.setItem('selectedSeat', JSON.stringify(indexOfSeat))
   
    count.textContent = selectedSeat.length;
    total.textContent = selectedSeat.length * moviePrice;
}

function updateMovieContent() {
  var selectedMovie = movieSelect.value;
  var selectedTime = timeSelect.value;
  
  // var idOfOptions=movieSelect.querySelectorAll('option');

  // idOfOptions.forEach((e)=>{
  //   moviePrice=e.id;
  //   updateSelectCount() ;
  
  //   })







  if (selectedMovie && selectedTime) {
    // Retrieve movie information based on the selected movie and time
    var movieInfo = getMovieInfo(selectedMovie, selectedTime);

    // Update the movie content
    if (movieInfo) {
      movieTitle.textContent = movieInfo.title;
      movieDescription.textContent = movieInfo.description;

      let selectedSeat = document.querySelectorAll('.row .seat.selected')
      let indexOfSeat = [...selectedSeat].map((seat) => [...seats].indexOf(seat));
      localStorage.setItem('selectedSeat', JSON.stringify(indexOfSeat))
     
      count.textContent = selectedSeat.length;
      total.textContent = selectedSeat.length * moviePrice;
     


      
      
      movieContent.style.display = 'block';

    } else {
      movieContent.style.display = 'none';
    }
  } else {
    movieContent.style.display = 'none';
  }
}


function getMovieInfo(movie, time,) {
  // Replace this with your own logic to retrieve movie information from a data source
  var moviesData = {
    10: {
      time1: { title: 'Revenge (10:00 AM - 2:00 PM)', description: 'Revenge description for  ', moviePrice: 10 },
      time2: { title: 'Revenge (2:00 PM - 6:00 PM)', description: 'Revenge description for  badala aadi rat k baad', moviePrice: 10  },
      time3: { title: 'Revenge (6:00 PM - 10:00PM )', description: 'Revenge description for  badala aadi rat k baad', moviePrice: 10  }
    },
    12: {
      time1: { title: 'Revenge 2 (10:00 AM - 2:00 PM )', description: 'Revenge 2 description for  badala aadi rat k baad' , moviePrice: 12 },
      time2: { title: 'Revenge 2 (2:00 PM - 6:00 PM)', description: 'Revenge 2 description for  badala aadi rat k baad', moviePrice: 12 },
      time3: { title: 'Revenge 2 (6:00 PM - 10:00PM )', description: 'Revenge 2 description for  badala aadi rat k baad', moviePrice: 12  }
    },
    15: {
      time1: { title: 'Revenge 3 (10:00 AM - 2:00 PM )', description: 'Revenge 3 description for  badala aadi rat k baad', moviePrice: 15  },
      time2: { title: 'Revenge 3 (2:00 PM - 6:00 PM)', description: 'Revenge 3 description for  badala aadi rat k baad', moviePrice: 15 },
      time3: { title: 'Revenge 3 (6:00 PM - 10:00PM )', description: 'Revenge 3 description badala aadi rat k baad ', moviePrice: 15 }
    }

  };

  if (moviesData.hasOwnProperty(movie) && moviesData[movie].hasOwnProperty(time)) {
    return moviesData[movie][time];
  }

  return null;
}
button.addEventListener('click', userForm);
function userForm() {
    window.location.href ='userForm.html';
    // https://arbind17128.github.io/fromValidator/
    
}



















































