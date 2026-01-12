<script lang="ts">
  import Accordion from "./lib/Accordion.svelte";
  import Badge from "./lib/Badge.svelte";
  import Button from "./lib/Button.svelte";
  import Calendar from "./lib/Calendar.svelte";
  import Card from "./lib/Card.svelte";
  import Carousel from "./lib/Carousel.svelte";
  import CheckBox from "./lib/CheckBox.svelte";
  import CodeView from "./lib/CodeView.svelte";
  import ColorPicker from "./lib/ColorPicker.svelte";
  import ContextMenu from "./lib/ContextMenu.svelte";
  import DatePicker from "./lib/DatePicker.svelte";
  import Dialog from "./lib/Dialog.svelte";
  import Field from "./lib/Field.svelte";
  import FilePicker from "./lib/FilePicker.svelte";
  import Form from "./lib/Form.svelte";
  import InstallPWA from "./lib/InstallPWA.svelte";
  import Menu from "./lib/Menu.svelte";
  import NoticeBase from "./lib/NoticeBase.svelte";
  import PaginatedCard from "./lib/PaginatedCard.svelte";
  import Pagination from "./lib/Pagination.svelte";
  import PrimaryColorSelect from "./lib/PrimaryColorSelect.svelte";
  import ProgressBar from "./lib/ProgressBar.svelte";
  import ProgressCircle from "./lib/ProgressCircle.svelte";
  import Radio from "./lib/Radio.svelte";
  import SearchInput from "./lib/SearchInput.svelte";
  import Select from "./lib/Select.svelte";
  import Slider from "./lib/Slider.svelte";
  import Splitter from "./lib/Splitter.svelte";
  import Switch from "./lib/Switch.svelte";
  import Table from "./lib/Table.svelte";
  import Tabs from "./lib/Tabs.svelte";
  import ThemeToggle from "./lib/ThemeToggle.svelte";
  import TimePicker from "./lib/TimePicker.svelte";
  import Toast from "./lib/Toast.svelte";
  import Tooltip from "./lib/Tooltip.svelte";
  import Topbar from "./lib/Topbar.svelte";
  import type { FieldSchema, MenuAction, MenuItem, SizeKey, ToastVariant } from "./lib/types";
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

  const navItems = [
    { id: "overview", label: "Overview" },
    { id: "inputs", label: "Inputs" },
    { id: "layout", label: "Layout" },
    { id: "data", label: "Data" },
  ];
  let activeNav = $state(navItems[0].id);

  let searchQuery = $state("");
  let calendarValue = $state<string | null>(null);
  let fileList = $state<FileList | null>(null);
  let dialogOpen = $state(false);
  let radioGroup = $state("daily");
  let newsletterChecked = $state(false);
  let mixedChecked = $state(false);
  let mixedState = $state(true);
  let menuSelection = $state("Pick an action from the menu bar");
  let menuSize = $state<SizeKey>("sm");
  let standalonePage = $state(1);
  const standaloneTotal = 5;
  let codeEditable = $state(false);
  let codeSample = $state(
    "const tokens = ['spacing', 'radius', 'colors'];\n\nexport function tokensReady() {\n  return tokens.length > 0;\n}\n"
  );
  let contextMenuStatus = $state("Right-click the panel to open the menu");
  let contextMenuRef = $state<{
    openAt: (event: MouseEvent) => void;
    close: () => void;
  } | null>(null);

  const menuData: MenuItem[] = [
    {
      name: "File",
      actions: [
        { id: "new", label: "New", shortcut: "Ctrl+N" },
        { id: "open", label: "Open", shortcut: "Ctrl+O" },
        { type: "separator" },
        { id: "export", label: "Export", shortcut: "Ctrl+E" },
      ],
    },
    {
      name: "View",
      actions: [
        { id: "xs", label: "XS" },
        { id: "sm", label: "SM" },
        { id: "md", label: "MD" },
        { id: "lg", label: "LG" },
        { id: "xl", label: "XL" },
      ],
    },
  ];

  const miniFormSchema: FieldSchema[] = [
    { name: "project", type: "text", label: "Project", required: true },
    { name: "owner", type: "email", label: "Owner email", required: true },
    {
      name: "priority",
      type: "select",
      label: "Priority",
      options: [
        { label: "Low", value: "low" },
        { label: "Medium", value: "medium" },
        { label: "High", value: "high" },
      ],
    },
    { name: "subscribe", type: "checkbox", label: "Send updates" },
  ];
  let formResult = $state("Not submitted yet");

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

  function handleMenuSelect(menu: string, action: MenuAction) {
    const label =
      typeof action === "string"
        ? action
        : action.label || action.id || "Action";
    const id = typeof action === "string" ? action : action.id;
    if (id && ["xs", "sm", "md", "lg", "xl"].includes(id)) {
      menuSize = id as SizeKey;
    }
    menuSelection = `${menu}: ${label}`;
  }

  function handleMiniSubmit(values: Record<string, unknown>) {
    formResult = JSON.stringify(values, null, 2);
  }

  function handleContextAction(label: string, variant: ToastVariant) {
    contextMenuStatus = `Last action: ${label}`;
    pushToast(variant);
  }
