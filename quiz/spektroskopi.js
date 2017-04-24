/**
 * @author ato
 */

var korrekt = "<img src='../java_shared/korrekt.gif'/>";
var forkert = "<img src='../java_shared/forkert.gif'/>";

function check_svar() {
		
	//antallet af variabler skal afspejle antallet af spørgsmål:
	var radioButtons1 = document.getElementsByName("svar1_1");
	
	var radioButtons2 = document.getElementsByName("svar2_1");
	
	var radioButtons3 = document.getElementsByName("svar3_1");
	//alert("Break");
	//var radioButtons = document.getElementsByName("radio1");
	

	//Antallet af felter i Array'et skal afspejle antallet af spørgsmål:

	var radioButtons = new Array(radioButtons1, radioButtons2, radioButtons3);
	
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