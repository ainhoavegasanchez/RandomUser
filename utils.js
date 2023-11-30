import { Person } from "./classes/Person.js";
import { Contact } from "./classes/Contact.js";
import { persona, tiempo } from "./apiFetch.js";


export async function obtenerPersona() {
  let usr = await persona();

  let user = usr.results[0];
  //console.log(user);
  let nombre = `${user.name.first} ${user.name.last}`;
  let location = `${user.location.city}, ${user.location.country}`;


  let contacto = new Contact(user.phone, location, user.picture.large);
  let usuario = new Person(nombre, user.email, contacto);

  let tiemp = await tiempo(contacto.location);
  //console.log(tiemp);
  usuario.time = `${tiemp.hour}:${tiemp.minute}:${tiemp.second}`;
  //console.log(usuario.time);
  return usuario;
}



export function crearElementos(persona) {
 // console.log(persona.contacto.phone);
  let name = document.querySelector("li#name span");
  name.textContent = persona.name;
  let email = document.querySelector("#mail span");
  email.textContent = persona.email;
  let phone = document.querySelector("#phone span");
  phone.textContent = persona.contacto.phone;
  let city = document.querySelector("#location span");
  city.textContent = persona.contacto.location;
  let imagen = document.querySelector("#imagen");
  imagen.src = persona.contacto.imagen;


  let tiempo = document.querySelector("#current-time span");
  tiempo.textContent = persona.time;

}

