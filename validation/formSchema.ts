import * as z from "zod";

export const formSchema = z.object({
  fullname: z
    .string()
    .min(2, {
      message: "Imię i nazwisko powinny zawierać co najmniej 2 znaki.",
    })
    .max(100, {
      message: "Imię i nazwisko powinny zawierać maksymalnie 100 znaków.",
    }),
  phone: z
    .string()
    .min(2, {
      message: "Email powinien zawierać co najmniej 2 znaki.",
    })
    .email({ message: "Adres e-mail nie jest poprawny." }),
  city: z
    .string()
    .min(2, {
      message: "Email powinien zawierać co najmniej 2 znaki.",
    })
    .email({ message: "Adres e-mail nie jest poprawny." }),
});
