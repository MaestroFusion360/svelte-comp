// src/app.d.ts
declare module "*.css" {
  const content: string;
  export default content;
}

declare module "prismjs/themes/*.css" {
  const content: string;
  export default content;
}
