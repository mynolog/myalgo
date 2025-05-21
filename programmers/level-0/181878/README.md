#### 👉🏻 [원하는 문자열 찾기](https://school.programmers.co.kr/learn/courses/30/lessons/181878)

#### 문제 설명

알파벳으로 이루어진 문자열 `myString`과 `pat`이 주어집니다. `myString`의 연속된 부분 문자열 중 `pat`이 존재하면 1을 그렇지 않으면 0을 return 하는 solution 함수를 완성해 주세요.

단, 알파벳 대문자와 소문자는 구분하지 않습니다.

#### 제한사항

- 1 ≤ `myString`의 길이 ≤ 100,000
- 1 ≤ `pat`의 길이 ≤ 300
- `myString`과 `pat`은 모두 알파벳으로 이루어진 문자열입니다.

#### 입출력 예

| myString  | pat     | return |
| --------- | ------- | ------ |
| "AbCdEfG" | "aBc"   | 1      |
| "aaAA"    | "aaaaa" | 0      |

#### 입출력 예 설명

입출력 예 #1

- "AbCdEfG"의 0~2번 인덱스의 문자열은 "AbC"이며, 이는 pat인 "aBc"와 같습니다. 따라서 1을 return 합니다.
  입출력 예 #2

- myString의 길이가 pat보다 더 짧기 때문에 myString의 부분 문자열 중 `pat`와 같은 문자열이 있을 수 없습니다. 따라서 0을 return 합니다.

#### 성능 결과

| 항목               | 결과          |
| ------------------ | ------------- |
| 정확성             | 100%          |
| 합계 점수          | 100.0 / 100.0 |
| 최대 실행 시간     | 34.77ms       |
| 최대 메모리 사용량 | 41.4MB        |

#### 접근 방법

1. 문자열 포함 여부를 비교하기 위해서 `myString`, `pat` 변수를 소문자로 통일시킨다.
2. `String.prototype.includes()` 메서드로 포함 여부를 확인하여 포함하면 1을, 포함하지 않으면 0을 반환한다.

#### 회고

최대 실행 시간이 비정상적으로 튀는 구간(34.77ms)이 존재하여 다시 코드를 검증해보니 불필요한 연산이 포함되어있었다.

```js
// 먼저 떠올랐던 풀이
function solution(myString, pat) {
  const lowerMyString = [...myString].map((str) => str.toLowerCase()).join("");
  const lowerPat = [...pat].map((str) => str.toLowerCase()).join("");
  return lowerMyString.includes(lowerPat) ? 1 : 0;
}
```

```js
// 불필요한 연산을 개선한 풀이
function solution(myString, pat) {
  const lowerMyString = myString.toLowerCase();
  const lowerPat = pat.toLowerCase();
  return lowerMyString.includes(lowerPat) ? 1 : 0;
```

#### 성능 재측정 결과

| 항목               | 결과          |
| ------------------ | ------------- |
| 정확성             | 100%          |
| 합계 점수          | 100.0 / 100.0 |
| 최대 실행 시간     | 0.12ms        |
| 최대 메모리 사용량 | 34.0MB        |
