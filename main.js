// 
// console.log("coucou");

let student = [
  {
    nom:"MEGRI",
    prenom:"Karim",
    matiere: ["Javascript"],
    note:{
      Javascript: 5,
    }

  },

  {
    name:"Pierre",
    prenom:"Pierre",
    matiere: ["français"],
    note: {
      français:20,
    },
  },

  {
    name:"Lecoeur",
    prenom:"Alexandre",
    matiere: ["Javascript"],
    note:{
      Javascript: 15,
    },
  },  
]

matiere = ["français","math","anglais"]
console.log(matiere);
//  console.log(document.getElementById("btnon"));


function myButtonClick(){
  console.log("click")
let myDiv = document.getElementById("myDiv");
let btnon = document.getElementById("btnon");
  console.log(myDiv);

  if(myDiv.style.display ==="none"){
    myDiv.style.display="block";
    btnon.textContent="on"
    

    // alert("Vous avez cliqué sur le bouton");
  } else {
    myDiv.style.display = "none";
    btnon.textContent="off"
    // alert("Vous avez cliqué sur le bouton");
  }
}

function myButtonClick2(){
  console.log("click")
let myDiv = document.getElementById("myDiv2");
let btnon2 = document.getElementById("btnon2");
  console.log(myDiv);

  if(myDiv.style.display ==="none"){
    myDiv.style.display="block";
    btnon2.textContent="on"
    // alert("Vous avez cliqué sur le bouton");
  } else {
    myDiv.style.display = "none";
    btnon2.textContent="off"
    // alert("Vous avez cliqué sur le bouton");
  }
}

function myButtonClick3(){
  console.log("click")
let myDiv = document.getElementById("myDiv3");
let btnon3 = document.getElementById("btnon3");
  console.log(myDiv);

  if(myDiv.style.display ==="none"){
    myDiv.style.display="block";
    btnon3.textContent="on"
    //  alert("Vous avez cliqué sur le bouton");
  } else {
    myDiv.style.display = "none";
    btnon3.textContent="off"
    //  alert("Vous avez cliqué sur le bouton");
  }
}

let btnAddStud = document.getElementById("addStud");
// console.log(btnAddStud);

btnAddStud.addEventListener("click", () =>{
  let nom = document.getElementById("lastname").value;
  let prenom = document.getElementById("firstname").value;
  console.log(nom +" "+prenom);


  student.push({  
      nom: nom,
      prenom: prenom,    
  })
console.table(student);

})


let btnAddMat = document.getElementById("btnAddMat");
// console.log(btnAddMat);

btnAddMat.addEventListener("click", () => {
  let matiere= document.getElementById("intitule").value;
  console.log("click")
  console.log(matiere)

  matiere.push(
     matiere.value
  )

})