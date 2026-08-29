import { TravelPackage } from '../types';
import { contactData } from '../data/travelData';

/**
 * Generates an elegant, printable HTML document and opens the native print dialog (Save as PDF).
 * Works reliably across both mobile devices (iOS Safari, Android Chrome) and desktop browsers
 * without requiring bulky external canvas or heavy font dependencies.
 */
export const downloadPackagePDF = (pkg: TravelPackage) => {
  const isHajj = pkg.type === 'hajj';
  const categoryTitle = isHajj 
    ? (pkg.currency === 'USD' ? 'International Hajj 2027' : 'Pakistan Local Hajj 2027') 
    : `${pkg.category || 'Umrah'} Package`;

  const printWindow = window.open('', '_blank');
  if (!printWindow) {
    alert('Please allow popups to download/print the package PDF.');
    return;
  }

  const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${pkg.name} - Al Muntaha Travels & Tours</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@700&family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap');
    
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    body {
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      color: #1e293b;
      background: #ffffff;
      padding: 24px;
      line-height: 1.5;
      font-size: 13px;
    }
    @page {
      size: A4;
      margin: 15mm;
    }
    .header-banner {
      background: linear-gradient(135deg, #091e3a 0%, #0f172a 100%);
      color: #ffffff;
      padding: 24px;
      border-radius: 12px;
      border-bottom: 4px solid #f59e0b;
      margin-bottom: 20px;
    }
    .agency-title {
      font-family: 'Cinzel', serif;
      font-size: 22px;
      color: #fbbf24;
      letter-spacing: 0.5px;
      margin-bottom: 4px;
    }
    .agency-sub {
      font-size: 11px;
      color: #cbd5e1;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 16px;
    }
    .package-name {
      font-size: 20px;
      font-weight: 800;
      color: #ffffff;
      margin-bottom: 8px;
      line-height: 1.3;
    }
    .badge-pill {
      display: inline-block;
      background: #f59e0b;
      color: #0f172a;
      font-weight: 800;
      font-size: 10px;
      padding: 3px 10px;
      border-radius: 20px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-right: 6px;
    }
    .badge-sub {
      display: inline-block;
      background: rgba(255,255,255,0.15);
      color: #fef08a;
      font-size: 10px;
      padding: 3px 10px;
      border-radius: 20px;
    }
    .price-duration-box {
      margin-top: 16px;
      padding-top: 14px;
      border-top: 1px solid rgba(255,255,255,0.2);
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      flex-wrap: wrap;
      gap: 10px;
    }
    .rate-amount {
      font-size: 24px;
      font-weight: 900;
      color: #fde047;
      font-family: monospace;
    }
    .meta-tag {
      background: rgba(255,255,255,0.15);
      padding: 4px 10px;
      border-radius: 6px;
      font-size: 11px;
      color: #ffffff;
      font-weight: 600;
    }

    .grid-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 14px;
      margin-bottom: 18px;
    }
    .card {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 10px;
      padding: 14px;
    }
    .card-title {
      font-size: 11px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: #0f172a;
      margin-bottom: 6px;
      display: flex;
      justify-content: space-between;
    }
    .hotel-name {
      font-size: 14px;
      font-weight: 700;
      color: #091e3a;
      margin-bottom: 4px;
    }
    .hotel-dist {
      font-size: 11px;
      font-weight: 600;
      color: #d97706;
      margin-bottom: 4px;
    }

    .pricing-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 6px;
      font-size: 12px;
    }
    .pricing-table th, .pricing-table td {
      border: 1px solid #cbd5e1;
      padding: 6px 10px;
      text-align: left;
    }
    .pricing-table th {
      background: #091e3a;
      color: #ffffff;
      font-weight: 700;
    }
    .pricing-table td {
      background: #ffffff;
    }

    .section-heading {
      font-size: 12px;
      font-weight: 800;
      text-transform: uppercase;
      color: #091e3a;
      border-bottom: 2px solid #e2e8f0;
      padding-bottom: 4px;
      margin-bottom: 8px;
    }

    ul.clean-list {
      list-style: none;
      font-size: 11.5px;
    }
    ul.clean-list li {
      margin-bottom: 4px;
      padding-left: 16px;
      position: relative;
      line-height: 1.4;
    }
    ul.clean-list.inc li::before {
      content: "✓";
      color: #059669;
      font-weight: bold;
      position: absolute;
      left: 0;
    }
    ul.clean-list.exc li::before {
      content: "✕";
      color: #dc2626;
      font-weight: bold;
      position: absolute;
      left: 0;
    }

    .notes-box {
      background: #fffbeb;
      border: 1px solid #fef3c7;
      border-left: 4px solid #f59e0b;
      padding: 10px 14px;
      border-radius: 6px;
      font-size: 11px;
      color: #78350f;
      margin-top: 14px;
      margin-bottom: 18px;
    }

    .footer-bar {
      border-top: 2px solid #091e3a;
      padding-top: 12px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 11px;
      color: #475569;
    }
    .footer-contacts {
      font-weight: 700;
      color: #091e3a;
    }

    @media print {
      body {
        padding: 0;
      }
      .no-print {
        display: none !important;
      }
    }
  </style>
