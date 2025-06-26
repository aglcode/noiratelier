"use client";
import { TextRevealByWord } from "@/components/ui/text-reveal";
import { cn } from "@/lib/utils";
import * as React from "react"
import { useState } from "react"
import { TextScramble } from "@/components/ui/text-scramble"
import { RevealImageList } from "@/components/ui/reveal-images"

export function TextRevealDemo() {
  return (
    <div className="min-h-[200vh] w-full relative">
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-full max-w-5xl mx-auto p-4">
          <div
            className={cn(
              "rounded-lg w-full h-[500px]",
              "border border-neutral-200 dark:border-neutral-800",
              "bg-white/50 dark:bg-black/50 backdrop-blur-sm",
              "flex items-center justify-center",
              "pointer-events-auto"
            )}
          >
            <TextRevealByWord
              text="Noir Atelier redefines modern fashion with a distinctive edge. ..."
              className=""
            />
          </div>
        </div>
      </div>

      <div className="h-[200vh]" aria-hidden="true" />
    </div>
  );
}

export function BasicDemo() {
  return (
    <div className="flex justify-center">
      <TextScramble className="font-mono text-sm uppercase">
        Text Scramble
      </TextScramble>
    </div>
  )
}

export function CustomTriggerDemo() {
  const [isTrigger, setIsTrigger] = useState(false)

  return (
    <div className="flex justify-center">
      <a
        href="#"
        className="text-zinc-500 transition-colors hover:text-black dark:hover:text-white"
      >
        <TextScramble
          className="text-sm"
          as="span"
          speed={0.01}
          trigger={isTrigger}
          onHoverStart={() => setIsTrigger(true)}
          onScrambleComplete={() => setIsTrigger(false)}
        >
          Tyler, The Creator - I Hope You Find Your Way Home
        </TextScramble>
      </a>
    </div>
  )
}

export function CustomCharacterDemo() {
  return (
    <div className="flex justify-center">
      <TextScramble
        className="font-mono text-sm"
        duration={1.2}
        characterSet=". "
      >
        Generating the interface...
      </TextScramble>
    </div>
  )
}

function RevealImageListDemo() {
  return (
    <div className="block">
      <RevealImageList />
    </div>
  );
}

export const demos = [
  {
    name: "Basic",
    description: "Basic text scramble with default settings",
    component: BasicDemo,
  },
  {
    name: "Custom Trigger",
    description: "Text scramble triggered on hover",
    component: CustomTriggerDemo,
  },
  {
    name: "Custom Character Set", 
    description: "Text scramble with custom character set and duration",
    component: CustomCharacterDemo,
  },
  {
    name: "Reveal Image List",
    description: "Reveal image list component",
    component: RevealImageListDemo,
  }
] 