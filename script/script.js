/*---(Bill + (bill * tip)) / numero pessoas = total */
/* --(bill * tip) / número de pessoas = tip amount*/

/*const calculaTotal = function(){
			const preco = document.getElementById("preco").value;
			const npessoas = document.getElementById("in-npeople").value;
			const botao = document.getElementById("bt5").value;
			const botao = document.getElementById("bt5").value;
			
			

}
*/


function taxa(tip){
		
			let preco = document.getElementById("preco").value;
			let qtdPessoas = document.getElementById("in-npeople").value;
			/*let percent = tip * preco;*/
		/*	console.log(percent);*/
		
			let total = (preco + (preco * tip)) / qtdPessoas;
			console.log(total);
}

function reset(){

						var btReset = document.querySelector("#reset");
						var preco = document.querySelector("#preco").value;
						var qtdPessoas = document.querySelector("#in-npeople").value;
						
						btReset.addEventListener("click", function(event){
									document.getElementById("preco") = "";
									document.getElementById("in-npessoas")= "";
									
						})
						
}

function calcular(){
		
			
			/*
			taxa();
			total = (preco + (preco * taxa)) / qtdPessoas;*/
			/*console.log(total);
		console.log(total);
		*/
			}
			
