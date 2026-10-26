/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE?: string;
  readonly VITE_COLLEGE_NAME?: string;
  readonly VITE_COLLEGE_EMAIL_DOMAIN?: string;
  readonly VITE_FEEDBACK_API_URL?: string;
  readonly VITE_COLLEGE_WEBSITE_URL?: string;
  readonly VITE_COUNCIL_EMAIL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
