
//menu desblegable 
$(".menu-toggle-btn").click(function(){
  $(this).toggleClass("fa-times");
  $(".navigation-menu").toggleClass("active");
});

//animaciones con scrolReveal
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
sr.reveal('.contenedor-grid', {
  duration: 3000,
  origin: 'right',
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

const grid = new Muuri('.seccion-proyectos',{
    layout:{
        rounding: false
    }
});


//area del overlay seccion de proyectos
const overlay = document.getElementById('overlay');
document.querySelectorAll('.seccion-proyectos .contenedor-grid .item-grid img').forEach((elemento)=>{
    const ruta = elemento.getAttribute('src');
    const descripcion = elemento.parentNode.parentNode.dataset.descripcion ;
    console.log(descripcion);

   elemento.addEventListener('click',()=>{
        overlay.classList.add('activo');
        document.querySelector('#overlay .overlay-imagen').src = ruta;
        document.querySelector('#overlay .descripcion').innerHTML = descripcion;
    });

    document.querySelector('#cerrar').addEventListener('click',()=>{
        overlay.classList.remove('activo')
    });
    overlay.addEventListener('click',(evento)=>{
       // overlay.classList.remove()
       evento.target.id === "overlay" ? overlay.classList.remove('activo'):'';
    })
});


//validacion de formulario 
$("#btn_contacto").click(()=>{
  var nombre = document.getElementById("nombre").value;
  var correo = document.getElementById("email").value;
  var mensaje = document.getElementById("mensaje").value;

  $.ajax({
    url: 'formulario.php',
    type: 'POST',
    data: {nombre,correo,mensaje},
    success: (res)=>{
      if(res=='true'){
        Swal.fire({
          icon: 'success',
          title: 'Correo enviado',
          text: 'Gracias Por Contactarse!',
          footer: '<a href="">Why do I have this issue?</a>'
        })
        $("#nombre").val("");
        $("#email").val("");
        $("#mensaje").val("");
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Oops... Error al enviar Correo',
          text: 'Revise que ingreso todo los datos de contacto!',
          footer: '<a href="">Why do I have this issue?</a>'
        })
      }
      
    }
  })
  
})