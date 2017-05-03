/**
 * @author ato
 */

var korrekt = "<img src='../java_shared/korrekt.gif'/>";
var forkert = "<img src='../java_shared/forkert.gif'/>";

function check_svar() {
		
	//antallet af variabler skal afspejle antallet af spørgsmål:
	var radioButtons4 = document.getElementsByName("svar1_4");
	
	var radioButtons5 = document.getElementsByName("svar1_5");
	
	var radioButtons9 = document.getElementsByName("svar2_4");
	
	var radioButtons10 = document.getElementsByName("svar2_5");
	
	var radioButtons14 = document.getElementsByName("svar3_4");
	
	var radioButtons15 = document.getElementsByName("svar3_5");
	
	var radioButtons19 = document.getElementsByName("svar4_4");
	
	var radioButtons20 = document.getElementsByName("svar4_5");
	//alert("Break");
	//var radioButtons = document.getElementsByName("radio1");
	

	//Antallet af felter i Array'et skal afspejle antallet af spørgsmål:

	var radioButtons = new Array(radioButtons4, radioButtons5, radioButtons9, radioButtons10, radioButtons14, radioButtons15, radioButtons19, radioButtons20);
	
	/// End edit 

	var feedbacktags = document.getElementsByTagName("dfn");
	
				//alert(feedbacktags.length);
	

	var feedback = document.getElementById("respons");

	var score = 0;

	for( i = 0; i < radioButtons.length; i++) {

		for( u = 0; u < radioButtons[i].length; u++) {

			if(radioButtons[i][u].checked == true && radioButtons[i][u].value == "true"){ //svar[i]) {
				feedbacktags[i].innerHTML = korrekt;
				score++;
			} else if(radioButtons[i][u].checked == true && radioButtons[i][u].value != "true"){//svar[i]) {

				feedbacktags[i].innerHTML = forkert;
			}else{
				//alert("der sker ikke noget!");
				
			}
		}
	}
	//feedback til brugereren i  "" :
	if(score > (radioButtons.length - 1)) {
		feedback.innerHTML = "Flot! Du har besvaret samtlige spørgsmål korrekt!"
	} else {
		feedback.innerHTML = "Du mangler at besvare et eller flere spørgsmål korrekt."

	}
	

}

-->