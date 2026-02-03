import { z } from 'zod';

export const SpecialLeaveGroupScalarFieldEnumSchema = z.enum(['id','name','color','isActive','sortOrder']);

export default SpecialLeaveGroupScalarFieldEnumSchema;
