function equalizeArray(arr) {
    let prevcount=0;
    let count=0;
    for(let i = 0;i<arr.length;i++){
        count = 0;
        for(let j = 0;j<arr.length;j++){
        if(arr[i]==arr[j]){
            count++;
        }
        }
        if(prevcount<count){
            prevcount=count;
        }
        }
           return arr.length-prevcount;
    }