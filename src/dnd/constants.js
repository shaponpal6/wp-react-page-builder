import shortid from "shortid";

export const SIDEBAR_ITEM = "sidebarItem";
export const ROW = "row";
export const Text = "text";
export const URL = "url";
export const MEDIA = "media";
export const COLUMN = "column";
export const COMPONENT = "component";

export const COMPONENTS_TYPE = {
  text: 'text',
  url: 'url',
  yt_url: 'yt_url',
  video_url: 'video_url',
  map_url: 'map_url',
  media: 'media',
}

export const SIDEBAR_ITEMS = [
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      name: 'Text Block',
      content: "Some input",
      icon: 'dashicons dashicons-editor-paste-text',
      items: [
        {
          id: shortid.generate(),
          key: 'text',
          title: 'Text',
          type: COMPONENTS_TYPE.text,
        }
      ],
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      name: 'Single Image',
      content: "Some name",
      icon: 'dashicons dashicons-format-image',
      items: [
        {
          id: shortid.generate(),
          key: 'alt',
          title: 'Text',
          type: COMPONENTS_TYPE.text,
        },
        {
          id: shortid.generate(),
          key: 'images',
          title: 'Upload image',
          type: COMPONENTS_TYPE.media,
        }
      ],
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      name: 'Image Gallery',
      content: "Some email",
      icon: 'dashicons dashicons-images-alt',
      items: [
        {
          id: shortid.generate(),
          key: 'text',
          title: 'Image Gallery Title',
          type: COMPONENTS_TYPE.text,
        },
        {
          id: shortid.generate(),
          key: 'images',
          title: 'Upload images',
          type: COMPONENTS_TYPE.media,
        }
      ],
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      name: 'Image Slider',
      content: "Some phone",
      icon: 'dashicons dashicons-slides',
      items: [
        {
          id: shortid.generate(),
          key: 'text',
          title: 'Image Slider Title',
          type: COMPONENTS_TYPE.text,
        },
        {
          id: shortid.generate(),
          key: 'images',
          title: 'Upload images',
          type: COMPONENTS_TYPE.media,
        }
      ],
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      name: 'Seperator',
      content: "Some image",
      icon: 'dashicons dashicons-minus',
      items: [
        {
          id: shortid.generate(),
          key: 'seperator',
          title: 'Seperator Title',
          type: COMPONENTS_TYPE.text,
        }
      ],
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      name: 'Button',
      content: "Some image",
      icon: 'dashicons dashicons-button',
      items: [
        {
          id: shortid.generate(),
          key: 'text',
          title: 'Button Title',
          type: COMPONENTS_TYPE.text,
        },
        {
          id: shortid.generate(),
          key: 'url',
          title: 'Button URL',
          type: COMPONENTS_TYPE.url,
        },
        {
          id: shortid.generate(),
          key: 'cta',
          title: 'Button CTA',
          type: COMPONENTS_TYPE.text,
        }
      ],
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      name: 'Tab',
      content: "Some image",
      icon: 'dashicons dashicons-table-row-after',
      items: [
        {
          id: shortid.generate(),
          key: 'text',
          title: 'Title',
          type: COMPONENTS_TYPE.text,
        }
      ],
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      name: 'Testimonial',
      content: "Some image",
      icon: 'dashicons dashicons-testimonial',
      items: [
        {
          id: shortid.generate(),
          key: 'text',
          title: 'Title',
          type: COMPONENTS_TYPE.text,
        }
      ],
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      name: 'Video Player',
      content: "Some image",
      icon: 'dashicons dashicons-format-video',
      items: [
        {
          id: shortid.generate(),
          key: 'text',
          title: 'Title',
          type: COMPONENTS_TYPE.text,
        },
        {
          id: shortid.generate(),
          key: 'videos',
          title: 'Upload Video',
          type: COMPONENTS_TYPE.media,
        }
      ],
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      name: 'Youtube Player',
      content: "Some image",
      icon: 'dashicons dashicons-video-alt3',
      items: [
        {
          id: shortid.generate(),
          key: 'text',
          title: 'Title',
          type: COMPONENTS_TYPE.text,
        },
        {
          id: shortid.generate(),
          key: 'ytUrl',
          title: 'Youtube URL',
          type: COMPONENTS_TYPE.yt_url,
        }
      ],
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      name: 'Google Map',
      content: "Some image",
      icon: 'dashicons dashicons-admin-site-alt3',
      items: [
        {
          id: shortid.generate(),
          key: 'text',
          title: 'Map Title',
          type: COMPONENTS_TYPE.text,
        },
        {
          id: shortid.generate(),
          key: 'url',
          title: 'Map URL',
          type: COMPONENTS_TYPE.map_url,
        }
      ],
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      name: 'Single Product',
      content: "Some image",
      icon: 'dashicons dashicons-feedback',
      items: [
        {
          id: shortid.generate(),
          key: 'text',
          title: 'Title',
          type: COMPONENTS_TYPE.text,
        }
      ],
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      name: 'Product Slider',
      content: "Some image",
      icon: 'dashicons dashicons-images-alt2',
      items: [
        {
          id: shortid.generate(),
          key: 'text',
          title: 'Title',
          type: COMPONENTS_TYPE.text,
        }
      ],
    }
  },
  {
    id: shortid.generate(),
    type: SIDEBAR_ITEM,
    component: {
      name: 'Product List',
      content: "Some image",
      icon: 'dashicons dashicons-list-view',
      items: [
        {
          id: shortid.generate(),
          key: 'text',
          title: 'Title',
          type: COMPONENTS_TYPE.text,
        }
      ],
    }
  },
];
