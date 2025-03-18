# <img width="26" alt="logo" src="https://github.com/user-attachments/assets/e04e21b0-42a2-4167-ba82-7799b27e0599" /> 퀘스또

<img src = "https://github.com/user-attachments/assets/fd7f1f45-f09d-41b8-8131-e4c2311db407" />

<br/>
<br/>

🌐 [배포 주소](https://quesddo.vercel.app)  
🎨 [스토리북 바로가기](https://www.chromatic.com/library?appId=67acd5f79f2abb10c31d0c10&branch=main)

<br />
<br />

## 목차



[1](#1-기술-스택). 기술 스택  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[1.1](#11-주요-스택-사용-이유). 주요 스택 사용 이유  
[2](#2-설치-및-실행). 설치 및 실행  
[3](#3-팀원-구성). 팀원 구성  
[4](#4-협업-방식). 협업 방식  
[5](#5-페이지별-기능). 페이지별 기능  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[5.1](#51-로그인--회원가입). 로그인 / 회원가입  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[5.2](#52-네비게이션-사이드바). 네비게이션 사이드바  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[5.3](#53-대시보드). 대시보드  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[5.4](#54-모든-할-일-목록). 모든 할 일 목록  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[5.5](#55-목표-상세). 목표 상세  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[5.6](#56-노트-모아보기-및-노트-상세). 노트 모아보기 및 노트 상세  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[5.7](#57-노트-작성). 노트 작성  
[6](#6-주요-도전-과제). 주요 도전 과제  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[6.1](#61-브랜치전략). 브랜치전략  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[6.2](#62-디자인패턴). 디자인패턴  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[6.3](#63-open-api-generator). Open API Generator  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[6.4](#64-스토리북--msw). 스토리북 & MSW  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[6.5](#65-쿼리키-구조화). 쿼리키 구조화  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[6.6](#66-워크플로우-자동화). 워크플로우 자동화  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[6.7](#67-테스트). 테스트  
[7](#7-문서). 문서

<br />
<br />

## 1. 기술 스택

| **Stacks**            | **Tools**      | **Collaboration** |
| --------------------- | -------------- | ----------------- |
| Nexjs (Page Router)   | Figma          | Notion            |
| Typescript            | GitHub         | Discord           |
| Tailwind (v4)         | GitHub Actions | Jira              |
| Axios                 | Vercel         |                   |
| Tanstack Query        |                |                   |
| Jest                  |                |                   |
| React-Testing-Library |                |                   |
| PNPM                  |                |                   |
| Storybook             |                |                   |
| MSW                   |                |                   |
| Framer Motion         |                |                   |

 </br>

<details  open>
<summary> <h3>1.1 주요 스택 사용 이유</h3></summary>

#### **Next.js (Page Router)**

- 여전히 많은 현업 프로젝트에서 Page Router를 사용하고 있으며, 앞으로도 사용할 일이 많을 것이라고 판단하여 채택하였습니다.

#### **TanStack Query**

- **한 화면에서 동일한 데이터를 여러 곳에서 사용해야 하는 경우**가 많아, 데이터가 CRUD 작업에 따라 변경될 때, **관련된 모든 UI에서 즉시 동기화가 필요**하였습니다.
- TanStack Query를 활용하면 **자동 캐싱, 동기화, 낙관적 업데이트**를 통해 효율적인 상태 관리가 가능하여 채택하였습니다.

#### **Tailwind CSS (v4)**

- `tailwind.config.ts` 없이 단일 파일에서 모든 설정을 한눈에 관리하는 부분이 편리해 보여 채택하였습니다.
- 최신 버전이라 호환성 이슈가 있을 것 같았지만, 특별한 문제 없이 정상적으로 동작하였습니다.

<br />

 <div align="right">
  
  [목차로 이동](#목차) 
  
  </div>

</details>

 </br>
 </br>

## 2. 설치 및 실행

```bash
npm install && npm run dev
pnpm install && pnpm run dev  // pnpm 전역 설치 필요
yarn install && yarn run dev  // yarn 전역 설치 필요
```

```bash
npm install --global pnpm  // pnpm 전역 설치 (필요 시)
npm install --global yarn  // yarn 전역 설치 (필요 시)
```

<br />

 <div align="right">
  
  [목차로 이동](#목차) 
  
  </div>

 </br>
 </br>

## 3. 팀원 구성

|                                                                                   **👑 이태혁**                                                                                    |                                                                                        **강은영**                                                                                         |                                                                                     **하다연**                                                                                      |                                                                                       **강동현**                                                                                       |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| [<img src="https://raw.githubusercontent.com/Quesddo/Client/4b53099c1fad9dd2d9928c8d0b96423b969dcc5b/thgee.png" width="48" height = "48" > <br/> @thgee](https://github.com/thgee) | [<img src="https://raw.githubusercontent.com/Quesddo/Client/4b53099c1fad9dd2d9928c8d0b96423b969dcc5b/eunung.png"  width="48" height = "48"> <br/> @euNung24](https://github.com/euNung24) | [<img src="https://raw.githubusercontent.com/Quesddo/Client/4b53099c1fad9dd2d9928c8d0b96423b969dcc5b/dy.png"  width="48" height = "48"> <br/> @hdayeon](https://github.com/hdayeon) | [<img src="https://raw.githubusercontent.com/Quesddo/Client/4b53099c1fad9dd2d9928c8d0b96423b969dcc5b/ralto.png"  width="48" height = "48"> <br/> @Ralto13](https://github.com/Ralto13) |

<br />

 <div align="right">
  
  [목차로 이동](#목차) 
  
  </div>

 </br>
 </br>

## 4. 협업 방식

<img height="16" width="16" src="https://cdn.simpleicons.org/jira" /> Jira: 새 기능 및 스프린트 단위 이슈관리

<img height="16" width="16" src="https://cdn.simpleicons.org/github/000/fff" /> GitHub: 지라 티켓과 연동, 팀원 간 코드 리뷰, Github Flow 적용, 디스코드 webhooks</div>

<img height="16" width="16"  src="https://cdn.simpleicons.org/notion/000/fff" /> Notion: 데일리스크럼, 팀 회의, 멘토링, 회고 기록

<br />

 <div align="right">
  
  [목차로 이동](#목차) 
  
  </div>

 </br>
 </br>



## 5. 페이지별 기능

<details  open>
<summary>
<h3>5.1 로그인 / 회원가입</h3>
</summary>


- 로그인: 이메일 형식 및 비밀번호 유효성 검사를 수행합니다.
- 회원가입: 이름 입력 여부, 이메일 형식 및 계정 유무 및 비밀번호 글자 수, 비밀번호 확인란에 대한 유효성 검사를 수행합니다.
  
 | 로그인 / 회원가입                      |
 | ---------------------------- |
 | <img src="https://github.com/user-attachments/assets/b6e6cf78-7a95-49bf-8c79-8f449fcb3c8c" width = "700" /> |




  <br />

 <div align="right">
  
  [목차로 이동](#목차) 
  
  </div>

</details>

<br />

<details  open>
<summary><h3>5.2 네비게이션 사이드바</h3></summary>

- 로그인한 계정 정보를 확인할 수 있고 로그아웃 버튼으로 유저 로그아웃할 수 있습니다.
- 로고나 대시보드 탭을 클릭하면 대시보드로 이동하며, 비로그인 상태에서는 로그인 페이지로 이동합니다.
- 새 할일 추가 버튼으로 (할일 추가 기능)이 제공됩니다.
- 새 목표 추가 버튼으로 목표를 추가하고 목표가 많아지면 무한스크롤로 목록이 제공됩니다.

| 네비게이션 사이드바          |
| ---------------------------- |
| <img src="https://github.com/user-attachments/assets/2368c94d-d892-4e6b-a6f4-f2281dfd602a" width = "700" /> |

</details>

<br />

<details  open>
<summary><h3>5.3 대시보드</h3></summary>

- 최근 등록한 할 일: 가장 최근에 생성한 할 일이 나오고 (각 할 일에 대한 기능)이 제공됩니다. 모두보기 버튼 클릭으로 모든 할 일 목록으로 이동합니다.
- 내 진행 상황: 전체 완료된 할 일과 미완료 할 일의 비율이 퍼센트로 조회됩니다.
- 목표 별 할 일: 각 목표 아래에 속한 할 일들을 확인할 수 있으며 Progress bar로 각 할 일들의 진행 상황을 알려줍니다. 각 목표에 대한 할 일 추가 기능이 제공되며 목표 4개가 넘어가면 무한스크롤로 목록이 제공됩니다.

| 대시보드                     |
| ---------------------------- |
| <img src="https://github.com/user-attachments/assets/53a7ea61-2292-4c04-adcf-d3144489085e" width = "700" /> |


<br />

 <div align="right">
  
  [목차로 이동](#목차) 
  
  </div>

</details>

<br />

<details  open>
<summary><h3>5.4 모든 할 일 목록</h3></summary>

- 모든 할 일 목록을 조회하고 생성할 수 있으며 할 일에 등록된 목표가 있으면 함께 보입니다.
- 할 일 추가 기능: 제목을 필수로 써야하고 파일과 링크를 첨부할 수 있으며 목표를 선택할수도 안할수도 있습니다.
- 해야 할 일(To Do)/완료된 일(Done) 필터링이 가능하며 40개가 넘어가면 무한스크롤로 목록이 제공됩니다.
- 각 할 일에 대한 기능: 수정, 삭제 그리고 완료 여부를 체크할 수 있으며 노트를 생성하고 등록된 노트도 조회할 수 있습니다.

| 모든 할 일 목록       |
| ---------------------------- |
| <img src="https://github.com/user-attachments/assets/86b31350-0641-4e89-8a96-65b8c7135283" width = "700" /> |

<br />

 <div align="right">
  
  [목차로 이동](#목차) 
  
  </div>

</details>





<br />

<details  open>
<summary><h3>5.5 목표 상세</h3></summary>

- 특정 목표의 상세 정보를 조회할 수 있고 목표를 삭제하거나 이름을 변경할 수 있습니다.
- Progress bar로 목표에 속한 할 일들의 진행 상황을 알려줍니다.
- 노트 모아보기 클릭 시, 목표에 속한 할 일들에 대한 노트를 모아보는 페이지로 이동합니다.
- 목표에 대한 할 일 추가 기능이 제공되며 각 할 일(Todo, Done)은 20개를 넘으면 무한 스크롤로 목록이 제공됩니다.

| 목표 상세   |
| ---------------------------- |
| <img src="https://github.com/user-attachments/assets/1bd950c4-0637-4ab3-968d-f7e1248cbec0" width = "700" /> |

<br />

 <div align="right">
  
  [목차로 이동](#목차) 
  
  </div>

</details>

<br />

<details  open>
<summary><h3>5.6 노트 모아보기 및 노트 상세</h3></summary>

- 목표에 속한 할 일들에 대한 모든 노트 목록을 조회할 수 있으며 작성된 노트의 제목, 노트에 해당하는 할일 제목을 볼 수 있습니다.
- 각 노트를 수정, 삭제할 수 있고 노트 클릭 시 노트 상세가 사이드 보기로 열립니다.
- 노트 상세에서는 노트의 목표 및 할일 제목, 노트 제목, 노트 마지막 저장일, 상세 내용을 볼 수 있습니다.
- 첨부된 링크 클릭 시 PC 버전 기준 왼쪽에는 노트에 첨부된 링크 콘텐츠 임베드가, 오른쪽에는 에디터가 배치됩니다.

| 노트 모아보기 및 노트 상세   |
| ---------------------------- |
| <img src="https://github.com/user-attachments/assets/305ada18-b192-4e1b-89a0-8ed638782ad0" width = "700" /> |


<br />

 <div align="right">
  
  [목차로 이동](#목차) 
  
  </div>

</details>

<br />

<details  open>
<summary><h3>5.7 노트 작성</h3></summary>

- 링크를 첨부할 수 있는 에디터를 제공합니다.
- 임시 저장 버튼을 클릭하거나, 5분에 한 번 자동 저장되는 기능을 통해 임시 저장합니다.
- 노트 작성/수정 중 페이지 이동 시 작성 중단 안내 모달을 제공합니다.
- 첨부된 링크 클릭 시 PC 버전 기준 왼쪽에는 노트에 첨부된 링크 콘텐츠 임베드가, 오른쪽에는 에디터가 배치됩니다.

| 할 일 별 노트 작성    |
| ---------------------------- |
| <img src="https://github.com/user-attachments/assets/917428a1-4671-46ec-9b3d-44fadcb5f5f7" width = "700" /> |


</details>

<br />

 <div align="right">
  
  [목차로 이동](#목차) 
  
  </div>

<br />
<br />



## 6. 주요 도전 과제

<details open>
<summary> <h3>6.1. 브랜치전략</h3></summary>

본 프로젝트는 **GitHub Flow**를 기반으로 하지만, 초기 개발 단계에서 **코드 충돌을 최소화**하고 **독립적인 개발 환경**을 유지하기 위해 **`develop`** 브랜치를 추가해 운영했습니다.

<img src="https://github.com/user-attachments/assets/19e89815-394a-4d19-93f6-0834c5041014" width="400px"/>

#### MVP 이전

- **`main`**: 공통적으로 사용되는 핵심 로직(라이브러리, 공통컴포넌트, 디자인 시스템) 을 모아둔 브랜치입니다.
- **`feature`**: `main`에서 분기하여 개별 기능을 개발한 후, 완료되면 **`develop`** 에 병합하는 브랜치입니다.
- **`develop`**: 새로운 기능이 추가된 feature 브랜치들이 병합되는 브랜치로, 배포를 위한 코드가 관리됩니다.

#### MVP 이후: GitHub Flow 전환

- MVP 이후에는 유지보수 위주의 작업이 많아지면서, **빠른 개발과 배포**를 위해 **`develop`** 브랜치를 제거하고 **GitHub Flow** 방식으로 전환했습니다.
- `main`에서 feature 브랜치를 생성해 **짧은 생명주기**로 개발하고, 검토 후 바로 `main`에 병합하는 방식입니다.
- 이를 통해 불필요한 중간 브랜치를 줄이고, 개발 속도를 높이며, 보다 유연한 협업이 가능해졌습니다.

<br />

 <div align="right">
  
  [목차로 이동](#목차) 
  
  </div>

</details>

<br />

<details  open>
<summary> <h3>6.2. 디자인패턴</h3></summary>

**아토믹 디자인 패턴** 과 **컴파운드 컴포넌트** 를 활용하여 일관된 디자인 시스템을 구축하고, 컴포넌트의 재사용성을 극대화 하였습니다.


<br/>

#### 6.2.1. 아토믹 디자인 패턴

  - 공통 컴포넌트의 효율적인 관리와 확장성을 고려하여 **아토믹 디자인 패턴**을 도입했습니다.  

    ![Image](https://github.com/user-attachments/assets/44ad83b7-6b3e-4a71-90b3-5f088c0f4e27)

<br/>

   #### 아토믹 디자인 패턴 도입 과정에서의 어려움 

   - 초기에는 Atoms, Molecules, Organisms의 분류 기준이 명확하지 않아, 팀원마다 해석이 달랐습니다.  
   - 특히 "더 이상 쪼갤 수 있는가?" 를 기준으로 Atoms을 정의하다 보니, 아토믹 디자인의 계층 구조를 엄격히 지키지 못하고,  Atoms가 그대로 페이지에서 사용되는 경우도 발생했습니다.  

<br/>

   #### 해결 방법 및 개선 방향

   - 기존의 "더 이상 쪼갤 수 있는가?" 대신, "상위 계층에서 조합되고 있는가?"* 를 기준으로 Atoms을 정의해야 한다고 판단했습니다.  
   - Atoms는 반드시 Molecules나 Organisms에서 조합되어야 하며, 개별적으로 페이지에서 직접 사용되지 않도록 규칙을 명확히 설정했습니다.  
   - 이를 통해 Atoms가 단독으로 사용되는 문제를 방지하고, 디자인 시스템의 계층 구조를 보다 체계적으로 유지할 수 있습니다.  
   - 팀원마다 컴포넌트 분류 방식이 다를 수 있기 때문에, 아토믹 패턴을 사용할 때에는 **정기적인 회의**를 통해 기준을 맞추는 과정이 필수적이라고 실감했습니다.  

<br/>

#### 6.2.2. 컴파운드 컴포넌트 패턴

  - 여러 개의 모달이 비슷한 디자인을 공유하지만 구조가 조금씩 다른 경우가 많았습니다.
  - 기존 방식에서는 각 모달을 별도로 구현해야 했고, 이로 인해 **중복 코드**가 많아지고 **유지보수가 어려운** 문제가 발생했습니다.
  - 이 문제를 해결하기 위해 **컴파운드 컴포넌트 패턴**을 적용하여 모달 내부 구조를 **유연하게 조합**할 수 있도록 개선했습니다.
  - 모달을 구성하는 요소들을 개별 컴포넌트로 분리하고, 개발자가 필요에 따라 **원하는 방식으로 조합**할 수 있도록 설계하여 **재사용성을 극대화**했습니다.

  ![Image](https://github.com/user-attachments/assets/6d99fc5f-2c79-4bf7-9ff6-662058b535d2)

<br/>

  <div align="right">
   
   [목차로 이동](#목차) 
   
   </div>

</details>

<br />

<details  open>
<summary> <h3>6.3. Open API Generator</h3></summary>
 
- 프로젝트를 진행하며 **Open API Generator**를 알게 되었고, 서버 요청에 필요한 타입을 자동으로 생성할 수 있다는 장점 때문에 도입하게 되었습니다.  
- 기존에는 API가 변경될 때마다 **수동으로 타입을 수정해야 하는 불편함**이 있었지만, OAS를 활용하여 **타입을 자동으로 생성**하면서 유지보수 효율이 크게 향상되었습니다.  

  **[자동 생성된 타입들]**  
  ![image](https://github.com/user-attachments/assets/3616b780-2715-4ea3-88d4-4ab05e148e34)


 <br/>

 <div align="right">
   
   [목차로 이동](#목차) 
   
   </div>

</details>

<br />

<details  open>
<summary> <h3>6.4. 스토리북 & MSW</h3></summary>

- **아토믹 디자인 패턴**을 적용하면서 개별 컴포넌트의 수가 많아졌고, 컴포넌트명만으로 식별하기 어려워져 한눈에 파악할 수 있는 환경이 필요했습니다.

  [Atoms 폴더 내 컴포넌트가 많아지면서 관리가 어려워짐]  
  <img src="https://github.com/user-attachments/assets/48fc65ab-9152-4782-8b2b-1ae0dc3469dd"/>

- Storybook을 활용하면 컴포넌트를 시각적으로 관리하면서, UI 조립 전에 디자인과 기능을 미리 확인할 수 있어 개발 생산성이 크게 향상될 것으로 판단하여 사용하였습니다.
- Storybook 내에서 API 통신이 필요한 경우가 있어 **MSW**를 함께 도입하여 데이터 요청을 mocking 하였습니다.
- **Chromatic**을 활용해 Storybook을 배포하고, PR마다 UI 변경 사항을 시각적으로 확인할 수 있도록 설정하였습니다.

   <img src="https://github.com/user-attachments/assets/7b4eae14-b80e-4d45-94c0-22d780e93385" width="700px"/>

<br/>

<div align="right">
   
   [목차로 이동](#목차) 
   
   </div>

</details>

<br />

<details  open>
<summary> <h3>6.5. 쿼리키 구조화</h3></summary>

TanStack Query의 쿼리 키를 효율적으로 관리하기 위해 **쿼리 키 팩토리 패턴**을 적용하였습니다.

<br />

#### 기존 문제점

쿼리 키를 개별적으로 관리하면서 다음과 같은 문제가 발생했습니다.

- 여러 곳에서 동일한 데이터를 가져올 때, 쿼리 키가 중복되어 관리 부담이 증가함.
- 같은 엔티티를 나타내는 키라도 각 개발자가 다르게 정의하여 유지보수가 어려워짐.
- 문자열 기반 키는 IDE의 자동 완성 기능을 활용할 수 없어 오타 발생 가능성 증가.

이러한 문제를 해결하기 위해 쿼리 키를 하나의 중앙 팩토리에서 생성하도록 변경했습니다.  
이를 통해 **재사용성**을 높이고, **일관성을 유지**하며, IDE **자동 완성**을 활용할 수 있습니다.

<br />

**[쿼리키 구조]**

![image](https://github.com/user-attachments/assets/5d025633-3c5f-4c1b-ba12-e5419b71c8b3)

<br />

 <div align="right">
  
  [목차로 이동](#목차) 
  
  </div>

</details>

<br />

<details  open>
  <summary> <h3>6.6 워크플로우 자동화</h3></summary>

GitHub Actions를 활용하여 개발 프로세스를 자동화하고, 코드 품질과 배포 효율성을 향상시키는 워크플로우를 구축하였습니다.

```bash
workflows/
├── merge-main-to-dev.yml   # main → develop 자동 병합
├── ci.yml                  # CI 파이프라인 (빌드 및 테스트)
├── random-reviewer.yml     # 랜덤 리뷰어 지정
├── storybook.yml           # 스토리북 미리보기 자동화
├── vercel-deploy.yml       # Vercel 배포 자동화
```

- **main → develop 자동 병합**

  - `main` 브랜치에 머지된 커밋을 `develop` 브랜치에 자동으로 병합합니다.
  - 이를 통해 `develop` 브랜치에 PR을 올릴 때 `main`에서 반영된 변경 사항을 중복 검토하는 상황을 방지할 수 있습니다.

  <br />

- **랜덤 리뷰어 지정**

  - 코드 리뷰를 필수적으로 진행하기 위해 두 명의 리뷰어를 랜덤으로 지정합니다.
  - 지정된 리뷰어의 승인이 없으면 병합할 수 없도록 브랜치 보호 규칙을 설정하였습니다.

  <br />

- **스토리북 미리보기**

  - PR이 생성될 때마다 개발된 UI 컴포넌트를 쉽게 확인할 수 있도록 스토리북 미리보기 기능을 도입하였습니다.

  <img src="https://github.com/user-attachments/assets/22728c91-323d-4c45-bee3-601482d8c561" />

  <br />

- **Husky 활용**

  - PR 병합 전 커밋 단계에서 컨벤션 및 타입 오류를 검사하여 GitHub Actions 실행 비용을 절감합니다.

  <br />

 <div align="right">
  
  [목차로 이동](#목차) 
  
  </div>

</details>

<br />

<details  open>
<summary> <h3>6.7. 테스트</h3></summary>

- 유닛 테스트를 중점으로 공통컴포넌트 위주의 테스트코드를 작성하였습니다.
- 테스트 커버리지 확인을 위한 Codecov 워크플로우를 구축하였습니다.

<img src = "https://github.com/user-attachments/assets/5cf4de2e-b127-438b-bd6f-07268f4b5edf" width = "700px" />



</details>

<br />

 <div align="right">
  
  [목차로 이동](#목차) 
  
  </div>

<br/>
<br/>

## 7. 문서

- [회의록](https://instinctive-linseed-8cb.notion.site/1848a37bf8a281cf87cfce3a301292d2?pvs=4)
- [트러블슈팅](https://instinctive-linseed-8cb.notion.site/1948a37bf8a28078b5b9e00947687c6f?pvs=4)

<br/>

  <div align="right">
   
   [목차로 이동](#목차) 
   
   </div>
