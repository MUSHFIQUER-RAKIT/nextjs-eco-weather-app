import LocationInfo from "@/components/LocationInfo";

export default function LanguagePage({
  params: { location },
  searchParams: { latitude, longitude },
}) {
  return <LocationInfo latitude={latitude} longitude={longitude} />;
}
