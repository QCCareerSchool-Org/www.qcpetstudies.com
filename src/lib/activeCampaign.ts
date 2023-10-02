declare global {
  interface VGO {
    (arg: 'setAccout', accountId: string): void;
    (arg: 'setTrackByDefault', value: boolean): void;
    (arg: 'update'): void;
    (arg: 'process'): void;
  }

  interface Window {
    vgo?: VGO;
  }
}

/**
 * This might get AC site tracking working on SPAs:
 *
 * https://help.activecampaign.com/hc/en-us/articles/360003700740-How-to-set-up-Conversations#adding-the-chat-widget-to-your-website
 */
export const resetActiveCampaign = (): void => {
  window.vgo?.('update');
};
