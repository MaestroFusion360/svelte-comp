// src/lib/lang.ts

const enTexts = {
  components: {
    colorPicker: {
      text: "Choose color",
      color: "Color",
      clear: "Clear",
      placeholder: "No color selected",
      selectedColor: "Selected color",
    },
    datePicker: {
      text: "Choose date",
      placeholder: "No date selected",
      date: "Date",
      clear: "Clear",
      selectedDate: "Selected date",
    },
    dialog: {
      ok: "OK",
      cancel: "Cancel",
    },
    filePicker: {
      text: "Choose files",
      clear: "Clear",
      dragDrop: "Drag and drop files here or click to browse",
      accepted: "Accepted",
      selectedFiles: "Selected files",
      placeholder: "No files selected",
      fileCount: "{n} file(s) selected",
      totalSize: "Total size",
    },
    menu: { subtitle: "Menu with size options" },
    primaryColorSelect: { text: "Primary color" },
    timePicker: {
      text: "Choose time",
      placeholder: "No time selected",
      clear: "Clear",
      hour: "Hour",
      minute: "Minute",
      period: "Period",
      selectedTime: "Selected time",
      switchTo12h: "12h",
      switchTo24h: "24h",
    },
  },
} as const;

const ruTexts = {
  components: {
    colorPicker: {
      text: "Выбрать цвет",
      color: "Цвет",
      clear: "Очистить",
      placeholder: "Цвет не выбран",
      selectedColor: "Выбранный цвет",
    },
    datePicker: {
      text: "Выбрать дату",
      placeholder: "Дата не выбрана",
      date: "Дата",
      clear: "Очистить",
      selectedDate: "Выбранная дата",
    },
    dialog: {
      ok: "ОК",
      cancel: "Отмена",
    },
    filePicker: {
      text: "Выбрать файлы",
      clear: "Очистить",
      dragDrop: "Перетащите файлы сюда или нажмите, чтобы выбрать",
      accepted: "Допустимые форматы",
      selectedFiles: "Выбранные файлы",
      placeholder: "Файлы не выбраны",
      fileCount: "{n} файл(ов) выбрано",
      totalSize: "Общий размер",
    },
    menu: { subtitle: "Меню с вариантами размеров" },
    primaryColorSelect: { text: "Основной цвет" },
    timePicker: {
      text: "Выбрать время",
      placeholder: "Время не выбрано",
      clear: "Очистить",
      hour: "Час",
      minute: "Минута",
      period: "Период",
      selectedTime: "Выбранное время",
      switchTo12h: "12ч",
      switchTo24h: "24ч",
    },
  },
} as const;

const esTexts = {
  components: {
    colorPicker: {
      text: "Elegir color",
      color: "Color",
      clear: "Limpiar",
      placeholder: "Ningún color seleccionado",
      selectedColor: "Color seleccionado",
    },
    datePicker: {
      text: "Elegir fecha",
      placeholder: "Sin fecha",
      date: "Fecha",
      clear: "Limpiar",
      selectedDate: "Fecha seleccionada",
    },
    dialog: {
      ok: "OK",
      cancel: "Cancelar",
    },
    filePicker: {
      text: "Elegir archivos",
      clear: "Limpiar",
      dragDrop: "Arrastra los archivos aquí o haz clic para seleccionar",
      accepted: "Formatos permitidos",
      selectedFiles: "Archivos seleccionados",
      placeholder: "No hay archivos",
      fileCount: "{n} archivo(s) seleccionado(s)",
      totalSize: "Tamaño total",
    },
    menu: { subtitle: "Menú con opciones de tamaño" },
    primaryColorSelect: { text: "Color primario" },
    timePicker: {
      text: "Elegir hora",
      placeholder: "Ninguna hora seleccionada",
      clear: "Limpiar",
      hour: "Hora",
      minute: "Minuto",
      period: "Período",
      selectedTime: "Hora seleccionada",
      switchTo12h: "12h",
      switchTo24h: "24h",
    },
  },
} as const;

export const TEXTS = {
  en: enTexts,
  ru: ruTexts,
  es: esTexts,
} as const;
