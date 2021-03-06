export const quickSort = (arr, left, right) => {
    let pivot, partitionIndex;
    if (left < right) {

        pivot = right;
        partitionIndex = partition(arr, pivot, left, right);
        //sort left and right
        quickSort(arr, left, partitionIndex - 1);
        quickSort(arr, partitionIndex + 1, right);
    }
    return arr;
}
const partition = (arr, pivot, left, right) => {
    let pivotValue = arr[pivot],
        partitionIndex = left;

    for (let i = left; i < right; i++) {
        if (arr[i] < pivotValue) {
            swap(arr, i, partitionIndex);
            partitionIndex++;
        }
    }
    swap(arr, right, partitionIndex);
    return partitionIndex;
}
const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

const arr = [3, 2, 5, 6, 7, 8];
quickSort(arr, 0, 5);
console.log(arr);