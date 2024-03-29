import Link from "next/link";
import { Wrapper, buttonVariants } from "../ui";
import Image from "next/image";
import { MailCheck } from "lucide-react";

export default function Navbar() {
  return (
    <div className="fixed top-0 inset-x-0 h-14 bg-primary z-50">
      <header className="h-full">
        <Wrapper className="h-full flex flex-row justify-between items-center py-1">
          <div className="ml-4 flex lg:ml-0">
            <Link
              href="/"
              className="flex flex-row items-center gap-3 font-bold text-white"
            >
              <Image
                src="/logo.svg"
                alt="Znak firmowy Twoje Finanse "
                width={40}
                height={40}
              />
              <div className="tracking-wider">Twoje Finanse</div>
            </Link>
          </div>

          <nav className="flex flex-row items-center gap-3">
            <Link
              href="/#kontakt"
              className={buttonVariants({ variant: "secondary" })}
            >
              <MailCheck strokeWidth={1.2} className="inline mr-1" /> Kontakt
            </Link>
          </nav>
        </Wrapper>
      </header>
    </div>
  );
}
