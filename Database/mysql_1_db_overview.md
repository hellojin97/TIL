# MySQL

## 데이터 베이스 알아보기

- 데이터베이스는 우리 일상생활 대부분의 정보가 저장되고 관리됨. `카카오톡 메세지`, `인스타 사진` 등등..
- **즉, 데이터베이스는 무수히 많은 데이터(정보)의 집합**

### DBMS

- 데이터베이스를 관리하는 소프트웨어(운영 및 관리)

- DBMS 조건

  - 대용량 데이터 관리
  - 여러 사용자와 공유(동시 몇 백명)

     ```text
     DBMS(DataBase Management System) <------- 은행, 계좌주인, 인터넷 뱅킹, ATM 기기 ..etc
     👆
     동시 접속 및 데이터 공유가 가능한 환경
     ```

- DBMS 종류

1. MySQL
2. MariaDB
3. PostgreSQL
4. OracleDB
     .. etc

- DBMS 발전과정, **정보 저장의 발전 과정**

  1. 종이에 펜으로 기록 ✍🏻
  2. 컴퓨터의 발명, 컴퓨터에 파일로 저장. 📁
  3. `엑셀`의 등장, 더 편리해졌으나 대형 마트 등의 등장. 📊
  4. 파일 처리 시스템의 한계점 등장(사용자 공유, 대용량 데이터) 🧐
  5. 엑셀의 한계점을 보완하기 위해 `DBMS` 등장. 🎉

- DBMS 분류

- 계층형
  - 트리 형태
  - 현재 사용x

- 망형
  - 하위 구성원 끼리 연결가능

- 관계형
  - RBMS, 대부분의 DB
  - 가장 기본단위 테이블 형태, 열과 행으로 이루어져 있음, **표** 형태

### SQL?

- 데이터를 구축, 관리하고 활용하기 위한 언어인 SQL(구조화된 질의 언어)
- ***미국에서 사업을 위해선 영어가 필요하듯이 데이터를 관리하기 위해선 SQL 을 배워야 함.***

- 기업 내 DBMS 제품마다 SQL 언어가 달라지는 것을 방지하기 위해 표준 SQL 규약을 제정.
- 기업들은 표준 SQL 준수하며 독자적인 기업의 SQL 기능을 추가함.

  - Oracle --> PL/SQL
  - MySQL --> SQL
  - SQL Server --> T-SQL

### *MySQL 로 공부를 시작하지만 표준 SQL 위주로 학습을 하는 것이 중요.*

---

### Reference

- Book
  - [혼자 공부하는 SQL](http://www.yes24.com/Product/Goods/104661489)