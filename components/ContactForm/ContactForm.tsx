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

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left text-primary font-bold text-md">
                  Zgody
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-5">
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
                          />
                        </FormControl>
                        <div>
                          <FormLabel>
                            Wyrażam zgodę na przetwarzanie moich danych
                            osobowych wskazanych w niniejszym formularzu w
                            celach marketingu bezpośredniego podmiotów
                            współpracujących.
                          </FormLabel>
                          <FormMessage />
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
                          />
                        </FormControl>
                        <div>
                          <FormLabel>
                            Wyrażam zgodę na otrzymywanie informacji handlowych
                            na wskazany numer telefonu.
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  ></FormField>

                  <div className="text-justify text-muted-foreground">
                    {`Administratorem danych osobowych jest F.H.U. Adam Wyszyński.
              Przetwarzanie polega na udostępnieniu przekazanych danych
              osobowych podmiotom współpracującym. Danymi osobowymi, które
              powierzam są: a) Imię i nazwisko; d) Numer telefonu; c)
              Miejscowość zamieszkania Dane osobowe będą przetwarzane przez
              Administratora wyłącznie przez ich udostępnienie, jako odrębnemu
              administratorowi danych osobowych. Wycofanie przeze mnie zgody
              wymaga złożenia przeze mnie pisemnego oświadczenia.`}
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left text-primary font-bold text-md">
                  Pełne informacje na temat przetwarzania danych osobowych
                </AccordionTrigger>
                <AccordionContent>
                  <div className="text-justify text-muted-foreground flex flex-col gap-3">
                    <h3 className="font-bold text-primary">
                      Kto będzie przetwarzał dane osobowe i jak się z nim
                      skontaktować
                    </h3>{" "}
                    <p>
                      1. F.H.U. Adam Wyszyński, Leśna 13a, 66-008 Świdnica jest
                      administratorem danych osobowych w rozumieniu
                      Rozporządzenia Parlamentu Europejskiego i Rady (UE)
                      2016/679 z 27.04.2016 w sprawie ochrony osób fizycznych w
                      związku z przetwarzaniem danych osobowych i w sprawie
                      swobodnego przepływu takich danych oraz uchylenia
                      dyrektywy 95/46/WE („RODO”). Żądania, oświadczenia i
                      wszelką korespondencję dotyczącą danych osobowych należy
                      kierować pocztą..
                    </p>{" "}
                    <h3 className="font-bold text-primary">
                      Cele i podstawy prawne przetwarzania danych osobowych
                    </h3>{" "}
                    <p>
                      3. Podanie danych jest dobrowolne, ale niezbędne aby
                      podmioty współpracujące mogły przedstawić osobie
                      zainteresowanej ofertę.
                    </p>{" "}
                    <p>
                      4. Dane osobowe są lub mogą być przetwarzane, o ile
                      przetwarzanie danych dotyczyć będzie określonych poniżej
                      celów:I. w celu wskazanym w treści wyrażonej zgody - na
                      podstawie art. 6 ust. 1 lit. a RODO,II. w celu realizacji
                      prawnie uzasadnionych interesów FHU Adam Wysyzński lub
                      strony trzeciej, takich jak obsługa procesów wewnętrznych
                      związanych z prowadzeniem działalności gospodarczej,
                      obsługa postępowań cywilnych i egzekucyjnych,
                      administracyjnych, karnych – na podstawie art. 6 ust. 1
                      lit. f RODO,III. w celu wykonania obowiązków wynikających
                      z przepisów prawa – na podstawie art. 6 ust. 1 lit. c
                      RODO.
                    </p>
                    <h3 className="font-bold text-primary">
                      Komu dane osobowe będą przekazywane
                    </h3>
                    <p>
                      5. Dane osobowe mogą być przekazywane podmiotom
                      świadczącym usługi doradztwa finansowego.
                    </p>
                    <h3 className="font-bold text-primary">
                      Jak długo dane osobowe będą przetwarzane
                    </h3>
                    <p>
                      7. Dane osobowe będą przetwarzane do czasu realizacji celu
                      określonego w zgodzie lub do momentu cofnięcia zgody, w
                      zależności od tego co nastąpi wcześniej, a następnie przez
                      okres przedawnienia roszczeń oraz do momentu zakończenia
                      postępowań cywilnych, egzekucyjnych, administracyjnych i
                      karnych wymagających przetwarzania danych.
                    </p>
                    <h3 className="font-bold text-primary">
                      Jakie prawa przysługują w odniesieniu do danych osobowych
                    </h3>
                    <p>
                      8. Przysługuje Pani/Panu prawo sprostowania danych,
                      dostępu do danych, do usunięcia danych, do ograniczenia
                      przetwarzania danych, do przenoszenia danych dostarczonych
                      administratorowi.
                    </p>{" "}
                    <p>
                      10. W odniesieniu do danych przetwarzanych na podstawie
                      zgody – przysługuje Pani/Panu prawo do cofnięcia zgody w
                      dowolnym momencie. Cofnięcie zgody nie wpływa na zgodność
                      z prawem przetwarzania, które nastąpiło przed wycofaniem
                      zgody.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Button type="submit" disabled={isLoading}>
              Wyślij zgłoszenie
            </Button>
          </form>
        </Form>
      </div>
    </Wrapper>
  );
}
