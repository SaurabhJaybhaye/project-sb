import React, { useState, useCallback, useMemo } from 'react';
import classNames from 'classnames';
import { HiChevronDown } from 'react-icons/hi';
import styles from './Accordion.module.scss';
import type { AccordionProps, AccordionItemProps } from './Accordion.types';

export const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  children,
  isOpen = false,
  onToggle,
  disabled = false,
  className,
  expandIcon,
  collapseIcon,
  id,
  size,
  accentColor,
  headerTextColor,
  headerBgColor,
  bodyTextColor,
  bodyBgColor,
}) => {
  const itemClass = classNames(
    styles['sb-accordion-item'],
    {
      [styles['sb-accordion-item--open']]: isOpen,
      [styles['sb-accordion-item--disabled']]: disabled,
      [styles[`sb-accordion-item--${size}`]]: size,
    },
    className
  );

  const iconClass = classNames(styles['sb-accordion-item__icon'], {
    [styles['sb-accordion-item__icon--rotated']]: isOpen && !collapseIcon,
  });

  const handleToggle = () => {
    if (!disabled && onToggle) {
      onToggle(!isOpen);
    }
  };

  const headerStyle = {
    backgroundColor: headerBgColor,
    color: headerTextColor,
  };

  const contentStyle = {
    backgroundColor: bodyBgColor,
    color: bodyTextColor,
  };

  const iconStyle = {
    color: accentColor,
  };

  return (
    <div className={itemClass} id={id}>
      <button
        type="button"
        className={styles['sb-accordion-item__header']}
        onClick={handleToggle}
        disabled={disabled}
        aria-expanded={isOpen}
        style={headerStyle}
      >
        <span className={styles['sb-accordion-item__title']} style={headerTextColor ? { color: headerTextColor } : {}}>{title}</span>
        <span className={iconClass} style={iconStyle}>
          {isOpen ? (collapseIcon || expandIcon || <HiChevronDown />) : (expandIcon || <HiChevronDown />)}
        </span>
      </button>
      <div 
        className={classNames(styles['sb-accordion-item__content-wrapper'], {
          [styles['sb-accordion-item__content-wrapper--open']]: isOpen
        })}
      >
        <div className={styles['sb-accordion-item__content']}>
          <div className={styles['sb-accordion-item__inner-content']} style={contentStyle}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Accordion: React.FC<AccordionProps> = ({
  children,
  variant = 'default',
  size = 'md',
  allowMultiple = false,
  disabled = false,
  className,
  defaultIndex,
  accentColor,
  headerTextColor,
  headerBgColor,
  bodyTextColor,
  bodyBgColor,
}) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>(() => {
    if (defaultIndex === undefined) return [];
    return Array.isArray(defaultIndex) ? defaultIndex : [defaultIndex];
  });

  const handleToggle = useCallback((index: number) => {
    if (disabled) return;

    setOpenIndexes((prev) => {
      const isOpen = prev.includes(index);
      if (allowMultiple) {
        return isOpen ? prev.filter((i) => i !== index) : [...prev, index];
      } else {
        return isOpen ? [] : [index];
      }
    });
  }, [allowMultiple, disabled]);

  const accordionClass = classNames(
    styles['sb-accordion'],
    styles[`sb-accordion--${variant}`],
    className
  );

  const items = useMemo(() => {
    return React.Children.map(children, (child, index) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child as React.ReactElement<AccordionItemProps>, {
          isOpen: openIndexes.includes(index),
          onToggle: () => handleToggle(index),
          variant,
          size,
          disabled: disabled || (child.props as AccordionItemProps).disabled,
          accentColor: (child.props as AccordionItemProps).accentColor || accentColor,
          headerTextColor: (child.props as AccordionItemProps).headerTextColor || headerTextColor,
          headerBgColor: (child.props as AccordionItemProps).headerBgColor || headerBgColor,
          bodyTextColor: (child.props as AccordionItemProps).bodyTextColor || bodyTextColor,
          bodyBgColor: (child.props as AccordionItemProps).bodyBgColor || bodyBgColor,
        });
      }
      return child;
    });
  }, [children, openIndexes, handleToggle, variant, size, disabled]);

  return <div className={accordionClass}>{items}</div>;
};
