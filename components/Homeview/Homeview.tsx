import { Wrapper } from "@/components/ui";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui";

export default function Homeview() {
  return (
    <Wrapper className="h-min-screen lg:h-screen flex flex-col lg:flex-row justify-center items-center gap-5 overflow-hidden pt-14">
      <div className="h-full text-center flex flex-col justify-center max-w-3xl gap-5">
        <h1 className="text-5xl mt-8 lg:mt-0 font-bold tracking-tight text-gray-900 sm:text-6xl">
          Bezpieczna pożyczka dla <span className="text-blue-600">Twoich</span>{" "}
          potrzeb!
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
        <div className="flex flex-row gap-5 justify-center">
          <Link
            href="/#kontakt"
            className={buttonVariants({ variant: "default", size: "lg" })}
          >
            Skontaktuj się z nami
          </Link>
          <Link
            href="/#oferta"
            className={buttonVariants({
              variant: "outline",
              size: "lg",
              className: "border-slate-950",
            })}
          >
            Szczegóły
          </Link>
        </div>
      </div>
      <div className="relative w-full md:w-[40%] flex items-center justify-center">
        <div className="relative w-[300px] md:w-[400px] lg:w-[500px] aspect-video polygon">
          <Image
            src="/hero-image.webp"
            alt="Twoje finanse zdjęcie powitalne"
            fill
          ></Image>
        </div>
      </div>
    </Wrapper>
  );
}
