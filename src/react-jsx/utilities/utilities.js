// eslint-disable-next-line import/prefer-default-export
export function addPrefixToBsClasses(bsClasses, prefix, useBsClasses) {
  if (!useBsClasses || !bsClasses || (Array.isArray(bsClasses) && bsClasses.length === 0)) {
    return '';
  }

  // Normalize to array of class names
  let classList = [];
  if (Array.isArray(bsClasses)) {
    classList = bsClasses;
  } else if (typeof bsClasses === 'string') {
    classList = bsClasses.trim().split(' ');
  }

  // Add prefix to each class
  return classList
    .map((cls) => `${prefix}${cls}`)
    .join(' ')
    .trim();
}

export function getFullClassName(
  bsClasses,
  prefix = '',
  useBsClasses = true,
  customClassNames = ''
) {
  return `${addPrefixToBsClasses(bsClasses, prefix, useBsClasses)} ${customClassNames}`.trim();
}
