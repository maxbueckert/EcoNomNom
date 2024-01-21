import { defineManifest } from '@crxjs/vite-plugin'
import packageData from '../package.json' assert { type: 'json' }

export default defineManifest({
  name: packageData.name,
  description: packageData.description,
  version: packageData.version,
  manifest_version: 3,
  icons: {
    16: 'icons/brandLogo.png', // Assuming the same icon is used for all sizes
    32: 'icons/brandLogo.png',
    48: 'icons/brandLogo.png',
    128: 'icons/brandLogo.png',
  },
  action: {
    default_popup: 'popup.html',
    default_icon: 'icons/brandLogo.png',
  },
  exclude_matches: ['*://www.google.com/search*'],
  background: {
    service_worker: 'src/background/index.js',
    type: 'module',
  },
  content_scripts: [
    {
      matches: ['<all_urls>'],
      js: ['src/contentScript/index.jsx'],
    },
  ],
  web_accessible_resources: [
    {
      resources: ['icons/brandLogo.png', 'icons/character.png'], // Updated path
      matches: [],
    },
  ],
  permissions: ['sidePanel', 'storage'],
  chrome_url_overrides: {
    newtab: 'newtab.html',
  },
})
