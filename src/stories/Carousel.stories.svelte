<!-- src/stories/Carousel.stories.svelte -->
<script module lang="ts">
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import Carousel from "$lib/Carousel.svelte";
  import { SIZES, type CarouselItem } from "$lib/types";

  const slides: CarouselItem[] = [
    {
      id: "slide-1",
      title: "Design Systems",
      content: "Create theme-aware experiences with shared tokens.",
      image: "https://picsum.photos/800/400?hash=design",
    },
    {
      id: "slide-2",
      title: "Accessibility",
      content: "Keyboard friendly controls with sensible focus states.",
      image: "https://picsum.photos/800/400?hash=a11y",
    },
    {
      id: "slide-3",
      title: "Performance",
      content: "Lightweight runes-based components for modern apps.",
      image: "https://picsum.photos/800/400?hash=perf",
    },
  ];

  const { Story } = defineMeta({
    title: "Components/Carousel",
    component: Carousel,
    tags: ["autodocs"],
    args: {
      items: slides,
      sz: "md",
      autoplay: false,
      interval: 5000,
      showDots: true,
      showArrows: true,
      class: "",
    },
    argTypes: {
      sz: { control: "select", options: SIZES },
      autoplay: { control: "boolean" },
      showDots: { control: "boolean" },
      showArrows: { control: "boolean" },
      interval: { control: { type: "number", min: 1000, step: 500 } },
      items: { control: "object" },
      class: { table: { disable: true } },
    },
  });
</script>

<Story name="Default">
  {#snippet template(args)}
    <div class="min-w-[400px] max-w-lg mx-auto min-h-screen flex items-center">
      <Carousel {...args} />
    </div>
  {/snippet}
</Story>
