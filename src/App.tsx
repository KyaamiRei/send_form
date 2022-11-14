import { useState } from 'react';

import styles from './App.module.scss';

export const App: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');

  const onClickSend = () => {
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
          <div>Заказать</div>
        </button>
      </div>
    </div>
  );
};

export default App;
