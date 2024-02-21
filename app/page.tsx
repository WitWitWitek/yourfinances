"use client";

import { Wrapper } from "@/components/ui";
import Image from "next/image";
import { Button } from "@/components/ui";
import ContactForm from "@/components/ContactForm/ContactForm";
import { buttonVariants } from "@/components/ui";
import Offer from "@/components/Offer/Offer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Wrapper className="h-screen flex flex-row justify-center items-center gap-5 overflow-hidden pt-14">
        <div className="h-full text-center flex flex-col justify-center max-w-3xl gap-5">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Bezpieczna pożyczka dla{" "}
            <span className="text-blue-600">Twoich</span> potrzeb!
          </h1>
          <div className="text-lg text-muted-foreground flex flex-col gap-2">
            <p>✔ Chcesz zmniejszyć raty swojego kredytu gotówkowego?</p>{" "}
            <p>✔ Potrzebujesz dodatkowych środków?</p>
            <p>
              ✔ A może interesuje Cię połączenie swoich zobowiązań w jedno -
              korzystniejsze?
            </p>
            <p className="text-primary">
              <b>Jesteśmy tu, aby Ci pomóc.</b>
            </p>
            <p className="text-primary">
              <b>Nie pobierzemy od Ciebie prowizji!</b>
            </p>
          </div>
          <div>
            <Link
              href="/#offer"
              className={buttonVariants({ variant: "default", size: "lg" })}
            >
              Wejdź!
            </Link>
          </div>
        </div>
        <div className="relative w-[45%]">
          <div className="relative h-[250px] aspect-video polygon">
            <Image
              src="/hero-image.webp"
              alt="Twoje finanse zdjęcie powitalne"
              fill
            ></Image>
          </div>
        </div>
      </Wrapper>
      <Offer />
      <ContactForm />
    </>
  );
}
