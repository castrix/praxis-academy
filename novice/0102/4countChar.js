function countBs(kata,permintaan){
    let count=0;
    for(let i=0; i<kata.length;i++){
        if(kata[i]==permintaan){
            count=count+1;
        }
    }
    return count
}
console.log(countBs("BBC","C"));