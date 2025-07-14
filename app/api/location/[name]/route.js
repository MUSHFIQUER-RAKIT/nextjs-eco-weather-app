import { getLocationByName } from "@/data/locations";

export async function GET(_request, { params }) {
  const location = getLocationByName(params?.name);
  return Response.json(location);
}
