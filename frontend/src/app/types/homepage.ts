import { Event } from './event';

export type HomePage = {
  data: {
    attributes: {
      createdAt: string;
      footer: any;
      publishedAt: string;
      section: any;
      today_event: {
        events: {
          data: Event[];
        };
      };
      updatedAt: string;
    };
  };
  meta: {};
};
