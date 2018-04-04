const bubbleSort = (arr) => {
    let len = arr.length;
    for (let i = len - 1; i >= 0; i--) {
        for (let j = 1; j <= i; j++) {
            if (arr[j - 1] > arr[j]) {
                let temp = arr[j - 1];
                arr[j - 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
const arr = [3, 2, 5, 6, 7, 8];
bubbleSort(arr, 0, 5);
console.log(arr);
