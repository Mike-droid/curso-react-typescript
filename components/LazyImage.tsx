import { useRef, useEffect, useState, ImgHTMLAttributes } from "react";
//import Image from "next/image";

type LazyImageProps = { src: string };
type Props = LazyImageProps & ImgHTMLAttributes<HTMLImageElement>;

export const LazyImage = ({ src, ...imgProps }: Props): JSX.Element => {
  const node = useRef<HTMLImageElement>(null);
  const [source, setSource] = useState(
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
  );

  useEffect(() => {
    // new observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // onIntersection -> console.log
        if (entry.isIntersecting) {
          setSource(src);
        }
      });
    });

    // observer node
    if (node.current) {
      observer.observe(node.current);
    }

    //deconect
    return () => {
      observer.disconnect();
    };
  }, [src]);

  return (
    <img
      ref={node}
      src={source}
      alt="fox"
      {...imgProps}
    />
  );
};
