function characterReplacement(s: string, k: number): number {
   const array = new Array(26).fill(0);
   let ans = 0;
   let maxOcur = 0;
   let left = 0;
   for(let right = 0; right<s.length; right++){
    // A => 65 char-code
    maxOcur = Math.max(maxOcur,++array[s[right].charCodeAt(0)-65]);
    if(right-left+1-maxOcur> k){
        array[s[left].charCodeAt(0)-65]--;
        left++;
    }
    ans = Math.max(ans,right - left +1);
   }
    return ans;
};