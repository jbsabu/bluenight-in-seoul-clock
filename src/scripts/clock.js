const getCurrentTime = () => {
  // Get new date
  const today = new Date();

  // Convert

  let day =   today.getDay();
  let hour = checkLeadingZero(today.getHours());
  let minute = checkLeadingZero(today.getMinutes());
  let second = checkLeadingZero(today.getSeconds());
  let milisecond = checkLeadingZeroMS(today.getMilliseconds());

  // Day Array

  const dayArray = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

  console.log("Day Array: ", dayArray[day]);

  // Assemble

  let currentTime = `${dayArray[day]} ${hour} : ${minute} : ${second} : ${milisecond}`;

  // Render
  document.querySelector(".clock").innerHTML = currentTime;

  setTimeout(() => {
    getCurrentTime();
  }, 10);
};

const checkLeadingZeroMS = (paramTime) => {
  (paramTime < 100 && paramTime > 10)
 ? (paramTime = `0${paramTime}`) 
 : ((paramTime < 10) ? `00${paramTime}` : paramTime );
 return paramTime
};


const checkLeadingZero = (paramTime) => {
    paramTime < 10
   ? (paramTime = `0${paramTime}`) 
   : null;
   return paramTime
};
