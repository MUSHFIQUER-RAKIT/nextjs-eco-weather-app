import WindComponent from "@/components/WindComponent";

export default function WeatherPage({
  params: { location },
  searchParams: { latitude, longitude },
}) {
  return <WindComponent latitude={latitude} longitude={longitude} />;
}
