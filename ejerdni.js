

function comprobardni(dni){
    if(dni.length != 9){
        return false;
    }
    letra = dni.slice(dni.length-1,dni.length)
    if(!letra.match("([a-zA-Z])")){
        return false;
    }
    
    sumanum = 0;
    for(let i = 0; i < dni.length-1; i++){
        if(isNaN(dni[i])){
            return false;
        }
        sumanum+=parseInt(dni[i])
    }
    letrasDNI = "TRWAGMYFPDXBNJZSQVHLCK"
    return (letra == letrasDNI[(sumanum%23)])


}

