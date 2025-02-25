👉🏻 [문자 반복 출력하기](https://school.programmers.co.kr/learn/courses/30/lessons/120825)

### 문제 설명

문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string에 들어있는 각 문자를 n만큼 반복한 문자열을 return 하도록 solution 함수를 완성해보세요.

### 제한사항

- 2 ≤ my_string 길이 ≤ 5
- 2 ≤ n ≤ 10
- "my_string"은 영어 대소문자로 이루어져 있습니다.

### 입출력 예

| my_string | n   | result            |
| --------- | --- | ----------------- |
| "hello"   | 3   | "hhheeellllllooo" |

### 입출력 예 설명

입출력 예 #1

- "hello"의 각 문자를 세 번씩 반복한 "hhheeellllllooo"를 return 합니다.

### 접근 방법

1. 문자열의 각 문자를 n번 반복
2. split 메서드를 사용하여 my_string을 문자 단위 배열로 변환
3. map과 repeat 메서드를 사용하여 각 문자를 n번 반복된 문자열로 변환
4. join 메서드를 사용하여 배열을 다시 문자열로 합치기
