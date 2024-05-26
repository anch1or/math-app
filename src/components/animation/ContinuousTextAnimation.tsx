import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Box, Center, Flex, Text } from '@mantine/core';
import './ContinuousTextAnimation.css'; // Подключаем файл стилей

const TextData = new Array(1)

for (let i = 0; i < 12; i++) {
  const text_1 = {id: i, title: <Text className='animation-title' fz={18} ml={'4rem'}>ТВОЙ РЕПЕТИТОР ПО МАТЕМАТИКЕ</Text>}
  TextData.push(text_1)
}

interface ComponentProps {
  id: number,
  title: JSX.Element,
}

const PropsContainer: React.FC<ComponentProps> = ({ title }) => {
    return title
}

const TextContainer: React.FC = () => {
    return (
        <Flex mt={'1.5rem'}>
          {TextData.map((item) => (
            <PropsContainer key={item.id} id={item.id} title={item.title} />
          ))}
        </Flex>
    )
}

const texts = [
    <TextContainer />,
]; // Список текстов для анимации

export const ContinuousTextAnimation = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 10000); // Интервал для смены текста (в миллисекундах)

    return () => clearInterval(interval);
  }, []);

  return (
    <Box className="animation-container" w={'100%'} sx={{overflow: 'hidden'}}>
      <AnimatePresence>
        <motion.div
          key={index}
          initial={{ x: '-29.25%' }}
          animate={{ x: '-4.2%' }}
          exit={{ x: '-4.2%' }}
          transition={{ duration: 24, ease: 'linear', repeat: Infinity, }}
          className="text-animation"
        >
          <Text className='text-animation-title'>{texts[index]}</Text>
        </motion.div>
      </AnimatePresence>
      <AnimatePresence>
        <motion.div
          key={index}
          initial={{ x: '-4.2%' }}
          animate={{ x: '-29.25%' }}
          exit={{ x: '29.25%' }}
          transition={{ duration: 24, ease: 'linear', repeat: Infinity,}}
          className="text-animation"
        >
          <Text className='text-animation-title-2'>{texts[index]}</Text>
        </motion.div>
      </AnimatePresence>
    </Box>
  );
}

