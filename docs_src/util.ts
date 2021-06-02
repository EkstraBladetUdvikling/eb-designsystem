import { LoremIpsum } from 'lorem-ipsum';

export function rdmParagraphs(num = 3) {
  const lorem = new LoremIpsum(
    {
      sentencesPerParagraph: {
        max: 8,
        min: 4,
      },
      wordsPerSentence: {
        max: 12,
        min: 4,
      },
    },
    'html'
  );

  return lorem.generateParagraphs(num);
}

export function rdmArticleData(mediaWidth = 640, mediaHeight = 360) {
  const lorem = new LoremIpsum({
    wordsPerSentence: {
      max: 12,
      min: 4,
    },
  });

  const colorClasses = ['flash', 'forbrug', 'leder', 'nationen', 'nyheder', 'sex-samliv', 'sport', 'underholdning'];
  const article = {
    href: '#',
    isPlus: Math.random() < 0.3,
    isBreaking: Math.random() < 0.1,
    media: {
      src: `https://loremflickr.com/${mediaWidth}/${mediaHeight}/city,people,nature,animal?random=${Math.random()}`,
    },
    saved: Math.random() < 0.5,
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
