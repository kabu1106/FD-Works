import { z } from 'zod';

export const OvertimeSlotScalarFieldEnumSchema = z.enum(['id','workGroupId','startMinute','endMinute','overtimeRateCategoryId']);

export default OvertimeSlotScalarFieldEnumSchema;
