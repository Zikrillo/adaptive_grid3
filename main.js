// function User(name){
//     this.name = name;
//     this.user = false;
// }
// let user = new User("Аличо");
class Obj {
    constructor(name, secondname) {
        this.name = name;
        this.secondname = secondname;
    }
    render() {

        let x = document.querySelector(".main");
        x.innerHTML = x.innerHTML + `
        <div class="border">
        <div>
            <div class="header">
               ${this.name}
            </div>
            </div>
            <div class="score">0</div>

            <button id="button">Count</button>
        </div>
        `;
    }
}

let names = [
    "valya",
    "vasya",
    "karen",
    "leha",
    "nikit",
    "yulya",
    "marat"
];
names.forEach((thisItem) => {
    new Obj(thisItem, thisItem).render();
});
let reit = [];
document.addEventListener("DOMContentLoaded", () => {
    let sorted_scores = [];
    let grid_min_width = Math.floor(window.innerWidth / 240) * 240;
    document.querySelector(".main").style.width = `${grid_min_width}px`;
    console.log(Math.floor(window.innerWidth / 240));

    let objects = document.querySelectorAll("#button");
    let objectsCount = document.querySelectorAll(".score");

    let module = document.querySelector(".module");

    // console.log(objectsCount);
    var i = 0;
    names.forEach((thisElement, k) => {
        reit[names[k]] = objectsCount[k].textContent;
        objects[i].addEventListener("click", () => {
                objectsCount[k].textContent = Number.parseInt(objectsCount[k].textContent) + 1;
                reit[names[k]] = objectsCount[k].textContent;
            }

        );
        i++;
    });
    let calc = document.querySelector(".calc");
    calc.addEventListener("click", () => {
        let box = document.querySelector(".box");
        box.innerHTML = "";
        document.querySelector(".nav").style.display = "none";
        sorted_scores = [];
        for (let keys in reit) {
            sorted_scores.push([Number.parseInt(reit[keys]),keys]);
        }
        sorted_scores = sorted_scores.sort((a,b)=>{
            return b[0]-a[0];
        });
        console.log(sorted_scores);
        for (let x in sorted_scores) {
            box.innerHTML = box.innerHTML + `<div class="list_items"><h4> ${sorted_scores[x][1]}</h4><h4>${sorted_scores[x][0]} </h4></div>`;

        }

        let main = document.querySelector(".main");
        main.classList.toggle("blur");
        module.classList.toggle("dn");

    });
    module.addEventListener("click", () => {
        let main = document.querySelector(".main");
        module.classList.toggle("dn");
        main.classList.toggle("blur");
        let box = document.querySelector(".box");
        document.querySelector(".nav").style.display = "flex";

    });
    window.addEventListener("resize", () => {
        let grid_min_width = Math.floor(window.innerWidth / 240) * 240;
        document.querySelector(".main").style.width = `${grid_min_width}px`;
        console.log(Math.floor(window.innerWidth / 240));
    });
    
    for (let keys in reit) {
        sorted_scores.push([reit[keys],keys]);
    }

});