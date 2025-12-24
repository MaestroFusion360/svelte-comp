// src/lang.ts
import type { SelectOption } from "$lib/types";

const enTexts = {
  app: {
    version: "v1.1.8",
    title: "Svelte 5 UI Components",
    footer: "© 2025 MaestroFusion360",
    authorUrl: "https://github.com/MaestroFusion360/svelte-comp",
    language: {
      label: "Language",
      options: [
        { label: "English", value: "en" },
        { label: "Russian", value: "ru" },
        { label: "Spanish", value: "es" },
      ] satisfies ReadonlyArray<SelectOption>,
    },
  },
  pageLabels: {
    about: "About",
    accordion: "Accordion",
    button: "Button",
    card: "Card",
    carousel: "Carousel",
    checkbox: "CheckBox",
    codeView: "Code View",
    colorPicker: "Color Picker",
    datePicker: "Date Picker",
    dialog: "Dialog",
    field: "Field",
    filePicker: "File Picker",
    form: "Form",
    menu: "Menu",
    notepad: "Notepad",
    progressBar: "ProgressBar",
    progressCircle: "ProgressCircle",
    radio: "Radio",
    searchInput: "Search Input",
    select: "Select",
    slider: "Slider",
    splitter: "Splitter",
    switch: "Switch",
    tablePagination: "Table & Pagination",
    tabs: "Tabs",
    themeToggle: "Theme Toggle",
    timePicker: "Time Picker",
    toast: "Toast",
  },
  about: {
    heading: "About",
    meta: "Project Info",
    intro: {
      description:
        " is a clean, themeable, and fully typed component library built with ",
      frameworks: {
        runes: "Svelte 5 (Runes API)",
        tailwind: "TailwindCSS",
      },
      connector: " and ",
      closing: ".",
    },
    styling: {
      beforeFile: "Components are styled using CSS variables defined in ",
      file: "src/app.css",
      afterFile:
        ", making theme customization easy and consistent. Dark mode is enabled globally by adding the ",
      darkClass: ".dark",
      afterDark: " class to the document root.",
    },
    patterns:
      "The library demonstrates practical UI patterns such as responsive cards, interactive forms, dialogs, and data tables, following a unified design system for modern Svelte projects.",
    versionLabel: "Version",
    authorLabel: "Author",
    authorName: "MaestroFusion360",
  },
  states: {
    emptyPreview: "No preview available",
  },
  options: {
    selectCountries: [
      { label: "Great Britain", value: "en" },
      { label: "Russia", value: "ru" },
      { label: "Spain", value: "es" },
    ] satisfies ReadonlyArray<SelectOption>,
    formGender: [
      { value: "male", label: "Male" },
      { value: "female", label: "Female" },
      { value: "other", label: "Other" },
    ] satisfies ReadonlyArray<SelectOption>,
    formCountries: [
      { value: "us", label: "United States" },
      { value: "ca", label: "Canada" },
      { value: "uk", label: "United Kingdom" },
      { value: "au", label: "Australia" },
    ] satisfies ReadonlyArray<SelectOption>,
  },
  form: {
    header: "Registration form",
    footer: {
      cancel: "Cancel",
      submit: "Submit",
      random: "Random",
    },
    fields: {
      firstName: "First name",
      lastName: "Last name",
      email: "Email",
      password: "Password",
      confirmPassword: "Confirm password",
      age: "Age",
      gender: "Gender",
      country: "Country",
      about: "About yourself",
      newsletter: "Subscribe to newsletter",
      tos: "Accept terms and conditions",
    },
    validators: {
      passwordLength: "Minimum 6 characters",
      passwordMatch: "Passwords do not match",
      adultsOnly: "Adults only",
    },
  },
  table: {
    positionPrefix: "Position",
    columns: {
      id: "ID",
      item: "Product",
      qty: "Quantity",
      price: "Price",
    },
  },
  toasts: {
    confirmTitle: "Action Confirmed",
    confirmMessage: "Your action was successfully completed!",
    cancelTitle: "Action Cancelled",
    cancelMessage: "You cancelled the action.",
  },
  menuDemo: {
    menus: {
      file: "File",
      edit: "Edit",
      view: "View",
    },
    actions: {
      new: "New",
      open: "Open",
      save: "Save",
      export: "Export",
      exportCsv: "CSV",
      exportPdf: "PDF",
      exportZip: "ZIP archive",
      close: "Close",
      undo: "Undo",
      redo: "Redo",
      cut: "Cut",
      copy: "Copy",
      paste: "Paste",
      find: "Find",
      findNext: "Find Next",
      findPrev: "Find Previous",
      theme: "Theme",
      light: "Light",
      dark: "Dark",
    },
    prompt: "Pick any menu item or use keyboard arrows/Enter/Esc",
    fallbackLabel: "unknown",
  },
  notepad: {
    menu: {
      file: "File",
      edit: "Edit",
      view: "View",
      language: "Language",
      help: "Help",
      settings: "Settings",
    },
    actions: {
      new: "New",
      open: "Open",
      save: "Save",
      undo: "Undo",
      redo: "Redo",
      cut: "Cut",
      copy: "Copy",
      paste: "Paste",
      about: "About",
      statusBar: "Status bar",
      options: "Options",
      xs: "XS",
      sm: "SM",
      md: "MD",
      lg: "LG",
      xl: "XL",
    },
    confirmNew: "Clear the current note?",
    openError: "Unable to open the file",
    saveError: "Unable to save the file",
    cutError: "Unable to cut selection",
    copyError: "Unable to copy selection",
    pasteError: "Unable to paste",
    undoError: "Nothing to undo",
    redoError: "Nothing to redo",
    aboutText: "Simple notepad demo with menu actions and syntax highlighting.",
    optionsText: "Change appearance options such as status bar visibility.",
  },
  components: {
    codeView: {
      subtitle: "Display code snippets",
    },
    colorPicker: {
      label: "Choose color",
      placeholder: "No color selected",
      subtitle: "Pick a brand color",
    },
    datePicker: {
      label: "Choose date",
      placeholder: "No date selected",
      subtitle: "Schedule important dates",
    },
    dialog: {
      ok: "OK",
      cancel: "Cancel",
    },
    filePicker: {
      label: "Choose files",
      subtitle: "Upload interactions",
    },
    menu: { subtitle: "Menu with size options" },
    timePicker: {
      label: "Choose time",
      placeholder: "No time selected",
      subtitle: "Plan sessions",
    },
  },
  playground: {
    controls: {
      size: "Size",
      variant: "Variant",
      label: "Label",
      disabled: "Disabled",
      fieldType: "Field type",
      sliderShowValue: "Value",
      playcardLabel: "Label",
      playcardSubtitle: "Component preview",
    },
  },
  snippets: {
    about: {
      description:
        "Cards are flexible containers used to group related content. Use the size control above to preview padding and typography changes.",
      helper:
        "They accept header and footer snippets so you can compose toolbars, badges, or any custom markup.",
    },
    card: {
      header: "Feature Overview",
      updated: "Updated just now",
      docsLink: "View Docs",
    },
    accordion: {
      items: [
        { title: "First", content: "This is the first item" },
        { title: "Second", content: "This is the second item" },
        { title: "Third", content: "This is the third item" },
      ],
    },
    carousel: {
      slides: [
        {
          title: "First Slide",
          content: "This is the first slide content",
          image: "https://picsum.photos/800/400?1",
        },
        {
          title: "Second Slide",
          content: "This is the second slide content",
          image: "https://picsum.photos/800/400?2",
        },
        {
          title: "Third Slide",
          content: "This is the third slide content",
          image: "https://picsum.photos/800/400?3",
        },
      ],
    },
    dialog: {
      button: "Open Dialog",
      confirm: "Are you sure you want to continue?",
      title: "Dialog",
      subtitle: "Modal interactions",
    },
    toast: {
      buttonPrefix: "Show ",
      subtitle: "Notification toasts",
    },
    field: {
      text: "Text Field",
      number: "Number Field",
      textarea: "Textarea Field",
      placeholder: "0",
      subtitle: "Sizes and variants",
    },
    tabs: {
      labels: ["One", "Two", "Three"],
      contents: ["One content", "Two content", "Three content"],
      subtitle: "Different styles",
    },
    select: {
      label: "Country",
      subtitle: "Sizes and variants",
    },
    switch: {
      subtitle: "Sizes",
      labelPrefix: "Switch",
    },
    slider: {
      subtitle: "Sizes and variants",
      fallbackLabel: "slider",
    },
    splitter: {
      subtitle: "Resizable panels",
    },
    progressBar: {
      subtitle: "Sizes and variants",
    },
    progressCircle: {
      subtitle: "Sizes and variants",
    },
    radio: {
      subtitle: "Sizes and variants",
      apple: "Apple",
      banana: "Banana",
      cherry: "Cherry",
    },
    searchInput: {
      subtitle: "Search example",
      label: "Search",
      placeholder: "Type to filter...",
      empty: "No matches",
      items: ["Svelte", "TypeScript", "TailwindCSS", "Storybook", "Prism.js"],
    },
    tablePagination: {
      subtitle: "Paginated data table",
    },
    button: {
      subtitle: "Variants and sizes",
    },
    checkbox: {
      subtitle: "Variants and sizes",
    },
    cardSnippet: {
      subtitle: "Layouts and content blocks",
    },
    accordionPlay: {
      subtitle: "Expand and collapse sections",
    },
    carouselPlay: {
      subtitle: "Slide transitions",
    },
    themeToggle: {
      subtitle: "System and manual themes",
      defaultLabel: "Theme toggle",
    },
    unknown: {
      component: "Unknown",
      title: "Unknown",
      subtitle: "No demo available",
    },
  },
} as const;

