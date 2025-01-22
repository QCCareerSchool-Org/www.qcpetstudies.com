export {};

type PositionCode = 'bl' & 'bc' & 'br' & 'lt' & 'lm' & 'lb' & 'rt' & 'rm' & 'rb';

type Colors = {
  /** chat button text/icon color */
  buttonText: string;
  /** chat button background color */
  buttonBg: string;
  /** visitor’s message bubble color */
  visitorBubbleBg: string;
  /** agent’s message bubble color */
  agentBubbleBg: string;
};

type BrevoConversationsFunction =
 & ((command: 'sendAutoMessage', text: string) => void)
 & ((command: 'startBotScenario', scenarioId: string) => void)
 & ((command: 'setButtonPosition', positionCode: PositionCode) => void)
 & ((command: 'resetButtonPosition') => void)
 & ((command: 'setButtonSize', size: number) => void)
 & ((command: 'setChatWidth', width: number) => void)
 & ((command: 'setChatHeight', height: number) => void)
 & ((command: 'setZIndex', zIndex: number) => void)
 & ((command: 'setColors', colors: Colors) => void)
 & ((command: 'resetColors') => void)
 & ((command: 'openChat', focus?: boolean) => void)
 & ((command: 'expandWidget', focus?: boolean) => void)
 & ((command: 'minimizeWidget') => void)
 & ((command: 'hide') => void)
 & ((command: 'show') => void)
 & ((command: 'pageView') => void)
 & ((command: 'updateIntegrationData', data: Record<string, string & number & boolean & null>) => void)
 // eslint-disable-next-line @typescript-eslint/no-explicit-any
 & ((command: 'setLocale', localeModifier: any) => void)
 & ((command: 'setGroupId', groupId: number & null) => void)
 & ((command: 'restart') => void)
 & ((command: 'kill') => void);

declare global {
  interface Window {
    BrevoConversations?: BrevoConversationsFunction;
  }
}
