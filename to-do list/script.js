let gorev_input =document.querySelector(".gorev_input");
let btn_ekle=document.querySelector(".gorev_ekle");
let gorev_listesi=document.querySelector(".gorev_list");

let bugun= new Date();
let tarihYazi=bugun.toLocaleDateString("tr-TR",{
weekday:"long",
year:"numeric",
month:"long",
day:"numeric",
});
document.getElementById("date").textContent= "Bugünün Tarihi  -"+tarihYazi;
document.getElementById("date").style.margin="15px";

// !sayfa yüklendiğinde localStorage deki verilerin sayfaya yüklenmwsi
function gorevleriYukle(){
let kayitliGorevler=JSON.parse(localStorage.getItem("gorevler"))|| [];

kayitliGorevler.forEach(function(gorev){

 let li = document.createElement("li");
    li.style.margin="10px";
    li.textContent=gorev;
    li.style.listStyle="none";
  
    
    let sil_btn=document.createElement("button");
    sil_btn.textContent="sil";
    sil_btn.style.marginLeft="10px";
    sil_btn.style.height="30px";
    sil_btn.style.width="30px";
    sil_btn.style.borderRadius="5px";
    sil_btn.style.border="none";
    gorev_listesi.appendChild(li);
    li.appendChild(sil_btn);

 sil_btn.addEventListener("click",function(){
   gorev_listesi.removeChild(li);
   VeriGuncelle(gorev);

 });
 })};
window.addEventListener("DOMContentLoaded",gorevleriYukle);
// !btn_ekle butonuna tıklanınca görevlerin liste yöntemi ile sıralanması
btn_ekle.addEventListener("click",function(){

 if(gorev_input.value.trim()!==  "") {
    let yeniGorev=gorev_input.value;
    gorevleriKaydet(yeniGorev);
    let li = document.createElement("li");
    li.style.margin="10px";
    li.textContent=yeniGorev;
    
    li.style.listStyle="none";
    gorev_input.value="";
    
    let sil_btn=document.createElement("button");
    sil_btn.textContent="sil";
    sil_btn.style.marginLeft="10px";
    sil_btn.style.height="30px";
    sil_btn.style.width="30px";
    sil_btn.style.borderRadius="5px";
    sil_btn.style.border="none";
    gorev_listesi.appendChild(li);
    li.appendChild(sil_btn);

 sil_btn.addEventListener("click",function(){
   gorev_listesi.removeChild(li);
 });

 }  else{
    alert("bu alanı boş bırakmayınız");
 }
});
// !localStorage'e veri yükleme fonksiyonu
function gorevleriKaydet(gorev){
let gorev_kaydet=JSON.parse(localStorage.getItem("gorevler"))|| [];
gorev_kaydet.push(gorev);
localStorage.setItem("gorevler",JSON.stringify(gorev_kaydet));
}
// !localStorage 'den veri silme
function VeriGuncelle(silinecekGorev){
let guncelle= JSON.parse(localStorage.getItem("gorevler"))||[];
let gorevGuncel=guncelle.filter(g =>g !==silinecekGorev);
localStorage.setItem("gorevler",JSON.stringify(gorevGuncel));
}




