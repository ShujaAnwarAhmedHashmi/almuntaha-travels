import { TravelPackage } from '../types';
import { contactData, partnerCompanies } from '../data/travelData';

/**
 * Generates a high-resolution, luxury 1200 x 1650 JPEG Image Brochure using HTML5 Canvas.
 * Produces a crisp, professional agency flyer with Islamic motifs, pricing matrix,
 * hotel distances, flight routes, partner accreditations, and contact details.
 */
export const generatePackageBrochureDataUrl = async (pkg: TravelPackage): Promise<string> => {
  const canvas = document.createElement('canvas');
  const width = 1200;
  const height = 1680;
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Could not initialize canvas context');

  const isHajj = pkg.type === 'hajj';

  // 1. Background Gradient (Luxury Deep Midnight Blue to Obsidian)
  const bgGrad = ctx.createLinearGradient(0, 0, 0, height);
  bgGrad.addColorStop(0, '#040d1a');
  bgGrad.addColorStop(0.3, '#091e3a');
  bgGrad.addColorStop(0.7, '#0b1626');
  bgGrad.addColorStop(1, '#020617');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, width, height);

  // 2. Gold Decorative Outer & Inner Border
  ctx.strokeStyle = '#f59e0b';
  ctx.lineWidth = 6;
  ctx.strokeRect(24, 24, width - 48, height - 48);

  ctx.strokeStyle = 'rgba(251, 191, 36, 0.4)';
  ctx.lineWidth = 2;
  ctx.strokeRect(34, 34, width - 68, height - 68);

  // Decorative Corner Accents (Islamic geometry inspired)
  const drawCorner = (x: number, y: number, angle: number) => {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);
    ctx.fillStyle = '#f59e0b';
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(24, 0);
    ctx.lineTo(0, 24);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  };
  drawCorner(34, 34, 0);
  drawCorner(width - 34, 34, Math.PI / 2);
  drawCorner(width - 34, height - 34, Math.PI);
  drawCorner(34, height - 34, -Math.PI / 2);

  // 3. Top Header: Bismillah / Islamic Crest
  ctx.fillStyle = '#fbbf24';
  ctx.font = 'bold 18px "Plus Jakarta Sans", sans-serif';
  ctx.textAlign = 'center';
  ctx.letterSpacing = '3px';
  ctx.fillText('بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ', width / 2, 72);

  // Agency Brand Name
  ctx.fillStyle = '#ffffff';
  ctx.font = '900 36px "Cinzel", "Georgia", serif';
  ctx.letterSpacing = '2px';
  ctx.fillText('AL MUNTAHA TRAVELS AND TOURS', width / 2, 116);

  ctx.fillStyle = '#94a3b8';
  ctx.font = '600 15px "Plus Jakarta Sans", sans-serif';
  ctx.letterSpacing = '1px';
  ctx.fillText('AUTHORIZED HAJJ & UMRAH SERVICES • 18+ YEARS OF EXCELLENCE', width / 2, 142);

  // Gold Divider Line
  const divGrad = ctx.createLinearGradient(150, 160, width - 150, 160);
  divGrad.addColorStop(0, 'rgba(245, 158, 11, 0)');
  divGrad.addColorStop(0.5, 'rgba(245, 158, 11, 1)');
  divGrad.addColorStop(1, 'rgba(245, 158, 11, 0)');
  ctx.strokeStyle = divGrad;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(150, 160);
  ctx.lineTo(width - 150, 160);
  ctx.stroke();

  // 4. Package Hero Banner Box
  const heroGrad = ctx.createLinearGradient(60, 180, width - 60, 360);
  heroGrad.addColorStop(0, '#102a4e');
  heroGrad.addColorStop(1, '#07182f');
  ctx.fillStyle = heroGrad;
  roundRect(ctx, 60, 180, width - 120, 210, 16, true, false);

  ctx.strokeStyle = '#f59e0b';
  ctx.lineWidth = 2;
  roundRect(ctx, 60, 180, width - 120, 210, 16, false, true);

  // Badge Pill
  ctx.fillStyle = '#f59e0b';
  roundRect(ctx, 84, 202, 220, 32, 16, true, false);
  ctx.fillStyle = '#0f172a';
  ctx.font = '900 13px "Plus Jakarta Sans", sans-serif';
  ctx.textAlign = 'center';
  ctx.letterSpacing = '1px';
  ctx.fillText(isHajj ? '★ HAJJ 2027 SEASON' : '★ UMRAH SPECIAL GROUP', 194, 223);

  if (pkg.badge) {
    ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
    roundRect(ctx, 314, 202, 240, 32, 16, true, false);
    ctx.fillStyle = '#fef08a';
    ctx.font = 'bold 13px "Plus Jakarta Sans", sans-serif';
    ctx.fillText(pkg.badge, 434, 223);
  }

  // Package Title
  ctx.textAlign = 'left';
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 28px "Cinzel", "Georgia", serif';
  ctx.letterSpacing = '0.5px';
  
  // Wrap package name if too long
  wrapText(ctx, pkg.name, 84, 276, width - 200, 34);

  // Price & Duration Ribbon in Hero Banner
  ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
  roundRect(ctx, 76, 316, width - 152, 60, 10, true, false);

  ctx.fillStyle = '#cbd5e1';
  ctx.font = '600 14px "Plus Jakarta Sans", sans-serif';
  ctx.fillText(pkg.priceNote?.includes('Tentative') ? 'Tentative Base Rate:' : 'Package Rate (Starting From):', 96, 352);

  ctx.fillStyle = '#fde047';
  ctx.font = '900 32px monospace';
  const priceString = `${pkg.currency === 'USD' ? '$' : 'PKR '}${pkg.price}`;
  ctx.fillText(priceString, 380, 356);

  ctx.textAlign = 'right';
  ctx.fillStyle = '#38bdf8';
  ctx.font = 'bold 16px "Plus Jakarta Sans", sans-serif';
  ctx.fillText(`⏱ Duration: ${pkg.duration}`, width - 96, 342);

  if (pkg.dates) {
    ctx.fillStyle = '#94a3b8';
    ctx.font = '600 13px "Plus Jakarta Sans", sans-serif';
    ctx.fillText(`🗓 Dates: ${pkg.dates}`, width - 96, 364);
  }

  // 5. Hotels Section (2 Side-by-Side Cards)
  const hotelCardY = 410;
  const cardW = (width - 120 - 24) / 2;
  const cardH = 170;

  // Makkah Card
  ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
  roundRect(ctx, 60, hotelCardY, cardW, cardH, 14, true, false);
  ctx.strokeStyle = 'rgba(245, 158, 11, 0.5)';
  ctx.lineWidth = 1.5;
  roundRect(ctx, 60, hotelCardY, cardW, cardH, 14, false, true);

  ctx.textAlign = 'left';
  ctx.fillStyle = '#f59e0b';
  ctx.font = '900 14px "Plus Jakarta Sans", sans-serif';
  ctx.fillText('🕋 MAKKAH MUKARRAMAH STAY', 80, hotelCardY + 32);

  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 19px "Cinzel", "Georgia", serif';
  wrapText(ctx, pkg.makkahHotel.name, 80, hotelCardY + 62, cardW - 40, 24);

  ctx.fillStyle = '#fde047';
  ctx.font = 'bold 14px "Plus Jakarta Sans", sans-serif';
  ctx.fillText(`📍 Distance: ${pkg.makkahHotel.distance}`, 80, hotelCardY + 118);

  ctx.fillStyle = '#94a3b8';
  ctx.font = '12px "Plus Jakarta Sans", sans-serif';
  wrapText(ctx, pkg.makkahHotel.rating || '', 80, hotelCardY + 144, cardW - 40, 16);

  // Madinah Card
  const madinahX = 60 + cardW + 24;
  ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
  roundRect(ctx, madinahX, hotelCardY, cardW, cardH, 14, true, false);
  ctx.strokeStyle = 'rgba(16, 185, 129, 0.5)';
  ctx.lineWidth = 1.5;
  roundRect(ctx, madinahX, hotelCardY, cardW, cardH, 14, false, true);

  ctx.fillStyle = '#34d399';
  ctx.font = '900 14px "Plus Jakarta Sans", sans-serif';
  ctx.fillText('🕌 MADINAH MUNAWWARAH STAY', madinahX + 20, hotelCardY + 32);

  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 19px "Cinzel", "Georgia", serif';
  wrapText(ctx, pkg.madinahHotel.name, madinahX + 20, hotelCardY + 62, cardW - 40, 24);

  ctx.fillStyle = '#a7f3d0';
  ctx.font = 'bold 14px "Plus Jakarta Sans", sans-serif';
  ctx.fillText(`📍 Distance: ${pkg.madinahHotel.distance}`, madinahX + 20, hotelCardY + 118);

  ctx.fillStyle = '#94a3b8';
  ctx.font = '12px "Plus Jakarta Sans", sans-serif';
  wrapText(ctx, pkg.madinahHotel.rating || '', madinahX + 20, hotelCardY + 144, cardW - 40, 16);

  // 6. Pricing Matrix Table
  const tableY = 600;
  ctx.fillStyle = 'rgba(15, 23, 42, 0.9)';
  roundRect(ctx, 60, tableY, width - 120, 150, 14, true, false);
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
  ctx.lineWidth = 1;
  roundRect(ctx, 60, tableY, width - 120, 150, 14, false, true);

  ctx.fillStyle = '#38bdf8';
  ctx.font = '900 14px "Plus Jakarta Sans", sans-serif';
  ctx.fillText('💰 ROOM CONFIGURATIONS & PRICING MATRIX', 80, tableY + 30);

  if (pkg.sharingPrices && pkg.sharingPrices.length > 0) {
    const numCols = pkg.sharingPrices.length;
    const colW = (width - 160) / numCols;
    pkg.sharingPrices.forEach((sp, idx) => {
      const boxX = 80 + idx * colW;
      ctx.fillStyle = 'rgba(255, 255, 255, 0.06)';
      roundRect(ctx, boxX, tableY + 48, colW - 12, 82, 8, true, false);
      ctx.strokeStyle = 'rgba(245, 158, 11, 0.3)';
      roundRect(ctx, boxX, tableY + 48, colW - 12, 82, 8, false, true);

      ctx.textAlign = 'center';
      ctx.fillStyle = '#cbd5e1';
      ctx.font = 'bold 13px "Plus Jakarta Sans", sans-serif';
      ctx.fillText(`${sp.sharingType} Room`, boxX + (colW - 12) / 2, tableY + 74);

      ctx.fillStyle = '#fde047';
      ctx.font = '900 17px monospace';
      ctx.fillText(sp.price.split('(')[0].trim(), boxX + (colW - 12) / 2, tableY + 104);
    });
  }

  // 7. Ground Logistics & Flights Strip
  const logY = 770;
  ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
  roundRect(ctx, 60, logY, width - 120, 130, 14, true, false);
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
  roundRect(ctx, 60, logY, width - 120, 130, 14, false, true);

  ctx.textAlign = 'left';
  ctx.fillStyle = '#38bdf8';
  ctx.font = '900 14px "Plus Jakarta Sans", sans-serif';
  ctx.fillText('✈ FLIGHTS, TRANSPORT & GROUND LOGISTICS', 80, logY + 30);

  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 13px "Plus Jakarta Sans", sans-serif';
  ctx.fillText('• Flights / Airline:', 80, logY + 62);
  ctx.fillStyle = '#cbd5e1';
  ctx.font = '13px "Plus Jakarta Sans", sans-serif';
  wrapText(ctx, pkg.flights, 230, logY + 62, width - 330, 20);

  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 13px "Plus Jakarta Sans", sans-serif';
  ctx.fillText('• Transport & Visa:', 80, logY + 98);
  ctx.fillStyle = '#cbd5e1';
  ctx.font = '13px "Plus Jakarta Sans", sans-serif';
  wrapText(ctx, `${pkg.transport} | ${pkg.visa}`, 230, logY + 98, width - 330, 20);

  // 8. Inclusions & Guarantees Box
  const incY = 920;
  ctx.fillStyle = 'rgba(6, 78, 59, 0.35)';
  roundRect(ctx, 60, incY, width - 120, 270, 14, true, false);
  ctx.strokeStyle = 'rgba(52, 211, 153, 0.4)';
  roundRect(ctx, 60, incY, width - 120, 270, 14, false, true);

  ctx.fillStyle = '#34d399';
  ctx.font = '900 15px "Plus Jakarta Sans", sans-serif';
  ctx.fillText('✓ KEY PACKAGE INCLUSIONS & GUARANTEES', 80, incY + 32);

  const incItems = pkg.inclusions.slice(0, 7);
  incItems.forEach((item, idx) => {
    const col = idx < 4 ? 0 : 1;
    const row = idx < 4 ? idx : idx - 4;
    const itemX = 80 + col * (width / 2 - 40);
    const itemY = incY + 70 + row * 46;

    ctx.fillStyle = '#34d399';
    ctx.font = 'bold 14px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('✓', itemX, itemY);

    ctx.fillStyle = '#e2e8f0';
    ctx.font = '600 13.5px "Plus Jakarta Sans", sans-serif';
    wrapText(ctx, item, itemX + 20, itemY, width / 2 - 100, 20);
  });

  // 9. Definite Hotel Voucher / Special Policy Box
  const policyY = 1210;
  ctx.fillStyle = 'rgba(245, 158, 11, 0.12)';
  roundRect(ctx, 60, policyY, width - 120, 110, 12, true, false);
  ctx.strokeStyle = 'rgba(245, 158, 11, 0.5)';
  roundRect(ctx, 60, policyY, width - 120, 110, 12, false, true);

  ctx.fillStyle = '#fbbf24';
  ctx.font = '900 14px "Plus Jakarta Sans", sans-serif';
  ctx.fillText('📌 IMPORTANT POLICY & DIRECT VOUCHER GUARANTEE:', 80, policyY + 30);

  ctx.fillStyle = '#fef3c7';
  ctx.font = '600 13px "Plus Jakarta Sans", sans-serif';
  const policyText = pkg.importantNotes?.[0] || 
    'Definite Hotel Voucher Guarantee: No concept of "similar basis" hotels — verified hotel bookings provided directly to pilgrims.';
  wrapText(ctx, policyText, 80, policyY + 58, width - 160, 22);

  // 10. Partner Alliance Bar
  const partnerY = 1340;
  ctx.fillStyle = 'rgba(15, 23, 42, 0.9)';
  roundRect(ctx, 60, partnerY, width - 120, 90, 12, true, false);
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
  roundRect(ctx, 60, partnerY, width - 120, 90, 12, false, true);

  ctx.textAlign = 'center';
  ctx.fillStyle = '#94a3b8';
  ctx.font = 'bold 11px "Plus Jakarta Sans", sans-serif';
  ctx.letterSpacing = '1px';
  ctx.fillText('OFFICIAL ACCREDITED PARTNER ALLIANCE NETWORK', width / 2, partnerY + 28);

  ctx.fillStyle = '#fde047';
  ctx.font = 'bold 15px "Cinzel", "Georgia", serif';
  ctx.fillText('Minar-e-Haram Travels  •  Neem Tree Travels & Tours  •  Rehla Travels & Tours (FFP)', width / 2, partnerY + 60);

  // 11. Footer: Direct Contacts & Booking Desk
  const footY = 1450;
  const footGrad = ctx.createLinearGradient(60, footY, width - 60, footY + 160);
  footGrad.addColorStop(0, '#f59e0b');
  footGrad.addColorStop(1, '#d97706');
  ctx.fillStyle = footGrad;
  roundRect(ctx, 60, footY, width - 120, 160, 16, true, false);

  ctx.textAlign = 'left';
  ctx.fillStyle = '#0f172a';
  ctx.font = '900 15px "Plus Jakarta Sans", sans-serif';
  ctx.letterSpacing = '1px';
  ctx.fillText('FOR BOOKINGS & CONSULTATION (DIRECT PILGRIM DESK):', 90, footY + 36);

  ctx.fillStyle = '#091e3a';
  ctx.font = 'bold 22px "Cinzel", "Georgia", serif';
  ctx.fillText('Muhammad Imran Sharif', 90, footY + 70);

  ctx.fillStyle = '#040d1a';
  ctx.font = '900 24px monospace';
  ctx.fillText('📞 +92 333 2082702  /  📱 +92 313 2710182', 90, footY + 104);

  ctx.fillStyle = '#1e293b';
  ctx.font = '600 13px "Plus Jakarta Sans", sans-serif';
  ctx.fillText(`📧 ${contactData.email}  |  🏢 Islamabad, Pakistan`, 90, footY + 134);

  ctx.textAlign = 'right';
  ctx.fillStyle = '#0f172a';
  ctx.font = '900 14px "Plus Jakarta Sans", sans-serif';
  ctx.fillText('SCAN & INQUIRE VIA WHATSAPP', width - 90, footY + 54);
  ctx.font = 'bold 12px "Plus Jakarta Sans", sans-serif';
  ctx.fillText('100% Verified Packages', width - 90, footY + 80);

  // Export Canvas to JPEG Data URL with 0.95 quality
  return canvas.toDataURL('image/jpeg', 0.95);
};

