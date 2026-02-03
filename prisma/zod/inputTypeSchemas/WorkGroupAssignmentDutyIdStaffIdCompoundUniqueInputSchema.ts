import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const WorkGroupAssignmentDutyIdStaffIdCompoundUniqueInputSchema: z.ZodType<Prisma.WorkGroupAssignmentDutyIdStaffIdCompoundUniqueInput> = z.strictObject({
  dutyId: z.string(),
  staffId: z.number(),
});

export default WorkGroupAssignmentDutyIdStaffIdCompoundUniqueInputSchema;
