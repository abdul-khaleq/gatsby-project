import * as React from "react"
import Home from "./Home/Home/Home"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


// styles
const pageStyles = {
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Reffly</title>
      <Home></Home>

    </main>
  )
}

export default IndexPage
