//p.494 예제 27-07

/*
const arr = [1, 2, 3];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
*/

//p.498 예제 27-08

//array는 동일한 데이터타입을 가지고 연속적으로 나열된 자료구조
//그렇기때문에 인덱스를 통해 효율적으로 접근이 가능하다.
//하지만 특정한 조건을 검색할 시 배열의 모든 요소를 차례로 접근해 발견될 때 까지 차례대로검색(선형검색)을 한다.

/*
function linearSearch(array, target) {
  const length = array.length;

  for (let i = 0; i < length; i++) {
    if (array[i] === target) return i;
  }
  return -1;
}

console.log(linearSearch([1, 2, 3, 4, 5, 6], 3));
console.log(linearSearch([1, 2, 3, 4, 5, 6], 0));
*/

//p.496 예제 27-09

//JS의 경우 동일한 데이터 타입이 없어도 되며, 연속적으로 이어지지 않아도(희소배열) 된다.
//JS의 배열은 엄밀히 따지자면 배열의 동작을 흉내 내 특수한 객체다.

//console.log(Object.getOwnPropertyDescriptors([1, 2, 3]));

//인덱스를 나타내는 문자열을 프로퍼티 키로 가지며
//length프로퍼티를 갖는 특수한 객체다.
//그로므로 JS에서의 배열은 어떤 타입의 값이라도 배열의 요소가 될 수 있다.
/*
{
  '0': { value: 1, writable: true, enumerable: true, configurable: true },
  '1': { value: 2, writable: true, enumerable: true, configurable: true },
  '2': { value: 3, writable: true, enumerable: true, configurable: true },
  length: { value: 3, writable: true, enumerable: false, configurable: false }
}
*/

//p.498 예제 27-15

const arr = [1];

//현재 length 프로퍼티 값인 1보다 큰 숫자를 값 3을 length프로퍼티에 할당
arr.length = 3;

//length의 값은 변경
//하지만 실재로 배열 길이가 늘어나는 것은 아님
console.log(arr.length);
console.log(arr);
console.log(arr[2]);
