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

// 2번풀이
function solution(numbers, target) {
    var obj = {};
    for(let i=0;i<numbers.length;i++){
        if(!obj.dept0&&i==0){
            obj['dept0'] = [ numbers[i],numbers[i]*(-1)]
        }else{
            var deptIdxBefore = "dept" + (i-1)
            var beforeDept = obj[deptIdxBefore];
            var detpIdxNow = "dept" + i
            var nowDept = obj[deptIdxNow] = [];
            
            for(let k=0;k<beforeDept.length;k++){

            }
            arr['objAdd'][dept] = 
        }
    }
    console.log(arr);
}

solution([1,1,1,1,1],3);