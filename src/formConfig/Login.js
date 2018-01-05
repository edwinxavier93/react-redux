import memoize from 'lru-memoize';
import { createValidator, required } from 'utils/validation';

const getLoginFormConfig = () => {
  const config = {
    title: 'Login',
    fields: {
      username: {
        name: 'email',
        component: 'input',
        type: 'text',
        placeholder: 'Your email',
        errorMessage: 'Username is required'
      },
      password: {
        name: 'password',
        component: 'input',
        type: 'password',
        placeholder: 'Your password',
        errorMessage: 'Password is required'
      }
    }
  };
  return config;
};

const loginValidation = createValidator({
  username: required,
  password: required
});

export default { getLoginFormConfig, loginValidation: memoize(10)(loginValidation) };
