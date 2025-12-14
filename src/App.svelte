<!-- src/App.svelte -->
<script lang="ts">
  // Runtime locale handling
  import { setContext } from "svelte";
  import { TEXTS } from "./lang";

  import { TEXT } from "$lib/types";

  // App-wide types
  import { pageIds } from "./demo";
  import type { FieldTypeOption, PageId } from "./demo";
  import { cx, times } from "$utils";
  import type {
    SizeKey,
    ButtonVariant,
    FieldVariant,
    ComponentVariant,
    TabsVariant,
    ToastVariant,
    TableVariant,
    Column,
  } from "$lib/types";

  // Toast store
  import { toasts, addToast, removeToast, showToast } from "./demo/toastStore";

  // UI components
  import {
    Accordion,
    Button,
    Card,
    Carousel,
    ColorPicker,
    CheckBox,
    DatePicker,
    FilePicker,
    Field,
    Hamburger,
    Pagination,
    PrimaryColorSelect,
    ProgressBar,
    ProgressCircle,
    Radio,
    Select,
    Slider,
    Switch,
    Table,
    Tabs,
    TimePicker,
    Toast,
    Tooltip,
    ThemeToggle,
  } from "$lib";

  // Demo components
  import {
    AboutDemo,
    CodeViewDemo,
    Container,
    DialogDemo,
    FormDemo,
    MenuDemo,
    Notepad,
    PlayCard,
    SplitterDemo,
  } from "./demo";

  // Locale init
  type Locale = keyof typeof TEXTS;
  const lang = $state<{ value: Locale }>({ value: "en" });
  setContext("lang", lang);
  const L = $derived(TEXTS[lang.value]);

  // App navigation state
  const menu = $derived(
    pageIds
      .filter((id) => id in L.pageLabels)
      .map((id) => ({
        id,
        label: L.pageLabels[id as keyof typeof L.pageLabels],
      }))
  );
  let active = $state<PageId>("about");

  // Handle sidebar navigation
  function setActive(id: string) {
    if (pageIds.includes(id as PageId)) {
      active = id as PageId;
    }
  }

  // Table row type
  type Row = { id: number; item: string; qty: number; price: number };

  // Generate sample table dataset
  const allRows = $derived<Row[]>(
    times(23, (i) => ({
      id: i + 1,
      item: `${L.table.positionPrefix} ${i + 1}`,
      qty: (i % 7) + 1,
      price: ((i % 9) + 1) * 100,
    }))
  );

  // Table column config
  const columns = $derived([
    { key: "id", label: L.table.columns.id, width: "64px", align: "center" },
    { key: "item", label: L.table.columns.item, align: "start" },
    { key: "qty", label: L.table.columns.qty, width: "96px", align: "center" },
    {
      key: "price",
      label: L.table.columns.price,
      width: "120px",
      align: "center",
    },
  ] satisfies readonly Column<Row>[]);

  // Radio state
  let fruit = $state("banana");

  // Pagination state
  let activeDefault = $state("t1");
  let value = $state(0);
  let perPage = $state(5);
  let currentPage = $state(1);

  const totalPages = $derived(Math.max(1, Math.ceil(allRows.length / perPage)));

  // Auto-correct page index when perPage changes
  $effect(() => {
    if (currentPage > totalPages) {
      currentPage = Math.max(1, totalPages);
    }
  });

  // Slice rows for current page
  const pageRows = $derived(
    allRows.slice((currentPage - 1) * perPage, currentPage * perPage)
  );

  // Misc component state
  let selectedColor = $state(null);
  let selectedDate = $state(null);
  let selectedTime = $state(null);
  let selectedCountry = $state("en");
  const todayIso = new Date().toISOString().split("T")[0];

  // Form types
  type FormValues = Record<string, unknown>;

  // Form submit callback
  function handleSubmit(_data: FormValues) {
    addToast("success", {
      title: L.toasts.confirmTitle,
      message: L.toasts.confirmMessage,
    });
  }

  // Pagination handler
  function handlePageChange(p: number) {
    currentPage = p;
  }

  // Snapshot copies of locale-dependent UI data
  const carouselItems = $derived([...L.snippets.carousel.slides]);
  const accordionItems = $derived([...L.snippets.accordion.items]);
</script>

