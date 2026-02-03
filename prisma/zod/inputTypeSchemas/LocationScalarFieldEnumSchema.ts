import { z } from 'zod';

export const LocationScalarFieldEnumSchema = z.enum(['id','parentId','type','code','name','latitude','longitude']);

export default LocationScalarFieldEnumSchema;
