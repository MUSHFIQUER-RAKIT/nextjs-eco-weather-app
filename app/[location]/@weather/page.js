import WeatherComponent from "@/components/WeatherComponent";

export default function WeatherPage({
  params: { location },
  searchParams: { latitude, longitude },
}) {
  return <WeatherComponent latitude={latitude} longitude={longitude} />;
}
