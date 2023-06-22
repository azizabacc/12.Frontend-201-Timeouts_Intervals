//Score
let score = document.createElement('p')
let scoreContainer = document.getElementById("scoreContainer");
let points = 0 ; 
//create holes + eventlisnter
let playardContainer = document.getElementById("playardContainer");
let holeNb =12;
for(let i=0;i<holeNb;i++){
    let hole = document.createElement("div");
    hole.className= "cercle";
    hole.id="hole";
    hole.style.cursor="pointer";
    hole.addEventListener("click", ()=>{
        if(hole.id=='mole'){
            points+=1;
            score.textContent="Score : "+points.toString();
            scoreContainer.append(score);
        }
    })
    playardContainer.append(hole)
}

// select random child and change his backgroud color each 1S

let copyRandom =0;
let interval = setInterval(() => {
let random = Math.floor(1 + Math.random() * playardContainer.childElementCount);
playardContainer.children[copyRandom].style.backgroundColor="green";
playardContainer.children[copyRandom].id="hole";
let cercle = playardContainer.children[random];
cercle.id="mole";
copyRandom = random;


}, 1000);


