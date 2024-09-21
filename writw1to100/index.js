
for (let i = 1; i <= 100; i++) {
    document.write(i + "<br>"); 
}
//  
// var personName=["TaYyab","hafeez","Danyial","Kamran","Arham","Siraj","Usman"]
// for (let personName= )
var personNames = [
    "TaYyab",
    "Hafeez",
    "DanIyal",
    "KamrAn", 
    "SiRaj",
    "ArHaM",
    "uSmAn",
    "FaIzaN"
]
for (let a = 0; a < personNames.length; a++) {
    let check = personNames[a].toLowerCase(); 
    if (check === "arham")
     { 
        document.write(`${a}, ${check} it's your teacher`);
    }
}
