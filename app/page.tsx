"use client";
import { useEffect, useState } from "react";

export default function Page() {
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) return;
  else return <h1>Hello, InsFlow!</h1>;
}
