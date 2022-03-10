class Students {
  constructor(scores) {
    this.scores = scores.sort((a, b) => {
      return a - b;
    });
  }

  minScore() {
    let min = Math.min(...this.scores);
    return min;
  }

  maxScore() {
    let max = Math.max(...this.scores);
    return max;
  }

  avgScore() {
    const sum = this.scores.reduce((a, b) => a + b);
    const avg = sum / this.scores.length;
    return avg;
  }

  scoreChecker() {
    let scores = this.avgScore();
    if (scores >= 75) {
      return `Anda Lulus`;
    } else {
      return `Anda Tidak Lulus`;
    }
  }
}

module.exports = Students;
