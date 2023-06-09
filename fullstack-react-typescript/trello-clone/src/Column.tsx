import { ColumnContainer, ColumnTitle } from "./styles";
import { Card } from "./Card";
import { AddNewItem } from "./AddNewItem";

type ColumnProps = {
  text: string;
};
export const Column = ({ text }: ColumnProps) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      <Card text="Generate app scaffold"></Card>
      <Card text="Learn Typescript"></Card>
      <Card text="Begin to use static type"></Card>
      <AddNewItem
        toggleButtonText="+ Add another card"
        onAdd={() => console.log("item created")}
        dark
      ></AddNewItem>
    </ColumnContainer>
  );
};
