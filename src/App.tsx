//компоненты 
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer'

import { Collapse } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { ContinuousTextAnimation } from './components/animation/ContinuousTextAnimation';

// Отвечает за типизацию свойств компонента EducationPrice
interface ComponentProps {
  price: string,
  duration: string,
  description: string,
  priceColor: string,
  buttonColor: string,
  id: number,
}

// Карточка с ценой за обучение (данные берёт с массива объектов data)
const EducationPrice: React.FC<ComponentProps> = ({price, duration, description, priceColor, buttonColor, id}) => {
  return(
    <div style={{
      width: 274,
      height: 383,
      borderRadius: 40,
      border: `2px solid #000`,
      position: 'relative',
      margin: `28px 20px 0 20px`
    }}>
      <div style={{
        width: 227,
        height: 155,
        borderRadius: 30,
        margin: `18px auto 20px auto`,
        background: priceColor,
        border: id !== 3 ? 0 : `2px solid #000`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        verticalAlign: 'middle',
      }}>
        <p style={{
          fontFamily: 'TT Firs Neue-600',
          fontSize: 50,
        }}>
          {price}
        </p>
        <p style={{
          fontFamily: 'TT Firs Neue-500',
          fontSize: 25,
        }}>
          {duration}
        </p>
      </div>
      <p style={{
        fontFamily: 'TT Firs Neue-500',
        fontSize: 25,
        textAlign: 'center'
      }}>
        {description}
      </p>
      <a href='https://forms.gle/QGkM6yrx5goKNBwe6'>
        <button className='priceButton' style={{ background: buttonColor, }}>
          Купить
        </button>
      </a>
    </div>
  )
}

const data = [
  {id: 0, price: '800 ₽', duration: '1 занятие', description: 'Разовые занятия - отлично для старта', priceColor: `rgba(207, 236, 42, 1)`, buttonColor: `#FFF`},
  {id: 1, price: '6000 ₽', duration: '8 занятий', description: '1 месяц учёбы, занятия 2 раза в неделю', priceColor: `rgba(222, 122, 80, 1)`, buttonColor: `rgba(217, 217, 217, 1)`},
  {id: 2, price: '1000 ₽', duration: '1 занятие', description: 'Разовые занятия - отлично для старта', priceColor: `rgba(217, 217, 217, 1)`, buttonColor: `rgba(207, 236, 42, 1)`},
  {id: 3, price: '7200 ₽', duration: '8 занятий', description: '1 месяц учёбы, занятия 2 раза в неделю', priceColor: `#FFF`, buttonColor: `rgba(222, 122, 80, 1)`},
]

interface QuestionsCollapseProps {
  title: string,
  description: JSX.Element
}

const questionsData = [
  {
    title: 'Что такое пробное занятие?',
    description: <p>Первое занятие (пробное) — бесплатное. Длится по времени 20−30 минут. На первом занятии я провожу небольшое тестирование для определения текущего уровня знаний. Вместе с учеником разбираем задания, вызывающие затруднения, определяем стратегию и формат работы.</p>,
  },
  {
    title: 'Что нужно для занятий?',
    description: <p>Учебник и тетрадь для заметок, тетрадь для записи правил, черновик, ручка, карандаш, линейка, циркуль, ластик. <br/>Ноутбук или компьютер с доступом в интернет, если вы планируете заниматься дистанционно. Установленное приложение для работы: Zoom/Teams/Skype/Discord.</p>,
  },
  {
    title: 'Какая стоимость занятия?',
    description: <p>1−8 класс — 800 рублей/час <br/>10−11 — 1000 рублей/час <br/> Занятия в мини-группе со скидкой 15%</p>,
  },
  {
    title: 'Что такое мини-группа?',
    description: <p>Мини-группа — это группа из 2−3 человек (возможно твоих друзей или одноклассников).
    <br/>Длительность такого занятия — 1,5 часа.
    <br/>Формат мини-групп подойдет тем, кто хочет:
    <br/> — сдать ОГЭ/ВПР по математике на 4 и 5
    <br/> — перестать бояться математику
    <br/> — быть уверенным в своих силах и знаниях
    <br/> — обрести круг единомышленников и поддержку</p>,
  },
  {
    title: 'Как я могу следить за успехами своего ребёнка?',
    description: <p>У Вас будет личный кабинет, в котором:
    <br/> — в одном месте собраны все необходимые ссылки
    <br/> — ведется журнал посещаемости/результаты пробников
    <br/> — поставлена цель и задачи на ближайший месяц
    <br/> — составлено расписание занятий с уведомлениями, чтобы случайно не забыть об уроке</p>,
  },
  {
    title: 'В каком формате будут проходить занятия?',
    description: <p>Занятия могут проходить в дистанционном формате через платформы Zoom/Teams/Skype/Discord или в очном формате (Ростов-на-Дону, Советский район — ул. Зорге).
    <br/><br/>
    Длительность занятия: 60 минут индивидуальное; 90 минут групповое.</p>,
  },
  {
    title: 'Как происходит оплата за уроки?',
    description: <p>Оплата производится либо перед началом занятия, либо один раз в начале месяца.
    Предупредите заранее, если не успеваете на занятие или попросите отменить его. Если ребенок или мама не предупредили за два часа до начала занятия — занятие всё равно нужно будет оплатить! Занятия отменяются или переносятся только по уважительным причинам.</p>,
  },
]

