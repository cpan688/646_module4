import { showTable } from "./showTable.js";

document.querySelector("#pgWelcome").style.display = "block";

function fnNextScreen(pgHide, pgShow) {
    console.log("fnNextScreen() is running");
    console.log("Coming from: " + pgHide);
    console.log("Going to: " + pgShow);
    document.querySelector(pgHide).style.display = "none";  
    document.querySelector(pgShow).style.display = "block"; 
}; // END fnNextScreen()

const arrStats = [10, 25, 50, 75, 100];
const arrMoney = ["Gold", "Silver", "Iron", "Bronze", "Seashells", "Copper", "Platinum", "RareEarth"];
const arrWeapons = ["Staff", "Dagger", "Chain", "Katana", "Axe", "Laser", "PitchFork", "FireBomb", "Rocks", "Sword"];
const arrClasses = ["Healer", "Warrior", "Thief", "Knight", "Damsel", "Gnome", "Ninja", "Gladiator", "Farmer"];
const arrFamiliars = ["Capuchin", "Hawk", "Lynx", "Wolf", "Wyvern"];
const arrNames = ["Abakor", "Bandala", "Cartin", "Daroame", "Excelsior", "Fezzor", "Gizleeni", "Halor", "Ia", "Jeepenn", "Kalindaa", "Lineuss", "Mordanatara", "Noweakino", "Oinko", "Popeino", "Quantuna", "Rodeo", "Samson", "Tioga", "Utopoh", "Velurfa", "Wonka", "Xanado", "Yolo", "Zandu"];

// Array to keep track of all Emails associated with each Saved game
let arrEmails = [];

function fnGenArray(anArray){
    console.log("fnGenArray() is running with " + anArray);
    let tmpNumber = Math.floor(Math.random() * anArray.length);
    return anArray[tmpNumber];
}; // END fnGenArray()


