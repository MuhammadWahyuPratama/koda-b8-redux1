import * as yup from "yup";

export const surveySchema = yup.object({
  name: yup
    .string()
    .required("Silahkan masukkan nama.")
    .min(3, "Nama minimal 3 karakter."),

  age: yup
    .number()
    .typeError("Umur harus berupa angka.")
    .required("Silahkan masukkan umur.")
    .positive("Umur tidak valid.")
    .integer("Umur harus berupa bilangan bulat.")
    .min(18, "Minimal umur 18 tahun."),

  gender: yup
    .string()
    .required("Silahkan pilih jenis kelamin."),

  smoker: yup
    .string()
    .required("Silahkan pilih salah satu."),
    
  cigarette: yup.array(),
});