export function formatIDR(amount: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(amount);
}

export const OFFICIAL_PHONE = '+6281288990022';
export const DISPLAY_PHONE = '0812-8899-0022';
export const OFFICIAL_EMAIL = 'halo@archonrollingdoor.co.id';
export const OFFICIAL_ADDRESS = 'Kawasan Industri & Pergudangan Modern Blok C8 No. 12, Jakarta Barat, DKI Jakarta 11820';

export function createWhatsAppUrl(text: string): string {
  const cleanPhone = '6281288990022';
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
}
