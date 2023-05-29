import { NewItemFormContainer, NewItemInput, NewItemButton } from "./styles";
import { useState } from "react";

type NewItemFormProps = {
  onAdd(text: string): void;
};

export const NewItemForm = ({ onAdd }: NewItemFormProps) => {
  const [text, setText] = useState("");
  return (
    <NewItemFormContainer>
      <NewItemInput
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></NewItemInput>
      <NewItemButton onClick={() => onAdd(text)}>Create Card</NewItemButton>
    </NewItemFormContainer>
  );
};
