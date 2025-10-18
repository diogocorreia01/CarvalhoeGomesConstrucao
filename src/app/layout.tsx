import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
title: "Aqui à Tua Remodelação — Obras & Reabilitação",
description: "Remodelações gerais, pinturas, canalização e eletricidade. Orçamentos grátis.",
openGraph: {
title: "Aqui à Tua Remodelação — Obras & Reabilitação",
description: "Remodelações gerais, pinturas, canalização e eletricidade. Orçamentos grátis.",
type: "website",
},
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="pt">
<body className={`${inter.className} min-h-screen flex flex-col bg-neutral-50 text-neutral-900`}>
<Navbar />
<main className="flex-1">{children}</main>
<Footer />
</body>
</html>
);
}