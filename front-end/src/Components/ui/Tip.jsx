import React from 'react'

function Tip({ image, title, para}) {
  return (
    <div className="tip__wrapper">
      <img src={image} alt="" class="tip__img" />

      <div className="tip__wrapper--bg"></div>
      <div className="tip__description">
        <h3 className="tip__description--title">{title}</h3>

        <div className="tip__description--link">{para}</div>
      </div>
    </div>
  );
}

export default Tip