function fnCharCreate(){
console.log("fnCharCreate() is running");

let valinCreateGameName = document.querySelector("#inCreateGameName").value;
let valinCreateGameEmail = document.querySelector("#inCreateGameEmail").value;
console.log(valinCreateGameName, valinCreateGameEmail);

// Validate that BOTH name and email have been entered - if not, display a warning message and loop back for input
if ((valinCreateGameName != null && valinCreateGameName !="") &&
    (valinCreateGameEmail != null && valinCreateGameEmail != "")) 
  {
    document.querySelector("#pGameInputWarning").style.display = "none";

    // PartyMember(cName, cHP, cStr, cSpd, cMp, cLuck, cWep, cClass)
    let tmpMainCharacter = new PartyMember(valinCreateGameName, 
            fnGenArray(arrStats), 
            fnGenArray(arrStats), 
            fnGenArray(arrStats), 
            fnGenArray(arrStats),
            fnGenArray(arrStats),
            fnGenArray(arrWeapons),
            fnGenArray(arrClasses)
        ); // END Main PartyMember() creation

    console.log(tmpMainCharacter, tmpMainCharacter.cTotals());

    // Now generate companions
    let tmpCompanion01 = new PartyMember(fnGenArray(arrNames),
        fnGenArray(arrStats),
        fnGenArray(arrStats),
        fnGenArray(arrStats),
        fnGenArray(arrStats),
        fnGenArray(arrStats),
        fnGenArray(arrWeapons),
        fnGenArray(arrClasses)
    ); // END Companion #1 creator
    console.log(tmpCompanion01);

    let tmpCompanion02 = new PartyMember(fnGenArray(arrNames),
        fnGenArray(arrStats),
        fnGenArray(arrStats),
        fnGenArray(arrStats),
        fnGenArray(arrStats),
        fnGenArray(arrStats),
        fnGenArray(arrWeapons),
        fnGenArray(arrClasses)
    ); // END Companion #2 creator
    console.log(tmpCompanion02);

    document.querySelector("#pCreateGameInputs").style.display = "none";
    document.querySelector("#pCreateGameControls").style.display = "block";

    // // PartyMember(cName, cHP, cStr, cSpd, cMp, cLuck, cWep, cClass)
    // document.querySelector("#spnCreateGameOutput").innerHTML = "Name: " + tmpMainCharacter.cName;
    // document.querySelector("#spnCreateGameOutput").innerHTML += "<br>Hit Points: " + tmpMainCharacter.cHP;
    // document.querySelector("#spnCreateGameOutput").innerHTML += "<br>Strength: " + tmpMainCharacter.cStr;
    // document.querySelector("#spnCreateGameOutput").innerHTML += "<br>Speed: " + tmpMainCharacter.cSpd;
    // document.querySelector("#spnCreateGameOutput").innerHTML += "<br>Magic: " + tmpMainCharacter.cMp;
    // document.querySelector("#spnCreateGameOutput").innerHTML += "<br>Luck: " + tmpMainCharacter.cLuck;
    // document.querySelector("#spnCreateGameOutput").innerHTML += "<br>Weapon: " + tmpMainCharacter.cWep;
    // document.querySelector("#spnCreateGameOutput").innerHTML += "<br>Class: " + tmpMainCharacter.cClass;

    // document.querySelector("#spnCreateGameOutput").innerHTML += "<br><br>Companion 01: "+ tmpCompanion01.cName;
    // document.querySelector("#spnCreateGameOutput").innerHTML += "<br>Hit Points: " + tmpCompanion01.cHP;
    // document.querySelector("#spnCreateGameOutput").innerHTML += "<br>Strength: " + tmpCompanion01.cStr;
    // document.querySelector("#spnCreateGameOutput").innerHTML += "<br>Speed: " + tmpCompanion01.cSpd;
    // document.querySelector("#spnCreateGameOutput").innerHTML += "<br>Magic: " + tmpCompanion01.cMp;
    // document.querySelector("#spnCreateGameOutput").innerHTML += "<br>Luck: " + tmpCompanion01.cLuck;
    // document.querySelector("#spnCreateGameOutput").innerHTML += "<br>Weapon: " + tmpCompanion01.cWep;
    // document.querySelector("#spnCreateGameOutput").innerHTML += "<br>Class: " + tmpCompanion01.cClass;

    // document.querySelector("#spnCreateGameOutput").innerHTML += "<br><br>Companion 02: "+ tmpCompanion02.cName;
    // document.querySelector("#spnCreateGameOutput").innerHTML += "<br>Hit Points: " + tmpCompanion02.cHP;
    // document.querySelector("#spnCreateGameOutput").innerHTML += "<br>Strength: " + tmpCompanion02.cStr;
    // document.querySelector("#spnCreateGameOutput").innerHTML += "<br>Speed: " + tmpCompanion02.cSpd;
    // document.querySelector("#spnCreateGameOutput").innerHTML += "<br>Magic: " + tmpCompanion02.cMp;
    // document.querySelector("#spnCreateGameOutput").innerHTML += "<br>Luck: " + tmpCompanion02.cLuck;
    // document.querySelector("#spnCreateGameOutput").innerHTML += "<br>Weapon: " + tmpCompanion02.cWep;
    // document.querySelector("#spnCreateGameOutput").innerHTML += "<br>Class: " + tmpCompanion02.cClass;

    // "Join" this Party internally
    let tmpParty = {
        "_id" : valinCreateGameEmail,
        "_currentScreen" : "#pgTavern",
        "cMain" : tmpMainCharacter,
        "cComp01" : tmpCompanion01,
        "cComp02" : tmpCompanion02
    }; // END of complete party in JSON
    console.log(tmpParty);

    // Display the party of one main character and two companions in a table format
    const partyTable = showTable(
        [tmpParty.cMain, tmpParty.cComp01, tmpParty.cComp02],
        [
            { label: 'cHP', name: 'Hit Points' },
            { label: 'cStr', name: 'Strength' },
            { label: 'cSpd', name: 'Speed' },
            { label: 'cMp', name: 'Magic' },
            { label: 'cLuck', name: 'Luck' },
            { label: 'cWep', name: 'Weapon' },
            { label: 'cClass', name: 'Class' }
        ],
        'cName', 'name');
    const partyContainer = document.querySelector('#spnCreateGameOutput');
    partyContainer.innerHTML = ''; // clear any existing content
    partyContainer.appendChild(partyTable);


    // SAVE THE PARTY PERMANENTLY VIA localStorage, first, check if anything has been previously saved
    let tmpAllEmails =  JSON.parse(localStorage.getItem("allEmails"));
    if(!tmpAllEmails){
        // True, we have never played the game before, save data for the first time
        // Add a new email to the array (at the end), keeping track of all saved games
        arrEmails.push(tmpParty._id);
        // Store only all the Emails, so we can retrieve a Party (which is ID'd by an Email)
        localStorage.setItem("allEmails", JSON.stringify(arrEmails));
        // Store everything of this Party, based on emails
        localStorage.setItem(tmpParty._id, JSON.stringify(tmpParty));
        console.log("Success: we saved a game for the first time!");
    } else {
        tmpAllEmails.push(tmpParty._id);
        localStorage.setItem("allEmails", JSON.stringify(tmpAllEmails));
        localStorage.setItem(tmpParty._id, JSON.stringify(tmpParty));
        console.log("Added a new game successfully!");
    }; // END If..Else

 }
 else {
    document.querySelector("#pGameInputWarning").style.display = "block";
 }
}; // END fnCharCreate()

