import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  ComponentProps,
  createContext,
  KeyboardEvent,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import { Button } from "../../buttons/Button";
import styles from "./styles.module.css";

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
};

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
} & CarouselProps;

const CarouselContext = createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = useContext(CarouselContext);
  if (!context)
    throw new Error("useCarousel must be used within a <Carousel />");
  return context;
}

function Carousel({
  orientation = "horizontal",
  opts,
  setApi,
  plugins,
  className = "",
  children,
  ...props
}: ComponentProps<"div"> & CarouselProps) {
  const [carouselRef, api] = useEmblaCarousel(
    { ...opts, axis: orientation === "horizontal" ? "x" : "y" },
    plugins,
  );
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback((api: CarouselApi) => {
    if (!api) return;
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  const scrollPrev = useCallback(() => api?.scrollPrev(), [api]);
  const scrollNext = useCallback(() => api?.scrollNext(), [api]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext],
  );

  useEffect(() => {
    if (!api || !setApi) return;
    setApi(api);
  }, [api, setApi]);

  useEffect(() => {
    if (!api) return;
    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);
    return () => {
      api?.off("select", onSelect);
    };
  }, [api, onSelect]);

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api,
        opts,
        orientation:
          orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
      }}
    >
      <div
        onKeyDownCapture={handleKeyDown}
        className={`${styles.root} ${className}`}
        role="region"
        aria-roledescription="carousel"
        data-slot="carousel"
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  );
}

function CarouselContent({ className = "", ...props }: ComponentProps<"div">) {
  const { carouselRef, orientation } = useCarousel();
  const axisClass =
    orientation === "horizontal"
      ? styles.innerHorizontal
      : styles.innerVertical;

  return (
    <div
      ref={carouselRef}
      className={styles.viewport}
      data-slot="carousel-content"
    >
      <div className={`${styles.inner} ${axisClass} ${className}`} {...props} />
    </div>
  );
}

function CarouselItem({ className = "", ...props }: ComponentProps<"div">) {
  const { orientation } = useCarousel();
  const padClass =
    orientation === "horizontal" ? styles.itemPadX : styles.itemPadY;

  return (
    <div
      role="group"
      aria-roledescription="slide"
      data-slot="carousel-item"
      className={`${styles.item} ${padClass} ${className}`}
      {...props}
    />
  );
}

function CarouselPrevious({
  className = "",

  size = "icon",
  ...props
}: ComponentProps<typeof Button>) {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();
  const posClass =
    orientation === "horizontal" ? styles.prevHorizontal : styles.prevVertical;

  return (
    <Button
      data-slot="carousel-previous"
      variant="icon"
      icon={ArrowLeft}
      size={size}
      className={`${styles.navBtn} ${posClass} ${className}`}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    />
  );
}

function CarouselNext({
  className = "",
  size = "icon",
  ...props
}: ComponentProps<typeof Button>) {
  const { orientation, scrollNext, canScrollNext } = useCarousel();
  const posClass =
    orientation === "horizontal" ? styles.nextHorizontal : styles.nextVertical;

  return (
    <Button
      data-slot="carousel-next"
      variant="icon"
      icon={ArrowRight}
      size={size}
      className={`${styles.navBtn} ${posClass} ${className}`}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    />
  );
}

export {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
};
