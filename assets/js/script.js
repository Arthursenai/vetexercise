let flag= -1
class Pet {
    constructor(owner, petname, specie, photo, birthdate) {
        this.owner = owner;
        this.petname = petname;
        this.specie = specie;
        this.photo = photo;
        this.birthdate = birthdate;
        this.age = this.calculateAge();
        this.id = this.getId();
    }
    calculateAge() {
        let today = new Date();
        let birthdate = new Date(this.birthdate);
        let age = today.getFullYear() - birthdate.getFullYear();
        let month = today.getMonth() - birthdate.getMonth();

        if (month < 0 || (month === 0 && today.getDate() < birthdate.getDate())) {
            age--;
        }
        return `${age} anos e ${month} meses`;

    }
    getId() {
        const id = Math.floor(Math.random() * 10000);
        return id;
    }
}
class PetsList {
    constructor() {
        this.pets = [];
    }
    addPet(pet) {
        if (isAnyInputEmpty()) {
            sendErrorMsg("Preencha todos os campos!", "error");
        } else if (!isUrl(pet.photo)) {
            sendErrorMsg("URL da imagem inválida!", "error");
        } else {
            if(flag !== -1){
            this.pets.forEach((pet) => {
                if(pet.id == flag){
                    pet.owner = document.getElementById("owner").value;
                    pet.petname = document.getElementById("pet").value;
                    pet.specie = document.getElementById("specie").value;
                    pet.photo = document.getElementById("photo").value;
                    pet.birthdate = document.getElementById("birth").value;
                    pet.age = pet.calculateAge();
                }
            });
            flag = -1;
            sendErrorMsg("Pet cadastrado com sucesso!", "success");
            showPet();
            clearFields();
        }
    else{
        this.pets.push(pet);
        sendErrorMsg("Pet cadastrado com sucesso!", "success");
        showPet();
        clearFields();
        console.log(ListOfPet);
    }}
    }
    removePet(id) {
        this.pets = this.pets.filter(pet => pet.id !== id);
        showPet();
    }
    editPet(id){
        this.pets.forEach((pet) => {
            if(pet.id == id){
                document.getElementById("owner").value = pet.owner;
                document.getElementById("pet").value = pet.petname;
                document.getElementById("specie").value = pet.specie;
                document.getElementById("photo").value = pet.photo;
                document.getElementById("birth").value = pet.birthdate;
            }
        });
    }
}

document.addEventListener("keypress", function(e){
    if(e.key == "Enter"){
        regiserPet();
    }
    else{
        return;
    }
})
function sendErrorMsg(msg, type) {
    let errorMsg = document.getElementById("errorMsg");
    errorMsg.innerHTML = msg;
    if (type == "error") {
        errorMsg.style.color = "#ff0000";
    } else if (type == "success") {
        errorMsg.style.color = "#00ff00";
    }
    setTimeout(function () {
        document.getElementById("errorMsg").classList.add("hidden");
    }, 3700);
}
function isAnyInputEmpty() {
    let owner = document.getElementById("owner").value;
    let petname = document.getElementById("pet").value;
    let specie = document.getElementById("specie").value;
    let photo = document.getElementById("photo").value;
    let birthdate = document.getElementById("birth").value;

    if (owner == "" || petname == "" || specie == "" || photo == "" || birthdate == "") {
        return true;
    } else {
        return false;
    }

}
const ListOfPet = new PetsList();
function regiserPet() {
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
function isUrl(url) {
    if (url.match(/\.(jpeg|jpg|gif|png)$/) != null) {
        return true;
    } else {
        return false;
    }
}
function clearFields() {
    document.getElementById("owner").value = "";
    document.getElementById("pet").value = "";
    document.getElementById("specie").value = "";
    document.getElementById("photo").value = "";
    document.getElementById("birth").value = "";
}
function verifyArray(){
    if(ListOfPet.pets.length == 0){
        sendErrorMsg("Nenhum pet cadastrado!", "error");
    }else{
        sendErrorMsg("Pet cadastrado com sucesso!", "success");
        document.getElementById("container-main").classList.add("hidden");
        document.getElementById("container2").classList.remove("hidden");
    }
}
function showPet() {
        let showContent = document.getElementById("pets-content");
        let show = "";
        ListOfPet.pets.forEach(pet => {
            show += `
        <div class="carddisplay">
        <div class="card">
            <img src="${pet.photo}" class="card-img-top" alt="${pet.petname}">
            <div class="card-body">
                <h5 class="card-title">${pet.petname}</h5>
                <p class="card-text">Dono: ${pet.owner}</p>
                <p class="card-text">Espécie: ${pet.specie}</p>
                <p class="card-text">Nascimento: ${dateinPTBR(pet.birthdate)}</p>
                <p class="card-text">Idade: ${pet.age}</p>
                <button id="card-button" onclick ="removeRegister(${pet.id})">Remover</button>
                <button id="card-button" onclick ="editRegister(${pet.id})">Editar</button>
            </div>
        </div>
    </div>
        `;
        console.log(showContent);

    });
    showContent.innerHTML = show;


    }
 function removeRegister(id) {
    ListOfPet.removePet(id);
}
function editRegister(id) {
    indexReturn();
    ListOfPet.editPet(id);
    flag = id;
    showPet();
}
function indexReturn() {
    document.getElementById("container-main").classList.remove("hidden");
    document.getElementById("container2").classList.add("hidden");
}
