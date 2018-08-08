/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLElement {
    componentOnReady?: () => Promise<this | null>;
  }

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}

import '@stencil/router';
import '@stencil/state-tunnel';

import {
  RouterHistory,
} from '@stencil/router';

declare global {

  namespace StencilComponents {
    interface AppCta {
      'hideButton': boolean;
      'linkUrl': string;
    }
  }

  interface HTMLAppCtaElement extends StencilComponents.AppCta, HTMLStencilElement {}

  var HTMLAppCtaElement: {
    prototype: HTMLAppCtaElement;
    new (): HTMLAppCtaElement;
  };
  interface HTMLElementTagNameMap {
    'app-cta': HTMLAppCtaElement;
  }
  interface ElementTagNameMap {
    'app-cta': HTMLAppCtaElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-cta': JSXElements.AppCtaAttributes;
    }
  }
  namespace JSXElements {
    export interface AppCtaAttributes extends HTMLAttributes {
      'hideButton'?: boolean;
      'linkUrl'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface AppFooter {

    }
  }

  interface HTMLAppFooterElement extends StencilComponents.AppFooter, HTMLStencilElement {}

  var HTMLAppFooterElement: {
    prototype: HTMLAppFooterElement;
    new (): HTMLAppFooterElement;
  };
  interface HTMLElementTagNameMap {
    'app-footer': HTMLAppFooterElement;
  }
  interface ElementTagNameMap {
    'app-footer': HTMLAppFooterElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-footer': JSXElements.AppFooterAttributes;
    }
  }
  namespace JSXElements {
    export interface AppFooterAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface AppHeroHome {
      'textNoWrap': boolean;
    }
  }

  interface HTMLAppHeroHomeElement extends StencilComponents.AppHeroHome, HTMLStencilElement {}

  var HTMLAppHeroHomeElement: {
    prototype: HTMLAppHeroHomeElement;
    new (): HTMLAppHeroHomeElement;
  };
  interface HTMLElementTagNameMap {
    'app-hero-home': HTMLAppHeroHomeElement;
  }
  interface ElementTagNameMap {
    'app-hero-home': HTMLAppHeroHomeElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-hero-home': JSXElements.AppHeroHomeAttributes;
    }
  }
  namespace JSXElements {
    export interface AppHeroHomeAttributes extends HTMLAttributes {
      'textNoWrap'?: boolean;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface AppImg {
      'alt': string;
      'fit': boolean;
      'preLoad': boolean;
      'src': string;
    }
  }

  interface HTMLAppImgElement extends StencilComponents.AppImg, HTMLStencilElement {}

  var HTMLAppImgElement: {
    prototype: HTMLAppImgElement;
    new (): HTMLAppImgElement;
  };
  interface HTMLElementTagNameMap {
    'app-img': HTMLAppImgElement;
  }
  interface ElementTagNameMap {
    'app-img': HTMLAppImgElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-img': JSXElements.AppImgAttributes;
    }
  }
  namespace JSXElements {
    export interface AppImgAttributes extends HTMLAttributes {
      'alt'?: string;
      'fit'?: boolean;
      'preLoad'?: boolean;
      'src'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface AppInput {
      'id': string;
      'label': string;
      'maxlength': string;
      'name': string;
      'placeholder': string;
      'required': boolean;
      'type': string;
    }
  }

  interface HTMLAppInputElement extends StencilComponents.AppInput, HTMLStencilElement {}

  var HTMLAppInputElement: {
    prototype: HTMLAppInputElement;
    new (): HTMLAppInputElement;
  };
  interface HTMLElementTagNameMap {
    'app-input': HTMLAppInputElement;
  }
  interface ElementTagNameMap {
    'app-input': HTMLAppInputElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-input': JSXElements.AppInputAttributes;
    }
  }
  namespace JSXElements {
    export interface AppInputAttributes extends HTMLAttributes {
      'id'?: string;
      'label'?: string;
      'maxlength'?: string;
      'name'?: string;
      'onValueChange'?: (event: CustomEvent) => void;
      'placeholder'?: string;
      'required'?: boolean;
      'type'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface AppMembers {
      'members': any[];
    }
  }

  interface HTMLAppMembersElement extends StencilComponents.AppMembers, HTMLStencilElement {}

  var HTMLAppMembersElement: {
    prototype: HTMLAppMembersElement;
    new (): HTMLAppMembersElement;
  };
  interface HTMLElementTagNameMap {
    'app-members': HTMLAppMembersElement;
  }
  interface ElementTagNameMap {
    'app-members': HTMLAppMembersElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-members': JSXElements.AppMembersAttributes;
    }
  }
  namespace JSXElements {
    export interface AppMembersAttributes extends HTMLAttributes {
      'members'?: any[];
    }
  }
}


