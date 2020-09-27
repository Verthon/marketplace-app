/* eslint-disable camelcase */
export type Advert = {
  id: number,
  title: string,
  price_currency: string,
  priceValue: string,
  price_negotiable: boolean,
  contact_name: string,
  contact_phone_number: string | null,
  contact_city_id: number,
  category_id: number,
  voivodeship: string | null,
  status: 'active' | 'deactivated',
  description: string,
  external_url: string | null,
  created_at: string,
  images: string[] | null,
  salary: string | null,
  url: string | null
  contact_city: string
}

export type Props = {
  advert: Advert
}
