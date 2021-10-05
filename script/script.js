const resultadoPessoa = document.querySelector('#label-resultado-pessoa')
const resultadoTotal = document.querySelector('#label-resultado-total')
const inputCustom = document.querySelector('#input-custom')
const botao = document.querySelectorAll('button')
const btReset = document.querySelector('#reset');
const valor = document.querySelector('#preco')
const nPessoas = document.querySelector('#npeople')
const msgErro = document.querySelector('#msgErro')
const msgErro1 = document.querySelector('#msgErro1')
			
	valor.addEventListener('input', validaPreco);
	function validaPreco(){
	
			if(Number(valor.value) === 0){
			
			const infoErro =`
			<label class="msgErro">Can't be 0</label>
	`;
			const erro = msgErro;
			erro.innerHTML = infoErro;				

			valor.value = ''
			valor.classList.add('inputerro')
			valor.classList.remove('ok')
		
			}
			else{
			valor.classList.add('ok')
			valor.classList.remove('inputerro')
			const infoErro =`
			<label class="msgErro"></label>
	`;
			const erro = msgErro;
			erro.innerHTML = infoErro;				
			
						}

	}		
	
	inputCustom.addEventListener('input', validaInputCustom);
	function validaInputCustom(){
	
			if(Number(inputCustom.value) === 0){
			
			
			inputCustom.value = ''
			inputCustom.classList.add('inputerro')
			inputCustom.classList.remove('ok')
		
			}
			else{
			inputCustom.classList.add('ok')
			inputCustom.classList.remove('inputerro')
			
						}

	}		
	
	
	nPessoas.addEventListener('input', validaInputPessoa);
	function validaInputPessoa(){
	
			if(Number(nPessoas.value) === 0){
			
			const infoErro =`
			<label class="msgErro">Can't be 0</label>
	`;
			const erro = msgErro1;
			erro.innerHTML = infoErro;				

			nPessoas.value = ''
			nPessoas.classList.add('inputerro')
			nPessoas.classList.remove('ok')
		
			}
			else{
			nPessoas.classList.add('ok')
			nPessoas.classList.remove('inputerro')
			const infoErro =`
			<label class="msgErro"></label>
	`;
			const erro1 = msgErro1;
			erro1.innerHTML = infoErro;				
			
						}

	}		
	
	

botao.forEach((button)=>{
			button.addEventListener('click', getTip)
});




function getTip(x){

			const qtdPessoas = parseFloat(nPessoas.value)
			const preco = parseFloat(valor.value)

			const tax = x.currentTarget.dataset.set;
			
			switch (tax){

			case 'cinco':
			tip  = (preco * 0.05) / qtdPessoas;
			total = ((preco * 0.05) + preco) / qtdPessoas;
		Pessoa = tip.toFixed(2);
		Total = total.toFixed(2);
			imprimir()
			break;
			
			case 'dez':
			tip  = (preco * 0.1) / qtdPessoas;
			total = ((preco * 0.1) + preco) / qtdPessoas;
			Pessoa = tip.toFixed(2);
		 Total = total.toFixed(2);
		 imprimir()
			break;

			case 'quinze':
			tip  = (preco * 0.15) / qtdPessoas;
			total = ((preco * 0.15) + preco) / qtdPessoas;
			Pessoa = tip.toFixed(2);
		 Total = total.toFixed(2);
		 imprimir()
			break;
			
			case 'vinte e cinco':
			tip  = (preco * 0.25) / qtdPessoas;
			total = ((preco * 0.25) + preco) / qtdPessoas;
		Pessoa = tip.toFixed(2);
		 Total = total.toFixed(2);
		 imprimir()
			break;
			
			case 'cinquenta':
			tip  = (preco * 0.50) / qtdPessoas;
			total = ((preco * 0.50) + preco) / qtdPessoas;
			Pessoa = tip.toFixed(2);
		 Total = total.toFixed(2);
		 imprimir()
			break;
			}
}


inputCustom.addEventListener('input',getInputCustom)

function getInputCustom(){
			const quantidadePessoas = parseFloat(nPessoas.value)
			const bill = parseFloat(valor.value)
			const input = parseFloat(inputCustom.value / 100)
			taxa  = (bill * input) / quantidadePessoas;
			total = ((bill * input) + bill) / quantidadePessoas;
			Pessoa = taxa.toFixed(2);
		 Total = total.toFixed(2);
		 console.log(input)
		 imprimir()
}


function imprimir(){

const dadosPessoa = `

		<label class="label-resultado-pessoa">$${Pessoa}</label>
	
`;
const resultPessoa = resultadoPessoa;
		resultPessoa.innerHTML = dadosPessoa;				



const dadosTotal = `
	
				<label class="label-resultado-total">$${Total}</label>
	
	`;
	
	const resultTotal = resultadoTotal;
resultTotal.innerHTML = dadosTotal;


		}
		
btReset.addEventListener('click', reset)
function reset(){
			resultadoPessoa.innerHTML = '$0.00'
			resultadoTotal.innerHTML = '$0.00'
		 valor.value = ''
			nPessoas.value = ''
			inputCustom.value = ''
			nPessoas.classList.remove('inputerro')
			valor.classList.remove('inputerro')
			inputCustom.classList.remove('inputerro')
			
								
}
