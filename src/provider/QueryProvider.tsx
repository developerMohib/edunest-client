// client/src/providers/ReactQueryProvider.tsx
"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { useState } from "react";

interface Props {
  children: React.ReactNode;
}

const ReactQueryProvider: React.FC<Props> = ({ children }) => {
  // Ensure QueryClient is created **on the client**, not the server
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
};

export default ReactQueryProvider;
