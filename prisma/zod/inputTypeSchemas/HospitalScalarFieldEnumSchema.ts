import { z } from 'zod';

export const HospitalScalarFieldEnumSchema = z.enum(['id','code','name','latitude','longitude']);

export default HospitalScalarFieldEnumSchema;
