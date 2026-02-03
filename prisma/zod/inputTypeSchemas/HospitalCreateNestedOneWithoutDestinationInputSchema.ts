import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { HospitalCreateWithoutDestinationInputSchema } from './HospitalCreateWithoutDestinationInputSchema';
import { HospitalUncheckedCreateWithoutDestinationInputSchema } from './HospitalUncheckedCreateWithoutDestinationInputSchema';
import { HospitalCreateOrConnectWithoutDestinationInputSchema } from './HospitalCreateOrConnectWithoutDestinationInputSchema';
import { HospitalWhereUniqueInputSchema } from './HospitalWhereUniqueInputSchema';

export const HospitalCreateNestedOneWithoutDestinationInputSchema: z.ZodType<Prisma.HospitalCreateNestedOneWithoutDestinationInput> = z.strictObject({
  create: z.union([ z.lazy(() => HospitalCreateWithoutDestinationInputSchema), z.lazy(() => HospitalUncheckedCreateWithoutDestinationInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => HospitalCreateOrConnectWithoutDestinationInputSchema).optional(),
  connect: z.lazy(() => HospitalWhereUniqueInputSchema).optional(),
});

export default HospitalCreateNestedOneWithoutDestinationInputSchema;
