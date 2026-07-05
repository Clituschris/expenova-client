/*** libraries ***/
import { memo, useEffect, useState, type FC } from 'react';

/*** css ***/
import styles from './ChoiceButton.module.css';

/*** types ***/
import type { Props, ChoiceValue } from './ChoiceButton.type';

const ChoiceButton: FC<Props> = ({ choices, value, onSelect }) => {
  const [selectedValue, setSelectedValue] = useState<ChoiceValue>(
    value || choices[0].value
  );

  const onClick = (choice: ChoiceValue) => {
    setSelectedValue(choice);
    onSelect(choice);
  };

  useEffect(() => {
    setSelectedValue(value || choices[0].value);
  }, [value]);

  return (
    <div className={styles.container}>
      {choices.map((choice, index) => (
        <button
          id={index.toString()}
          className={styles.choice}
          data-enabled={choice.value === selectedValue}
          onClick={() => onClick(choice.value)}
        >
          {choice.label}
        </button>
      ))}
    </div>
  );
};

export default memo(ChoiceButton);
