import TemperatureComponent from "@/components/TemperatureComponent";

export default function TemperaturePage({
  params: { location },
  searchParams: { latitude, longitude },
}) {
  return <TemperatureComponent latitude={latitude} longitude={longitude} />;
}
