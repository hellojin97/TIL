# 시간 복잡도

> 우리가 시간 복잡도를 공부하는 이유는 우리에게 알고리즘의 표준을 제공해주기 때문이다.

![asd](https://res.cloudinary.com/practicaldev/image/fetch/s--ipK2NuFD--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://cooervo.github.io/Algorithms-DataStructures-BigONotation/images/graphs/comparison.svg)

- 이전 [점근적 표기법](asymptotic_notation.md) 때도 얘기 했듯이 Big O notation 을 자주 사용.
- 위와 같이 사진에서 나타나듯이 O(n^2)은 exponential 한 그래프가 형성이 됨.
- 허나 O(log n) 같은 경우 inverse of exponential 한 그래프로 값이 커질수록 수평적으로 형성이 됨.
- log n 의 이점은 아무리 큰 값이 들어와도 결과 값이 지수이기에 안정적인 값이 될 수 있음.
  - log 64 = 6 인 것처럼.
  - 이처럼 실행시간은 계속해서 수평적인 값으로 형성됨.
