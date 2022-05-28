function getDigit(num, i) {
  return Math.floor(Math.abs(num)/Math.pow(10,i)) % 10;
}

function digitCount(num) {
    if (num===0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(numbers) {
    let maxDigits = 0;
    for(let i=0; i< numbers.length; i++) {
        maxDigits = Math.max(digitCount(numbers[i]), maxDigits); 
    }
    return maxDigits;
}
 
function radixSort(num) {
    let maxDigits = mostDigits(num);

    for (let k = 0; k<maxDigits; k++) {
        let digitBucket = Array.from({length: 10}, () => [])
        for (let i=0; i<num.length; i++) {
            let digitNumber = getDigit(num[i], k);
            digitBucket[digitNumber].push((num[i]));
        }
        num = [].concat(...digitBucket);
    }   
    return num
}

console.log(radixSort([1, 3, 44, 8])) 
