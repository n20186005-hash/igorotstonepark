// Public listing checked in the browser. This is a dated snapshot, not a live feed.
export const mapsReviewSnapshot = {
  url: 'https://maps.app.goo.gl/n12kgpTFurncbFv3A',
  rating: 4.4,
  reviewCount: 5457,
  checkedOn: '2026-10-18'
} as const;

export const reviewCountLabel = mapsReviewSnapshot.reviewCount.toLocaleString('en-US');
const checkedDate = new Date(`${mapsReviewSnapshot.checkedOn}T12:00:00Z`);
export const reviewDateFil = checkedDate.toLocaleDateString('fil-PH', { dateStyle: 'long', timeZone: 'UTC' });
export const reviewDateEn = checkedDate.toLocaleDateString('en-US', { dateStyle: 'long', timeZone: 'UTC' });
