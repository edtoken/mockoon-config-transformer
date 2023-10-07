import { Blockquote, Heading, Link, Node, Nodes } from 'mdast';
import { DOCUMENTATION_FILE_NAME } from '../../config.js';

type supportedHeadingDepth = 1 | 2 | 3 | 4 | 5 | 6;

export const createDoc = (
  children: any[]
): { key: string; format: 'md'; value: Nodes } => {
  return {
    key: DOCUMENTATION_FILE_NAME,
    format: 'md',
    value: {
      type: 'root',
      children
    }
  };
};

export const heading = (
  title: string,
  depth?: supportedHeadingDepth
): Heading[] => [
  {
    type: 'heading',
    depth: depth || 1,
    children: [{ type: 'text', value: title }]
  }
];

export const lineBreak = (count?: number): Text[] =>
  new Array(count || 1).fill({ type: 'text', value: '\r\n' });

export type docSectionItem = {
  title: string;
  details?: string;
  links?: { path: string; label?: string }[];
  code?: any;
  sections?: docSectionItem[];
};

const sectionDetails = (section: docSectionItem): Array<Text | Blockquote> => {
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

const sectionCode = (
  section: docSectionItem,
  headDepth: supportedHeadingDepth
) => {
  if (!section.code) {
    return [];
  }
  return [
    ...lineBreak(2),
    ...heading('Rules', (headDepth + 1) as supportedHeadingDepth),
    ...lineBreak(1),
    {
      type: 'code',
      value: section.code
    }
  ];
};

const sectionLinks = (section: docSectionItem): Array<Text | Link> => {
  if (!section.links || !section.links.length) {
    return [];
  }
  return [
    // @ts-expect-error todo fix
    ...section?.links.reduce(
      // @ts-expect-error todo fix
      (memo, params) => {
        return [
          ...memo,
          ...lineBreak(1),
          {
            type: 'link',
            url: params.path,
            title: params?.label ?? 'See',
            children: [{ type: 'text', value: params?.label ?? 'See' }]
          }
        ];
      },
      [...lineBreak(1)]
    )
  ];
};

export const createSections = (
  sections: docSectionItem[],
  headDepth?: supportedHeadingDepth
): Array<Node> => {
  const resolvedHeadDepth: supportedHeadingDepth = headDepth || 2;
  const lineBreaks = resolvedHeadDepth === 2 ? 3 : 2;

  // @ts-expect-error todo fix
  return sections.reduce(
    // @ts-expect-error todo fix
    (memo, section) => {
      return [
        ...memo,
        ...lineBreak(lineBreaks),
        ...heading(section.title, resolvedHeadDepth),
        ...sectionDetails(section),
        ...sectionCode(section, resolvedHeadDepth),
        ...sectionLinks(section),
        ...(section.sections
          ? [
              // @ts-expect-error todo fix
              ...createSections(section.sections, resolvedHeadDepth + 1),
              ...lineBreak(1)
            ]
          : [])
      ];
    },
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
