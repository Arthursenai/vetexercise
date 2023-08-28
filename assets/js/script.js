class Pet{
    constructor(owner, name, specie, photo, birthdate){
        this.owner = owner;
        this.name = name;
        this.specie = specie;
        this.photo = photo;
        this.birthdate = birthdate;
        this.age = this.calculateAge();
    }
    calculateAge() {
        let today = new Date();
        let birthdate = new Date(this.birthdate);
        let age = today.getFullYear() - birthdate.getFullYear();
        let month = today.getMonth() - birthdate.getMonth();

        if (month < 0 || (month === 0 && today.getDate() < birthdate.getDate())) {
            age--;
        }
        return age;
        
    }
}
class PetsList{
    constructor(){
        this.pets = [];
    }
    addPet(pet){
        this.pets.push(pet);
    }
}
function registerPet(){
    let owner = document.getElementById("owner").value;
    let petname = document.getElementById("pet").value;
    let specie = document.getElementById("specie").value;
    let photo = document.getElementById("photo").value;
    let birthdate = document.getElementById("birthdate").value;

    let user = new User(name, email, birthdate, address, phone, cpf);
    allUsers.add(user);
}
const ListOfPet = new PetsList();
const pet1 = new Pet("Miguel", "Toby", "Dog", "assets/img/dog1.jpg", "2015-03-25");
ListOfPet.addPet(pet1);
console.log(ListOfPet);