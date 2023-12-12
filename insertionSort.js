function insertionSort( A ){

    for (var i = 1; i < A.length; i++) {
        var key = A[i];
        j = i - 1;

        while (j > -1 & A[j] > key) {
            A[j + 1] = A[j];
            j = j - 1;
        }
        
        A[j + 1] = key; 
    };
    
    return A;
};

function insertionSortInverted( A ){

    for (var i = A.length - 1; i >= 0; i--) {
        var key = A[i];
        var j = i + 1;

        while (j < A.length & A[j] < key) {
            A[j - 1] = A[j];
            j = j + 1;
        }
        //console.log(i,j,A)
        
        A[j - 1] = key; 
    };
    
    return A;
};

function printArray(A){
    return console.log(A)
}

var array = [12,23,1,1231,236,3,6,5];

console.log(insertionSortInverted(array));
console.log(insertionSort(array));
