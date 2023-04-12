const getCurrentTime = () => {
  const options = {
    timeZone: 'Asia/Seoul',
    hour12: true,
    weekday: "long", // Monday
    year: "2-digit",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  }
  const locale = "en-US"
  document.getElementById("clockText").textContent = locale
  // get current time
  const currentTime = new Date().toLocaleString(locale,options);



  // Render
  document.querySelector(".clock").innerHTML = currentTime;

  setTimeout(() => {
    getCurrentTime();
  }, 10);
};
