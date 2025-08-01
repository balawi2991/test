"use client";

interface ChatHeaderProps {
  onMinimize: () => void;
  muted: boolean;
  onToggleMute: () => void;
}

/**
 * ChatHeader
 * Header for the expanded chat window, with logo, status, sound toggle, and minimize.
 */
export default function ChatHeader({
  onMinimize,
  muted,
  onToggleMute,
}: ChatHeaderProps) {
  return (
    <div className="p-2 md:p-4 bg-gray-50 border-b border-gray-200 flex items-center justify-between flex-shrink-0">
      <div className="flex items-center gap-3">
        {/* Placeholder: Replace with real logo if available */}
        <div className="w-10 h-10 bg-[#007BFF] rounded-full flex items-center justify-center text-white font-bold text-lg">
          G
        </div>
        <div>
          <h3 className="text-sm md:text-base font-bold text-[#343A40]">جلو شات</h3>
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 bg-[#28A745] rounded-full"></span>
            <p className="text-xs md:text-sm text-gray-500">متصل الآن</p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button
          className="p-3 min-w-[44px] min-h-[44px] text-gray-500 hover:text-[#007BFF] hover:bg-gray-100 rounded-full transition-colors"
          aria-label={muted ? "تشغيل الصوت" : "إيقاف الصوت"}
          onClick={onToggleMute}
          type="button"
        >
          {!muted ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>
        <button
          className="p-3 min-w-[44px] min-h-[44px] text-gray-500 hover:text-[#007BFF] hover:bg-gray-100 rounded-full transition-colors"
          aria-label="تصغير الدردشة"
          onClick={onMinimize}
          type="button"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
