class RedeNeural{
    constructor(entrada_nodes, oculta_nodes, saida_nodes){
        this.entrada_nodes = entrada_nodes;
        this.oculta_nodes = oculta_nodes;
        this.saida_nodes = saida_nodes;

        this.bias_entradaOculta = new Matrix(this.oculta_nodes, 1);
        this.bias_entradaOculta.randomize();
        this.bias_OcultaSaida = new Matrix(this.saida_nodes, 1);
        this.bias_OcultaSaida.randomize();

        //pesos
        this.peso_entradaOculta = new Matrix(this.oculta_nodes, this.entrada_nodes);
        this.peso_entradaOculta.randomize();
        this.peso_OcultaSaida = new Matrix(this.saida_nodes, this.oculta_nodes);
        this.peso_OcultaSaida.randomize();

        
    }

    feedfoward(entrada){
        let input = Matrix.arrayToMatrix(entrada);
        //this.peso_entradaOculta.print();
        //input.print();
        let hidden = Matrix.multiply(this.peso_entradaOculta, input);
        hidden = Matrix.add(hidden, this.bias_entradaOculta);
        hidden.print();
    }
}