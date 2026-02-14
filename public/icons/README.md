# PWA Icon Generation

Since icon generation requires image processing, you need to generate the PWA icons manually.

## Option 1: Use PWA Asset Generator (Recommended)

```bash
npx @vite-pwa/assets-generator --preset minimal public/logo.png
```

## Option 2: Use Online Tool

Visit: https://www.pwabuilder.com/imageGenerator

1. Upload your logo.png
2. Download all generated sizes
3. Place them in `public/icons/` folder

## Required Sizes:

- icon-72x72.png
- icon-96x96.png
- icon-128x128.png
- icon-144x144.png
- icon-152x152.png
- icon-192x192.png (maskable)
- icon-384x384.png
- icon-512x512.png (maskable)

## Quick Fix

Copy your logo.png to all these names as a temporary solution (not ideal but functional):

```bash
cd public\icons
copy ..\logo.png icon-72x72.png
copy ..\logo.png icon-96x96.png
copy ..\logo.png icon-128x128.png
copy ..\logo.png icon-144x144.png
copy ..\logo.png icon-152x152.png
copy ..\logo.png icon-192x192.png
copy ..\logo.png icon-384x384.png
copy ..\logo.png icon-512x512.png
```

The PWA will work with these, though ideally you should generate properly sized icons.
