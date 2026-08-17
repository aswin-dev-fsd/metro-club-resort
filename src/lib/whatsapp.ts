export const WHATSAPP_NUMBER = "919043001599";
export const DISPLAY_PHONE = "+91 90430 01599";
export const RESORT_EMAIL = "metroclubresort@gmail.com";
export const GOOGLE_MAPS_URL = "https://maps.google.com/?q=10.9167,77.1500"; // Sultanpet, Coimbatore

/**
 * Constructs a dynamic WhatsApp link with prefilled, URL-encoded text.
 */
export function createWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
