import React from "react";
import { useSelect } from "downshift";
import BaseInput from "../BaseInput";
import classNames from "classnames";
import { MdExpandMore } from "react-icons/md";
import styles from "./Select.module.scss";

const Select = ({
  className,
  label,
  items,
  name,
  placeholder,
  value,
  onChange,
}) => {
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
  } = useSelect({
    items,
    selectedItem: value,
    onSelectedItemChange: ({ selectedItem }) => {
      onChange(selectedItem);
    },
  });

  return (
    <div className={className}>
      <BaseInput
        className={styles.inputWrapper}
        label={label}
        name={name}
        {...getToggleButtonProps()}
      >
        {(ref) => (
          <button ref={ref} className={styles.input} type="button">
            {selectedItem || placeholder}
            <MdExpandMore className={styles.dropdownIcon} size={16} />
          </button>
        )}
      </BaseInput>
      <ul
        {...getMenuProps()}
        className={classNames(styles.menu, { [styles.open]: isOpen })}
      >
        {isOpen &&
          items.map((item, index) => (
            <li
              className={classNames(styles.item, {
                [styles.highlighted]: highlightedIndex === index,
              })}
              key={`${item}${index}`}
              {...getItemProps({
                item,
                index,
              })}
            >
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Select;
