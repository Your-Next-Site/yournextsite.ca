import Image from "next/image";
import NavBar from "./navbar";
import Title from "./title";

export default function Top() {
  return (
    <header className="w-full flex flex-col pr-[var(--scrollbar-width)]">
      <div className="flex flex-row w-full items-center">
        <div>
          <Image src="/logo5.png" width={250} height={250} alt="logo" />
        </div>
        <Title/>
      </div>
      <NavBar />
    </header>
  );
}
