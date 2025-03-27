var comp;
var area;
var vol;

const valorRaio = document.getElementById('valorRaio');
const bcalcular = document.getElementById('bcalcular');

function printar(){
    const valorComp = document.getElementById('comprimento');
    const valorArea = document.getElementById('area');
    const valorVolume = document.getElementById('volume');

    valorComp.innerHTML = `Comprimento: <span class="valor">${comp.toFixed(2)}</span>`;
    valorArea.innerHTML = `Área: <span class="valor">${area.toFixed(2)}</span>`;
    valorVolume.innerHTML = `Volume: <span class="valor">${vol.toFixed(2)}</span>`;
}

function calcular(CAV, raio){
    raio = parseFloat(raio);
    var C;
    var A;
    var V;
    switch(CAV){
        case 'C': 
            C = 2*raio*Math.PI;
            return C;
        case 'A':
            A = Math.pow(raio, 2) * Math.PI;
            return A;
        case 'V':
            V =  Math.pow(raio, 3) * Math.PI * (4/3);
            return V;
            break;
    }
}

function processar() {
    let raio = parseFloat(valorRaio.value);
   
    comp = calcular('C', raio);
    area = calcular('A', raio);
    vol = calcular('V', raio);
    printar();
    
}