# MySQL

## 인덱스, 뷰, 스토어드 프로시저

- 테이블은 데이터베이스의 핵심개체이지만 데이터베이스는 그 외에 **인덱스**, **뷰**, **스토어드 프로시저**, **트리거**, **함수**, **커서** 등의 개체도 필요함.
  - *자세한 내용은 추후에 학습 예정, 맛보기부터 해보자.*

### 인덱스

- 데이터를 조회할 대 빠르게 도와주는 개체
- 책의 제일 뒤 수록되는 `찾아보기` 개념과 유사
- 책 뒤에 찾아보기가 없어도 찾을 수 없는 것이 아니지만 **데이터베이스를 만지는 입장으로 실무에서는 인덱스가 효율적인 조회를 도와주기에 필수적이라고 생각됨.**

#### 이름이 '아이유' 인 회원을 조회해보자

```text
mysql> select * from member where member_name = '아이유';
+-----------+-------------+-------------------------+
| member_id | member_name | member_addr             |
+-----------+-------------+-------------------------+
| iyou      | 아이유        | 인천 남구 주인동           
+-----------+-------------+-------------------------+
1 row in set (0.00 sec)
```

- 책 내용을 다 뒤져서 찾은 격.
- 전체 테이블 스캔에서 하나를 찾음.
- 대용량 데이터일 경우 이런 조건 하나에 몇 십분이 걸릴 가능성이  있음.

#### 인덱스 생성

```text
mysql> create index idx_memeber_name on member(member_name);
Query OK, 0 rows affected (0.05 sec)
Records: 0  Duplicates: 0  Warnings: 0
```

- 지난 실습에서 테이블을 만드는 과정에서 index 를 고려하지 않았기에 먼저 인덱스를 생성해줌.(memeber_name 인덱스)
  - 책 뒤 수록 `찾아보기`를 만들어준 것.

#### 인덱스 사용

```text
mysql> select * from member where member_name = '아이유';
+-----------+-------------+-------------------------+
| member_id | member_name | member_addr             |
+-----------+-------------+-------------------------+
| iyou      | 아이유        | 인천 남구 주인동            
+-----------+-------------+-------------------------+
1 row in set (0.00 sec)
```

- 조회문은 똑같으나 `Non-Unique Key Lookup` 으로서 인덱스를 매칭하여 결과값을 도출. 즉, 효율적인 조회가 가능케 함.

---

### 뷰

- 가상의 테이블, 테이블은 아니지만 테이블처럼 보임. 뷰는 실체가 없음, 즉, 데이터가 없음.
- os 마다 지원하는 `바로가기`와 유사
- 뷰의 실체는 테이블이 아닌 **실제 테이블을 연결해주기 위한** `select` 문으로 이루어져 있음.

#### 뷰 만들어보기

```text
mysql> create view member_view 
       as 
          select * from member;
Query OK, 0 rows affected (0.00 sec)
```

```text
# 실제 테이블로 조회
mysql> select * from member;
+-----------+-------------+----------------------------+
| member_id | member_name | member_addr                |
+-----------+-------------+----------------------------+
| hero      | 임영웅      | 서울 은평구 증산동         
| iyou      | 아이유      | 인천 남구 주인동           
| jyp       | 박진영      | 경기 고양시 장항동         
| tess      | 나훈아      | 경기 부천시 중동           
+-----------+-------------+----------------------------+
```

```text
# 뷰를 통하여 테이블 조회
mysql> select * from member_view;
+-----------+-------------+----------------------------+
| member_id | member_name | member_addr                |
+-----------+-------------+----------------------------+
| hero      | 임영웅        | 서울 은평구 증산동         
| iyou      | 아이유        | 인천 남구 주인동           
| jyp       | 박진영        | 경기 고양시 장항동         
| tess      | 나훈아        | 경기 부천시 중동           
+-----------+-------------+----------------------------+
4 rows in set (0.00 sec)
```

---

### 스토어드 프로시저

- sql 이 프로그래밍 언어는 아니지만 프로시저 개념은 이와 유사
- sql 로직을 짜는 것과 같다.

```text
select * from member where member_name = '나훈아';
select * from product where product_name = '삼각김밥';
```

***2개의 이상의 SQL문을 계속 작성하지 말고 예약어처럼 만들 수 있음.***

#### 프로시저 만들어보기

```text
mysql> DELIMITER //
mysql> create procedure myProc() 
       begin 
        select * from member where member_name ='나훈아'; 
        select * from product where product_name = '삼각김밥'; 
       end//
Query OK, 0 rows affected (0.01 sec)
```

#### 프로시저 실제 사용

```text
mysql> CALL myProc();
+-----------+-------------+-------------------------+
| member_id | member_name | member_addr             |
+-----------+-------------+-------------------------+
| tess      | 나훈아        | 경기 부천시 중동       
+-----------+-------------+-------------------------+
1 row in set (0.00 sec)

+--------------+------+------------+---------+--------+
| product_name | cost | make_date  | company | amount |
+--------------+------+------------+---------+--------+
| 삼각김밥       |  800 | 2023-09-01 | CJ      |     22 
+--------------+------+------------+---------+--------+
1 row in set (0.00 sec)

Query OK, 0 rows affected (0.00 sec)
```

- 한번의 Call 문장으로 여러개의 쿼리문이 실행됨.

---

### Reference

- Book
  - [혼자 공부하는 SQL](http://www.yes24.com/Product/Goods/104661489)
