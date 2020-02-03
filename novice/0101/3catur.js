for(i=0;i<8;i++){
    let b="";
    for(a=0;a<8;a++){
        if((i+a)%2){
            b=b+"#";
        }
        else{
            b=b+" ";
        }
    }
    console.log(b);
}