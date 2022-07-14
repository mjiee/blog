/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BOOK_BASE_URL: string;
  readonly VITE_BOOK_IMG_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
