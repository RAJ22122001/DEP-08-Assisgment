/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let v = [];
    let l = [];
    let r = [];
    let product1 = 1;


    for (let i = 0; i < nums.length; i++) {
        product1 *= nums[i];
        l.push(product1);
    }

    let product2 = 1;

    
    for (let i = nums.length - 1; i >= 0; i--) {
        product2 *= nums[i];
        r.push(product2);
    }

    
    r.reverse();

    
    for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
            v.push(r[1]); 
        } else if (i === nums.length - 1) {
            v.push(l[nums.length - 2]);
        } else {
            v.push(l[i - 1] * r[i + 1]); 
        }
    }

    return v;
};

