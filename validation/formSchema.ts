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
    .regex(/^(\+|\d)[0-9]{7,16}$/, {
      message: "Nieprawidłowy numer telefonu.",
    }),
  city: z
    .string()
    .min(2, {
      message: "Nazwa miejscowości powinna zawierać co najmniej 2 znaki.",
    })
    .max(200, {
      message: "Nazwa miejscowości powinna zawierać maksymalnie 200 znaków.",
    }),
});

export type TFormSchema = z.infer<typeof formSchema>;
