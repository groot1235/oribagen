import {
  task,
  wait
} from "../chunk-2TOT4OS4.mjs";
import "../chunk-75KLGNOR.mjs";
import {
  logger
} from "../chunk-HK2USFMZ.mjs";
import "../chunk-DHADIA3R.mjs";
import "../chunk-USHNXJ63.mjs";
import "../chunk-QXVUUOX6.mjs";
import {
  __name,
  init_esm
} from "../chunk-244PAGAH.mjs";

// trigger/example.ts
init_esm();
var helloWorldTask = task({
  id: "hello-world",
  // Set an optional maxDuration to prevent tasks from running indefinitely
  maxDuration: 300,
  // Stop executing after 300 secs (5 mins) of compute
  run: /* @__PURE__ */ __name(async (payload, { ctx }) => {
    logger.log("Hello, world!", { payload, ctx });
    await wait.for({ seconds: 5 });
    return {
      message: "Task finished"
    };
  }, "run")
});
export {
  helloWorldTask
};
//# sourceMappingURL=example.mjs.map
