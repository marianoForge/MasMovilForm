import { useId } from 'react';
import { useForm } from 'react-hook-form';
import { useStores } from '../../hooks/useStores';
import { observer } from 'mobx-react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useMutation } from 'react-query';
import {
  FormContainer,
  Label,
  Button,
  InputContainer,
  Success,
  StyledError,
  Loading,
} from './FormStyles';
import InputController from '../Input/Input';
import { FormInputs } from './FormTypes';
import { formValidationMessages } from '../../constants/validationMessages';

const fields: Array<{ name: keyof FormInputs; label: string; type: string }> = [
  { name: 'firstName', label: 'First Name', type: 'text' },
  { name: 'lastName', label: 'Last Name', type: 'text' },
  { name: 'email', label: 'Email', type: 'email' },
  { name: 'dateOfBirth', label: 'Date of Birth', type: 'date' },
  { name: 'telephoneNumber', label: 'Telephone Number', type: 'number' },
  { name: 'address', label: 'Address', type: 'text' },
];

const genderOptions = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'other', label: 'Other' },
];

const schema = yup.object().shape({
  firstName: yup.string().required(formValidationMessages.required).trim(),
  lastName: yup.string().required(formValidationMessages.required).trim(),
  email: yup
    .string()
    .email(formValidationMessages.email)
    .required(formValidationMessages.required)
    .trim(),
  dateOfBirth: yup.date().required(formValidationMessages.required),
  telephoneNumber: yup
    .string()
    .required(formValidationMessages.required)
    .trim()
    .min(9, formValidationMessages.telephoneNumberMin),
  address: yup.string().required(formValidationMessages.required).trim(),
  gender: yup.string().required(formValidationMessages.required).trim(),
});

const Form: React.FC = observer(() => {
  const { formStore } = useStores();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: yupResolver(schema),
    defaultValues: formStore.formData,
  });

  const mutation = useMutation(async (data: FormInputs) => {
    const response = await fetch('http://localhost:3001/submit', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Network response error');
    }

    console.log(response);

    return response.json();
  });

  const onSubmit = (data: FormInputs) => {
    mutation.mutate(data);
  };

  return (
    <>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        {/* Campos de texto */}
        {fields.map(({ name, label, type }) => (
          <InputContainer key={useId()}>
            <Label>{label}</Label>
            <InputController
              name={name}
              type={type}
              control={control}
              error={errors[name]}
            />
          </InputContainer>
        ))}

        {/* Genero */}
        <InputContainer>
          <Label>Gender</Label>
          <InputController
            name="gender"
            type="select"
            control={control}
            options={genderOptions}
            error={errors.gender}
          />
        </InputContainer>
        <Button type="submit">Submit</Button>
      </FormContainer>
      {mutation.isError && (
        <StyledError>Error: {mutation.error?.toString()}</StyledError>
      )}
      {mutation.isLoading && <Loading>Loading...</Loading>}
      {mutation.isSuccess && <Success>Success!</Success>}
    </>
  );
});

export default Form;
