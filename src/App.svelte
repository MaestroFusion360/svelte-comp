<script lang="ts">
  import Accordion from "./lib/Accordion.svelte";
  import Button from "./lib/Button.svelte";
  import Card from "./lib/Card.svelte";
  import Carousel from "./lib/Carousel.svelte";
  import ColorPicker from "./lib/ColorPicker.svelte";
  import DatePicker from "./lib/DatePicker.svelte";
  import Field from "./lib/Field.svelte";
  import PrimaryColorSelect from "./lib/PrimaryColorSelect.svelte";
  import ProgressBar from "./lib/ProgressBar.svelte";
  import ProgressCircle from "./lib/ProgressCircle.svelte";
  import Select from "./lib/Select.svelte";
  import Slider from "./lib/Slider.svelte";
  import Switch from "./lib/Switch.svelte";
  import Table from "./lib/Table.svelte";
  import Tabs from "./lib/Tabs.svelte";
  import ThemeToggle from "./lib/ThemeToggle.svelte";
  import TimePicker from "./lib/TimePicker.svelte";
  import Toast from "./lib/Toast.svelte";
  import Tooltip from "./lib/Tooltip.svelte";
  import type { ToastVariant } from "./lib/types";
  import Container from "./Container.svelte";

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "team", label: "Team" },
    { id: "table", label: "Data" },
  ];
  let activeTab = $state(tabs[0].id);

  let sliderValue = $state(68);
  let autoplay = $state(true);

  const planOptions = [
    { label: "Starter", value: "starter" },
    { label: "Pro", value: "pro" },
    { label: "Enterprise", value: "enterprise" },
  ];

  let selectedPlan = $state(planOptions[1].value);
  let featureName = $state("Dashboard 2.0");
  let contactEmail = $state("team@studio.dev");
  let dateValue = $state<string | null>(null);
  let timeValue = $state<string | null>(null);
  let accentColor = $state<string | null>("#7c3aed");

  const accordionItems = [
    {
      title: "Composition",
      content:
        "Card, Tabs, Table and Carousel let you assemble complex screens without extra layout work.",
    },
    {
      title: "Forms",
      content:
        "Field, Select, DatePicker, TimePicker and ColorPicker share spacing, tokens and state handling.",
    },
    {
      title: "Feedback",
      content:
        "ProgressBar, ProgressCircle, Toast and Dialog keep users informed without noise.",
    },
  ];

  const carouselItems = [
    {
      title: "Smooth forms",
      content:
        "Clean fields, tight spacing and built-in hints help ship surveys in minutes.",
    },
    {
      title: "Smart navigation",
      content:
        "Tabs and Accordion keep content nearby while Carousel saves horizontal space.",
    },
    {
      title: "Status signals",
      content:
        "Toast and progress indicators deliver context quickly without blocking flows.",
    },
  ];

  const tableColumns = [
    { key: "name", label: "Feature", width: "42%" },
    { key: "owner", label: "Owner" },
    { key: "status", label: "Status" },
    { key: "eta", label: "ETA", align: "end" },
  ] as const;

  const tableRows = [
    { id: 1, name: "Onboarding", owner: "Anna", status: "Ready", eta: "Today" },
    { id: 2, name: "Theming", owner: "Mark", status: "In progress", eta: "Fri" },
    { id: 3, name: "Notifications", owner: "Oleg", status: "Testing", eta: "Thu" },
    { id: 4, name: "Data tables", owner: "Ira", status: "In progress", eta: "Next week" },
    { id: 5, name: "Carousel", owner: "Anton", status: "Design", eta: "In two weeks" },
    { id: 6, name: "Accessibility", owner: "Sasha", status: "Review", eta: "Today" },
  ];

  const pageSize = 4;
  let tablePage = $state(1);
  const totalPages = $derived(
    Math.max(1, Math.ceil(tableRows.length / pageSize))
  );
  const pagedRows = $derived(
    tableRows.slice((tablePage - 1) * pageSize, tablePage * pageSize)
  );

  $effect(() => {
    if (tablePage > totalPages) tablePage = totalPages;
    if (tablePage < 1) tablePage = 1;
  });

  const quality = [
    { label: "UI polish", value: 86 },
    { label: "Accessibility", value: 72 },
    { label: "Performance", value: 64 },
  ];

  const team = [
    { name: "Anna", role: "Product", focus: "UX flows" },
    { name: "Mark", role: "Frontend", focus: "Components" },
    { name: "Oleg", role: "QA", focus: "Automation" },
  ];

  type ToastItem = { id: number; title?: string; message: string; variant: ToastVariant };
  let toasts = $state<ToastItem[]>([]);
  let toastId = 0;

  function pushToast(variant: ToastVariant) {
    const messageMap: Record<ToastVariant, string> = {
      success: "Changes saved and ready to roll out.",
      info: "Components share tokens, typography, and behavior.",
      warning: "Double-check disabled, focus, and hover states.",
      danger: "Tests caught a blocking issue. Investigate.",
    };
    const titleMap: Record<ToastVariant, string> = {
      success: "Success",
      info: "Heads up",
      warning: "Warning",
      danger: "Error",
    };

    const id = ++toastId;
    toasts = [
      ...toasts,
      { id, variant, title: titleMap[variant], message: messageMap[variant] },
    ];
  }

  function removeToast(id: number) {
    toasts = toasts.filter((t) => t.id !== id);
  }
