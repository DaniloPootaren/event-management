export type Banner = {
  data: {
    attributes: {
      alternativeText: string;
      caption: string;
      createdAt: string;
      ext: string;
      formats: {
        large: Image;
        medium: Image;
        small: Image;
        thumbnail: Image;
      };
      hash: string;
      height: number;
      mime: string;
      name: string;
      previewUrl: string | null;
      provider: string;
      provider_metadata: string;
      size: string;
      updatedAt: string;
      url: string;
      width: number;
    };
  };
};

type Image = {
  ext: string;
  hash: string;
  height: number;
  mime: string;
  name: string;
  path: null;
  size: number;
  url: string;
  width: number;
};
