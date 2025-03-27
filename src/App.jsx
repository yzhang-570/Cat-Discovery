import React, {useEffect, useState} from 'react'
import "./App.css"
import CatDisplay from "./components/CatDisplay.jsx"
import BanList from "./components/BanList.jsx"

function App() {

  //note: strict mode renders component twice
  const [info, setInfo] = useState({})
  const [banList, setBanList] = useState([])
  const [gallery, setGallery] = useState([])

  const[loading, setLoading] = useState(false)
  const handleClick = async () => {
    //TODO: implement error handling
    const url = "https://api.thecatapi.com/v1/images/search?has_breeds=true"
    var data = [];
    setLoading(true)
    do {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json", //request content type
          "x-api-key": "live_UwQVD1YsX2j2Fdo5H4rezyI7DZYeWoUjD6qkLU75AMykepPsrFfFEEvA1j3Iungl"
        }
      })
      data = await response.json(); //parses as object
    } while(banList.includes(data[0].breeds[0].name) || banList.includes(data[0].breeds[0].origin)
      || banList.includes(data[0].breeds[0].weight.imperial) || banList.includes(data[0].breeds[0].life_span))
    setLoading(false)
    setGallery([...gallery, data[0].url])
    setInfo(data[0])
  }

  const banAttribute = (e) => {
    const toAdd = e.target.value
    if(!banList.includes(toAdd)) {
        setBanList([...banList, toAdd])
    }
  }

  const handleUnban = (e) => {
    const newBanList = banList.filter((attribute) => attribute !== e.target.value)
    setBanList(newBanList)
  }

  return (
    <>
      <div className="main-div">
        <CatDisplay info={info} handleClick={handleClick} banAttribute={banAttribute} loading={loading} />
        <BanList info={info} banList={banList} handleUnban={handleUnban}/>
      </div>
      <div className="gallery-div">
        <h1 id="gallery-title">Previously seen...</h1>
        {gallery && gallery.map((url) => (
            <img className="gallery-img" src={url} />
          ))}
      </div>
    </>
  )
}

export default App

/*
  - (done) display attributes
  - (done) create ban list/functionality -> toggle on/off
  - (done) issue: fix attributes overflowing in ban list
  - (done) filter by ban list -> when fetching, keep fetching until you find a cat that doesn't
    have banned attributes
*/