function sortStringByFrequency(s) {
    // create a map to store the frequency of each character
    const freq = new Map();
    for (const c of s) {
      freq.set(c, (freq.get(c) || 0) + 1);
    }
  
    // sort the characters by frequency
    const sortedChars = [...freq.keys()].sort((a, b) => freq.get(b) - freq.get(a));
  
    // create the final string by concatenating the sorted characters
    let result = "";
    for (const c of sortedChars) {
      result += c.repeat(freq.get(c));
    }
  console.log(result);
    return result;
  }