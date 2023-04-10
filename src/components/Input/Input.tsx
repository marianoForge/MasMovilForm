import { Controller, FieldValues } from 'react-hook-form';
import {
  Select,
  InputStyle,
  Option,
  StyledError,
  InputContainer,
} from './InputStyles';

import { InputProps } from './InputTypes';

const Input = <T extends FieldValues>({
  name,
  label,
  type,
  control,
  error,
  options,
}: InputProps<T>): JSX.Element => {
  const renderInput = (field: any) => (
    <InputStyle {...field} type={type} id={String(name)} />
  );

  const renderSelect = (field: any) => (
    <Select {...field} id={String(name)}>
      <Option value="">Select {label}</Option>
      {options?.map((option) => (
        <Option key={option.value} value={option.value}>
          {option.label}
        </Option>
      ))}
    </Select>
  );

  return (
    <InputContainer>
      <label htmlFor={String(name)}>{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) =>
          type === 'select' ? renderSelect(field) : renderInput(field)
        }
      />
      {error && <StyledError>{error.message}</StyledError>}
    </InputContainer>
  );
};

export default Input;
