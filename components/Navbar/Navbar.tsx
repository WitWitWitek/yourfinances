import Link from "next/link";
import { Wrapper, buttonVariants } from "../ui";

export default function Navbar() {
  return (
    <div className="fixed top-0 inset-x-0 h-14 bg-primary">
      <header className="h-full">
        <Wrapper className="h-full flex flex-row justify-between items-center py-1">
          <div className={buttonVariants({ variant: "secondary" })}>Logo</div>
          <nav className="flex flex-row items-center gap-3">
            <Link
              href="/#kontakt"
              className={buttonVariants({ variant: "secondary" })}
            >
              Kontakt
            </Link>
          </nav>
        </Wrapper>
      </header>
    </div>
  );
}
