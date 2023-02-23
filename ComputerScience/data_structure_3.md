# 자료구조(우선순위 큐)

## 우선순위 큐 Prority Queue (Heap)

![priority_queue](https://www.techiedelight.com/wp-content/uploads/2016/11/Min-Max-Heap.png)

- 삽입/삭제 : O(log N)
- 가장 최상단 노드를 `root node` 라고 함.
  - python 에서는 가장 최상단 노드를 `min-heap` 으로 정함.

```python
# import heapq
import heapq

priority_queue = []

heapq.heappush(priority_queue, 456)
heapq.heappush(priority_queue, 123)
heapq.heappush(priority_queue, 789)

while priority_queue:
     print(heapq.heappop(priority_queue))
     # 123
     # 456
     # 789

# from queue import PriorityQueue 사용
# thread-safe 한 모듈이기에 코테 X
from queue import PriorityQueue

pq = PriorityQueue()
pq.put(1)
pq.put(13)
pq.put(-13)
pq.put(-5)
pq.put(7)

while not pq.empty():
     print(pq.get())
      # -13
      # -5
      # 1
      # 7
      #13
```

### Reference

- <https://www.udemy.com/course/comgong_codingtest/>
