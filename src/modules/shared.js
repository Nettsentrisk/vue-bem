export const TYPE_STRING = 'string';
export const DEFAULT_OPTIONS = {
  namespace: '',
  blockSource: 'name',
  method: '$bem',
  hyphenate: {
    blockAndElement: false,
    modifier: true,
  },
  delimiters: {
    element: '__',
    modifier: '--',
    value: '-',
  }
};

export const HYPHENATE_CACHE = {};
