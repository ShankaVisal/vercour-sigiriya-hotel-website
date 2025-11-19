import Link from 'next/link';
import { WHATSAPP_PHONE_NUMBER, WHATSAPP_MESSAGE } from '@/lib/constants';

const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.269.655 4.357 1.846 6.097l-1.22 4.433 4.562-1.219zM8.61 5.306c-.134-.33-.314-.345-.473-.351l-.227-.008c-.169 0-.411.029-.623.285-.223.268-.865.849-.865 2.067 0 1.219.89 2.394 1.018 2.561.123.16 1.743 2.82 4.229 3.992.57.266 1.023.425 1.37.544.603.217 1.14.181 1.56.111.451-.076 1.419-.584 1.62-1.16.202-.576.202-1.074.141-1.168-.06-.09-1.39-1.39-2.031-1.668-.641-.278-.278-.278-.278.435 0 .278-.278.278-.278.278zm-.01-2.955c.203.498.418.995.62 1.492.203.498.418.995.62 1.492.203.498.418.995.62 1.492s.418.995.62 1.492c.203.498.418.995.62 1.492s.418.995.62 1.492c.203.498.418.995.62 1.492s.418.995.62 1.492c.203.498.418.995.62 1.492s.418.995.62 1.492c.203.498.418.995.62 1.492s.418.995.62 1.492c.203.498.418.995.62 1.492z"/>
    </svg>
);


export function WhatsAppButton() {
  const url = `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-6 right-6 z-50 h-14 w-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:bg-[#128C7E] transition-all duration-300"
      aria-label="Contact us on WhatsApp"
    >
        <WhatsAppIcon />
      <div className="absolute right-full mr-3 hidden group-hover:block bg-background text-foreground text-sm px-3 py-1.5 rounded-md shadow-md whitespace-nowrap">
        Inquire on WhatsApp
      </div>
    </Link>
  );
}
