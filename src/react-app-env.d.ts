declare module "*.png";
declare module "*.svg";
declare module "*.jpeg";
declare module "*.jpg";

interface ImportMetaEnv {
    readonly VITE_BACKEND_URL: string;
    // Otras variables de entorno que utilices pueden ser definidas aquí
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }