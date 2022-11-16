import { useEffect, useState } from 'react';

// подключени еaxios для отправки запросов на сервер
import axios from 'axios';

// подключение иконок font-awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

// подключение стилей
import styles from './scss/App.module.scss';

export const App: React.FC = () => {
  //состояние для текста в input
  const [inputValue, setInputValue] = useState<string>('');
  const [validate, setValidate] = useState<boolean>(true);

  // функция для отправки данных по нажатию на кнопку
  const onClickSend = () => {
    try {
      if (validate) {
        // отправка формы
        axios.post('https://6375493d08104a9c5f96becf.mockapi.io/message', inputValue);
        alert('Форма успешно отправлена');
        setInputValue('');
      }
    } catch (error) {
      // действия в случае ошибки при отправке формы
      alert('Произошла ошибка при отправке формы');
      console.log(error);
    }
  };

  useEffect(() => {
    inputValue.length > 0 ? setValidate(true) : setValidate(false);
  }, [inputValue]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.send__form}>
        <input
          className={validate ? '' : styles.is__valid}
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          type='text'
          placeholder={`Введите номер...`}
          alt='Enter text'
        />
        <button
          disabled={!validate}
          onClick={onClickSend}>
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
