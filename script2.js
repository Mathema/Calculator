var buttonsTag = document.getElementById("buttons");
var array = [7,8,9,'/',4,5,6,'X',1,2,3,'-', 0,'.','=','+'];
let current = 0;


Calculator();
function Calculator(){
	initializeButtons();


}




function initializeButtons(){
for(var i=0; i<array.length; i++){
buttonsTag.innerHTML+=`<div class='button'>${array[i]}</div>`;
}
var buttons = document.getElementsByClassName('button');
var display = document.getElementById("display");
for(i=0; i<buttons.length; i++){
	buttons[i].onclick = function(){
		var button = this.innerText;
		
		switch(button){
			case '+':

				var number = parseInt(display.innerText);
				display.innerHTML = "";
				current+=number;
				break;
			case '-':
				current -=parseInt(display.innerText);
				break;
			case '/':
			case '*':
				
				break;
			case '=':
				display.innerText = current;
				break;
			default:
				display.innerText+=button;
		}
	}
}
}





