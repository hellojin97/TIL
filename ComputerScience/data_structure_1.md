# 자료구조(배열, 벡터, 연결리스트)

## 배열 Array

![array image](https://media.geeksforgeeks.org/wp-content/uploads/20220721080308/array.png)

- 삽입/삭제 : O(N)
- 탐색 : O(1)
- `python` 은 `list()` 클래스를 사용

```python
# 탐색

arr_1 = [3, 1, 29, 104, 7, 0, 3]
arr_1[2] = 5
# arr 시작 메모리 주소 + 2(index) * 4byte = 메모리 주소값
# 메모리 주소값을 계산하여 데이터를 탐색하기에 속도가 빠름
# 임의 접근, Random Access

# 삽입/삭제

## 삽입

arr_1.insert(2, 6) # index 2 위치에 6을 삽입
# 뒤에서부터 최종 인덱스까지 한 칸씩 밀리게 됨.
# 결과적으로 하나의 데이터를 삽입할 때마다 여러 개의 데이터들이 영향을 받기 때문에
# Big-O(N)

# But, 끝에서 삽입을 할 경우는 Big-O(1)
arr_1.append(6)

## 삭제

del arr_1[arr_1[3]] # index 3 위치의 데이터를 삭제
# 삽입과 반대로 삭제가 되면 뒤에 있던 데이터들이 앞으로 당겨져 영향을 받기 때문에
# Big-O(N)

```

## 벡터 Vector

![vector](https://mblogthumb-phinf.pstatic.net/MjAxODExMTlfOTcg/MDAxNTQyNTk0NjMwNzMx.pTaseKIVm3G9b6BGaEZUtxrbkylKGMrVG_gxe23RSh0g.cVbg5sZ80QQuJKGQi61foHnnJWVtmRl3aLRL1P4eMM0g.PNG.destiny9720/Untitled-3cbd285c-e5ae-4cfb-8f07-939413ee0ee4.png?type=w2)

- 삽입/삭제 : O(N)
- 탐색 : O(1)
- **동적배열**(`Size` 변경가능)

```Python
vector_test = []

vector_test.append((123, 456))
vector_test.append((789, 987))

```

## 연결 리스트 Linked List

- 삽입/삭제 : O(1)
  - 왜 삽입이 1 일까?
     ![insert linked list](https://media.geeksforgeeks.org/wp-content/cdn-uploads/gq/2013/03/Linkedlist_insert_middle.png)
    - 새로운 노드를 중간에 삽입하고 싶을 때 삽입하고 싶은 부분의 사이 연결을 끊고 각각 다시 삽입하는 노드를 연결해줌
    - 배열은 뒤로 밀리며 데이터들의 영향을 일으키지만 노드는 단일 부분만 따로 다시 연결하면 됨. 삭제도 마찬가지
- 탐색 : O(N)
  - 왜 탐색이 N 일까?
     ![select linked list](https://media.geeksforgeeks.org/wp-content/uploads/20220816144425/LLdrawio.png)
    - 연결 리스트는 노드 내에 메모리주소값과 해당 값으로 이루어져 있음.
    - 다음 노드가 어디 있는지는 이전 노드만 알 수 있음.
    - 배열과 달리 임의접근(Random Access)이 가능하지 않음.
    - ***즉, 배열처럼 연속적으로 할당되어 있는 것 아니라는 것.***
- 다른 자료구조들을 구현할 때 많이 쓰임.
- 배열과 시간복잡도가 반대라서 면접 질문에서 주로 나옴.
