import type { Metadata } from "next";

import "./globals.css";
import Modal from "@/components/Modal";

export const metadata: Metadata = {
  title: "RSZ Enchanted Todo",
  description: "Site made by Chekiro",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#f5f6f8]">
        <Modal />
        {children}
      </body>
    </html>
  );
}
