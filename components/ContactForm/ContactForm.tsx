"use client";

import * as z from "zod";
import { formSchema } from "@/validation/formSchema";
import useContactForm from "@/hooks/useForm";
import {
  Input,
  Wrapper,
  Form,
  FormField,
  FormMessage,
  FormItem,
  FormLabel,
  FormControl,
  Button,
} from "@/components/ui";

export default function ContactForm() {
  const { form, sendContactFormHandler, isLoading } = useContactForm();

  const onSubmit = async (values: z.infer<typeof formSchema>) =>
    sendContactFormHandler(values);

  return (
    <Wrapper className="h-min-screen lg:h-screen py-14" selector="kontakt">
      <div className="md:w-[60%] h-full flex flex-col justify-center gap-5">
        <h2 className="text-4xl sm:text-5xl font-bold mt-8 md:mt-0">
          Formularz kontaktowy
        </h2>
        <p className="text-muted-foreground">
          Wypełnij poniższy formularz, a doradca oddzwoni z informacją o
          elastycznych opcjach pożyczek, w tym konsolidacji kredytu.
        </p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="fullname"
              disabled={isLoading}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary font-bold text-2xl">
                    Imię i nazwisko:
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Jan Kowalski"
                      className="text-primary text-lg"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
            <FormField
              control={form.control}
              name="phone"
              disabled={isLoading}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary font-bold text-2xl">
                    Numer telefonu:
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="+ 48 000 000 123"
                      className="text-primary text-lg"
                      type="text"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
            <FormField
              control={form.control}
              name="city"
              disabled={isLoading}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-primary font-bold text-2xl">
                    Miejscowość:
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Warszawa"
                      className="text-primary text-lg"
                      type="text"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>

            <Button type="submit" disabled={isLoading}>
              Wyślij zgłoszenie
            </Button>
          </form>
        </Form>
      </div>
    </Wrapper>
  );
}
