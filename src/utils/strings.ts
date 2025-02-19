export const ellipsize = (str: string, len: number) => (str.length > len ? `${str.slice(0, len - 1)}…` : str);
