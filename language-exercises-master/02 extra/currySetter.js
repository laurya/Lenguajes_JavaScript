// --- EJERCICIO ------------------------------------------------------------------------

// En un formulario tenemos un objeto con los campos name, surname y age que representan un usuario. Crea una función "set"
// que reciba un objeto con los campos de usuario, el nombre de una propiedad y su valor y actualice la propiedad de objeto
// con el valor pasado como argumento. El ejercicio debe de seguir las siguientes normas:
// 1. La función debe ser pura, es decir, debe crear un nuevo objeto sin modificar el existente.

const julia = { name: 'Julia', surname: 'Álvarez', age: 19 };
const updatedJulia = set(julia, 'age', 25);
console.log(updatedJulia); // { name: 'Julia', surname: 'Álvarez', age: 25 }
console.log(julia); // { name: 'Julia', surname: 'Álvarez', age: 19 }
console.log(julia === updatedJulia); // false


// --- OPCIONAL ------------------------------------------------------------------------

// Currifica dicha función para que permita crear funciones donde el argumento del nombre de la propiedad
// esté configurado previamente.
// Es decir, modifica la función "set" para poder crear "setName", "setSurname" y "setAge" que reciban sólo
// el objeto y el valor y sepan qué propiedad actualizar.
// (Para TS) Si quieres puedes extraer la firma de la interfaz sin ponerla en línea con la implementación.

const setName = set(/* ... */);
const setSurName = set(/* ... */);
const setAge = set(/* ... */);

const julia = { name: 'Julia', surname: 'Álvarez', age: 19 };
console.log(setName(julia, 'Ana')); // { name: 'Ana', surname: 'Álvarez', age: 19 };
console.log(setSurname(julia, 'González')); // { name: 'Julia', surname: 'González', age: 19 };
console.log(setAge(julia, 25)); // { name: 'Julia', surname: 'Álvarez', age: 25 }

