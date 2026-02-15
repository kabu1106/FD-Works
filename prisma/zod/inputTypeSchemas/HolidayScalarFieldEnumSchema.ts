import { z } from 'zod';

export const HolidayScalarFieldEnumSchema = z.enum(['date','name','isActive']);

export default HolidayScalarFieldEnumSchema;
