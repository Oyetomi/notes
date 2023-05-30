import { NewItemFormContainer, NewItemInput, NewItemButton } from "./styles";
import React, { useState } from "react";
import { useFocus } from "./useFocus";

type NewItemFormProps = {
  onAdd(text: string): void;
};

export const NewItemForm = ({ onAdd }: NewItemFormProps) => {
  const [text, setText] = useState("");
  const inputRef = useFocus();

  const handleAddText = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onAdd(text);
    }
  };
  return (
    <NewItemFormContainer>
      <NewItemInput
        ref={inputRef}
        value={text}
        onKeyPress={handleAddText}
        onChange={(e) => setText(e.target.value)}
      ></NewItemInput>
      <NewItemButton onClick={() => onAdd(text)}>Create Card</NewItemButton>
    </NewItemFormContainer>
  );
};
