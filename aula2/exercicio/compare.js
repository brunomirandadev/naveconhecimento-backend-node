exports.compare = function (num1, num2, num3) {

    var numMaior;

    if(num1 > num2)
        numMaior = num1
    else 
        numMaior = num2

    if(numMaior < num3)
        numMaior = num3

    return numMaior;
  };