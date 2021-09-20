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
		
			let preco = parseFloat(document.getElementById("preco").value);
			let qtdPessoas = parseInt(document.getElementById("in-npeople").value);
			let pPessoa = (preco * tip) / qtdPessoas;
			var total = (preco + (preco * tip)) / qtdPessoas;
			tPessoa = pPessoa.toFixed(2);
			tTotal = total.toFixed(2);
			
			
			
			
			
			const dadosPessoa = `
							<label class="label-resultado-pessoa">$${tPessoa}</label>
				`;
		
		const resultadoPessoa = document.getElementById("label-resultado-pessoa");
		resultadoPessoa.innerHTML = dadosPessoa;			
			
				const dadosTotal = `
							<label class="label-resultado-total">$${tTotal}</label>
				`;
		
		const resultadoTotal = document.getElementById("label-resultado-total");
		resultadoTotal.innerHTML = dadosTotal;			
			
}

function reset(){
						document.getElementById("preco").value = ""
						document.getElementById("in-npeople").value = ""			
						document.getElementById("input-custom").value = ""
						document.getElementById("label-resultado-pessoa").innerHTML = ""
						document.getElementById("label-resultado-total").innerHTML = ""
}

function calcular(){
			}
			
			
