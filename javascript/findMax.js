function findMax(nums) {
    var max = Number.NEGATIVE_INFINITY;

    for (var i = 0; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i];
        }
    }
    return max;
}

var maxNumber = findMax([1,5,3,3,2]);

console.log(maxNumber);