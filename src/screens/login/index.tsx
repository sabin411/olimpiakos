import React from 'react';

// component
import Input from '@/components/Input';
import Button from '@/components/Button';

// packages
import * as yup from 'yup';
import { useMutation } from '@apollo/client';
import { yupResolver } from '@hookform/resolvers/yup';
import { FieldValues, useForm } from 'react-hook-form';

// image
import { Logo } from '@/global/common';

// constants
import { Link, useNavigate } from 'react-router-dom';
import { login } from '@/constants';

// global
import { emailValidation } from '@/global/validation';

// graphql query
import { LOGIN } from '@/graphql/mutation.graphql';
import {
  Login as LoginType,
  LoginVariables,
} from '@/graphql/__generated__/Login';
import { showToast } from '@/utils/Toast/toast';

// Schema
const schema = yup.object().shape({
  email: emailValidation,
  password: yup.string().required('Password is required'),
});

export const Login = () => {
  const navigate = useNavigate();
  const [loginUser] = useMutation<LoginType, LoginVariables>(LOGIN, {
    onError: error => {
      showToast({
        title: 'Login Failed!',
        subTitle: error?.message,
        type: 'error',
      });
    },
  });
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleLoginUser = (data: FieldValues) => {
    loginUser({
      variables: {
        input: {
          identifier: data.email,
          password: data.password,
          provider: 'local',
        },
      },
    }).then(res => {
      if (res.data?.login.jwt) {
        console.log(res.data.login);
        navigate(
          `/redirecting?userId=${res.data?.login.user.id}&token=${res.data?.login.jwt}&email=${res.data?.login.user.email}&username=${res.data?.login.user.username}`,
        );
      } else {
        showToast({
          title: 'Unable to login',
          subTitle: 'something went wrong',
          type: 'error',
        });
      }
    });
  };

  return (
    <section className='flex h-screen '>
      <div className='flex-1 h-full hidden md:block'>
        <img
          className='h-full w-full object-cover'
          src='https://images.unsplash.com/photo-1620739159255-1c4cb978a0f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
          alt='login-image'
        />
      </div>
      <div className='flex-1 bg-primary-1000 flex flex-col items-center overflow-y-auto justify-center py-5'>
        <div className='w-full px-6 sm:w-[70%] md:w-[100%] xl:w-[60%]'>
          <div className='w-20 h-20'>
            <Link to='/'>
              <Logo />
            </Link>
          </div>
          <div className='text-left'>
            <h3 className='text-neutral-400'>{login.title}</h3>
            <p className='text-neutral-500'>{login.subTitle}</p>
          </div>
          <form
            onSubmit={handleSubmit(data => {
              handleLoginUser(data);
            })}
          >
            <Input
              label={login.form.inputFields.email.label}
              name={login.form.inputFields.email.name}
              type={login.form.inputFields.email.type}
              error={Boolean(errors.email)}
              errorMessage={errors.email?.message?.toString()}
              control={control}
            />
            <Input
              label={login.form.inputFields.password.label}
              name={login.form.inputFields.password.name}
              type={login.form.inputFields.password.type}
              error={Boolean(errors.password)}
              errorMessage={errors.password?.message?.toString()}
              control={control}
            />
            <p className='my-4 text-right'>
              <Link
                className='text-neutral-300 hover:text-neutral-500'
                to={'/forgot-password'}
              >
                {login.form.forgotPassword}
              </Link>
            </p>
            <Button
              variant='contained'
              type='submit'
              buttonSize='large'
              containerStyle={{
                width: '100%',
                maxWidth: '100%',
              }}
              title={login.form.submitButton}
            />
          </form>

          <p className='mt-4 text-neutral-400 self-end text-right'>
            {login.form.forgotPassword}{' '}
            <Link
              to='/register'
              className='text-secondary-800 hover:text-secondary-900'
            >
              {login.form.dontHaveAccount}
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
