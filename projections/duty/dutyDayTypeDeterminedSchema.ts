import z from "zod";

export const DutyDayTypeDeterminedSchema = z.object({
  eventType: z.literal("DutyDayTypeDetermined"),
  payload: z.object({
    dutyId: z.string().uuid(),
    staffId: z.number().int(),
    dutyDayType: z.enum([
      "WEEKDAY",
      "HOLIDAY",
      "SUBSTITUTE_HOLIDAY",
      "DISASTER_DAY",
    ]),
  }),
})


