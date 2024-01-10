export function getFormattedDate(dateISOString) {
  const date = new Date(dateISOString);
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

export function getDateMinusDays(dateISOString, days) {
  const date = new Date(dateISOString);
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}
