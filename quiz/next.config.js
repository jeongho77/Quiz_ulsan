/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    output: 'export',
    
    // 여기서 basePath를 설정하면, 빌드 후에 /Quiz_ulsan/quiz/ 경로로 배포됩니다.
    // 만약 로컬에서 실행할때 밑에꺼 활성화하면 코드가 안돌아감
    // 배포할때만 밑에 코드 실행시킬것(basePath, assetPrefix)
    basePath: '/Quiz_ulsan/quiz',  // <- 경로 맞게
    assetPrefix: '/Quiz_ulsan/quiz',

   
    // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
    // trailingSlash: true,
   
    // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
    // skipTrailingSlashRedirect: true,
   
    // Optional: Change the output directory `out` -> `dist`
    // distDir: 'dist',
  }
   
  module.exports = nextConfig