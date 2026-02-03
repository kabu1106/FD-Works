import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OvertimeRateCategoryCreateNestedOneWithoutOvertimeSlotsInputSchema } from './OvertimeRateCategoryCreateNestedOneWithoutOvertimeSlotsInputSchema';
import { WorkGroupCreateNestedOneWithoutOvertimeSlotsInputSchema } from './WorkGroupCreateNestedOneWithoutOvertimeSlotsInputSchema';

export const OvertimeSlotCreateInputSchema: z.ZodType<Prisma.OvertimeSlotCreateInput> = z.strictObject({
  startMinute: z.number().int(),
  endMinute: z.number().int(),
  overtimeRateCategory: z.lazy(() => OvertimeRateCategoryCreateNestedOneWithoutOvertimeSlotsInputSchema).optional(),
  workGroup: z.lazy(() => WorkGroupCreateNestedOneWithoutOvertimeSlotsInputSchema),
});

export default OvertimeSlotCreateInputSchema;