</script>

<Container>
  <div class="relative mx-auto max-w-6xl space-y-8 px-6 py-10">
    <section
      class="relative rounded-[28px] border border-[var(--border-color-default)] bg-gradient-to-br from-[var(--color-bg-surface)] via-white/70 to-[var(--color-bg-muted)] shadow-[0_20px_60px_-25px_var(--shadow-color)] dark:from-[var(--color-bg-surface)] dark:via-slate-900/70 dark:to-slate-900/50"
    >
      <div
        class="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.18),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(16,185,129,0.14),transparent_25%)]"
      ></div>

      <div class="relative grid gap-8 p-8 md:p-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div class="space-y-4">
          <p class="text-xs uppercase tracking-[0.25em] text-[var(--color-text-muted)]">
            svelte-comp kit
          </p>
          <h1 class="text-3xl font-bold leading-tight md:text-4xl">
            Component showcase
          </h1>
          <p class="text-[var(--color-text-muted)] md:w-3/4">
            Toggle theme, tweak the primary color, and try the main lib components in a cohesive layout.
          </p>

          <div class="flex flex-wrap gap-3">
            <Button variant="primary" onClick={() => pushToast("info")} sz="lg">
              Launch interactive
            </Button>
            <Button variant="ghost" onClick={() => pushToast("warning")} sz="lg">
              Remind to review
            </Button>
          </div>

          <div class="flex flex-wrap gap-3 text-sm text-[var(--color-text-muted)]">
            <span
              class="inline-flex items-center gap-2 rounded-full border border-[var(--border-color-default)] bg-[var(--color-bg-surface)] px-3 py-2"
            >
              <span class="h-2 w-2 animate-pulse rounded-full bg-[var(--color-bg-primary)]"></span>
              Live preview is on
            </span>
            <span
              class="inline-flex items-center gap-2 rounded-full border border-[var(--border-color-default)] bg-[var(--color-bg-surface)] px-3 py-2"
            >
              <span class="h-2 w-2 rounded-full bg-[var(--color-bg-secondary)]"></span>
              {tabs.length} sections below
            </span>
          </div>
        </div>

        <div
          class="space-y-4 rounded-2xl border border-[var(--border-color-default)] bg-white/70 p-5 shadow-lg dark:bg-slate-900/60"
        >
          <div class="flex items-start justify-between gap-3">
            <div>
              <p class="text-xs uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
                Theme
              </p>
              <p class="text-lg font-semibold">Mode and accent</p>
            </div>

            <Tooltip text="Toggles document-level theme" position="bottom">
              <ThemeToggle class="relative shadow-sm" sz="sm" />
            </Tooltip>
          </div>

          <PrimaryColorSelect class="w-full" />

          <div
            class="flex items-center justify-between rounded-xl border border-[var(--border-color-default)] bg-[var(--color-bg-muted)]/70 px-4 py-3"
          >
            <div>
              <p class="text-xs uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
                Autoplay
              </p>
              <p class="text-sm font-medium">Carousel</p>
            </div>
            <Switch
              checked={autoplay}
              onChange={(v) => (autoplay = v)}
              sz="sm"
              rightLabel={autoplay ? "On" : "Off"}
            />
          </div>

          <div class="grid gap-3 md:grid-cols-2">
            <ProgressCircle value={sliderValue} label="Readiness" />
            <ProgressBar value={sliderValue} label="Sprint focus" />
          </div>
        </div>
      </div>
    </section>

    {#snippet controlsHeader()}
      <div class="flex items-center justify-between gap-2">
        <div>
          <p class="text-xs uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
            Actions
          </p>
          <h2 class="text-lg font-semibold leading-tight">Quick triggers</h2>
        </div>
        <Tooltip text="Buttons use the full variant set" position="left">
          <span
            class="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-bg-muted)] text-sm font-semibold text-[var(--color-text-default)]"
          >
            ?
          </span>
        </Tooltip>
      </div>
    {/snippet}

    {#snippet formHeader()}
      <div class="flex items-center justify-between">
        <div>
          <p class="text-xs uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
            Form
          </p>
          <h2 class="text-lg font-semibold leading-tight">Mini brief</h2>
        </div>
        <Tooltip text="Field, Select, DatePicker, TimePicker and ColorPicker" position="left">
          <span
            class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-bg-muted)] text-sm font-semibold text-[var(--color-text-default)]"
          >
            i
          </span>
        </Tooltip>
      </div>
    {/snippet}

    <div class="grid gap-6 lg:grid-cols-2">
      <Card header={controlsHeader}>
        <div class="space-y-4">
          <div class="flex flex-wrap gap-2">
            <Button variant="primary" onClick={() => pushToast("success")}>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="pill">Pill</Button>
            <Button variant="danger" onClick={() => pushToast("danger")}>Danger</Button>
          </div>

          <div
            class="flex items-center justify-between gap-3 rounded-xl border border-[var(--border-color-default)] px-4 py-3"
          >
            <div class="space-y-1">
              <p class="text-sm font-medium">Live mode</p>
              <p class="text-xs text-[var(--color-text-muted)]">
                Keep autoplay and progress linked across the page
              </p>
            </div>
            <Switch checked={autoplay} onChange={(v) => (autoplay = v)} sz="sm" />
          </div>

          <div class="space-y-2">
            <div class="flex items-center justify-between text-sm">
              <span class="text-[var(--color-text-muted)]">Drag to refresh progress</span>
              <span class="font-mono text-[var(--color-text-default)]">{sliderValue}%</span>
            </div>
            <Slider
              value={sliderValue}
              min={0}
              max={100}
              onInput={(v) => (sliderValue = v)}
              showValue={false}
            />
          </div>

          <div class="grid gap-3 md:grid-cols-2">
            <ProgressBar value={sliderValue} label="Iteration" />
            <ProgressCircle value={sliderValue} label="Readiness" />
          </div>

          <div class="flex flex-wrap gap-2">
            <Button variant="success" onClick={() => pushToast("success")} sz="sm">
              Success toast
            </Button>
            <Button variant="warning" onClick={() => pushToast("warning")} sz="sm">
              Warning toast
            </Button>
            <Button variant="info" onClick={() => pushToast("info")} sz="sm">
              Info toast
            </Button>
          </div>
        </div>
      </Card>

      <Card header={formHeader}>
        <div class="space-y-4">
          <div class="grid gap-3 md:grid-cols-2">
            <Field
              label="Name"
              value={featureName}
              onChange={(v) => (featureName = String(v))}
            />
            <Field
              label="Contact email"
              type="email"
              value={contactEmail}
              onChange={(v) => (contactEmail = String(v))}
            />
          </div>

          <Select
            label="Plan"
            options={planOptions}
            value={selectedPlan}
            placeholder="Choose a plan"
            onChange={(v) => (selectedPlan = v)}
          />

          <div class="grid gap-3 md:grid-cols-3">
            <DatePicker
              label="Launch date"
              value={dateValue}
              onChange={(v) => (dateValue = v)}
            />
            <TimePicker
              label="Release time"
              value={timeValue}
              onChange={(v) => (timeValue = v)}
            />
            <ColorPicker
              label="Accent"
              value={accentColor}
              onChange={(v) => (accentColor = v)}
            />
          </div>

          <div class="flex justify-end gap-3">
            <Button
              variant="ghost"
              onClick={() => {
                featureName = "Dashboard 2.0";
                selectedPlan = planOptions[1].value;
                contactEmail = "team@studio.dev";
                dateValue = null;
                timeValue = null;
                accentColor = "#7c3aed";
              }}
            >
              Reset
            </Button>
            <Button variant="primary" onClick={() => pushToast("success")}>
              Save
            </Button>
          </div>
        </div>
      </Card>
    </div>

    {#snippet dataHeader()}
      <div class="flex items-center justify-between gap-3">
        <div>
          <p class="text-xs uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
            Data
          </p>
          <h2 class="text-lg font-semibold leading-tight">Sprint snapshot</h2>
        </div>
        <Button variant="secondary" sz="sm" onClick={() => pushToast("info")}>
          Refresh
        </Button>
      </div>
    {/snippet}

    {#snippet accordionHeader()}
      <div class="flex items-center justify-between gap-3">
        <div>
          <p class="text-xs uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
            Details
          </p>
          <h3 class="text-lg font-semibold leading-tight">Sections</h3>
        </div>
      </div>
    {/snippet}

    {#snippet carouselHeader()}
      <div class="flex items-center justify-between gap-3">
        <div>
          <p class="text-xs uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
            Carousel
          </p>
          <h3 class="text-lg font-semibold leading-tight">Stories</h3>
        </div>
        <span class="text-xs text-[var(--color-text-muted)]">
          Autoplay {autoplay ? "on" : "off"}
        </span>
      </div>
    {/snippet}

    <div class="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
      <Card header={dataHeader} class="h-full">
        <Tabs
          tabs={tabs}
          activeTab={activeTab}
          onChange={(id) => (activeTab = id)}
          variant="underline"
          fitted={true}
        >
          {#if activeTab === "overview"}
            <div class="grid gap-4 md:grid-cols-3">
              <div
                class="rounded-xl border border-[var(--border-color-default)] bg-[var(--color-bg-surface)] p-4"
              >
                <p class="text-xs uppercase tracking-[0.1em] text-[var(--color-text-muted)]">
                  Readiness
                </p>
                <p class="text-2xl font-bold">{sliderValue}%</p>
                <p class="text-sm text-[var(--color-text-muted)]">
                  Synced with the slider above
                </p>
              </div>

              <div
                class="rounded-xl border border-[var(--border-color-default)] bg-[var(--color-bg-surface)] p-4"
              >
                <p class="text-xs uppercase tracking-[0.1em] text-[var(--color-text-muted)]">
                  Plan
                </p>
                <p class="text-lg font-semibold">{selectedPlan}</p>
                <p class="text-sm text-[var(--color-text-muted)]">
                  Contact: {contactEmail}
                </p>
              </div>

              <div
                class="rounded-xl border border-[var(--border-color-default)] bg-[var(--color-bg-surface)] p-4"
              >
                <p class="text-xs uppercase tracking-[0.1em] text-[var(--color-text-muted)]">
                  Release window
                </p>
                <p class="text-lg font-semibold">
                  {dateValue ?? "Not selected yet"}
                </p>
                <p class="text-sm text-[var(--color-text-muted)]">
                  {timeValue ?? "Time is being planned"}
                </p>
              </div>
            </div>

            <div class="mt-4 grid gap-3 md:grid-cols-3">
              {#each quality as metric (metric.label)}
                <ProgressBar value={metric.value} label={metric.label} sz="sm" />
              {/each}
            </div>
          {:else if activeTab === "team"}
            <div class="space-y-3">
              {#each team as person (person.name)}
                <div
                  class="flex items-center justify-between rounded-xl border border-[var(--border-color-default)] bg-[var(--color-bg-surface)] px-4 py-3"
                >
                  <div>
                    <p class="font-semibold">{person.name}</p>
                    <p class="text-sm text-[var(--color-text-muted)]">{person.role}</p>
                  </div>
                  <span
                    class="rounded-full bg-[var(--color-bg-muted)] px-3 py-1 text-xs text-[var(--color-text-default)]"
                  >
                    {person.focus}
                  </span>
                </div>
              {/each}
            </div>
          {:else}
            <Table
              columns={tableColumns}
              rows={pagedRows}
              variant="zebra"
              pagination={{ currentPage: tablePage, totalPages, onPageChange: (p) => (tablePage = p) }}
            />
          {/if}
        </Tabs>
      </Card>

      <div class="grid gap-6">
        <Card header={accordionHeader}>
          <Accordion items={accordionItems} multiple={true} defaultOpen={[0]} />
        </Card>

        <Card header={carouselHeader}>
          <Carousel
            items={carouselItems}
            autoplay={autoplay}
            interval={4200}
            showDots={true}
            showArrows={true}
            sz="sm"
          />
        </Card>
      </div>
    </div>
  </div>

  {#each toasts as toast (toast.id)}
    <Toast
      title={toast.title}
      message={toast.message}
      variant={toast.variant}
      onClose={() => removeToast(toast.id)}
      timeout={3500}
    />
  {/each}
</Container>
