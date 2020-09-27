function myfunction(numbersarray, target){
    var x = -1; //Initialize functions
    var y = -1;
    //Used to a for loop to traverse through the arrays
    for(var i = 0; i<numbersarray.length; i++){

        
        if(target == numbersarray[i]){
            if(x == -1){//The position of the first target point will be X
                x = i
            }
            else{
                y = i//The position of the second target point will be y
            }
        }
    }
    console.log("Input: nums = ",numbersarray, "target = ", target)
    console.log("Output: [", x, ",",y, "]")

}
//I call the functions and Initialize them
nums = [5,7,7,8,8,10]
let x = myfunction(nums, 8)
let y = myfunction(nums, 6)



