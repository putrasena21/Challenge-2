var readline = require("readline")
var log = console.log

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
let i = 1
rl.question(`Masukkan Jumlah Murid : `, (students)=>{
    log(`Jumlah Murid = ${students}`)
    while (i <= students){
        rl.question(`Masukkan Nilai Murid ${i} : `, (score)=>{
            log(score)
        })
        i++
    }
})