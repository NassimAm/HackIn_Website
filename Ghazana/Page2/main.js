let data = {
    "job_male" : ["siya9", "fellah", "sayyad", "chajara", "ra9as", "biya3", "dj", "keyyas", "chômeur", "djaja", "samaka"],
    "job_female" : ["fellaha", "sayyada", "chajara", "biya3a", "dj", "chômeur", "djaja", "samaka"],
    "car" : ["r4", "404 baché", "symbol 9otra sbigha mafihach", "nissan Gtr ", "Clio 4 t3 tbib", "Audi safra", "evoque violet", "bmw khadra", "Lamborghini mattla3ch dodane", "Buggati mattla3ch dodane", "Renault tkali f tal3a", "206", "marouti", "qq", "atos base clim", "i10", "spark", "GT-LINE"],
    "wife" : ["Salma", "Khadija", "Aicha", "Maria", "Asma", "Fati7a", "Olivia", "Charlotte", "Amelia", "Emily", "Imane", "Yasmine", "Riley", "Valentina", "Soumia", "melissa", "lynda", "FATIMA", "Hania", "hind"],
    "husband":["Morad", "Merouane", "Moussa", "Islam", "Ilyes", "Mustafa", "salah", "SALIM", "Akram", "Hamza", "aziz", "hocine", "khaled", "Fares", "Badro", "Hamid", "Rida", "yahia", "Farouk", "Badro", "sisou", "fethi"],
    "country" : ["mouzambi9", "usa", "Nigeria", "Ethiopia", "Tanzania", "Uganda", "Angola", "Cameroon", "Somalia", "Rwanda", "South Sudan", "Congo", "Gambia", "Mexico", "Argentina", "Chile", "Peru", "Cuba", "Costa Rica", "Panama", "Jamaica"],
    "death" : ["zla9 fl7amam ou ta7 3la rasou [THE END]","tahet 3lih banana 3la rasou w mat [THE END]"],
    "form" : [
            "{name} will be a talented {job}, suffering from {pronoun_pos} {nb_kid} kids, but lucky enough to have {money} dollars, and a {car} car. {name} will get married to {pronoun_pos} {partner}, living in {country}",
             "{name} is gonna be a successful {job}, happily living with {pronoun_pos} {nb_kid} kids and {pronoun_pos} {partner}, in {country} the poor {name} have just {money} dollars and a {car} car", 
             "When {name} will turn {age} years old, {name} will be an amazing {job} living in the wondeful {country}, after making {pronoun_pos} first {money} dollars, {name} will get married to {pronoun_pos} {partner} and have {nb_kid} beautiful and annoying kids", 
             "{name} will be a talented {job}, suffering from {pronoun_pos} {nb_kid} kids, but lucky enough to have {money}$ and a {car}, {name} will get married with {pronoun_pos} {partner}, living in {country}, .... fettali {death}",
             "{name} gonna be a successful {job}, happily living with {nb_kid} kids and {pronoun_pos} {partner}, in {country}. The poor has just {money}$ and a {car} car",
             "After {name} graduates from ESI, {name} will be a very professional {job}, Living happily in south {country} with {pronoun_pos} beautiful {partner} who works as a {job}, finally ...... {death}"
            ]
}
  
  let name_input = document.getElementById("name");
  let gender_input = document.getElementById("gender");
  let output_script = document.getElementById("output");
  
  let speech = new SpeechSynthesisUtterance();
  speech.lang = "en";
  speech.volume = "1";
  
  let name = "";
  let script = "";
  let job = "";
  let car = "";
  let gender = "0";
  let partner = "";
  let country = "";
  let death = "";
  let voices = [];
  
  window.addEventListener("beforeunload", () => window.speechSynthesis.cancel());
  name_input.addEventListener("change", (e) => (name = e.currentTarget.value));
  gender_input.addEventListener("change", () => (gender = gender_input.value));
  
  function GenerateFuture() {
    if (name != "") {
      window.speechSynthesis.cancel();
  
      script = data["form"][Math.floor(Math.random() * data["form"].length)];
      car = data["car"][Math.floor(Math.random() * data["car"].length)];
      country =
        data["country"][Math.floor(Math.random() * data["country"].length)];
      death = data["death"][Math.floor(Math.random() * data["death"].length)];
  
      if (gender === "0") {
        partner =
          "wife " + data["wife"][Math.floor(Math.random() * data["wife"].length)];
        job = data["job_male"][Math.floor(Math.random() * data["job_male"].length)];
        script = script.replaceAll("{pronoun}", "he");
        script = script.replaceAll("{pronoun_pos}", "his");
      } else {
        partner =
          "husband " +
          data["husband"][Math.floor(Math.random() * data["husband"].length)];
        job = data["job_female"][Math.floor(Math.random() * data["job_female"].length)];
        script = script.replaceAll("{pronoun}", "she");
        script = script.replaceAll("{pronoun_pos}", "her");
      }
  
      let first_factor = Math.floor(Math.random() * 2);
      let nb_kid = 0;
      let age = 0;
      if (first_factor === 0) {
        nb_kid = Math.floor(Math.random() * 10);
        age = 20 + Math.floor(Math.random() * 20);
      } else {
        nb_kid = 10 + Math.floor(Math.random() * 40);
        age = 40 + Math.floor(Math.random() * 50); 
      }
  
      let factor = Math.floor(Math.random() * 100);
      let money = 0;
      
      if (factor < 30) {
        money = Math.floor(Math.random() * 1000);
      } else if (factor < 60) {
        money = 1000 * Math.floor(Math.random() * 10);
      } else {
        money = 10000 * Math.floor(Math.random() * 100);
      }
  
      script = script.replaceAll("{name}", name);
      script = script.replaceAll("{job}", job);
      script = script.replaceAll("{car}", car);
      script = script.replaceAll("{country}", country);
      script = script.replaceAll("{partner}", partner);
      script = script.replaceAll("{nb_kid}", nb_kid);
      script = script.replaceAll("{money}", money);
      script = script.replaceAll("{death}", death);
      script = script.replaceAll("{age}", age);
  
      output_script.innerHTML = script;
      speech.text = script;
  
      voices = window.speechSynthesis.getVoices().filter(e => e.lang.slice(0, 2) === "en");
      if(voices.length > 0) speech.voice = voices[Math.floor(Math.random() * voices.length)];
  
      window.speechSynthesis.speak(speech);
    }
    else
    {
      output_script.innerHTML = "Fill the name field first!";
    }
  }


//Text Changing-----------------------------
var i = 0;            
// Start Point 
var texts = [];    
// Texts Array 
var time = 2000;    
//Time Between Switch       
//Image List 
texts[0] = "منووور"; 
texts[1] = "يا ابتسييي";
texts[2] = "واش الزووو";
texts[3] = "انعم ايه";
texts[4] = "لعزيييز";
texts[5] = "ديڨولااااص";
// Change Text 
function changeText(){     
    document.getElementById("changetext").innerHTML = texts[i];      
    // Check If Index Is Under Max     
    if(i < texts.length - 1)
    {       
        // Add 1 to Index       
        i++;      
    } 
    else 
    {   // Reset Back To O         
        i = 0;     
    }      
    // Run function every x seconds     
    setTimeout("changeText()", time); 
}  
// Run function when page loads 
window.onload=changeText;

let submit = document.getElementById("next-button");
submit.addEventListener("click", e => {
  GenerateFuture();
  document.getElementById("flip-card-inner").style.transform = "rotateY(180deg)";
})

