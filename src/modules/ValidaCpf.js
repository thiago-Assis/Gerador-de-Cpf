// cpf = '705.484.450-52'; 070.987.720.03
export default class ValidaCpf {
    constructor (cpfEnviado) {
    Object.defineProperty (this, 'cpfLimpo', {
        writable: false,
        enumerable: false,
        value: cpfEnviado.replace(/\D+/g, '')
    });
    }

eSequencia () {
    return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
}

geraNovoCpf() {
    const cpfParcial = this.cpfLimpo.slice(0,-2);
    const digito1 = ValidaCpf.geraDigito(cpfParcial);
    const digito2 = ValidaCpf.geraDigito(cpfParcial + digito1);
    this.novoCPF = cpfParcial + digito1 + digito2;
}

static geraDigito(cpfParcial){
    let total = 0;
    let reverso = cpfParcial.length +1;

    for(let i of cpfParcial) {
        //console.log(i,reverso);
        total += reverso * Number(i);
        reverso--;
    }

    const digito = 11 - (total % 11);
    return digito <= 9 ? String(digito) : '0';

}

    valida() {
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.eSequencia()) return false;
        this.geraNovoCpf();
        return this.novoCPF === this.cpfLimpo;
    }
}
console.log('cheguei aqui');
/*
const cpfValido = new ValidaCpf ('070.987.720.03');

if (cpfValido.valida()) {
    console.log('Cpf Válido');
}else{
    console.log('Cpf Invalido');
}
*/