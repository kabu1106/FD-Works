import { z } from 'zod';

export const OvertimeRateCategoryScalarFieldEnumSchema = z.enum(['id','code','name','rate','color','isActive']);

export default OvertimeRateCategoryScalarFieldEnumSchema;