</script>

<Topbar
  title="svelte-comp"
  showHamburger={true}
  menuItems={navItems}
  onMenuSelect={(id) => (activeNav = id)}
/>

<Container>
  <div class="relative mx-auto max-w-6xl space-y-8 px-6 pb-10 pt-24">
    <section
      class="relative rounded-[28px] border border-[var(--border-color-default)] bg-gradient-to-br from-[var(--color-bg-surface)] via-white/70 to-[var(--color-bg-muted)] shadow-[0_20px_60px_-25px_var(--shadow-color)] dark:from-[var(--color-bg-surface)] dark:via-slate-900/70 dark:to-slate-900/50"
    >
      <div
        class="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.18),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(16,185,129,0.14),transparent_25%)]"
      ></div>

      <div class="relative grid gap-8 p-8 md:p-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div class="space-y-4">
          <p class="text-xs uppercase tracking-[0.25em] text-[var(--color-text-muted)]">
            svelte-comp
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

    {#snippet statusHeader()}
      <div class="flex items-center justify-between gap-2">
        <div>
          <p class="text-xs uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
            Status
          </p>
          <h2 class="text-lg font-semibold leading-tight">Search and signals</h2>
        </div>
      </div>
    {/snippet}

    {#snippet optionsHeader()}
      <div class="flex items-center justify-between gap-2">
        <div>
          <p class="text-xs uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
            Options
          </p>
          <h2 class="text-lg font-semibold leading-tight">Toggles and calendar</h2>
        </div>
      </div>
    {/snippet}

    <div class="grid gap-6 lg:grid-cols-2">
      <Card header={statusHeader}>
        <div class="space-y-4">
          <SearchInput
            label="Search components"
            placeholder="Filter by name"
            bind:value={searchQuery}
          />

          <div class="flex flex-wrap gap-2">
            <Badge message="Live" variant="success" showIcon />
            <Badge message="Needs review" variant="warning" showIcon />
            <Badge message="Queued" variant="info" />
          </div>

          {#snippet noticeEnd()}
            <Button variant="ghost" sz="xs">Undo</Button>
          {/snippet}

          <NoticeBase
            title="Release note"
            message="New components landed in the demo."
            variant="info"
            size="md"
            end={noticeEnd}
          />
        </div>
      </Card>

      <Card header={optionsHeader}>
        <div class="space-y-4">
          <div class="space-y-2">
            <Radio
              label="Daily updates"
              value="daily"
              bind:group={radioGroup}
            />
            <Radio
              label="Weekly updates"
              value="weekly"
              bind:group={radioGroup}
            />
            <Radio
              label="Monthly updates"
              value="monthly"
              bind:group={radioGroup}
            />
          </div>

          <div class="flex flex-wrap gap-3">
            <CheckBox
              label="Send digest emails"
              bind:checked={newsletterChecked}
            />
            <CheckBox
              label="Mixed state"
              indeterminate={mixedState}
              checked={mixedChecked}
              onChange={(v) => {
                mixedChecked = v;
                mixedState = false;
              }}
            />
          </div>

          <div class="grid gap-3 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <div class="min-w-0">
              <Calendar
                value={calendarValue}
                onChange={(v) => (calendarValue = v)}
                showOutsideDays={true}
                class="w-full"
              />
            </div>
            <div class="rounded-xl border border-[var(--border-color-default)] bg-[var(--color-bg-surface)] p-4">
              <p class="text-xs uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
                Selected date
              </p>
              <p class="text-lg font-semibold">
                {calendarValue ?? "No date yet"}
              </p>
              <p class="text-sm text-[var(--color-text-muted)] mt-2">
                Plan: {radioGroup}
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>

    {#snippet filesHeader()}
      <div class="flex items-center justify-between gap-2">
        <div>
          <p class="text-xs uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
            Files
          </p>
          <h2 class="text-lg font-semibold leading-tight">Uploads and dialogs</h2>
        </div>
        <InstallPWA inline={true} alwaysShow={true} />
      </div>
    {/snippet}

    {#snippet formGeneratorHeader()}
      <div class="flex items-center justify-between gap-2">
        <div>
          <p class="text-xs uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
            Form
          </p>
          <h2 class="text-lg font-semibold leading-tight">Schema-driven form</h2>
        </div>
      </div>
    {/snippet}

    <div class="grid gap-6 lg:grid-cols-2">
      <Card header={filesHeader}>
        <div class="space-y-4">
          <FilePicker
            value={fileList}
            onFilesSelected={(files) => (fileList = files)}
            accept="image/*,.pdf"
          />

          <div class="flex items-center justify-between rounded-xl border border-[var(--border-color-default)] px-4 py-3">
            <div>
              <p class="text-sm font-medium">Confirm release</p>
              <p class="text-xs text-[var(--color-text-muted)]">
                Last file: {fileList?.[0]?.name ?? "none"}
              </p>
            </div>
            <Button variant="primary" onClick={() => (dialogOpen = true)} sz="sm">
              Open dialog
            </Button>
          </div>
        </div>
      </Card>

      <Card header={formGeneratorHeader}>
        <div class="space-y-4">
          <Form
            schema={miniFormSchema}
            onSubmit={handleMiniSubmit}
            validateOn="submit"
          />
          <div class="rounded-xl border border-[var(--border-color-default)] bg-[var(--color-bg-surface)] p-3">
            <p class="text-xs uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
              Last submit
            </p>
            <pre class="text-xs whitespace-pre-wrap text-[var(--color-text-default)]">
{formResult}
            </pre>
          </div>
        </div>
      </Card>
    </div>

    {#snippet menuHeader()}
      <div class="flex items-center justify-between gap-2">
        <div>
          <p class="text-xs uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
            Menu
          </p>
          <h2 class="text-lg font-semibold leading-tight">Navigation controls</h2>
        </div>
      </div>
    {/snippet}

    {#snippet layoutHeader()}
      <div class="flex items-center justify-between gap-2">
        <div>
          <p class="text-xs uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
            Layout
          </p>
          <h2 class="text-lg font-semibold leading-tight">Splitter + context menu</h2>
        </div>
      </div>
    {/snippet}

    {#snippet firstPane()}
      <div class="h-full grid place-items-center text-sm font-medium">
        First panel
      </div>
    {/snippet}

    {#snippet secondPane()}
      <div class="h-full grid place-items-center text-sm font-medium">
        Second panel
      </div>
    {/snippet}

    <div class="grid gap-6 lg:grid-cols-2">
      <Card header={menuHeader}>
        <div class="space-y-4">
          <Menu menus={menuData} sz={menuSize} onSelect={handleMenuSelect} />

          <div class="text-sm text-[var(--color-text-muted)]">
            {menuSelection}
          </div>

          <div class="rounded-xl border border-[var(--border-color-default)] p-4">
            <Pagination
              currentPage={standalonePage}
              totalPages={standaloneTotal}
              onPageChange={(p) => (standalonePage = p)}
            />
          </div>

          {#snippet pageOne()}
            <div class="p-4 rounded-xl border border-[var(--border-color-default)] bg-[var(--color-bg-surface)]">
              <p class="text-sm font-medium">Release notes</p>
              <p class="text-xs text-[var(--color-text-muted)]">
                Snapshot of changes across components.
              </p>
            </div>
          {/snippet}
          {#snippet pageTwo()}
            <div class="p-4 rounded-xl border border-[var(--border-color-default)] bg-[var(--color-bg-surface)]">
              <p class="text-sm font-medium">Design tasks</p>
              <p class="text-xs text-[var(--color-text-muted)]">
                Review tokens and spacing.
              </p>
            </div>
          {/snippet}
          {#snippet pageThree()}
            <div class="p-4 rounded-xl border border-[var(--border-color-default)] bg-[var(--color-bg-surface)]">
              <p class="text-sm font-medium">QA checklist</p>
              <p class="text-xs text-[var(--color-text-muted)]">
                Validate keyboard and focus behavior.
              </p>
            </div>
          {/snippet}

          <PaginatedCard
            items={[pageOne, pageTwo, pageThree]}
            itemsPerPage={1}
          />
        </div>
      </Card>

      <Card header={layoutHeader}>
        <div class="space-y-4">
          <div class="h-56 rounded-xl border border-[var(--border-color-default)] overflow-hidden">
            <Splitter
              direction="horizontal"
              initialSize={45}
              dividerSize={6}
              minSize={20}
              maxSize={80}
              first={firstPane}
              second={secondPane}
            />
          </div>

          <div
            class="rounded-xl border border-[var(--border-color-default)] bg-[var(--color-bg-surface)] p-4 text-sm text-[var(--color-text-muted)]"
            oncontextmenu={(e) => contextMenuRef?.openAt(e)}
            role="button"
            tabindex="0"
          >
            {contextMenuStatus}
          </div>

          <ContextMenu
            bind:this={contextMenuRef}
            onUndo={() => handleContextAction("Undo", "info")}
            onRedo={() => handleContextAction("Redo", "info")}
            onCopy={() => handleContextAction("Copy", "success")}
            onCut={() => handleContextAction("Cut", "warning")}
            onPaste={() => handleContextAction("Paste", "success")}
            onDelete={() => handleContextAction("Delete", "danger")}
          />
        </div>
      </Card>
    </div>

    {#snippet codeHeader()}
      <div class="flex items-center justify-between gap-2">
        <div>
          <p class="text-xs uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
            Code
          </p>
          <h2 class="text-lg font-semibold leading-tight">CodeView editor</h2>
        </div>
        <Switch
          checked={codeEditable}
          onChange={(v) => (codeEditable = v)}
          rightLabel={codeEditable ? "Editable" : "Read only"}
          sz="sm"
        />
      </div>
    {/snippet}

    {#snippet quickHeader()}
      <div class="flex items-center justify-between gap-2">
        <div>
          <p class="text-xs uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
            Actions
          </p>
          <h2 class="text-lg font-semibold leading-tight">Quick actions</h2>
        </div>
      </div>
    {/snippet}

    <div class="grid gap-6 lg:grid-cols-2">
      <Card header={codeHeader} class="min-h-[360px]">
        <CodeView
          bind:code={codeSample}
          language="js"
          title="tokens.js"
          showCopyButton={true}
          showLineNumbers={true}
          editable={codeEditable}
          activeLine={true}
          class="h-[320px]"
        />
      </Card>

      <Card header={quickHeader}>
        <div class="space-y-4">
          <div class="flex flex-wrap gap-2">
            <Button variant="secondary" onClick={() => pushToast("info")}>
              Notify
            </Button>
            <Button variant="success" onClick={() => pushToast("success")}>
              Success
            </Button>
            <Button variant="danger" onClick={() => pushToast("danger")}>
              Error
            </Button>
          </div>

          <div class="rounded-xl border border-[var(--border-color-default)] bg-[var(--color-bg-surface)] p-4">
            <p class="text-xs uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
              Active nav
            </p>
            <p class="text-lg font-semibold">{activeNav}</p>
            <p class="text-sm text-[var(--color-text-muted)]">
              Search: {searchQuery || "empty"}
            </p>
          </div>
        </div>
      </Card>
    </div>

    <Dialog
      open={dialogOpen}
      title="Confirm release"
      message="Ready to ship the selected files?"
      onConfirm={() => {
        dialogOpen = false;
        pushToast("success");
      }}
      onCancel={() => {
        dialogOpen = false;
      }}
      onClose={() => {
        dialogOpen = false;
      }}
    />
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
