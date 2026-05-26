import { noJSXTrailingTextSpace } from './no-jsx-trailing-text-space';
import { noUnnecessaryConditionExceptWindow } from './no-unnecessary-condition-except-window';
import { noWindowOutsideEffects } from './no-window-outside-effects';

const plugin = {
  rules: {
    'no-unnecessary-condition-except-window': noUnnecessaryConditionExceptWindow,
    'no-window-outside-effects': noWindowOutsideEffects,
    'no-jsx-trailing-text-space': noJSXTrailingTextSpace,
  },
  configs: {
    recommended: {
      rules: {
        'custom/no-window-outside-effects': 'error',
        'custom/no-unnecessary-condition-except-window': 'error',
        'custom/no-jsx-trailing-text-space': 'error',
      },
    },
  },
} as const;

export default plugin;
