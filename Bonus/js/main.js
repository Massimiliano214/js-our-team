let listaMembri = [
    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        img: "wayne-barnett-founder-ceo.jpg"
    },

    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        img: "angela-caroll-chief-editor.jpg"
    },

    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        img: "walter-gordon-office-manager.jpg"
    },

    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        img: "angela-lopez-social-media-manager.jpg"
    },

    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        img: "scott-estrada-developer.jpg"
    },

    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        img: "barbara-ramos-graphic-designer.jpg"
    },
];

let cardsDom = document.querySelector(".cards");
let photoDom = document.querySelector(".photo");

for (let i = 0; i < listaMembri.length; i++) {

    for (let key in listaMembri[i]){
        console.log(listaMembri[i][key]);
        cardsDom.innerHTML += `<div class="card${i}">${listaMembri[i][key]}<br></div>`;  
    }

    let cardDom = document.querySelector(".card");

    
    photoDom.innerHTML +=
        `
            <img src= ./img/${listaMembri[i].img}><br>
        `;

        
}




    //containerDom.innerHTML += listaMembri[listaMembri.length - 1][key]+ "<br>";



