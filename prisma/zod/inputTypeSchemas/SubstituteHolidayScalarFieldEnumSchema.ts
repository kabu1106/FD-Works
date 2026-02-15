import { z } from 'zod';

export const SubstituteHolidayScalarFieldEnumSchema = z.enum(['id','staffId','originalHoliday','substituteDate','reason','decidedAt','decidedBy']);

export default SubstituteHolidayScalarFieldEnumSchema;
