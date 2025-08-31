'use client';

import { useRef } from "react";
import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";

// Type definition for HeroBanner ref
interface HeroBannerHandle {
  focusSearch: () => void;
}

export default function Home() {
  const heroBannerRef = useRef<HeroBannerHandle>(null);

  const handleFindJobsClick = () => {
    if (heroBannerRef.current) {
      heroBannerRef.current.focusSearch();
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Header onFindJobsClick={handleFindJobsClick} />
      <HeroBanner ref={heroBannerRef} />
    </div>
  );
}
