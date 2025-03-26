var comp;
var area;
var vol;

const valorRaio = document.getElementById('valorRaio');
const bcalcular = document.getElementById('bcalcular');


function calcular(CAV, raio){
    raio = parseFloat(raio);
    switch(CAV){
        case 'C':
            var C;
            C = 2*raio*Math.PI;
            console.log(`Comprimento calculado: ${C}`);
            return C;
        case 'A':
            var A;
            A = Math.pow(raio, 2) * Math.PI;
            console.log(`Área calculada: ${A}`);
            return A;
        case 'V':
            var V;
            V =  Math.pow(raio, 3) * Math.PI * (3/4);
            console.log(`Volume calculado: ${V}`);
            return V;
            break;
    }
}

function printAll(){
    const Pcomp = document.getElementById('comprimento');
    const Parea = document.getElementById('area');
    const Pvol = document.getElementById('volume');
    Pcomp.innerHTML = `Comprimento: <span class="valor">${comp.toFixed(2)}</span>`;
    Parea.innerHTML = `Área: <span class="valor">${area.toFixed(2)}</span>`;
    Pvol.innerHTML = `Volume: <span class="valor">${vol.toFixed(2)}`;

}

function lerRaio() {
    let raio = parseFloat(valorRaio.value);
   
    comp = calcular('C', raio);
    area = calcular('A', raio);
    vol = calcular('V', raio);
    printAll();
    
}


bcalcular.addEventListener('mouseup', function(){
    bcalcular.classList.remove('press');
})
bcalcular.addEventListener('mousedown', function(){
    bcalcular.classList.add('press');
    lerRaio();
})

valorRaio.addEventListener('keypress', function(event){
    if (event.key === 'Enter'){
        lerRaio();
    }

})