<!-- src/stories/SearchInput.stories.svelte -->
<script module lang="ts">
  import type { ComponentProps } from 'svelte';
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import SearchInput from '$lib/SearchInput.svelte';

  type SearchInputArgs = ComponentProps<typeof SearchInput>;

  const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
  const variants = ['default', 'filled', 'neutral'] as const;

  const { Story } = defineMeta({
    title: 'Components/SearchInput',
    component: SearchInput,
    tags: ['autodocs'],
    args: {
      label: 'Search',
      placeholder: 'Search',
      value: '',
      sz: 'sm',
      variant: 'filled',
      class: ''
    },
    argTypes: {
      label: { control: 'text' },
      placeholder: { control: 'text' },
      value: { control: 'text' },
      sz: { control: 'select', options: sizes },
      variant: { control: 'select', options: variants },
      class: { table: { disable: true } }
    }
  });
</script>

<Story name="Default">
  {#snippet template(args: SearchInputArgs)}
    <div class="story-center">
      <SearchInput {...args} />
    </div>
  {/snippet}
</Story>

<Story name="With Label" args={{ label: 'Find', placeholder: 'Search profiles or materials...' }}>
  {#snippet template(args: SearchInputArgs)}
    <div class="story-center">
      <SearchInput {...args} />
    </div>
  {/snippet}
</Story>

<Story name="Compact" args={{ sz: 'xs', placeholder: 'Search' }}>
  {#snippet template(args: SearchInputArgs)}
    <div class="story-center">
      <SearchInput {...args} />
    </div>
  {/snippet}
</Story>

<Story name="Neutral" args={{ variant: 'neutral' }}>
  {#snippet template(args: SearchInputArgs)}
    <div class="story-center">
      <SearchInput {...args} />
    </div>
  {/snippet}
</Story>

<style>
  .story-center {
    display: grid;
    place-items: center;
    height: 100dvh;
    margin: 0 auto;
    max-width: 520px;
  }
</style>
