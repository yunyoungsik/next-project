# NEXT.JS
Next.js는 React 기반의 웹 프레임워크로, 클라이언트 측 렌더링 및 서버 측 렌더링을 모두 지원하여 웹 애플리케이션의 성능을 최적화할 수 있도록 도와주는 도구입니다. Next.js는 다양한 기능과 편의성을 제공하여 React 기반의 프로젝트를 쉽게 구축할 수 있게 해줍니다.

<details>
<summary>더보기</summary>
다음은 Next.js의 주요 특징과 개념에 대한 간략한 설명입니다:

1. 서버 측 렌더링(SSR): Next.js는 기본적으로 서버 측 렌더링을 지원합니다. 이는 서버에서 초기 HTML을 렌더링하여 사용자에게 전송하고, 이후에 JavaScript를 로드하여 클라이언트에서 페이지를 인터랙티브하게 만듭니다. SSR은 검색 엔진 최적화(SEO)에 유리하며 초기 로딩 성능을 향상시킵니다.

2. 정적 파일 생성 및 배포(Static Site Generation - SSG): Next.js는 페이지를 미리 빌드하고 정적 파일로 생성하여 CDN에 배포할 수 있도록 지원합니다. 이를 통해 웹 애플리케이션의 성능을 향상시키고, 정적 콘텐츠를 쉽게 제공할 수 있습니다.

3. 라우팅 및 코드 분할: 페이지 간의 라우팅을 자동으로 처리하며, 코드 분할을 지원하여 필요한 자원만 로드하여 초기 로딩 속도를 최적화할 수 있습니다.

4. API Routes: Next.js에서는 API Routes를 사용하여 서버리스 함수를 만들고, 클라이언트 측 또는 서버 측에서 이러한 API를 호출할 수 있습니다.

5. Hot Module Replacement (HMR): 개발 환경에서 코드 수정 시 브라우저를 새로고침하지 않아도 변경 사항이 즉시 적용되도록 해주는 HMR을 지원합니다.

6. CSS-in-JS 지원: 스타일링을 위한 다양한 방법을 지원하며, 필요에 따라 CSS-in-JS 라이브러리를 사용할 수 있습니다.

7. 환경 변수 지원: 프로젝트 내에서 환경 변수를 설정하고 사용할 수 있어, 환경에 따라 동적으로 설정을 변경할 수 있습니다.

Next.js는 React의 강력한 기능을 기반으로 하면서도 프로젝트를 빠르게 구축하고 최적화할 수 있도록 도와주는 효율적인 도구로 평가받고 있습니다.
</details>

## 설치
1. 폴더 생성mkdir next-porject
2. 이동 cd next-project
3. 설치 npx create-next-app@latest
Ok to proceed? (y) y
√ What is your project named? ... .
√ Would you like to use TypeScript? ... No / Yes
√ Would you like to use ESLint? ... No / Yes
√ Would you like to use Tailwind CSS? ... No / Yes
√ Would you like to use `src/` directory? ... No / Yes
√ Would you like to use App Router? (recommended) ... No / Yes
√ Would you like to customize the default import alias (@/*)? ... No / Yes
√ What import alias would you like configured? ... @/*