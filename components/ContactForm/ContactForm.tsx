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
  Checkbox,
  Accordion,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui";
import { AccordionItem } from "@radix-ui/react-accordion";
import Information from "./Information/Information";
import { AgreementsEnum } from "@/constants";
import Agreement from "./Agreement/Agreement";
import { Phone, UserRound, Home, Loader2 } from "lucide-react";

export default function ContactForm() {
  const { form, sendContactFormHandler, isLoading } = useContactForm();
  const onSubmit = async (values: z.infer<typeof formSchema>) =>
    sendContactFormHandler(values);

  return (
    <Wrapper className="h-min-screen py-14" selector="kontakt">
      <div className="md:w-[60%] h-full flex flex-col justify-center gap-5">
        <h2 className="text-4xl sm:text-5xl font-bold mt-8">
          Zostaw kontakt. Oddzwonimy!
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
                  <FormLabel className="text-primary font-bold text-xl  flex items-center">
                    <UserRound strokeWidth={2} className="inline mr-1" />
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
                  <FormLabel className="text-primary font-bold text-xl flex items-center">
                    <Phone strokeWidth={2} className="inline mr-1" /> Numer
                    telefonu:
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
                  <FormLabel className="text-primary font-bold text-xl flex items-center">
                    <Home strokeWidth={2} className="inline mr-1" />
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
            <FormField
              control={form.control}
              name="dataAgreement"
              disabled={isLoading}
              render={({ field }) => (
                <FormItem className="flex flex-row items-start gap-3">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="mt-2.5"
                    />
                  </FormControl>
                  <div>
                    <FormLabel>{AgreementsEnum.personal}</FormLabel>
                    <p className="mt-2">
                      <FormMessage className="bg-destructive text-white inline p-1 rounded-sm" />
                    </p>
                  </div>
                </FormItem>
              )}
            ></FormField>

            <FormField
              control={form.control}
              name="phoneAgreement"
              disabled={isLoading}
              render={({ field }) => (
                <FormItem className="flex flex-row items-start gap-3">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="mt-2.5"
                    />
                  </FormControl>
                  <div>
                    <FormLabel>{AgreementsEnum.phone}</FormLabel>
                    <p className="mt-2">
                      <FormMessage className="bg-destructive text-white inline p-1 rounded-sm" />
                    </p>
                  </div>
                </FormItem>
              )}
            ></FormField>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left text-primary font-bold text-md">
                  Informacja o administratorze danych
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-5">
                  <Agreement />
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left text-primary font-bold text-md">
                  Pełne informacje na temat przetwarzania danych osobowych
                </AccordionTrigger>
                <AccordionContent>
                  <Information />
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Button type="submit" size="lg" disabled={isLoading}>
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Wyślij zgłoszenie
            </Button>
          </form>
        </Form>
      </div>
    </Wrapper>
  );
}
