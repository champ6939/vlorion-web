export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW">
      <head>
      </head>
      <body>{children}</body>
    </html>
  )
}