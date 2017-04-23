





export function distance([xi,yi], [xf,yf]) {
    
    const sos = Math.pow(xf - xi, 2) + Math.pow(yf - yi, 2);
    return Math.sqrt(sos);
}

export function partitionPoints([xi,yi], [xf,yf], n) {
    const   D = distance([xi,yi], [xf,yf]),
            d = D / (n + 1);
    
    const   coz = (xf - xi) / D,
            zin = (yf - yi) / D;
    
    const nn = [];
    for (let j=1; j< n+1; j++) nn.push(j);
    
    console.dir({coz,zin,nn}, {depth:null});
    
    return nn.map(n => [coz * d * n, zin * d * n]);
}
