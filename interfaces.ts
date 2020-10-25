export interface youtubeVideos {
  kind: string,
  etag: string,
  id: {
    kind: string,
    videoId: string
  },
  snippet: {
    publishedAt: string,
    channelId: string,
    title: string,
    description: string,
    thumbnails: {
      default: {
        url: string,
        width: number,
        height: number
      },
      medium: {
        url: string,
        width: number,
        height: number
      },
      high: {
        url: string,
        width: number,
        height: number
      }
    },
    channelTitle: string,
    liveBroadcastContent: string,
    publishTime: string
  }
};

interface wpImage {
  ID: number,
  id: number,
  title: string,
  filename: string,
  filesize: number,
  url: string,
  link: string,
  alt: string,
  author: string,
  description: string,
  caption: string,
  name: string,
  status: string,
  uploaded_to: number,
  date: string,
  modified: string,
  menu_order: number,
  mime_type: string,
  type: string,
  subtype: string,
  icon: string,
  width: number,
  height: number,
  sizes: {
    thumbnail: string,
    'thumbnail-width': number,
    'thumbnail-height': number,
    medium: string,
    'medium-width': number,
    'medium-height': number,
    medium_large: string,
    'medium_large-width': number,
    'medium_large-height': number,
    large: string,
    'large-width': number,
    'large-height': number,
    '1536x1536': string,
    '1536x1536-width': number,
    '1536x1536-height': number,
    '2048x2048': string,
    '2048x2048-width': number,
    '2048x2048-height': number,
    testimonials: string,
    'testimonials-width': number,
    'testimonials-height': number,
    'testimonials-person': string,
    'testimonials-person-width': number,
    'testimonials-person-height': number,
    'itineraries-list': string,
    'itineraries-list-width': number,
    'itineraries-list-height': number,
    itinerarie: string,
    'itinerarie-width': number,
    'itinerarie-height': number,
    'itinerarie-pictures': string,
    'itinerarie-pictures-width': number,
    'itinerarie-pictures-height': number
  }
};

interface itinerarieIncluded {
  description: string
};

export interface itinerarieItem {
  'pre-salve': boolean,
  image: wpImage,
  included_resume: string,
  old_price: string,
  price: string,
  installment: string,
  output: string,
  arrival: string,
  boarding_place: string[],
  included: itinerarieIncluded[]
}

export interface itineraries {
  slug: string,
  title: {
    rendered: string
  },
  acf: itinerarieItem;
}

export interface testimonialsItem {
  name: string,
  description: string,
  client_image: wpImage,
  travel_image: wpImage,
  stars: string
};

export interface testimonials {
  acf: {
    testimonials: testimonialsItem[]
  }
};

export interface contactPage {
  acf: {
    email: string,
    phone: string,
    whatsapp: string,
    instagram: string,
    facebook: string,
    youtube: string
  }
};
