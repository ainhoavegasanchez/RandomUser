import {obtenerPersona, crearElementos} from "./utils.js";


let card = document.createElement("div");
card.setAttribute("id", "card");
let container = document.querySelector(".container");
container.append(card);

let img = document.createElement("img");
img.setAttribute("id", "imagen");
img.src = "./img/user_nt_found.jpg";
card.append(img);

let array = ["Name", "Mail", "Phone", "Location", "Current Time"];
let valores= ["name surname", "mail", "phone", "city", "time"];

let lista = document.createElement("ul");
let i = 0;
array.forEach((elem) => {
  let listado = document.createElement("li");
  let span = document.createElement("span");
  span.textContent = valores[i];
  let negrita = document.createElement("strong");
  negrita.textContent = `${elem}: `;
  elem == "Current Time" ? (elem = "current-time") : elem;
  listado.setAttribute("id", elem.toLocaleLowerCase());
  listado.append(negrita,span);
  lista.append(listado);
  i++;
});
card.append(lista);

let button = document.createElement("button");
button.textContent = "USER GENERATE";
button.type = "button";
button.setAttribute("id", "boton");
container.append(button);


button.addEventListener("click", async()=>{
  let person = await obtenerPersona();
  crearElementos(person);
  
})