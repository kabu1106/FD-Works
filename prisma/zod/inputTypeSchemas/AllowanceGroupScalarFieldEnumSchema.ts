import { z } from 'zod';

export const AllowanceGroupScalarFieldEnumSchema = z.enum(['id','code','name','color','isActive']);

export default AllowanceGroupScalarFieldEnumSchema;
