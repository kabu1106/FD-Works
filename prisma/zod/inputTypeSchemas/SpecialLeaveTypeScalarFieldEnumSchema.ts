import { z } from 'zod';

export const SpecialLeaveTypeScalarFieldEnumSchema = z.enum(['id','code','name','specialLeaveGroupId','isActive']);

export default SpecialLeaveTypeScalarFieldEnumSchema;
