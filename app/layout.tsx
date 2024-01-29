"use client";
import { ReactNode, useEffect, useState } from "react";
import { AuthContextProvider } from "./context/AuthContext";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthContextProvider>{children}</AuthContextProvider>
      </body>
    </html>
  );
}
