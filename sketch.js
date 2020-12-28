function setup(){
    createCanvas(500, 500);
    background(0);

    /*
    var m1 = new Matrix(2,2);
    var m2 = new Matrix(2,2);

    Matrix.add(m1, m2);
    */
   var rede = new RedeNeural(1, 3, 1);
   var arr = [1,2];
   rede.feedfoward(arr);
    
}

function draw(){
    
}