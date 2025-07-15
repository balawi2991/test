"use client";

import data from "@/app/data.json";

/**
 * Footer
 * Simple footer for the main page.
 * Placeholders: Replace with real copyright.
 */
export default function Footer() {
  return (
    <footer className="absolute bottom-0 w-full text-center p-4 text-sm text-gray-500 z-0">
      <div className="flex flex-col items-center justify-center gap-1 sm:flex-row sm:justify-center sm:gap-2">
        <span>
          &copy; {data.footerYear} {data.companyName}. {data.footerText}
        </span>
        <span className="hidden sm:inline-block">|</span>
        <span>
          {data.footerCreatedBy}{" "}
          <a
            href={data.footerCreatorUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#007BFF] hover:underline ml-1"
          >
            {data.footerCreatorName}
          </a>
        </span>
      </div>
    </footer>
  );
}
