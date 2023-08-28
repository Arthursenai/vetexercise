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
        if(isAnyInputEmpty()){
            sendErrorMsg("Preencha todos os campos!", "error");
        } else{
            this.pets.push(pet);
            clearFields();
            sendErrorMsg("Pet cadastrado com sucesso!", "success");
        }
    }
}
function sendErrorMsg(msg, type){
    let errorMsg = document.getElementById("errorMsg");
    errorMsg.innerHTML = msg;
    if(type == "error"){
        errorMsg.style.color = "#ff0000";
    }else if(type == "success"){
        errorMsg.style.color = "#00ff00";
    }
}
function isAnyInputEmpty(){
    let owner = document.getElementById("owner").value;
    let petname = document.getElementById("pet").value;
    let specie = document.getElementById("specie").value;
    let photo = document.getElementById("photo").value;
    let birthdate = document.getElementById("birth").value;

    if(owner == "" || petname == "" || specie == "" || photo == "" || birthdate == ""){
        return true;
    }else{
        return false;
    }

}
const ListOfPet = new PetsList();
function regiserPet(){
    let owner = document.getElementById("owner").value;
    let petname = document.getElementById("pet").value;
    let specie = document.getElementById("specie").value;
    let photo = document.getElementById("photo").value;
    let birthdate = document.getElementById("birth").value;

    let pet = new Pet(owner, petname, specie, photo, birthdate);
    ListOfPet.addPet(pet);
    
}
function dateinPTBR(date) {
    let dateArray = date.split("-");
    let datePTBR = dateArray[2] + "/" + dateArray[1] + "/" + dateArray[0];
    return datePTBR;
}
function clearFields(){
    document.getElementById("owner").value = "";
    document.getElementById("pet").value = "";
    document.getElementById("specie").value = "";
    document.getElementById("photo").value = "";
    document.getElementById("birth").value = "";
}
function showPet(){
    let showContent = document.getElementById("pets-content");
    let show = "";
    ListOfPet.pets.forEach(pet => {
        show += `
        <div class="card" style="width: 18rem;">
            <img src="${pet.photo}" class="card-img-top" alt="${pet.petname}">
            <div class="card-body">
                <h5 class="card-title">${pet.petname}</h5>
                <p class="card-text">Dono: ${pet.owner}</p>
                <p class="card-text">Espécie: ${pet.specie}</p>
                <p class="card-text">Nascimento: ${dateinPTBR(pet.birthdate)}</p>
                <p class="card-text">Idade: ${pet.age}</p>
            </div>
        </div>
        `;
    showContent.innerHTML = show;
    console.log(showContent);
    });
}
console.log(ListOfPet);