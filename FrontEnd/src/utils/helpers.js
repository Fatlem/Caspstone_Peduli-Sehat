// Format tanggal menjadi string yang mudah dibaca
export const formatDate = (date, format = "dd/mm/yyyy") => {
  const d = typeof date === "string" ? new Date(date) : date;

  if (!(d instanceof Date) || isNaN(d)) {
    return "";
  }

  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = d.getFullYear();
  const hours = String(d.getHours()).padStart(2, "0");
  const minutes = String(d.getMinutes()).padStart(2, "0");

  switch (format) {
    case "dd/mm/yyyy":
      return `${day}/${month}/${year}`;
    case "mm/dd/yyyy":
      return `${month}/${day}/${year}`;
    case "yyyy-mm-dd":
      return `${year}-${month}-${day}`;
    case "dd/mm/yyyy hh:mm":
      return `${day}/${month}/${year} ${hours}:${minutes}`;
    default:
      return `${day}/${month}/${year}`;
  }
};

// Memotong teks dengan panjang tertentu
export const truncateText = (text, length, suffix = "...") => {
  if (!text) return "";

  if (text.length <= length) {
    return text;
  }

  return text.substring(0, length).trim() + suffix;
};

// Menggulir ke elemen dengan offset
export const scrollToElement = (elementId, offset = 0, behavior = "smooth") => {
  const element = document.getElementById(elementId);

  if (!element) return;

  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior,
  });
};

// Membatasi seberapa sering fungsi dapat dijalankan
export const debounce = (func, wait = 300) => {
  let timeout;

  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Format angka dengan pemisah ribuan
export const formatNumber = (number) => {
  if (number === null || number === undefined) return "";

  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

// Filter array berdasarkan kata pencarian
export const filterArrayBySearchTerm = (array, searchTerm, fields) => {
  if (!searchTerm || !array?.length || !fields?.length) {
    return array;
  }

  const term = searchTerm.toLowerCase();

  return array.filter((item) => {
    return fields.some((field) => {
      const value = item[field];

      if (typeof value === "string") {
        return value.toLowerCase().includes(term);
      }

      if (typeof value === "number") {
        return value.toString().includes(term);
      }

      return false;
    });
  });
};

// Menghasilkan string acak
export const generateRandomString = (length = 8) => {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";

  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return result;
};
