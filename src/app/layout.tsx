import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../styles/globals.css";
import Providers from "../providers/page";
import StyledComponentsRegistry from "../styles/registro";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Front End Challenge",
  description: "Resolução do Front End Challenge",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="pt-br">
        <body className={montserrat.className}>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </body>
      </html>
    </Providers>
  );
}
