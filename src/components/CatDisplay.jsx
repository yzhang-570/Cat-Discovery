import React from 'react'
import "../CatDisplay.css"
import "../App.css"

function CatDisplay({ info, handleClick, banAttribute, loading }) {

    return (
        <div className="CatDisplay-div">
            <h1>Discover Cats!</h1>
            <div id="discover-btn-div">
                <button className="discover-btn" type="button" onClick={handleClick}>Discover</button>
                {loading && <p id="loading">Searching for a cat that matches your criteria... please wait</p>}
            </div>

            {/* validate for non-empty state*/}
            {info && Object.keys(info).length !== 0 ? 
                (
                <>
                    <img src={info.url}/>

                    <p>Click on an attribute below to ban it</p>
                    <div className="attributes-div">
                        <button onClick={banAttribute} value={info.breeds[0].name} className="attribute name">{info.breeds[0].name}</button>
                        <button onClick={banAttribute} value={info.breeds[0].origin} className="attribute origin">{info.breeds[0].origin}</button>
                        <button onClick={banAttribute} value={info.breeds[0].weight.imperial} className="attribute weight">{info.breeds[0].weight.imperial + " lbs"}</button>
                        <button onClick={banAttribute} value={info.breeds[0].life_span} className="attribute lifespan">{info.breeds[0].life_span + " yrs"}</button>
                    </div>
                </>
                ) 
                :
                (
                <p></p>
                )
            }
        </div>
    )
}

export default CatDisplay
