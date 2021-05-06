/**
 * 넓이우선..? 깊이 우선..?
 * 
 */

// //1번풀이중 막힘 - 시간복잡도 n^3
// function solution(numbers, target) {
//     var answer = 0;
//     var sum = 0 ;
//     for(let i=0;i<numbers.length;i++){
//         sum += numbers[i];
//     }
//     // 총합에서 target과의 차만큼의 수를 만드는 경우의 수 
//     // 선택갯수는 상관없음 -> 선택갯수는 원소의 갯수까지 갈수있음
//     // 목표
//     var ret = (sum - target)/2;
//     for(let i=0;i<numbers.length;i++){
//         //선택갯수 (Count of selected Element )
//         var COE = i+1;
//         //각 선택갯수별 조합
//         for(let j=1;j<=COE;j++){
//             //J 는 선택갯수
//             var loop = 1;
//             while(loop<=j)
//                 for(let k=0;k<numbers.length;k++){
                    
//                 }
//             j++
//         }
//     }
//     return answer;
// }

// 2번풀이 -- > BFS (이진 탐색트리 구현)
function solution(numbers, target) {
    var answer = 0;
    var obj = {};
    for(let i=0;i<numbers.length;i++){
        if(!obj.dept0&&i==0){
            obj['dept0'] = [ numbers[i],numbers[i]*(-1)]
        }else{
            var deptIdxBefore = "dept" + (i-1);
            var detpIdxNow = "dept" + i;
            var beforeDept = obj[deptIdxBefore];
            obj[detpIdxNow] = [];
            for(let k=0;k<beforeDept.length;k++){
                obj[detpIdxNow].push(beforeDept[k] + numbers[i]);
                obj[detpIdxNow].push(beforeDept[k] - numbers[i]);
            }
        }
    }
    var lastChildDept = Object.keys(obj)[Object.keys(obj).length-1];
    var lastChild = obj[lastChildDept];
    for(let i = 0;i<lastChild.length;i++){
        if(lastChild[i] == target) answer ++;
    }
    return answer
}

solution([1,1,1,1,1],3);