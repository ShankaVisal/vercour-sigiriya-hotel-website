import { HOTEL_LOCATION_GMAPS_URL } from '@/lib/constants';

export function MapEmbed() {
  return (
    <div className="aspect-video w-full overflow-hidden rounded-lg">
      <iframe
        src={HOTEL_LOCATION_GMAPS_URL}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Vercour Sigiriya Hotel Location"
      ></iframe>
    </div>
  );
}
