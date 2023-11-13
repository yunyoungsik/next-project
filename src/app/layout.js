import "@/assets/sass/style.scss"

export const metadata = {
  title: 'Next.js를 이용한 사이트 만들기',
  description: 'Next.js를 이용하여 사이틀르 만들었습니다.',
  keywords: ['portfolio', 'Next.js', 'React']
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <link rel="icon" type="image/svg+xml" href="../../public/favicon.svg"></link>
      <body>{children}</body>
    </html>
  )
}
