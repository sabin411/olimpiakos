// Yup Package
import * as yup from 'yup';

// Global
import commonValues from './common.values';

// Constant
import { errorMessages } from '@/constants/en';

// full name validation
export const fullNameValidation = yup
  .string()
  .required(errorMessages.fullNameRequired)
  .min(3, errorMessages.fullNameMin)
  .max(50, errorMessages.fullNameMax);

// Email validation
export const emailValidation = yup
  .string()
  .trim()
  .required(errorMessages.emailRequired)
  .email(errorMessages.emailInvalid);

// user name validation
export const userNameValidation = yup
  .string()
  .required(errorMessages.userNameRequired)
  .matches(commonValues.USERNAME_REGEX, errorMessages.userNameInvalid);

// phone number validation
export const phoneNumberValidation = yup
  .string()
  .required(errorMessages.phoneNumberRequired)
  .min(10, errorMessages.phoneNumberMin)
  .max(15, errorMessages.phoneNumberMax);

// country validation
export const countryValidation = yup
  .string()
  .required(errorMessages.countryRequired);

// password validation
export const passwordValidation = yup
  .string()
  .required(errorMessages.passwordRequired)
  .matches(commonValues.PASSWORD_REGEX, errorMessages.passwordRequirements);

// Password confirm validation
export const passwordConfirm = yup
  .string()
  .required(errorMessages.confirmPasswordRequired)
  .oneOf([yup.ref('password'), null], errorMessages.confirmPasswordMisMatch);

// old password validation
export const oldPasswordValidation = yup
  .string()
  .required(errorMessages.oldPasswordRequired);
