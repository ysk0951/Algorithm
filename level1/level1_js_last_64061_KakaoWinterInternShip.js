function solution(board, moves) {
    var bucket = [];
    var answer = 0;
    for(let i =0;i<moves.length;i++){
        var col = moves[i]-1;
        for(let j=0;j<board.length;j++){
            if(board[j][col]!=0){
                if(bucket[bucket.length-1]==board[j][col]){
                    bucket.pop()
                    board[j][col] = 0;
                    answer++;
                }else {
                    bucket.push(board[j][col]);
                    board[j][col] = 0;
                }
                break;
            }
        }
    }
    return answer*2;
}

solution([[0, 0, 0, 0, 0], [0, 0, 1, 0, 3], [0, 2, 5, 0, 1], [4, 2, 4, 4, 2], [3, 5, 1, 3, 1]],
    [1, 5, 3, 5, 1, 2, 1, 4])