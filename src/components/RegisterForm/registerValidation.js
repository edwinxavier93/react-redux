import memoize from 'lru-memoize';
import { createValidator, required, email, match } from 'utils/validation';

const registerValidation = createValidator({
  name: required,
  email: [required, email],
  password: required,
  confirmpassword: [required, match('password')]
});
export default memoize(10)(registerValidation);
