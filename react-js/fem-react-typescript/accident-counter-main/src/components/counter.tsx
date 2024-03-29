// import React, { Dispatch } from 'react';
//
// // const reducer = (count: number, newValue: number): number => {
// //   return newValue;
// // };
// //
// // const action = {
// //   type: 'increment',
// //   payload: {},
// // };
// //s
// // type ReducerState = ReturnType<typeof reducer>;
//
// type initialState = {
//   count: number;
//   draftCount: string | number;
// };
//
// const initialState: InitialState = {
//   count: 0,
//   draftCount: 0,
// };
//
// const reducer = (state = initialState, action: number) => {
//   if (action.type === 'increment') {
//     const newCount = count + 1;
//     return { count: newCount, draftCount: newCount };
//   }
//
//   if (action.type === 'decrement') {
//     const newCount = count - 1;
//     return { count: newCount, draftCount: newCount };
//   }
//
//   if (action.type === 'reset') {
//     return { count: 0, draftCount: 0 };
//   }
//
//   if (action.type === 'updateDraftCount') {
//     console.log('updateDraftCount');
//
//     return { count, draftCount: action.payload };
//   }
//
//   if (action.type === 'updateCountFromDraft') {
//     return { count: Number(draftCount), draftCount };
//   }
//
//   return state;
// };
//
// const Counter = () => {
//   const [count, setCount] = React.useReducer(reducer, initialState);
//   const [draftCount, setDraftCount] = React.useState(0);
//
//   return (
//     <section className="flex w-2/3 flex-col items-center gap-8 border-4 border-primary-500 bg-white p-8 shadow-lg">
//       <h1>Days Since the Last Accident</h1>
//       <p className="text-6xl">{count}</p>
//       <div className="flex gap-2">
//         <button onClick={() => setCount((count) => count - 1)}>
//           ➖ Decrement
//         </button>
//         <button onClick={() => setCount(0)}>🔁 Reset</button>
//         <button onClick={() => setCount((count) => count + 1)}>
//           ➕ Increment
//         </button>
//       </div>
//       <div>
//         <form
//           onSubmit={(e) => {
//             e.preventDefault();
//             setCount(draftCount);
//           }}
//         >
//           <input
//             type="number"
//             value={draftCount}
//             onChange={(e) => setDraftCount(e.target.valueAsNumber)}
//           />
//           <button type="submit">Update Counter</button>
//         </form>
//       </div>
//     </section>
//   );
// };
//
// export default Counter;
