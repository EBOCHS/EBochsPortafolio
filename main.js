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
});
