export const tokenizeName = (name: string): string =>
  name
    .replaceAll(" ", "")
    .replaceAll("-", "_")
    .replaceAll("/", "_")
    .replaceAll(".", "_")
    .replaceAll("&", "and")
    .replace(/^(\d)(.+)/, "n$1$2")
    .trim();
