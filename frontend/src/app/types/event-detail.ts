import { Speaker } from './speaker';

export type EventDetail = {
  attributes: {
    address: string;
    createdAt: string;
    email: string;
    event: any;
    fax: string;
    gallery: any;
    network: any;
    organizer: string;
    phonenumber: string;
    price: number;
    speakers: {
      data: Speaker[];
    };
    status: string;
    updatedAt: string;
  };
};
