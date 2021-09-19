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
			var totalPessoaFormatado = tPessoa.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
			var totalFormatado = tTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
			
			console.log(total);
			
			
			const dadosPessoa = `
							<label>${totalPessoaFormatado}</label>
				`;
		
		const resultadoPessoa = document.getElementById("label-resultado-pessoa");
		resultadoPessoa.innerHTML = dadosPessoa;			
			
				const dadosTotal = `
							<label>${totalFormatado}</label>
				`;
		
		const resultadoTotal = document.getElementById("label-resultado-total");
		resultadoTotal.innerHTML = dadosTotal;			
			
				
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
			
			
