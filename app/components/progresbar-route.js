"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export const useNavigationEvent = () => {
  const pathname = usePathname(); // Get current route

  // Save pathname on component mount into a REF
  const savedPathNameRef = useRef(pathname);

  useEffect(() => {
    // If REF has been changed, do the stuff
    if (savedPathNameRef.current !== pathname) {
      NProgress.start();
      savedPathNameRef.current = pathname;
    }
  }, [pathname]);
};