declare global {

  namespace StencilComponents {
    interface AppNavHeader {

    }
  }

  interface HTMLAppNavHeaderElement extends StencilComponents.AppNavHeader, HTMLStencilElement {}

  var HTMLAppNavHeaderElement: {
    prototype: HTMLAppNavHeaderElement;
    new (): HTMLAppNavHeaderElement;
  };
  interface HTMLElementTagNameMap {
    'app-nav-header': HTMLAppNavHeaderElement;
  }
  interface ElementTagNameMap {
    'app-nav-header': HTMLAppNavHeaderElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-nav-header': JSXElements.AppNavHeaderAttributes;
    }
  }
  namespace JSXElements {
    export interface AppNavHeaderAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface AppRadio {
      'label': string;
      'name': string;
      'required': boolean;
      'value': string;
    }
  }

  interface HTMLAppRadioElement extends StencilComponents.AppRadio, HTMLStencilElement {}

  var HTMLAppRadioElement: {
    prototype: HTMLAppRadioElement;
    new (): HTMLAppRadioElement;
  };
  interface HTMLElementTagNameMap {
    'app-radio': HTMLAppRadioElement;
  }
  interface ElementTagNameMap {
    'app-radio': HTMLAppRadioElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-radio': JSXElements.AppRadioAttributes;
    }
  }
  namespace JSXElements {
    export interface AppRadioAttributes extends HTMLAttributes {
      'label'?: string;
      'name'?: string;
      'onValueChange'?: (event: CustomEvent) => void;
      'required'?: boolean;
      'value'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface AppSlider {
      'label': string;
      'name': string;
    }
  }

  interface HTMLAppSliderElement extends StencilComponents.AppSlider, HTMLStencilElement {}

  var HTMLAppSliderElement: {
    prototype: HTMLAppSliderElement;
    new (): HTMLAppSliderElement;
  };
  interface HTMLElementTagNameMap {
    'app-slider': HTMLAppSliderElement;
  }
  interface ElementTagNameMap {
    'app-slider': HTMLAppSliderElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-slider': JSXElements.AppSliderAttributes;
    }
  }
  namespace JSXElements {
    export interface AppSliderAttributes extends HTMLAttributes {
      'label'?: string;
      'name'?: string;
      'onValueChange'?: (event: CustomEvent) => void;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface AppTranslate {
      'key': string;
      'params': {};
    }
  }

  interface HTMLAppTranslateElement extends StencilComponents.AppTranslate, HTMLStencilElement {}

  var HTMLAppTranslateElement: {
    prototype: HTMLAppTranslateElement;
    new (): HTMLAppTranslateElement;
  };
  interface HTMLElementTagNameMap {
    'app-translate': HTMLAppTranslateElement;
  }
  interface ElementTagNameMap {
    'app-translate': HTMLAppTranslateElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-translate': JSXElements.AppTranslateAttributes;
    }
  }
  namespace JSXElements {
    export interface AppTranslateAttributes extends HTMLAttributes {
      'key'?: string;
      'params'?: {};
    }
  }
}


