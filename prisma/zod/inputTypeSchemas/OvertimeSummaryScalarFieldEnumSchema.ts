import { z } from 'zod';

export const OvertimeSummaryScalarFieldEnumSchema = z.enum(['id','dutyId','staffId','calculationVersion','totalMinutes','isFinalized','calculatedAt']);

export default OvertimeSummaryScalarFieldEnumSchema;