const QuestionsCollapse: React.FC<QuestionsCollapseProps> = ({title, description}) => {
  const [opened, { toggle }] = useDisclosure(false);
  return(
    <>
    <div style={{
      height: 'max-content',
      border: `2px solid #000`,
      marginBottom: '2rem',
      borderRadius: 40,
      position: 'relative'
    }}>
      <p style={{
        fontFamily: 'TT Firs Neue-600',
        fontSize: `2rem`,
        padding: `1rem 2rem`,
        
      }}>
        {title}
      </p>
      <button onClick={toggle} style={{
        width: `2.5rem`,
        height: `2.5rem`,
        border: 0,
        borderRadius: 10,
        fontSize: `2rem`,
        margin: `1.2rem 2rem`,
        fontFamily: 'TT Firs Neue-400',
        transition: `all 0.25s ease`,
        background: opened !== true ? `rgba(222, 122, 80, 1)` : '#000',
        color: '#fff',
        position: 'absolute',
        top: 0,
        right: 0,
      }}>
        <p style={{
          transition: `all 0.25s ease`,
          transform: opened !== true ? `rotate(0)` : `rotate(45deg)`,
        }}>+</p>
      </button>
      <Collapse in={opened} style={{
        height: 'max-content',
        padding: `0 1.5rem`,
        width: '100%',
      }}>
        <div style={{
          
        }}>
          <div style={{
            fontFamily: 'TT Firs Neue-500',
            fontSize: 25,
            padding: `0 1rem 1rem`
          }}>
          
          {description}
          </div>
        </div>
      </Collapse>
    </div>
    </>
  )
}

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='Section-one'>
        <div className='Container'>
        <div style={{
            width: 'fit-content',
            height: 571,
            position: 'inherit',
            float: 'right',
            top: 0,
            marginRight: 136,
            zIndex: 1,
            marginTop: 26,
          }}>
            <img src={require('./assets/cat.png')} alt ='cat' style={{
              display: 'block',
              margin: `0 auto`,
            }}/>
          </div>
          <div style={{zIndex: 2, position: 'absolute',}}>
            <div style={{
              width: 468,
              height: 77,
              background: '#000',
              marginTop: '6rem',
            }}>
              <p className='Section-one-title' style={{
                marginLeft: '1rem'
              }}>
                Подготовка
              </p>
            </div>
            <div style={{
              width: 666,
              height: 69,
              background: '#000',
              margin: `8px 0 0 50px`,
              paddingBottom: '1rem',
            }}>
              <p className='Section-one-title' style={{
                marginLeft: `1rem`
              }}>
                с репетитором
              </p>
            </div>
            <p className='Section-one-title' style={{
              marginLeft: '1rem'
            }}>
              для 1-11 классов
            </p>
            <div style={{
              display: 'flex',
            }}>
              <p className='Section-one-title' style={{
                marginLeft: '2rem'
              }}>
                по
              </p>
              <div style={{
                width: 446,
                height: 77,
                background: '#000',
                marginLeft: '0.5rem',
                paddingLeft: '1rem'
              }}>
                <p className='Section-one-title'>
                  математике
                </p>
              </div>
            </div>
            <p className='Section-one-subtitle'>
            Запишись на бесплатный вводный урок и узнай, как эффективно подготовиться к сдаче ЕГЭ/ОГЭ, ВПР или контрольным работам за минимальное время
            </p>
          </div>
        </div>
      </div>
      <div className='Section-two' id='about'>
        <div className='Container'>
          <div className='Section-two-title'>
            <p style={{
              fontFamily: 'TT Firs Neue-600',
              fontSize: 50,
            }}>О нас</p>
          </div>
          <div style={{
            width: 'max-content',
            margin: `0 auto`
          }}>
            <img src={require('./assets/notepad.png' )} alt='notepad' style={{
             float: 'left',
            }}/>
            <div style={{
              width: 833,
              height: 199,
              borderRadius: 40,
              boxShadow: `0px 4px 24px -1px rgba(0, 0, 0, 0.2)`,
              margin: `68px 0 0 57px`,
              float: 'right',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              verticalAlign: 'middle'
            }}>
              <p style={{
                fontFamily: 'TT Firs Neue-500',
                fontSize: 20,
                textAlign: 'right',
                width: 754,
              }}>
              Добро пожаловать на сайт <span>репетиторов по математике MathBoost! </span>
              <br/>Мы предлагаем качественные занятия по математике для учащихся всех возрастов и уровней подготовки. Наша команда профессиональных преподавателей поможет вам разобраться в сложных темах, подготовиться к экзаменам и добиться успеха в учебе.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='Section-three'>
        <div className='Container'>
          <p style={{
            color: '#fff',
            fontFamily: 'TT Firs Neue-500',
            fontSize: 25,
            width: 800,
            paddingTop: 70,
            float: 'left'
          }}>
          Хотите, чтобы Ваш ребенок полюбил математику?<br/><span>Мы готовы помочь!</span>
          <br/><br/>– Учим понимать, а не зубрить формулы
          <br/>Первые результаты уже после пробного занятия
          <br/>– Концентрируемся на развитии логического мышления и аналитических навыков
          <br/>– Наладим контакт между Вашим ребенком и математикой
          <br/>– Подготовим к экзаменам без стресса и паники
          </p>
          <img src={require('./assets/girl.png')} alt='girl' style={{
            float: 'right',
            marginTop: 45,
          }}/>
        </div>
      </div>
      <div style={{
        height: 'max-content',
        background: `radial-gradient(circle 40rem at right 50%, rgba(171, 211, 63, 0.61), #fff)`,
        paddingTop: '3rem',
      }}>
       <div id='teachers' style={{
        background: 'rgba(207, 236, 42, 1)',
        width: '32%',
        height: 40,
        display: 'flex',
        justifyContent: 'right',
       }}>
        <p style={{
          fontFamily: 'TT Firs Neue-700',
          fontSize: 25,
          marginRight: '3rem'
        }}>
          Наши преподаватели
        </p>
       </div>
       <p style={{
        textAlign: 'center',
        margin: `19px auto 0 auto`,
        paddingBottom: '37px',
        width: 1130,
        fontFamily: 'TT Firs Neue-500',
        fontSize: 20,
      }}>
        – опытные специалисты с высшим образованием и большим опытом работы в области образования. Они индивидуально подходят к каждому ученику, помогая раскрыть его потенциал и достичь поставленных целей.
       </p>
      </div>
      <div className='Section-Anastasia'>
        <img src={require('./assets/line.png')} alt='Line' style={{
          position: 'absolute',
          zIndex: 99,
          marginTop: 250,
        }}/>
        <div className='Block-Anastasia'>
         <img src={require('./assets/pin.png')} alt='pin' style={{
            float: 'left',
            position: 'absolute',
            top: -80,
            left: -60
          }}/>
          <p style={{
            width: 492,
            fontFamily: 'TT Firs Neue-500',
            fontSize: 25,
            padding: `51px 0 0 101px`,
            float: 'left',
          }}>
          Меня зовут <span>Анастасия Евгеньевна.</span> Студентка 3 курса института математики, механики и компьютерных наук имени И.И. Воровича ЮФУ. Готовлю учеников 3-11 классов к экзаменам ОГЭ, ВПР, ЕГЭ и не только. 
          Помогаю детям полюбить математику, используя интерактивные игры и геймификацию. 
          <br />Опыт работы – более 2 лет.
          </p>
          <img src={require('./assets/Anastasia.png')} alt='Anastasia' style={{
            float: 'right',
            margin: `56px 112px 0 0`
          }}/>
          <a href="https://forms.gle/Egov1v6TXr7CfNvY8" style={{ display: 'block', margin: `0 auto`}}>
             <button className="Header-button">
                Записаться на занятие
             </button>
            </a>
        </div>
      </div>
      <div className='Section-Janna'>
        <div className='Block-Janna'>
          <img src={require('./assets/Janna.png')} alt='Janna' style={{
            float: 'right',
            margin: `28px 5.5rem 0 8rem`
          }}/>
          <div style={{
            float: 'right',
            marginTop: 53,
          }}>
            <p style={{
            width: 683,
            fontFamily: 'TT Firs Neue-500',
            fontSize: 25,
            
            }}>
            Привет! Меня зовут <span>Жанна Сергеевна.</span>
            <br/>Я студентка 3 курса ЮФУ. Моя будущая профессия - учитель по математике и мне хотелось бы поделиться накопленными знаниями с вами. 
            <br/>Я специализируюсь в работе с учениками 3-8 классов. 
            Опыт работы – более 1 года. 
            <br/>Моя цель – стать не просто скучным репетитором с кучей домашки, а другом, с которым будет комфортно и интересно)))
            </p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScylmpInK8ecRcwNm5PYMsBibSyKMlEOLbRIp5M8PJfjMOWsA/viewform">
             <button className="Header-button">
                Записаться на занятие
             </button>
            </a>
          </div>
        </div>
      </div>
      <div className='Section-Ekaterina'>
        
        <div className='Block-Ekaterina'>
         <img src={require('./assets/Ekaterina.png')} alt='Ekaterina' style={{
          margin: `28px 37px 0 72px`,
          float: 'left'
         }}/>
         <div style={{
          float: 'left',
          marginTop: 28,
          width: 697,
         }}>
          <p style={{
            fontFamily: 'TT Firs Neue-500',
            fontSize: 25,
          }}>
          Привет, меня зовут <span>Екатерина Романовна.</span>
          <br/>Я учусь на 3 курсе института математики, механики и компьютерных наук, но уже сейчас готова поделиться с тобой знаниями по математике и информатике. Обещаю, что занятия будут не только полезными, но и увлекательными. 
          <br/>Опыт работы – более 1 года.
          </p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScxOUugoYkNCO0nFzUQcbeiO8dpI3ENb6elt3EnIz1XV15I8g/viewform" style={{ display: 'block', margin: `3.5rem auto 0 auto` }}>
            <button className="Header-button">
              Записаться на занятие
            </button>
          </a>
         </div>
        </div>
      </div>
      <div className='Section-Nikita'>
        <div className='Block-Nikita'>
          <img src={require('./assets/Nikita.png')} alt='Nikita' style={{
            float: 'right',
            margin: `25px 66px 0 45px`
          }}/>
          <div style={{
            float: 'right',
            width: 697,
            marginTop: 25,
          }}>
            <p style={{
              fontFamily: 'TT Firs Neue-500',
              fontSize: 25,
            }}>
            Привет, меня зовут <span>Никита Сергеевич.</span>
            <br/>Специализируюсь на работе с учениками 5-9 классов. 
            Опыт работы - более полугода. 
            <br/>Моя цель - научить вас не просто решать типовые задания для сдачи экзаменов, а обучить правильно осмыслить и применять полученные знания в последующей своей деятельности в интересной и увлекательной форме подачи.
            </p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSf6Wd90huCuQOe0_wLNY8KxSVM_DKPRTWFs5K5_DlVTYrd8cA/viewform" style={{ display: 'block', margin: `1.5rem auto 0 auto` }}>
              <button className="Header-button">
                Записаться на занятие
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className='Section-price'>
        <div className='Container'>
          <p style={{
            fontFamily: 'TT Firs Neue-600',
            fontSize: 50,
            paddingTop: 29,
            textAlign: 'center',
          }}>
            Стоимость <span>обучения</span>
          </p>
          <div id='price' style={{
            display: 'flex',
            margin: `28px auto 0 auto`,
            alignItems: 'center',
            justifyContent: 'center',
            gap: '23rem'
          }}>
            <p style={{
              fontFamily: 'TT Firs Neue-500',
              fontSize: 25,
            }}>
            Учащиеся 1-8 классов
            </p>
            <p style={{
              fontFamily: 'TT Firs Neue-500',
              fontSize: 25,
            }}>
            Учащиеся 9-11 классов
            </p>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            {data.map((item) => (
              <EducationPrice
                key={item.id}
                id={item.id}
                price={item.price}
                duration={item.duration}
                description={item.description}
                priceColor={item.priceColor}
                buttonColor={item.buttonColor}
              />
            ))}
          </div>
        </div>
      </div>
      <div id='questions' style={{
        height: 286,
        background: `rgba(207, 236, 42, 1)`,
        position: 'relative',
      }}>
  
        <p style={{
          fontFamily: 'TT Firs Neue-600',
          fontSize: 50,
          width: 680,
          paddingTop: 60,
          margin: `0 auto`,
          textAlign: 'center',
        }}>
        Отвечаем на самые   
        часто <br/>задаваемые вопросы
        </p>
      </div>
      <div style={{
        height: 'max-content',
        padding: `2rem 0`
      }}>
        <div className='Container'>
          {questionsData.map((item, index) => (
            <QuestionsCollapse
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
      <ContinuousTextAnimation />
      <Footer />
    </div>
  );
}

export default App;
