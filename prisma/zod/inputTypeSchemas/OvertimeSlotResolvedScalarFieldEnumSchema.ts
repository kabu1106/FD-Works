import { z } from 'zod';

export const OvertimeSlotResolvedScalarFieldEnumSchema = z.enum(['id','dutyId','staffId','startAt','endAt','minutes','overtimeRateCategoryId','rateSnapshot','createdAt']);

export default OvertimeSlotResolvedScalarFieldEnumSchema;
