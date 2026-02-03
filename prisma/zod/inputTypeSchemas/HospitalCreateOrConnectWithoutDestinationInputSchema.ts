import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { HospitalWhereUniqueInputSchema } from './HospitalWhereUniqueInputSchema';
import { HospitalCreateWithoutDestinationInputSchema } from './HospitalCreateWithoutDestinationInputSchema';
import { HospitalUncheckedCreateWithoutDestinationInputSchema } from './HospitalUncheckedCreateWithoutDestinationInputSchema';

export const HospitalCreateOrConnectWithoutDestinationInputSchema: z.ZodType<Prisma.HospitalCreateOrConnectWithoutDestinationInput> = z.strictObject({
  where: z.lazy(() => HospitalWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => HospitalCreateWithoutDestinationInputSchema), z.lazy(() => HospitalUncheckedCreateWithoutDestinationInputSchema) ]),
});

export default HospitalCreateOrConnectWithoutDestinationInputSchema;
