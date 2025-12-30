
export interface ShowcaseItem {
  id: string;
  title: string;
  subTitle?: string;
  type?: 'video' | 'image' | 'graphic';
  imageUrl: string;
  badge?: string;
  aspectRatio?: '1:1' | '3:4';
}

export interface TimelineSection {
  id: string;
  timeLabel: string;
  description: string;
  items: ShowcaseItem[];
  layout?: 'default' | 'special-pre-eve';
}
