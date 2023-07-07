let loki=document.querySelector(".mk");
loki.onmouseenter=function(){
  let hov=document.querySelector(".hv");
  let lk=document.querySelector(".hover");
  hov.style.opacity="1";
  lk.style.padding="15px";
  lk.style.width="200px";
}


function a(){


  const burger=document.querySelector(".burger");
  const nav= document.querySelector(".nav-item");

  burger.addEventListener('click',function(){

    nav.classList.toggle('nav-active');

  })
}
a();
