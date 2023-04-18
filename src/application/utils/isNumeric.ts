export function isNumeric(str: string): boolean {
  if (typeof str !== 'string') {
    return false;
  }

  return !isNaN(str as any) && !isNaN(parseFloat(str));
}
