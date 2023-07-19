import React from 'react'

export default function Intro() {
  return (
    <div id='intro'>
      <div className='intro-details'>
      <i class="fa-solid fa-utensils"></i>
        <span>Une cuisine <br /> <strong>saine et gouteuse</strong></span>
      </div>
      <div className='intro-details'>
      <i class="fa-solid fa-carrot"></i>
        <span>Des produits <br /> <strong>frais et locaux</strong></span>
      </div>
      <div className='intro-details'>
      <i class="fa-solid fa-champagne-glasses"></i>
        <span>Un lieu convivial<br /> <strong>et chalereux</strong></span>
      </div>
      <div className='intro-details'>
      <i class="fa-solid fa-cake-candles"></i>
        <span>Des évènements<br /> <strong>inoubliables !</strong></span>
      </div>
    </div>
  )
}
