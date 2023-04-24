/*

        7.1 연산자

*/

//p.76 예제 07-03

var x = 1;

//단항연산자 중 증감, 감소 연산자는 피연산자의 값을 변경하는 부수 효과가 있다.
// 즉, 값을 변경하는 암묵적 할당이 이루어진다.
x++;
console.log(x);

x--;
console.log(x);

//위치에 따라 동작순서가 다름
var y = 5,
  result;

//선할당 후증가
result = y++;
console.log(result, y);

//선증가 후할당
result = ++y;
console.log(result, y);

//p.77 예제 07-06
var z = "1";

//문자열을 숫자타입으로 변환
console.log(+z);
//부수효과 없음.
console.log(z);

//p.78 예제 07-08

//문자열 연결 연산자
console.log("연산자 사용 : " + "1" + 2 + " 타입확인 : " + typeof ("1" + 2));
console.log("연산자 사용 : " + 1 + "2" + " 타입확인 : " + typeof (1 + "2"));

//산술 연산자
console.log("연산자 사용 : " + (1 + 2) + " 타입확인 : " + typeof (1 + 2));

//true 는 1로 타입 변환
console.log(1 + true);

//false 는 0으로 타입 변환
console.log(1 + false);

//null은 0으로 타입 변환
console.log(1 + null);

//undefined은 타입변환이 없다.
console.log(1 + undefined);


