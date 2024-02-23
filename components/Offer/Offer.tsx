import { Wrapper } from "../ui";
import Image from "next/image";

export default function Offer() {
  return (
    <Wrapper
      className="h-min-screen lg:h-screen py-14 flex flex-col md:flex-row gap-5"
      selector="oferta"
    >
      <div className="h-full w-full md:w-[50%] gap-5 text-justify">
        <div className="h-full flex flex-col justify-center gap-10 md:gap-20">
          <h2 className="text-4xl md:text-5xl font-bold mt-8 md:mt-0">
            Dlaczego warto?
          </h2>
          <ul className="flex flex-col gap-5 text-lg">
            <li className="text-muted-foreground">
              <span className="text-blue-600">
                <b>Profesjonalizm i zaufanie</b>
              </span>{" "}
              - Współpracujemy z renomowanymi placówkami, które od lat oferują
              swoim klientom usługi na wysokim poziomie.
            </li>
            <li className="text-muted-foreground">
              <span className="text-blue-600">
                <b>Dostosowane rozwiązania</b>
              </span>{" "}
              - Nasza oferta jest elastyczna i dopasowana do indywidualnych
              potrzeb każdego klienta. Konkurencyjne warunki - tak abyś mógł
              cieszyć się korzystnymi warunkami finansowymi.
            </li>
            <li className="text-muted-foreground">
              <span className="text-blue-600">
                <b>Konsolidacja kredytu</b>
              </span>{" "}
              - Jeśli masz wiele kredytów i chciałbyś je połączyć w jedną
              wygodną ratę, zapytaj nas o opcje konsolidacji kredytu BEZ
              PROWIZJI.
            </li>
          </ul>
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center">
        <div className="relative w-[200px] md:w-[300px] aspect-square">
          <Image
            src="/logo-large.webp"
            alt="Wykres wzrastających zysków"
            fill
          ></Image>
        </div>
      </div>
    </Wrapper>
  );
}
