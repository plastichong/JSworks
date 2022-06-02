let score = [
        [80,70],
        [90,60],
        [70,70],
        [100,90],
        [83,35]
];

let korSum = 0;
let mathSum = 0;
let korAvg = 0.0;
let mathAvg = 0.0;


for(i=0;i<score.length;i++){
        korSum += score[i][0];
        mathSum += score[i][1];

}
korAvg = korSum/score.length;
mathAvg = mathSum/score.length;

console.log("국어 총점 : "+korSum+" 수학 총점 : "+mathSum);
console.log("국어 평균 : "+korAvg+" 수학 평균 : "+mathAvg);