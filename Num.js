var num;
do{
    num = prompt("Escribe un numero del 1 al 10")
}while( num>10 || num<0 )

if( num>10 || num<0 ){
    alert("Numero no válido")
}
else{
    alert("Numero es válido")
}