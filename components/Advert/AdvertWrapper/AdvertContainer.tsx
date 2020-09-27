import React from 'react'

import { AdvertWrapper } from './AdvertWrapper'

export const AdvertContainer = () => {
  const adverts = [
    {
      id: 3,
      title: 'Pioneer stereo receiver SX-424',
      price_currency: 'PLN',
      priceValue: 1200,
      price_negotiable: false,
      contact_name: 'Mariusz',
      contact_phone_number: '555555555',
      contact_city_id: 3,
      category_id: 6,
      voivodeship: 'Pomorze',
      status: 'active',
      description: 'Pioneer description',
      external_url: null,
      created_at: '2020-09-27T15:38:09.047821+00:00',
      images: null,
      salary: null,
      url: 'https://www.pioneer.eu/',
      contact_city: 'Gdansk'
    },
    {
      id: 1,
      title: 'Maradona shirt',
      price_currency: 'PLN',
      priceValue: 300,
      price_negotiable: true,
      contact_name: 'Thiago Alcantara',
      contact_phone_number: null,
      contact_city_id: 13,
      category_id: 8,
      voivodeship: 'Malopolska',
      status: 'active',
      description: 'Unique, Maradona Argentina shirt from the World Cup',
      external_url: null,
      created_at: '2020-09-27T15:13:04.289172+00:00',
      images: null,
      salary: null,
      url: 'https://google.pl',
      contact_city: 'Krakow'
    },
    {
      id: 4,
      title: 'Sweet potatoes',
      price_currency: 'PLN',
      priceValue: 15,
      price_negotiable: true,
      contact_name: '',
      contact_phone_number: null,
      contact_city_id: 1,
      category_id: 9,
      voivodeship: null,
      status: 'active',
      description: 'Very sweet, fresh potatoes form local farmers. The price applies to 1kg of potatoes',
      external_url: null,
      created_at: '2020-09-27T15:51:35.307335+00:00',
      images: null,
      salary: null,
      url: 'https://en.wikipedia.org/wiki/Sweet_potato',
      contact_city: 'Rzeszów'
    },
    {
      id: 5,
      title: 'Small cats',
      price_currency: 'PLN',
      priceValue: 0,
      price_negotiable: false,
      contact_name: '',
      contact_phone_number: null,
      contact_city_id: 1,
      category_id: 7,
      voivodeship: 'Mazowieckie',
      status: 'active',
      description: "I'm offering small cats, for someone who is lookin for great pet. They are very quiet and very social",
      external_url: null,
      created_at: '2020-09-27T15:55:12.819762+00:00',
      images: null,
      salary: null,
      url: '',
      contact_city: 'Warszawa'
    }
  ]
  return (
    <AdvertWrapper loading={false} adverts={adverts}/>
  )
}
