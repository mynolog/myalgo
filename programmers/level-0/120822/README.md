#### 👉🏻 [문자열 뒤집기](https://school.programmers.co.kr/learn/courses/30/lessons/120822)

#### 문제 설명

문자열 my_string이 매개변수로 주어집니다. my_string을 거꾸로 뒤집은 문자열을 return하도록 solution 함수를 완성해주세요.

#### 제한사항

- 1 ≤ my_string의 길이 ≤ 1,000

#### 입출력 예

| my_string | return  |
| --------- | ------- |
| "jaron"   | "noraj" |
| "bread"   | "daerb" |

#### 입출력 예 설명

입출력 예 #1

- my_string이 "jaron"이므로 거꾸로 뒤집은 "noraj"를 return합니다.

#### 입출력 예 #2

- my_string이 "bread"이므로 거꾸로 뒤집은 "daerb"를 return합니다.

#### 접근 방법

1. 전개 연산자로 문자열을 배열로 변환
2. reverse 메서드로 문자열의 순서를 역순으로 변환
3. join 메서드로 배열을 하나의 문자열로 변환하여 반환

#### 성능 결과

| 항목               | 결과          |
| ------------------ | ------------- |
| 정확성             | 100%          |
| 합계 점수          | 100.0 / 100.0 |
| 최대 실행 시간     | 0.03ms        |
| 최대 메모리 사용량 | 33.4MB        |
