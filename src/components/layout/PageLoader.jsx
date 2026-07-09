"use client";

import { useEffect, useState } from "react";
import Preloader from "../ui/Preloader";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return <Preloader loading={loading} />;
}