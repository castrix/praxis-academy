function isEven(nilai){
    if(nilai==0){
        return true
    }
    else if(nilai==1){
        return false
    }
    else{
        return isEven(Math.abs(nilai)-2)
    }
}
console.log(isEven(4))