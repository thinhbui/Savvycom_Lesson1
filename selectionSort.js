// export
 const selectionSort = (arr) => {
    let minIdx, temp;
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        minIdx = i;
        for (var j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        temp = arr[i];
        arr[i] = arr[minIdx];
        arr[minIdx] = temp;
    }
    return arr;
}
const arr = [3, 2, 5, 6, 7, 8];
selectionSort(arr, 0, 5);
console.log(arr);
