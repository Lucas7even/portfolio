import "./globals.css";

export const metadata = {
title: "Lucas Hudson | Portfólio",
description:
"Currículo e portfólio de Lucas Hudson, estudante de Ciência da Computação.",
};

export default function RootLayout({ children }) {
return ( <html lang="pt-BR"> <body>{children}</body> </html>
);
}

