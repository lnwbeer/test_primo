export function merge(collection1: number[], collection2: number[], collection3: number[]): number[] {
    let i = 0, j = 0, k = collection3.length - 1;
    let result: number[] = [];
    
    while (i < collection1.length || j < collection2.length || k >= 0) {
        let minVal = Infinity;
        let minIndex = -1;

        if (i < collection1.length && collection1[i] < minVal) {
            minVal = collection1[i];
            minIndex = 1;
        }
        if (j < collection2.length && collection2[j] < minVal) {
            minVal = collection2[j];
            minIndex = 2;
        }
        if (k >= 0 && collection3[k] < minVal) {
            minVal = collection3[k];
            minIndex = 3;
        }

        if (minIndex === 1) i++;
        else if (minIndex === 2) j++;
        else if (minIndex === 3) k--;

        result.push(minVal);
    }
    
    return result;
}

//example usage
const collection1 = [1, 3, 5, 7]; 
const collection2 = [2, 4, 6, 8];  
const collection3 = [9, 7, 5, 3];  

const mergedArray = merge(collection1, collection2, collection3);
console.log("Merged array:", mergedArray.join(", "));