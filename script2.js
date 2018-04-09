const MAX_LENGTH = 16;

var buttonsTag = document.getElementById("buttons");
var array = [7,8,9,'/',4,5,6,'*',1,2,3,'-', 0,'.','=','+'];
var current=0, previous, temp;
let operation, reset = false;


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
			case '-':
			case '/':
			case '*':
				//if(operation){
					//console.log("Hi");
					//calculate(previous, current, operation);
				//}
				previous ? previous = current: previous =  parseInt(display.innerText);
				operation = button;
				display.innerText = "";
				break;
			case '=':
				display.innerText = current;
				reset = true;
				previous = null;
				break;
			default:
				if(placeValue(parseInt(display.innerText))<MAX_LENGTH){
					if(reset){
						display.innerText = "";
						reset = false;
					}

				display.innerText+=button;
				current = parseInt(display.innerText);
				current = calculate(previous, current, operation);
				}
		}
	}
}
}

function calculate(previous, current, operation){
	switch(operation){
		case '+':
		
			temp = previous;
			previous = current;
			current+=temp;
			return current;
			break;
		case '-':
			temp = previous;
			previous = current;
			current=temp-current;
			return current;
			break;
		case '/':
			temp = previous;
			previous = current;
			current=Math.floor(temp/current);
			return current;
			break;
		case '*':
			temp = previous;
			previous = current;
			current=Math.floor(temp*current);
			return current;
			break;
		default:
			console.log('No operation set yet');
	}
}
function placeValue(number){
	let count =1;
	while(Math.floor(number/10)>0){
		number = Math.floor(number/10);
		count++;
	}
	return count;
}




