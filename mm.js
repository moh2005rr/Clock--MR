/*let hr = document.querySelector('#hr');
let mn = document.querySelector('#mn');
let sc = document.querySelector('#sc');


setInterval(() =>{
            let dey = new Date();
            let hh = day.getHours() * 30;
            let mm = day.getMinutes() * 6;
            let ss = day.getSeconds() * 6;

            hr.style.transform = `rotateZ(${hr+(mm/12)}deg)`;
            mn.style.transform = `rotateZ(${mn}deg)`;
            sc.style.transform = `rotateZ(${sc}deg)`;
})









*/
let hr = document.querySelector('#hr');
let mn = document.querySelector('#mn');
let sc = document.querySelector('#sc');
setInterval(() =>{
     let day = new Date();
     let hh = day.getHours() * 30;
     let mm = day.getMinutes() * 6;
     let ss = day.getSeconds() * 6;
     
     hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
     mn.style.transform = `rotateZ(${mm}deg)`;
     sc.style.transform = `rotateZ(${ss}deg)`;

})


/*
const secondHand = document.querySelector('#hr');
  const minsHand = document.querySelector('#mn');
  const hourHand = document.querySelector('#sc');

  function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  }

  setInterval(setDate, 1000);

  setDate();








  const hr = document.getElementById('#hr');
        const mn = document.getElementById('#mn');
        const sc = document.getElementById('#sc');


        setInterval(() =>{
            let dey = new Date();
            let hh = date.getHours() * 30;
            let mm = day.getMinutes() * 6;
            let ss = day.getSeconds() * 6;

            hr.style.transform = `rotate(${hh +(mm/12)}deg)`;
            mn.style.transform = `rotate(${mm}deg)`;
            sc.style.transform = `rotate(${ss}deg)`;
        })
*/