import {
  task,
  wait
} from "../chunk-CD2LPUP7.mjs";
import "../chunk-5O5ZQAXV.mjs";
import {
  logger
} from "../chunk-XQYFTXHW.mjs";
import "../chunk-QH3PZWXN.mjs";
import "../chunk-DHADIA3R.mjs";
import "../chunk-USHNXJ63.mjs";
import "../chunk-D6YRYDHC.mjs";
import "../chunk-XX4TROOQ.mjs";
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
