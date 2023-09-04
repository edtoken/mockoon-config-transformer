import { JsonTransformerValue } from './json/types.js';

export const createDoc = (children: any[]): JsonTransformerValue => {
  return {
    key: 'documentation',
    format: 'md',
    value: {
      type: 'root',
      children
    }
  };
};

export const head = (title: string, depth?: number) => [
  {
    type: 'heading',
    depth: depth || 1,
    children: [{ type: 'text', value: title }]
  }
];

export const lineBreak = (count?: number) =>
  new Array(count || 1).fill({ type: 'text', value: '\r\n' });

export type docSectionItem = {
  title: string;
  details?: string;
  links?: { path: string; label?: string }[];
  code?: any;
  sections?: docSectionItem[];
};

const sectionDetails = (section: docSectionItem) => {
  if (!section.details) {
    return [];
  }
  return [
    ...lineBreak(1),
    {
      type: 'blockquote',
      children: [
        {
          type: 'paragraph',
          children: [{ type: 'html', value: section.details }]
        }
      ]
    }
  ];
};

const sectionCode = (section: docSectionItem, headDepth: number) => {
  if (!section.code) {
    return [];
  }
  return [
    ...lineBreak(2),
    ...head('Rules', headDepth + 1),
    ...lineBreak(1),
    {
      type: 'code',
      value: section.code
    }
  ];
};

const sectionLinks = (section: docSectionItem) => {
  if (!section.links || !section.links.length) {
    return [];
  }
  return [
    ...section?.links.reduce(
      (memo, params) => [
        ...memo,
        ...lineBreak(1),
        {
          type: 'link',
          url: params.path,
          title: params?.label ?? 'See',
          children: [{ type: 'text', value: params?.label ?? 'See' }]
        }
      ],
      [...lineBreak(1)]
    )
  ];
};

export const createSections = (
  sections: docSectionItem[],
  headDepth?: number
): [] => {
  const resolvedHeadDepth = headDepth || 2;
  const lineBreaks = resolvedHeadDepth === 2 ? 3 : 2;

  // @ts-expect-error todo
  return sections.reduce(
    // @ts-expect-error todo
    (memo, section) => [
      ...memo,
      ...lineBreak(lineBreaks),
      {
        type: 'heading',
        depth: resolvedHeadDepth,
        children: [{ type: 'text', value: `${section.title}` }]
      },
      ...sectionDetails(section),
      ...sectionCode(section, resolvedHeadDepth),
      ...sectionLinks(section),
      ...(section.sections
        ? [
            ...createSections(section.sections, resolvedHeadDepth + 1),
            ...lineBreak(1)
          ]
        : [])
    ],
    []
  );
};

export const relatedItems = (relations: { label: string; link: string }[]) => {
  return [
    {
      type: 'heading',
      depth: 2,
      children: [{ type: 'text', value: 'Relations' }]
    },
    ...lineBreak(2),
    {
      type: 'list',
      ordered: false,
      spread: false,
      children: relations.map(({ label, link }) => ({
        type: 'listItem',
        spread: false,
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'link',
                url: link,
                title: label,
                children: [{ type: 'text', value: label }]
              }
            ]
          }
        ]
      }))
    }
  ];
};
