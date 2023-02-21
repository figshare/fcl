import "core-js/stable";
import "regenerator-runtime/runtime";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";


Enzyme.configure({ adapter: new Adapter() });


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
