'use client';

import { useRef } from "react";
import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";

export default function Home() {
  const heroBannerRef = useRef(null);

  const handleFindJobsClick = () => {
    if (heroBannerRef.current) {
      (heroBannerRef.current as any).focusSearch();
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Header onFindJobsClick={handleFindJobsClick} />
      <HeroBanner ref={heroBannerRef} />
    </div>
  );
}
