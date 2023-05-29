import { NewItemFormContainer, NewItemInput, NewItemButton } from "./styles";
import { useState } from "react";
import { useFocus } from "./useFocus";

type NewItemFormProps = {
  onAdd(text: string): void;
};

export const NewItemForm = ({ onAdd }: NewItemFormProps) => {
  const [text, setText] = useState("");
  const inputRef = useFocus();
  return (
    <NewItemFormContainer>
      <NewItemInput
        ref={inputRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></NewItemInput>
      <NewItemButton onClick={() => onAdd(text)}>Create Card</NewItemButton>
    </NewItemFormContainer>
  );
};
