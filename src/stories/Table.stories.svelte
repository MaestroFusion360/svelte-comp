<!-- src/stories/Table.stories.svelte -->
<script module lang="ts">
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import Table from "$lib/Table.svelte";
  import { SIZES } from "$lib/types";
  import { times } from "$utils";
  import type { Column, TableVariant } from "$lib/types";

  type EmployeeRow = {
    id: string;
    name: string;
    role: string;
    experience: number;
    location: string;
    status: string;
  };

  const columns = [
    { key: "id", label: "ID", width: "80px", align: "start" },
    { key: "name", label: "Name", align: "start" },
    { key: "role", label: "Role", align: "start" },
    {
      key: "experience",
      label: "Experience (yrs)",
      width: "150px",
      align: "end",
    },
    { key: "location", label: "Location", align: "start" },
    { key: "status", label: "Status", width: "120px", align: "center" },
  ] as const satisfies Column<EmployeeRow>[];

  const baseRows: EmployeeRow[] = [
    {
      id: "EMP-101",
      name: "Amelia Winters",
      role: "Product Lead",
      experience: 6,
      location: "Berlin",
      status: "Active",
    },
    {
      id: "EMP-108",
      name: "Leo Martins",
      role: "UX Designer",
      experience: 4,
      location: "Lisbon",
      status: "Active",
    },
    {
      id: "EMP-115",
      name: "Priya Rao",
      role: "Data Analyst",
      experience: 5,
      location: "London",
      status: "Onboarding",
    },
    {
      id: "EMP-122",
      name: "Miles Carter",
      role: "Backend Developer",
      experience: 8,
      location: "New York",
      status: "Active",
    },
    {
      id: "EMP-130",
      name: "Yuna Mori",
      role: "Frontend Developer",
      experience: 3,
      location: "Tokyo",
      status: "Leave",
    },
    {
      id: "EMP-134",
      name: "Felix Anders",
      role: "QA Analyst",
      experience: 7,
      location: "Berlin",
      status: "Active",
    },
    {
      id: "EMP-141",
      name: "Sara Bennett",
      role: "Product Manager",
      experience: 9,
      location: "London",
      status: "Active",
    },
    {
      id: "EMP-149",
      name: "Omar Castillo",
      role: "Support Engineer",
      experience: 4,
      location: "Chicago",
      status: "Onboarding",
    },
  ];

  const cityPool = ["Berlin", "Lisbon", "New York", "London", "Tokyo", "Paris"];
  const rolePool = [
    "UX Researcher",
    "QA Analyst",
    "Frontend Developer",
    "Backend Developer",
    "Data Analyst",
    "Support Engineer",
  ];
  const statusPool = ["Active", "Onboarding", "Leave"];

  const generatedRows: EmployeeRow[] = times(12, (idx) => ({
    id: `EMP-${200 + idx}`,
    name: `Team Member ${idx + 1}`,
    role: rolePool[idx % rolePool.length],
    experience: 2 + (idx % 8),
    location: cityPool[(idx + 2) % cityPool.length],
    status: statusPool[idx % statusPool.length],
  }));

  const rows: EmployeeRow[] = [...baseRows, ...generatedRows];

  const variantOptions: TableVariant[] = [
    "default",
    "dense",
    "list",
    "noBorder",
    "noTitle",
    "zebra",
  ];

  const { Story } = defineMeta({
    title: "Components/Table",
    component: Table,
    tags: ["autodocs"],
    args: {
      columns,
      rows,
      variant: "default",
      stickyHeader: false,
      sz: "md",
      class: "",
    },
    argTypes: {
      variant: { control: "select", options: variantOptions },
      sz: { control: "select", options: SIZES },
      stickyHeader: { control: "boolean" },
      columns: { table: { disable: true } },
      rows: { table: { disable: true } },
      pagination: { table: { disable: true } },
      class: { table: { disable: true } },
    },
  });
</script>

<Story name="Default">
  {#snippet template(args)}
    <Table {...args} />
  {/snippet}
</Story>

<Story name="Dense Variant" args={{ variant: "dense" }}>
  {#snippet template(args)}
    <Table {...args} />
  {/snippet}
</Story>

<Story name="Zebra Variant" args={{ variant: "zebra" }}>
  {#snippet template(args)}
    <Table {...args} />
  {/snippet}
</Story>

<Story name="List Variant" args={{ variant: "list", sz: "sm" }}>
  {#snippet template(args)}
    <Table {...args} />
  {/snippet}
</Story>

<Story name="No Border" args={{ variant: "noBorder" }}>
  {#snippet template(args)}
    <Table {...args} />
  {/snippet}
</Story>

<Story name="No Title" args={{ variant: "noTitle" }}>
  {#snippet template(args)}
    <Table {...args} />
  {/snippet}
</Story>

<Story name="Sticky Header" args={{ stickyHeader: true }}>
  {#snippet template(args)}
    <Table {...args} />
  {/snippet}
</Story>