/**
 * Triggers direct browser download of the generated JPEG brochure image
 */
export const downloadPackageJPEG = async (pkg: TravelPackage) => {
  try {
    const dataUrl = await generatePackageBrochureDataUrl(pkg);
    const link = document.createElement('a');
    const safeName = pkg.name.toLowerCase().replace(/[^a-z0-9]/g, '-').slice(0, 40);
    link.download = `Al-Muntaha-${safeName}-Brochure.jpg`;
    link.href = dataUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (err) {
    console.error('Error generating brochure JPEG:', err);
    alert('Unable to download JPEG brochure. Please try again.');
  }
};

// Canvas Helper: Draw Rounded Rectangles
function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number,
  fill: boolean,
  stroke: boolean
) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
  if (fill) ctx.fill();
  if (stroke) ctx.stroke();
}

// Canvas Helper: Text Wrapping
function wrapText(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  lineHeight: number
) {
  const words = text.split(' ');
  let line = '';
  let currentY = y;

  for (let n = 0; n < words.length; n++) {
    const testLine = line + words[n] + ' ';
    const metrics = ctx.measureText(testLine);
    const testWidth = metrics.width;
    if (testWidth > maxWidth && n > 0) {
      ctx.fillText(line.trim(), x, currentY);
      line = words[n] + ' ';
      currentY += lineHeight;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line.trim(), x, currentY);
}
