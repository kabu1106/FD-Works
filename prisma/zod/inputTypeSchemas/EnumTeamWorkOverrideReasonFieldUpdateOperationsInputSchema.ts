import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TeamWorkOverrideReasonSchema } from './TeamWorkOverrideReasonSchema';

export const EnumTeamWorkOverrideReasonFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumTeamWorkOverrideReasonFieldUpdateOperationsInput> = z.strictObject({
  set: z.lazy(() => TeamWorkOverrideReasonSchema).optional(),
});

export default EnumTeamWorkOverrideReasonFieldUpdateOperationsInputSchema;
