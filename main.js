const prompt = require("prompt-sync")();
const Students = require("./funct");

const scores = [];
let isRunning = true;
while (isRunning) {
  let score = prompt(`Masukkan nilai ujian matematika : `);
  if (score.toLowerCase() === "q") {
    isRunning = false;
  } else {
    scores.push(parseInt(score));
  }
}

let student = new Students(scores);
console.log(student);
console.log(`Nilai terendah : ${student.minScore()}`);
console.log(`Nilai terbersar : ${student.maxScore()}`);
console.log(`Nilai rata - rata : ${student.avgScore()}`);
console.log(
  `Urutan nilai dari terendah ke tertinggi : \n${student.scores.join("\n")}`
);
console.log(student.scoreChecker());
