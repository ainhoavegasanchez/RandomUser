import { Contact } from "./Contact.js";

export class Person {
   #name;
   #email;
   contacto;
   constructor(name, mail, contacto) {
      this.#name = name,
         this.#email = mail
         this.contacto = contacto
        
   }

   get name() {
      return this.#name;
   }

   set name(name) {
      this.#name = name;
   }


   get email() {
      return this.#email;
   }

   set email(email) {
      this.#email = email;
   }




}