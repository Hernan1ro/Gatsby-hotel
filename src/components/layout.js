import React from "react"
import Header from "../components/Header"
import Helmet from "react-helmet"

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>Gatsby Hotel</title>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Roboto:ital,wght@0,400;1,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Header />
      {children}
    </>
  )
}

export default Layout
