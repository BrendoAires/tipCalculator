/*---(Bill + (bill * tip)) / numero pessoas = total */
/* --(bill * tip) / número de pessoas = tip amount*/



/*function customTip(){
			
						
						pPessoa = (preco * customTip) / qtdPessoas;
						total = (preco + (preco * customTip)) / qtdPessoas;
						imprimeResultado();
			
}*/

function calcularTaxa(tip){
			taxa = tip / 100
			return calcularTaxa
}

function pegaDados(){
			preco = parseFloat(document.getElementById("preco").value);
			qtdPessoas = parseInt(document.getElementById("in-npeople").value);
			customTip = parseFloat(document.getElementById("input-custom").value);
}

function calcular(){
			pegaDados();
			pPessoa = (preco * taxa) / qtdPessoas;
			total = (preco + (preco * taxa)) / qtdPessoas;
			tPessoa = pPessoa.toFixed(2);
			tTotal = total.toFixed(2);
}
			
			
function imprimirResultado()	{
			calcular()
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