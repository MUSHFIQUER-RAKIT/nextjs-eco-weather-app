import AQIComponent from "@/components/AQIComponent";

export default function AqiPage({
  params: { location },
  searchParams: { latitude, longitude },
}) {
  return <AQIComponent latitude={latitude} longitude={longitude} />;
}
