
export class Contact{
    #phone;
    #location;
    #imagen;

   constructor(phone, location, imagen){
    this.#phone= phone;
    this.#location = location,
    this.#imagen = imagen;
   }

     
     get phone(){
        return this.#phone;
     }

     set phone(phone){
        this.#phone = phone;
     }

     
     get location(){
        return this.#location;
     }

     set location(location){
        this.#location = location;
        
     }

     get imagen() {
        return this.#imagen;
     }
  
     set imagen(imagen) {
        this.#imagen = imagen;
     }
  

}