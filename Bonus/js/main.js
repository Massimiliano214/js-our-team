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
        "img": "barbara-ramos-graphic-designer.jpg"
    },
];

let cardsDom = document.querySelector(".cards");
let photoDom = document.querySelector(".photo");



const cardDom = document.createElement("div") ;
    
for (let i = 0; i < listaMembri.length; i++) {

    
        
    cardDom.innerHTML += `${listaMembri[i].nome}<br>`;
        
    
    cardDom.innerHTML += `${listaMembri[i].ruolo} <br>`; 
    
    
    


    
    cardDom.innerHTML += 
    
    `
        <img class="image" src="./img/${listaMembri[i].img}"><br>
    `;
}

    cardDom.classList.add("card");
    cardsDom.append(cardDom);
    cardDom.append(photoDom);

    

    console.log("cardDom" + cardDom);





