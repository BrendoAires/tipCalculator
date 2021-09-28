const resultadoPessoa = document.querySelector('#label-resultado-pessoa')
const resultadoTotal = document.querySelector('#label-resultado-total')
const inputCustom = document.querySelector('#input-custom')
const botao = document.querySelectorAll('button')
const btReset = document.querySelector('#reset');
const valor = document.querySelector('#preco')
const nPessoas = document.querySelector('#npeople')
			
			
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
}