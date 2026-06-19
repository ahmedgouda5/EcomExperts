import { SecuritySystemData } from './types';

export const mockData: SecuritySystemData = {
  cameras: [
    {
      id: 'cam-1',
      name: 'Indoor Camera Pro',
      price: 149.99,
      oldPrice: 199.99,
      quantity: 2,
      category: 'camera',
      description: '1080p HD with night vision',
    },
    {
      id: 'cam-2',
      name: 'Outdoor Camera Elite',
      price: 249.99,
      oldPrice: 299.99,
      quantity: 1,
      category: 'camera',
      description: '4K Ultra HD with spotlight',
    },
  ],
  sensors: [
    {
      id: 'sen-1',
      name: 'Motion Sensor',
      price: 49.99,
      quantity: 3,
      category: 'sensor',
      description: 'Pet-friendly detection',
    },
    {
      id: 'sen-2',
      name: 'Door/Window Sensor',
      price: 39.99,
      quantity: 4,
      category: 'sensor',
      description: 'Magnetic contact sensor',
    },
    {
      id: 'sen-3',
      name: 'Smoke & CO Detector',
      price: 79.99,
      quantity: 1,
      category: 'sensor',
      description: 'Dual-path alerts',
    },
  ],
  accessories: [
    {
      id: 'acc-1',
      name: 'Base Station',
      price: 199.99,
      quantity: 1,
      category: 'accessory',
      description: 'Central hub with siren',
    },
    {
      id: 'acc-2',
      name: 'Keypad',
      price: 89.99,
      quantity: 1,
      category: 'accessory',
      description: 'Arm/disarm control panel',
    },
    {
      id: 'acc-3',
      name: 'Yard Sign & Stickers',
      price: 19.99,
      quantity: 1,
      category: 'accessory',
      description: 'Deterrent package',
    },
  ],
  plans: [
    {
      id: 'plan-1',
      name: 'Premium Protection Plan',
      price: 29.99,
      oldPrice: 44.99,
      quantity: 1,
      category: 'plan',
      description: '24/7 monitoring with cloud storage',
    },
  ],
  summary: {
    originalTotal: 1589.87,
    finalTotal: 1249.89,
    savings: 339.98,
  },
};