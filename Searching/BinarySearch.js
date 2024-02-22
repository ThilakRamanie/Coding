const arrayS=[1,2,3,4,5,6,7,8,11,12,15,17];

let binarySearch=(arr,start,end, value) => {
    if(start>end) return -1;
    let middle = Math.floor((start+end)/2)
    if(arr[middle]===value) {
        return middle;
    } 
    if(value < arr[middle]){
        return binarySearch(arr,start, middle-1,value)
    } else{
        return binarySearch(arr,middle+1, end,value)
    }
}

binarySearch(arrayS,0,arrayS.length-1,11);