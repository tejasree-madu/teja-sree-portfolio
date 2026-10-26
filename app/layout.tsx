import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Madu Teja Sree | AI Engineer",
  description:
    "Portfolio of Madu Teja Sree — AI Engineer focused on Generative AI, RAG, NLP-to-SQL, machine learning, data pipelines, and MLOps.",
  keywords: ["AI Engineer", "Generative AI", "RAG", "Machine Learning", "MLOps", "Python"],
  authors: [{ name: "Madu Teja Sree" }],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
