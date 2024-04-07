export const regExp: {
  [index: string]: RegExp;
} = {
  digit: /[0-9]/,
  letter: /[a-zA-Z]/,
  upperCaseLetter: /[A-Z]/,
  lowerCaseLetter: /[a-z]/,
  letterOrDigit: /[a-zA-Z0-9]/,
  email: /^\w+\@\w+\.\w+$/,
};

export const regExpStr: {
  [indexedDBName: string]: string;
} = {
  specialSymbol: '\\!\\@\\#\\$\\%\\^\\&\\*\\(\\)',
};

const regexpInit = () => {
  Object.keys(regExpStr).forEach(
    (key) => (regExp[key] = new RegExp('[' + regExpStr[key] + ']')),
  );
};

regexpInit();
