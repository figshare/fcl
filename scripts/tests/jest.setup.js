import "core-js/stable";
import "regenerator-runtime/runtime";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import nodeCrypto from "crypto";


Enzyme.configure({ adapter: new Adapter() });

window.crypto = {
  getRandomValues(buffer) {
    return nodeCrypto.randomFillSync(buffer);
  },
};

jest.mock(
  "@popperjs/core",
  () => {
    class Popper {
      constructor() {
        return {
          destroy: () => undefined,
          scheduleUpdate: () => undefined,
          disableEventListeners: () => undefined,
          enableEventListeners: () => undefined,
        };
      }
    }

    return { createPopper: () => new Popper() };
  }
);
