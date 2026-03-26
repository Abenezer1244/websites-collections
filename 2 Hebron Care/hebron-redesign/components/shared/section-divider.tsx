import { cn } from "@/lib/utils";

export function SectionDivider({ className }: { className?: string }) {
  return (
    <div className={cn("max-w-7xl mx-auto px-6", className)}>
      <div className="h-px bg-gradient-to-r from-transparent via-[var(--color-teal)]/15 to-transparent" />
    </div>
  );
}
