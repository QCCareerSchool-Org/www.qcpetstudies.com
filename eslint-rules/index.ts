import { noUnnecessaryConditionExceptWindow } from './no-unnecessary-condition-except-window';
import { noWindowOutsideEffects } from './no-window-outside-effects';

const plugin = {
  rules: {
    'no-unnecessary-condition-except-window': noUnnecessaryConditionExceptWindow,
    'no-window-outside-effects': noWindowOutsideEffects,
  },
  configs: {
    recommended: {
      rules: {
        'custom/no-window-outside-effects': 'error',
        'custom/no-unnecessary-condition-except-window': 'error',
      },
    },
  },
} as const;

export default plugin;
