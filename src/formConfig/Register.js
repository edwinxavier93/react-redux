import memoize from 'lru-memoize';
import { createValidator, required } from 'utils/validation';

const getRegisterFormConfig = () => {
  const config = {
    title: 'Register',
    fields: {
      username: {
        name: 'name',
        component: 'input',
        type: 'text',
        placeholder: 'Your name',
        errorMessage: 'Username is required'
      },
      email: {
        name: 'email',
        component: 'input',
        type: 'text',
        placeholder: 'Your email',
        errorMessage: 'email is required'
      },
      password: {
        name: 'password',
        component: 'input',
        type: 'password',
        placeholder: 'Select a password',
        errorMessage: 'Password is required'
      },
      confirmpassword: {
        name: 'confirmpassword',
        component: 'input',
        type: 'password',
        placeholder: 'confirm password',
        errorMessage: 'confirmpassword is required'
      }
    }
  };
  return config;
};

const registerValidation = createValidator({
  username: required,
  email: required,
  password: required,
  confirmpassword: required
});

export default { getRegisterFormConfig, registerValidation: memoize(10)(registerValidation) };
