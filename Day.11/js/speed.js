const RATE_KPH_MPH = 1.609;
let mph, kph;

kph = parseInt(prompt("당신의 구속을 입력하세요"))

mph = kph / RATE_KPH_MPH;

document.write(kph+"km 는 "+mph.toFixed(2)+"mile 입니다.")



