class Students {
  constructor(...scores) {
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
}

module.exports = Students;
