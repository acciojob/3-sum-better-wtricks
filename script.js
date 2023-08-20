function threeSum(arr, target) {
    arr.sort((a, b) => a - b);
    
    for (let i = 0; i < arr.length - 2; i++) {
        let left = i + 1;
        let right = arr.length - 1;
        
        while (left < right) {
            const sum = arr[i] + arr[left] + arr[right];
            
            if (sum === target) {
                return [arr[i], arr[left], arr[right]];
            } else if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
    }
    
    return null; 
}

module.exports = threeSum;
