/**
 * Format date to readable string
 * @param {Date|string} date - Date object or date string
 * @param {string} format - Format of the output (default: 'dd/mm/yyyy')
 * @returns {string} Formatted date string
 */
export const formatDate = (date, format = 'dd/mm/yyyy') => {
  const d = typeof date === 'string' ? new Date(date) : date;
  
  if (!(d instanceof Date) || isNaN(d)) {
    return '';
  }
  
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = d.getFullYear();
  const hours = String(d.getHours()).padStart(2, '0');
  const minutes = String(d.getMinutes()).padStart(2, '0');
  
  switch (format) {
    case 'dd/mm/yyyy':
      return `${day}/${month}/${year}`;
    case 'mm/dd/yyyy':
      return `${month}/${day}/${year}`;
    case 'yyyy-mm-dd':
      return `${year}-${month}-${day}`;
    case 'dd/mm/yyyy hh:mm':
      return `${day}/${month}/${year} ${hours}:${minutes}`;
    default:
      return `${day}/${month}/${year}`;
  }
};

/**
 * Truncate text to a specified length
 * @param {string} text - Text to truncate
 * @param {number} length - Maximum length
 * @param {string} suffix - Suffix to add when truncated (default: '...')
 * @returns {string} Truncated text
 */
export const truncateText = (text, length, suffix = '...') => {
  if (!text) return '';
  
  if (text.length <= length) {
    return text;
  }
  
  return text.substring(0, length).trim() + suffix;
};

/**
 * Generate a slug from a string
 * @param {string} text - Text to generate slug from
 * @returns {string} Slugified text
 */
export const slugify = (text) => {
  if (!text) return '';
  
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')      // Replace spaces with -
    .replace(/&/g, '-and-')    // Replace & with 'and'
    .replace(/[^\w\-]+/g, '')  // Remove all non-word characters
    .replace(/\-\-+/g, '-');   // Replace multiple - with single -
};

/**
 * Extract initials from a name
 * @param {string} name - Full name
 * @param {number} limit - Maximum number of initials (default: 2)
 * @returns {string} Initials
 */
export const getInitials = (name, limit = 2) => {
  if (!name) return '';
  
  return name
    .split(' ')
    .map(part => part.charAt(0))
    .slice(0, limit)
    .join('')
    .toUpperCase();
};

/**
 * Scroll to an element with offset
 * @param {string} elementId - ID of the element to scroll to
 * @param {number} offset - Offset from the top (default: 0)
 * @param {string} behavior - Scroll behavior (default: 'smooth')
 */
export const scrollToElement = (elementId, offset = 0, behavior = 'smooth') => {
  const element = document.getElementById(elementId);
  
  if (!element) return;
  
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;
  
  window.scrollTo({
    top: offsetPosition,
    behavior
  });
};

/**
 * Debounce function to limit the rate at which a function can fire
 * @param {Function} func - Function to debounce
 * @param {number} wait - Time in milliseconds to wait (default: 300)
 * @returns {Function} Debounced function
 */
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

/**
 * Format number with commas as thousands separators
 * @param {number} number - Number to format
 * @returns {string} Formatted number string
 */
export const formatNumber = (number) => {
  if (number === null || number === undefined) return '';
  
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

/**
 * Filter array objects based on search term
 * @param {Array} array - Array of objects to filter
 * @param {string} searchTerm - Term to search for
 * @param {Array} fields - Fields to search in
 * @returns {Array} Filtered array
 */
export const filterArrayBySearchTerm = (array, searchTerm, fields) => {
  if (!searchTerm || !array?.length || !fields?.length) {
    return array;
  }
  
  const term = searchTerm.toLowerCase();
  
  return array.filter(item => {
    return fields.some(field => {
      const value = item[field];
      
      if (typeof value === 'string') {
        return value.toLowerCase().includes(term);
      }
      
      if (typeof value === 'number') {
        return value.toString().includes(term);
      }
      
      return false;
    });
  });
};

/**
 * Function to handle scroll hash navigation with header offset
 */
export const handleHashNavigation = () => {
  // Get the hash from the URL
  const { hash } = window.location;
  
  if (hash) {
    // Remove the '#' character
    const id = hash.replace('#', '');
    
    // Find the element with that id
    const element = document.getElementById(id);
    
    if (element) {
      // Wait a bit for the DOM to fully render
      setTimeout(() => {
        // Calculate offset
        const headerHeight = document.querySelector('header')?.offsetHeight || 0;
        
        // Scroll to element with offset
        scrollToElement(id, headerHeight);
      }, 100);
    }
  }
};

/**
 * Generate a random string
 * @param {number} length - Length of the random string
 * @returns {string} Random string
 */
export const generateRandomString = (length = 8) => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  
  return result;
};