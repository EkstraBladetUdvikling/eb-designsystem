import { LoremIpsum } from 'lorem-ipsum';

export function rdmArticleData(mediaWidth = 640, mediaHeight = 360) {
  const lorem = new LoremIpsum({
    wordsPerSentence: {
      max: 12,
      min: 4,
    },
  });

  const colorClasses = ['sport', 'sex-samliv', 'forbrug', 'underholdning', 'flash', 'nyheder'];
  const article = {
    href: '#',
    isPlus: Math.random() < 0.3,
    isBreaking: Math.random() < 0.1,
    media: {
      src: `https://loremflickr.com/${mediaWidth}/${mediaHeight}/city,people,nature,animal?random=${Math.random()}`,
    },
    section: lorem.generateWords(1),
    colorClass: colorClasses[Math.floor(Math.random() * colorClasses.length)],
    timestamp: randomDate(),
    title: lorem.generateSentences(1),
    truncateTitle: false,
  };

  return article;
}

function randomDate() {
  const start = new Date(2019, 0, 1);
  const end = new Date();
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}
