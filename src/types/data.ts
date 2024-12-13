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
