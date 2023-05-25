import * as yup from 'yup';

export const shemaSignUpStep2 = yup.object({
    password: yup.string().required('Campo obrigatório').min(3, 'Minimo 3 caracteres'),
    confirm_password: yup.string().required('Campo obrigatório').min(3, 'Minimo 3 caracteres').oneOf([yup.ref('password')], "Senhas diferentes"),
});