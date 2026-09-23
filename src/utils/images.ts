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
