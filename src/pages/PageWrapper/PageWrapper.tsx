import { MyComponent } from "@/components/molecules/MyComponent/MyComponent";
import React from "react";

export function PageWrapper() {
  return (
    <article className="w-full pt-20">
      <MyComponent />
    </article>
  );
}
