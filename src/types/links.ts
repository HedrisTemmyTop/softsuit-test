import { ReactNode } from "react";

export interface Link {
  id: number;
  icon: ReactNode;
  label: string[];
  children?: {
    element: string[];
  };
}
