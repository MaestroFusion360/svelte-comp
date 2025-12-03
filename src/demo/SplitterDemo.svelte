<!-- src/demo/SplitterDemo.svelte -->
<script lang="ts">
  import Splitter from "$lib/Splitter.svelte";
</script>

{#snippet first()}
  <div
    class="
      h-full
      p-[var(--spacing-lg)]
      bg-[var(--color-bg-surface)]
      text-[var(--color-text-default)]
      border-[var(--border-color-default)]
    "
  >
    First
  </div>
{/snippet}

{#snippet second()}
  <div
    class="
      h-full
      p-[var(--spacing-lg)]
      bg-[var(--color-bg-surface)]
      text-[var(--color-text-default)]
      border-[var(--border-color-default)]
    "
  >
    Second
  </div>
{/snippet}

<div class="w-full h-[400px] flex flex-col">
  <!-- Horizontal -->
  <div class="h-1/2 mb-[var(--spacing-xl)]">
    <div
      class="
        h-full
        border-[var(--border-color-default)]
        rounded-[var(--radius-xl)]
        overflow-hidden
      "
    >
      <Splitter
        direction="horizontal"
        initialSize={50}
        dividerSize={3}
        minSize={15}
        maxSize={85}
        {first}
        {second}
      />
    </div>
  </div>

  <div
    class="h-px bg-[var(--border-color-default)] my-[var(--spacing-md)]"
  ></div>

  <!-- Vertical -->
  <div class="h-1/2">
    <div
      class="
        h-full
        border-[var(--border-color-default)]
        rounded-[var(--radius-xl)]
        overflow-hidden
      "
    >
      <Splitter
        direction="vertical"
        initialSize={40}
        dividerSize={3}
        minSize={15}
        maxSize={85}
        {first}
        {second}
      />
    </div>
  </div>
</div>
