import { getAllLocations } from "@/data/locations";

export async function GET() {
  const locations = getAllLocations();

  return Response.json(locations);
}
