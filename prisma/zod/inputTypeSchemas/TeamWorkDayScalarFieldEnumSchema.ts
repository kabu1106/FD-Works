import { z } from 'zod';

export const TeamWorkDayScalarFieldEnumSchema = z.enum(['id','date','type','teamId']);

export default TeamWorkDayScalarFieldEnumSchema;
