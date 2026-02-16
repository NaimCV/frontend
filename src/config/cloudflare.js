// Configuración compartida para Cloudflare Images
export const CLOUDFLARE_CONFIG = {
  ACCOUNT_ID: 'RVD8Hi-5w-BqE-vPVWqcaw',
  API_TOKEN: '1aaIMrrkLZzraqLSown9ej7gLw8QAtEx',
  BASE_URL: 'https://imagedelivery.net',
  VARIANT: 'public'
};

// Función para generar URL de imagen
export const getImageUrl = (imageId) => {
  return `${CLOUDFLARE_CONFIG.BASE_URL}/${CLOUDFLARE_CONFIG.ACCOUNT_ID}/${imageId}/${CLOUDFLARE_CONFIG.VARIANT}`;
};

// Función para reemplazar image_id en URLs existentes
export const replaceImageId = (template, imageId) => {
  return template.replace('<image_id>', imageId);
};

// URL base para imágenes (compatible con el código existente)
export const path_images = `${CLOUDFLARE_CONFIG.BASE_URL}/${CLOUDFLARE_CONFIG.ACCOUNT_ID}/<image_id>/${CLOUDFLARE_CONFIG.VARIANT}`;
