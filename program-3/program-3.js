/**
 * Checks if a string is a valid IP address.
 * @param {string} ip - The string to check.
 * @returns {boolean} True if the string is a valid IP address, false otherwise.
 */
function isValidIPAddress(ip) {
    // Split the IP address into its parts
    const parts = ip.split(".");
    // Check that the IP address has exactly 4 parts
    if (parts.length !== 4) {
      return false;
    }
    // Check that each part is a valid number between 0 and 255
    for (const part of parts) {
      const num = parseInt(part);
      if (isNaN(num) || num < 0 || num > 255 || num.toString() !== part) {
        return false;
      }
    }
    // If all checks pass, the IP address is valid
    return true;
  }