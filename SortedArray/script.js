const { array } = require("prop-types");


function myfunction(numbersarray, target){
    var x = -1;
    var y = -1
    for(var i = 0; i<numbersarray.length; i++){

        
        if(target == numbersarray[i]){
            if(x == -1){
                x = numbersarray[i]
            }
            else{
                y = numbersarray[i]
            }
        }
    }
    console.log(numbersarray, x, y)

}
nums = [5,7,7,8,8,10]
let x = myfunction(nums, 8)




