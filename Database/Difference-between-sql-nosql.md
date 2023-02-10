# SQL 과 NoSQL 의 차이점

## SQL(관계형 데이터베이스)

- 관계형 DB 의 핵심
  - 데이터는 정해진 스키마에 의해 테이블에 저장
  - 관계를 통한 분산

테이블은 각 Column 별로 데이터 타입이나 제약 조건 등을 고려하여 생성된다. 즉, 데이터는 테이블의 **스키마에 해당되지 않는 경우** 저장될 수 없다.

관계를 통해 데이터를 분산 처리함.  
이로써 하나의 테이블에서 중복 없이 하나의 데이터만을 관리하기 때문에 다른 테이블에서 부정확한 데이터를 다룰 위험이 없어지는 장점이 생김.

## NOSQL(비관계형 데이터베이스)

**스키마도 없고, 관계도 없다.**

- 비관계형 DB의 핵심
  - NoSQL 에서는 레코드를 **문서(Documents)** 라고 부른다.
  - NoSQL 에서는 다른 구조의 데이터를 같은 컬렉션에 추가가 가능하다.
- Documents
  - `json` 과 비슷한 형태, RDB 처럼 여러 테이블에 나누어 담지 않고, 관련 데이터를 동일한 '컬렉션'에 넣는다.
  - 여러 테이블에 조인할 필요없이 이미 필요한 모든 것을 갖춘 문서를 작성하는 것이 NoSQL, 조인이라는 개념X

    ```text
    # SQL 
    Orders, Users, Products 테이블의 각 스키마에 해당하는 레코드 저장

    # NoSQL
    Orders 컬렉션에 관련있는 documents 모두 저장
    ```

- 컬렉션을 통해 데이터를 복제하여 데이터를 정확하게 산출하여 조인 기능을 구현할 수 있음
  - 데이터가 **중복되기에** 서로 영향을 줄 위험이 생김.
  - NoSQL 은 조인을 잘 사용하지 않고 **자주 변경되지 않는 데이터**일 때 사용하면 효율적

## SQL vs NoSQL : 어느 것을 사용해야 할까?

**필요한 데이터베이스 유형에 대해 정보에 입각한 선택을 하려면 차이점을 이해하는 것이 중요.**

- SQL 과 NoSQL 사이의 선택은 특정 프로젝트에 필요한 데이터베이스 유형으로 귀결된다.

- SQL 과 NoSQL 데이터베이스 간의 차이

  1. 언어

      \<**SQL**>

      - SQL 데이터베이스는 가장 다양하고 널리 사용되는 SQL 기반으로 데이터를 조작함.
      - 복잡한 쿼리에 대해 안전한 선택이 되지만 제한적일 수도 있는데 사항을 아래와 같다.
        - 데이터로 작업하기전 미리 정의된 스키마를 사용하여 구조를 결정해야함.
        - 구조를 변경하는 것은 보다 복잡한 과정이며 혼란을 야기할 수 있음.

       \<**NoSQL**>

      - NoSQL 데이터베이스는 동적 스키마로서 구조화되지 않은 데이터를 저장할 수 있음.
      - `document, column, graph ..etc` 다양한 방식으로 저장이 가능
      - 이러한 유연성을 정의된 구조 없이 문서를 생성할 수 있음을 의미하며 각 문서가 고유한 구조를 가질 수 있음을 의미한다.

  2. 확장성

     - **같은 건물에 더 많은 층을 추가 하는 것(수직 확장)과 동네에 더 많은 건물을 추가하는 것(수평 확장)과 유사.**

     - 서버의 확장성
       - 수직적 확장 : 단순히 데이터베이스 서버의 성능을 향상시킴
       - 수평적 확장 : 더 많은 서버가 추가되고 데이터베이스가 전처적으로 분산됨, 하나의 데이터베이스지만 여러 호스트에서 작동
     - 지원방식
       - SQL : 수직적 확장
       - NoSQL : 수직 및 수평 확장
       - ***지원방식이 더 많다고 하여 NoSQL 이 더 좋다는 의미는 아니니 오해하지 말자.***

  3. 스키마

### refferance

- Blog
  - [SQL vs NoSQL: Which one is better to use? - Geeks for Geeks](https://www.geeksforgeeks.org/sql-vs-nosql-which-one-is-better-to-use/?ref=rp)
  - [Difference between SQL and NoSQL - Geeks for Geeks](https://www.geeksforgeeks.org/difference-between-sql-and-nosql/)
  - [SQL과 NOSQL의 차이 - Tech Interview](https://gyoogle.dev/blog/computer-science/data-base/SQL%20&%20NOSQL.html#sql-%E1%84%80%E1%85%AA%E1%86%AB%E1%84%80%E1%85%A8%E1%84%92%E1%85%A7%E1%86%BC-db)
- YouTube
  - [데이터베이스란?SQL vs NoSQL : 데이터베이스 기초](https://youtu.be/pk7FP2FDIw8)
