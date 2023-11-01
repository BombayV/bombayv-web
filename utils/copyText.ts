export const copyText = async (text: string) => {
  const clipboard = await navigator.clipboard.writeText(text);
  alert('Copied to clipboard');
  return [clipboard, text];
};
