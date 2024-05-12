import { z } from "zod";
import { DATE_REQ_FORMAT } from "../utils/regex";

export const GetCategoriesBodySchema = z.object({
  startDate: z.string().regex(DATE_REQ_FORMAT),
  endDate: z.string().regex(DATE_REQ_FORMAT),
});
