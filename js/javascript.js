function showResult() {
	var x = document.querySelector('form');
	var text = "";
	var i;
	for (i = 0; i < x.length ;i++) {
	  text += x.elements[i].value;
	}
	document.getElementById("show-result").innerHTML = text;
	makeIrony(text);
  }

async function makeIrony(text) {
	let ironicText = [];
	for (let index = 0; index < text.length; index +=2) {
		if (Math.floor(Math.random()*10) == 9) {
			ironicText.push(text.toUpperCase()[index])
		} else {
			ironicText.push(text.toLowerCase()[index])
		}
		if (Math.floor(Math.random()*10) == 9) {
			ironicText.push(text.toLowerCase()[index+1])
		} else {
			ironicText.push(text.toUpperCase()[index+1])
		}
	}
	tempResult = ironicText.join('');
	let result = [];
	for (let index = 0; index < tempResult.length; index++) {
		result.push(tempResult[index]);
		newResult = result.join('');
		document.getElementById("show-irony").innerHTML = newResult;
		await delay(0.1);
	}
	document.getElementById("show-irony").innerHTML = newResult;
	document.querySelector('#text-input').innerText = newResult;
	navigator.clipboard.writeText(newResult);
	showBox();
	await delay(2);
	showBox();
}

function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000);
    });
}

document.addEventListener('keydown',(event)=>{
	if (event.key === 'Enter') {
		document.getElementById('form').addEventListener('submit', (event)=>{
			event.preventDefault();
		});
		showResult();
	}
})

function showBox() {
	let bubble = document.querySelector('.bubble');
	if (bubble.classList.contains('hidden')) {
		bubble.classList.remove('hidden');
		setTimeout(function () {
		  bubble.classList.remove('visuallyhidden');
		}, 20);
	} else {
		bubble.classList.add('visuallyhidden');    
		bubble.addEventListener('transitionend', function(e) {
		  bubble.classList.add('hidden');
		}, {
		  capture: false,
		  once: true,
		  passive: false
		});
	}
}