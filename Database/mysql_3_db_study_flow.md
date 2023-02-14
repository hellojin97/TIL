# MySQL

## 데이터 베이스 시작부터 끝까지

### SQL 을 통한 전체 데이터 베이스 구성을 해보는 것이 목표

- **이해하려 해보지 말고 일단 실습으로 데이터베이스 구축을 해보는게 우선.(어느 정도 흐름만 파악)**

- 데이터베이스 구축 절차
  1. 데이터 베이스 만들기
  2. 테이블 만들기
  3. 데이터 입력/ 수정/ 삭제 작업(데이터베이 구축)
  4. 데이터 조회/ 활용

**편의를 위해 터미널로 mysql 을 실습.**

### MySQL 접속

  ```text
  myslq -u root -p 

  $password : [암호 있다면 입력]
  ```

- **스키마** 즉, **데이터 베이스** 조회

```text
mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
| sys                |
+--------------------+
4 rows in set (0.00 sec)

  ```

### 데이터 베이스 만들기(쇼핑몰)

```text
mysql> create database shop_db;
Query OK, 1 row affected (0.00 sec)
```

- 데이터 베이스(스키마) 이름은 무조건 소문자여야 하는가?
  - 소문자로 하는 이유 SHOP_DB 라고 해도 어차피 다시 소문자로 **변경됨**

#### 결과 확인

```text
mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
| shop_db            |
| sys                |
+--------------------+
5 rows in set (0.00 sec)
```

### root 계정 내에서 use 를 통해 schema 변경

- SQL을 통해 Database 를 조작하기 위함

```text
mysql> use shop_db;
Database changed
```

### 테이블 만들기(CREATE)

회원 테이블과 제품 테이블 생성하기전 설계과정이 있지만 실습이기에 건너뜀.

열이름과 데이터 형식 및 길이, 각 column 별 널 허용 여부 지정.

```text
# 회원 테이블
mysql> create table member (
                            member_id char(8) primary key, 
                            member_name char(5) not null, 
                            member_addr varchar(45) 
                            );
Query OK, 0 rows affected (0.02 sec)

# 제품 테이블
mysql> create table product (
                             product_name char(4) primary key,
                             cost int not null, 
                             make_date date, 
                             company char(5), 
                             amount int not null
                             );
Query OK, 0 rows affected (0.01 sec)
```

### 테이블 확인

```text
mysql> show tables;
+-------------------+
| Tables_in_shop_db |
+-------------------+
| member            |
| product           |
+-------------------+
2 rows in set (0.00 sec)
```

### 테이블 내 데이터 입력하기(INSERT)

#### 회원테이블

```text
# 단일 데이터 입력
insert into member (member_id, member_name, member_addr) 
values 
('tess', '나훈아', '경기 부천시 중동');
Query OK, 1 row affected (0.01 sec)

# 여러 개의 데이터 입력
insert into member (member_id, member_name, member_addr) 
values 
('hero', '임영웅', '서울 은평구 증산동'), 
('iyou', '아이유', '인천 남구 주인동'), 
('carry', '머라이어', '미국 텍사스 사막'),
('jyp', '박진영', '경기 고양시 장항동');
Query OK, 3 rows affected (0.00 sec)
Records: 3  Duplicates: 0  Warnings: 0
```

#### 제품테이블

```text
insert into product (product_name, cost, make_date, company, amount) 
values 
('바나나', 1500, '2021-07-01', '델몬트', 17), 
('카스', 2500, '2022-03-01', 'OB', 3), 
('삼각김밥', 800, '2023-09-01', 'CJ', 22);
Query OK, 3 rows affected (0.00 sec)
Records: 3  Duplicates: 0  Warnings: 0
```

### 열 데이터 변경하기(UPDATE)

전체 데이터 변경 우려가 있기에 조건절`WHERE`이 필요.

```text
mysql> update member set member_addr='영국 런던 먹자골목' where member_id = 'carry';
Query OK, 1 row affected (0.00 sec)

# where 절 사용하여 조회
mysql> select member_id, member_name, member_addr from member where member_id='carry';
+-----------+--------------+----------------------------+
| member_id | member_name  | member_addr                |
+-----------+--------------+----------------------------+
| carry     | 머라이어       | 영국 런던 먹자골목              |
+-----------+--------------+----------------------------+
1 row in set (0.00 sec)
```

### 열 데이터 삭제하기(DELETE)

데이터 변경과 마찬가지로 모든 데이터가 삭제될 수 있기에 조건절`WHERE`이 필요.

```text
mysql> delete from member where member_id='carry';
Query OK, 1 row affected (0.00 sec)
```

### 데이터 활용, 조회(SELECT)

`*`: 모든 열의 내용

#### 테이블 전체 데이터 조회

```text
mysql> select * from member;
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

#### 활용에 필요한 열만 조회

```text
mysql> select member_name, member_addr from member;
+-------------+----------------------------+
| member_name | member_addr                |
+-------------+----------------------------+
| 임영웅      | 서울 은평구 증산동         
| 아이유      | 인천 남구 주인동           
| 박진영      | 경기 고양시 장항동         
| 나훈아      | 경기 부천시 중동           
+-------------+----------------------------+
4 rows in set (0.00 sec
```

#### 조건에 맞는 데이터만 조회

```text
mysql> select member_name, member_addr from member where member_id='iyou';
+-------------+-------------------------+
| member_name | member_addr             |
+-------------+-------------------------+
| 아이유      | 인천 남구 주인동        |
+-------------+-------------------------+
1 row in set (0.00 sec)
```

---

### Reference

- Book
  - [혼자 공부하는 SQL](http://www.yes24.com/Product/Goods/104661489)
