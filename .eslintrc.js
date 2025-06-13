module.exports = {
    root: true,                   // 이 디렉터리에서 탐색을 멈추도록
    parser: '@typescript-eslint/parser',  // TypeScript를 파싱할 수 있게
    extends: [
      'eslint:recommended',           // ESLint 권장 기본 규칙
      'plugin:@typescript-eslint/recommended', // TS 전용 권장 규칙
      'prettier'                      // Prettier와 충돌하는 ESLint 규칙 비활성화
    ],
    rules: {
      // 프로젝트에 맞춰 추가·변경할 규칙을 여기에 적습니다.
    }
  };