import { Banner } from './banner';
import { EventDetail } from './event-detail';
import { Location } from './location';

export type Event = {
  attributes: {
    banner: Banner;
    createdAt: string;
    description: string;
    end_date: string;
    category: any;
    event_detail: {
        data: EventDetail
    };
    location: Location;
    name: string;
    publishedAt: string;
    start_date: string;
    updatedAt: string;
    region: any;
  };
};
