// Platform-independent rules; reusable by a future React Native client.
export const DEMO_RATE = { price: 1, intervalMinutes: 30, currency: 'USD' } as const;
export function rentalCost(minutes: number): number {
  if (!Number.isFinite(minutes) || minutes < 0) throw new Error('Minutes must be a non-negative number');
  return Math.ceil(minutes / DEMO_RATE.intervalMinutes) * DEMO_RATE.price;
}
export const stations = [
  { id: 'CD-001', name: 'Central café', area: 'Downtown', available: 8, returns: 4 },
  { id: 'CD-002', name: 'The social club', area: 'Arts district', available: 3, returns: 9 },
  { id: 'CD-003', name: 'Market hall', area: 'Riverside', available: 0, returns: 12 },
];