let player01 = {
    "pName" : "Victor",
    "pWep" : "Sword", 
    "pAlive" : true,
    "pPet" : "Cat"
}; // END player01 JSON Notation


// Define the meaning of a Main Character, with its various Properties (Keys) and Methods (Commands)
// 10/7: Changed cPet to cStr and added cCluck & cClass
function PartyMember(cName, cHP, cStr, cSpd, cMp, cLuck, cWep, cClass){
    // "Connect" the external (Global Scope) data with the internal (Local Scope) 
    this.cName  = cName;
    this.cHP    = cHP;
    this.cStr   = cStr;
    this.cSpd   = cSpd;
    this.cMp    = cMp;
    this.cLuck  = cLuck;
    this.cWep   = cWep;
    this.cClass = cClass;
    
    // Add a Method to this Object
    this.cTotals = function(){
        let tmpVal = this.cHP + this.cStr + this.cSpd + this.cMp + this.cLuck;
        return tmpVal;
    }; // END .cTotals()
}; // END PartyMember() OCN


function Vehicle(vType, vSpeedVal, vSpeedUnits, vCapacity){this.vType=vType;};

// Define enemies via JCN  NOTE: Update Enemy class to align with PartyMember
// PartyMember(cName, cHP, cStr, cSpd, cMp, cLuck, cWep, cClass){
class Enemy {
    constructor(eType, eHp, eStr, eSpd, eMp, eWep, eClass, eStatus){
        this.eType = eType;
        this.eHp = eHp;
        this.eStr = eStr
        this.eSpd = eSpd;
        this.eMp = eMp;
        this.eWep = eWep;
        this.eClass = eClass;
        this.eStatus = eStatus;
    }; // END Properties
    eLuck() {
        let tmpLuck = Math.ceil(Math.random() * 100);
        return tmpLuck;
    }; // END .eLuck() Method
}; // END Enemy class (JCN)

// Loads the data of a Player; requires an email Input (Parameter)
function fnGameLoad(gData){
    console.log("fnGameLoad() is running, loading " , gData);
    // Now that we know WHO'S to use, move us to _currentScreen
    // Get all their data from localStorage and Parse it back into a JSON object
    let tmpLoadAllData = JSON.parse(localStorage.getItem(gData));
    console.log(tmpLoadAllData);
    // Move us to their last screen, based on _currentScreen Property
    // NOTE:!!!! changed from fnNextScreen() to fnNavQuest() !!!!
    fnNavQuest("#pgLoadGame", tmpLoadAllData._currentScreen, gData);
}; // END fnGameLoad()

