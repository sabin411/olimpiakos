import React from 'react';

// component
import Input from '@/components/Input';
import Button from '@/components/Button';
import DropDown from '@/components/DropDown';

// Package
import * as yup from 'yup';
import Cookies from 'universal-cookie';
import { useMutation } from '@apollo/client';
import { Link, useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { FieldValues, useForm } from 'react-hook-form';
import { Checkbox, FormControlLabel } from '@mui/material';

// constants
import { signUp } from '@/constants';
import { countries } from './constants';

// global
import {
  emailValidation,
  passwordConfirm,
  countryValidation,
  fullNameValidation,
  userNameValidation,
  passwordValidation,
  phoneNumberValidation,
} from '@/global/validation';

// GRAPHQL QUERY
import { CREATE_USER } from '@/graphql/mutation.graphql';

// graphql generated types
import {
  Registration,
  RegistrationVariables,
} from '@/graphql/__generated__/Registration';

// Schema
const schema = yup.object().shape({
  email: emailValidation,
  fullName: fullNameValidation,
  password: passwordValidation,
  phoneNumber: phoneNumberValidation,
  userName: userNameValidation,
  country: countryValidation,
});

export const SigninForm = ({}) => {
  const { inputFields } = signUp.form;
  const navigate = useNavigate();
  const [createUser] = useMutation<Registration, RegistrationVariables>(
    CREATE_USER,
    {
      onCompleted: data => {
        console.log(data);
      },
    },
  ); // mutation query for creating user
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSignIn = (data: FieldValues) => {
    try {
      createUser({
        variables: {
          input: {
            email: data.email,
            password: data.password,
            username: data.userName,
          },
        },
      }).then(res => {
        const cookies = new Cookies();
        cookies.set('token', res.data?.register.jwt);
        cookies.set('userId', res.data?.register.user.id);
        cookies.set('userName', res.data?.register.user.username);
        cookies.set('email', res.data?.register.user.email);
        navigate({
          pathname: '/register-upload-image',
          search: `?userId=${res.data?.register.user.id}&name=${data.fullName}&phoneNumber=${data.phoneNumber}&country=${data.country}`,
        });
      });
    } catch (err) {
      console.log(err);
    }
    reset();
  };

  return (
    <form onSubmit={handleSubmit(data => handleSignIn(data))}>
      <Input
        label={inputFields.fullName.label}
        name={inputFields.fullName.name}
        type={inputFields.fullName.type}
        error={Boolean(errors.fullName)}
        errorMessage={errors.fullName?.message?.toString()}
        control={control}
      />
      <Input
        label={inputFields.email.label}
        name={inputFields.email.name}
        type={inputFields.email.type}
        error={Boolean(errors.email)}
        errorMessage={errors.email?.message?.toString()}
        control={control}
      />
      <Input
        label={inputFields.userName.label}
        name={inputFields.userName.name}
        type={inputFields.userName.type}
        error={Boolean(errors.userName)}
        errorMessage={errors.userName?.message?.toString()}
        control={control}
      />
      {
        <Input
          label={inputFields.phoneNumber.label}
          name={inputFields.phoneNumber.name}
          type={inputFields.phoneNumber.type}
          error={Boolean(errors.phoneNumber)}
          errorMessage={errors.phoneNumber?.message?.toString()}
          control={control}
        />
      }

      <DropDown
        label={inputFields.country.label}
        name={inputFields.country.name}
        dropDownItems={countries}
        error={Boolean(errors.country)}
        register={register}
        errorMessage={errors.country?.message?.toString()}
      />

      <Input
        label={inputFields.password.label}
        name={inputFields.password.name}
        type={inputFields.password.type}
        error={Boolean(errors.password)}
        errorMessage={errors.password?.message?.toString()}
        control={control}
      />

      <FormControlLabel
        sx={{
          marginTop: '1rem',
          marginBottom: '1rem',
        }}
        control={
          <Checkbox
            sx={{
              color: 'var(--primary-500)',
              '&.Mui-checked': {
                color: 'var(--primary-500)',
              },
            }}
            defaultChecked
          />
        }
        label={
          <p className='text-neutral-300'>
            {signUp.form.termsAndconditions.text}{' '}
            <Link
              to='/terms-of-services'
              className='text-secondary-800 hover:text-secondary-900'
            >
              {signUp.form.termsAndconditions.terms}
            </Link>{' '}
            and{' '}
            <Link
              to='privacy-policy'
              className='text-secondary-800 hover:text-secondary-900'
            >
              {' '}
              {signUp.form.termsAndconditions.privacyPolicy}{' '}
            </Link>
          </p>
        }
      />
      <Button
        variant='contained'
        type='submit'
        buttonSize='large'
        containerStyle={{
          width: '100%',
          maxWidth: '100%',
        }}
        title={signUp.form.submitButton}
      />
    </form>
  );
};
