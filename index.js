//getting the element
const hourElement = document.querySelector('#hour');
const minuteElement = document.querySelector('#minutes');
const secondsElement = document.querySelector('#seconds');
const ampmElement = document.querySelector('#ampm');

//function to get data from the computer
const updateClock = () => {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = 'AM';


  if (h>12) { //for changing the am to pm
    h = h-12
    ampm = "PM"
  }
  //create a  conditional statement for the digits to be  2 using ternary operator
  h= h<10 ? '0' + h : h; //if h is less than 10 is true add 0 if false leave it that way
  m= m<10 ? '0' + m : m; //if h is less than 10 is true add 0 if false leave it that way
 s= s<10 ? '0' +s :s; //if h is less than 10 is true add 0 if false leave it that way

  hourElement.innerText = h;
  minuteElement.innerText = m;
  secondsElement.innerText = s;
  ampmElement.innerText = ampm;

//set timer that executes the function updateClock once timer expires
  setTimeout(() => {    
    updateClock()
  }, 1000)

};
updateClock();

