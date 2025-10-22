import type { Schema, Struct } from '@strapi/strapi';

export interface GeneralProjectsText extends Struct.ComponentSchema {
  collectionName: 'components_general_projects_texts';
  info: {
    displayName: 'projectsText';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
  };
}

export interface ProductsColors extends Struct.ComponentSchema {
  collectionName: 'components_products_colors';
  info: {
    displayName: 'colors';
  };
  attributes: {
    hexadecimal: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'#ffffff'>;
    name: Schema.Attribute.String;
    productImages: Schema.Attribute.Media<'images', true>;
  };
}

export interface ProductsRepeatableText extends Struct.ComponentSchema {
  collectionName: 'components_products_repeatable_texts';
  info: {
    displayName: 'repeatableText';
  };
  attributes: {
    option: Schema.Attribute.String;
  };
}

export interface ProductsSelection extends Struct.ComponentSchema {
  collectionName: 'components_products_selections';
  info: {
    displayName: 'selection';
  };
  attributes: {
    name: Schema.Attribute.String;
    options: Schema.Attribute.Component<'products.repeatable-text', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'general.projects-text': GeneralProjectsText;
      'products.colors': ProductsColors;
      'products.repeatable-text': ProductsRepeatableText;
      'products.selection': ProductsSelection;
    }
  }
}
