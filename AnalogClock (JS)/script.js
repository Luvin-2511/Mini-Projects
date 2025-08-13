setInterval(() => {
    let d=new Date();
    
    let htime=d.getHours();
    let mtime=d.getMinutes();
    let stime=d.getSeconds();
    let hrot= htime*30 +mtime/2;
    let mrot=6*mtime;
    let srot=6*stime;

    hour.style.transform=`rotate(${hrot}deg)`;
    minute.style.transform=`rotate(${mrot}deg)`;
    second.style.transform=`rotate(${srot}deg)`;

}, 1000);