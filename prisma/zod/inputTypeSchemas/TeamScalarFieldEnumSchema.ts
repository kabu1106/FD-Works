import { z } from 'zod';

export const TeamScalarFieldEnumSchema = z.enum(['id','departmentId','workShiftId','code','name','shiftType','isActive']);

export default TeamScalarFieldEnumSchema;
