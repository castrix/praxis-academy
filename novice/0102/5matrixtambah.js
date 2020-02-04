function matrixplus(a,b){
    let newar=[];
    a.forEach((a,i) => {
        newar.push(a+b[i]);
    });
    return newar
}
a=[2,3,4];
b=[3,4,5];
console.log(matrixplus(a,b));