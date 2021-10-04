import { colorNames } from '@ekstra-bladet/eb-colors';

import type { IArticleCardProps } from '../src/components/articlecard/ArticleCard';

import { getSentence, getWord } from './lipsum';

export function rdmArticleData(mediaWidth = 640, mediaHeight = 360): IArticleCardProps {
  const colorNamesForUse = [
    colorNames.breaking,
    colorNames.bruger,
    colorNames.eb,
    colorNames.flash,
    colorNames.forbrug,
    colorNames.livescore,
    colorNames.native,
    colorNames.nyheder,
    colorNames.sexsamliv,
    colorNames.sport,
    colorNames.underholdning,
  ];

  const article = {
    breaking: Math.random() < 0.1,
    colorName: colorNamesForUse[Math.floor(Math.random() * colorNamesForUse.length)],
    media: {
      src: `https://loremflickr.com/${mediaWidth}/${mediaHeight}/city,people,nature,animal?random=${Math.random()}`,
    },
    premium: Math.random() < 0.3,
    published: randomDate().toString(),
    saved: Math.random() < 0.5,
    section: getWord(),
    title: getSentence(),
    truncateTitle: false,
    update: Math.random() < 0.5,
    url: '',
  };

  return article;
}

function randomDate() {
  const start = new Date(2019, 0, 1);
  const end = new Date();
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}
