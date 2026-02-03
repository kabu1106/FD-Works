import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { OvertimeSlotWhereUniqueInputSchema } from './OvertimeSlotWhereUniqueInputSchema';
import { OvertimeSlotCreateWithoutWorkGroupInputSchema } from './OvertimeSlotCreateWithoutWorkGroupInputSchema';
import { OvertimeSlotUncheckedCreateWithoutWorkGroupInputSchema } from './OvertimeSlotUncheckedCreateWithoutWorkGroupInputSchema';

export const OvertimeSlotCreateOrConnectWithoutWorkGroupInputSchema: z.ZodType<Prisma.OvertimeSlotCreateOrConnectWithoutWorkGroupInput> = z.strictObject({
  where: z.lazy(() => OvertimeSlotWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => OvertimeSlotCreateWithoutWorkGroupInputSchema), z.lazy(() => OvertimeSlotUncheckedCreateWithoutWorkGroupInputSchema) ]),
});

export default OvertimeSlotCreateOrConnectWithoutWorkGroupInputSchema;
