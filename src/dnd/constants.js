import shortid from "shortid";

export const SIDEBAR_ITEM = "sidebarItem";
export const ROW = "row";
export const COLUMN = "column";
export const COMPONENT = "component";

export const SIDEBAR_ITEMS = [
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      name: 'Text Block',
      content: "Some input",
      icon: 'dashicons dashicons-editor-paste-text',
      type: "input",
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      name: 'Single Image',
      content: "Some name",
      icon: 'dashicons dashicons-format-image',
      type: "name",
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      name: 'Image Gallery',
      content: "Some email",
      icon: 'dashicons dashicons-images-alt',
      type: "email",
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      name: 'Image Slider',
      content: "Some phone",
      icon: 'dashicons dashicons-slides',
      type: "phone",
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      name: 'Seperator',
      content: "Some image",
      icon: 'dashicons dashicons-minus',
      type: "image",
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      name: 'Button',
      content: "Some image",
      icon: 'dashicons dashicons-button',
      type: "image",
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      name: 'Tab',
      content: "Some image",
      icon: 'dashicons dashicons-table-row-after',
      type: "image",
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      name: 'Testimonial',
      content: "Some image",
      icon: 'dashicons dashicons-testimonial',
      type: "image",
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      name: 'Video Player',
      content: "Some image",
      icon: 'dashicons dashicons-format-video',
      type: "image",
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      name: 'Youtube Player',
      content: "Some image",
      icon: 'dashicons dashicons-video-alt3',
      type: "image",
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      name: 'Google Map',
      content: "Some image",
      icon: 'dashicons dashicons-admin-site-alt3',
      type: "image",
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      name: 'Single Product',
      content: "Some image",
      icon: 'dashicons dashicons-feedback',
      type: "image",
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      name: 'Product Slider',
      content: "Some image",
      icon: 'dashicons dashicons-images-alt2',
      type: "image",
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      name: 'Product List',
      content: "Some image",
      icon: 'dashicons dashicons-list-view',
      type: "image",
    }
  },
];
