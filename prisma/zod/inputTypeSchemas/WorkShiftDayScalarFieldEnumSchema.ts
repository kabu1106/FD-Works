import { z } from 'zod';

export const WorkShiftDayScalarFieldEnumSchema = z.enum(['id','date','type','workShiftId']);

export default WorkShiftDayScalarFieldEnumSchema;
