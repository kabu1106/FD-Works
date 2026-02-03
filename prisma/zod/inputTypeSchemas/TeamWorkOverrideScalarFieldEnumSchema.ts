import { z } from 'zod';

export const TeamWorkOverrideScalarFieldEnumSchema = z.enum(['id','teamWorkDayId','overriddenType','reason','memo','createdAt','updatedAt']);

export default TeamWorkOverrideScalarFieldEnumSchema;
