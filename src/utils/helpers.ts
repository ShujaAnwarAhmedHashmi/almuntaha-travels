import { TravelPackage } from '../types';
import { contactData } from '../data/travelData';

/**
 * Clean phone number for WhatsApp URL (removes spaces, dashes, plus)
 */
export function formatPhoneForWhatsApp(phone: string): string {
  return phone.replace(/[^0-9]/g, '');
}

/**
 * Generate a prefilled WhatsApp link for a Hajj package
 */
export function getHajjWhatsAppUrl(pkg: TravelPackage): string {
  const cleanPhone = formatPhoneForWhatsApp(contactData.whatsappNumber);
  const text = `Assalamualaikum, I am interested in the ${pkg.name} Hajj 2027 package (${pkg.currency} ${pkg.price} - ${pkg.duration}). Please share complete details and booking procedure.`;
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
}

/**
 * Generate a prefilled WhatsApp link for an Umrah package
 */
export function getUmrahWhatsAppUrl(pkg: TravelPackage): string {
  const cleanPhone = formatPhoneForWhatsApp(contactData.whatsappNumber);
  const text = `Assalamualaikum, I am interested in the Umrah ${pkg.name} package (${pkg.currency} ${pkg.price} - ${pkg.duration}). Please send me the complete details.`;
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
}

/**
 * Generate general WhatsApp link
 */
export function getGeneralWhatsAppUrl(subject?: string): string {
  const cleanPhone = formatPhoneForWhatsApp(contactData.whatsappNumber);
  const msg = subject
    ? `Assalamualaikum, I would like to inquire about: ${subject}. Please share details.`
    : `Assalamualaikum, I am contacting you from your website regarding Hajj 2027 / Umrah packages. Please guide me.`;
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(msg)}`;
}

/**
 * Format a rich text summary of a package for WhatsApp/social media sharing
 */
export function formatPackageShareText(pkg: TravelPackage): string {
  const currencySymbol = pkg.currency === 'PKR' ? 'PKR' : 'USD';
  const typeLabel = pkg.type === 'hajj' ? 'HAJJ 2027' : 'UMRAH PACKAGE';
  
  return `🕋 *AL MUNTAHA TRAVELS AND TOURS*
✨ *${typeLabel}*

📌 *${pkg.name.toUpperCase()}*
💰 *Price:* ${currencySymbol} ${pkg.price} ${pkg.priceNote ? `(${pkg.priceNote})` : ''}
⏳ *Duration:* ${pkg.duration}

🏨 *Makkah:* ${pkg.makkahHotel.name} (${pkg.makkahHotel.distance})
🕌 *Madinah:* ${pkg.madinahHotel.name} (${pkg.madinahHotel.distance})

🌟 *Key Inclusions:*
${pkg.inclusions.slice(0, 5).map(inc => `✓ ${inc}`).join('\n')}

📞 *Contact & Inquiries:*
WhatsApp: ${contactData.whatsappDisplay} & ${contactData.whatsappDisplay2 || contactData.whatsappDisplay}
Email: ${contactData.email}
Website: https://almuntahatravels.com

_Al Muntaha Travels and Tours — Your Journey to the Holy Lands, Planned with Care._`;
}

/**
 * Copy text with visual feedback
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    if (navigator?.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
    // Fallback for browsers
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    const successful = document.execCommand('copy');
    document.body.removeChild(textArea);
    return successful;
  } catch (err) {
    console.error('Failed to copy', err);
    return false;
  }
}
