function firstMissingPositive(nums: number[]): number {
    // length of the array
    const n = nums.length;

    // place each number in its right place
    for (let i=0; i< n; i++){
        while(nums[i] > 0 && nums[i] <= n &&
        nums[nums[i]-1] !== nums[i]){
            let correctIndexForNum = nums[i] - 1;
            [nums[i] , nums[correctIndexForNum]]=[nums[correctIndexForNum] , nums[i]];
        }
    }

    // find the first missing positive
    for(let i =0 ; i< n; i++){
        if(nums[i]!== i+1) return i+1 
    }

    // if there is no missing positive
    return n+1 // all numbers from 1 to n are present
};