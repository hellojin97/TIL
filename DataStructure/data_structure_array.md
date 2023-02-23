# Array, 배열

![Array](https://media.geeksforgeeks.org/wp-content/uploads/20220721080308/array.png)

- 배열은 인접한 메모리 주소값에 데이터를 저장하는 형식에 자료구조이다.
- 같은 타입의 여러 요소를 저장하는 방식.
- 배열의 기본값, 즉, 첫 번째 요소의 메모리 주소에 오프셋(offset)을 추가하여 각 요소별 위치를 쉽계 계산이 가능케 함.
- 배열 내 인덱스를 통해 요소를 식별할 수 있음.
- 배열은 선언과 동시에 배열 내 크기를 정의함.

- Static? Compile-time?
  - 프로그램이 컴파일 될 때 배열 내 요소들이 할당된다는 의미에서 Compile-time 또는 Static, i.e, 정적 메모리 할당.
  - 오직 고정된 크기의 메모리로 선언되지만 매번 그 크기를 알 수 없을 가능성이 있음.
    - 즉, memory size 를 모를 때도 있을 가능성.

- Is it possible Dynamic Array?
  - 동적(**`dynamically`**)으로 할당이 가능함.
  - 동적 메모리 할당 : 런타임 및 실행하는 동안 메모리 공간을 할당하는 과정

- Array 의 필요성

     ![need of Array](https://media.geeksforgeeks.org/wp-content/uploads/20220728175153/Needforarray-660x379.png)

  1. 학생 5명의 시험 점수를 가고 있다고 가정.
     - 그럼 변수 1개씩 선언하여 점수를 저장할 수 있음.
     - 만약 여기서 학생 5명이 아닌 더 많은 수의 학생들의 점수를 기록해야 한다면?
     - ***너무 복잡하고 많은 변수를 선언해야함.***

  2. 이것이 의미하는 것은?
     - 작은 수의 객체는 변수로 선언하여 저장해도 되지만
     - 우리가 저장할 필요가 있는 데이터가 많아질 경우 변수로 저장하는 방식은 관리하는 측면에서 굉장히 어렵고 난감.
     - 배열은 하나의 변수로 여러 인스턴스(데이터)를 저장할 수 있음.

## 참고

- <https://www.geeksforgeeks.org/array-data-structure/>
- <https://www.geeksforgeeks.org/introduction-to-arrays-data-structure-and-algorithm-tutorials/>
- <>
