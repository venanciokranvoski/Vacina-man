import * as yup from 'yup';

export const shemaSignUp = yup.object({
    firstName: yup.string().required('Campo obrigatório'),
    lastName: yup.string().required('Campo obrigatório'),
    email: yup.string().email('Email inválido').required('Campo obrigatório'),
});