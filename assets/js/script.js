class Pet{
    constructor(owner, petname, specie, photo, birthdate){
        this.owner = owner;
        this.petname = petname;
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
    let birthdate = document.getElementById("birth").value;

    let pet = new Pet(owner, petname, specie, photo, birthdate);
    ListOfPet.add(pet);
}
function dateinPTBR(date) {
    console.log("Passou pela funcao dateinPTBR()");

    let dateArray = date.split("-");
    let datePTBR = dateArray[2] + "/" + dateArray[1] + "/" + dateArray[0];
    return datePTBR;
}
const ListOfPet = new PetsList();
console.log(ListOfPet);