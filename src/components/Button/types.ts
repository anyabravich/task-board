import { ReactNode } from "react";

export interface IButton {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary";
}
