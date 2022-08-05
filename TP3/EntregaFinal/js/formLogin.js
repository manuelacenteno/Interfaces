let modal = document.getElementById('modal');
let flex = document.getElementById('form');
let abrir = document.getElementById('abrir');
let cerrar = document.getElementById('cerrar');

abrir.addEventListener('click', function() {
    modal.style.display = 'block'; //'visibility';
    modal.style.opacity = 1;
    console.log("entra2");
});

cerrar.addEventListener('click', function() {
    modal.style.display = 'none';
    console.log("entra");
});

/*document.addEventListener('click', function(e) {
    console.log(e.target);
    if (e.target == flex) {
        modal.style.display = 'none';
    }
    console.log("entra3");
});*/