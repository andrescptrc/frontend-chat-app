import Joi from 'joi';

export const loginSchema = Joi.object({
  email: Joi.string().email({ tlds: false }).required().messages({
    'string.base': 'The email must be a string.',
    'string.empty': 'The email is required.',
    'string.email': 'The email is not valid.',
    'any.required': 'The email is required.'
  }),
  password: Joi.string().min(8).max(16).required().messages({
    'string.base': 'The password must be a string.',
    'string.empty': 'The password is required.',
    'string.min': 'The password must have at least 8 characters.',
    'string.max': 'The password must not exceed the 16 characters.',
    'any.required': 'The password is required.'
  })
});
