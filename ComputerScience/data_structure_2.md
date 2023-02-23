# 자료구조(스택, 큐)

## 스택 Stack

![stack](https://media.geeksforgeeks.org/wp-content/cdn-uploads/20221219100314/stack.drawio2.png)

- 삽입/삭제: O(1)
- FILO(First In Last Out) : 가장 **먼저** 넣은 데이터가 **마지막에** 나오게 됨.
  - 인터넷의 뒤로가기 버튼

```Python
# python 에서는 그냥 list() 로 사용하자.
stack_1 = []
stack_1.append(123)
stack_1.append(456)
stack_1.append(789)

while len(stack_1) > 0:

     # FILO
     print(stack_1[-1])
     stack_1.pop(-1) # 또는 stack.pop() --> index 생략 가능
     # 789
     # 456
     # 123
```

## 큐 Queue

![Queue](https://media.geeksforgeeks.org/wp-content/cdn-uploads/20221213113312/Queue-Data-Structures.png)

- 삽입/삭제: O(1)
- FIFO(First In First Out) : 가장 **먼저** 들어간 값이 가장 **먼저** 나옴.
  - 식당 웨이팅이라고 생각하면 됨.(가장 먼저 기다리면 가장 먼저 들어가기 때문)
- `list()` 를 사용하지 않는 이유는 `list() = Array` 이기에 삽입/삭제가 `Big-O(N)` 이기에 성립하지 않음
- 단, `linked list` 를 사용할 경우 삽입/삭제가 `Big-O(1)` 이기에 구현 가능

```Python
# python 에서는 collections lib 내 deque(덱) 사용
# Thread-safe 하지는 않지만 속도가 빠름
# 코딩 테스트 때에는 필요
from collections import deque

queue = deque()
queue.append(123)
queue.append(456)
queue.append(789)

while queue:
     print(queue.popleft())
     # 123
     # 456
     # 789

# from queue import Queue 라는 모듈이 있음.
# 근데 왜 안쓸까?
# Thread-safe 한 기능이 포함되어 있기에 - 속도가 느림
# 코딩 테스트 때에는 필요 x
```

### Reference

- <https://www.udemy.com/course/comgong_codingtest/>
