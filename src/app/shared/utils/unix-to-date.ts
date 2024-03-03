export function unixToDate(unixDate: number): Date {
  return new Date(unixDate * 1000);
}
