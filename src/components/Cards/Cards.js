import React from 'react'
// import './cards.css'

function chooseUs() {
    const cardData =[
        {
            title: 'Why Choose Us',
            desc: 'Fully-licensed and insured by the Texas State License Board.',
            desc1: 'S&W Foundation has been privately-owned and locally-operated over 30 years.',
            desc2: 'Experienced in commercial drilling and foundation repair.',
            desc3: 'Limited-access pier drilling, Commercial Pier Drilling and Turnkey Drilling Solutions specialist'
        }
    ]
    const chooseUsCard = cardData.map((e) => {
        return (
            <div className='card'>
                <div className='card-container'>
                    <div className='card-wrapper'>
                        <div className='card-contents'>
                            <h2 className='card-title'>{e.title}</h2>
                            <ul className='card-list-items'>
                                <li className='card-list-item'>{e.desc}</li>
                                <li className='card-list-item'>{e.desc1}</li>
                                <li className='card-list-item'>{e.desc2}</li>
                                <li className='card-list-item'>{e.desc3}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div>{chooseUsCard}</div>
    )
}

const Cards = () => {
  return (
    <div>{chooseUs()}</div>
  )
}

export default Cards