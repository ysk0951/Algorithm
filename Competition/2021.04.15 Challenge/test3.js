function solution(a, edges) {
   let sum = a.reduce((a,b)=>a+b,0);
   let answer = -1;
   if(sum==0){
        var nodePower = [];
        for(let i=0;i<a.length;i++){
            nodePower.push(0);
        }
        for(let i=0;i<edges.length;i++){
            let t = edges[i];
            let first = t[0];
            let second = t[1];
            nodePower[first] = nodePower[first]+1
            nodePower[second] = nodePower[second]+1
        }
        var indexes = [];
        const highest = Math.max(...nodePower);
        nodePower.forEach(function(element, i) {
            if (element == highest) {
                indexes.push(i);
            }
        });
        var data = [];
        indexes.forEach(function(ele,i){
            data.push(Math.abs(a[indexes[i]]));
        })
        const small = Math.min(...data);
        var result = 0;
        a.forEach(function(ele,i){
            if(ele >0){
                result += ele;
            }else{
                result += ele*(-1);
            }
        });
        answer = result -small;
   }
   return answer;
}

// solution([0,1,0],[[0,1],[1,2]]);
solution([-5,0,2,1,2],[[0,1],[3,4],[2,3],[0,3]]);