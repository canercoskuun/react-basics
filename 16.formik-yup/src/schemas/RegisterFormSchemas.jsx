import * as yup from 'yup';

export const registerFormSchemas = yup.object().shape({
    email: yup.string().email('Geçerli bir email adresi giriniz').required('Email alanı zorunludur'),

    age: yup.number().positive("Pozitif bir deger giriniz").integer("Tam sayı giriniz").required("Yaş alanı zorunludur"),

    password: yup.string().required("Şifre alanı zorunludur"),

    confirmPassword: yup.string().required("Şifre tekrarı alanı zorunludur").oneOf([yup.ref('password', yup.password)], "Şifreler uyuşmuyor"),

    term: yup.boolean().required("Kullanıcı sözleşmesini kabul etmelisiniz")

})