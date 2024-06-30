import { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return <div className="h-screen w-full max-w-7xl mx-auto">{children}</div>;
}
