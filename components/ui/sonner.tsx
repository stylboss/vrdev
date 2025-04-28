"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        className:
          "text-green-500 border-green-100 bg-green-50 group toast group-[.toaster]:bg-background group-[.toaster]:border-border group-[.toaster]:shadow-lg",
        // Removed 'description', 'actionButton', 'cancelButton' as they are not part of ToastOptions in your Sonner version
      }}
      {...props}
    />
  );
};

export { Toaster };