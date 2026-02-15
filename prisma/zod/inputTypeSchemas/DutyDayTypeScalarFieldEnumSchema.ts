import { z } from 'zod';

export const DutyDayTypeScalarFieldEnumSchema = z.enum(['id','dutyId','staffId','dayType','reason','decidedAt','decidedBy']);

export default DutyDayTypeScalarFieldEnumSchema;
