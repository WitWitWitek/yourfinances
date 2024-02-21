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
    <Wrapper className="h-screen py-20">
      <div className="w-[60%] h-full flex flex-col justify-around">
        <h2 className="text-5xl font-bold" id="kontakt">
          Formularz kontaktowy
        </h2>
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
