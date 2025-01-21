/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const map= new Map();
    for(const num of nums){
        if(map.has(num)){
            map.set(num,map.get(num)+1);
        }
        else{
            map.set(num,1);
        }
    }
    const sorted =Array.from(map).sort((a,b)=>b[1]-a[1]);
    const res=[];
    for(let i=0;i<k;i++){
        res.push(sorted[i][0]);
    }
    return res;
};