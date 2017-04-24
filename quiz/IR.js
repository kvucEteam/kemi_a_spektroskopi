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
	
	var radioButtons4 = document.getElementsByName("svar4_1");
	
	var radioButtons5 = document.getElementsByName("svar5_1");
	
	var radioButtons6 = document.getElementsByName("svar6_1");
	
	var radioButtons7 = document.getElementsByName("svar7_1");
	
	var radioButtons8 = document.getElementsByName("svar8_1");
	
	var radioButtons9 = document.getElementsByName("svar9_1");
	
	var radioButtons10 = document.getElementsByName("svar10_1");
	
	var radioButtons11 = document.getElementsByName("svar11_1");
	//alert("Break");
	//var radioButtons = document.getElementsByName("radio1");
	

	//Antallet af felter i Array'et skal afspejle antallet af spørgsmål:

	var radioButtons = new Array(radioButtons1, radioButtons2, radioButtons3, radioButtons4, radioButtons5, radioButtons6, radioButtons7, radioButtons8, radioButtons9, radioButtons10, radioButtons11);
	
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