import { z } from 'zod';

export const IncidentCategoryScalarFieldEnumSchema = z.enum(['id','code','name','color','sortOrder','isActive']);

export default IncidentCategoryScalarFieldEnumSchema;
