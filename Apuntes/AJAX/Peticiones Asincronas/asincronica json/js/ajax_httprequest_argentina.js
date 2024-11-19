/* Pasos a seguir para usar intercambio de información cliente-servidor con el
objeto XMLHttpRequest
1) Crear instancia de objeto XMLHttpRequest
2) Asignacion de evento y ejecución de la lógica de programación
3) Abrir la petición y establecer el método de acceso a los datos
4) Enviamos la respuesta al navegador con el método send
*/

//función autoejecutable
(() => {
  /* creación de variables:
    xhr para almacenar objeto XMLHttpRequest ajax para intercambio de datos 
    $xhr para identificar al elemento del DOM
    $fragment para crear un fragmento de documento y no tener que estar realizando inserciones continuas en el DOM
    */
    
    //1º paso: instanciar objeto httpRequest
    const xhr = new XMLHttpRequest(),
    $xhr = document.getElementById("xhr"),
    $fragment = document.createDocumentFragment();

    /*2º paso necesario: Asignar eventos. En este caso, lo haremos cuando
    se produzca un cambio de estado (readystatechange es el mejor porque 
    abarca muchos eventos), ejecutando el códiog necesario dentro de la función*/
    xhr.addEventListener("readystatechange", (e) => {
    /*comprobamos si el código de estado de la petición es el 4, es decir, petición 
    completada (READY_STATE_COMPLETE = 4), porque si es distinto no debemos seguir ejecutando*/
    if (xhr.readyState !== 4) return;
    /*comprobamos si el estado de la respuesta HTTP está entre 200 y 300, es decir, ha tenido éxito
    Respuestas informativas (100–199),
    Respuestas satisfactorias (200–299),
    Redirecciones (300–399),
    Errores de los clientes (400–499),
    Errores de los servidores (500–599)
    */
   //podemos imprimir para comprobar el contenido de la respuesta
  console.log(xhr);
console.log(xhr.responseText);
    if (xhr.status >= 200 && xhr.status < 300) {
      
      //parseamos el contenido de la respuesta para tratarla como objeto json
      
      let json = JSON.parse(xhr.responseText);
      
      /*recorremos cada uno de los eleentos del objeto json para mostrar lo que nos ienterese
      en forma de elementos li dentro de la lista */
      //console.log(json);
      json.forEach((el) => {
        
        el.provincias.forEach((provincia) =>{
        const $li = document.createElement("li");
        $li.innerHTML = `${provincia.nombre_completo} -- ${provincia.categoria}-- ${provincia.iso_nombre} `;
        /*añadimos al fragmento declarado antes, para no tener que ir haciendo continuas inserciones en el 
        DOM, así luego solo haremos una, la del fragmento completo*/
        $fragment.appendChild($li);
        })
      });

      //añadimos como hijo no el fragmento al elemento xhr (en el que habíamos metido la lista)
      $xhr.appendChild($fragment);
    } else {
      /*si el estado no está entre 200 y 300 vamos a imprimir el error correspondiente,
      teniendo en cuenta que si es un error desconocido, imprimamos "Ocurrió un error"*/
      let message = xhr.statusText || "Ocurrió un error";
      $xhr.innerHTML = `Error ${xhr.status}: ${message}`;
    }

    //console.log("Este mensaje se ejecutará siempre");
  });

 

  //paso 3º: abrir la petición, establecer el método de acceso al recurso de datos
  xhr.open("GET", "assets/argentina.json");

  //paso 4º: enviamos la respuesta al navegador con el método send
  xhr.send();
})();
