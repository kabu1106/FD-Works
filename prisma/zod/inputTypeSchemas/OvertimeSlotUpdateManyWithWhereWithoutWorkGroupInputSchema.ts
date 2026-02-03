import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OvertimeSlotScalarWhereInputSchema } from './OvertimeSlotScalarWhereInputSchema';
import { OvertimeSlotUpdateManyMutationInputSchema } from './OvertimeSlotUpdateManyMutationInputSchema';
import { OvertimeSlotUncheckedUpdateManyWithoutWorkGroupInputSchema } from './OvertimeSlotUncheckedUpdateManyWithoutWorkGroupInputSchema';

export const OvertimeSlotUpdateManyWithWhereWithoutWorkGroupInputSchema: z.ZodType<Prisma.OvertimeSlotUpdateManyWithWhereWithoutWorkGroupInput> = z.strictObject({
  where: z.lazy(() => OvertimeSlotScalarWhereInputSchema),
  data: z.union([ z.lazy(() => OvertimeSlotUpdateManyMutationInputSchema), z.lazy(() => OvertimeSlotUncheckedUpdateManyWithoutWorkGroupInputSchema) ]),
});

export default OvertimeSlotUpdateManyWithWhereWithoutWorkGroupInputSchema;
