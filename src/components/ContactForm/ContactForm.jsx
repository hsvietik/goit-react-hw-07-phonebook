import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import {
  StyledForm,
  StyledInput,
  FormButton,
  ErrorMessage,
} from './ContactForm.styled.jsx';
import { addContact } from '../../redux/operations.js';
import { setFilter } from '../../redux/filterSlice';

const schema = yup
  .object()
  .shape({
    name: yup
      .string()
      .matches(
        /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
        "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      )
      .required('Name is required'),
    number: yup
      .string()
      .matches(
        /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
        'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
      )
      .required('Number is required'),
  })
  .required();

export function ContactForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let currentDate = new Date().toJSON();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: { name: '', number: '' },
    resolver: yupResolver(schema),
  });

  const onSubmit = ({ name, number }) => {
    const contact = {
      createdAt: currentDate,
      name,
      number,
      favorite: false,
      id: nanoid(),
    };
    console.log(contact);
    dispatch(addContact(contact));
    dispatch(setFilter(''));
    reset();
    navigate('/', { replace: true });
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Name</label>
      <StyledInput {...register('name')} type="text" id="name" />
      <ErrorMessage>{errors.name?.message}</ErrorMessage>
      <label htmlFor="number">Number</label>
      <StyledInput {...register('number')} type="tel" id="number" />
      <ErrorMessage>{errors.number?.message}</ErrorMessage>
      <FormButton type="submit">Add contact</FormButton>
    </StyledForm>
  );
}
