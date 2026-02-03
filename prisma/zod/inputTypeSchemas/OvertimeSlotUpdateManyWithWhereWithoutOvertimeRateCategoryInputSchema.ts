import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OvertimeSlotScalarWhereInputSchema } from './OvertimeSlotScalarWhereInputSchema';
import { OvertimeSlotUpdateManyMutationInputSchema } from './OvertimeSlotUpdateManyMutationInputSchema';
import { OvertimeSlotUncheckedUpdateManyWithoutOvertimeRateCategoryInputSchema } from './OvertimeSlotUncheckedUpdateManyWithoutOvertimeRateCategoryInputSchema';

export const OvertimeSlotUpdateManyWithWhereWithoutOvertimeRateCategoryInputSchema: z.ZodType<Prisma.OvertimeSlotUpdateManyWithWhereWithoutOvertimeRateCategoryInput> = z.strictObject({
  where: z.lazy(() => OvertimeSlotScalarWhereInputSchema),
  data: z.union([ z.lazy(() => OvertimeSlotUpdateManyMutationInputSchema), z.lazy(() => OvertimeSlotUncheckedUpdateManyWithoutOvertimeRateCategoryInputSchema) ]),
});

export default OvertimeSlotUpdateManyWithWhereWithoutOvertimeRateCategoryInputSchema;