// Function to move from screen to screen, while you play the game
// and keeping track of WHICH player is playing/ gData, charData, partyData, partyBlob
function fnNavQuest(pgHide, pgShow, currParty) {
    console.log("fnNavQuest() is running");
    console.log("Coming from: " + pgHide);
    console.log("Going to: " + pgShow);
    console.log("Current party: " + currParty);
    document.querySelector(pgHide).style.display = "none";
    document.querySelector(pgShow).style.display = "block";
    
    // Switch screen based on parameter pgShow
    switch(pgShow){
        case "#pgTavern":
            console.log("About to initialize The Tavern");
            fnTavern(currParty);
            break;
        case "#pgForest":
            console.log("About to initialize The Forest");
            // fnForest(currParty);
            break;
        case "#pgLake":
            console.log("About to initialize The Lake");
            // fnLake(currParty);
            break;
        default: 
            // Didn't match with any known possibility
            console.log("Unknown screen? ", pgShow);
            break;
    }; // END switch()
}; // END fnNavQuest()

// Function to init the Tavern
function fnTavern(currParty){
    console.log("At the Tavern with ", currParty);

    // Load the complete Party so it can interact
    let myParty = JSON.parse(localStorage.getItem(currParty));
    console.log(myParty);

    document.querySelector("#pTvnMsg").innerHTML = "Welcome travelers! Our Tavern is the oldest in the land. Perhaps try a Game of Strength, Game of Speed, or a Game of Luck? There are many willing participants to challenge!";

    // Display party members in a table format
    const partyTable = showTable(
        [myParty.cMain, myParty.cComp01, myParty.cComp02],
        [
            { label: 'cStr', name: 'STR' },
            { label: 'cSpd', name: 'SPD' },
            { label: 'cLuck', name: 'LUK' }
        ],
        'cName', 'name');
    const partyContainer = document.querySelector('#pTvnParty');
    partyContainer.innerHTML = ''; // clear any existing content
    partyContainer.appendChild(partyTable);


    // Actions to take in this screen via a <form> - populate a drop down menu with myParty members
    // First create the <form> and all <options> based on myParty. Keep it in #pTvnParty and make sure it's +=
    document.querySelector("#pTvnParty").innerHTML += "<p><form id='frmTvnSlctChar'>" + 
            "<label>Choose a Party Member: </label>" +
                "<select id='selTvnChar'>" + 
                    "<option value='0'>&nbsp;</option>" +
                    "<option value='cMain'   id='cMain'>" + myParty.cMain.cName + "</option>" +
                    "<option value='cComp01' id='cComp01'>" + myParty.cComp01.cName + "</option>" +
                    "<option value='cComp02' id='cComp02'>" + myParty.cComp02.cName + "</option>" +
                "</select>" +
        "</form></p>"; // END the <form> to pick a Party member

    
        // Let player select a character to battle - Use addEventListner() to get the selected character from the drop down list
        document.querySelector("#frmTvnSlctChar").addEventListener("change", function(){
            // Read the Values of what we selected
            let valSelTvnChar = document.querySelector("#selTvnChar");
            let valSelTvnCharObj = valSelTvnChar.options[valSelTvnChar.selectedIndex];
        
            // Let player pick a battle action
            if(valSelTvnCharObj.value == 0){
                console.log("true, we picked NOTHING");
            } else {
                console.log("false, we didn't pick nothing, web picked a character");
                console.log("Which <td>", valSelTvnCharObj);
                // NOTE: Alternate syntax to read a Stat:   myParty["cMain"].cLuck vs myParty.cMain.cLuck
                console.log("Member Name:", myParty[valSelTvnCharObj.value].cName);

                // Now start using #pTvnAction and start with =    not +=
                document.querySelector("#pTvnAction").innerHTML = "<p>Have " + myParty[valSelTvnCharObj.value].cName + " do this:</p>" +  "<button>STR Contest</button> <button>SPD Contest</button> <button>LUK Contest</button>";
            }; // END If..Else for Select
        }); // END .addEventListener on the <select>

    // Generate Enemies - constructor(eType, eHp, eStr, eSpd, eMp, eWep, eClass, eStatus)
    let tvEnemy01 = new Enemy("Ogre", 
        fnGenArray(arrStats), fnGenArray(arrStats), fnGenArray(arrStats), fnGenArray(arrStats),
        fnGenArray(arrWeapons), fnGenArray(arrClasses), "Normal");
    let tvEnemy02 = new Enemy("Goblin",   
        fnGenArray(arrStats), fnGenArray(arrStats), fnGenArray(arrStats), fnGenArray(arrStats),
        fnGenArray(arrWeapons), fnGenArray(arrClasses), "Normal");
    let tvEnemy03 = new Enemy("Troll",   
        fnGenArray(arrStats), fnGenArray(arrStats), fnGenArray(arrStats), fnGenArray(arrStats),
        fnGenArray(arrWeapons), fnGenArray(arrClasses), "Normal");

    // document.querySelector("#pTvnEnemy").innerHTML = "<table><tr><td style='padding-right: 0.5em; border-right: 2px solid goldenrod; border-left: 2px solid goldenrod; padding-left: 0.5em;'>" +
    //         tvEnemy01.eType +
    //         "<br>" + tvEnemy01.eClass +
    //     "</td><td style='padding-right: 0.5em; border-right: 2px solid goldenrod; padding-left: 0.5em;'>" +
    //         tvEnemy02.eType +
    //         "<br>" + tvEnemy02.eClass +
    //     "</td><td style='padding-left: 0.5em; border-right: 2px solid goldenrod;'>" +
    //         tvEnemy03.eType +
    //         "<br>" + tvEnemy03.eClass +
    // "</td></tr></table>"; // END <table> of Enemies

    console.log(tvEnemy01, tvEnemy02, tvEnemy03 )
    // (eType, eHp, eStr, eSpd, eMp, eWep, eClass, eStatus)
    const enemyTable = showTable(
        [tvEnemy01, tvEnemy02, tvEnemy03],
        [            
            { label: 'eClass', name: 'Class' },
            { label: 'eStr', name: 'STR' },
            { label: 'eSpd', name: 'SPD' },
            { label: 'eHp', name: 'HP' },
        ],
    );
    const enemyContainer = document.querySelector('#pTvnEnemy');
    enemyContainer.innerHTML = '';
    enemyContainer.appendChild(enemyTable);
    

}; // END fnTavern()


