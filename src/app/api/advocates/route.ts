import { off } from "process";
import db from "../../../db";
import { advocates } from "../../../db/schema";
import { advocateData } from "../../../db/seed/advocates";

const ITEMS_PER_PAGE = 3;

/**
 * 
 * Uses offset+limit pagination to get advocates from db.
 */
export async function GET(request: Request) {
  // Uncomment this line to use a database
  // const data = await db.select().from(advocates);
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page') || '0', 10);
  const clampedPage = (page <= 0 ? 0 : page)
  

  const data = advocateData;
  const offset =  clampedPage * ITEMS_PER_PAGE;
  const end = offset + ITEMS_PER_PAGE;

  const paginatedData = data.slice(offset, end);

  return Response.json({ data: paginatedData });
}
