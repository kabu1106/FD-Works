import { z } from 'zod';

export const WeeklyDayOffScalarFieldEnumSchema = z.enum(['id','staffId','date','createdAt']);

export default WeeklyDayOffScalarFieldEnumSchema;
