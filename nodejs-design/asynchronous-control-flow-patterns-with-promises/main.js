// function delay(milliseconds) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(new Date());
//     }, milliseconds);
//   });
// }
//
// console.log(`Delaying...${new Date().getSeconds()}s`);
//
// async function playingWithDelays() {
//   delay(1000).then((newDate) => {
//     console.log(`Done ${newDate.getSeconds()}s`);
//   });
//   console.log("Delaying...", new Date());
//   const dateAfterOneSecond = await delay(1000);
//   console.log(dateAfterOneSecond);
//   const dateAfterThreeSeconds = await delay(3000);
//   console.log(dateAfterThreeSeconds);
//   return "done";
// }
//
// playingWithDelays().then((result) => console.log(`after 4 seconds: ${result}`));

function delayError(milliseconds) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error(`Error: ${milliseconds}ms`));
    }, milliseconds);
  });
}

async function playingWithErrors(throwSyncError) {
  try {
    if (throwSyncError) {
      throw new Error("This is a synchronous error");
    }
    await delayError(1000);
  } catch (err) {
    console.error(`we have an error: ${err.message}`);
  } finally {
    console.log("Done");
  }
}

playingWithErrors(false);

async function errorNotCaught() {
  try {
    return await delayError(1000);
  } catch (err) {
    console.error("Error caught by the async function: " + err.message);
  }
}

errorNotCaught().catch((err) =>
  console.error("Error caught by the caller: " + err.message)
);
