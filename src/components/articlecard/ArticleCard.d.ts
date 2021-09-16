import type { TCardType } from '../../types/Card';
import { colorNames } from '@ekstra-bladet/eb-colors';

export interface IMediaOptions {
  className: string;
  height: string;
  src: string;
  width: string;
}

export interface IArticleCardProps {
  title: string;
  breaking?: boolean;
  cardType?: TCardType;
  className?: string;
  colorName?: string;
  id?: number;
  loading?: boolean;
  update?: boolean;
  maxLines?: number;
  media?: Partial<IMediaOptions>;
  premium?: boolean;
  published?: string;
  saved?: boolean;
  section?: string;
  style?: string;
  truncateTitle?: boolean;
  url?: string;
}
