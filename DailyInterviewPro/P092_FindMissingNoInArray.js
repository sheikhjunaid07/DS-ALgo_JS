/**
 * Twitter
 * 
 * Given an array of integers of size n, where all elements are between 1 and n inclusive, find all of the elements of [1, n] that do not appear in the array. Some numbers may appear more than once.

    Example:
        Input: [4,5,2,6,8,2,1,5]
        Output: [3,7]
 */

const missingNo = (arr) => {
    const n = arr.length;
    let A = new Array(n + 1).fill(false);
    A[0] = true;
    arr.forEach(e => A[e] = true);
    let ans = [];
    for (let i = 0; i < n + 1; i++) {
        if (!A[i]) {
            ans.push(i);
        }
    }
    return ans;
}

const arr = [4, 5, 2, 6, 8, 2, 1, 5];
console.log(missingNo(arr));