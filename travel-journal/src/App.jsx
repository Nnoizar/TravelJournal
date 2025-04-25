
import Header from "./components/Header.jsx"
import Content from "./components/Content.jsx"
import data from "./data.js"

let objectData = data.map((arrRef) => {
  let { title, text, img, id, googleMapsLink, dates, country } = arrRef
  return (
    <Content
      key={id}
      title={title}
      text={text}
      img={img}
      maps={googleMapsLink}
      dates={dates}
      country={country}
    />
  )
})

export default function App() {
  return (
    <div className="layout">
      <Header />
      {objectData}
    </div>
  )
}


