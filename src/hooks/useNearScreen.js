import { useRef, useState, useEffect } from "react";

function useNearScreen({ distance = "100px", externalRef, once = true } = {}) {
  const [isNearScreen, setShow] = useState(false);
  const fromRef = useRef();

  useEffect(() => {
    let observer;
    const element = externalRef ? externalRef.current : fromRef.current;

    const onChange = (entries) => {
      const el = entries[0];
      if (el.isIntersecting) {
        once && observer.disconnect();
        setShow(true);
      } else {
        !once && setShow(false);
      }
    };
    observer = new IntersectionObserver(onChange, {
      rootMargin: distance,
    });
    observer.observe(element);
  });
  return { isNearScreen, fromRef };
}

export default useNearScreen;
