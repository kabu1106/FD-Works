import { z } from 'zod';

export const AllowanceTypeScalarFieldEnumSchema = z.enum(['id','allowanceGroupId','code','name','isActive']);

export default AllowanceTypeScalarFieldEnumSchema;
