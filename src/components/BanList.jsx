import React from 'react'

function BanList({ info, banList, handleUnban}) {
  return (
    <>
        {info && Object.keys(info).length !== 0 && banList && 
            <div className="ban-div">
            <h2 id="ban-title">Ban List</h2>
            <p id="ban-desc">Click to remove</p>

            {/* use ul to resolve strange break/new line issue */}
            {banList.map((attribute, index) => (
                <li className="banned-attribute" key={index}>
                <button onClick={handleUnban} value={attribute} className="attribute name">{attribute}</button>
                </li>
            ))}
            </div>
        }
    </>
  )
}

export default BanList