</head>
<body>
  <div class="header-banner">
    <div style="display: flex; justify-content: space-between; align-items: flex-start;">
      <div>
        <div class="agency-title">AL MUNTAHA TRAVELS AND TOURS</div>
        <div class="agency-sub">Authorized Hajj & Umrah Services • 18+ Years of Service</div>
      </div>
      <div style="text-align: right; font-size: 11px; color: #cbd5e1;">
        Official Partner Network:<br>
        <strong>Minar-e-Haram • Neem Tree • Rehla (FFP)</strong>
      </div>
    </div>

    <div style="margin-top: 12px;">
      <span class="badge-pill">${isHajj ? 'HAJJ 2027' : 'UMRAH PACKAGE'}</span>
      ${pkg.badge ? `<span class="badge-sub">${pkg.badge}</span>` : ''}
      <h1 class="package-name" style="margin-top: 8px;">${pkg.name}</h1>
    </div>

    <div class="price-duration-box">
      <div>
        <span style="font-size: 10px; text-transform: uppercase; color: #cbd5e1; display: block;">Base Price (${pkg.currency})</span>
        <span class="rate-amount">${pkg.currency === 'USD' ? '$' : 'PKR '}${pkg.price}</span>
        ${pkg.priceNote ? `<span style="font-size: 11px; color: #f1f5f9; display: block;">${pkg.priceNote}</span>` : ''}
      </div>
      <div style="display: flex; gap: 8px;">
        <span class="meta-tag">⏱ Duration: ${pkg.duration}</span>
        ${pkg.dates ? `<span class="meta-tag">🗓 Dates: ${pkg.dates}</span>` : ''}
      </div>
    </div>
  </div>

  <div class="grid-2">
    <div class="card">
      <div class="card-title">
        <span>🕋 Makkah Mukarramah Stay</span>
        <span style="color: #b45309;">${pkg.makkahHotel.rating || ''}</span>
      </div>
      <div class="hotel-name">${pkg.makkahHotel.name}</div>
      <div class="hotel-dist">📍 Distance: ${pkg.makkahHotel.distance}</div>
      ${pkg.makkahHotel.details ? `<p style="font-size: 11px; color: #475569; margin-top: 4px;">${pkg.makkahHotel.details}</p>` : ''}
    </div>

    <div class="card">
      <div class="card-title">
        <span>🕌 Madinah Munawwarah Stay</span>
        <span style="color: #047857;">${pkg.madinahHotel.rating || ''}</span>
      </div>
      <div class="hotel-name">${pkg.madinahHotel.name}</div>
      <div class="hotel-dist">📍 Distance: ${pkg.madinahHotel.distance}</div>
      ${pkg.madinahHotel.details ? `<p style="font-size: 11px; color: #475569; margin-top: 4px;">${pkg.madinahHotel.details}</p>` : ''}
    </div>
  </div>

  ${pkg.sharingPrices && pkg.sharingPrices.length > 0 ? `
  <div style="margin-bottom: 18px;">
    <div class="section-heading">Room Categories & Per-Person Pricing Matrix</div>
    <table class="pricing-table">
      <thead>
        <tr>
          <th>Room Configuration</th>
          <th>Rate / Person (${pkg.currency})</th>
        </tr>
      </thead>
      <tbody>
        ${pkg.sharingPrices.map(sp => `
          <tr>
            <td style="font-weight: 600;">${sp.sharingType} Room</td>
            <td style="font-family: monospace; font-weight: 700; color: #091e3a;">${sp.price}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  </div>
  ` : ''}

  <div class="card" style="margin-bottom: 18px; font-size: 11.5px;">
    <div class="section-heading" style="margin-bottom: 6px;">Ground Logistics & Services</div>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
      <div><strong>✈ Flights:</strong> ${pkg.flights}</div>
      <div><strong>🚌 Transport:</strong> ${pkg.transport}</div>
      <div><strong>🍽 Meals:</strong> ${pkg.meals || 'Provided as per package specifications'}</div>
      <div><strong>📑 Visa & Insurance:</strong> ${pkg.visa}</div>
    </div>
  </div>

  <div class="grid-2">
    <div>
      <div class="section-heading" style="color: #065f46;">Package Inclusions</div>
      <ul class="clean-list inc">
        ${pkg.inclusions.map(inc => `<li>${inc}</li>`).join('')}
      </ul>
    </div>

    <div>
      <div class="section-heading" style="color: #991b1b;">Exclusions</div>
      <ul class="clean-list exc">
        ${pkg.exclusions.map(exc => `<li>${exc}</li>`).join('')}
      </ul>
    </div>
  </div>

  ${pkg.importantNotes && pkg.importantNotes.length > 0 ? `
  <div class="notes-box">
    <strong>📌 Important Terms & Guidelines:</strong>
    <ul style="margin-top: 4px; padding-left: 14px;">
      ${pkg.importantNotes.map(n => `<li>${n}</li>`).join('')}
    </ul>
  </div>
  ` : ''}

  <div class="footer-bar">
    <div>
      <strong>Al Muntaha Travels and Tours</strong><br>
      Email: ${contactData.email} | WhatsApp: ${contactData.whatsappDisplay} / ${contactData.whatsappDisplay2}
    </div>
    <div style="text-align: right;">
      <div class="footer-contacts">Direct Desk: ${contactData.phoneDisplay}</div>
      <div style="font-size: 10px; color: #64748b;">Generated for pilgrim review</div>
    </div>
  </div>

  <script>
    window.onload = function() {
      setTimeout(function() {
        window.print();
      }, 400);
    };
  </script>
</body>
</html>
  `;

  printWindow.document.open();
  printWindow.document.write(htmlContent);
  printWindow.document.close();
};
