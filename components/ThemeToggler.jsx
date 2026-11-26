import { CheckIcon, ComputerDesktopIcon, MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useEffect, useId, useRef, useState } from "react";
import { useThemeSelection } from "./PortfolioThemeProvider";

const themeOptions = [
  { value: "system", label: "System", Icon: ComputerDesktopIcon },
  { value: "light", label: "Light", Icon: SunIcon },
  { value: "dark", label: "Dark", Icon: MoonIcon },
];

export default function ThemeToggler() {
  const { selection: savedSelection, setSelection } = useThemeSelection();
  const [mounted, setMounted] = useState(false);
  const selection = mounted ? savedSelection : "system";
  const [isOpen, setIsOpen] = useState(false);
  const pickerRef = useRef(null);
  const triggerRef = useRef(null);
  const panelId = useId();
  const { Icon: SelectedIcon, label: selectedLabel } = themeOptions.find(
    ({ value }) => value === selection
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const dismissOnOutsideClick = (event) => {
      if (!pickerRef.current?.contains(event.target)) setIsOpen(false);
    };

    document.addEventListener("pointerdown", dismissOnOutsideClick);
    return () => document.removeEventListener("pointerdown", dismissOnOutsideClick);
  }, [isOpen]);

  function closePicker() {
    setIsOpen(false);
    triggerRef.current?.focus();
  }

  return (
    <div
      ref={pickerRef}
      className="relative w-fit"
      onBlur={(event) => {
        if (event.relatedTarget && !event.currentTarget.contains(event.relatedTarget)) {
          setIsOpen(false);
        }
      }}
      onKeyDown={(event) => {
        if (isOpen && event.key === "Escape") {
          event.stopPropagation();
          closePicker();
        }
      }}
    >
      <button
        ref={triggerRef}
        type="button"
        aria-label={`Color theme: ${selectedLabel}`}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="grid h-9 w-9 place-items-center rounded-xl border border-violet/25 bg-violet/10 text-[#68449e] transition-colors hover:bg-violet/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-violet dark:text-[#d1b8ff]"
        onClick={() => setIsOpen((open) => !open)}
      >
        <SelectedIcon aria-hidden="true" className="h-5 w-5" />
      </button>
      <div
        id={panelId}
        role="group"
        aria-label="Color theme options"
        hidden={!isOpen}
        className="absolute bottom-full left-0 z-10 mb-2 w-40 rounded-2xl border border-violet/20 bg-white/95 p-1.5 text-sm shadow-xl backdrop-blur-xl dark:bg-[#21192c]/95 md:bottom-auto md:left-auto md:right-0 md:top-full md:mb-0 md:mt-2"
      >
        {themeOptions.map(({ value, label, Icon }) => (
          <button
            key={value}
            type="button"
            aria-pressed={selection === value}
            className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-left text-grayDark transition-colors hover:bg-violet/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-violet aria-pressed:bg-violet/20 aria-pressed:font-semibold dark:text-white"
            onClick={() => {
              setSelection(value);
              closePicker();
            }}
          >
            <Icon aria-hidden="true" className="h-4 w-4 shrink-0 text-[#7750ad] dark:text-[#c5a5fb]" />
            <span className="flex-1">{label}</span>
            {selection === value && (
              <CheckIcon aria-hidden="true" className="h-4 w-4 shrink-0 text-[#7750ad] dark:text-[#c5a5fb]" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
