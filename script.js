function tarihSaat() {
    let date = new Date().toLocaleString('tr-tr',{ weekday:"long", month:"long", day:"numeric", hour:"numeric", minute:"numeric", second:"numeric"});
    document.querySelector("myClock");
    myClock.innerHTML = date;
}
// her 1 saniyede tarihSaat fonksiyonunu yeniden çalıştır
setInterval(tarihSaat, 1000); 