// Universal game initializer subroutine
function fnGameInit(){
    
    console.log("fnGameInit() is running");
    document.querySelector("#pgWelcome").style.display = "block";
    
    // At game start, load the Array of all emails so we can properly set up #pgLoadGame screen
    let tmpGamesAll = JSON.parse(localStorage.getItem("allEmails"));

    // Decide on what to do if NO data (at first run, for example), or YES data (show saves)
    if(!tmpGamesAll){
        console.log("TRUE that we have NO saves");
        document.querySelector("#pLGPartyMessage").innerHTML = "Hello, you are new... Go back and click on 'Create Game'";
        document.querySelector("#spnLGPartyTotals").innerHTML = "0";
    }else{
        console.log("FALSE we do NOT have an EMPTY save slot");
        document.querySelector("#pLGPartyMessage").innerHTML = "Welcome back!";
        document.querySelector("#spnLGPartyTotals").innerHTML = tmpGamesAll.length;
        
        // First prep the empty Paragraph; then start the loop;  NOTE  =  vs += !!
        document.querySelector("#pLGPartySelect").innerHTML = "&nbsp;<br>";
        // Show the Saved Games (Parties) to click on each, and return to your last state (screen)
        // via Looping (a Conditional Statement), so that every party is shown on-screen and clickable
        for(let i = 0; i < tmpGamesAll.length; i++){
            document.querySelector("#pLGPartySelect").innerHTML += 
                "<button onclick='fnGameLoad(`" + tmpGamesAll[i] + "`);'>" + tmpGamesAll[i] + "</button><br>";
        }; //END For()
        
    }; // END If..Else()
}; // END fnGameInit()

// Make inner functions global so HTML can access them
window.fnNextScreen = fnNextScreen;
window.fnCharCreate = fnCharCreate;
window.fnGenArray = fnGenArray;
window.fnGameLoad = fnGameLoad;
window.fnNavQuest = fnNavQuest;
window.fnTavern = fnTavern;

// Initialize the game
fnGameInit();
