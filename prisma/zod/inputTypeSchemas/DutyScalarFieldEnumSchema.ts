import { z } from 'zod';

export const DutyScalarFieldEnumSchema = z.enum(['id','date','teamId','status','memo','isLocked','lockedAt','lockedByUserId','hasEverCancelled','createdAt','updatedAt']);

export default DutyScalarFieldEnumSchema;
