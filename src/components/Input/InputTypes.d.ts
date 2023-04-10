import { Control, FieldError, FieldValues, Path } from 'react-hook-form';

export interface SelectOption {
  value: string;
  label: string;
}

export interface InputProps<T extends FieldValues> {
  name: Path<T>;
  label?: string;
  type: string;
  control: Control<T>;
  error?: FieldError;
  options?: SelectOption[];
  defaultValue?: string;
}
