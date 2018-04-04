export const mergeSort = (arr) => {
    const len = arr.length;
    if (len < 2)
        return arr;
    const mid = Math.floor(len / 2),
        left = arr.slice(0, mid),
        right = arr.slice(mid);
    //send left and right to the mergeSort to broke it down into pieces
    //then merge those
    return merge(mergeSort(left), mergeSort(right));
}

const merge = (left, right) => {
    const result = [];
    const lLen = left.length,
        rLen = right.length;

    let l = 0, r = 0;
    while (l < lLen && r < rLen) {
        if (left[l] < right[r]) {
            result.push(left[l++]);
        }
        else {
            result.push(right[r++]);
        }
    }
    //remaining part needs to be addred to the result
    return [...result,...left.slice(l),...right.slice(r)];
}
const arr = [3, 2, 5, 6, 7, 8];
// quickSort(arr, 0, 5);
console.log(mergeSort(arr));