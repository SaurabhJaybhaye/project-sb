import type { ReactNode } from 'react';

export type AccordionVariant = 'default' | 'contained' | 'outlined' | 'ghost' | 'bordered';
export type AccordionSize = 'sm' | 'md' | 'lg';

export interface AccordionProps {
  /**
   * Children should be AccordionItem components
   */
  children: ReactNode;
  /**
   * The visual variant of the accordion
   * @default 'default'
   */
  variant?: AccordionVariant;
  /**
   * The size of the accordion
   * @default 'md'
   */
  size?: AccordionSize;
  /**
   * If true, multiple items can be open at the same time
   * @default false
   */
  allowMultiple?: boolean;
  /**
   * If true, all items are disabled
   * @default false
   */
  disabled?: boolean;
  /**
   * Optional class name for the container
   */
  className?: string;
  /**
   * Default open item indexes
   */
  defaultIndex?: number | number[];
  /**
   * Primary color for the accordion (icons, active states)
   */
  accentColor?: string;
  /**
   * Custom color for the header text
   */
  headerTextColor?: string;
  /**
   * Custom background color for the header
   */
  headerBgColor?: string;
  /**
   * Custom color for the body text
   */
  bodyTextColor?: string;
  /**
   * Custom background color for the body
   */
  bodyBgColor?: string;
}

export interface AccordionItemProps {
  /**
   * The title of the accordion item
   */
  title: ReactNode;
  /**
   * The content of the accordion item
   */
  children: ReactNode;
  /**
   * If true, the item is open by default
   * @default false
   */
  defaultOpen?: boolean;
  /**
   * If true, the item is disabled
   * @default false
   */
  disabled?: boolean;
  /**
   * Optional class name for the item
   */
  className?: string;
  /**
   * Custom icon for the expand/collapse indicator
   */
  expandIcon?: ReactNode;
  /**
   * Custom icon for the expanded state
   */
  collapseIcon?: ReactNode;
  /**
   * ID for the item
   */
  id?: string;
  /**
   * Callback when the item is toggled
   */
  onToggle?: (isOpen: boolean) => void;
  /**
   * Custom accent color for this specific item
   */
  accentColor?: string;
  /**
   * Custom header text color for this specific item
   */
  headerTextColor?: string;
  /**
   * Custom header background color for this specific item
   */
  headerBgColor?: string;
  /**
   * Custom body text color for this specific item
   */
  bodyTextColor?: string;
  /**
   * Custom body background color for this specific item
   */
  bodyBgColor?: string;
  /**
   * Internal prop to track open state
   * @internal
   */
  isOpen?: boolean;
  /**
   * Internal prop for variant
   * @internal
   */
  variant?: AccordionVariant;
  /**
   * Internal prop for size
   * @internal
   */
  size?: AccordionSize;
}
