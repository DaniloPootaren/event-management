import { Event } from './event';
import { Section } from './section';

export type HomePage = {
  data: {
    attributes: {
      createdAt: string;
      footer: any;
      publishedAt: string;
      first_section: Section;
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
