let scheduleElArray = [];                  

function updatedTime() {
    let today = moment();
    
    $("#currentDay").text(today.format("dddd, MMMM Do YYYY, h:mm.ss"));
    
}

function renderLastRegistered() {
    for (let el of scheduleElArray) {
        el.val(localStorage.getItem("time block " + el.data("hour")));

    }
}

renderLastRegistered();
updatedTime();
setInterval(updatedTime, 1000);


let containerEl = $(".container");