<!-- #region Snippets -->
{#snippet burgerHeader()}
  <div class={cx("p-2 flex flex-col items-center text-center")}>
    <div class={cx("font-bold text-[var(--color-text-muted)]", TEXT.lg)}>
      {L.app.title}
    </div>
    <div class={cx("text-[var(--color-text-muted)]", TEXT.xs)}>
      {L.app.version}
    </div>
  </div>
{/snippet}

{#snippet burgerFooter()}
  <div class={cx("text-center p-2 flex flex-col items-center gap-4")}>
    <PrimaryColorSelect class="w-fit"/>
    <Select
      sz="sm"
      label={L.app.language.label}
      options={L.app.language.options}
      bind:value={lang.value}
    />
    <span class={cx("italic text-[var(--color-text-muted)]", TEXT.xs)}
      >{L.app.footer}</span
    >
  </div>
{/snippet}

{#snippet cardHeader()}
  <div class={cx("flex items-center justify-between")}>
    <p class={cx("font-semibold text-[var(--color-text-default)]")}>
      {L.snippets.card.header}
    </p>
  </div>
{/snippet}

{#snippet cardBody()}
  <div class={cx("space-y-2 leading-relaxed", TEXT.sm)}>
    <p>
      {L.snippets.about.description}
    </p>
    <p class="text-[var(--color-text-muted)]">
      {L.snippets.about.helper}
    </p>
  </div>
{/snippet}

{#snippet cardFooter()}
  <div
    class={cx(
      "flex items-center justify-between text-[var(--color-text-muted)]",
      TEXT.xs
    )}
  >
    <span>{L.snippets.card.updated}</span>
    <Button variant="link" sz="xs">{L.snippets.card.docsLink}</Button>
  </div>
{/snippet}

{#snippet carouselSnippet(sz: SizeKey)}
  <Carousel
    items={carouselItems}
    {sz}
    autoplay={true}
    showDots={true}
    showArrows={true}
    class="w-full"
  />
{/snippet}

{#snippet toastSnippet(sz: SizeKey, variant: string)}
  <Tooltip text={`${L.snippets.toast.buttonPrefix}${variant}`}>
    <Button
      {sz}
      variant={variant as ToastVariant}
      onClick={() => showToast(variant as ToastVariant)}
    >
      {L.snippets.toast.buttonPrefix}{variant}
    </Button>
  </Tooltip>

  {#each $toasts as t (t.id)}
    <Toast
      title={t.title}
      message={t.message}
      variant={t.variant}
      onClose={() => removeToast(t.id)}
    />
  {/each}
{/snippet}

{#snippet emptySnippet()}
  <div class={cx("text-center text-[var(--color-text-muted)] py-10")}>
    {L.states.emptyPreview}
  </div>
{/snippet}

{#snippet fieldSnippet(
  sz: SizeKey,
  variant: string,
  label: string,
  disabled: boolean,
  type: string
)}
  <div class={cx("grid gap-4")}>
    {#if type === "input"}
      <Tooltip text={label || L.snippets.field.text}>
        <Field
          {sz}
          variant={variant as FieldVariant}
          label={label || L.snippets.field.text}
          {disabled}
        />
      </Tooltip>
    {:else if type === "number"}
      <Tooltip text={label || L.snippets.field.number}>
        <Field
          {sz}
          variant={variant as FieldVariant}
          type="number"
          parseNumber
          label={label || L.snippets.field.number}
          placeholder={L.snippets.field.placeholder}
          {disabled}
        />
      </Tooltip>
    {:else if type === "textarea"}
      <Tooltip text={label || L.snippets.field.textarea}>
        <Field
          {sz}
          variant={variant as FieldVariant}
          as="textarea"
          rows={3}
          label={label || L.snippets.field.textarea}
          {disabled}
        />
      </Tooltip>
    {/if}
  </div>
{/snippet}

{#snippet tableSnippet(sz: SizeKey, variant: string)}
  <div class={cx("w-full max-w-3xl")}>
    <Table {columns} rows={pageRows} {sz} variant={variant as TableVariant} />
    <div class="mt-4">
      <Pagination {currentPage} {totalPages} onPageChange={handlePageChange} />
    </div>
  </div>
{/snippet}

{#snippet tabsSnippet(sz: SizeKey, variant: string)}
  <Tabs
    tabs={L.snippets.tabs.labels.map((label, i) => ({
      id: `t${i + 1}`,
      label,
    }))}
    {sz}
    variant={variant as TabsVariant}
    activeTab={activeDefault}
    onChange={(id) => (activeDefault = id)}
  >
    {#each L.snippets.tabs.contents as content, i (`t${i + 1}`)}
      {#if activeDefault === `t${i + 1}`}
        <div class="py-8">{content}</div>
      {/if}
    {/each}
  </Tabs>
{/snippet}

<!-- #endregion -->

<!-- #region Container -->
<Container>
  <div class={cx("p-6 md:p-6 lg:p-6")}>
    <div class={cx("flex items-center justify-between")}>
      <div class="flex items-center">
        <Hamburger
          header={burgerHeader}
          footer={burgerFooter}
          menuItems={menu}
          activeItem={active}
          onSelect={setActive}
          closeOnSelect={true}
          width={300}
          class={TEXT.md}
        />
      </div>
      <div class="flex-1"></div>
      <ThemeToggle />
    </div>
  </div>

  <div class={cx("max-w-[640px] min-h-[560px] mx-auto p-4 md:p-6 lg:p-10")}>
    <main class={cx("grid gap-4 md:gap-6 lg:gap-8")}>
      {#if active === "about"}
        <AboutDemo />
      {:else if active === "accordion"}
        <PlayCard
          component="Accordion"
          title={L.pageLabels.accordion}
          subtitle={L.snippets.accordionPlay.subtitle}
        >
          {#snippet children(sz: SizeKey, cls: string)}
            <Accordion {sz} class={cls} items={accordionItems} />
          {/snippet}
        </PlayCard>
      {:else if active === "button"}
        <PlayCard
          component="Button"
          title={L.pageLabels.button}
          subtitle={L.snippets.button.subtitle}
        >
          {#snippet children(
            sz: SizeKey,
            variant: string,
            label: string,
            disabled: boolean
          )}
            <Tooltip text={label || `${variant} ${sz}`}>
              <Button {sz} variant={variant as ButtonVariant} {disabled}>
                {label || `${variant} ${sz}`}
              </Button>
            </Tooltip>
          {/snippet}
        </PlayCard>
      {:else if active === "card"}
        <PlayCard
          component="Card"
          title={L.pageLabels.card}
          subtitle={L.snippets.cardSnippet.subtitle}
        >
          {#snippet children(sz: SizeKey)}
            <div class="grid gap-4 max-w-3xl">
              <Card
                {sz}
                header={cardHeader}
                footer={cardFooter}
                children={cardBody}
              />
            </div>
          {/snippet}
        </PlayCard>
      {:else if active === "carousel"}
        <PlayCard
          component="Carousel"
          title={L.pageLabels.carousel}
          subtitle={L.snippets.carouselPlay.subtitle}
        >
          {#snippet children(sz: SizeKey)}
            {@render carouselSnippet(sz)}
          {/snippet}
        </PlayCard>
      {:else if active === "checkbox"}
        <PlayCard
          component="CheckBox"
          title={L.pageLabels.checkbox}
          subtitle={L.snippets.checkbox.subtitle}
        >
          {#snippet children(
            sz: SizeKey,
            variant: string,
            label: string,
            disabled: boolean
          )}
            <Tooltip text={label || `${variant} ${sz}`}
              ><CheckBox
                {sz}
                variant={variant as ComponentVariant}
                {disabled}
                label={label || `${variant} ${sz}`}
              />
            </Tooltip>
          {/snippet}
        </PlayCard>
      {:else if active === "codeView"}
        <PlayCard
          component="CodeView"
          title={L.pageLabels.codeView}
          subtitle={L.components.codeView.subtitle}
        >
          {#snippet children(sz: SizeKey)}
            <CodeViewDemo {sz} />
          {/snippet}
        </PlayCard>
      {:else if active === "colorPicker"}
        <PlayCard
          component="ColorPicker"
          title={L.pageLabels.colorPicker}
          subtitle={L.components.colorPicker.subtitle}
        >
          {#snippet children(
            _sz: SizeKey,
            _variant: string,
            label: string,
            disabled: boolean
          )}
            <ColorPicker
              label={label || L.components.colorPicker.label}
              {disabled}
              placeholder={L.components.colorPicker.placeholder}
              bind:value={selectedColor}
            />
          {/snippet}
        </PlayCard>
      {:else if active === "datePicker"}
        <PlayCard
          component="DatePicker"
          title={L.pageLabels.datePicker}
          subtitle={L.components.datePicker.subtitle}
        >
          {#snippet children(
            _sz: SizeKey,
            _variant: string,
            label: string,
            disabled: boolean
          )}
            <DatePicker
              label={label || L.components.datePicker.label}
              placeholder={L.components.datePicker.placeholder}
              {disabled}
              min={todayIso}
              bind:value={selectedDate}
            />
          {/snippet}
        </PlayCard>
      {:else if active === "dialog"}
        <PlayCard
          component="Dialog"
          title={L.pageLabels.dialog}
          subtitle={L.snippets.dialog.subtitle}
        >
          {#snippet children(sz: SizeKey, label: string)}
            <DialogDemo {sz} message={label || L.snippets.dialog.confirm} />
          {/snippet}
        </PlayCard>
      {:else if active === "field"}
        <PlayCard
          component="Field"
          title={L.pageLabels.field}
          subtitle={L.snippets.field.subtitle}
        >
          {#snippet children(
            sz: SizeKey,
            variant: string,
            label: string,
            disabled: boolean,
            type: string
          )}
            {@render fieldSnippet(
              sz,
              variant,
              label,
              disabled,
              type as FieldTypeOption
            )}
          {/snippet}
        </PlayCard>
      {:else if active === "filePicker"}
        <PlayCard
          component="FilePicker"
          title={L.pageLabels.filePicker}
          subtitle={L.components.filePicker.subtitle}
        >
          {#snippet children(
            _sz: SizeKey,
            _variant: string,
            label: string,
            disabled: boolean
          )}
            <FilePicker
              label={label || L.components.filePicker.label}
              {disabled}
              accept="image/*"
              multiple
              class="w-full"
            />
          {/snippet}
        </PlayCard>
      {:else if active === "form"}
        <FormDemo onSubmit={handleSubmit} />
      {:else if active === "menu"}
        <PlayCard
          component="Menu"
          title={L.pageLabels.menu}
          subtitle={L.components.menu.subtitle}
        >
          {#snippet children(sz: SizeKey)}
            <MenuDemo {sz} />
          {/snippet}
        </PlayCard>
      {:else if active === "notepad"}
        <div class="overflow-x-auto w-full min-w-full min-h-[400px]">
          <Notepad {L} />
        </div>
        
      {:else if active === "progressBar"}
        <PlayCard
          component="ProgressBar"
          title={L.pageLabels.progressBar}
          subtitle={L.snippets.progressBar.subtitle}
        >
          {#snippet children(
            sz: SizeKey,
            variant: string,
            label: string,
            disabled: boolean
          )}
            <ProgressBar
              value={75}
              {sz}
              variant={variant as ComponentVariant}
              {label}
              {disabled}
              indeterminate
            />
          {/snippet}
        </PlayCard>
      {:else if active === "progressCircle"}
        <PlayCard
          component="ProgressCircle"
          title={L.pageLabels.progressCircle}
          subtitle={L.snippets.progressCircle.subtitle}
        >
          {#snippet children(
            sz: SizeKey,
            variant: string,
            label: string,
            disabled: boolean
          )}
            <ProgressCircle
              value={75}
              {sz}
              variant={variant as ComponentVariant}
              {label}
              {disabled}
              indeterminate
            />
          {/snippet}
        </PlayCard>
      {:else if active === "radio"}
        <PlayCard
          component="Radio"
          title={L.pageLabels.radio}
          subtitle={L.snippets.radio.subtitle}
        >
          {#snippet children(
            sz: SizeKey,
            variant: string,
            _label: string,
            disabled: boolean
          )}
            <div class="flex flex-col gap-2">
              <Radio
                {sz}
                variant={variant as ComponentVariant}
                {disabled}
                value="apple"
                bind:group={fruit}>{L.snippets.radio.apple}</Radio
              >
              <Radio
                {sz}
                variant={variant as ComponentVariant}
                {disabled}
                value="banana"
                bind:group={fruit}>{L.snippets.radio.banana}</Radio
              >
              <Radio
                {sz}
                variant={variant as ComponentVariant}
                {disabled}
                value="cherry"
                bind:group={fruit}>{L.snippets.radio.cherry}</Radio
              >
            </div>
          {/snippet}
        </PlayCard>
      {:else if active === "slider"}
        <PlayCard
          component="Slider"
          title={L.pageLabels.slider}
          subtitle={L.snippets.slider.subtitle}
        >
          {#snippet children(
            sz: SizeKey,
            variant: string,
            label: string,
            disabled: boolean,
            _type: string,
            showVal: boolean
          )}
            <Tooltip text={String(value)}>
              <Slider
                min={0}
                max={100}
                step={1}
                showValue={showVal}
                {sz}
                variant={variant as ComponentVariant}
                title={label ||
                  `${variant || L.snippets.slider.fallbackLabel} ${sz}`}
                bind:value
                {disabled}
              />
            </Tooltip>
          {/snippet}
        </PlayCard>
      {:else if active === "select"}
        <PlayCard
          component="Select"
          title={L.pageLabels.select}
          subtitle={L.snippets.select.subtitle}
        >
          {#snippet children(
            sz: SizeKey,
            variant: string,
            label: string,
            disabled: boolean
          )}
            <Tooltip text={label || L.snippets.select.label}>
              <Select
                {sz}
                variant={variant as FieldVariant}
                label={label || L.snippets.select.label}
                options={L.options.selectCountries}
                bind:value={selectedCountry}
                {disabled}
              />
            </Tooltip>
          {/snippet}
        </PlayCard>
      {:else if active === "splitter"}
        <PlayCard
          component="Splitter"
          title={L.pageLabels.splitter}
          subtitle={L.snippets.splitter.subtitle}
        >
          <SplitterDemo />
        </PlayCard>
      {:else if active === "switch"}
        <PlayCard
          component="Switch"
          title={L.pageLabels.switch}
          subtitle={L.snippets.switch.subtitle}
        >
          {#snippet children(
            sz: SizeKey,
            variant: string,
            label: string,
            disabled: boolean
          )}
            <Tooltip text={label || `${L.snippets.switch.labelPrefix} ${sz}`}>
              <Switch
                {sz}
                data-variant={variant || undefined}
                rightLabel={label || `${L.snippets.switch.labelPrefix} ${sz}`}
                {disabled}
              />
            </Tooltip>
          {/snippet}
        </PlayCard>
      {:else if active === "tablePagination"}
        <PlayCard
          component="Table"
          title={L.pageLabels.tablePagination}
          subtitle="Paginated data table"
        >
          {#snippet children(sz: SizeKey, variant: string)}
            {@render tableSnippet(sz, variant as TableVariant)}
          {/snippet}
        </PlayCard>
      {:else if active === "tabs"}
        <PlayCard
          component="Tabs"
          title={L.pageLabels.tabs}
          subtitle={L.snippets.tabs.subtitle}
        >
          {#snippet children(sz: SizeKey, variant: string)}
            {@render tabsSnippet(sz, variant as TabsVariant)}
          {/snippet}
        </PlayCard>
      {:else if active === "themeToggle"}
        <PlayCard
          component="ThemeToggle"
          title={L.pageLabels.themeToggle}
          subtitle={L.snippets.themeToggle.subtitle}
        >
          {#snippet children(
            sz: SizeKey,
            variant: string,
            label: string,
            disabled: boolean
          )}
            <Tooltip text={label}>
              <ThemeToggle
                {sz}
                {disabled}
                data-variant={variant || undefined}
                title={label || L.snippets.themeToggle.defaultLabel}
                class="mx-auto block"
              />
            </Tooltip>
          {/snippet}
        </PlayCard>
      {:else if active === "timePicker"}
        <PlayCard
          component="TimePicker"
          title={L.pageLabels.timePicker}
          subtitle={L.components.timePicker.subtitle}
        >
          {#snippet children(
            _sz: SizeKey,
            _variant: string,
            label: string,
            disabled: boolean
          )}
            <TimePicker
              label={label || L.components.timePicker.label}
              {disabled}
              placeholder={L.components.timePicker.placeholder}
              bind:value={selectedTime}
            />
          {/snippet}
        </PlayCard>
      {:else if active === "toast"}
        <PlayCard
          component="Toast"
          title={L.pageLabels.toast}
          subtitle={L.snippets.toast.subtitle}
        >
          {#snippet children(sz: SizeKey, variant: string)}
            {@render toastSnippet(sz, variant)}
          {/snippet}
        </PlayCard>
      {:else}
        <PlayCard
          component="Unknown"
          title="Unknown"
          subtitle={L.snippets.unknown.subtitle}
        >
          {@render emptySnippet()}
        </PlayCard>
      {/if}
    </main>
  </div>
</Container>
<!-- #endregion -->
