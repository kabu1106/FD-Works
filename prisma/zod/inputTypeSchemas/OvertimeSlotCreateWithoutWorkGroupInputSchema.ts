import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OvertimeRateCategoryCreateNestedOneWithoutOvertimeSlotsInputSchema } from './OvertimeRateCategoryCreateNestedOneWithoutOvertimeSlotsInputSchema';

export const OvertimeSlotCreateWithoutWorkGroupInputSchema: z.ZodType<Prisma.OvertimeSlotCreateWithoutWorkGroupInput> = z.strictObject({
  startMinute: z.number().int(),
  endMinute: z.number().int(),
  overtimeRateCategory: z.lazy(() => OvertimeRateCategoryCreateNestedOneWithoutOvertimeSlotsInputSchema).optional(),
});

export default OvertimeSlotCreateWithoutWorkGroupInputSchema;
