export const replaceChars = (value: string, replace: object) => {
  const replacedValues = Object.keys(replace);
  let finalValue: string = '';

  for (const char of value) {
    if (replacedValues.includes(char)) {
      // @ts-ignore
      if (!replace[char]) {
        continue;
      }
      // @ts-ignore
      finalValue += replace[char];
      continue;
    }

    finalValue += char;
  }

  return finalValue;
};
