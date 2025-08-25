"use client";

import { ReactNode } from "react";
import { ConvexProvider as ConvexProviderCore } from "convex/react";
import { ConvexReactClient } from "convex/react";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL as string);

export function ConvexProvider({ children }: { children: ReactNode }) {
  return (
    <ConvexProviderCore client={convex}>
      {children}
    </ConvexProviderCore>
  );
}