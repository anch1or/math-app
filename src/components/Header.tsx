import React from "react";
import './Header.css'

const data = [
    {text: 'О нас', link: '/#about'},
    {text: 'Преподаватели', link: '/#teachers'},
    {text: 'Стоимость', link: '/#price'},
    {text: 'Отзывы', link: 'https://forms.gle/gKdmM1BZ7e9m9Ci57'},
    {text: 'Вопросы', link: '/#questions'},
]



export const Header: React.FC<{}> = () => {
    return(
     <>
      <header>
        <div className="Header-container">
          <img className="Header-logo" src={require('../assets/logotype.png')} alt='logotype'/>
            <div style={{
                display: 'inline-flex',
                float: 'left',
                margin: `33px 4rem 0 2rem`
            }}>
              {data.map((item, index) => (
                <a key={index} href={item.link}>
                  <p style={{
                    fontSize: 20,
                    margin: `0 1rem`,
                  }}>
                    {item.text}
                  </p>
                </a>
              ))}
            </div>
            <a href="https://forms.gle/MuRxmit1CHq7H4SV9">
             <button className="Header-button">
                Записаться на занятие
             </button>
            </a>
        </div>
      </header>
     </>
    )
}