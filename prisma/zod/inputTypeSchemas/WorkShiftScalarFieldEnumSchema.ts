import { z } from 'zod';

export const WorkShiftScalarFieldEnumSchema = z.enum(['id','code','name','shiftType','isActive']);

export default WorkShiftScalarFieldEnumSchema;
