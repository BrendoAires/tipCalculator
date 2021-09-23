//---(Bill + (bill * tip)) / numero pessoas = total 
// --(bill * tip) / número de pessoas = tip amount

/*function checkFocus(){

			if (document.hasFocus()){
						customTip()
						
}
}*/
function pegaInput(){
			qtdPessoas = parseInt(document.getElementById("in-npeople").value);
		
			preco = parseFloat(document.getElementById("preco").value);
}

function desativarButton(){
			document.getElementById("bt5").disabled = true;
			document.getElementById("bt10").disabled = true
			document.getElementById("bt15").disabled = true
			document.getElementById("bt25").disabled = true
			document.getElementById("bt50").disabled = true

}

function ativarButton(){
			document.getElementById("bt5").disabled = false;
			document.getElementById("bt10").disabled = false
			document.getElementById("bt15").disabled = false
			document.getElementById("bt25").disabled = false
			document.getElementById("bt50").disabled = false
}
function customTip(){
			pegaInput()
			desativarButton()
						
			tip = parseFloat(document.getElementById("input-custom").value);
						
						Taxa = tip / 100;
							
			
}


function calcularTaxa(tip){
			pegaInput()
			Taxa = tip / 100;
			console.log(Taxa)
			pPessoa = (preco * Taxa) / qtdPessoas;
			total = (preco + (preco * Taxa)) / qtdPessoas;
			tPessoa = pPessoa.toFixed(2);
			tTotal = total.toFixed(2);
			
			
}



function calcular(){
		
			abc = document.querySelector('#input-custom').value
			if (abc.length > 1){
			
				customTip()
				pPessoa = (preco * Taxa) / qtdPessoas;
			total = (preco + (preco * Taxa)) / qtdPessoas;
			tPessoa = pPessoa.toFixed(2);
			tTotal = total.toFixed(2);	
			imprimirResultado()
				
					//console.log(customTaxa)
			}else{
			
			ativarButton()
			calcularTaxa()
		imprimirResultado()
			
			
			}		
			
}
	
function imprimirResultado()	{
		
			
		
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
