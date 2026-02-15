import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IncidentCreateWithoutIncidentStaffEngagementsInputSchema } from './IncidentCreateWithoutIncidentStaffEngagementsInputSchema';
import { IncidentUncheckedCreateWithoutIncidentStaffEngagementsInputSchema } from './IncidentUncheckedCreateWithoutIncidentStaffEngagementsInputSchema';
import { IncidentCreateOrConnectWithoutIncidentStaffEngagementsInputSchema } from './IncidentCreateOrConnectWithoutIncidentStaffEngagementsInputSchema';
import { IncidentUpsertWithoutIncidentStaffEngagementsInputSchema } from './IncidentUpsertWithoutIncidentStaffEngagementsInputSchema';
import { IncidentWhereUniqueInputSchema } from './IncidentWhereUniqueInputSchema';
import { IncidentUpdateToOneWithWhereWithoutIncidentStaffEngagementsInputSchema } from './IncidentUpdateToOneWithWhereWithoutIncidentStaffEngagementsInputSchema';
import { IncidentUpdateWithoutIncidentStaffEngagementsInputSchema } from './IncidentUpdateWithoutIncidentStaffEngagementsInputSchema';
import { IncidentUncheckedUpdateWithoutIncidentStaffEngagementsInputSchema } from './IncidentUncheckedUpdateWithoutIncidentStaffEngagementsInputSchema';

export const IncidentUpdateOneRequiredWithoutIncidentStaffEngagementsNestedInputSchema: z.ZodType<Prisma.IncidentUpdateOneRequiredWithoutIncidentStaffEngagementsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => IncidentCreateWithoutIncidentStaffEngagementsInputSchema), z.lazy(() => IncidentUncheckedCreateWithoutIncidentStaffEngagementsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => IncidentCreateOrConnectWithoutIncidentStaffEngagementsInputSchema).optional(),
  upsert: z.lazy(() => IncidentUpsertWithoutIncidentStaffEngagementsInputSchema).optional(),
  connect: z.lazy(() => IncidentWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => IncidentUpdateToOneWithWhereWithoutIncidentStaffEngagementsInputSchema), z.lazy(() => IncidentUpdateWithoutIncidentStaffEngagementsInputSchema), z.lazy(() => IncidentUncheckedUpdateWithoutIncidentStaffEngagementsInputSchema) ]).optional(),
});

export default IncidentUpdateOneRequiredWithoutIncidentStaffEngagementsNestedInputSchema;
