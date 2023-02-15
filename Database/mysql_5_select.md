# MySQL

## SELECT ~ FROM ~ WHERE

- SELECT 문은 처음은 쉽다고 느껴지지만 하면 할수록 공부할 게 많다는 것을 느끼게 됨.

- [실습에 필요한 자료](https://cafe.naver.com/thisismysql)를 통해서 새로운 DB `market db` 생성

### 테이블 구성

```text
mysql> show tables;
+---------------------+
| Tables_in_market_db |
+---------------------+
| buy                 |
| member              |
+---------------------+
2 rows in set (0.00 sec)
```

```text
# 회원 테이블 Column
+--------+--------------+------------+--------+--------+----------+--------+------------+
| mem_id | mem_name     | mem_number | addr   | phone1 | phone2   | height | debut_date |
+--------+--------------+------------+--------+--------+----------+--------+------------+

# 구매 테이블 Column
# mem_id 는 회원 테이블의 참조 키.
+-----+--------+--------------+------------+-------+--------+
| num | mem_id | prod_name    | group_name | price | amount |
+-----+--------+--------------+------------+-------+--------+
```

---

### SELECT 의 기본 형식

```text
select [열 이름] from [데이터베이스 내 테이블 이름] where [조건];
```

- 테이블 내의 데이터를 가져와서 **조회**하는 것이 주 목적, ***읽기***만 함.

#### 기본 조회

```text
mysql> select * from member;
+--------+--------------+------------+--------+--------+----------+--------+------------+
| mem_id | mem_name     | mem_number | addr   | phone1 | phone2   | height | debut_date |
+--------+--------------+------------+--------+--------+----------+--------+------------+
| APN    | 에이핑크     |          6 | 경기   | 031    | 77777777 |    164 | 2011-02-10 |
| BLK    | 블랙핑크     |          4 | 경남   | 055    | 22222222 |    163 | 2016-08-08 |
| GRL    | 소녀시대     |          8 | 서울   | 02     | 44444444 |    168 | 2007-08-02 |
| ITZ    | 잇지         |          5 | 경남   | NULL   | NULL     |    167 | 2019-02-12 |
| MMU    | 마마무       |          4 | 전남   | 061    | 99999999 |    165 | 2014-06-19 |
| OMY    | 오마이걸     |          7 | 서울   | NULL   | NULL     |    160 | 2015-04-21 |
| RED    | 레드벨벳     |          4 | 경북   | 054    | 55555555 |    161 | 2014-08-01 |
| SPC    | 우주소녀     |         13 | 서울   | 02     | 88888888 |    162 | 2016-02-25 |
| TWC    | 트와이스     |          9 | 서울   | 02     | 11111111 |    167 | 2015-10-19 |
| WMN    | 여자친구     |          6 | 경기   | 031    | 33333333 |    166 | 2015-01-15 |
+--------+--------------+------------+--------+--------+----------+--------+------------+
10 rows in set (0.00 sec)
```

- **만약 다른 데이터 베이스(스키마)에 접속해 있다면 테이블 이름 앞에 db 이름을 명시해준다.**

```text
mysql> select * from market_db.member;
+--------+--------------+------------+--------+--------+----------+--------+------------+
| mem_id | mem_name     | mem_number | addr   | phone1 | phone2   | height | debut_date |
+--------+--------------+------------+--------+--------+----------+--------+------------+
| APN    | 에이핑크     |          6 | 경기   | 031    | 77777777 |    164 | 2011-02-10 |
| BLK    | 블랙핑크     |          4 | 경남   | 055    | 22222222 |    163 | 2016-08-08 |
| GRL    | 소녀시대     |          8 | 서울   | 02     | 44444444 |    168 | 2007-08-02 |
| ITZ    | 잇지         |          5 | 경남   | NULL   | NULL     |    167 | 2019-02-12 |
| MMU    | 마마무       |          4 | 전남   | 061    | 99999999 |    165 | 2014-06-19 |
| OMY    | 오마이걸     |          7 | 서울   | NULL   | NULL     |    160 | 2015-04-21 |
| RED    | 레드벨벳     |          4 | 경북   | 054    | 55555555 |    161 | 2014-08-01 |
| SPC    | 우주소녀     |         13 | 서울   | 02     | 88888888 |    162 | 2016-02-25 |
| TWC    | 트와이스     |          9 | 서울   | 02     | 11111111 |    167 | 2015-10-19 |
| WMN    | 여자친구     |          6 | 경기   | 031    | 33333333 |    166 | 2015-01-15 |
+--------+--------------+------------+--------+--------+----------+--------+------------+
10 rows in set (0.00 sec)
```

#### 조건 조회

- **전체 데이터를 조회하는 것보다 필요한 데이터를 가져오는 것이 중요하기에 조건절이 필요.**

```text
# 회원 이름이 '블랙 핑크' 인 데이터를 조회
mysql> select * from member where mem_name='블랙핑크';
+--------+--------------+------------+--------+--------+----------+--------+------------+
| mem_id | mem_name     | mem_number | addr   | phone1 | phone2   | height | debut_date |
+--------+--------------+------------+--------+--------+----------+--------+------------+
| BLK    | 블랙핑크     |          4 | 경남   | 055    | 22222222 |    163 | 2016-08-08 |
+--------+--------------+------------+--------+--------+----------+--------+------------+
1 row in set (0.00 sec)
```

#### 열 이름 명시적으로 적용하여 조회

```text
mysql> select addr, height, debut_date 
       from member;
+--------+--------+------------+
| addr   | height | debut_date |
+--------+--------+------------+
| 경기   |    164 | 2011-02-10 |
| 경남   |    163 | 2016-08-08 |
| 서울   |    168 | 2007-08-02 |
| 경남   |    167 | 2019-02-12 |
| 전남   |    165 | 2014-06-19 |
| 서울   |    160 | 2015-04-21 |
| 경북   |    161 | 2014-08-01 |
| 서울   |    162 | 2016-02-25 |
| 서울   |    167 | 2015-10-19 |
| 경기   |    166 | 2015-01-15 |
+--------+--------+------------+
10 rows in set (0.00 sec)
```

#### 열 이름을 별칭 지정하여 조회 : `as`

- alias 의 약자, 별칭에 공백이 필요하다면 "" 으로 감싸주면 됨.

```text
mysql> select addr as 주소, height as 키, debut_date as "데뷔 일자" 
       from member;
+--------+------+---------------+
| 주소    | 키    | 데뷔 일자       |
+--------+------+---------------+
| 경기   |  164 | 2011-02-10     |
| 경남   |  163 | 2016-08-08     |
| 서울   |  168 | 2007-08-02     |
| 경남   |  167 | 2019-02-12     |
| 전남   |  165 | 2014-06-19     |
| 서울   |  160 | 2015-04-21     |
| 경북   |  161 | 2014-08-01     |
| 서울   |  162 | 2016-02-25     |
| 서울   |  167 | 2015-10-19     |
| 경기   |  166 | 2015-01-15     |
+--------+------+---------------+
10 rows in set (0.00 sec)
```

#### where 비교 연산자 (=, >, <, >=, <=, <>)

```text
mysql> select mem_id, mem_name
    -> from member
    -> where height <= 162;
+--------+--------------+
| mem_id | mem_name     |
+--------+--------------+
| OMY    | 오마이걸       |
| RED    | 레드벨벳       |
| SPC    | 우주소녀       |
+--------+--------------+
3 rows in set (0.00 sec)

```

#### where 논리 연산자(AND, OR)

```text
mysql> select mem_name, height, mem_number from member where height >= 165 and mem_number > 6;
+--------------+--------+------------+
| mem_name     | height | mem_number |
+--------------+--------+------------+
| 소녀시대     |    168 |          8 |
| 트와이스     |    167 |          9 |
+--------------+--------+------------+
2 rows in set (0.00 sec)
```

#### between 기능

- `값1` 과 `값2` 사이에 데이터를 조회

```text
select [열 이름] from [데이터베이스 내 테이블 이름] where [열 이름] between [값1] and [값2];
```

- 회원테이블에서 키가 163 에서 165 사이인 회원 이름과 주소를 조회

```text
mysql> select mem_name, addr 
    -> from member
    -> where height between 163 and 165;
+--------------+--------+
| mem_name     | addr   |
+--------------+--------+
| 에이핑크     | 경기   |
| 블랙핑크     | 경남   |
| 마마무       | 전남   |
+--------------+--------+
3 rows in set (0.01 sec)
```

#### in 기능

- `값1`,`값2`,`값3` 을 포함하는 데이터들을 모두 조회

```text
select [열 이름] from [데이터베이스 내 테이블 이름] where [열 이름] in ([값1], [값2], [값3]);
```

```text
mysql> select mem_name, addr
    -> from member
    -> where addr in ('경기', '전남', '경남');
+--------------+--------+
| mem_name     | addr   |
+--------------+--------+
| 에이핑크     | 경기   |spsp
| 블랙핑크     | 경남   |
| 잇지         | 경남   |
| 마마무       | 전남   |
| 여자친구     | 경기   |
+--------------+--------+
5 rows in set (0.01 sec)
```

#### like 기능

- `값1` 과 유사한 데이터를 조회
- `값1` 은 `%`, `_` 를 사용하여 세부 조건을 조정할 수 있음.
  - `값%` : 첫번째 문자가 `값`인 데이터 모두 조회
  - `%값` : 앞에 문자가 어떻든 마지막 문자가 `값`인 데이터 모두 조회
- `_` 는 개수만큼 문자의 위치를 나타냄.
  - `_값` : 두 번째 글자가 `값`인 데이터 모두 조회

```text
select [열 이름] from [데이터베이스 내 테이블 이름] like [열 이름] '[값1]';
```

```text
mysql> select * 
    -> from member
    -> where mem_name like '우%';
+--------+--------------+------------+--------+--------+----------+--------+------------+
| mem_id | mem_name     | mem_number | addr   | phone1 | phone2   | height | debut_date |
+--------+--------------+------------+--------+--------+----------+--------+------------+
| SPC    | 우주소녀     |         13 | 서울   | 02     | 88888888 |    162 | 2016-02-25 |
+--------+--------------+------------+--------+--------+----------+--------+------------+
1 row in set (0.00 sec)

mysql> select * 
    -> from member
    -> where mem_name like '__핑크';
+--------+--------------+------------+--------+--------+----------+--------+------------+
| mem_id | mem_name     | mem_number | addr   | phone1 | phone2   | height | debut_date |
+--------+--------------+------------+--------+--------+----------+--------+------------+
| APN    | 에이핑크     |          6 | 경기   | 031    | 77777777 |    164 | 2011-02-10 |
| BLK    | 블랙핑크     |          4 | 경남   | 055    | 22222222 |    163 | 2016-08-08 |
+--------+--------------+------------+--------+--------+----------+--------+------------+
2 rows in set (0.00 sec)
```

---

### Reference

- Book
  - [혼자 공부하는 SQL](http://www.yes24.com/Product/Goods/104661489)