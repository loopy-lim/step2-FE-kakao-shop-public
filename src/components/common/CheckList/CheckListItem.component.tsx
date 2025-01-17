import { ChangeEvent, useId } from "react";
import "@components/common/CheckList/check-list-item.css";
import Button from "@components/common/Button.component";

export interface CheckListItemProps {
  id: number;
  label: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onItemRemove: (id: number) => void;
}

const CheckListItem = ({
  id,
  label,
  checked,
  onChange,
  onItemRemove,
}: CheckListItemProps) => {
  const uid = useId();

  const onPreventDefaultChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    onChange(e);
  };

  return (
    <div className="check-list-item">
      <input
        id={uid}
        type="checkbox"
        checked={checked}
        onChange={onPreventDefaultChange}
        value={id}
      />
      <label htmlFor={uid}>{label}</label>
      <Button color="none" onClick={() => onItemRemove(id)}>
        Remove
      </Button>
    </div>
  );
};

export default CheckListItem;
