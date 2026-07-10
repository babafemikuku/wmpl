import { type SchemaTypeDefinition } from 'sanity'
import { ourWorkPage } from './ourWorkPage'
import { post } from './post'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, ourWorkPage],
}
