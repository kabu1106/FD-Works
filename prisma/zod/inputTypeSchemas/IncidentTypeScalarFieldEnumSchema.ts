import { z } from 'zod';

export const IncidentTypeScalarFieldEnumSchema = z.enum(['id','categoryId','code','name','sortOrder','isActive']);

export default IncidentTypeScalarFieldEnumSchema;
