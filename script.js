// let currentTime = () => {
//     let date = new Date(); 
//     let hh = date.getHours();
//     let mh = date.getMinutes();
//     let sh = date.getSeconds();
//     let session = "AM"


//     if (hh === 0){
//         hh = 12
        
//     }
//     if (hh > 12){
//         hh = hh - 12
//         session = "PM"
//     }

//     hh = (hh < 10) ? "0" + hh : hh;
//     mh = (mh < 10) ? "0" + mh : mh;
//     sh = (sh < 10) ? "0" + sh : sh;

//     setInterval(function(){currentTime()}, 1000)

// }

// currentTime()


let currentTime = () => {
    let date = new Date(); 
    let hh = date.getHours();
    let mh = date.getMinutes();
    let sh = date.getSeconds();
    let session = "AM"


    if (hh === 0){
        hh = 12
        
    }
    if (hh > 12){
        hh = hh - 12
        session = "PM"
    }

    hh = (hh < 10) ? "0" + hh : hh;
    mh = (mh < 10) ? "0" + mh : mh;
    sh = (sh < 10) ? "0" + sh : sh;

    let time = hh + ":" + mh + ":" + sh + " " + session

    document.getElementById("clock").innerText = time; 
    let t = setTimeout(function(){ currentTime() }, 1000);
}

currentTime();
