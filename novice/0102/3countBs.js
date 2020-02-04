function countBs(masukan){
    let count=0;
    for(let i=0; i<masukan.length;i++){
        if(masukan[i]=="B"){
            count=count+1;
        }
    }
    return count
}
console.log(countBs("BBC"));