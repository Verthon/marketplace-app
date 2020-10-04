import { ApolloError } from '@apollo/client'

import { Advert } from '../AdvertCard/AdvertCard.types'

export type Props = {
  advert: Advert;
  loading: boolean;
  error: ApolloError;
}
