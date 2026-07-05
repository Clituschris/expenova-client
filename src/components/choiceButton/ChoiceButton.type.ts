export type ChoiceValue = string | number | boolean;

export type Choice = {
  label: string;
  value: ChoiceValue;
};

export interface Props {
  choices: Choice[];
  value?: string;
  onSelect: (choice: ChoiceValue) => void;
}
