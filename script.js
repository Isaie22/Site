function contact() {
    var copy1 = document.getElementById("contact1");
    copy1.select();
    navigator.clipboard.writeText(copy1.value);
    alert("Le numéro de téléphone a bien été copié");
}
function contact1() {
    var copy2 = document.getElementById("contact2");
    copy2.select();
    navigator.clipboard.writeText(copy2.value);
    alert("L'email a bien été copié");
}
function craft() {
    var craft = document.getElementById("craft1").value
    var background = document.getElementById("square").value
    if (craft == "Stick") {
        // if(craft == "Stick") 
        console.log("ceci est un bâton");
     
    }
    else {
        console.log("ceci n'est pas un bâton");
    }
}
function test(){
    var test = document.getElementById("imgtest");
}
    