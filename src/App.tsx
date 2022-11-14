import { useState } from 'react';

// подключени еaxios для отправки запросов на сервер
// import axios from 'axios';

// подключение иконок font-awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

// подключение стилей
import styles from './App.module.scss';

export const App: React.FC = () => {
  //состояние для текста в input
  const [inputValue, setInputValue] = useState<string>('');

  // функция для отправки данных по нажатию на кнопку
  const onClickSend: () => void = () => {
    try {
      // отправка формы
      // axios.post()
      setInputValue('');
      alert('Форма успешно отправлена');
    } catch (error) {
      // действия в случае ошибки при отправке формы
      alert('Произошла ошибка при отправке формы');
      console.log(error);
    }
    console.log('click');
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.send__form}>
        <input
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          type='text'
          placeholder='Введите номер...'
          alt='Enter text'
        />
        <button onClick={onClickSend}>
          <div>
            Заказать
            <FontAwesomeIcon
              className='send__icon'
              icon={faPaperPlane}
            />
          </div>
        </button>
      </div>
    </div>
  );
};

export default App;
