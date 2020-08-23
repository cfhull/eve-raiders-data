import React, { useState, useEffect } from "react";
import { useCombobox } from "downshift";
import BaseInput from "../BaseInput";
import classNames from "classnames";
import styles from "./ComboBox.module.scss";
import { MdExpandMore } from "react-icons/md";

const ComboBox = ({
  className,
  label,
  items,
  name,
  placeholder,
  value,
  onChange,
}) => {
  const [inputItems, setInputItems] = useState(items);

  const {
    isOpen,
    selectedItem,
    setInputValue,
    closeMenu,
    getMenuProps,
    getInputProps,
    getToggleButtonProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    items: inputItems,
    selectedItem: value,
    onSelectedItemChange: ({ selectedItem }) => {
      onChange(selectedItem);
    },
    onInputValueChange: ({ inputValue }) => {
      setInputItems(
        items.filter((item) =>
          item.toLowerCase().startsWith(inputValue.toLowerCase())
        )
      );
    },
  });

  useEffect(() => {
    setInputItems(items);
  }, [items]);

  return (
    <div className={className}>
      <BaseInput label={label} name={name}>
        {(ref) => (
          <div className={styles.combobox} {...getComboboxProps()}>
            <input
              className={styles.input}
              spellcheck="false"
              {...getInputProps({
                name,
                placeholder,
                ref,
              })}
            />
            <div
              className={styles.dropdownIcon}
              {...getToggleButtonProps({
                onClick: () => setInputItems(items),
              })}
            >
              <MdExpandMore size={16} />
            </div>
          </div>
        )}
      </BaseInput>

      <ul
        {...getMenuProps()}
        className={classNames(styles.menu, { [styles.open]: isOpen })}
      >
        {isOpen &&
          inputItems.map((item, index) => (
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

export default ComboBox;
