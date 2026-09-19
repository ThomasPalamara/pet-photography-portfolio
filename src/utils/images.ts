// Placeholder imagery only — swap for real photography once content is ready.
const unsplash = (id: string, params: string) =>
  `https://images.unsplash.com/photo-${id}?${params}`;

const w = (width: number, height: number) =>
  `auto=format&fit=crop&w=${width}&h=${height}&q=80`;

export const heroImage = unsplash('1633722715463-d30f4f325e24', w(1200, 1400));

export const avatarImages = [
  'https://i.pravatar.cc/100?img=12',
  'https://i.pravatar.cc/100?img=32',
  'https://i.pravatar.cc/100?img=47',
];

// Every image in every folder under src/imgs/gallery — drop a new folder in
// (any name) with photos in it and they show up here automatically, no code
// changes needed. Sorted by path so each folder's photos stay grouped together.
const galleryModules = import.meta.glob('../imgs/gallery/**/*.{jpg,jpeg,png,JPG,JPEG,PNG}', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

export const galleryImages = Object.keys(galleryModules)
  .sort()
  .map((path) => galleryModules[path]);

export const aboutImage = unsplash('1552053831-71594a27632d', w(700, 900));
