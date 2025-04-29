import { useEffect, useRef } from "react";

export function useTitle(title) {
  const documentDefined = typeof document !== "undefined";
  const originalTitle = useRef(documentDefined ? document.title : null);

  useEffect(() => {
    if (!documentDefined) return;
    const newTitle = originalTitle.current;

    if (document.title !== title) document.title = title;

    return () => {
      document.title = newTitle;
    };
  }, [documentDefined, title]);
}
