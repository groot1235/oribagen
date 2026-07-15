import {
  task,
  wait
} from "../chunk-HM7AC2ZM.mjs";
import "../chunk-HP3UZ6CG.mjs";
import {
  logger
} from "../chunk-ULFOQYJ2.mjs";
import "../chunk-USHNXJ63.mjs";
import "../chunk-QXVUUOX6.mjs";
import "../chunk-DHADIA3R.mjs";
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
