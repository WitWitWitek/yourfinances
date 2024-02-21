import { Wrapper } from "../ui";
import Image from "next/image";

export default function Offer() {
  return (
    <Wrapper className="h-screen py-20 flex gap-5" selector="offer">
      <div className="h-full w-[50%] flex gap-5 text-justify">
        <div className="h-full flex flex-col justify-center gap-20">
          <h2 className="text-5xl font-bold">Dlaczego warto?</h2>
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
      <div className="relative w-[45%] flex justify-center items-center">
        <div className="relative h-[350px] aspect-square">
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
