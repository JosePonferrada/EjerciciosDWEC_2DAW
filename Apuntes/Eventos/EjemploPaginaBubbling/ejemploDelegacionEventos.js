function inicializar(){
    document.addEventListener("click",(e)=>{
    console.log(e.target);
    if (e.target.matches("#cuadrointerno")){
    mostrarInterno();
    }
    if (e.target.matches("#cuadromedio")){
    mostrarMedio();
    }
    if (e.target.matches(".cuadroexterno")){
    mostrarExterno();
    }
    if (e.target.matches(".fondo")){
    mostrarFondo();
    }
    })
    }
    function mostrarExterno(e){
    alert("cuadro externo");
    }
    function mostrarMedio(e){
    alert("cuadro medio");
    }
    function mostrarInterno(e){
    alert("cuadro interno");
    }
    function mostrarFondo(e){
    alert("fondo");
    }
    