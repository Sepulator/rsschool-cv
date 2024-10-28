const encrypt = (text) => {
  let result = '';
  for (let i = 0; i < text.length; i += 2) {
    const nextChar = text[i + 1] || '';
    result = `${result}${nextChar}${text[i]}`;
  }
  return result;
};
