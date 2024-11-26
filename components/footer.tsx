import { cn } from "@/lib/utils"
import Link from "next/link"

export function Footer({ className }: { className?: string }) {
  return (
    <footer className={cn("border-t", className)}>
      <div className="container flex h-14 items-center justify-center text-sm">
        Built with{" "}
        <span className="mx-1 text-red-500" aria-label="love">
          ❤️
        </span>{" "}
        by{" "}
        <Link 
          href="https://codeforpakistan.org" 
          target="_blank"
          rel="noopener noreferrer"
          className="ml-1 font-medium underline underline-offset-4 hover:text-primary"
        >
          Code For Pakistan
        </Link>
      </div>
    </footer>
  )
} 