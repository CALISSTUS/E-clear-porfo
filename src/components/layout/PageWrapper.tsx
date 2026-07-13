import { cn } from "@/lib/cn";

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export function PageWrapper({ children, className }: PageWrapperProps) {
  return (
    <main id="main-content" className={cn("pt-24 min-h-screen", className)}>
      {children}
    </main>
  );
}
