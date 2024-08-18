declare module "*.png";
declare module "*.svg";
declare module "*.jpeg";
declare module "*.jpg";

interface ImportMetaEnv {
    readonly VITE_BACKEND_URL: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }