import { useEffect, useState } from "react";
export default function useIdle(timeout) {
  const [isIdle, setIsIdle] = useState(false);
  useEffect(() => {
    let timer;
    timer = setTimeout(() => {
      setIsIdle(true);
    }, timeout);
    function handleActivity() {
      clearTimeout(timer);
      setIsIdle(false);
      timer = setTimeout(() => {
        setIsIdle(true);
      }, timeout);
    }
    window.addEventListener("mousemove", handleActivity);
    window.addEventListener("keydown", handleActivity);
  }, []);
  return isIdle;
}
