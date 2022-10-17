# 룰루랩 | 병원 예약 시스템 구축

## 1. 프로젝트 개요

- 과제 주관 : 룰루랩
- 작업 기간 : 2022년 10월 14일 ~ 2022년 10월 17일
- 참여 인원 : 3명 - 김민욱, 김영수, 이주리
- 기술 스택 : HTML5, React.js, Styled-components
- 구현사이트 :

## 2. 팀원 역할 분할

- 김영수 - 레이아웃, 예약조회
- 김민욱(PO) - 목데이터 생성, 예약하기
- 이주리 - 초기세팅, 예약조회

## 3. 프로젝트 구조

```
📦src
 ┣ 📂Components
 ┃ ┗ 📜Header.js
 ┣ 📂Pages
 ┃ ┣ 📂Nav
 ┃ ┃ ┗ 📜Nav.js
 ┃ ┣ 📂Reservation
 ┃ ┃ ┣ 📜DepartmentSelectButtonBox.js
 ┃ ┃ ┣ 📜Reservation.js
 ┃ ┃ ┣ 📜ReservationCarousel.js
 ┃ ┃ ┗ 📜calendar.css
 ┃ ┣ 📂ReservationCheck
 ┃ ┃ ┗ 📜ReservationCheck.js
 ┃ ┗ 📂Schedule
 ┃ ┃ ┗ 📜ChoiceMenu.js
 ┣ 📂Styles
 ┃ ┣ 📜GlobalStyle.js
 ┃ ┗ 📜theme.js
 ┣ 📜Router.js
 ┗ 📜index.js
```

## 4. 구현 기능

### 레이아웃

- 예약하기, 예약조회 두 개 버튼으로 나누어짐
- 헤더에서 처음으로 돌아가기 버튼

### 예약하기

- User Flow
    - 예약자 정보 기입(성명, 전화번호) → 진료과 및 날짜 시간 선택 → 노쇼 방지를 위한 주의사항 숙지→ 예약 등록
    - 페이지네이션 구현
- 사용자 편의성을 위하여 예약 과정 중 입력 값을 오른쪽 화면에 유지
- 예약 입력 데이터 state로 관리
- 날짜 선택을 위한 달력 모달 구현
- 버튼 컴포넌트화 하여 재사용

### 예약조회

- 예약자 이름과 번호로 조회기능 구현 ( 개인 정보지만 제3자의 열람가능성 여지가 있으므로 2개다 일치시 조회 가능)
- 검색창에 이벤트 추가하여 입력 데이터 state로 관리
- mock Data를 활용하여 예약정보 데이터 관리
