import "@/styles/style.css"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* <link rel="stylesheet" href="public/stylesp/stylep.css" /> */}
        <link rel="stylesheet" href="public/styles/style.css" />
      </head>
      <body>{children}</body>
    </html>
  )
}