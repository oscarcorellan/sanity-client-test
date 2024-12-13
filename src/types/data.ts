export type Frame = {
  entityId: string;
  legacyId: string;
  name: string;
  material: string;
  materialDescription: string;
  shape: string;
  size: string;
  color: string;
  gender: string;
  brand: string;
  price: number;
  availability: boolean;
};

export type Accesory = {
  id: string;
  name: string;
  description: string;
  price: number;
  availability: boolean;
  legacyId: string;
  entityId: string;
};
export type Offerings = {
  id: string;
  name: string;
  type: string;
  createdAt: string;
  updatedAt: string;
};

type SocialMedia = {
  twitter: string;
  facebook: string;
  instagram: string;
};

type OpeningHours = {
  mo: string;
  tu: string;
  we: string;
  th: string;
  fr: string;
  sa: string;
  su: string;
};

export type Practice = {
  id: number;
  name: string;
  doctorId: number;
  active: boolean;
  partner: boolean;
  provider: boolean;
  providerPlus: boolean;
  email: string | null;
  website: string | null;
  appointmentLink: string | null;
  phone: string;
  address: string;
  streetNumber: string;
  suiteNumber: string;
  route: string;
  city: string;
  county: string;
  state: string;
  stateShort: string;
  zip: string;
  country: string;
  countryShort: string;
  latitude: number;
  longitude: number;
  openingHours: OpeningHours;
  socialMedia: SocialMedia;
  createdAt: string;
  updatedAt: string;
  image: string | null;
  gallery: string[];
  products: string[];
  productsFromOrder: string[];
  practiceDiscount: string;
  practiceLogo: string;
  practiceQrCode: string;
  refersionLink: string;
  productPads: string[];
  displayType: string;
  practiceDiscount20: string;
};
