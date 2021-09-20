/*---(Bill + (bill * tip)) / numero pessoas = total */
/* --(bill * tip) / número de pessoas = tip amount*/


function pegaDados(){
			preco = parseFloat(document.getElementById("preco").value);
			qtdPessoas = parseInt(document.getElementById("in-npeople").value);
			customTip = parseFloat(document.getElementById("input-custom").value);
}



function customTip(){
			
						pegaDados();
						pPessoa = (preco * customTip) / qtdPessoas;
						total = (preco + (preco * customTip)) / qtdPessoas;
						imprimeResultado();
			
}

function pegaTaxa(tip){
			taxa = tip / 100;
			console.log(taxa)
			
			
}


function calcular(){

			pegaDados();
			pegaTaxa()
						
			
			pPessoa = (preco + (preco * taxa)) / qtdPessoas;
			total = (preco + taxa) / qtdPessoas;
			tPessoa = pPessoa.toFixed(2);
			tTotal = total.toFixed(2);
			imprimeResultado();

}
			

			
			
function imprimeResultado()	{
	calcular();
	
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


			
