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
			console.log(qtdPessoas);
			let percent = preco * tip;
			let total = (preco + percent) / qtdPessoas;
			console.log(total);
			
				const dados = `
				<div class="resultado">
							<ul>
					<label>${total}</label>
				
				
							</ul>
				</div>
		`;
		
		const resultado = document.getElementById("container-resultado");
		resultado.innerHTML = dados;				
			
				
			/*let divEl= document.querySelector('container-resultado');
			let pEl= document.createElement('p');
			divEl.appendChild(pEl)
			pEl.innerHTML = 'EUEUU'*/
			
}

function reset(){
						document.getElementById("preco").value = ""
						document.getElementById("in-npeople").value = ""			
						document.getElementById("input-custom").value = ""
}

function calcular(){
			}
			
			
