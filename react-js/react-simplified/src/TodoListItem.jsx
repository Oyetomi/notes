import React from "react";
// type TodoListItemProps = {
//   children: React.ReactNode;
//   isComplete: boolean;
// };

// export default function TodoListItem({
//   children,
//   isComplete,
// }: TodoListItemProps) {
//   return (
//     <div>
//       <label>
//         <input type="checkbox" defaultChecked={!isComplete} />
//         {children}
//       </label>
//     </div>
//   );
// }
export default class TodoListItemClass extends React.Component {
  render() {
    return (
      <div>
        <label>
          <input type="checkbox" defaultChecked={!this.props.isComplete} />
          {this.props.children}
        </label>
      </div>
    );
  }
}