const ruTexts = {
  app: {
    version: "v1.1.8",
    title: "Svelte 5 UI Components",
    footer: "© 2025 MaestroFusion360",
    authorUrl: "https://github.com/MaestroFusion360/svelte-comp",
    language: {
      label: "Язык",
      options: [
        { label: "Английский", value: "en" },
        { label: "Русский", value: "ru" },
        { label: "Испанский", value: "es" },
      ] satisfies ReadonlyArray<SelectOption>,
    },
  },
  pageLabels: {
    about: "О проекте",
    accordion: "Аккордеон",
    button: "Кнопка",
    card: "Карточка",
    carousel: "Карусель",
    checkbox: "Чекбокс",
    codeView: "Просмотр кода",
    colorPicker: "Выбор цвета",
    datePicker: "Выбор даты",
    dialog: "Диалог",
    field: "Поле ввода",
    filePicker: "Загрузка файлов",
    form: "Форма",
    menu: "Меню",
    notepad: "Блокнот",
    progressBar: "Прогресс-бар",
    progressCircle: "Прогресс-круг",
    radio: "Радио-кнопки",
    searchInput: "Поиск",
    select: "Выпадающий список",
    slider: "Ползунок",
    splitter: "Сплиттер",
    switch: "Переключатель",
    tablePagination: "Таблица и пагинация",
    tabs: "Вкладки",
    themeToggle: "Переключатель темы",
    timePicker: "Выбор времени",
    toast: "Уведомления",
  },
  about: {
    heading: "О библиотеке",
    meta: "Информация о проекте",
    intro: {
      description:
        " — это аккуратная настраиваемая и полностью типизированная библиотека компонентов, построенная на ",
      frameworks: {
        runes: "Svelte 5 (Runes API)",
        tailwind: "TailwindCSS",
      },
      connector: " и ",
      closing: ".",
    },
    styling: {
      beforeFile:
        "Компоненты стилизуются через CSS переменные, определённые в ",
      file: "src/app.css",
      afterFile:
        ", что упрощает и унифицирует смену темы. Тёмная тема включается глобально добавлением класса ",
      darkClass: ".dark",
      afterDark: " к корневому элементу документа.",
    },
    patterns:
      "Библиотека показывает практические паттерны интерфейса: адаптивные карточки, интерактивные формы, диалоги и таблицы данных в рамках единой дизайн системы для современных Svelte проектов.",
    versionLabel: "Версия",
    authorLabel: "Автор",
    authorName: "MaestroFusion360",
  },
  states: {
    emptyPreview: "Нет предпросмотра",
  },
  options: {
    selectCountries: [
      { label: "Россия", value: "ru" },
      { label: "США", value: "us" },
      { label: "Германия", value: "de" },
    ] satisfies ReadonlyArray<SelectOption>,
    formGender: [
      { value: "male", label: "Мужчина" },
      { value: "female", label: "Женщина" },
      { value: "other", label: "Другое" },
    ] satisfies ReadonlyArray<SelectOption>,
    formCountries: [
      { value: "us", label: "США" },
      { value: "ca", label: "Канада" },
      { value: "uk", label: "Великобритания" },
      { value: "au", label: "Австралия" },
    ] satisfies ReadonlyArray<SelectOption>,
  },
  form: {
    header: "Форма регистрации",
    footer: {
      cancel: "Отмена",
      submit: "Отправить",
      random: "Рандом",
    },
    fields: {
      firstName: "Имя",
      lastName: "Фамилия",
      email: "Email",
      password: "Пароль",
      confirmPassword: "Подтверждение пароля",
      age: "Возраст",
      gender: "Пол",
      country: "Страна",
      about: "О себе",
      newsletter: "Подписаться на рассылку",
      tos: "Принять условия использования",
    },
    validators: {
      passwordLength: "Минимум 6 символов",
      passwordMatch: "Пароли не совпадают",
      adultsOnly: "Только для совершеннолетних",
    },
  },
  table: {
    positionPrefix: "Позиция",
    columns: {
      id: "ID",
      item: "Товар",
      qty: "Количество",
      price: "Цена",
    },
  },
  toasts: {
    confirmTitle: "Действие выполнено",
    confirmMessage: "Ваше действие успешно завершено.",
    cancelTitle: "Действие отменено",
    cancelMessage: "Вы отменили действие.",
  },
  menuDemo: {
    menus: {
      file: "Файл",
      edit: "Правка",
      view: "Вид",
    },
    actions: {
      new: "Новый",
      open: "Открыть",
      save: "Сохранить",
      export: "Экспорт",
      exportCsv: "CSV",
      exportPdf: "PDF",
      exportZip: "ZIP-архив",
      close: "Закрыть",
      undo: "Отменить",
      redo: "Повторить",
      cut: "Вырезать",
      copy: "Копировать",
      paste: "Вставить",
      find: "Найти",
      findNext: "Найти далее",
      findPrev: "Найти назад",
      theme: "Тема",
      light: "Светлая",
      dark: "Тёмная",
    },
    prompt: "Выберите пункт меню или используйте стрелки/Enter/Esc",
    fallbackLabel: "неизвестно",
  },
  notepad: {
    menu: {
      file: "Файл",
      edit: "Правка",
      view: "Вид",
      language: "Язык",
      help: "Справка",
      settings: "Настройки",
    },
    actions: {
      new: "Новый",
      open: "Открыть",
      save: "Сохранить",
      undo: "Отменить",
      redo: "Повторить",
      cut: "Вырезать",
      copy: "Копировать",
      paste: "Вставить",
      about: "О программе",
      statusBar: "Строка состояния",
      options: "Параметры",
      xs: "XS",
      sm: "SM",
      md: "MD",
      lg: "LG",
      xl: "XL",
    },
    confirmNew: "Очистить текущую заметку?",
    openError: "Не удалось открыть файл",
    saveError: "Не удалось сохранить файл",
    cutError: "Не удалось вырезать",
    copyError: "Не удалось скопировать",
    pasteError: "Не удалось вставить",
    undoError: "Нечего отменять",
    redoError: "Нечего повторять",
    aboutText: "Простой пример блокнота с меню и подсветкой синтаксиса.",
    optionsText: "Настройте внешний вид, например строку состояния.",
  },
  components: {
    codeView: {
      subtitle: "Отображение фрагментов кода",
    },
    colorPicker: {
      label: "Выберете цвет",
      subtitle: "Выбор фирменного цвета",
      placeholder: "Цвет не выбран",
    },
    datePicker: {
      label: "Выбрать дату",
      subtitle: "Планирование важных дат",
      placeholder: "Дата не выбрана",
    },
    dialog: {
      ok: "ОК",
      cancel: "Отмена",
    },
    filePicker: {
      label: "Выбрать файлы",
      subtitle: "Загрузка файлов",
      placeholder: "Файлы не выбраны",
    },
    menu: { subtitle: "Меню с опциями размеров" },
    timePicker: {
      label: "Выберите время",
      subtitle: "Планирование сессий",
      placeholder: "Время не выбрано",
    },
  },
  playground: {
    controls: {
      size: "Размер",
      variant: "Вариант",
      label: "Подпись",
      disabled: "Отключено",
      fieldType: "Тип поля",
      sliderShowValue: "Значение",
      playcardLabel: "Подпись",
      playcardSubtitle: "Превью компонента",
    },
  },
  snippets: {
    about: {
      description:
        "Карточки это гибкие контейнеры для группировки связанного контента. Используйте переключатель размера выше, чтобы посмотреть как меняются отступы и типографика.",
      helper:
        "Они принимают сниппеты заголовка и футера, так что можно собирать панели, бейджи и любой кастомный контент.",
    },
    card: {
      header: "Обзор возможностей",
      updated: "Обновлено только что",
      docsLink: "Документация",
    },
    accordion: {
      items: [
        { title: "Первый", content: "Это первый элемент" },
        { title: "Второй", content: "Это второй элемент" },
        { title: "Третий", content: "Это третий элемент" },
      ],
    },
    carousel: {
      slides: [
        {
          title: "Первый слайд",
          content: "Контент первого слайда",
          image: "https://picsum.photos/800/400?1",
        },
        {
          title: "Второй слайд",
          content: "Контент второго слайда",
          image: "https://picsum.photos/800/400?2",
        },
        {
          title: "Третий слайд",
          content: "Контент третьего слайда",
          image: "https://picsum.photos/800/400?3",
        },
      ],
    },
    dialog: {
      button: "Открыть диалог",
      confirm: "Вы уверены, что хотите продолжить?",
      title: "Диалог",
      subtitle: "Модальные окна",
    },
    toast: {
      buttonPrefix: "Показать ",
      subtitle: "Уведомления toast",
    },
    field: {
      text: "Текстовое поле",
      number: "Числовое поле",
      textarea: "Многострочное поле",
      placeholder: "0",
      subtitle: "Размеры и варианты",
    },
    tabs: {
      labels: ["Один", "Два", "Три"],
      contents: ["Контент один", "Контент два", "Контент три"],
      subtitle: "Разные стили",
    },
    select: {
      label: "Страна",
      subtitle: "Размеры и варианты",
    },
    switch: {
      subtitle: "Размеры",
      labelPrefix: "Переключатель",
    },
    slider: {
      subtitle: "Размеры и варианты",
      fallbackLabel: "ползунок",
    },
    splitter: {
      subtitle: "Изменяемые панели",
    },
    progressBar: {
      subtitle: "Размеры и варианты",
    },
    progressCircle: {
      subtitle: "Размеры и варианты",
    },
    radio: {
      subtitle: "Размеры и варианты",
      apple: "Яблоко",
      banana: "Банан",
      cherry: "Вишня",
    },
    searchInput: {
      subtitle: "Пример поиска",
      label: "Поиск",
      placeholder: "Введите запрос...",
      empty: "Ничего не найдено",
      items: ["Компоненты", "Документация", "Стили", "Шаблоны", "Истории"],
    },
    tablePagination: {
      subtitle: "Таблица и пагинация",
    },
    button: {
      subtitle: "Варианты и размеры",
    },
    checkbox: {
      subtitle: "Варианты и размеры",
    },
    cardSnippet: {
      subtitle: "Макеты и блоки контента",
    },
    accordionPlay: {
      subtitle: "Развернуть и свернуть секции",
    },
    carouselPlay: {
      subtitle: "Переходы между слайдами",
    },
    themeToggle: {
      subtitle: "Системная и ручная тема",
      defaultLabel: "Переключатель темы",
    },
    unknown: {
      component: "Неизвестный компонент",
      title: "Неизвестно",
      subtitle: "Демо недоступно",
    },
  },
} as const;

