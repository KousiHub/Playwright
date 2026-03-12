
function arrayIntersection(numArr1,numArr2){
     let duplicateArr = [];

     for(let i = 0; i < numArr1.length; i++){
        for(let j = 0; j < numArr2.length; j++){
            if(numArr1[i] === numArr2[j]){
                let numberPresent = false;
                
                for(let k = 0; k < duplicateArr.length; k++){
                    if(duplicateArr[k] === numArr1[i]){
                        numberPresent = true;
                        break;
                    }
                }
                if(!numberPresent){
                    duplicateArr.push(numArr1[i]); 
                }
            }
        }
    }
    if(duplicateArr.length >= 1){  
        console.log("Intersection (or) Duplicates are: ",duplicateArr);
    }
    else{
        console.log("No duplicates or arrays of intersection");
        
    }
    /* THIS GIVES UNION OF 2 ARRAYS BUT WITH DUPLICATES
    let unionOfArrWithDup = [...numArr1,...numArr2];
    console.log("Result of union of 2 arrays with duplicates if present = ",unionOfArrWithDup);
    */
    let unionOfArrWithoutDup = new Set([...numArr1,...numArr2]);
    console.log("Result of union of 2 arrays without duplicates = ",unionOfArrWithoutDup);
    
}
//arrayIntersection([1,2,3,4], [5,6,7,8]);
//arrayIntersection([1,2,3,4], [1,6,2,8]);
arrayIntersection([1,2,3,4], [1,2,3,4]);
