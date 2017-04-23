
export function distance([xi,yi], [xf,yf]) {    
    return Math.sqrt(
         Math.pow(xf - xi, 2) + Math.pow(yf - yi, 2)
    );
}

export function partitionPoints([xi,yi], [xf,yf], n) {
    const   D = distance([xi,yi], [xf,yf]),
            d = D / (n + 1);
    
    const   coz = (xf - xi) / D,
            zin = (yf - yi) / D;
    
    const nn = [];
    for (let j=1; j< n+1; j++) nn.push(j);
    
    
    return [
        {x:xi, y:yi},
        ...nn.map(n => { return {x: coz * d * n + xi, y: zin * d * n + yi}; }),
        {x:xf, y:yf}
    ];
}
