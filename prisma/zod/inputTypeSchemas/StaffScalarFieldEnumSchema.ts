import { z } from 'zod';

export const StaffScalarFieldEnumSchema = z.enum(['id','staffNo','name','isActive','photoKey','teamId']);

export default StaffScalarFieldEnumSchema;