const esTexts = {
  app: {
    version: "v1.1.8",
    title: "Svelte 5 UI Components",
    footer: "© 2025 MaestroFusion360",
    authorUrl: "https://github.com/MaestroFusion360/svelte-comp",
    language: {
      label: "Idioma",
      options: [
        { label: "Inglés", value: "en" },
        { label: "Ruso", value: "ru" },
        { label: "Español", value: "es" },
      ] satisfies ReadonlyArray<SelectOption>,
    },
  },
  pageLabels: {
    about: "Acerca de",
    accordion: "Acordeón",
    button: "Botón",
    card: "Tarjeta",
    carousel: "Carrusel",
    checkbox: "Casilla",
    colorPicker: "Selector de color",
    codeView: "Vista de código",
    datePicker: "Selector de fecha",
    dialog: "Diálogo",
    field: "Campo",
    filePicker: "Selector de archivos",
    form: "Formulario",
    menu: "Menú",
    notepad: "Bloc de notas",
    progressBar: "Barra de progreso",
    progressCircle: "Círculo de progreso",
    radio: "Botones de opción",
    searchInput: "Búsqueda",
    select: "Lista desplegable",
    slider: "Control deslizante",
    splitter: "Divisor",
    switch: "Interruptor",
    tablePagination: "Tabla y paginación",
    tabs: "Pestañas",
    themeToggle: "Cambio de tema",
    timePicker: "Selector de hora",
    toast: "Notificaciones",
  },
  about: {
    heading: "Acerca del proyecto",
    meta: "Información del proyecto",
    intro: {
      description:
        " es una biblioteca de componentes limpia, personalizable y totalmente tipada, construida con ",
      frameworks: {
        runes: "Svelte 5 (Runes API)",
        tailwind: "TailwindCSS",
      },
      connector: " y ",
      closing: ".",
    },
    styling: {
      beforeFile: "Los componentes usan variables CSS definidas en ",
      file: "src/app.css",
      afterFile:
        ", lo que hace que la personalización de temas sea sencilla y coherente. El modo oscuro se activa globalmente añadiendo la clase ",
      darkClass: ".dark",
      afterDark: " al elemento raíz del documento.",
    },
    patterns:
      "La biblioteca demuestra patrones de UI prácticos como tarjetas responsivas, formularios interactivos, cuadros de diálogo y tablas de datos, siguiendo un sistema de diseño unificado para proyectos modernos en Svelte.",
    versionLabel: "Versión",
    authorLabel: "Autor",
    authorName: "MaestroFusion360",
  },
  states: {
    emptyPreview: "Sin vista previa",
  },
  options: {
    selectCountries: [
      { label: "Rusia", value: "ru" },
      { label: "EE. UU.", value: "us" },
      { label: "Alemania", value: "de" },
    ] satisfies ReadonlyArray<SelectOption>,
    formGender: [
      { value: "male", label: "Hombre" },
      { value: "female", label: "Mujer" },
      { value: "other", label: "Otro" },
    ] satisfies ReadonlyArray<SelectOption>,
    formCountries: [
      { value: "us", label: "Estados Unidos" },
      { value: "ca", label: "Canadá" },
      { value: "uk", label: "Reino Unido" },
      { value: "au", label: "Australia" },
    ] satisfies ReadonlyArray<SelectOption>,
  },
  form: {
    header: "Formulario de registro",
    footer: {
      cancel: "Cancelar",
      submit: "Enviar",
      random: "Aleatorio",
    },
    fields: {
      firstName: "Nombre",
      lastName: "Apellido",
      email: "Email",
      password: "Contraseña",
      confirmPassword: "Confirmar contraseña",
      age: "Edad",
      gender: "Género",
      country: "País",
      about: "Sobre ti",
      newsletter: "Suscribirse al boletín",
      tos: "Aceptar los términos y condiciones",
    },
    validators: {
      passwordLength: "Al menos 6 caracteres",
      passwordMatch: "Las contraseñas no coinciden",
      adultsOnly: "Solo para mayores de edad",
    },
  },
  table: {
    positionPrefix: "Posición",
    columns: {
      id: "ID",
      item: "Producto",
      qty: "Cantidad",
      price: "Precio",
    },
  },
  toasts: {
    confirmTitle: "Acción confirmada",
    confirmMessage: "Tu acción se completó correctamente.",
    cancelTitle: "Acción cancelada",
    cancelMessage: "Has cancelado la acción.",
  },
  menuDemo: {
    menus: {
      file: "Archivo",
      edit: "Editar",
      view: "Vista",
    },
    actions: {
      new: "Nuevo",
      open: "Abrir",
      save: "Guardar",
      export: "Exportar",
      exportCsv: "CSV",
      exportPdf: "PDF",
      exportZip: "Archivo ZIP",
      close: "Cerrar",
      undo: "Deshacer",
      redo: "Rehacer",
      cut: "Cortar",
      copy: "Copiar",
      paste: "Pegar",
      find: "Buscar",
      findNext: "Buscar siguiente",
      findPrev: "Buscar anterior",
      theme: "Tema",
      light: "Claro",
      dark: "Oscuro",
    },
    prompt: "Elige cualquier elemento del menú o usa flechas/Enter/Esc",
    fallbackLabel: "desconocido",
  },
  notepad: {
    menu: {
      file: "Archivo",
      edit: "Editar",
      view: "Vista",
      language: "Idioma",
      help: "Ayuda",
      settings: "Configuración",
    },
    actions: {
      new: "Nuevo",
      open: "Abrir",
      save: "Guardar",
      undo: "Deshacer",
      redo: "Rehacer",
      cut: "Cortar",
      copy: "Copiar",
      paste: "Pegar",
      about: "Acerca de",
      statusBar: "Barra de estado",
      options: "Opciones",
      xs: "XS",
      sm: "SM",
      md: "MD",
      lg: "LG",
      xl: "XL",
    },
    confirmNew: "¿Borrar la nota actual?",
    openError: "No se pudo abrir el archivo",
    saveError: "No se pudo guardar el archivo",
    cutError: "No se pudo cortar",
    copyError: "No se pudo copiar",
    pasteError: "No se pudo pegar",
    undoError: "Nada que deshacer",
    redoError: "Nada que rehacer",
    aboutText: "Un bloc de notas simple con menú y resaltado de sintaxis.",
    optionsText:
      "Cambia opciones de apariencia como la visibilidad de la barra de estado.",
  },
  components: {
    codeView: {
      subtitle: "Mostrar fragmentos de código",
    },
    colorPicker: {
      label: "Elegir color",
      subtitle: "Selecciona el color de marca",
      placeholder: "Ningún color seleccionado",
    },
    datePicker: {
      label: "Elegir fecha",
      subtitle: "Planificación de fechas importantes",
      placeholder: "Ninguna fecha seleccionada",
    },
    dialog: {
      ok: "OK",
      cancel: "Cancelar",
    },
    filePicker: {
      label: "Elegir archivos",
      subtitle: "Interacciones de subida",
      placeholder: "Ningún archivo seleccionado",
    },
    menu: { subtitle: "Menú con opciones de tamaño" },
    timePicker: {
      label: "Seleccionar hora",
      subtitle: "Planificar sesiones",
      placeholder: "Время не выбрано",
    },
  },
  playground: {
    controls: {
      size: "Tamaño",
      variant: "Variante",
      label: "Etiqueta",
      disabled: "Desactivado",
      fieldType: "Tipo de campo",
      sliderShowValue: "Significado",
      playcardLabel: "Etiqueta",
      playcardSubtitle: "Vista previa del componente",
    },
  },
  snippets: {
    about: {
      description:
        "Las tarjetas son contenedores flexibles para agrupar contenido relacionado. Usa el control de tamaño de arriba para previsualizar cambios en espaciado y tipografía.",
      helper:
        "Aceptan fragmentos para cabecera y pie, así puedes componer barras de herramientas, insignias o cualquier marcado personalizado.",
    },
    card: {
      header: "Resumen de funciones",
      updated: "Actualizado hace un momento",
      docsLink: "Ver documentación",
    },
    accordion: {
      items: [
        { title: "Primero", content: "Este es el primer elemento" },
        { title: "Segundo", content: "Este es el segundo elemento" },
        { title: "Tercero", content: "Este es el tercer elemento" },
      ],
    },
    carousel: {
      slides: [
        {
          title: "Primera diapositiva",
          content: "Contenido de la primera diapositiva",
          image: "https://picsum.photos/800/400?1",
        },
        {
          title: "Segunda diapositiva",
          content: "Contenido de la segunda diapositiva",
          image: "https://picsum.photos/800/400?2",
        },
        {
          title: "Tercera diapositiva",
          content: "Contenido de la tercera diapositiva",
          image: "https://picsum.photos/800/400?3",
        },
      ],
    },
    dialog: {
      button: "Abrir diálogo",
      confirm: "¿Seguro que quieres continuar?",
      title: "Diálogo",
      subtitle: "Interacciones modales",
    },
    toast: {
      buttonPrefix: "Mostrar ",
      subtitle: "Notificaciones tipo toast",
    },
    field: {
      text: "Campo de texto",
      number: "Campo numérico",
      textarea: "Área de texto",
      placeholder: "0",
      subtitle: "Tamaños y variantes",
    },
    tabs: {
      labels: ["Uno", "Dos", "Tres"],
      contents: ["Contenido uno", "Contenido dos", "Contenido tres"],
      subtitle: "Estilos diferentes",
    },
    select: {
      label: "País",
      subtitle: "Tamaños y variantes",
    },
    switch: {
      subtitle: "Tamaños",
      labelPrefix: "Interruptor",
    },
    slider: {
      subtitle: "Tamaños y variantes",
      fallbackLabel: "control deslizante",
    },
    splitter: {
      subtitle: "Paneles redimensionables",
    },
    progressBar: {
      subtitle: "Tamaños y variantes",
    },
    progressCircle: {
      subtitle: "Tamaños y variantes",
    },
    radio: {
      subtitle: "Tamaños y variantes",
      apple: "Manzana",
      banana: "Plátano",
      cherry: "Cereza",
    },
    searchInput: {
      subtitle: "Ejemplo de búsqueda",
      label: "Buscar",
      placeholder: "Escribe para filtrar...",
      empty: "Sin resultados",
      items: [
        "Componentes",
        "Documentación",
        "Estilos",
        "Plantillas",
        "Historias",
      ],
    },
    tablePagination: {
      subtitle: "Tabla de datos paginada",
    },
    button: {
      subtitle: "Variantes y tamaños",
    },
    checkbox: {
      subtitle: "Variantes y tamaños",
    },
    cardSnippet: {
      subtitle: "Diseños y bloques de contenido",
    },
    accordionPlay: {
      subtitle: "Expandir y contraer secciones",
    },
    carouselPlay: {
      subtitle: "Transiciones de diapositivas",
    },
    themeToggle: {
      subtitle: "Tema del sistema y manual",
      defaultLabel: "Cambio de tema",
    },
    unknown: {
      component: "Desconocido",
      title: "Desconocido",
      subtitle: "No hay demo disponible",
    },
  },
} as const;

export const TEXTS = {
  en: enTexts,
  ru: ruTexts,
  es: esTexts,
} as const;
