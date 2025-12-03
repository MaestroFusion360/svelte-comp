// src/lib/__tests__/Carousel.test.ts
import {
  render,
  fireEvent,
  screen,
  act,
  waitFor,
} from "@testing-library/svelte";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import Carousel from "../Carousel.svelte";
import type { CarouselItem } from "$lib/types";

describe("Carousel Component", () => {
  const mockItems: CarouselItem[] = [
    {
      id: "1",
      title: "Slide 1",
      content: "Content for slide 1",
      image: "image1.jpg",
    },
    {
      id: "2",
      title: "Slide 2",
      content: "Content for slide 2",
      image: "image2.jpg",
    },
    {
      id: "3",
      title: "Slide 3",
      content: "Content for slide 3",
      image: "image3.jpg",
    },
  ];

  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe("Rendering", () => {
    it("renders carousel with provided items", () => {
      render(Carousel, { items: mockItems });

      expect(screen.getByLabelText("Carousel")).toBeTruthy();
      expect(screen.getByText("Slide 1")).toBeTruthy();
      expect(screen.getByText("Content for slide 1")).toBeTruthy();
    });

    it("shows empty state when no items provided", () => {
      render(Carousel, { items: [] });

      expect(screen.getByText("No items to display")).toBeTruthy();
    });

    it("applies correct CSS classes based on size prop", () => {
      const { container } = render(Carousel, { items: mockItems, sz: "lg" });

      const carousel = container.firstChild as HTMLElement;
      expect(carousel.classList.contains("text-xl")).toBe(true);
    });

    it("renders images when provided", () => {
      render(Carousel, { items: mockItems });

      const images = screen.getAllByRole("img");
      expect(images.length).toBe(3);
      expect(images[0].getAttribute("src")).toBe("image1.jpg");
      expect(images[0].getAttribute("alt")).toBe("Slide 1");
    });
  });

  describe("Navigation", () => {
    it("navigates to next slide when next button clicked", async () => {
      render(Carousel, { items: mockItems });

      const nextButton = screen.getByLabelText("Next slide");
      await fireEvent.click(nextButton);

      expect(screen.getByText("Slide 2")).toBeTruthy();
      const dots = screen.getAllByLabelText(/Go to slide/);
      expect(dots[1].getAttribute("aria-current")).toBe("true");
      expect(dots[0].getAttribute("aria-current")).toBeNull();
    });

    it("navigates to previous slide when prev button clicked", async () => {
      render(Carousel, { items: mockItems });

      const nextButton = screen.getByLabelText("Next slide");
      await fireEvent.click(nextButton);

      const prevButton = screen.getByLabelText("Previous slide");
      await fireEvent.click(prevButton);

      const dots = screen.getAllByLabelText(/Go to slide/);
      expect(dots[0].getAttribute("aria-current")).toBe("true");
      expect(dots[1].getAttribute("aria-current")).toBeNull();
    });

    it("wraps around when navigating past last slide", async () => {
      render(Carousel, { items: mockItems });

      const nextButton = screen.getByLabelText("Next slide");

      await fireEvent.click(nextButton);
      await fireEvent.click(nextButton);
      await fireEvent.click(nextButton);

      const dots = screen.getAllByLabelText(/Go to slide/);
      expect(dots[0].getAttribute("aria-current")).toBe("true");
      expect(dots[2].getAttribute("aria-current")).toBeNull();
    });

    it("wraps around when navigating before first slide", async () => {
      render(Carousel, { items: mockItems });

      const prevButton = screen.getByLabelText("Previous slide");
      await fireEvent.click(prevButton);

      const dots = screen.getAllByLabelText(/Go to slide/);
      expect(dots[2].getAttribute("aria-current")).toBe("true");
      expect(dots[0].getAttribute("aria-current")).toBeNull();
    });

    it("navigates to specific slide when dot clicked", async () => {
      render(Carousel, { items: mockItems });

      const dotButtons = screen.getAllByLabelText(/Go to slide/);
      await fireEvent.click(dotButtons[2]);

      const dots = screen.getAllByLabelText(/Go to slide/);
      expect(dots[2].getAttribute("aria-current")).toBe("true");
      expect(dots[0].getAttribute("aria-current")).toBeNull();
    });
  });

  describe("Edge Cases", () => {
    it("adjusts current index when items array changes", async () => {
      const { rerender } = render(Carousel, { items: mockItems });

      const nextButton = screen.getByLabelText("Next slide");
      await fireEvent.click(nextButton);

      const dots = screen.getAllByLabelText(/Go to slide/);
      expect(dots[1].getAttribute("aria-current")).toBe("true");

      rerender({ items: [mockItems[0]] });

      await waitFor(() => {
        expect(screen.queryByLabelText(/Go to slide/)).toBeNull();
      });
      expect(screen.getByText("Slide 1")).toBeTruthy();
    });

    it("handles rapid consecutive navigation", async () => {
      render(Carousel, { items: mockItems });

      const nextButton = screen.getByLabelText("Next slide");

      await fireEvent.click(nextButton);
      await fireEvent.click(nextButton);
      await fireEvent.click(nextButton);
      await fireEvent.click(nextButton);

      const dots = screen.getAllByLabelText(/Go to slide/);
      expect(dots[1].getAttribute("aria-current")).toBe("true");
    });
  });

  describe("Touch Navigation", () => {
    it("navigates to next slide on swipe left", async () => {
      render(Carousel, { items: mockItems });

      const carousel = screen.getByLabelText("Carousel");

      await fireEvent.touchStart(carousel, {
        touches: [{ clientX: 100 }],
      });
      await fireEvent.touchEnd(carousel, {
        changedTouches: [{ clientX: 50 }],
      });

      expect(screen.getByText("Slide 2")).toBeTruthy();
    });

    it("navigates to previous slide on swipe right", async () => {
      render(Carousel, { items: mockItems });

      const nextButton = screen.getByLabelText("Next slide");
      await fireEvent.click(nextButton);

      const carousel = screen.getByLabelText("Carousel");

      await fireEvent.touchStart(carousel, {
        touches: [{ clientX: 50 }],
      });
      await fireEvent.touchEnd(carousel, {
        changedTouches: [{ clientX: 100 }],
      });

      expect(screen.getByText("Slide 1")).toBeTruthy();
    });

    it("ignores small swipe gestures", async () => {
      render(Carousel, { items: mockItems });

      const carousel = screen.getByLabelText("Carousel");

      await fireEvent.touchStart(carousel, {
        touches: [{ clientX: 100 }],
      });
      await fireEvent.touchEnd(carousel, {
        changedTouches: [{ clientX: 80 }],
      });

      expect(screen.getByText("Slide 1")).toBeTruthy();
    });
  });

  describe("Autoplay", () => {
    it("automatically advances slides when autoplay enabled", async () => {
      render(Carousel, {
        items: mockItems,
        autoplay: true,
        interval: 1000,
      });

      expect(screen.getByText("Slide 1")).toBeTruthy();

      await act(() => {
        vi.advanceTimersByTime(1000);
      });

      expect(screen.getByText("Slide 2")).toBeTruthy();
    });

    it("stops autoplay when component unmounts", () => {
      const { unmount } = render(Carousel, {
        items: mockItems,
        autoplay: true,
      });

      unmount();

      expect(vi.getTimerCount()).toBe(0);
    });

    it("does not start autoplay with single item", () => {
      render(Carousel, {
        items: [mockItems[0]],
        autoplay: true,
      });

      expect(vi.getTimerCount()).toBe(0);
    });
  });

  describe("Visibility Controls", () => {
    it("hides arrows when showArrows is false", () => {
      render(Carousel, {
        items: mockItems,
        showArrows: false,
      });

      expect(screen.queryByLabelText("Next slide")).toBeNull();
      expect(screen.queryByLabelText("Previous slide")).toBeNull();
    });

    it("hides dots when showDots is false", () => {
      render(Carousel, {
        items: mockItems,
        showDots: false,
      });

      expect(screen.queryAllByLabelText(/Go to slide/)).toHaveLength(0);
    });

    it("hides arrows with single item", () => {
      render(Carousel, {
        items: [mockItems[0]],
      });

      expect(screen.queryByLabelText("Next slide")).toBeNull();
      expect(screen.queryByLabelText("Previous slide")).toBeNull();
    });

    it("hides dots with single item", () => {
      render(Carousel, {
        items: [mockItems[0]],
      });

      expect(screen.queryByLabelText(/Go to slide/)).toBeNull();
    });
  });

  describe("Accessibility", () => {
    it("has proper ARIA labels", () => {
      render(Carousel, { items: mockItems });

      expect(screen.getByLabelText("Carousel")).toBeTruthy();
      expect(screen.getByLabelText("Next slide")).toBeTruthy();
      expect(screen.getByLabelText("Previous slide")).toBeTruthy();

      const dots = screen.getAllByLabelText(/Go to slide/);
      expect(dots.length).toBe(3);
    });

    it("marks current slide with aria-current", () => {
      render(Carousel, { items: mockItems });

      const dots = screen.getAllByLabelText(/Go to slide/);
      expect(dots[0].getAttribute("aria-current")).toBe("true");
      expect(dots[1].getAttribute("aria-current")).toBeNull();
      expect(dots[2].getAttribute("aria-current")).toBeNull();
    });
  });

  describe("CSS Classes", () => {
    it("applies correct size classes to different elements", () => {
      const { container } = render(Carousel, {
        items: mockItems,
        sz: "xl",
      });

      const carousel = container.firstChild as HTMLElement;
      expect(carousel.classList.contains("text-2xl")).toBe(true);
    });

    it("merges external classes correctly", () => {
      const { container } = render(Carousel, {
        items: mockItems,
        class: "custom-class",
      });

      const carousel = container.firstChild as HTMLElement;
      expect(carousel.classList.contains("custom-class")).toBe(true);
    });
  });
});
