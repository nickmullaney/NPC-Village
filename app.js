function yourName(){
let userName = prompt("What is your name Adventurer?")
document.write ("Hello Adventurer " + userName + ", welcome to NPC Village")
}

function npcAge(){
    let valid = false;
    while (!valid){
        let charAge = prompt("How old is this NPC?")
        if(charAge > 1000){
            console.log("That character is ancient!")
            return charAge;
        }
        else if (charAge < 8){
            console.log("Tis but a child!")
            return charAge;
        }
        else if(charAge > 0 || charAge <1000){
            return charAge;
        }
        else{alert ("Let's try that again?")
    }
}

    

function getNpcAge(){
let charAge = npcAge();
document.write ("Age: " + charAge)
}

function farewellName(){
    let newUserName = prompt("What do we call you when you leave this place?")
            document.write  ("Thanks for stopping by " + newUserName + " The Magnificent");
}

function characterAge() {
                charAge = random();
                console.log(charAge);
            }
            
function random(){
    return(Math.floor(Math.random() * 100));
            } 

function moreNpc(){
    let valid = false;
    while(!valid){
    let gimme = prompt("How many additional Villagers do you want?");
    for(let i = 0; i < gimme; i++){
        if(gimme > 0){
        valid = true;}
        document.write("<img class='agnes' img src ='Images/Agnes.jpg' alt ='NPC' />");
        }
    }
}
}