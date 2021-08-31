/*
const grid = new Muuri('.grid',{
    layout:{
        rounding: false
    }
});
window.addEventListener('load',()=>{
    grid.refreshItems().layout();
    document.getElementById('grid').classList.add('img-cargadas');
})

//overlay
const overlay = document.getElementById('overlay');
document.querySelectorAll('.grid .item img').forEach((elemento)=>{
    const ruta = elemento.getAttribute('src');
    const descripcion = elemento.parentNode.parentNode.dataset.descripcion ;
    console.log(descripcion);

    elemento.addEventListener('click',()=>{
        overlay.classList.add('activo');
        document.querySelector('#overlay img').src = ruta;
        document.querySelector('#overlay .descripcion').innerHTML = descripcion;
    });

    document.querySelector('#btn-cerrar').addEventListener('click',()=>{
        overlay.classList.remove('activo')
    });
    overlay.addEventListener('click',(evento)=>{
       // overlay.classList.remove()
       evento.target.id === "overlay" ? overlay.classList.remove('activo'):'';
    })
});*/

$(".menu-toggle-btn").click(function(){
    $(this).toggleClass("fa-times");
    $(".navigation-menu").toggleClass("active");
});

//scrolReveal
window.sr = ScrollReveal();
  sr.reveal('.div', {
    duration: 3000,
    origin: 'bottom',
    distance: '-100px'
  });
  
  sr.reveal('.div-item', {
    duration: 3100,
    origin: 'bottom',
    distance: '-100px'
  });
  sr.reveal('.container-p', {
    duration: 3100,
    origin: 'top',
    distance: '-100px'
  });

  sr.reveal('.container-item', {
    duration: 3000,
    origin: 'left',
    distance: '-100px'
  });
  sr.reveal('.container-item-p', {
    duration: 3000,
    origin: 'right',
    distance: '-100px'
  });
  sr.reveal('.form', {
    duration: 3000,
    origin: 'left',
    distance: '-100px'
  });
  sr.reveal('.datos-p', {
    duration: 3000,
    origin: 'right',
    distance: '-100px'
  });
  sr.reveal('.redes', {
    duration: 3000,
    origin: 'top',
    distance: '-100px'
  });
