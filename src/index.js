module.exports = function getZerosCount(number, base) {
  let num = number;
  for(var i = 2; i <= base; i++){
    var a = 0;
      while(base % i == 0){
        a++;
        base = ~~(base/i);
    }
    var x = 0;
    let  num2 = number;
      while (num2/i > 0){
        x+=~~(num2/i);
        num2 = ~~(num2/i);
    }
    if(num > x/a){ 
      num=x/a;
    } 

}
return ~~(num);
}