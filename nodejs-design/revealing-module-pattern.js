const myModule = (() => {
  const privateFoo = () => {};
  const privatebar = [];

  return {
    publicFoo: () => {
      console.log("from public foo");
    },
    publicBar: () => {
      console.log("from public bar");
    },
  };
})();

console.log(myModule);
const { publicFoo, publicBar } = myModule;
publicFoo();