declare global {

  namespace StencilComponents {
    interface ContentGraphicLg {
      'imgUrl': string;
      'preLoadImg': boolean;
      'reverse': boolean;
    }
  }

  interface HTMLContentGraphicLgElement extends StencilComponents.ContentGraphicLg, HTMLStencilElement {}

  var HTMLContentGraphicLgElement: {
    prototype: HTMLContentGraphicLgElement;
    new (): HTMLContentGraphicLgElement;
  };
  interface HTMLElementTagNameMap {
    'content-graphic-lg': HTMLContentGraphicLgElement;
  }
  interface ElementTagNameMap {
    'content-graphic-lg': HTMLContentGraphicLgElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'content-graphic-lg': JSXElements.ContentGraphicLgAttributes;
    }
  }
  namespace JSXElements {
    export interface ContentGraphicLgAttributes extends HTMLAttributes {
      'imgUrl'?: string;
      'preLoadImg'?: boolean;
      'reverse'?: boolean;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface ContentGraphic {
      'imgUrl': string;
      'reverse': boolean;
    }
  }

  interface HTMLContentGraphicElement extends StencilComponents.ContentGraphic, HTMLStencilElement {}

  var HTMLContentGraphicElement: {
    prototype: HTMLContentGraphicElement;
    new (): HTMLContentGraphicElement;
  };
  interface HTMLElementTagNameMap {
    'content-graphic': HTMLContentGraphicElement;
  }
  interface ElementTagNameMap {
    'content-graphic': HTMLContentGraphicElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'content-graphic': JSXElements.ContentGraphicAttributes;
    }
  }
  namespace JSXElements {
    export interface ContentGraphicAttributes extends HTMLAttributes {
      'imgUrl'?: string;
      'reverse'?: boolean;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface App404 {

    }
  }

  interface HTMLApp404Element extends StencilComponents.App404, HTMLStencilElement {}

  var HTMLApp404Element: {
    prototype: HTMLApp404Element;
    new (): HTMLApp404Element;
  };
  interface HTMLElementTagNameMap {
    'app-404': HTMLApp404Element;
  }
  interface ElementTagNameMap {
    'app-404': HTMLApp404Element;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-404': JSXElements.App404Attributes;
    }
  }
  namespace JSXElements {
    export interface App404Attributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface AppAbout {

    }
  }

  interface HTMLAppAboutElement extends StencilComponents.AppAbout, HTMLStencilElement {}

  var HTMLAppAboutElement: {
    prototype: HTMLAppAboutElement;
    new (): HTMLAppAboutElement;
  };
  interface HTMLElementTagNameMap {
    'app-about': HTMLAppAboutElement;
  }
  interface ElementTagNameMap {
    'app-about': HTMLAppAboutElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-about': JSXElements.AppAboutAttributes;
    }
  }
  namespace JSXElements {
    export interface AppAboutAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface AppContact {
      'errorIconStyles': any;
    }
  }

  interface HTMLAppContactElement extends StencilComponents.AppContact, HTMLStencilElement {}

  var HTMLAppContactElement: {
    prototype: HTMLAppContactElement;
    new (): HTMLAppContactElement;
  };
  interface HTMLElementTagNameMap {
    'app-contact': HTMLAppContactElement;
  }
  interface ElementTagNameMap {
    'app-contact': HTMLAppContactElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-contact': JSXElements.AppContactAttributes;
    }
  }
  namespace JSXElements {
    export interface AppContactAttributes extends HTMLAttributes {
      'errorIconStyles'?: any;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface AppHome {
      'history': RouterHistory;
    }
  }

  interface HTMLAppHomeElement extends StencilComponents.AppHome, HTMLStencilElement {}

  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };
  interface HTMLElementTagNameMap {
    'app-home': HTMLAppHomeElement;
  }
  interface ElementTagNameMap {
    'app-home': HTMLAppHomeElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-home': JSXElements.AppHomeAttributes;
    }
  }
  namespace JSXElements {
    export interface AppHomeAttributes extends HTMLAttributes {
      'history'?: RouterHistory;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface AppOpportunities {
      'errorIconStyles': any;
    }
  }

  interface HTMLAppOpportunitiesElement extends StencilComponents.AppOpportunities, HTMLStencilElement {}

  var HTMLAppOpportunitiesElement: {
    prototype: HTMLAppOpportunitiesElement;
    new (): HTMLAppOpportunitiesElement;
  };
  interface HTMLElementTagNameMap {
    'app-opportunities': HTMLAppOpportunitiesElement;
  }
  interface ElementTagNameMap {
    'app-opportunities': HTMLAppOpportunitiesElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-opportunities': JSXElements.AppOpportunitiesAttributes;
    }
  }
  namespace JSXElements {
    export interface AppOpportunitiesAttributes extends HTMLAttributes {
      'errorIconStyles'?: any;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface AppServices {

    }
  }

  interface HTMLAppServicesElement extends StencilComponents.AppServices, HTMLStencilElement {}

  var HTMLAppServicesElement: {
    prototype: HTMLAppServicesElement;
    new (): HTMLAppServicesElement;
  };
  interface HTMLElementTagNameMap {
    'app-services': HTMLAppServicesElement;
  }
  interface ElementTagNameMap {
    'app-services': HTMLAppServicesElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-services': JSXElements.AppServicesAttributes;
    }
  }
  namespace JSXElements {
    export interface AppServicesAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface OpenForgeApp {

    }
  }

  interface HTMLOpenForgeAppElement extends StencilComponents.OpenForgeApp, HTMLStencilElement {}

  var HTMLOpenForgeAppElement: {
    prototype: HTMLOpenForgeAppElement;
    new (): HTMLOpenForgeAppElement;
  };
  interface HTMLElementTagNameMap {
    'open-forge-app': HTMLOpenForgeAppElement;
  }
  interface ElementTagNameMap {
    'open-forge-app': HTMLOpenForgeAppElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'open-forge-app': JSXElements.OpenForgeAppAttributes;
    }
  }
  namespace JSXElements {
    export interface OpenForgeAppAttributes extends HTMLAttributes {

    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
