function sortScoreAsc(){
    let score = [100,25,26,27,28]
    score.sort(function(a,b){return a-b})
    return score
}

function sortScoreDesc(){
    let score = [100,25,26,27,28]
    score.sort(function(a,b){return b-a})
    return score
}

function minScore(){
    let min = Math.min(...sortScoreAsc())
    return min
}

function maxScore(){
    let max = Math.max(...sortScoreAsc())
    return max
}