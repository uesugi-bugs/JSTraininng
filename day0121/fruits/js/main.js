'use strict';
window.addEventListener('load',()=>{
	//const price=[120,50,180];
	const result=document.getElementById('result');
	const fruits=document.getElementsByClassName('fruits');
	const numberChange=()=>{
		let sum=0;
		console.log('in');
		for(let i=0;i<fruits.length;i++){
			sum+=parseInt(fruits[i].value) * parseInt(fruits[i].getAttribute("data-price"));
		}
		result.textContent=`${sum}円です!`;
	};

	for(let i=0;i<fruits.length;i++){
		fruits[i].addEventListener('change',numberChange);
		fruits[i].addEventListener('keyup',numberChange);
		fruits[i].addEventListener('mouseup',numberChange);
	}
});
