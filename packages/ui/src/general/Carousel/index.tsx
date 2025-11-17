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

/**
 * Root Carousel component that provides scrollable carousel behavior using Embla under the hood.
 *
 * This component initializes the carousel, sets up scroll controls, and provides context to nested components.
 * It supports both horizontal and vertical orientation, keyboard navigation, plugin injection, and external API access.
 *
 * @component
 * @param {ComponentProps<'div'> & CarouselProps} props - Props for the Carousel container.
 * @param {'horizontal' | 'vertical'} [props.orientation='horizontal'] - Direction of scroll.
 * @param {CarouselOptions} [props.opts] - Embla carousel options (passed directly to `useEmblaCarousel`).
 * @param {CarouselPlugin} [props.plugins] - Optional Embla plugins to extend functionality.
 * @param {(api: CarouselApi) => void} [props.setApi] - Callback to expose the Embla API instance externally.
 * @param {string} [props.className] - Optional additional class names.
 * @param {React.ReactNode} props.children - Nested components (usually `CarouselContent`, `CarouselItem`, and nav buttons).
 * @returns {JSX.Element} The carousel container wrapped in context.
 *
 * @example
 * <Carousel opts={{ loop: true }}>
 *   <CarouselContent>
 *     <CarouselItem>Slide 1</CarouselItem>
 *     <CarouselItem>Slide 2</CarouselItem>
 *   </CarouselContent>
 *   <CarouselPrevious />
 *   <CarouselNext />
 * </Carousel>
 */
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

/**
 * Wrapper for the scrollable content of the carousel.
 * Applies orientation-based styling and connects the carousel ref from context.
 *
 * @component
 * @param {ComponentProps<'div'>} props - Standard div props.
 * @param {string} [props.className] - Additional class names for inner carousel wrapper.
 * @returns {JSX.Element} Scrollable carousel track container.
 *
 * @example
 * <CarouselContent>
 *   <CarouselItem>1</CarouselItem>
 *   <CarouselItem>2</CarouselItem>
 * </CarouselContent>
 */
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

/**
 * Represents a single slide within the carousel.
 * Applies orientation-specific padding and accessibility roles.
 *
 * @component
 * @param {ComponentProps<'div'>} props - Standard div props.
 * @param {string} [props.className] - Optional class names.
 * @returns {JSX.Element} A single carousel slide.
 *
 * @example
 * <CarouselItem>Slide Content</CarouselItem>
 */
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

/**
 * Navigation button to scroll to the previous slide.
 * Automatically disabled when the carousel cannot scroll backward.
 *
 * @component
 * @param {ComponentProps<typeof Button>} props - Props passed to the underlying `Button` component.
 * @param {string} [props.className] - Optional additional class names.
 * @param {'icon' | 'small' | 'large' | ...} [props.size='icon'] - Button size (inherited from design system).
 * @returns {JSX.Element} Previous button with left arrow icon.
 *
 * @example
 * <CarouselPrevious />
 */
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

/**
 * Navigation button to scroll to the next slide.
 * Automatically disabled when the carousel cannot scroll forward.
 *
 * @component
 * @param {ComponentProps<typeof Button>} props - Props passed to the underlying `Button` component.
 * @param {string} [props.className] - Optional additional class names.
 * @param {'icon' | 'small' | 'large' | ...} [props.size='icon'] - Button size (inherited from design system).
 * @returns {JSX.Element} Next button with right arrow icon.
 *
 * @example
 * <CarouselNext />
 */

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
