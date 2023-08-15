let input = document.querySelector('input');
let lista = document.querySelector('ul');

input.addEventListener('keyup', clicu);

function clicu(elemento){
    if (elemento.key === 'Enter'){
        let novo = document.createElement('li');
        novo.innerHTML = input.value;
        lista.appendChild(novo);
        input.value = '';
    }
}

