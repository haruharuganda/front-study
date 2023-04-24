//p.82 07-15 Nan

//NaN은 자신과 일치하지 않는 유일한 값이다.
console.log(NaN === NaN);
//NaN을 비교할 시 Number.isNaN()을 사용한다.
console.log(Number.isNaN(NaN));
console.log(Number.isNaN(1));

//07-17

//JS는 음의 0과 양의 0이 있는데 이들을 비교할 시 true를 반환한다.
console.log(0 === -0);

//0의 값을 정확히 비교하기 위해서는 ES6에 도입된 Object.is메서드를 이용해 정확한 검사결과를 반환한다.
console.log(Object.is(-0, 0));
