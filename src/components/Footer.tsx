import React from "react";

export const Footer: React.FC<{}> = () => {
  return(
    <>
    <footer>
      <div className="Container">
        <div style={{
            float: 'left'
        }}>
          <p style={{
            fontFamily: 'TT Firs Neue-500',
            fontSize: 20,
            color: '#fff',
            paddingTop: '1rem'
          }}>
            Контакты
            <br/>
            <br/>Telegram: <a href="https://t.me/mathboost" style={{ color: '#fff'}}>@mathboost</a>
            <br/>WhatsApp: <a href="tel:+79094005465" style={{ color: '#fff'}}>+7 777 777 77 77</a>
            <br/>Эл. почта: <a href="mailto:makhova@sfedu.ru" style={{ color: '#fff'}}>mathboost@gmail.com</a>
          </p>
          <p style={{
            fontFamily: 'TT Firs Neue-300',
            fontSize: 20,
            color: '#fff',
            marginTop: '1rem'
          }}>
            2024 © Все права защищены
          </p>
        </div>
        <img src={require('../assets/icon.png')} alt='icon' style={{
            float: 'right',
            marginTop: '8rem'
        }}/>
      </div>
    </footer>
    </>
  )
}