//p.95 08-02
var num = 2;
var kind;

//if~else문
if (num > 0) {
  kind = "양수";
} else {
  kind = "음수";
}

console.log(kind);

//if~else~if문
//블록 내에 문이 하나뿐이라면 중괄호를 생략할 수 있다.
if (num > 0) kind = "양수";
else if (num < 0) kind = "음수";
else kind = "0";

console.log(kind);

//p96 08-04

//if...else문
var y = 2;
var result;

if (y % 2) {
  result = "홀수";
} else {
  result = "짝수";
}
console.log("if else문 : " + result);

//삼항연산자

result = 2 % y ? "홀수" : "짝수";
console.log("삼항연산자 : " + result);

//p 89 예제 08-08

var month = 11;
var montName;

switch (month) {
  case 1:
    montName = "Jan";
    break;
  case 2:
    montName = "Feb";
    break;
  case 3:
    montName = "Mar";
    break;
  case 4:
    montName = "Apr";
    break;
  case 5:
    montName = "May";
    break;
  case 6:
    montName = "Jun";
    break;
  case 7:
    montName = "Jul";
    break;
  case 8:
    montName = "Aug";
    break;
  case 9:
    montName = "Sep";
    break;
  case 10:
    montName = "Oct";
    break;
  case 11:
    montName = "Nov";
    break;
  case 12:
    montName = "Dec";
    break;
  default:
    montName = "Invalid month";
    break;
}

console.log(montName);
