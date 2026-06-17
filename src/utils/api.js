const fallbackQuotes = [
  {
    content: 'Small progress every day adds up to big results.',
    author: 'Unknown',
  },
  {
    content: 'Discipline is choosing between what you want now and what you want most.',
    author: 'Abraham Lincoln',
  },
  {
    content: 'The body achieves what the mind believes.',
    author: 'Unknown',
  },
  {
    content: 'You do not have to be extreme, just consistent.',
    author: 'Unknown',
  },
];

export async function fetchRandomQuote() {
  try {
    const response = await fetch('https://api.quotable.io/random');

    if (!response.ok) {
      throw new Error('Quote request failed.');
    }

    const data = await response.json();

    return {
      content: data.content ?? fallbackQuotes[0].content,
      author: data.author ?? 'Unknown',
      isFallback: false,
    };
  } catch {
    const quote = fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)];

    return {
      ...quote,
      isFallback: true,
    };
  }
}

export { fallbackQuotes };