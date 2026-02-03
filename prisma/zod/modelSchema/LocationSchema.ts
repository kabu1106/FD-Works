import { z } from 'zod';
import { Prisma } from '@prisma/client'
import { LocationTypeSchema } from '../inputTypeSchemas/LocationTypeSchema'

/////////////////////////////////////////
// LOCATION SCHEMA
/////////////////////////////////////////

export const LocationSchema = z.object({
  type: LocationTypeSchema,
  id: z.number().int(),
  parentId: z.number().int().nullable(),
  code: z.string().nullable(),
  name: z.string(),
  latitude: z.instanceof(Prisma.Decimal, { message: "Field 'latitude' must be a Decimal. Location: ['Models', 'Location']"}).nullable(),
  longitude: z.instanceof(Prisma.Decimal, { message: "Field 'longitude' must be a Decimal. Location: ['Models', 'Location']"}).nullable(),
})

export type Location = z.infer<typeof LocationSchema>

export default LocationSchema;
