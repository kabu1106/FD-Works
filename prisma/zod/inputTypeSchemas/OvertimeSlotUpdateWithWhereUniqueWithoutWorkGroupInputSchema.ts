import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OvertimeSlotWhereUniqueInputSchema } from './OvertimeSlotWhereUniqueInputSchema';
import { OvertimeSlotUpdateWithoutWorkGroupInputSchema } from './OvertimeSlotUpdateWithoutWorkGroupInputSchema';
import { OvertimeSlotUncheckedUpdateWithoutWorkGroupInputSchema } from './OvertimeSlotUncheckedUpdateWithoutWorkGroupInputSchema';

export const OvertimeSlotUpdateWithWhereUniqueWithoutWorkGroupInputSchema: z.ZodType<Prisma.OvertimeSlotUpdateWithWhereUniqueWithoutWorkGroupInput> = z.strictObject({
  where: z.lazy(() => OvertimeSlotWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => OvertimeSlotUpdateWithoutWorkGroupInputSchema), z.lazy(() => OvertimeSlotUncheckedUpdateWithoutWorkGroupInputSchema) ]),
});

export default OvertimeSlotUpdateWithWhereUniqueWithoutWorkGroupInputSchema;
