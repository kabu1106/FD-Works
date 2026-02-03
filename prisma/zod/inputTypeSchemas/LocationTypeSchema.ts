import { z } from 'zod';

export const LocationTypeSchema = z.enum(['PREFECTURE','MUNICIPALITY','TOWN','OAZA','AZA','CHOME']);

export type LocationTypeType = `${z.infer<typeof LocationTypeSchema>}`

export default LocationTypeSchema;
