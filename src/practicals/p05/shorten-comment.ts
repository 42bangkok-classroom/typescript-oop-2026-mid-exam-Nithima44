const comment = "TypeScript is a strongly typed programming language"
export function shortenComment(text: string): string {
  const words = text.split(' ');
  const filteredWords = words.filter(word => word.length >= 5 && word.length <= 10);

  if (filteredWords.length === 0) {
      return '';
  }
  return filteredWords.join(' ');
}

const result = shortenComment(comment);
console.log(result);

