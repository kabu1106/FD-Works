import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OvertimeSlotWhereUniqueInputSchema } from './OvertimeSlotWhereUniqueInputSchema';
import { OvertimeSlotUpdateWithoutWorkGroupInputSchema } from './OvertimeSlotUpdateWithoutWorkGroupInputSchema';
import { OvertimeSlotUncheckedUpdateWithoutWorkGroupInputSchema } from './OvertimeSlotUncheckedUpdateWithoutWorkGroupInputSchema';
import { OvertimeSlotCreateWithoutWorkGroupInputSchema } from './OvertimeSlotCreateWithoutWorkGroupInputSchema';
import { OvertimeSlotUncheckedCreateWithoutWorkGroupInputSchema } from './OvertimeSlotUncheckedCreateWithoutWorkGroupInputSchema';

export const OvertimeSlotUpsertWithWhereUniqueWithoutWorkGroupInputSchema: z.ZodType<Prisma.OvertimeSlotUpsertWithWhereUniqueWithoutWorkGroupInput> = z.strictObject({
  where: z.lazy(() => OvertimeSlotWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => OvertimeSlotUpdateWithoutWorkGroupInputSchema), z.lazy(() => OvertimeSlotUncheckedUpdateWithoutWorkGroupInputSchema) ]),
  create: z.union([ z.lazy(() => OvertimeSlotCreateWithoutWorkGroupInputSchema), z.lazy(() => OvertimeSlotUncheckedCreateWithoutWorkGroupInputSchema) ]),
});

export default OvertimeSlotUpsertWithWhereUniqueWithoutWorkGroupInputSchema;
