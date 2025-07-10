export const sanitizedConfig = {
  hotjar: {
    id: process.env.NEXT_PUBLIC_HOTJAR_ID || '',
    snippetVersion: process.env.NEXT_PUBLIC_HOTJAR_VERSION
      ? parseInt(process.env.NEXT_PUBLIC_HOTJAR_VERSION, 10)
      : 6,
  },
};
