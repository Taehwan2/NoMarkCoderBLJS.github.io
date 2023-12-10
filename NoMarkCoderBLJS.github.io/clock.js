const clock = document.getElementById('clock');

const mainClock = document.getElementById('h1');

const getTime = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    mainClock.innerText 
      = `${hours < 10 ? `0${hours}` : hours} : ${minutes < 10 ? `0${minutes}` : minutes} : ${seconds < 10 ? `0${seconds}` : seconds}`;
}

const init = () => {
    getTime();     // setInterval() 은 1초 뒤부터 실행하기에 일단 바로 하나 실행시킴.
    setInterval(getTime, 1000);
};

init();