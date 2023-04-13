import { useRef, useEffect, useState, ImgHTMLAttributes } from "react";
//import Image from "next/image";

type LazyImageProps = {
  src: string,
  onLazyLoad?: ((node: HTMLImageElement) => void),
};
type Props = LazyImageProps & ImgHTMLAttributes<HTMLImageElement>;

export const LazyImage = ({ src, onLazyLoad, ...imgProps }: Props): JSX.Element => {
  const node = useRef<HTMLImageElement>(null);
  const [isLazyLoaded, setIsLazyLoaded] = useState(false);
  const [source, setSource] = useState(
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
  );

  useEffect(() => {
    if (isLazyLoaded) {
      return;
    }

    // new observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || !node.current) {
          return ;
        }
      });
    });

    setSource(src);
    observer.disconnect();
    setIsLazyLoaded(true);

    // observer node
    if (node.current) {
      if (typeof onLazyLoad === "function") {
        onLazyLoad(node.current);
      }
    }

    //disconnect
    return () => {
      observer.disconnect();
    };
  }, [src, onLazyLoad, isLazyLoaded]);

  return (
    <img
      ref={node}
      src={source}
      alt="fox"
      {...imgProps}
    />
  );
};
