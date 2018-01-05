import memoize from 'lru-memoize';
import { createValidator, required } from 'utils/validation';

const getUserDetailFormConfig = () => {
  const config = {
    title: 'UserDetail',
    fields: {
      firstname: {
        name: 'firstname',
        component: 'input',
        type: 'text',
        placeholder: 'Your first name',
        errorMessage: 'First name is required'
      },
      lastname: {
        name: 'lastname',
        component: 'input',
        type: 'text',
        placeholder: 'Your last name',
        errorMessage: 'Last name is required'
      },
      email: {
        name: 'email',
        component: 'input',
        type: 'text',
        placeholder: 'Your email',
        errorMessage: 'email is required'
      },
      dob: {
        name: 'dob',
        component: 'input',
        type: 'text',
        placeholder: 'Your dob'
      },
      mobile: {
        name: 'mobile',
        component: 'input',
        type: 'text',
        placeholder: 'Your mobile'
      },
      address: {
        name: 'address',
        component: 'input',
        type: 'text',
        placeholder: 'address',
        errorMessage: 'Password is required'
      },
      city: {
        name: 'city',
        component: 'input',
        type: 'text',
        placeholder: 'city',
        errorMessage: 'city is required'
      },
      postcode: {
        name: 'postcode',
        component: 'input',
        type: 'text',
        placeholder: 'postcode',
        errorMessage: 'postcode is required'
      },
      country: {
        name: 'country',
        component: 'input',
        type: 'text',
        placeholder: 'country',
        errorMessage: 'country is required'
      }
    }
  };
  return config;
};

const userDetailValidation = createValidator({
  firstname: required,
  email: required,
});

export default { getUserDetailFormConfig, userDetailValidation: memoize(10)(userDetailValidation) };
