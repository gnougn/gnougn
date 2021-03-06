// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
require = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof require === "function" && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof require === "function" && require;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }
      
      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module;

      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module() {
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({131:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
let default_state = {

  app: {
    route: 'null'
  },

  data: {
    time: '',
    firebase: {},
    wordpress: {},
    refs: false,
    sort: 'likes',
    view: 'grid',
    content: false,
    user: {},
    score: {
      current: {
        met: 0,
        area: 0
      },
      leaderboard: []
    }
  },

  animation: {
    duration: 0,
    frame: 1,
    framerate: 24,
    rate: 1000
  },

  events: {
    mouse: {
      click: {
        clientX: 0,
        clientY: 0
      },
      clientX: 0,
      clientY: 0,
      up: true,
      down: false,
      drop: {
        clientX: 0,
        clientY: 0
      },
      drag: {
        clientX: 0,
        clientY: 0
      },
      enter: true,
      leave: false,
      entertimer: 0,
      leavetimer: 0,
      timer: 0,
      automation: {
        increase: true,
        decrease: false
      },
      absolute: 0,
      alpha: 0,
      beta: 0,
      gamma: 0,
      acceleration: {
        x: 0,
        y: 0,
        z: 0
      },
      accelerationIncludingGravity: {
        x: 0,
        y: 0,
        z: 0
      },
      rotationRate: {
        alpha: 0,
        beta: 0,
        gamma: 0
      },
      interval: {
        x: 0,
        y: 0,
        z: 0
      }
    },
    key: {
      keys: [],
      pressed: {
        key_tildy: false,
        key_1: false,
        key_2: false,
        key_3: false,
        key_4: false,
        key_5: false,
        key_6: false,
        key_7: false,
        key_8: false,
        key_9: false,
        key_0: false
      },
      last_key: 0,
      up: true,
      down: false,
      timer: 0,
      automation: {
        increase: true,
        decrease: false
      }
    }
  },

  ux: {
    browser: {
      height: window.outerHeight,
      width: window.outerWidth
    },
    window: {
      height: window.innerHeight,
      width: window.innerWidth
    },
    screen: {
      height: window.screen.height,
      width: window.screen.width,
      orientation: window.screen.orientation
    },
    dimensions: {
      current: 8,
      height: window.innerHeight,
      width: window.innerWidth,
      height8: window.innerHeight / 8,
      width8: window.innerWidth / 8,
      height16: window.innerHeight / 16,
      width16: window.innerWidth / 16,
      height32: window.innerHeight / 32,
      width32: window.innerWidth / 32,
      height64: window.innerHeight / 64,
      width64: window.innerWidth / 64,
      height128: window.innerHeight / 128,
      width128: window.innerWidth / 128,
      height256: window.innerHeight / 256,
      width256: window.innerWidth / 256
    }
  },

  ui: {

    colors: {
      load_light_yellow_0: {
        transform: false,
        opacity: false,
        display: false,
        xaxis: 2,
        yaxis: 4,
        height: 4,
        width: 4
      }
    },

    stage: {

      workspace: {
        transform: false,
        opacity: false,
        display: false,
        xaxis: 2,
        yaxis: 0,
        height: 3,
        width: 4,

        imac: {
          transform: false,
          opacity: false,
          display: false,
          xaxis: 2,
          yaxis: 0,
          height: 3,
          width: 4
        },

        monitor: {
          transform: false,
          opacity: false,
          display: false,
          xaxis: 2,
          yaxis: 0,
          height: 3,
          width: 4
        },

        mic: {
          transform: false,
          opacity: false,
          display: false,
          xaxis: 2,
          yaxis: 0,
          height: 3,
          width: 4
        },

        scarlett: {
          transform: false,
          opacity: false,
          display: false,
          xaxis: 2,
          yaxis: 0,
          height: 3,
          width: 4
        },

        speaker_1: {
          transform: false,
          opacity: false,
          display: false,
          xaxis: 2,
          yaxis: 0,
          height: 3,
          width: 4
        },

        speaker_2: {
          transform: false,
          opacity: false,
          display: false,
          xaxis: 2,
          yaxis: 0,
          height: 3,
          width: 4
        },

        speaker_3: {
          transform: false,
          opacity: false,
          display: false,
          xaxis: 2,
          yaxis: 0,
          height: 3,
          width: 4
        },

        books_1: {
          transform: false,
          opacity: false,
          display: false,
          xaxis: 2,
          yaxis: 0,
          height: 3,
          width: 4
        },

        books_2: {
          transform: false,
          opacity: false,
          display: false,
          xaxis: 2,
          yaxis: 0,
          height: 3,
          width: 4
        },

        desk: {
          transform: false,
          opacity: false,
          display: false,
          xaxis: 2,
          yaxis: 0,
          height: 3,
          width: 4
        },

        chair_1: {
          transform: false,
          opacity: false,
          display: false,
          xaxis: 2,
          yaxis: 0,
          height: 3,
          width: 4
        },

        chair_2: {
          transform: false,
          opacity: false,
          display: false,
          xaxis: 2,
          yaxis: 0,
          height: 3,
          width: 4
        }
      },

      office: {

        transform: false,
        opacity: false,
        display: false,
        xaxis: -1,
        yaxis: -1,
        height: 4,
        width: 4
      },

      shoplight: {
        transform: false,
        opacity: false,
        display: false,
        xaxis: 2,
        yaxis: 0,
        height: 2,
        width: 2
      },

      sky: {

        transform: false,
        opacity: false,
        display: false,
        xaxis: -1,
        yaxis: -1,
        height: 4,
        width: 4
      },
      outside: {

        transform: false,
        opacity: false,
        display: false,
        xaxis: -1,
        yaxis: -1,
        height: 4,
        width: 4
      },
      enneagon: {

        transform: false,
        opacity: false,
        display: false,
        xaxis: -1,
        yaxis: -1,
        height: 4,
        width: 4
      }

    },

    particles: {
      player_1: {

        transform: false,
        opacity: false,
        display: false,
        xaxis: 1,
        yaxis: 0,
        height: 4,
        width: 2,
        body: {

          transform: false,
          opacity: false,
          display: false,
          xaxis: 2,
          yaxis: 4,
          height: 4,
          width: 4
        }
      }
    },
    interaction: {

      player_1: {

        transform: false,
        opacity: false,
        display: false,
        xaxis: 1,
        yaxis: 0,
        height: 4,
        width: 2,
        body: {

          transform: false,
          opacity: false,
          display: false,
          xaxis: 2,
          yaxis: 4,
          height: 4,
          width: 4
        }
      },

      enemy: {
        speed: 1,
        transform: false,
        opacity: false,
        display: false,
        xaxis: 0,
        xaxisascending: true,
        yaxis: 0,
        height: 4,
        width: 2,
        yaxisascending: true,
        actions: {
          jump: false
        }
      },

      helper: {

        transform: false,
        opacity: false,
        display: false,
        xaxis: -1,
        yaxis: -4,
        height: 8,
        width: 4
      },

      easel: {
        display: false,
        transform: false,
        opacity: false,
        pen: [],
        pencil: []
      },

      dice: Math.floor(Math.random() * 6) + 1,

      random: Math.floor(Math.random() * 100) + 1,

      bullets: [{
        xaxis: 0,
        yaxis: 0
      }, {
        xaxis: 0,
        yaxis: 0
      }, {
        xaxis: 0,
        yaxis: 0
      }, {
        xaxis: 0,
        yaxis: 0
      }],

      hands: {
        transform: false,
        opacity: false,
        display: false,
        speed: 1,
        xaxis: 3,
        xaxisascending: true,
        yaxis: 1,
        yaxisascending: true
      },

      track_x: {
        transform: false,
        opacity: false,
        display: false,
        speed: 1,
        xaxis: 3,
        xaxisascending: true,
        yaxis: 1,
        yaxisascending: true
      },

      track_y: {
        transform: false,
        opacity: false,
        display: false,
        speed: 1,
        xaxis: 3,
        xaxisascending: true,
        yaxis: 1,
        yaxisascending: true
      },

      ball: {
        transform: false,
        opacity: false,
        display: false,
        speed: 1,
        xaxis: 3,
        xaxisascending: true,
        yaxis: 1,
        yaxisascending: true
      },

      bounce: {
        transform: false,
        opacity: false,
        display: false,
        speed: 1,
        xaxis: 3,
        xaxisascending: true,
        yaxis: 1,
        yaxisascending: true
      },

      snake: [{
        xaxis: 0,
        yaxis: 0
      }]
    },

    gui: {

      top: {
        transform: false,
        opacity: false,
        display: false,
        xaxis: 2,
        yaxis: 2,
        height: 4,
        width: 4
      },
      top_left: {
        transform: false,
        opacity: false,
        display: false,
        xaxis: 2,
        yaxis: 2,
        height: 4,
        width: 4
      },
      top_right: {
        transform: false,
        opacity: false,
        display: false,
        xaxis: 2,
        yaxis: 2,
        height: 4,
        width: 4
      },
      bottom: {
        transform: false,
        opacity: false,
        display: false,
        xaxis: 2,
        yaxis: 2,
        height: 4,
        width: 4
      },
      bottom_left: {
        transform: false,
        opacity: false,
        display: false,
        xaxis: 2,
        yaxis: 2,
        height: 4,
        width: 4
      },
      bottom_right: {
        transform: false,
        opacity: false,
        display: false,
        xaxis: 2,
        yaxis: 2,
        height: 4,
        width: 4
      },
      left: {
        transform: false,
        opacity: false,
        display: false,
        xaxis: 2,
        yaxis: 2,
        height: 4,
        width: 4
      },
      right: {
        transform: false,
        opacity: false,
        display: false,
        xaxis: 2,
        yaxis: 2,
        height: 4,
        width: 4
      },
      scroll: {
        x: {
          transform: false,
          opacity: false,
          display: false
        },
        y: {
          transform: false,
          opacity: false,
          display: false
        }
      }
    },

    modal: {
      pop: {
        top: {

          transform: true,
          opacity: false,
          display: false
        },
        bottom: {

          transform: true,
          opacity: false,
          display: false
        },
        left: {

          transform: true,
          opacity: false,
          display: false
        },
        right: {

          transform: true,
          opacity: false,
          display: false
        }
      },
      page: {
        top: {

          transform: true,
          opacity: false,
          display: false
        },
        bottom: {

          transform: true,
          opacity: false,
          display: false
        },
        left: {

          transform: true,
          opacity: false,
          display: false
        },
        right: {

          transform: true,
          opacity: false,
          display: false
        }
      },
      fade: {
        top: {

          transform: true,
          opacity: false,
          display: false
        },
        bottom: {

          transform: true,
          opacity: false,
          display: false
        },
        left: {

          transform: true,
          opacity: false,
          display: false
        },
        right: {

          transform: true,
          opacity: false,
          display: false
        }
      },
      gradient: {
        top: {

          transform: true,
          opacity: false,
          display: false
        },
        bottom: {

          transform: true,
          opacity: false,
          display: false
        },
        left: {

          transform: true,
          opacity: false,
          display: false
        },
        right: {

          transform: true,
          opacity: false,
          display: false
        }
      },
      morph: {
        top: {

          transform: true,
          opacity: false,
          display: false
        },
        bottom: {

          transform: true,
          opacity: false,
          display: false
        },
        left: {

          transform: true,
          opacity: false,
          display: false
        },
        right: {

          transform: true,
          opacity: false,
          display: false
        }
      },
      menu: {
        top: {

          transform: true,
          opacity: false,
          display: false
        },
        bottom: {

          transform: true,
          opacity: false,
          display: false
        },
        left: {

          transform: true,
          opacity: false,
          display: false
        },
        right: {

          transform: true,
          opacity: false,
          display: false
        }
      },
      overlay: {
        top: {

          transform: true,
          opacity: false,
          display: false
        },
        bottom: {

          transform: true,
          opacity: false,
          display: false
        },
        left: {

          transform: true,
          opacity: false,
          display: false
        },
        right: {

          transform: true,
          opacity: false,
          display: false
        }
      },
      nav: {
        top: {

          transform: true,
          opacity: false,
          display: false
        },
        bottom: {

          transform: true,
          opacity: false,
          display: false
        },
        left: {

          transform: true,
          opacity: false,
          display: false
        },
        right: {

          transform: true,
          opacity: false,
          display: false
        }
      },
      corner: {
        top: {

          transform: true,
          opacity: false,
          display: false
        },
        bottom: {

          transform: true,
          opacity: false,
          display: false
        },
        left: {

          transform: true,
          opacity: false,
          display: false
        },
        right: {

          transform: true,
          opacity: false,
          display: false
        }
      }

    }

  }

};

let from_Import = () => {
  console.log('from state');
};

from_Import();

exports.default = {
  from_Import,
  default_state
};
},{}],132:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require("../index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let from_Import = () => {
  console.log('from functions');
};

function test(fruit) {
  // extract conditions to array
  const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];

  if (redFruits.includes(fruit)) {
    throw 'red';
  }
}

// rest parameters
function add(...args) {
  let result = 0;

  for (let arg of args) result += arg;

  return result;
}

console.log(add(1)); // returns 1
console.log(add(1, 2)); // returns 3
console.log(add(1, 2, 3, 4, 5)); // returns 15

const arr = ["Joy", "Wangari", "Warugu"];
const newArr = ["joykare", ...arr];
console.log(newArr);

let x = 20;
x = 50;

console.log(x); // SyntaxError: identifier "x" has already been declared.

// A Common Scope Gotcha
// If stamement do not have local sc
if (true) {
  var foo = 5;
};

console.log(foo); // 5

const countVowels = str => Array.from(str).filter(letter => 'aeiou'.includes(letter)).length;

console.log(countVowels('abcdefghijklmnopqrstuvwxyz')); // 5
console.log(countVowels('test')); // 1
console.log(countVowels('ddd')); // 0

function randomFunction() {
  console.log(this);
}

let newObj = {
  description: "This is a new Object"
};

console.log(randomFunction.bind(newObj)());
console.log(randomFunction.call(newObj));
console.log(randomFunction.apply(newObj));

const drSeuss = `
  My name is Sam I Am ${1}
  I do not like green eggs and ham
  Lunchtime is here
  Come and eat
`;

console.log(drSeuss);

// filter
function fishy(colors) {
  // use Array filter to find fruits in color
  let fishes = [{ name: 'apple', color: 'red' }, { name: 'strawberry', color: 'red' }, { name: 'banana', color: 'yellow' }, { name: 'pineapple', color: 'yellow' }, { name: 'grape', color: 'purple' }, { name: 'plum', color: 'purple' }];

  return fishes.filter(f => f.color == color);
}

// EVERY
function test(colors) {
  let fruits = [{ name: 'apple', color: 'red' }, { name: 'banana', color: 'yellow' }, { name: 'grape', color: 'purple' }];

  // condition: short way, all fruits must be red
  let isAllRed = fruits.every(f => f.color == 'red');

  console.log(isAllRed); // false
};

// SOME
function emu(colors) {
  let niggas = [{ name: 'apple', color: 'red' }, { name: 'banana', color: 'yellow' }, { name: 'grape', color: 'purple' }];

  // condition: if any fruit is red
  let isAnyRed = fruits.some(f => f.color == 'red');

  console.log(isAnyRed); // true
};

// es5
var es5sayHello = function () {
  return 'hello!';
};

// es6 with explicit return
let explicitsayHello = () => {
  return 'hello!';
};

// es6 with implicit return
let implicitsayHello = () => 'hello';

// Default Parameters in ES6
var garage = function (model = 'Mustang', color = 'blue', car = 'Ford') {
  console.log(model);
  console.log(color);
  console.log(car);
};

var ninjas = {
  description: "This is a new Object",
  randomFunction() {
    var that = this;

    return function () {
      console.log(that);
    };
  }
};

ninjas.randomFunction()();

// 5. Functions
let Generate_new_fragment = document.createDocumentFragment();

let Generate_new_div = (innerHTML, classString, idString, index) => {
  let g = document.createElement('div');
  g.setAttribute("id", idString + index);
  g.classList = classString;
  g.innerHTML = innerHTML;
  return g;
};

let Generate_new_link = (innerHTML, classString, idString, index) => {
  let g = document.createElement('a');
  g.setAttribute("id", idString + index);
  g.classList = classString;
  g.innerHTML = innerHTML;
  return g;
};

let Generate_new_span = (innerHTML, classString, idString, index) => {
  let g = document.createElement('span');
  g.setAttribute("id", idString + index);
  g.classList = classString;
  g.innerHTML = innerHTML;
  return g;
};

let Generate_new_li = data => {
  console.log(data.title);
  let ELEMENT = document.createElement('li');
  ELEMENT.setAttribute("id", data.title);
  ELEMENT.classList = data.title;
  ELEMENT.innerHTML = `Hello peeps ${data.title}, yo`;

  // Objects: Firebase Library Items
  // console.log(document.querySelectorAll('#element_ol_firebase_library_posts'))
  ELEMENT.addEventListener("click", function (event) {

    _index2.default.Handle_check_route('library_preview', data);
  });

  return ELEMENT;
};

// Handles
let Toggle_functions_IF_State = (function_one_if_state_true, function_two_if_state_false, id_tag, Ui_State) => {

  // Function Check # 1
  (function () {
    if (Ui_State == true) {
      function_one_if_state_true(id_tag);
    }

    if (Ui_State == false) {
      function_two_if_state_false(id_tag);
    }
  })();
};

let Toggle_classes_IF_State = (addThisClass_if_state_false, addThisClass_if_state_true, id_Tag, Ui_State) => {

  let MANIPULATED = document.getElementById(id_Tag);

  if (MANIPULATED != null) {

    if (Ui_State == true) {

      if (MANIPULATED.classList.contains(addThisClass_if_state_false)) {

        // remove item after buffer
        setTimeout(function () {

          MANIPULATED.classList.remove(addThisClass_if_state_false);
          MANIPULATED.classList.add(addThisClass_if_state_true);
        }, 1);

        return;
      };
    };

    if (Ui_State == false) {

      if (MANIPULATED.classList.contains(addThisClass_if_state_true)) {

        // remove item after buffer
        setTimeout(function () {
          MANIPULATED.classList.add(addThisClass_if_state_false);
          MANIPULATED.classList.remove(addThisClass_if_state_true);
        }, 1);

        return;
      };
    };
  };
};

let Toggle_display_and_opacity_on_with_no_delay = id => {

  let MANIPULATED = document.getElementById(id);

  if (MANIPULATED != null) {

    if (MANIPULATED.classList.contains('display_none') && MANIPULATED.classList.contains('opacity_0')) {

      // remove item immediatly
      setTimeout(function () {
        MANIPULATED.classList.remove('display_none');
        MANIPULATED.classList.add('display');
      }, 0);

      // remove item after buffer
      setTimeout(function () {
        MANIPULATED.classList.remove('opacity_0');
        MANIPULATED.classList.add('opacity_1');
      }, 100);

      return;
    };
  };
};

let Toggle_display_and_opacity_off_with_delay = id => {

  let MANIPULATED = document.getElementById(id);

  if (MANIPULATED != null) {

    if (MANIPULATED.classList.contains('display') && MANIPULATED.classList.contains('opacity_1')) {

      // remove item immediatly
      setTimeout(function () {
        MANIPULATED.classList.remove('opacity_1');
        MANIPULATED.classList.add('opacity_0');
      }, 0);

      // remove item after buffer
      setTimeout(function () {
        MANIPULATED.classList.remove('display');
        MANIPULATED.classList.add('display_none');
      }, 100);

      return;
    };
  };
};

from_Import();

exports.default = {
  from_Import,
  Generate_new_link,
  Generate_new_fragment,
  Generate_new_div,
  Generate_new_span,
  Generate_new_li,
  Toggle_functions_IF_State,
  Toggle_classes_IF_State,
  Toggle_display_and_opacity_on_with_no_delay,
  Toggle_display_and_opacity_off_with_delay
};
},{"../index.js":3}],133:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require("../index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let state = ''; // Imports

let component_app_gui_scroll_y_position = 0;

setTimeout((() => {

  // Desktop
  if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {

    document.getElementById('component_app').addEventListener('click', event => {
      state = _index2.default.Handle_return_state();

      // console.log('state in events');
      state.events.mouse.click.clientX = event.clientX;
      state.events.mouse.click.clientY = event.clientY;
      console.log(state.events.mouse.click.clientX);
      console.log(state.events.mouse.click.clientY);
      console.log('click');

      // x axis: 1
      if (event.clientX > state.ux.dimensions.width8 * 0 && event.clientY > state.ux.dimensions.height8 * 0 && event.clientX < state.ux.dimensions.width8 * 1 && event.clientY < state.ux.dimensions.height8 * 1) {
        console.log('mouse is in clientX:1 x clientY:1 grid');
        state.events.mouse.clientX = 1;
        state.events.mouse.clientY = 1;
      };

      if (event.clientX > state.ux.dimensions.width8 * 0 && event.clientY > state.ux.dimensions.height8 * 1 && event.clientX < state.ux.dimensions.width8 * 1 && event.clientY < state.ux.dimensions.height8 * 2) {
        console.log('mouse is in clientX:1 x clientY:2 grid');
        state.events.mouse.clientX = 1;
        state.events.mouse.clientY = 2;
      };

      if (event.clientX > state.ux.dimensions.width8 * 0 && event.clientY > state.ux.dimensions.height8 * 2 && event.clientX < state.ux.dimensions.width8 * 1 && event.clientY < state.ux.dimensions.height8 * 3) {
        console.log('mouse is in clientX:1 x clientY:3 grid');
        state.events.mouse.clientX = 1;
        state.events.mouse.clientY = 3;
      };

      if (event.clientX > state.ux.dimensions.width8 * 0 && event.clientY > state.ux.dimensions.height8 * 3 && event.clientX < state.ux.dimensions.width8 * 1 && event.clientY < state.ux.dimensions.height8 * 4) {
        console.log('mouse is in clientX:1 x clientY:4 grid');
        state.events.mouse.clientX = 1;
        state.events.mouse.clientY = 4;
      };

      if (event.clientX > state.ux.dimensions.width8 * 0 && event.clientY > state.ux.dimensions.height8 * 4 && event.clientX < state.ux.dimensions.width8 * 1 && event.clientY < state.ux.dimensions.height8 * 5) {
        console.log('mouse is in clientX:1 x clientY:5 grid');
        state.events.mouse.clientX = 1;
        state.events.mouse.clientY = 5;
      };

      if (event.clientX > state.ux.dimensions.width8 * 0 && event.clientY > state.ux.dimensions.height8 * 5 && event.clientX < state.ux.dimensions.width8 * 1 && event.clientY < state.ux.dimensions.height8 * 6) {
        console.log('mouse is in clientX:1 x clientY:6 grid');
        state.events.mouse.clientX = 1;
        state.events.mouse.clientY = 6;
      };

      if (event.clientX > state.ux.dimensions.width8 * 0 && event.clientY > state.ux.dimensions.height8 * 6 && event.clientX < state.ux.dimensions.width8 * 1 && event.clientY < state.ux.dimensions.height8 * 7) {
        console.log('mouse is in clientX:1 x clientY:7 grid');
        state.events.mouse.clientX = 1;
        state.events.mouse.clientY = 7;
      };

      if (event.clientX > state.ux.dimensions.width8 * 0 && event.clientY > state.ux.dimensions.height8 * 7 && event.clientX < state.ux.dimensions.width8 * 1 && event.clientY < state.ux.dimensions.height8 * 8) {
        console.log('mouse is in clientX:1 x clientY:8 grid');
        state.events.mouse.clientX = 1;
        state.events.mouse.clientY = 8;
      };

      // x axis: 2

      if (event.clientX > state.ux.dimensions.width8 * 1 && event.clientY > state.ux.dimensions.height8 * 0 && event.clientX < state.ux.dimensions.width8 * 2 && event.clientY < state.ux.dimensions.height8 * 1) {
        console.log('mouse is in clientX:2 x clientY:1 grid');
        state.events.mouse.clientX = 2;
        state.events.mouse.clientY = 1;
      };

      if (event.clientX > state.ux.dimensions.width8 * 1 && event.clientY > state.ux.dimensions.height8 * 1 && event.clientX < state.ux.dimensions.width8 * 2 && event.clientY < state.ux.dimensions.height8 * 2) {
        console.log('mouse is in clientX:2 x clientY:2 grid');
        state.events.mouse.clientX = 2;
        state.events.mouse.clientY = 2;
      };

      if (event.clientX > state.ux.dimensions.width8 * 1 && event.clientY > state.ux.dimensions.height8 * 2 && event.clientX < state.ux.dimensions.width8 * 2 && event.clientY < state.ux.dimensions.height8 * 3) {
        console.log('mouse is in clientX:2 x clientY:3 grid');
        state.events.mouse.clientX = 2;
        state.events.mouse.clientY = 3;
      };

      if (event.clientX > state.ux.dimensions.width8 * 1 && event.clientY > state.ux.dimensions.height8 * 3 && event.clientX < state.ux.dimensions.width8 * 2 && event.clientY < state.ux.dimensions.height8 * 4) {
        console.log('mouse is in clientX:2 x clientY:4 grid');
        state.events.mouse.clientX = 2;
        state.events.mouse.clientY = 4;
      };

      if (event.clientX > state.ux.dimensions.width8 * 1 && event.clientY > state.ux.dimensions.height8 * 4 && event.clientX < state.ux.dimensions.width8 * 2 && event.clientY < state.ux.dimensions.height8 * 5) {
        console.log('mouse is in clientX:2 x clientY:5 grid');
        state.events.mouse.clientX = 2;
        state.events.mouse.clientY = 5;
      };

      if (event.clientX > state.ux.dimensions.width8 * 1 && event.clientY > state.ux.dimensions.height8 * 5 && event.clientX < state.ux.dimensions.width8 * 2 && event.clientY < state.ux.dimensions.height8 * 6) {
        console.log('mouse is in clientX:2 x clientY:6 grid');
        state.events.mouse.clientX = 2;
        state.events.mouse.clientY = 6;
      };

      if (event.clientX > state.ux.dimensions.width8 * 1 && event.clientY > state.ux.dimensions.height8 * 6 && event.clientX < state.ux.dimensions.width8 * 2 && event.clientY < state.ux.dimensions.height8 * 7) {
        console.log('mouse is in clientX:2 x clientY:7 grid');
        state.events.mouse.clientX = 2;
        state.events.mouse.clientY = 7;
      };

      if (event.clientX > state.ux.dimensions.width8 * 1 && event.clientY > state.ux.dimensions.height8 * 7 && event.clientX < state.ux.dimensions.width8 * 2 && event.clientY < state.ux.dimensions.height8 * 8) {
        console.log('mouse is in clientX:2 x clientY:8 grid');
        state.events.mouse.clientX = 2;
        state.events.mouse.clientY = 8;
      };

      // x axis: 3
      if (event.clientX > state.ux.dimensions.width8 * 2 && event.clientY > state.ux.dimensions.height8 * 0 && event.clientX < state.ux.dimensions.width8 * 3 && event.clientY < state.ux.dimensions.height8 * 1) {
        console.log('mouse is in clientX:3 x clientY:1 grid');
        state.events.mouse.clientX = 3;
        state.events.mouse.clientY = 1;
      };

      if (event.clientX > state.ux.dimensions.width8 * 2 && event.clientY > state.ux.dimensions.height8 * 1 && event.clientX < state.ux.dimensions.width8 * 3 && event.clientY < state.ux.dimensions.height8 * 2) {
        console.log('mouse is in clientX:3 x clientY:2 grid');
        state.events.mouse.clientX = 3;
        state.events.mouse.clientY = 2;
      };

      if (event.clientX > state.ux.dimensions.width8 * 2 && event.clientY > state.ux.dimensions.height8 * 2 && event.clientX < state.ux.dimensions.width8 * 3 && event.clientY < state.ux.dimensions.height8 * 3) {
        console.log('mouse is in clientX:3 x clientY:3 grid');
        state.events.mouse.clientX = 3;
        state.events.mouse.clientY = 3;
      };

      if (event.clientX > state.ux.dimensions.width8 * 2 && event.clientY > state.ux.dimensions.height8 * 3 && event.clientX < state.ux.dimensions.width8 * 3 && event.clientY < state.ux.dimensions.height8 * 4) {
        console.log('mouse is in clientX:3 x clientY:4 grid');
        state.events.mouse.clientX = 3;
        state.events.mouse.clientY = 4;
      };

      if (event.clientX > state.ux.dimensions.width8 * 2 && event.clientY > state.ux.dimensions.height8 * 4 && event.clientX < state.ux.dimensions.width8 * 3 && event.clientY < state.ux.dimensions.height8 * 5) {
        console.log('mouse is in clientX:3 x clientY:5 grid');
        state.events.mouse.clientX = 3;
        state.events.mouse.clientY = 5;
      };

      if (event.clientX > state.ux.dimensions.width8 * 2 && event.clientY > state.ux.dimensions.height8 * 5 && event.clientX < state.ux.dimensions.width8 * 3 && event.clientY < state.ux.dimensions.height8 * 6) {
        console.log('mouse is in clientX:3 x clientY:6 grid');
        state.events.mouse.clientX = 3;
        state.events.mouse.clientY = 6;
      };

      if (event.clientX > state.ux.dimensions.width8 * 2 && event.clientY > state.ux.dimensions.height8 * 6 && event.clientX < state.ux.dimensions.width8 * 3 && event.clientY < state.ux.dimensions.height8 * 7) {
        console.log('mouse is in clientX:3 x clientY:7 grid');
        state.events.mouse.clientX = 3;
        state.events.mouse.clientY = 7;
      };

      if (event.clientX > state.ux.dimensions.width8 * 2 && event.clientY > state.ux.dimensions.height8 * 7 && event.clientX < state.ux.dimensions.width8 * 3 && event.clientY < state.ux.dimensions.height8 * 8) {
        console.log('mouse is in clientX:3 x clientY:8 grid');
        state.events.mouse.clientX = 3;
        state.events.mouse.clientY = 8;
      };

      // x axis: 4
      if (event.clientX > state.ux.dimensions.width8 * 3 && event.clientY > state.ux.dimensions.height8 * 0 && event.clientX < state.ux.dimensions.width8 * 4 && event.clientY < state.ux.dimensions.height8 * 1) {
        console.log('mouse is in clientX:4 x clientY:1 grid');
        state.events.mouse.clientX = 4;
        state.events.mouse.clientY = 1;
      };

      if (event.clientX > state.ux.dimensions.width8 * 3 && event.clientY > state.ux.dimensions.height8 * 1 && event.clientX < state.ux.dimensions.width8 * 4 && event.clientY < state.ux.dimensions.height8 * 2) {
        console.log('mouse is in clientX:4 x clientY:2 grid');
        state.events.mouse.clientX = 4;
        state.events.mouse.clientY = 2;
      };

      if (event.clientX > state.ux.dimensions.width8 * 3 && event.clientY > state.ux.dimensions.height8 * 2 && event.clientX < state.ux.dimensions.width8 * 4 && event.clientY < state.ux.dimensions.height8 * 3) {
        console.log('mouse is in clientX:4 x clientY:3 grid');
        state.events.mouse.clientX = 4;
        state.events.mouse.clientY = 3;
      };

      if (event.clientX > state.ux.dimensions.width8 * 3 && event.clientY > state.ux.dimensions.height8 * 3 && event.clientX < state.ux.dimensions.width8 * 4 && event.clientY < state.ux.dimensions.height8 * 4) {
        console.log('mouse is in clientX:4 x clientY:4 grid');
        state.events.mouse.clientX = 4;
        state.events.mouse.clientY = 4;
      };

      if (event.clientX > state.ux.dimensions.width8 * 3 && event.clientY > state.ux.dimensions.height8 * 4 && event.clientX < state.ux.dimensions.width8 * 4 && event.clientY < state.ux.dimensions.height8 * 5) {
        console.log('mouse is in clientX:4 x clientY:5 grid');
        state.events.mouse.clientX = 4;
        state.events.mouse.clientY = 5;
      };

      if (event.clientX > state.ux.dimensions.width8 * 3 && event.clientY > state.ux.dimensions.height8 * 5 && event.clientX < state.ux.dimensions.width8 * 4 && event.clientY < state.ux.dimensions.height8 * 6) {
        console.log('mouse is in clientX:4 x clientY:6 grid');
        state.events.mouse.clientX = 4;
        state.events.mouse.clientY = 6;
      };

      if (event.clientX > state.ux.dimensions.width8 * 3 && event.clientY > state.ux.dimensions.height8 * 6 && event.clientX < state.ux.dimensions.width8 * 4 && event.clientY < state.ux.dimensions.height8 * 7) {
        console.log('mouse is in clientX:4 x clientY:7 grid');
        state.events.mouse.clientX = 4;
        state.events.mouse.clientY = 7;
      };

      if (event.clientX > state.ux.dimensions.width8 * 3 && event.clientY > state.ux.dimensions.height8 * 7 && event.clientX < state.ux.dimensions.width8 * 4 && event.clientY < state.ux.dimensions.height8 * 8) {
        console.log('mouse is in clientX:4 x clientY:8 grid');
        state.events.mouse.clientX = 4;
        state.events.mouse.clientY = 8;
      };

      // x axis: 5
      if (event.clientX > state.ux.dimensions.width8 * 4 && event.clientY > state.ux.dimensions.height8 * 0 && event.clientX < state.ux.dimensions.width8 * 5 && event.clientY < state.ux.dimensions.height8 * 1) {
        console.log('mouse is in clientX:5 x clientY:1 grid');
        state.events.mouse.clientX = 5;
        state.events.mouse.clientY = 1;
      };

      if (event.clientX > state.ux.dimensions.width8 * 4 && event.clientY > state.ux.dimensions.height8 * 1 && event.clientX < state.ux.dimensions.width8 * 5 && event.clientY < state.ux.dimensions.height8 * 2) {
        console.log('mouse is in clientX:5 x clientY:2 grid');
        state.events.mouse.clientX = 5;
        state.events.mouse.clientY = 2;
      };

      if (event.clientX > state.ux.dimensions.width8 * 4 && event.clientY > state.ux.dimensions.height8 * 2 && event.clientX < state.ux.dimensions.width8 * 5 && event.clientY < state.ux.dimensions.height8 * 3) {
        console.log('mouse is in clientX:5 x clientY:3 grid');
        state.events.mouse.clientX = 5;
        state.events.mouse.clientY = 3;
      };

      if (event.clientX > state.ux.dimensions.width8 * 4 && event.clientY > state.ux.dimensions.height8 * 3 && event.clientX < state.ux.dimensions.width8 * 5 && event.clientY < state.ux.dimensions.height8 * 4) {
        console.log('mouse is in clientX:5 x clientY:4 grid');
        state.events.mouse.clientX = 5;
        state.events.mouse.clientY = 4;
      };

      if (event.clientX > state.ux.dimensions.width8 * 4 && event.clientY > state.ux.dimensions.height8 * 4 && event.clientX < state.ux.dimensions.width8 * 5 && event.clientY < state.ux.dimensions.height8 * 5) {
        console.log('mouse is in clientX:5 x clientY:5 grid');
        state.events.mouse.clientX = 5;
        state.events.mouse.clientY = 5;
      };

      if (event.clientX > state.ux.dimensions.width8 * 4 && event.clientY > state.ux.dimensions.height8 * 5 && event.clientX < state.ux.dimensions.width8 * 5 && event.clientY < state.ux.dimensions.height8 * 6) {
        console.log('mouse is in clientX:5 x clientY:6 grid');
        state.events.mouse.clientX = 5;
        state.events.mouse.clientY = 6;
      };

      if (event.clientX > state.ux.dimensions.width8 * 4 && event.clientY > state.ux.dimensions.height8 * 6 && event.clientX < state.ux.dimensions.width8 * 5 && event.clientY < state.ux.dimensions.height8 * 7) {
        console.log('mouse is in clientX:5 x clientY:7 grid');
        state.events.mouse.clientX = 5;
        state.events.mouse.clientY = 7;
      };

      if (event.clientX > state.ux.dimensions.width8 * 4 && event.clientY > state.ux.dimensions.height8 * 7 && event.clientX < state.ux.dimensions.width8 * 5 && event.clientY < state.ux.dimensions.height8 * 8) {
        console.log('mouse is in clientX:5 x clientY:8 grid');
        state.events.mouse.clientX = 5;
        state.events.mouse.clientY = 8;
      };

      // x axis: 6

      if (event.clientX > state.ux.dimensions.width8 * 5 && event.clientY > state.ux.dimensions.height8 * 0 && event.clientX < state.ux.dimensions.width8 * 6 && event.clientY < state.ux.dimensions.height8 * 1) {
        console.log('mouse is in clientX:6 x clientY:1 grid');
        state.events.mouse.clientX = 6;
        state.events.mouse.clientY = 1;
      };

      if (event.clientX > state.ux.dimensions.width8 * 5 && event.clientY > state.ux.dimensions.height8 * 1 && event.clientX < state.ux.dimensions.width8 * 6 && event.clientY < state.ux.dimensions.height8 * 2) {
        console.log('mouse is in clientX:6 x clientY:2 grid');
        state.events.mouse.clientX = 6;
        state.events.mouse.clientY = 2;
      };

      if (event.clientX > state.ux.dimensions.width8 * 5 && event.clientY > state.ux.dimensions.height8 * 2 && event.clientX < state.ux.dimensions.width8 * 6 && event.clientY < state.ux.dimensions.height8 * 3) {
        console.log('mouse is in clientX:6 x clientY:3 grid');
        state.events.mouse.clientX = 6;
        state.events.mouse.clientY = 3;
      };

      if (event.clientX > state.ux.dimensions.width8 * 5 && event.clientY > state.ux.dimensions.height8 * 3 && event.clientX < state.ux.dimensions.width8 * 6 && event.clientY < state.ux.dimensions.height8 * 4) {
        console.log('mouse is in clientX:6 x clientY:4 grid');
        state.events.mouse.clientX = 6;
        state.events.mouse.clientY = 4;
      };

      if (event.clientX > state.ux.dimensions.width8 * 5 && event.clientY > state.ux.dimensions.height8 * 4 && event.clientX < state.ux.dimensions.width8 * 6 && event.clientY < state.ux.dimensions.height8 * 5) {
        console.log('mouse is in clientX:6 x clientY:5 grid');
        state.events.mouse.clientX = 6;
        state.events.mouse.clientY = 5;
      };

      if (event.clientX > state.ux.dimensions.width8 * 5 && event.clientY > state.ux.dimensions.height8 * 5 && event.clientX < state.ux.dimensions.width8 * 6 && event.clientY < state.ux.dimensions.height8 * 6) {
        console.log('mouse is in clientX:6 x clientY:6 grid');
        state.events.mouse.clientX = 6;
        state.events.mouse.clientY = 6;
      };

      if (event.clientX > state.ux.dimensions.width8 * 5 && event.clientY > state.ux.dimensions.height8 * 6 && event.clientX < state.ux.dimensions.width8 * 6 && event.clientY < state.ux.dimensions.height8 * 7) {
        console.log('mouse is in clientX:6 x clientY:7 grid');
        state.events.mouse.clientX = 6;
        state.events.mouse.clientY = 7;
      };

      if (event.clientX > state.ux.dimensions.width8 * 5 && event.clientY > state.ux.dimensions.height8 * 7 && event.clientX < state.ux.dimensions.width8 * 6 && event.clientY < state.ux.dimensions.height8 * 8) {
        console.log('mouse is in clientX:6 x clientY:8 grid');
        state.events.mouse.clientX = 6;
        state.events.mouse.clientY = 8;
      };

      // x axis: 7
      if (event.clientX > state.ux.dimensions.width8 * 6 && event.clientY > state.ux.dimensions.height8 * 0 && event.clientX < state.ux.dimensions.width8 * 7 && event.clientY < state.ux.dimensions.height8 * 1) {
        console.log('mouse is in clientX:7 x clientY:1 grid');
        state.events.mouse.clientX = 7;
        state.events.mouse.clientY = 1;
      };

      if (event.clientX > state.ux.dimensions.width8 * 6 && event.clientY > state.ux.dimensions.height8 * 1 && event.clientX < state.ux.dimensions.width8 * 7 && event.clientY < state.ux.dimensions.height8 * 2) {
        console.log('mouse is in clientX:7 x clientY:2 grid');
        state.events.mouse.clientX = 7;
        state.events.mouse.clientY = 2;
      };

      if (event.clientX > state.ux.dimensions.width8 * 6 && event.clientY > state.ux.dimensions.height8 * 2 && event.clientX < state.ux.dimensions.width8 * 7 && event.clientY < state.ux.dimensions.height8 * 3) {
        console.log('mouse is in clientX:7 x clientY:3 grid');
        state.events.mouse.clientX = 7;
        state.events.mouse.clientY = 3;
      };

      if (event.clientX > state.ux.dimensions.width8 * 6 && event.clientY > state.ux.dimensions.height8 * 3 && event.clientX < state.ux.dimensions.width8 * 7 && event.clientY < state.ux.dimensions.height8 * 4) {
        console.log('mouse is in clientX:7 x clientY:4 grid');
        state.events.mouse.clientX = 7;
        state.events.mouse.clientY = 4;
      };

      if (event.clientX > state.ux.dimensions.width8 * 6 && event.clientY > state.ux.dimensions.height8 * 4 && event.clientX < state.ux.dimensions.width8 * 7 && event.clientY < state.ux.dimensions.height8 * 5) {
        console.log('mouse is in clientX:7 x clientY:5 grid');
        state.events.mouse.clientX = 7;
        state.events.mouse.clientY = 5;
      };

      if (event.clientX > state.ux.dimensions.width8 * 6 && event.clientY > state.ux.dimensions.height8 * 5 && event.clientX < state.ux.dimensions.width8 * 7 && event.clientY < state.ux.dimensions.height8 * 6) {
        console.log('mouse is in clientX:7 x clientY:6 grid');
        state.events.mouse.clientX = 7;
        state.events.mouse.clientY = 6;
      };

      if (event.clientX > state.ux.dimensions.width8 * 6 && event.clientY > state.ux.dimensions.height8 * 6 && event.clientX < state.ux.dimensions.width8 * 7 && event.clientY < state.ux.dimensions.height8 * 7) {
        console.log('mouse is in clientX:7 x clientY:7 grid');
        state.events.mouse.clientX = 7;
        state.events.mouse.clientY = 7;
      };

      if (event.clientX > state.ux.dimensions.width8 * 6 && event.clientY > state.ux.dimensions.height8 * 7 && event.clientX < state.ux.dimensions.width8 * 7 && event.clientY < state.ux.dimensions.height8 * 8) {
        console.log('mouse is in clientX:7 x clientY:8 grid');
        state.events.mouse.clientX = 7;
        state.events.mouse.clientY = 8;
      };

      // x axis: 8
      if (event.clientX > state.ux.dimensions.width8 * 7 && event.clientY > state.ux.dimensions.height8 * 0 && event.clientX < state.ux.dimensions.width8 * 8 && event.clientY < state.ux.dimensions.height8 * 1) {
        console.log('mouse is in clientX:8 x clientY:1 grid');
        state.events.mouse.clientX = 8;
        state.events.mouse.clientY = 1;
      };

      if (event.clientX > state.ux.dimensions.width8 * 7 && event.clientY > state.ux.dimensions.height8 * 1 && event.clientX < state.ux.dimensions.width8 * 8 && event.clientY < state.ux.dimensions.height8 * 2) {
        console.log('mouse is in clientX:8 x clientY:2 grid');
        state.events.mouse.clientX = 8;
        state.events.mouse.clientY = 2;
      };

      if (event.clientX > state.ux.dimensions.width8 * 7 && event.clientY > state.ux.dimensions.height8 * 2 && event.clientX < state.ux.dimensions.width8 * 8 && event.clientY < state.ux.dimensions.height8 * 3) {
        console.log('mouse is in clientX:8 x clientY:3 grid');
        state.events.mouse.clientX = 8;
        state.events.mouse.clientY = 3;
      };

      if (event.clientX > state.ux.dimensions.width8 * 7 && event.clientY > state.ux.dimensions.height8 * 3 && event.clientX < state.ux.dimensions.width8 * 8 && event.clientY < state.ux.dimensions.height8 * 4) {
        console.log('mouse is in clientX:8 x clientY:4 grid');
        state.events.mouse.clientX = 8;
        state.events.mouse.clientY = 4;
      };

      if (event.clientX > state.ux.dimensions.width8 * 7 && event.clientY > state.ux.dimensions.height8 * 4 && event.clientX < state.ux.dimensions.width8 * 8 && event.clientY < state.ux.dimensions.height8 * 5) {
        console.log('mouse is in clientX:8 x clientY:5 grid');
        state.events.mouse.clientX = 8;
        state.events.mouse.clientY = 5;
      };

      if (event.clientX > state.ux.dimensions.width8 * 7 && event.clientY > state.ux.dimensions.height8 * 5 && event.clientX < state.ux.dimensions.width8 * 8 && event.clientY < state.ux.dimensions.height8 * 6) {
        console.log('mouse is in clientX:8 x clientY:6 grid');
        state.events.mouse.clientX = 8;
        state.events.mouse.clientY = 6;
      };

      if (event.clientX > state.ux.dimensions.width8 * 7 && event.clientY > state.ux.dimensions.height8 * 6 && event.clientX < state.ux.dimensions.width8 * 8 && event.clientY < state.ux.dimensions.height8 * 7) {
        console.log('mouse is in clientX:8 x clientY:7 grid');
        state.events.mouse.clientX = 8;
        state.events.mouse.clientY = 7;
      };

      if (event.clientX > state.ux.dimensions.width8 * 7 && event.clientY > state.ux.dimensions.height8 * 7 && event.clientX < state.ux.dimensions.width8 * 8 && event.clientY < state.ux.dimensions.height8 * 8) {
        console.log('mouse is in clientX:8 x clientY:8 grid');
        state.events.mouse.clientX = 8;
        state.events.mouse.clientY = 8;
      };

      _index2.default.Handle_get_state_from_events();
    });

    document.getElementById('component_app').addEventListener('wheel', event => {
      state = _index2.default.Handle_return_state();

      // console.log('state in events');

      console.log('wheel');

      if (event.deltaY < 0) {
        console.log('scrolling up');
        document.getElementById('component_content_scroll').classList.add('display');
        document.getElementById('component_content_scroll').classList.remove('display_none');
      };

      if (event.deltaY > 0) {
        console.log('scrolling down');
        document.getElementById('component_content_scroll').classList.remove('display');
        document.getElementById('component_content_scroll').classList.add('display_none');
      };

      _index2.default.Handle_get_state_from_events();
    });

    document.getElementById('component_app').addEventListener('scroll', event => {

      // scrolling
      console.log('event.srcElement.clientWidth: ' + event.srcElement.clientWidth);
      console.log('event.srcElement.clientHeight: ' + event.srcElement.clientHeight);
      console.log('event.srcElement.scrollLeft: ' + event.srcElement.scrollLeft);
      console.log('event.srcElement.scrollTop: ' + event.srcElement.scrollTop);
      console.log('event.srcElement.scrollWidth: ' + event.srcElement.scrollWidth);
      console.log('event.srcElement.scrollHeight: ' + event.srcElement.scrollHeight);

      if (event.srcElement.scrollTop > component_app_gui_scroll_y_position) {
        console.log('component_app_gui_scroll_y_position increasing');
        let target = document.getElementById('component_modal_scroll_fixed_feature_bg');
        target.classList.remove('display');
        target.classList.add('display_none');
      }

      if (event.srcElement.scrollTop < component_app_gui_scroll_y_position) {
        console.log('component_app_gui_scroll_y_position decreasing');
        let target = document.getElementById('component_modal_scroll_fixed_feature_bg');
        target.classList.add('display');
        target.classList.remove('display_none');
      }

      if (event.srcElement.scrollTop == 0) {
        console.log('top met');
        document.getElementById('component_app_modal_element_nav_top').classList.remove('background_dark_yellow_0');
      }

      if (event.srcElement.scrollTop > 1) {
        console.log('scrolling started');
        document.getElementById('component_app_modal_element_nav_top').classList.add('background_dark_yellow_0');
      }

      if (event.srcElement.scrollTop < event.srcElement.clientHeight) {
        console.log('inside lead');
        document.getElementById('component_modal_scroll_fixed_feature_1').classList.remove('display');
        document.getElementById('component_modal_scroll_fixed_feature_1').classList.add('display_none');
        document.getElementById('component_modal_scroll_fixed_feature_2').classList.remove('display_none');
        document.getElementById('component_modal_scroll_fixed_feature_2').classList.add('display');
      }

      if (event.srcElement.scrollTop > event.srcElement.clientHeight) {
        console.log('past lead');
        document.getElementById('component_modal_scroll_fixed_feature_1').classList.remove('display_none');
        document.getElementById('component_modal_scroll_fixed_feature_1').classList.add('display');
        document.getElementById('component_modal_scroll_fixed_feature_2').classList.remove('display');
        document.getElementById('component_modal_scroll_fixed_feature_2').classList.add('display_none');
      }

      if (event.srcElement.scrollHeight - event.srcElement.clientHeight < event.srcElement.scrollTop + event.srcElement.offsetHeight) {
        console.log('100vh before bottom met');
      }

      if (event.srcElement.scrollHeight < event.srcElement.scrollTop + event.srcElement.offsetHeight) {
        document.getElementById('component_app_modal_element_nav_top').classList.remove('background_dark_yellow_0');
        console.log('bottom met');
      }

      component_app_gui_scroll_y_position = event.srcElement.scrollTop;

      state = _index2.default.Handle_return_state();
      // console.log('state in events');
    });

    document.getElementById('component_app').addEventListener('mouseup', event => {
      state = _index2.default.Handle_return_state();
      state.events.mouse.up = true;
      // console.log('state in events');
      console.log('mouseup');
      _index2.default.Handle_get_state_from_events();
    });

    document.getElementById('component_app').addEventListener('mousedown', event => {
      state = _index2.default.Handle_return_state();
      state.events.mouse.up = false;
      // console.log('state in events');
      console.log('mousedown');
      _index2.default.Handle_get_state_from_events();
    });

    document.getElementById('component_app').addEventListener('mouseenter', event => {
      state = _index2.default.Handle_return_state();
      state.events.mouse.enter = true;
      state.events.mouse.leave = false;
      // console.log('state in events');
      console.log('mouseenter');
      _index2.default.Handle_get_state_from_events();
    });

    document.getElementById('component_app').addEventListener('mouseleave', event => {
      state = _index2.default.Handle_return_state();
      state.events.mouse.enter = false;
      state.events.mouse.leave = true;
      // console.log('state in events');
      console.log('mouseleave');
      _index2.default.Handle_get_state_from_events();
    });

    document.getElementById('component_app').addEventListener('mousemove', event => {
      state = _index2.default.Handle_return_state();
      // console.log('state in events');
      if (state.events.mouse.up == true) {
        console.log('drop');
      };
      if (state.events.mouse.up == false) {
        console.log('drag');
      };

      if (state.events != null) {

        state.events.mouse.clientX = event.clientX;
        state.events.mouse.clientY = event.clientY;

        /*
        if (state.ui.interaction.easel.display == true) {
             if (state.events.mouse.up == true) {
                 state.ui.interaction.easel.pencil.push({
                    'xaxis': event.clientX,
                    'yaxis': event.clientY
                })
                if (document.getElementById('component_app_interaction_easel_pencil') != null) {
                    document.getElementById('component_app_interaction_easel_pencil').innerHTML = '';
                     for (let i = 0; i < state.ui.interaction.easel.pencil.length; i++) {
                        document.getElementById('component_app_interaction_easel_pencil').innerHTML += '<div class="background-dark-yellow-9 position_absolute margin_auto width_1vh height_1vh" style="top:' + (state.ui.interaction.easel.pencil[i].yaxis) + 'px; left:' + (state.ui.interaction.easel.pencil[i].xaxis) + 'px;"></div>'
                    };
                };
            };
             if (state.events.mouse.down == true) {
                 state.ui.interaction.easel.pen.push({
                    'xaxis': event.clientX,
                    'yaxis': event.clientY
                })
                 if (document.getElementById('component_app_interaction_easel_pen') != null) {
                    document.getElementById('component_app_interaction_easel_pen').innerHTML = '';
                     for (let i = 0; i < state.ui.interaction.easel.pen.length; i++) {
                        document.getElementById('component_app_interaction_easel_pen').innerHTML += '<div class="background-light-yellow-9 position_absolute margin_auto width_1vh height_1vh" style="top:' + (state.ui.interaction.easel.pen[i].yaxis) + 'px; left:' + (state.ui.interaction.easel.pen[i].xaxis) + 'px;"></div>'
                    };
                };
            };
        };
        */

        if (state.events.mouse.up == true) {
          state.events.mouse.drop.clientX = event.clientX;
          state.events.mouse.drop.clientY = event.clientY;
        };

        if (state.events.mouse.up == false) {
          console.log('mousemove + mouse.down = "dragging"');
          state.events.mouse.drag.clientX = event.clientX;
          state.events.mouse.drag.clientY = event.clientY;
        };
      };

      console.log('mousemove');
      _index2.default.Handle_get_state_from_events();
    });

    document.getElementById('component_app').addEventListener('keydown', event => {
      state = _index2.default.Handle_return_state();
      // console.log('state in events');
      console.log('keydown');

      let keyCode = event.keyCode;
      console.log('keyCode: ' + keyCode);
      console.log('keys held: ');
      console.log(state.events.key.keys);

      let matched = false;

      for (var i = 0; i < state.events.key.keys.length; i++) {
        if (state.events.key.keys[i] == event.keyCode) {
          matched = true;
        };
      };

      if (matched == false) {
        state.events.key.keys.push(event.keyCode);
      };

      // zero
      if (keyCode == 48) {
        console.log('0');
      };
      // one
      if (keyCode == 49) {
        console.log('1');
      };
      // two
      if (keyCode == 50) {
        console.log('2');
      };
      // three
      if (keyCode == 51) {
        console.log('3');
      };
      // four
      if (keyCode == 52) {
        console.log('4');
      };
      // five
      if (keyCode == 53) {
        console.log('5');
      };
      // six
      if (keyCode == 54) {
        console.log('6');
      };
      // seven
      if (keyCode == 55) {
        console.log('7');
      };
      // eight
      if (keyCode == 56) {
        console.log('8');
      };
      // nine
      if (keyCode == 57) {
        console.log('9');
      };
      // plus
      if (keyCode == 187) {};
      // minus
      if (keyCode == 189) {};

      // backspace
      if (event.keyCode == 8) {
        state.ui.modal.nav.top.transform = !state.ui.modal.nav.top.transform;
        state.ui.modal.nav.bottom.transform = !state.ui.modal.nav.bottom.transform;
      };

      // tab
      if (event.keyCode == 9) {
        console.log('tab');
        document.getElementById('componentSound1').play();
      };

      // enter
      if (event.keyCode == 13) {
        _index2.default.Handle_check_route('start');
        document.getElementById('componentSound2').play();
      };

      // esc
      if (event.keyCode == 27) {
        console.log('esc');
        _index2.default.Handle_check_route('reset');
        document.getElementById('componentSound').play();
      };

      // spacebar
      if (event.keyCode == 32) {
        state.ui.modal.page.bottom.display = true;
        state.ui.modal.page.bottom.transform = !state.ui.modal.page.bottom.transform;
      };

      // arrow left
      if (event.keyCode == 37) {
        console.log('arrow');
        state.ui.stage.enneagon.xaxis -= 1;
        console.log(state.ui.stage.enneagon.xaxis);
      };

      // arrow down
      if (event.keyCode == 38) {
        console.log('arrow');
        state.ui.stage.enneagon.yaxis -= 1;
        console.log(state.ui.stage.enneagon.yaxis);
      };

      // arrow up
      if (event.keyCode == 39) {
        console.log('arrow');
        state.ui.stage.enneagon.xaxis += 1;
        console.log(state.ui.stage.enneagon.xaxis);
      };

      // arrow right
      if (event.keyCode == 40) {
        console.log('arrow');
        state.ui.stage.enneagon.yaxis += 1;
        console.log(state.ui.stage.enneagon.yaxis);
      };

      // a
      if (event.keyCode == 65) {
        state.ui.interaction.player_1.xaxis -= 1;

        if (state.ui.interaction.player_1.display == true) {
          if (state.ui.interaction.player_1.xaxis == state.ui.pieces.workspace.desk.xaxis) {
            state.data.score.current.met += 1;
          };
        };
      };

      // d
      if (event.keyCode == 68) {
        state.ui.interaction.player_1.xaxis += 1;

        if (state.ui.interaction.player_1.display == true) {
          if (state.ui.interaction.player_1.xaxis == state.ui.pieces.workspace.desk.xaxis) {
            state.data.score.current.met += 1;
          };
        };
      };

      // q
      if (event.keyCode == 81) {
        _index2.default.Handle_check_route('home');
      };

      // w
      if (event.keyCode == 83) {
        state.ui.interaction.player_1.yaxis -= 1;
      };

      // s
      if (event.keyCode == 87) {
        state.ui.interaction.player_1.yaxis += 1;
      };

      if (keyCode == 192) {};

      _index2.default.Handle_get_state_from_events();
    });

    document.getElementById('component_app').addEventListener('keyup', event => {
      state = _index2.default.Handle_return_state();
      // console.log('state in events');
      console.log('keyup');

      state = _index2.default.Handle_return_state();
      console.log('event: keyup');
      console.log(event);
      var index = state.events.key.keys.indexOf(event.keyCode);

      if (index > -1) {
        state.events.key.keys.splice(index, 1);
      };

      _index2.default.Handle_get_state_from_events();
    });
  };

  // Mobile
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
    component_app.addEventListener("click", function (event) {
      alert('on phone');
    });
  };
})(), 1000);

let Handle_return_state_from_events = () => {
  return state;
};

exports.default = {
  state,
  Handle_return_state_from_events
};
},{"../index.js":3}],139:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
let randomizer = function () {
  let number = Math.floor(Math.random() * 1000000000000000 + 1);
  return number;
};

let input_drawn = () => {

  let random_int = Math.floor(Math.random() * 1000000000000000 + 1);

  let component = '\
      \
      <div id="input_drawn' + random_int + '" class="input_drawn position_relative float_left z_index_7">\
        \
        <div id="input_drawn_yes' + random_int + '" class="gui_arrow_top_left width_10vh height_10vh float_left position_relative margin_auto">\
        </div>\
        \
        <div id="input_drawn_no' + random_int + '"class="gui_arrow_top_left width_10vh height_10vh float_left position_relative margin_auto">\
        </div>\
        \
      </div>\
    ';

  // add event listeners
  setTimeout(() => {

    document.getElementById('input_drawn_yes' + random_int + '').addEventListener("click", function (event) {
      alert('input_drawn_yes');
    });

    document.getElementById('input_drawn_no' + random_int + '').addEventListener("click", function (event) {
      alert('input_drawn_no');
    });
  }, 2000);

  return component;
};

let input_range_drag = () => {

  let random_int = Math.floor(Math.random() * 1000000000000000 + 1);

  let component = '\
      \
      <div id="input_range_drag' + random_int + '" class="input_range_drag position_relative float_left z_index_7">\
        <input type="range" name="points" min="0" max="10">\
      </div>\
    ';

  // add event listeners
  setTimeout(() => {

    document.getElementById('input_range_drag' + random_int + '').addEventListener("mousemove", function (event) {
      console.log(document.getElementById('input_range_drag' + random_int + '').value);
    });
  }, 2000);

  return component;
};

let input_vertical_range = () => {
  let random_int = Math.floor(Math.random() * 1000000000000000 + 1);

  let component = '\
      \
      <div id="input_range_drag' + random_int + '" class="input_range_drag position_relative float_left z_index_7">\
        <input type="range" name="points" min="0" max="10">\
      </div>\
    ';

  // add event listeners
  setTimeout(() => {

    document.getElementById('input_range_drag' + random_int + '').addEventListener("mousemove", function (event) {
      console.log(document.getElementById('input_range_drag' + random_int + '').value);
    });
  }, 2000);

  return component;
};

let input_horizontal_range = () => {
  let random_int = Math.floor(Math.random() * 1000000000000000 + 1);

  let component = '\
      \
      <div id="input_range_drag' + random_int + '" class="input_range_drag position_relative float_left z_index_7">\
        <input type="range" name="points" min="0" max="10">\
      </div>\
    ';

  // add event listeners
  setTimeout(() => {

    document.getElementById('input_range_drag' + random_int + '').addEventListener("mousemove", function (event) {
      console.log(document.getElementById('input_range_drag' + random_int + '').value);
    });
  }, 2000);

  return component;
};

let element_radio = () => {
  let random_int = Math.floor(Math.random() * 1000000000000000 + 1);

  let component = '\
      \
      <div id="input_range_drag' + random_int + '" class="input_range_drag position_relative float_left z_index_7">\
        <input type="radio" name="coffee" value="cream">With cream<br>\
        <input type="radio" name="coffee" value="sugar">With sugar<br>\
        <br>\
        <input type="button" onclick="myFunction()" value="Send order">\
        <br><br>\
        <input type="text" id="order" size="50">\
        <input type="submit" value="Submit">\
      </div>\
    ';

  // add event listeners
  setTimeout(() => {

    document.getElementById('input_range_drag' + random_int + '').addEventListener("mousemove", function (event) {

      function myFunction() {
        var coffee = document.getElementById('input_range_drag' + random_int + '');
        var txt = "";
        var i;
        for (i = 0; i < coffee.length; i++) {
          if (coffee[i].checked) {
            txt = txt + coffee[i].value + " ";
          }
        }
        alert("You ordered a coffee with: " + txt);
      }
    });
  }, 2000);

  return component;
};

let element_checkbox = () => {
  let random_int = Math.floor(Math.random() * 1000000000000000 + 1);

  let component = '\
      \
      <div id="input_range_drag' + random_int + '" class="input_range_drag position_relative float_left z_index_7">\
        <input type="checkbox" name="vehicle" value="Bike"> I have a bike<br>\
        <input type="checkbox" name="vehicle" value="Car" checked> I have a car<br>\
        <input type="submit" value="Submit">\
      </div>\
    ';

  // add event listeners
  setTimeout(() => {

    document.getElementById('input_range_drag' + random_int + '').addEventListener("mousemove", function (event) {

      function myFunction() {
        var coffee = document.getElementById('input_range_drag' + random_int + '');
        var txt = "";
        var i;
        for (i = 0; i < coffee.length; i++) {
          if (coffee[i].checked) {
            txt = txt + coffee[i].value + " ";
          }
        }
        alert("You ordered a coffee with: " + txt);
      }
    });
  }, 2000);

  return component;
};

// containers
let element_container = (info, style) => {
  let element = '\
  <div id="element_container" class="' + style + '">\
    ' + info + '\
  </div>\
  ';
  return element;
};

let element_container_styled = (style, info) => {
  let element = '<div id="element_container_styled" class="position_relative margin_auto ' + style + ' float_left">' + info + '</div>';

  return element;
};

let element_container_center = info => {

  let element = '<div id="element_container_center" class="width_100 height_100 position_relative float_left display_flex_flow "><div class="position_relative float_left">' + info + '</div></div>';

  return element;
};

let element_nownigel_logo = () => {

  let element = `

      <div id="component_bg" class="width_100 height_100vh float_left position_fixed top_0 left_0 display opacity_1 overflow_hidden">

        <div id="component_modal_scroll_fixed_feature_1" class="width_100 height_100vh background_dark_yellow_3 float_left position_absolute bottom_0 left_0 display_none opacity_0 overflow_hidden">
        </div>
        
        <div id="component_modal_scroll_fixed_feature_2" class="width_100 height_100vh background_dark_yellow_2 float_left position_absolute bottom_0 left_0 display_none opacity_0 overflow_hidden">
        </div>

        <div id="component_modal_scroll_fixed_feature_bg" class="width_100 height_100vh background_dark_yellow_9 display_none float_left position_absolute bottom_0 left_0 overflow_hidden">
        </div>
        
        <div id="" class="fadeIn delay1 animated1">
          <div id="" class="fadeOut delay4 animated1">
            <div id="" class="fadeOut delay3 animated1">
            <div class="position_absolute left_0 top_0 right_0 bottom_0 margin_auto width_33 height_33 float_left">
              <div id="" class="position_absolute left_0 top_100 right_0 margin_auto width_100 height_100 float_left icon_dj_loading">
              </div>
            </div>
            <div class="position_absolute left_0 top_0 right_0 bottom_0 margin_auto width_33 height_33 float_left">
              <div id="icon_dj_animation" class="position_absolute left_0 top_0 bottom_0 right_0 margin_auto width_50 height_50 icon_dj_animation_1 float_left">
              </div>
            </div>
            </div>
          </div>
        </div>

        <div id="" class="fadeIn delay4 animated1">
          <div id="" class="fadeOut delay10 animated1">
            <div id="" class="position_absolute left_0 top_0 right_0 bottom_0 margin_auto width_33 height_33 overflow_hidden float_left gui_logo_combo_layers">
            </div>
          </div>
        </div>

      </div>

      <div id="component_content" class="fadeIn delay10 animated1">\

        <div class="width_100 height_100vh float_left position_relative display opacity_1 overflow_hidden">
       
          <div id="logo" class="position_absolute margin_auto float_left">
            
            <div id="" class="position_absolute right_0 bottom_0 right_0 top_0 left_0 margin_auto width_100 height_100 float_left gui_logo_combo_layers animated5 pulse infinite"></div>

            <div id="" class="position_absolute left_0 top_100 right_0 margin_auto width_100 float_left display_flex_flow">

              <div class="position_relative margin_auto float_left">

                <span id="enter_site" class="margin_auto padding_205vh_top padding_205vh_bottom position_relative float_left z_index_1 ">

                    <span class="margin_auto position_relative float_left z_index_1 display_flex_flow">

                      <div class=" width_205vh height_5vh float_left position_relative float_left margin_auto display_flex_flow">
                        <div class="gui_i width_100 height_100 float_left position_relative float_left margin_auto margin_auto">
                        </div>
                      </div>

                      <span class="margin_auto position_relative float_left top_0">

                      <span class="margin_auto position_relative float_left top_1vh">

                      <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_flex_flow  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">

                      <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_flex_flow border_025vh_dark_yellow_9 background_dark_yellow_0">

                      </span>

                      <span id="" class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">
                        enter site
                      </span>

                      <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">
                        <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">
                          <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">
                            <div class="calc_2vh_width margin_1vh position_relative float_left">
                              <p class="font_size_2vh line_height_205vh">
                              simple
                              </p>
                            </div>
                          </div>
                        </span>
                      </span>

                      </span>

                      </span>

                      </span>

                    </span>

                </span>

                <a href="#gui_content_component" class="margin_auto padding_205vh_top padding_205vh_bottom padding_105vh_left position_relative float_left z_index_1 ">

                    <span class="margin_auto position_relative float_left z_index_1 display_flex_flow">

                      <span class="margin_auto position_relative float_left top_0">

                      <span class="margin_auto position_relative float_left top_1vh">

                      <span class="position_relative hover_top_0 top_-1vh easing_01 width_100 text_align_center float_right display_flex_flow">

                      <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_flex_flow">

                      </span>

                      <span id="" class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">
                        or
                      </span>

                      <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">
                        <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">
                          <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">
                            <div class="calc_2vh_width margin_1vh position_relative float_left">
                              <p class="font_size_2vh line_height_205vh">
                              simple
                              </p>
                            </div>
                          </div>
                        </span>
                      </span>

                      </span>

                      </span>

                      </span>

                    </span>

                </a>

                <span id="learn_more" class="margin_auto padding_205vh_top padding_205vh_bottom position_relative float_left z_index_1 ">

                    <span class="margin_auto position_relative float_left z_index_1 display_flex_flow">

                      <div class=" width_205vh height_5vh float_left position_relative float_left margin_auto display_flex_flow">
                        <div class="gui_i width_100 height_100 float_left position_relative float_left margin_auto margin_auto">
                        </div>
                      </div>

                      <span class="margin_auto position_relative float_left top_0">

                      <span class="margin_auto position_relative float_left top_1vh">

                      <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_flex_flow  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">

                      <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_flex_flow border_025vh_dark_yellow_9 background_dark_yellow_0">

                      </span>

                      <span id="" class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">
                        learn more
                      </span>

                      <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">
                        <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">
                          <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">
                            <div class="calc_2vh_width margin_1vh position_relative float_left">
                              <p class="font_size_2vh line_height_205vh">
                              simple
                              </p>
                            </div>
                          </div>
                        </span>
                      </span>

                      </span>

                      </span>

                      </span>

                    </span>

                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

      <div id="component_content_scroll" class="fadeIn delay10 animated1 display">\
        
        <div class="z_index_1 gui_arrow_down width_10vh height_10vh position_absolute left_0 right_0 bottom_10vh margin_auto infinite pulse animated1"></div>
      
      </div>
    `;
  return element;
};

let element_dj_logo = () => {

  let element = `
    <div id="component" class="width_100 height_100vh float_left position_relative display opacity_1">\
    
      <div id="" class="fadeIn delay1 animated1">
        <div id="" class="fadeOut delay3 animated1">
        <div class="position_absolute left_0 top_0 right_0 bottom_0 margin_auto width_33 height_33 float_left">
          <div id="" class="position_absolute left_0 top_100 right_0 margin_auto width_100 height_100 float_left icon_dj_loading">
          </div>
        </div>
        <div class="position_absolute left_0 top_0 right_0 bottom_0 margin_auto width_33 height_33 float_left">
          <div id="icon_dj_animation" class="position_absolute left_0 top_0 bottom_0 right_0 margin_auto width_50 height_50 icon_dj_animation_1 float_left">
          </div>
        </div>
        </div>
      </div>

      <div id="" class="fadeIn delay4 animated1">

        <div id="" class="position_absolute left_0 right_0 bottom_0 margin_auto width_100 height_100 float_left gui_logo_dj_4">
        </div>

      </div>

      <div id="" class="fadeIn delay5 animated1">

        <div id="" class="position_absolute right_0 bottom_0 margin_auto width_50 height_50 float_left gui_logo_dj_5">
        </div>

      </div>

      <div id="" class="fadeIn delay6 animated1">

        <div id="" class="position_absolute left_-25 bottom_0 margin_auto width_100 height_100 float_left gui_logo_dj_6">
        </div>

      </div>

      <div id="" class="fadeIn delay7 animated1">

        <div id="" class="position_absolute right_0 left_0 bottom_0 margin_auto width_100 height_100 float_left gui_logo_dj_2">
        </div>

      </div>

      <div id="" class="fadeIn delay8 animated1">

        <div id="" class="position_absolute right_-25 bottom_-25 margin_auto width_74 height_74 float_left gui_logo_dj_3">
        </div>

      </div>

      <div id="dj_body" class="fadeIn delay9 animated1">
        <div id="" class="position_fixed left_0 bottom_0 margin_auto width_50 height_75 float_left gui_logo_dj_1 animated30 pulse infinite">
        </div>
      </div>

      <div id="dj_buttons" class="fadeIn delay10 animated1">
        <div id="" class="position_absolute right_0 bottom_0 right_0 top_-10 left_0 margin_auto width_50 height_33 float_left">
          
          <div id="" class="position_absolute right_0 bottom_0 right_0 top_0 left_0 margin_auto width_100 height_100 float_left gui_logo_dj_final animated5 pulse infinite"></div>

          <div id="" class="position_absolute right_0 bottom_0 right_0 top_0 left_0 margin_auto width_50 height_50 float_left gui_logo_dj_mark animated5 delay05 pulse infinite"></div>

          <div id="" class="position_absolute left_0 top_100 right_0 margin_auto width_100 height_100 float_left display_flex_flow">

            <div id="" class="position_relative margin_auto float_left">

              <span class="margin_auto position_relative float_left z_index_1 display_flex_flow">

                <span class="margin_auto position_relative float_left top_0">

                <span class="margin_auto position_relative float_left top_1vh">

                <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_flex_flow  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">

                <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_flex_flow border_025vh_dark_yellow_9 background_dark_yellow_0">

                </span>

                <span id="" class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">
                  enter site
                </span>

                <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">
                  <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">
                    <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">
                      <div class="calc_2vh_width margin_1vh position_relative float_left">
                        <p class="font_size_2vh line_height_205vh">
                        simple
                        </p>
                      </div>
                    </div>
                  </span>
                </span>

                </span>

                </span>

                </span>

              </span>

              <span class="margin_auto position_relative float_left z_index_1 width_1vh height_5vh display_flex_flow"></span>

              <span class="margin_auto position_relative float_left z_index_1 display_flex_flow">

                <span class="margin_auto position_relative float_left top_0">

                <span class="margin_auto position_relative float_left top_1vh">

                <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_flex_flow  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">

                <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_flex_flow border_025vh_dark_yellow_9 background_dark_yellow_0">

                </span>

                <span id="" class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">
                  learn more
                </span>

                <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">
                  <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">
                    <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">
                      <div class="calc_2vh_width margin_1vh position_relative float_left">
                        <p class="font_size_2vh line_height_205vh">
                        simple
                        </p>
                      </div>
                    </div>
                  </span>
                </span>

                </span>

                </span>

                </span>

              </span>

            </div>

          </div>

        </div>

      </div>

      <div id="" class="fadeIn delay10 animated1">
        <div class="position_absolute top_0 right_0 margin_auto float_right z_index_7 display_flex_flow">

          <span class="margin_auto padding_205vh position_relative float_left z_index_1 ">

              <div id="" class="gui_i width_5vh height_5vh float_left position_relative float_left margin_auto margin_1vh_left">
              </div>

              <div id="" class="gui_circle width_5vh height_5vh float_left position_relative float_left margin_auto margin_1vh_left">
              </div>

              <span class="margin_auto margin_1vh_left position_relative float_left z_index_1 display_flex_flow">

                <span class="margin_auto position_relative float_left top_0">

                <span class="margin_auto position_relative float_left top_1vh">

                <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_flex_flow  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">

                <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_flex_flow border_025vh_dark_yellow_9 background_dark_yellow_0">

                </span>

                <span id="" class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">
                  Book Me
                </span>

                <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">
                  <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">
                    <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">
                      <div class="calc_2vh_width margin_1vh position_relative float_left">
                        <p class="font_size_2vh line_height_205vh">
                        simple
                        </p>
                      </div>
                    </div>
                  </span>
                </span>

                </span>

                </span>

                </span>

              </span>

           </span>

        </div>
      </div>

    </div>


    `;

  return element;
};

let element_content_card = () => {
  let component = '\
  \
            <div class="display_flex_flow width_100 height_100vh float_left position_relative background_light_yellow_9 color_dark_yellow_9">\
              \
              <div class="display_flex_flow width_100 height_100 float_left position_absolute left_0 right_0 bottom_100">\
                \
                <div class="display_flex_flow calc_25vh box_shadow_bottom_left_1vh_dark float_left position_absolute left_0 right_0 bottom_0 margin_auto background_light_yellow_9">\
                   \
                   <div class="display_flex_flow width_100 float_left position_relative">\
                      \
                      <div class="float_left position_relative">\
                         \
                         <div class="display_flex_flow width_100 float_left position_relative">\
                            loading\
                         </div>\
                         \
                         <div class="display_flex_flow width_100 float_left position_relative">\
                            \
                            <div class="display_flex_flow float_left position_relative padding_05vh">\
                               [yes]\
                            </div>\
                            \
                            <div class="display_flex_flow float_left position_relative padding_05vh">\
                               no\
                            </div>\
                            \
                         </div>\
                         \
                      </div>\
                      \
                   </div>\
                   \
                </div>\
                \
              </div>\
              \
              <div class="display_flex_flow width_100 height_100 box_shadow_bottom_left_1vh_dark float_left position_absolute bottom_0 left_0 right_0 margin_auto background_light_yellow_9">\
                 \
                 <div class="display_flex_flow width_100 float_left position_relative">\
                    \
                    <div class="float_left position_relative">\
                       \
                       <div class="display_flex_flow width_100 float_left position_relative">\
                          loading\
                       </div>\
                       \
                       <div class="display_flex_flow width_100 float_left position_relative">\
                          \
                          <div class="display_flex_flow float_left position_relative padding_05vh">\
                             [yes]\
                          </div>\
                          \
                          <div class="display_flex_flow float_left position_relative padding_05vh">\
                             no\
                          </div>\
                          \
                       </div>\
                       \
                    </div>\
                    \
                 </div>\
                 \
              </div>\
              \
            </div>\
            \
            ';

  return component;
};

let element_spaced_color = () => {
  let component = '\
  \
            <div class="display_flex_flow width_100 height_100vh float_left position_relative background_light_yellow_9 color_light_yellow_9">\
              \
              <div class="display_flex_flow calc_10vh box_shadow_bottom_left_1vh_dark border_01vh_dark_yellow_9 float_left position_relative background_light_yellow_0 color_light_yellow_9">\
                 \
                 <div class="display_flex_flow width_100 float_left position_relative">\
                    \
                    <div class="float_left position_relative">\
                       \
                       <div class="display_flex_flow width_100 float_left position_relative color_light_yellow_9">\
                          loading\
                       </div>\
                       \
                       <div class="display_flex_flow width_100 float_left position_relative">\
                          \
                          <div class="display_flex_flow float_left position_relative color_light_yellow_9 padding_05vh">\
                             [yes]\
                          </div>\
                          \
                          <div class="display_flex_flow float_left position_relative color_light_yellow_9 padding_05vh">\
                             no\
                          </div>\
                          \
                       </div>\
                       \
                    </div>\
                    \
                 </div>\
                 \
              </div>\
              \
            </div>\
            \
            ';

  return component;
};

let element_content_loading = () => {
  let component = '\
  \
            <div class="display_flex_flow width_100 height_100vh float_left position_relative background_black color_light_yellow_9">\
              \
              <div class="display_flex_flow calc_10vh box_shadow_bottom_left_1vh_light_yellow_1 border_01vh_light_yellow_0 float_left position_relative background_black color_light_yellow_9">\
                 \
                 <div class="display_flex_flow width_100 float_left position_relative">\
                    \
                    <div class="float_left position_relative">\
                       \
                       <div class="display_flex_flow width_100 float_left position_relative color_light_yellow_9">\
                          loading\
                       </div>\
                       \
                       <div class="display_flex_flow width_100 float_left position_relative">\
                          \
                          <div class="display_flex_flow float_left position_relative color_light_yellow_9 padding_05vh">\
                             [yes]\
                          </div>\
                          \
                          <div class="display_flex_flow float_left position_relative color_light_yellow_9 padding_05vh">\
                             no\
                          </div>\
                          \
                       </div>\
                       \
                    </div>\
                    \
                 </div>\
                 \
              </div>\
              \
            </div>\
            \
            ';

  return component;
};

let element_content_loading_scrolling = () => {
  let component = '\
  \
            <div class="display_flex_flow width_100 height_100vh float_left position_relative background_black color_light_yellow_9">\
              \
              <div class="display_flex_flow calc_10vh box_shadow_bottom_left_1vh_light_yellow_1 border_01vh_light_yellow_0 float_left position_relative background_black color_light_yellow_9">\
            <div class="position_relative height_100 width_100 float_left overflow_hidden">\
               \
               \
               <ul class="position_relative height_100 width_100 float_left border_top_01vh_dark_yellow_9">\
                  \
                  ' + element_scroll_y_scrollbar(element_list_items([{
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }])) + '\
                  \
               </ul>\
               \
            </div>\
            \
            <div class="position_relative height_100vh width_100 float_left">\
               \
               \
               <div class="position_relative calc_02vh_height width_100 float_left border_top_01vh_dark_yellow_9 border_bottom_01vh_dark_yellow_9">\
                  \
               </div>\
               \
               \
            </div>\
            \
              </div>\
              \
            </div>\
            \
            ';

  return component;
};

let element_content_scrolling = () => {
  let component = '\
  \
  \
            <div class="position_relative height_100 width_100 float_left overflow_hidden">\
               \
               \
               <ul class="position_relative height_100 width_100 float_left border_top_01vh_dark_yellow_9">\
                  \
                  ' + element_scroll_y_scrollbar(element_list_items([{
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }])) + '\
                  \
               </ul>\
               \
            </div>\
            \
            ';

  return component;
};

let element_center_content = x => {
  let component = '\
  \
  <div class="display_flex_flow width_100 height_100vh float_left position_relative">\
  ' + x + '\
  </div>\
  \
  ';

  return component;
};

let element_list_items = array => {

  let items = '';
  for (var i = 0; i < array.length; i++) {

    items += '\
        ' + element_list_item(array[i].link) + '\
      ';
  };

  return items;
};

let element_list_item = info => {

  let random_int = randomizer();

  let element = '\
      <li class="position_relative height_10vh width_100 float_left margin_auto background_light_yellow_0 border_bottom_01vh_dark_yellow_9">\
      \
        <div class="position_relative height_10vh width_10vh float_left overflow_hidden margin_auto">\
          <div class="position_absolute top_0 left_0 right_0 bottom_0 calc_1vh overflow_hidden border_radius_circle border_01vh_dark_yellow_9 background_light_yellow_9 z_index_1 margin_auto">\
          \
          </div>\
        </div>\
        \
        <a id="element_list_item' + random_int + '" class="hover_show position_relative float_left overflow_hidden margin_auto line_height_10vh font_size_10vh text_shadow_01vh_dark_yellow_1 color-dark-yellow-9">\
          ' + info + '\
        </a>\
        \
        <a id="element_list_item' + random_int + '" class="hover_show position_relative float_left overflow_hidden margin_auto line_height_10vh font_size_5vh text_shadow_01vh_dark_yellow_1 color-dark-yellow-9">\
          ' + info + '\
        </a>\
        \
        <a id="element_list_item' + random_int + '" class="hover_show position_relative float_left overflow_hidden margin_auto line_height_10vh font_size_205vh text_shadow_01vh_dark_yellow_1 color-dark-yellow-9">\
          ' + info + '\
        </a>\
        \
        <a id="element_list_item' + random_int + '" class="hover_show position_relative float_left overflow_hidden margin_auto line_height_10vh font_size_2vh text_shadow_01vh_dark_yellow_1 color-dark-yellow-9">\
          ' + info + '\
        </a>\
        \
      </li>\
    ';

  // add event listeners
  setTimeout(() => {

    if (document.getElementById('element_list_item' + random_int) != null) {
      document.getElementById('element_list_item' + random_int).addEventListener("click", function (event) {
        alert('yes');
      });
    };
  }, 1000);

  return element;
};

let component_keystroke_annotate_new = (x, y) => {
  let component = '\
      <span class="margin_auto position_relative margin_05vh_left margin_05vh_right margin_1vh_bottom float_left top_0 z_index_1 font_pixel">\
      <span class="margin_auto position_relative float_left top_0">\
      <span class="margin_auto position_relative float_left top_1vh">\
      <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_flex_flow  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
      \
      <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_flex_flow border_025vh_dark_yellow_9 background_dark_yellow_0">\
      \
      </span>\
      \
      <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
      ' + x + '\
      </span>\
      \
      <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
        <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
          <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">\
            <div class="calc_2vh_width margin_1vh position_relative float_left">\
              <p class="font_size_2vh line_height_205vh">\
              ' + y + '\
              </p>\
            </div>\
          </div>\
        </span>\
      </span>\
      \
      </span>\
      </span>\
      </span>\
      </span>\
    ';

  return component;
};

let element_time = () => {
  let component = '\
    <h1 id="time" class="font_size_205vh line_height_5vh">Request</h1>\
  ';

  return component;
};

let element_gradient = info => {
  let element = '\
  <div class="width_100 height_100vh float_left position_relative ' + info + '">\
  \
  </div>\
  ';
  return element;
};

let element_form_filter_1 = () => {
  let component = `

    <form class="position_relative width_100 float_left">
       <input id="element_input_sort" placeholder="search" class="padding_1vh calc_2vh" value="likesup" type="text" name=""/>
    </form>
    
    
    <form class="position_relative width_100 float_left">
       <input id="element_input_view" placeholder="search" class="padding_1vh calc_2vh" value="card" type="text" name=""/>
    </form>
    
    
    <form class="position_relative width_100 float_left">
       <input id="element_input_type" placeholder="search" class="padding_1vh calc_2vh" value="gallery" type="text" name=""/>
    </form>
    
    
    <form class="position_relative width_100 float_left">
       <input id="element_input_filter" placeholder="search" class="padding_1vh calc_2vh" type="text" name=""/>
    </form>
    
  `;

  return component;
};

let element_form_filter_2 = () => {
  let component = `

    <form class="position_relative width_100 float_left">
       <input id="element_input_sort" placeholder="search" class="padding_1vh calc_2vh" value="likesup" type="text" name=""/>
    </form>
    
    
    <form class="position_relative width_100 float_left">
       <input id="element_input_view" placeholder="search" class="padding_1vh calc_2vh" value="card" type="text" name=""/>
    </form>
    
    
    <form class="position_relative width_100 float_left">
       <input id="element_input_type" placeholder="search" class="padding_1vh calc_2vh" value="gallery" type="text" name=""/>
    </form>
    
    
    <form class="position_relative width_100 float_left">
       <input id="element_input_filter" placeholder="search" class="padding_1vh calc_2vh" type="text" name=""/>
    </form>
    
  `;

  return component;
};

let element_form_filter_3 = () => {
  let component = `

    <form class="position_relative width_100 float_left">
       <input id="element_input_sort" placeholder="search" class="padding_1vh calc_2vh" value="likesup" type="text" name=""/>
    </form>
    
    
    <form class="position_relative width_100 float_left">
       <input id="element_input_view" placeholder="search" class="padding_1vh calc_2vh" value="card" type="text" name=""/>
    </form>
    
    
    <form class="position_relative width_100 float_left">
       <input id="element_input_type" placeholder="search" class="padding_1vh calc_2vh" value="gallery" type="text" name=""/>
    </form>
    
    
    <form class="position_relative width_100 float_left">
       <input id="element_input_filter" placeholder="search" class="padding_1vh calc_2vh" type="text" name=""/>
    </form>
    
  `;

  return component;
};

let element_gui_scroll_y = () => {

  let anchor = 0;
  let random_int = randomizer();

  let check_element = () => {

    document.getElementById('anchor').innerHTML = anchor;

    if (anchor == 0) {
      document.getElementById('component_app_gui_scroll_y_fold_content').innerHTML = anchors;
      document.getElementById('component_app_gui_scroll_y_content').innerHTML = default_content;

      from_index.Handle_Firebase_Refs_and_Render();
    };

    if (anchor == 1) {
      document.getElementById('component_app_gui_scroll_y_fold_content').innerHTML = '1';
      document.getElementById('component_app_gui_scroll_y_content').innerHTML = default_content_1;
    };

    if (anchor == 2) {
      document.getElementById('component_app_gui_scroll_y_fold_content').innerHTML = '2';
      document.getElementById('component_app_gui_scroll_y_content').innerHTML = default_content_2;
    };

    if (anchor == 3) {
      document.getElementById('component_app_gui_scroll_y_fold_content').innerHTML = '\
          \
          \
        ';
      document.getElementById('component_app_gui_scroll_y_content').innerHTML = '';
    };
  };

  let default_content = '\
      \
      ' + element_gradient('gradient_light_yellow_0_bottom') + '\
      \
      ' + element_container('\
        \
        ' + element_container('\
            \
            ' + element_title('feature: dj') + '\
            \
            ' + element_container('\
              \
              <div class="calc_10vh margin_5vh position_relative float_left display_flex_flow">\
                  \
                  <div class="width_100 height_100 position_relative float_left display_flex_flow">\
                      <div class="calc_10vh position_relative float_left photo_dj1 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
                          \
                          <div class="position_absolute bottom_0 left_0 float_left display_flex_flow">\
                              <div class="position_relative float_left background-light-yellow-0 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
                                  <p class="font_size_205vh padding_205vh position_relative float_left">top100</p>\
                              </div>\
                          </div>\
                          \
                      </div>\
                      \
                  </div>\
                  \
              </div>\
              \
              ', 'calc_4vh padding_1vh margin_1vh float_left position_relative border_01vh_dark_yellow_9 background_light_yellow_9') + '\
          \
        ', 'width_100 height_100vh float_left position_relative background_light_yellow_0') + '\
        \
        ' + element_container('\
            \
            ' + element_container('\
              \
              <div class="position_relative background_light_yellow_9 margin_auto width_100 height_5vh float_right">\
                \
                <div class="position_relative margin_auto height_5vh float_left padding_1vh_left padding_1vh_right">\
                  \
                  <div class="position_relative margin_auto height_5vh width_5vh float_left display_flex_flow">\
                    \
                    <div id="" class="gui_i width_50 height_50 float_left position_relative float_left margin_auto">\
                    </div>\
                    \
                  </div>\
                  \
                  <a id="" class="position_relative margin_auto font_size_205vh line_height_5vh text_align_center float_left">\
                    Home\
                  </a>\
                  \
                </div>\
                \
                <div class="position_relative margin_auto height_5vh float_left padding_1vh_left padding_1vh_right">\
                  \
                  <a id="" class="position_relative margin_auto font_size_205vh line_height_5vh text_align_center float_left">\
                    Search\
                  </a>\
                  \
                </div>\
                \
                <div class="position_relative margin_auto height_5vh float_left padding_1vh_left padding_1vh_right">\
                  \
                  <a id="" class="position_relative margin_auto font_size_205vh line_height_5vh text_align_center float_left">\
                    About\
                  </a>\
                  \
                </div>\
                \
                <div class="position_relative margin_auto height_5vh float_left padding_1vh_left padding_1vh_right">\
                  \
                  <a id="" class="position_relative margin_auto font_size_205vh line_height_5vh text_align_center float_left">\
                    Hire\
                  </a>\
                  \
                </div>\
                \
                <div class="position_relative margin_auto height_5vh float_left padding_1vh_left padding_1vh_right">\
                  \
                  <a id="" class="position_relative margin_auto font_size_205vh line_height_5vh text_align_center float_left">\
                    Contact\
                  </a>\
                  \
                </div>\
                \
                <div class="position_relative margin_auto width_5vh height_5vh float_right display_flex_flow">\
                  \
                  <div id="" class="gui_i width_50 height_50 float_left position_relative float_left margin_auto">\
                  </div>\
                  \
                </div>\
                \
                <div class="position_relative margin_auto width_5vh height_5vh float_right display_flex_flow">\
                  \
                  <div id="" class="gui_i width_50 height_50 float_left position_relative float_left margin_auto">\
                  </div>\
                  \
                </div>\
                \
                <div class="position_relative margin_auto width_5vh height_5vh float_right display_flex_flow">\
                  \
                  <div id="" class="gui_i width_50 height_50 float_left position_relative float_left margin_auto">\
                  </div>\
                  \
                </div>\
                \
              </div>\
              \
              ', 'width_100 float_left position_relative border_01vh_dark_yellow_9 background_light_yellow_9') + '\
          \
        ', 'width_100 float_left position_relative') + '\
        \
        ' + element_container('\
            \
            ' + element_title('feature: start gnougn') + '\
            \
            ' + element_container('\
              \
              <div class="calc_10vh margin_5vh position_relative float_left display_flex_flow">\
                  \
                  <div class="width_100 height_100 position_relative float_left display_flex_flow">\
                      <div class="calc_10vh position_relative float_left photo_person1 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
                          \
                          <div class="position_absolute bottom_0 left_0 float_left display_flex_flow">\
                              <div class="position_relative float_left background-light-yellow-0 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
                                  <p class="font_size_205vh padding_205vh position_relative float_left">top100</p>\
                              </div>\
                          </div>\
                          \
                      </div>\
                      \
                  </div>\
                  \
              </div>\
              \
              ', 'calc_4vh padding_1vh margin_1vh float_left position_relative border_01vh_dark_yellow_9 background_light_yellow_9') + '\
          \
        ', 'width_100 height_100vh float_left position_relative background_light_yellow_0') + '\
        \
        ' + element_container('\
            \
            ' + element_title('feature: element_slider_1') + '\
            \
            ' + element_container('\
            \
            ' + element_slider_1() + '\
          \
          ', 'calc_4vh padding_1vh margin_1vh float_left position_relative border_01vh_dark_yellow_9 background_light_yellow_9') + '\
          \
        ', 'width_33 float_left position_relative background_light_yellow_0') + '\
        \
        ' + element_container('\
              \
              ' + element_title('feature: element_slider_2') + '\
          \
            ' + element_container('\
              \
              ' + element_slider_2() + '\
              \
              ', 'calc_4vh padding_1vh margin_1vh float_left position_relative border_01vh_dark_yellow_9 background_light_yellow_9') + '\
            \
          ', 'width_33 float_left position_relative background_light_yellow_0') + '\
        \
        ' + element_container('\
              \
              ' + element_title('feature: element_slider_3') + '\
          \
            ' + element_container('\
              \
              ' + element_slider_3() + '\
              \
              ', 'calc_4vh padding_1vh margin_1vh float_left position_relative border_01vh_dark_yellow_9 background_light_yellow_9') + '\
            \
          ', 'width_33 float_left position_relative background_light_yellow_0') + '\
        \
        ' + element_container('\
              \
              ' + element_title('feature: element_slider_4') + '\
          \
            ' + element_container('\
              \
              ' + element_slider_4() + '\
              \
              ', 'calc_4vh padding_1vh margin_1vh float_left position_relative border_01vh_dark_yellow_9 background_light_yellow_9') + '\
            \
          ', 'width_33 float_left position_relative background_light_yellow_0') + '\
        \
        ' + element_container('\
          \
          ' + element_title('feature: element_slider_5') + '\
          \
            ' + element_container('\
              \
              ' + element_slider_5() + '\
              \
              ', 'calc_4vh padding_1vh margin_1vh float_left position_relative border_01vh_dark_yellow_9 background_light_yellow_9') + '\
            \
          ', 'width_33 float_left position_relative background_light_yellow_0') + '\
        \
        ' + element_container('\
          \
          ' + element_title('feature: element_slider_6') + '\
          \
            ' + element_container('\
              \
              ' + element_slider_6() + '\
              \
              ', 'calc_4vh padding_1vh margin_1vh float_left position_relative border_01vh_dark_yellow_9 background_light_yellow_9') + '\
            \
          ', 'width_33 float_left position_relative background_light_yellow_0') + '\
        \
        ' + element_container('\
          \
          ' + element_title('feature: element_slider_7') + '\
          \
            ' + element_container('\
              \
              ' + element_slider_7() + '\
              \
              ', 'calc_4vh padding_1vh margin_1vh float_left position_relative border_01vh_dark_yellow_9 background_light_yellow_9') + '\
            \
          ', 'width_33 float_left position_relative background_light_yellow_0') + '\
        \
        ' + element_container('\
              \
              ' + element_title('feature: element_time') + '\
          \
            ' + element_container('\
              \
              ' + element_time() + '\
              \
              ', 'calc_4vh padding_1vh margin_1vh float_left position_relative border_01vh_dark_yellow_9 background_light_yellow_9') + '\
            \
          ', 'width_33 float_left position_relative background_light_yellow_0') + '\
        \
        ' + element_title('feature: transforms', 'width_100 text_align_center font_size_10vh line_height_10vh background-white border_top_01vh_dark_yellow_9 border_bottom_01vh_dark_yellow_9', 'feature: transforms') + '\
        \
        <div id="component_transform_1" class="overflow_hidden width_100 height_50vh position_relative float_left background-light-yellow-9 display_flex_flow">\
            \
            \
            <div id="" class="overflow_hidden width_25 height_100 position_relative float_left background-light-yellow-9 display_flex_flow">\
                \
                <div class="top0 left0 easing_1 width_100 height_100 position_absolute float_left background-light-yellow-9 display_flex_flow">\
                    \
                    <div class="calc_10vh margin_5vh position_relative float_left display_flex_flow">\
                        \
                        <div class="width_100 height_100 position_relative float_left display_flex_flow">\
                            <div class="calc_10vh position_relative float_left photo_person1 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
                                \
                                <div class="position_absolute bottom_0 left_0 float_left display_flex_flow">\
                                    <div class="position_relative float_left background-light-yellow-0 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
                                        <p class="font_size_205vh padding_205vh position_relative float_left">top100</p>\
                                    </div>\
                                </div>\
                                \
                            </div>\
                            \
                        </div>\
                        \
                    </div>\
                    \
                </div>\
                 \
                <div class="transform_translate3d_top_0_hover transform_translate3d_top100 easing_1 width_100 height_100 position_absolute float_left background-light-yellow-9 display_flex_flow">\
                    \
                    <div class="calc_10vh margin_5vh position_relative float_left display_flex_flow">\
                        \
                        <div class="width_100 height_100 position_relative float_left display_flex_flow">\
                            <div class="calc_10vh position_relative float_left photo_person1 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
                                \
                                <div class="position_absolute bottom_0 left_0 float_left display_flex_flow">\
                                    <div class="position_relative float_left background-light-yellow-0 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
                                        <p class="font_size_205vh padding_205vh position_relative float_left">top100</p>\
                                    </div>\
                                </div>\
                                \
                            </div>\
                            \
                        </div>\
                        \
                    </div>\
                    \
                </div>\
                \
            </div>\
            \
            \
            <div id="route_firebase" class="overflow_hidden width_25 height_100 position_relative float_left background-light-yellow-9 display_flex_flow">\
                \
                <div class="top0 left0 easing_1 width_100 height_100 position_absolute float_left background-light-yellow-9 display_flex_flow">\
                    \
                    <div class="calc_10vh margin_5vh position_relative float_left display_flex_flow">\
                        \
                        <div class="width_100 height_100 position_relative float_left display_flex_flow">\
                            <div class="calc_10vh position_relative float_left photo_person1 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
                                \
                                <div class="position_absolute bottom_0 left_0 float_left display_flex_flow">\
                                    <div class="position_relative float_left background-light-yellow-0 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
                                        <p class="font_size_205vh padding_205vh position_relative float_left">top100</p>\
                                    </div>\
                                </div>\
                                \
                            </div>\
                            \
                        </div>\
                        \
                    </div>\
                    \
                </div>\
                 \
                <div class="transform_translate3d_top_0_hover transform_translate3d_top100 easing_1 width_100 height_100 position_absolute float_left background-light-yellow-9 display_flex_flow">\
                    \
                    <div class="calc_10vh margin_5vh position_relative float_left display_flex_flow">\
                        \
                        <div class="width_100 height_100 position_relative float_left display_flex_flow">\
                            <div class="calc_10vh position_relative float_left photo_person1 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
                                \
                                <div class="position_absolute bottom_0 left_0 float_left display_flex_flow">\
                                    <div class="position_relative float_left background-light-yellow-0 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
                                        <p class="font_size_205vh padding_205vh position_relative float_left">top100</p>\
                                    </div>\
                                </div>\
                                \
                            </div>\
                            \
                        </div>\
                        \
                    </div>\
                    \
                </div>\
                \
            </div>\
            \
            \
            <div id="route_firebase" class="overflow_hidden width_25 height_100 position_relative float_left background-light-yellow-9 display_flex_flow">\
                \
                <div class="top0 left0 easing_1 width_100 height_100 position_absolute float_left background-light-yellow-9 display_flex_flow">\
                    \
                    <div class="calc_10vh margin_5vh position_relative float_left display_flex_flow">\
                        \
                        <div class="width_100 height_100 position_relative float_left display_flex_flow">\
                            <div class="calc_10vh position_relative float_left photo_person1 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
                                \
                                <div class="position_absolute bottom_0 left_0 float_left display_flex_flow">\
                                    <div class="position_relative float_left background-light-yellow-0 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
                                        <p class="font_size_205vh padding_205vh position_relative float_left">top100</p>\
                                    </div>\
                                </div>\
                                \
                            </div>\
                            \
                        </div>\
                        \
                    </div>\
                    \
                </div>\
                 \
                <div class="transform_translate3d_top_0_hover transform_translate3d_top100 easing_1 width_100 height_100 position_absolute float_left background-light-yellow-9 display_flex_flow">\
                    \
                    <div class="calc_10vh margin_5vh position_relative float_left display_flex_flow">\
                        \
                        <div class="width_100 height_100 position_relative float_left display_flex_flow">\
                            <div class="calc_10vh position_relative float_left photo_person1 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
                                \
                                <div class="position_absolute bottom_0 left_0 float_left display_flex_flow">\
                                    <div class="position_relative float_left background-light-yellow-0 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
                                        <p class="font_size_205vh padding_205vh position_relative float_left">top100</p>\
                                    </div>\
                                </div>\
                                \
                            </div>\
                            \
                        </div>\
                        \
                    </div>\
                    \
                </div>\
                \
            </div>\
            \
            \
            <div id="route_firebase" class="overflow_hidden width_25 height_100 position_relative float_left background-light-yellow-9 display_flex_flow">\
                \
                <div class="top0 left0 easing_1 width_100 height_100 position_absolute float_left background-light-yellow-9 display_flex_flow">\
                    \
                    <div class="calc_10vh margin_5vh position_relative float_left display_flex_flow">\
                        \
                        <div class="width_100 height_100 position_relative float_left display_flex_flow">\
                            <div class="calc_10vh position_relative float_left photo_person1 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
                                \
                                <div class="position_absolute bottom_0 left_0 float_left display_flex_flow">\
                                    <div class="position_relative float_left background-light-yellow-0 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
                                        <p class="font_size_205vh padding_205vh position_relative float_left">top100</p>\
                                    </div>\
                                </div>\
                                \
                            </div>\
                            \
                        </div>\
                        \
                    </div>\
                    \
                </div>\
                 \
                <div class="transform_translate3d_top_0_hover transform_translate3d_top100 easing_1 width_100 height_100 position_absolute float_left background-light-yellow-9 display_flex_flow">\
                    \
                    <div class="calc_10vh margin_5vh position_relative float_left display_flex_flow">\
                        \
                        <div class="width_100 height_100 position_relative float_left display_flex_flow">\
                            <div class="calc_10vh position_relative float_left photo_person1 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
                                \
                                <div class="position_absolute bottom_0 left_0 float_left display_flex_flow">\
                                    <div class="position_relative float_left background-light-yellow-0 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
                                        <p class="font_size_205vh padding_205vh position_relative float_left">top100</p>\
                                    </div>\
                                </div>\
                                \
                            </div>\
                            \
                        </div>\
                        \
                    </div>\
                    \
                </div>\
                \
            </div>\
            \
            \
        </div>\
        \
        <div id="component_transform_2" class="overflow_hidden width_100 height_100vh position_relative float_left background-light-yellow-9">\
            \
            \
            <div id="route_firebase" class="overflow_hidden width_100 height_25 position_relative float_left background-light-yellow-9 display_flex_flow">\
                \
                <div class="top0 left0 easing_1 width_100 height_100 position_absolute float_left background-light-yellow-9 display_flex_flow">\
                    \
                    <div class="calc_10vh margin_5vh position_relative float_left display_flex_flow">\
                        \
                        <div class="width_100 height_100 position_relative float_left display_flex_flow">\
                            <div class="calc_10vh position_relative float_left photo_person1 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
                                \
                                <div class="position_absolute bottom_0 left_0 float_left display_flex_flow">\
                                    <div class="position_relative float_left background-light-yellow-0 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
                                        <p class="font_size_205vh padding_205vh position_relative float_left">top100</p>\
                                    </div>\
                                </div>\
                                \
                            </div>\
                            \
                        </div>\
                        \
                    </div>\
                    \
                </div>\
                 \
                <div class="transform_translate3d_left0_hover transform_translate3d_left100 easing_1 width_100 height_100 position_absolute float_left background-light-yellow-9 display_flex_flow">\
                    \
                    <div class="calc_10vh margin_5vh position_relative float_left display_flex_flow">\
                        \
                        <div class="width_100 height_100 position_relative float_left display_flex_flow">\
                            <div class="calc_10vh position_relative float_left photo_person1 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
                                \
                                <div class="position_absolute bottom_0 left_0 float_left display_flex_flow">\
                                    <div class="position_relative float_left background-light-yellow-0 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
                                        <p class="font_size_205vh padding_205vh position_relative float_left">top100</p>\
                                    </div>\
                                </div>\
                                \
                            </div>\
                            \
                        </div>\
                        \
                    </div>\
                    \
                </div>\
                \
            </div>\
            \
            \
            <div id="route_firebase" class="overflow_hidden width_100 height_25 position_relative float_left background-light-yellow-9 display_flex_flow">\
                \
                <div class="top0 left0 easing_1 width_100 height_100 position_absolute float_left background-light-yellow-9 display_flex_flow">\
                    \
                    <div class="calc_10vh margin_5vh position_relative float_left display_flex_flow">\
                        \
                        <div class="width_100 height_100 position_relative float_left display_flex_flow">\
                            <div class="calc_10vh position_relative float_left photo_person1 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
                                \
                                <div class="position_absolute bottom_0 left_0 float_left display_flex_flow">\
                                    <div class="position_relative float_left background-light-yellow-0 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
                                        <p class="font_size_205vh padding_205vh position_relative float_left">top100</p>\
                                    </div>\
                                </div>\
                                \
                            </div>\
                            \
                        </div>\
                        \
                    </div>\
                    \
                </div>\
                 \
                <div class="transform_translate3d_left0_hover transform_translate3d_left100 easing_1 width_100 height_100 position_absolute float_left background-light-yellow-9 display_flex_flow">\
                    \
                    <div class="calc_10vh margin_5vh position_relative float_left display_flex_flow">\
                        \
                        <div class="width_100 height_100 position_relative float_left display_flex_flow">\
                            <div class="calc_10vh position_relative float_left photo_person1 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
                                \
                                <div class="position_absolute bottom_0 left_0 float_left display_flex_flow">\
                                    <div class="position_relative float_left background-light-yellow-0 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
                                        <p class="font_size_205vh padding_205vh position_relative float_left">top100</p>\
                                    </div>\
                                </div>\
                                \
                            </div>\
                            \
                        </div>\
                        \
                    </div>\
                    \
                </div>\
                \
            </div>\
            \
            \
            <div id="route_firebase" class="overflow_hidden width_100 height_25 position_relative float_left background-light-yellow-9 display_flex_flow">\
                \
                <div class="top0 left0 easing_1 width_100 height_100 position_absolute float_left background-light-yellow-9 display_flex_flow">\
                    \
                    <div class="calc_10vh margin_5vh position_relative float_left display_flex_flow">\
                        \
                        <div class="width_100 height_100 position_relative float_left display_flex_flow">\
                            <div class="calc_10vh position_relative float_left photo_person1 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
                                \
                                <div class="position_absolute bottom_0 left_0 float_left display_flex_flow">\
                                    <div class="position_relative float_left background-light-yellow-0 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
                                        <p class="font_size_205vh padding_205vh position_relative float_left">top100</p>\
                                    </div>\
                                </div>\
                                \
                            </div>\
                            \
                        </div>\
                        \
                    </div>\
                    \
                </div>\
                 \
                <div class="transform_translate3d_left0_hover transform_translate3d_left100 easing_1 width_100 height_100 position_absolute float_left background-light-yellow-9 display_flex_flow">\
                    \
                    <div class="calc_10vh margin_5vh position_relative float_left display_flex_flow">\
                        \
                        <div class="width_100 height_100 position_relative float_left display_flex_flow">\
                            <div class="calc_10vh position_relative float_left photo_person1 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
                                \
                                <div class="position_absolute bottom_0 left_0 float_left display_flex_flow">\
                                    <div class="position_relative float_left background-light-yellow-0 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
                                        <p class="font_size_205vh padding_205vh position_relative float_left">top100</p>\
                                    </div>\
                                </div>\
                                \
                            </div>\
                            \
                        </div>\
                        \
                    </div>\
                    \
                </div>\
                \
            </div>\
            \
            \
            <div id="route_firebase" class="overflow_hidden width_100 height_25 position_relative float_left background-light-yellow-9 display_flex_flow">\
                \
                <div class="top0 left0 easing_1 width_100 height_100 position_absolute float_left background-light-yellow-9 display_flex_flow">\
                    \
                    <div class="calc_10vh margin_5vh position_relative float_left display_flex_flow">\
                        \
                        <div class="width_100 height_100 position_relative float_left display_flex_flow">\
                            <div class="calc_10vh position_relative float_left photo_person1 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
                                \
                                <div class="position_absolute bottom_0 left_0 float_left display_flex_flow">\
                                    <div class="position_relative float_left background-light-yellow-0 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
                                        <p class="font_size_205vh padding_205vh position_relative float_left">top100</p>\
                                    </div>\
                                </div>\
                                \
                            </div>\
                            \
                        </div>\
                        \
                    </div>\
                    \
                </div>\
                 \
                <div class="transform_translate3d_left0_hover transform_translate3d_left100 easing_1 width_100 height_100 position_absolute float_left background-light-yellow-9 display_flex_flow">\
                    \
                    <div class="calc_10vh margin_5vh position_relative float_left display_flex_flow">\
                        \
                        <div class="width_100 height_100 position_relative float_left display_flex_flow">\
                            <div class="calc_10vh position_relative float_left photo_person1 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
                                \
                                <div class="position_absolute bottom_0 left_0 float_left display_flex_flow">\
                                    <div class="position_relative float_left background-light-yellow-0 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
                                        <p class="font_size_205vh padding_205vh position_relative float_left">top100</p>\
                                    </div>\
                                </div>\
                                \
                            </div>\
                            \
                        </div>\
                        \
                    </div>\
                    \
                </div>\
                \
            </div>\
            \
            \
        </div>\
        \
        <div id="component_transform_3" class="overflow_hidden width_50 height_50vh position_relative float_left background-light-yellow-9 display_flex_flow">\
            \
            <div class="top0 left0 easing_1 width_100 height_100 position_absolute float_left background-light-yellow-9 display_flex_flow">\
                \
                <div class="calc_10vh margin_5vh position_relative float_left display_flex_flow">\
                    \
                    <div class="width_100 height_100 position_relative float_left display_flex_flow">\
                        <div class="calc_10vh position_relative float_left photo_person1 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
                            \
                            <div class="position_absolute bottom_0 left_0 float_left display_flex_flow">\
                                <div class="position_relative float_left background-light-yellow-0 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
                                    <p class="font_size_205vh padding_205vh position_relative float_left">top100</p>\
                                </div>\
                            </div>\
                            \
                        </div>\
                        \
                    </div>\
                    \
                </div>\
                \
            </div>\
             \
            <div class="transform_translate3d_top_0_hover transform_translate3d_top100 easing_1 width_100 height_100 position_absolute float_left background-light-yellow-9 display_flex_flow">\
                \
                <div class="calc_10vh margin_5vh position_relative float_left display_flex_flow">\
                    \
                    <div class="width_100 height_100 position_relative float_left display_flex_flow">\
                        <div class="calc_10vh position_relative float_left photo_person1 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
                            \
                            <div class="position_absolute bottom_0 left_0 float_left display_flex_flow">\
                                <div class="position_relative float_left background-light-yellow-0 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
                                    <p class="font_size_205vh padding_205vh position_relative float_left">top100</p>\
                                </div>\
                            </div>\
                            \
                        </div>\
                        \
                    </div>\
                    \
                </div>\
                \
            </div>\
            \
        </div>\
        \
        <div id="component_transform_4" class="overflow_hidden width_50 height_50vh position_relative float_left background-light-yellow-9 display_flex_flow">\
            \
            <div class="top0 left0 easing_1 width_100 height_100 position_absolute float_left background-light-yellow-9 display_flex_flow">\
                \
                <div class="calc_10vh margin_5vh position_relative float_left display_flex_flow">\
                    \
                    <div class="width_100 height_100 position_relative float_left display_flex_flow">\
                        <div class="calc_10vh position_relative float_left photo_person1 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
                            \
                            <div class="position_absolute bottom_0 left_0 float_left display_flex_flow">\
                                <div class="position_relative float_left background-light-yellow-0 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
                                    <p class="font_size_205vh padding_205vh position_relative float_left">top-100</p>\
                                </div>\
                            </div>\
                            \
                        </div>\
                        \
                    </div>\
                    \
                </div>\
                \
            </div>\
             \
            <div class="transform_translate3d_top_0_hover transform_translate3d_top_100 easing_1 width_100 height_100 position_absolute float_left background-light-yellow-9 display_flex_flow">\
                \
                <div class="calc_10vh margin_5vh position_relative float_left display_flex_flow">\
                    \
                    <div class="width_100 height_100 position_relative float_left display_flex_flow">\
                        <div class="calc_10vh position_relative float_left photo_person1 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
                            \
                            <div class="position_absolute bottom_0 left_0 float_left display_flex_flow">\
                                <div class="position_relative float_left background-light-yellow-0 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
                                    <p class="font_size_205vh padding_205vh position_relative float_left">top-100</p>\
                                </div>\
                            </div>\
                            \
                        </div>\
                        \
                    </div>\
                    \
                </div>\
                \
            </div>\
            \
        </div>\
        \
        <div id="component_transform_5" class="overflow_hidden width_50 height_50vh position_relative float_left background-light-yellow-9 display_flex_flow">\
            \
            <div class="top0 left0 easing_1 width_100 height_100 position_absolute float_left background-light-yellow-9 display_flex_flow">\
                \
                <div class="calc_10vh margin_5vh position_relative float_left display_flex_flow">\
                    \
                    <div class="width_100 height_100 position_relative float_left display_flex_flow">\
                        <div class="calc_10vh position_relative float_left photo_person1 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
                            \
                            <div class="position_absolute bottom_0 left_0 float_left display_flex_flow">\
                                <div class="position_relative float_left background-light-yellow-0 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
                                    <p class="font_size_205vh padding_205vh position_relative float_left">left100</p>\
                                </div>\
                            </div>\
                            \
                        </div>\
                        \
                    </div>\
                    \
                </div>\
                \
            </div>\
             \
            <div class="transform_translate3d_left0_hover transform_translate3d_left100 easing_1 width_100 height_100 position_absolute float_left background-light-yellow-9 display_flex_flow">\
                \
                <div class="calc_10vh margin_5vh position_relative float_left display_flex_flow">\
                    \
                    <div class="width_100 height_100 position_relative float_left display_flex_flow">\
                        <div class="calc_10vh position_relative float_left photo_person1 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
                            \
                            <div class="position_absolute bottom_0 left_0 float_left display_flex_flow">\
                                <div class="position_relative float_left background-light-yellow-0 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
                                    <p class="font_size_205vh padding_205vh position_relative float_left">left100</p>\
                                </div>\
                            </div>\
                            \
                        </div>\
                        \
                    </div>\
                    \
                </div>\
                \
            </div>\
            \
        </div>\
        \
        <div id="component_transform_6" class="overflow_hidden width_50 height_50vh position_relative float_left background-light-yellow-9 display_flex_flow">\
            \
            <div class="top0 left0 easing_1 width_100 height_100 position_absolute float_left background-light-yellow-9 display_flex_flow">\
                \
                <div class="calc_10vh margin_5vh position_relative float_left display_flex_flow">\
                    \
                    <div class="width_100 height_100 position_relative float_left display_flex_flow">\
                        <div class="calc_10vh position_relative float_left photo_person1 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
                            \
                            <div class="position_absolute bottom_0 left_0 float_left display_flex_flow">\
                                <div class="position_relative float_left background-light-yellow-0 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
                                    <p class="font_size_205vh padding_205vh position_relative float_left">left-100</p>\
                                </div>\
                            </div>\
                            \
                        </div>\
                        \
                    </div>\
                    \
                </div>\
                \
            </div>\
             \
            <div class="transform_translate3d_left0_hover transform_translate3d_left_100 easing_1 width_100 height_100 position_absolute float_left background-light-yellow-9 display_flex_flow">\
                \
                <div class="calc_10vh margin_5vh position_relative float_left display_flex_flow">\
                    \
                    <div class="width_100 height_100 position_relative float_left display_flex_flow">\
                        <div class="calc_10vh position_relative float_left photo_person1 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
                            \
                            <div class="position_absolute bottom_0 left_0 float_left display_flex_flow">\
                                <div class="position_relative float_left background-light-yellow-0 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
                                    <p class="font_size_205vh padding_205vh position_relative float_left">left-100</p>\
                                </div>\
                            </div>\
                            \
                        </div>\
                        \
                    </div>\
                    \
                </div>\
                \
            </div>\
            \
        </div>\
        \
        ' + element_title('feature: hides', 'width_100 text_align_center font_size_10vh line_height_10vh background-white border_top_01vh_dark_yellow_9 border_bottom_01vh_dark_yellow_9', 'feature: hides') + '\
        \
        <div id="component_transform_1" class="width_50 height_50vh position_relative float_left background-light-yellow-9 display_flex_flow overflow_hidden">\
            \
            <div class="hover_hide calc_10vh margin_5vh position_relative float_left display_flex_flow">\
                \
                <div class="width_100 height_100 position_relative float_left display_flex_flow">\
                    <div class="opacity_02 calc_10vh position_relative float_left photo_person1 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
                    </div>\
                </div>\
                \
                <div class="position_absolute bottom_10vh left_0 float_left display_flex_flow">\
                    <div class="position_relative float_left background-light-yellow-0 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
                        <p class="font_size_205vh padding_205vh position_relative float_left">hover_hide</p>\
                    </div>\
                </div>\
                \
            </div>\
            \
            <div class="show_hide calc_10vh margin_5vh position_relative float_left display_flex_flow">\
                \
                <div class="width_100 height_100 position_relative float_left display_flex_flow">\
                    <div class="calc_10vh position_relative float_left photo_person1 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
                    </div>\
                </div>\
                \
                <div class="position_absolute bottom_10vh left_0 float_left display_flex_flow">\
                    <div class="position_relative float_left background-light-yellow-0 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
                        <p class="font_size_205vh padding_205vh position_relative float_left">show_hide</p>\
                    </div>\
                </div>\
                \
            </div>\
            \
        </div>\
        \
        <div id="component_transform_2" class="width_50 height_50vh position_relative float_left background-light-yellow-9 display_flex_flow overflow_hidden">\
            \
            <div class="calc_10vh margin_5vh position_relative float_left display_flex_flow">\
                \
                <div class="width_100 height_100 position_relative float_left display_flex_flow">\
                    <div class="calc_10vh position_relative float_left photo_person1 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
                    </div>\
                    \
                    <div class="show_hide position_absolute bottom_0 left_0 float_left display_flex_flow">\
                        <div class="position_relative float_left background-light-yellow-0 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
                            <p class="font_size_205vh padding_205vh position_relative float_left">show_hide</p>\
                        </div>\
                    </div>\
                    \
                    <div class="hover_hide position_absolute bottom_0 left_0 float_left display_flex_flow">\
                        <div class="position_relative float_left background-light-yellow-0 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
                            <p class="font_size_205vh padding_205vh position_relative float_left">hover_hide</p>\
                        </div>\
                    </div>\
                    \
                </div>\
                \
            </div>\
            \
        </div>\
        \
                          ' + element_title('feature: grid', 'width_100 text_align_center font_size_10vh line_height_10vh background-white border_top_01vh_dark_yellow_9 border_bottom_01vh_dark_yellow_9', 'feature: grid') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_100', '1/1') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_50', '1/2') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_50', '2/2') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_33', '1/3') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_33', '2/3') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_33', '3/3') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_25', '1/4') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_25', '2/4') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_25', '3/4') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_25', '4/4') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_20', '1/5') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_20', '2/5') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_20', '3/5') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_20', '4/5') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_20', '5/5') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_16flex', '1/6') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_16flex', '2/6') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_16flex', '3/6') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_16flex', '4/6') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_16flex', '5/6') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_16flex', '6/6') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_14flex', '1/7') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_14flex', '2/7') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_14flex', '3/7') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_14flex', '4/7') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_14flex', '5/7') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_14flex', '6/7') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_14flex', '7/7') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_1205', '1/8') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_1205', '2/8') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_1205', '3/8') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_1205', '4/8') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_1205', '5/8') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_1205', '6/8') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_1205', '7/8') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_1205', '8/8') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_11flex', '1/9') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_11flex', '2/9') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_11flex', '3/9') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_11flex', '4/9') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_11flex', '5/9') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_11flex', '6/9') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_11flex', '7/9') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_11flex', '8/9') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_11flex', '9/9') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_10', '1/10') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_10', '2/10') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_10', '3/10') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_10', '4/10') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_10', '5/10') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_10', '6/10') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_10', '7/10') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_10', '8/10') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_10', '9/10') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_10', '10/10') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_33', 'yo 123') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_33', 'yo 123') + '\
                          \
                          ' + element_container_styled('position_relative float_left width_33', 'yo 123') + '\
        \
        \
                      ' + element_container_styled('position_relative float_left background-light-yellow-9 width_100 height_50vh', '\
                          ' + element_container_center('\
                              <div class="position_relative width_100 text_align_center float_left font_size_10vh line_height_10vh">\
                                  Roster - What:\
                              </div>\
                              \
                              <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                  Summary - About:\
                              </div>\
                              \
                              <span class="width_100 position_relative float_left display_flex_flow ">\
                              ' + component_keystroke_annotate_new('roster') + '\
                              </span>\
                              \
                          ') + '\
                      ') + '\
                      \
                      ' + element_container_styled('position_relative float_left background-light-yellow-6 width_100 height_50vh', '\
                          ' + element_container_center('\
                              \
                              <span class="width_100 position_relative float_left display_flex_flow ">\
                              ' + component_keystroke_annotate_new('Widths') + '\
                              </span>\
                              \
                          ') + '\
                      ') + '\
                      ' + element_container_styled('position_relative float_left background-light-yellow-8 width_10 height_50vh', '\
                          ' + element_container_center('\
                              \
                              <span class="width_100 position_relative float_left display_flex_flow ">\
                              ' + component_keystroke_annotate_new('GO: SRP') + '\
                              </span>\
                              \
                          ') + '\
                      ') + '\
                      ' + element_container_styled('position_relative float_left background-light-yellow-7 width_90 height_50vh', '\
                          ' + element_container_center('\
                              \
                              <span class="width_100 position_relative float_left display_flex_flow ">\
                              ' + component_keystroke_annotate_new('GO: SRP') + '\
                              </span>\
                              \
                          ') + '\
                      ') + '\
                      ' + element_container_styled('position_relative float_left background-light-yellow-6 width_20 height_50vh', '\
                          ' + element_container_center('\
                              \
                              <span class="width_100 position_relative float_left display_flex_flow ">\
                              ' + component_keystroke_annotate_new('GO: SRP') + '\
                              </span>\
                              \
                          ') + '\
                      ') + '\
                      ' + element_container_styled('position_relative float_left background-light-yellow-5 width_80 height_50vh', '\
                          ' + element_container_center('\
                              \
                              <span class="width_100 position_relative float_left display_flex_flow ">\
                              ' + component_keystroke_annotate_new('GO: SRP') + '\
                              </span>\
                              \
                          ') + '\
                      ') + '\
                      ' + element_container_styled('position_relative float_left background-light-yellow-8 width_30 height_50vh', '\
                          ' + element_container_center('\
                              \
                              <span class="width_100 position_relative float_left display_flex_flow ">\
                              ' + component_keystroke_annotate_new('GO: SRP') + '\
                              </span>\
                              \
                          ') + '\
                      ') + '\
                      ' + element_container_styled('position_relative float_left background-light-yellow-7 width_70 height_50vh', '\
                          ' + element_container_center('\
                              \
                              <span class="width_100 position_relative float_left display_flex_flow ">\
                              ' + component_keystroke_annotate_new('GO: SRP') + '\
                              </span>\
                              \
                          ') + '\
                      ') + '\
                      ' + element_container_styled('position_relative float_left background-light-yellow-6 width_40 height_50vh', '\
                          ' + element_container_center('\
                              \
                              <span class="width_100 position_relative float_left display_flex_flow ">\
                              ' + component_keystroke_annotate_new('GO: SRP') + '\
                              </span>\
                              \
                          ') + '\
                      ') + '\
                      ' + element_container_styled('position_relative float_left background-light-yellow-5 width_60 height_50vh', '\
                          ' + element_container_center('\
                              \
                              <span class="width_100 position_relative float_left display_flex_flow ">\
                              ' + component_keystroke_annotate_new('GO: SRP') + '\
                              </span>\
                              \
                          ') + '\
                      ') + '\
                      ' + element_container_styled('position_relative float_left background-light-yellow-8 width_50 height_50vh', '\
                          ' + element_container_center('\
                              \
                              <span class="width_100 position_relative float_left display_flex_flow ">\
                              ' + component_keystroke_annotate_new('GO: SRP') + '\
                              </span>\
                              \
                          ') + '\
                      ') + '\
                      ' + element_container_styled('position_relative float_left background-light-yellow-7 width_50 height_50vh', '\
                          ' + element_container_center('\
                              \
                              <span class="width_100 position_relative float_left display_flex_flow ">\
                              ' + component_keystroke_annotate_new('GO: SRP') + '\
                              </span>\
                              \
                          ') + '\
                      ') + '\
                      ' + element_container_styled('position_relative float_left background-light-yellow-6 width_100 height_50vh', '\
                          ' + element_container_center('\
                              \
                              <span class="width_100 position_relative float_left display_flex_flow ">\
                              ' + component_keystroke_annotate_new('Heights') + '\
                              </span>\
                              \
                          ') + '\
                      ') + '\
                      ' + element_container_styled('position_relative float_left background-light-yellow-8 width_100 height_10vh', '\
                          ' + element_container_center('\
                              \
                              <span class="width_100 position_relative float_left display_flex_flow ">\
                              ' + component_keystroke_annotate_new('GO: SRP') + '\
                              </span>\
                              \
                          ') + '\
                      ') + '\
                      ' + element_container_styled('position_relative float_left background-light-yellow-7 width_100 height_20vh', '\
                          ' + element_container_center('\
                              \
                              <span class="width_100 position_relative float_left display_flex_flow ">\
                              ' + component_keystroke_annotate_new('GO: SRP') + '\
                              </span>\
                              \
                          ') + '\
                      ') + '\
                      ' + element_container_styled('position_relative float_left background-light-yellow-6 width_100 height_30vh', '\
                          ' + element_container_center('\
                              \
                              <span class="width_100 position_relative float_left display_flex_flow ">\
                              ' + component_keystroke_annotate_new('GO: SRP') + '\
                              </span>\
                              \
                          ') + '\
                      ') + '\
                      ' + element_container_styled('position_relative float_left background-light-yellow-5 width_100 height_40vh', '\
                          ' + element_container_center('\
                              \
                              <span class="width_100 position_relative float_left display_flex_flow ">\
                              ' + component_keystroke_annotate_new('GO: SRP') + '\
                              </span>\
                              \
                          ') + '\
                      ') + '\
                      ' + element_container_styled('position_relative float_left background-light-yellow-8 width_100 height_50vh', '\
                          ' + element_container_center('\
                              \
                              <span class="width_100 position_relative float_left display_flex_flow ">\
                              ' + component_keystroke_annotate_new('GO: SRP') + '\
                              </span>\
                              \
                          ') + '\
                      ') + '\
                      ' + element_container_styled('position_relative float_left background-light-yellow-7 width_100 height_60vh', '\
                          ' + element_container_center('\
                              \
                              <span class="width_100 position_relative float_left display_flex_flow ">\
                              ' + component_keystroke_annotate_new('GO: SRP') + '\
                              </span>\
                              \
                          ') + '\
                      ') + '\
                      ' + element_container_styled('position_relative float_left background-light-yellow-6 width_100 height_70vh', '\
                          ' + element_container_center('\
                              \
                              <span class="width_100 position_relative float_left display_flex_flow ">\
                              ' + component_keystroke_annotate_new('GO: SRP') + '\
                              </span>\
                              \
                          ') + '\
                      ') + '\
                      ' + element_container_styled('position_relative float_left background-light-yellow-5 width_100 height_80vh', '\
                          ' + element_container_center('\
                              \
                              <span class="width_100 position_relative float_left display_flex_flow ">\
                              ' + component_keystroke_annotate_new('GO: SRP') + '\
                              </span>\
                              \
                          ') + '\
                      ') + '\
                      ' + element_container_styled('position_relative float_left background-light-yellow-8 width_100 height_90vh', '\
                          ' + element_container_center('\
                              \
                              <span class="width_100 position_relative float_left display_flex_flow ">\
                              ' + component_keystroke_annotate_new('GO: SRP') + '\
                              </span>\
                              \
                          ') + '\
                      ') + '\
                      ' + element_container_styled('position_relative float_left background-light-yellow-7 width_100 height_100vh', '\
                          ' + element_container_center('\
                              \
                              <span class="width_100 position_relative float_left display_flex_flow ">\
                              ' + component_keystroke_annotate_new('GO: SRP') + '\
                              </span>\
                              \
                          ') + '\
                      ') + '\
                      \
                      \
                      ' + element_title('grid: 100 x 100', 'width_100 text_align_center font_size_10vh line_height_10vh background-white border_top_01vh_dark_yellow_9 border_bottom_01vh_dark_yellow_9', 'grid: 100 x 100') + '\
                      \
                                    ' + element_container_styled('position_relative float_left width_100 height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                      \
                                    ' + element_container_styled('position_relative float_left width_50 height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_50 height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_33flex height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_33flex height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_33flex height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    ' + element_container_styled('position_relative float_left width_25 height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_25 height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_25 height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_25 height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_20 height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_20 height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_20 height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_20 height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_20 height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_16flex height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_16flex height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_16flex height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_16flex height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_16flex height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_16flex height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_14flex height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_14flex height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_14flex height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_14flex height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_14flex height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_14flex height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_14flex height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_1205 height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_1205 height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_1205 height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_1205 height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_1205 height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_1205 height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_1205 height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_1205 height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_11flex height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_11flex height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_11flex height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_11flex height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_11flex height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_11flex height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_11flex height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_11flex height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_11flex height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_10 height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_10 height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_10 height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_10 height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_10 height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_10 height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_10 height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_10 height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_10 height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
                                    ' + element_container_styled('position_relative float_left width_10 height_50vh', '\
                                    ' + element_container_center('\
                                          <div class="position_relative width_100 text_align_center float_left font_size_4vh line_height_5vh">\
                                              App:\
                                          </div>\
                                           <div class="position_relative width_100 text_align_center float_left font_size_2vh line_height_3vh">\
                                              A collection of "parcels!"\
                                          </div>\
                                          \
                                            <span class="width_100 position_relative float_left display_flex_flow ">\
                                            ' + component_keystroke_annotate_new('tour') + '\
                                            </span>\
                                            \
                                        ') + '\
                                        ') + '\
                                    \
        ' + element_title('feature: grows', 'width_100 text_align_center font_size_10vh line_height_10vh background-white border_top_01vh_dark_yellow_9 border_bottom_01vh_dark_yellow_9', 'feature: grows') + '\
        \
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left background-light-yellow-9 display_flex_flow">\
            <div class="hover_width_100 hover_height_100 calc_205vh position_relative float_left photo_person1 border_01vh_dark_yellow_9 box_shadow_bottom_left_1vh_dark_yellow_9">\
            </div>\
        </div>\
        \
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left background-light-yellow-9 display_flex_flow">\
            <div class="hover_width_100 hover_height_100 calc_5vh position_relative float_left photo_person1 border_01vh_dark_yellow_9 box_shadow_bottom_left_1vh_dark_yellow_9">\
            </div>\
        </div>\
        \
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left background-light-yellow-9 display_flex_flow">\
            <div class="hover_width_100 hover_height_100 calc_10vh position_relative float_left photo_person1 border_01vh_dark_yellow_9 box_shadow_bottom_left_1vh_dark_yellow_9">\
            </div>\
        </div>\
        \
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left background-light-yellow-9 display_flex_flow">\
            <div class="hover_width_100 hover_height_100 calc_15vh position_relative float_left photo_person1 border_01vh_dark_yellow_9 box_shadow_bottom_left_1vh_dark_yellow_9">\
            </div>\
        </div>\
        \
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left background-light-yellow-9 display_flex_flow">\
            <div class="hover_width_100 hover_height_100 calc_20vh position_relative float_left photo_person1 border_01vh_dark_yellow_9 box_shadow_bottom_left_1vh_dark_yellow_9">\
            </div>\
        </div>\
        \
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left background-light-yellow-9 display_flex_flow">\
            <div class="hover_width_100 hover_height_100 calc_25vh position_relative float_left photo_person1 border_01vh_dark_yellow_9 box_shadow_bottom_left_1vh_dark_yellow_9">\
            </div>\
        </div>\
        \
        ' + element_title('feature: calc', 'width_100 text_align_center font_size_10vh line_height_10vh background-white border_top_01vh_dark_yellow_9 border_bottom_01vh_dark_yellow_9', 'feature: grows') + '\
        \
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left background-light-yellow-9 display_flex_flow">\
            <div class="calc_205vh position_relative float_left photo_person1 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
            </div>\
        </div>\
        \
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left background-light-yellow-9 display_flex_flow">\
            <div class="calc_5vh position_relative float_left photo_person1 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
            </div>\
        </div>\
        \
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left background-light-yellow-9 display_flex_flow">\
            <div class="calc_10vh position_relative float_left photo_person1 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
            </div>\
        </div>\
        \
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left background-light-yellow-9 display_flex_flow">\
            <div class="calc_15vh position_relative float_left photo_person1 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
            </div>\
        </div>\
        \
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left background-light-yellow-9 display_flex_flow">\
            <div class="calc_20vh position_relative float_left photo_person1 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
            </div>\
        </div>\
        \
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left background-light-yellow-9 display_flex_flow">\
            <div class="calc_25vh position_relative float_left photo_person1 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
            </div>\
        </div>\
        \
        ' + element_title('feature: photos', 'width_100 text_align_center font_size_10vh line_height_10vh background-white border_top_01vh_dark_yellow_9 border_bottom_01vh_dark_yellow_9', 'feature: photos') + '\
        \
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person1"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person2"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person3"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person4"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person5"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person6"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person7"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person8"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person9"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person10"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person11"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person12"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person13"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person14"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person15"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person16"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person17"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person18"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person19"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person20"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person21"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person22"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person23"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person24"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person25"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person26"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person27"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person28"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person29"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person30"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person31"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person32"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person33"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person34"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person35"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person36"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person37"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person38"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person39"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person40"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person41"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person42"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person43"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person44"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person45"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person46"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person47"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person48"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person49"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person50"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person51"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person52"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person53"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person54"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person55"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person56"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person57"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person58"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person59"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person60"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person61"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person62"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person63"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person64"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person65"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person66"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person67"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person68"></div>\
        <div id="route_firebase" class=" width_50 height_50vh position_relative float_left photo_person69"></div>\
        \
        ' + element_title('feature: containers', 'width_100 text_align_center font_size_10vh line_height_10vh background-white border_top_01vh_dark_yellow_9 border_bottom_01vh_dark_yellow_9', 'feature: containers') + '\
        \
        <div class="position_relative overflow_hidden width_100 height_100vh float_left background-light-yellow-8 z_index_1 margin_auto">\
            \
            <div class="position_absolute top_0 left_0 right_0 bottom_0 calc_25vh overflow_hidden border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 border_01vh_dark_yellow_9 background-light-yellow-9 z_index_1 margin_auto">\
                \
                <div class="position_absolute top_0 left_0 right_0 bottom_0 calc_5vh overflow_hidden z_index_1 margin_auto">\
                    \
                </div>\
                \
              </div>\
            \
        </div>\
        \
        <div class="position_relative overflow_hidden width_100 height_100vh float_left background-light-yellow-7 z_index_1 margin_auto">\
            \
            <div class="position_absolute top_0 left_0 right_0 bottom_0 calc_25vh overflow_hidden border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 border_01vh_dark_yellow_9 background-light-yellow-9 z_index_1 margin_auto">\
                \
                <div class="position_absolute top_0 left_0 right_0 bottom_0 calc_5vh overflow_hidden z_index_1 margin_auto">\
                    \
                </div>\
                \
              </div>\
            \
        </div>\
        \
        <div class="position_relative overflow_hidden width_100 height_100vh float_left background-light-yellow-6 z_index_1 margin_auto">\
            \
            <div class="position_absolute top_0 left_0 right_0 bottom_0 calc_25vh overflow_hidden border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 border_01vh_dark_yellow_9 background-light-yellow-9 z_index_1 margin_auto">\
                \
                <div class="position_absolute top_0 left_0 right_0 bottom_0 calc_5vh overflow_hidden z_index_1 margin_auto">\
                    \
                </div>\
                \
              </div>\
            \
        </div>\
        \
        <div class="position_relative overflow_hidden width_100 height_100vh float_left background-light-yellow-5 z_index_1 margin_auto">\
            \
            <div class="position_absolute top_0 left_0 right_0 bottom_0 calc_25vh overflow_hidden border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 border_01vh_dark_yellow_9 background-light-yellow-9 z_index_1 margin_auto">\
                \
                <div class="position_absolute top_0 left_0 right_0 bottom_0 calc_5vh overflow_hidden z_index_1 margin_auto">\
                    \
                </div>\
                \
              </div>\
            \
        </div>\
        \
        <div class="position_relative overflow_hidden width_100 height_100vh float_left background-light-yellow-4 z_index_1 margin_auto">\
            \
            <div class="position_absolute top_0 left_0 right_0 bottom_0 calc_25vh overflow_hidden border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 border_01vh_dark_yellow_9 background-light-yellow-9 z_index_1 margin_auto">\
                \
                <div class="position_absolute top_0 left_0 right_0 bottom_0 calc_5vh overflow_hidden z_index_1 margin_auto">\
                    \
                </div>\
                \
              </div>\
            \
        </div>\
        \
        <div class="position_relative overflow_hidden width_100 height_100vh float_left background-light-yellow-3 z_index_1 margin_auto">\
            \
            <div class="position_absolute top_0 left_0 right_0 bottom_0 calc_25vh overflow_hidden border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 border_01vh_dark_yellow_9 background-light-yellow-9 z_index_1 margin_auto">\
                \
                <div class="position_absolute top_0 left_0 right_0 bottom_0 calc_5vh overflow_hidden z_index_1 margin_auto">\
                    \
                </div>\
                \
              </div>\
            \
        </div>\
        \
        <div class="position_relative overflow_hidden width_100 height_100vh float_left background-light-yellow-2 z_index_1 margin_auto">\
            \
            <div class="position_absolute top_0 left_0 right_0 bottom_0 calc_25vh overflow_hidden border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 border_01vh_dark_yellow_9 background-light-yellow-9 z_index_1 margin_auto">\
                \
                <div class="position_absolute top_0 left_0 right_0 bottom_0 calc_5vh overflow_hidden z_index_1 margin_auto">\
                    \
                </div>\
                \
              </div>\
            \
        </div>\
        \
        <div class="position_relative overflow_hidden width_100 height_100vh float_left background-light-yellow-1 z_index_1 margin_auto">\
            \
            <div class="position_absolute top_0 left_0 right_0 bottom_0 calc_25vh overflow_hidden border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 border_01vh_dark_yellow_9 background-light-yellow-9 z_index_1 margin_auto">\
                \
                <div class="position_absolute top_0 left_0 right_0 bottom_0 calc_5vh overflow_hidden z_index_1 margin_auto">\
                    \
                </div>\
                \
              </div>\
            \
        </div>\
        \
        <div class="position_relative overflow_hidden width_100 height_100vh float_left background-light-yellow-0 z_index_1 margin_auto">\
            \
            <div class="position_absolute top_0 left_0 right_0 bottom_0 calc_25vh overflow_hidden border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 border_01vh_dark_yellow_9 background-light-yellow-9 z_index_1 margin_auto">\
                \
                <div class="position_absolute top_0 left_0 right_0 bottom_0 calc_5vh overflow_hidden z_index_1 margin_auto">\
                    \
                </div>\
                \
              </div>\
            \
        </div>\
        \
      ', 'width_100 float_left position_relative background_light_yellow_0') + '\
      \
    ';

  let default_content_1 = '\
        ' + element_content_card() + '\
        \
        ' + element_title('feature: element_spaced_color') + '\
        \
          <div class="width_100 height_100vh float_left position_relative overflow_hidden">\
              \
              <div class="width_100 height_100 float_left position_relative scrollbaryhidden overflow_y">\
              \
              </div>\
              \
              <div id="top_right_anchors" class="float_left position_absolute top_10vh right_10vh margin_auto overflow_hidden display_flex_flow z_index_7">\
                \
                <span class="position_relative margin_auto z_index_1 height_100 width_100 display_flex_flow">\
                  \
                  <span class="position_relative margin_1vh z_index_1 display_flex_flow">\
                    \
                    <span class="margin_auto position_relative float_left top_0">\
                    \
                    <span class="margin_auto position_relative float_left top_1vh">\
                    \
                    <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_flex_flow  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
                    \
                    <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_flex_flow border_025vh_dark_yellow_9 background_dark_yellow_0">\
                    \
                    </span>\
                    \
                    <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
                    \
                    </span>\
                    \
                    <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                      <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                        <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">\
                          <div class="calc_2vh_width margin_1vh position_relative float_left">\
                            <p class="font_size_2vh line_height_205vh">\
                            simple\
                            </p>\
                          </div>\
                        </div>\
                      </span>\
                    </span>\
                    \
                    </span>\
                    \
                    </span>\
                    \
                    </span>\
                    \
                  </span>\
                  \
                  <span class="position_relative margin_1vh z_index_1 display_flex_flow">\
                    \
                    <span class="margin_auto position_relative float_left top_0">\
                    \
                    <span class="margin_auto position_relative float_left top_1vh">\
                    \
                    <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_flex_flow  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
                    \
                    <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_flex_flow border_025vh_dark_yellow_9 background_dark_yellow_0">\
                    \
                    </span>\
                    \
                    <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
                    \
                    </span>\
                    \
                    <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                      <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                        <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">\
                          <div class="calc_2vh_width margin_1vh position_relative float_left">\
                            <p class="font_size_2vh line_height_205vh">\
                            simple\
                            </p>\
                          </div>\
                        </div>\
                      </span>\
                    </span>\
                    \
                    </span>\
                    \
                    </span>\
                    \
                    </span>\
                    \
                  </span>\
                  \
                  <span class="position_relative margin_1vh z_index_1 display_flex_flow">\
                    \
                    <span class="margin_auto position_relative float_left top_0">\
                    \
                    <span class="margin_auto position_relative float_left top_1vh">\
                    \
                    <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_flex_flow  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
                    \
                    <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_flex_flow border_025vh_dark_yellow_9 background_dark_yellow_0">\
                    \
                    </span>\
                    \
                    <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
                    \
                    </span>\
                    \
                    <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                      <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                        <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">\
                          <div class="calc_2vh_width margin_1vh position_relative float_left">\
                            <p class="font_size_2vh line_height_205vh">\
                            simple\
                            </p>\
                          </div>\
                        </div>\
                      </span>\
                    </span>\
                    \
                    </span>\
                    \
                    </span>\
                    \
                    </span>\
                    \
                  </span>\
                  \
                </span>\
                \
              </div>\
              \
              <div id="top_left_anchors" class="float_left position_absolute top_10vh left_10vh margin_auto overflow_hidden display_flex_flow z_index_7">\
                \
                <span class="position_relative margin_auto z_index_1 height_100 width_100 display_flex_flow">\
                  \
                  <span class="position_relative margin_1vh z_index_1 display_flex_flow">\
                    \
                    <span class="margin_auto position_relative float_left top_0">\
                    \
                    <span class="margin_auto position_relative float_left top_1vh">\
                    \
                    <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_flex_flow  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
                    \
                    <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_flex_flow border_025vh_dark_yellow_9 background_dark_yellow_0">\
                    \
                    </span>\
                    \
                    <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
                    \
                    </span>\
                    \
                    <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                      <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                        <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">\
                          <div class="calc_2vh_width margin_1vh position_relative float_left">\
                            <p class="font_size_2vh line_height_205vh">\
                            simple\
                            </p>\
                          </div>\
                        </div>\
                      </span>\
                    </span>\
                    \
                    </span>\
                    \
                    </span>\
                    \
                    </span>\
                    \
                  </span>\
                  \
                  <span class="position_relative margin_1vh z_index_1 display_flex_flow">\
                    \
                    <span class="margin_auto position_relative float_left top_0">\
                    \
                    <span class="margin_auto position_relative float_left top_1vh">\
                    \
                    <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_flex_flow  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
                    \
                    <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_flex_flow border_025vh_dark_yellow_9 background_dark_yellow_0">\
                    \
                    </span>\
                    \
                    <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
                    \
                    </span>\
                    \
                    <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                      <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                        <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">\
                          <div class="calc_2vh_width margin_1vh position_relative float_left">\
                            <p class="font_size_2vh line_height_205vh">\
                            simple\
                            </p>\
                          </div>\
                        </div>\
                      </span>\
                    </span>\
                    \
                    </span>\
                    \
                    </span>\
                    \
                    </span>\
                    \
                  </span>\
                  \
                </span>\
                \
              </div>\
                          \
              <div id="bottom_right_anchors" class="float_left position_absolute bottom_10vh right_10vh margin_auto overflow_hidden display_flex_flow z_index_7">\
                \
                <span class="position_relative margin_auto z_index_1 height_100 width_100 display_flex_flow">\
                  \
                  <span class="position_relative margin_1vh z_index_1 display_flex_flow">\
                    \
                    <span class="margin_auto position_relative float_left top_0">\
                    \
                    <span class="margin_auto position_relative float_left top_1vh">\
                    \
                    <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_flex_flow  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
                    \
                    <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_flex_flow border_025vh_dark_yellow_9 background_dark_yellow_0">\
                    \
                    </span>\
                    \
                    <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
                    \
                    </span>\
                    \
                    <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                      <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                        <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">\
                          <div class="calc_2vh_width margin_1vh position_relative float_left">\
                            <p class="font_size_2vh line_height_205vh">\
                            simple\
                            </p>\
                          </div>\
                        </div>\
                      </span>\
                    </span>\
                    \
                    </span>\
                    \
                    </span>\
                    \
                    </span>\
                    \
                  </span>\
                  \
                  <span class="position_relative margin_1vh z_index_1 display_flex_flow">\
                    \
                    <span class="margin_auto position_relative float_left top_0">\
                    \
                    <span class="margin_auto position_relative float_left top_1vh">\
                    \
                    <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_flex_flow  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
                    \
                    <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_flex_flow border_025vh_dark_yellow_9 background_dark_yellow_0">\
                    \
                    </span>\
                    \
                    <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
                    \
                    </span>\
                    \
                    <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                      <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                        <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">\
                          <div class="calc_2vh_width margin_1vh position_relative float_left">\
                            <p class="font_size_2vh line_height_205vh">\
                            simple\
                            </p>\
                          </div>\
                        </div>\
                      </span>\
                    </span>\
                    \
                    </span>\
                    \
                    </span>\
                    \
                    </span>\
                    \
                  </span>\
                  \
                </span>\
                \
              </div>\
              \
              <div id="bottom_left_anchors" class="float_left position_absolute bottom_10vh left_10vh margin_auto overflow_hidden display_flex_flow z_index_7">\
                \
                <span class="position_relative margin_auto z_index_1 height_100 width_100 display_flex_flow">\
                  \
                  <span class="position_relative margin_1vh z_index_1 display_flex_flow">\
                    \
                    <span class="margin_auto position_relative float_left top_0">\
                    \
                    <span class="margin_auto position_relative float_left top_1vh">\
                    \
                    <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_flex_flow  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
                    \
                    <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_flex_flow border_025vh_dark_yellow_9 background_dark_yellow_0">\
                    \
                    </span>\
                    \
                    <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
                    \
                    </span>\
                    \
                    <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                      <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                        <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">\
                          <div class="calc_2vh_width margin_1vh position_relative float_left">\
                            <p class="font_size_2vh line_height_205vh">\
                            simple\
                            </p>\
                          </div>\
                        </div>\
                      </span>\
                    </span>\
                    \
                    </span>\
                    \
                    </span>\
                    \
                    </span>\
                    \
                  </span>\
                  \
                  <span class="position_relative margin_1vh z_index_1 display_flex_flow">\
                    \
                    <span class="margin_auto position_relative float_left top_0">\
                    \
                    <span class="margin_auto position_relative float_left top_1vh">\
                    \
                    <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_flex_flow  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
                    \
                    <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_flex_flow border_025vh_dark_yellow_9 background_dark_yellow_0">\
                    \
                    </span>\
                    \
                    <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
                    \
                    </span>\
                    \
                    <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                      <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                        <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">\
                          <div class="calc_2vh_width margin_1vh position_relative float_left">\
                            <p class="font_size_2vh line_height_205vh">\
                            simple\
                            </p>\
                          </div>\
                        </div>\
                      </span>\
                    </span>\
                    \
                    </span>\
                    \
                    </span>\
                    \
                    </span>\
                    \
                  </span>\
                  \
                </span>\
                \
              </div>\
              \
              <div id="left_anchors" class="width_10vh calc_20vh_height float_left position_absolute top_0 bottom_0 left_0 margin_auto display_flex_flow z_index_7">\
                \
                <div class="position_relative margin_auto width_10vh float_right">\
                  \
                  <span class="margin_auto position_relative margin_2vh_bottom z_index_1 display_flex_flow">\
                    \
                    <span class="margin_auto position_relative float_left top_0">\
                    \
                    <span class="margin_auto position_relative float_left top_1vh">\
                    \
                    <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_flex_flow  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
                    \
                    <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_flex_flow border_025vh_dark_yellow_9 background_dark_yellow_0">\
                    \
                    </span>\
                    \
                    <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
                    \
                    </span>\
                    \
                    <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                      <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                        <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">\
                          <div class="calc_2vh_width margin_1vh position_relative float_left">\
                            <p class="font_size_2vh line_height_205vh">\
                            simple\
                            </p>\
                          </div>\
                        </div>\
                      </span>\
                    </span>\
                    \
                    </span>\
                    \
                    </span>\
                    \
                    </span>\
                    \
                  </span>\
                  \
                  <span class="margin_auto position_relative margin_2vh_bottom z_index_1 display_flex_flow">\
                    \
                    <span class="margin_auto position_relative float_left top_0">\
                    \
                    <span class="margin_auto position_relative float_left top_1vh">\
                    \
                    <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_flex_flow  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
                    \
                    <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_flex_flow border_025vh_dark_yellow_9 background_dark_yellow_0">\
                    \
                    </span>\
                    \
                    <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
                    \
                    </span>\
                    \
                    <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                      <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                        <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">\
                          <div class="calc_2vh_width margin_1vh position_relative float_left">\
                            <p class="font_size_2vh line_height_205vh">\
                            simple\
                            </p>\
                          </div>\
                        </div>\
                      </span>\
                    </span>\
                    \
                    </span>\
                    \
                    </span>\
                    \
                    </span>\
                    \
                  </span>\
                  \
                  <span class="margin_auto position_relative margin_2vh_bottom z_index_1 display_flex_flow">\
                    \
                    <span class="margin_auto position_relative float_left top_0">\
                    \
                    <span class="margin_auto position_relative float_left top_1vh">\
                    \
                    <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_flex_flow  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
                    \
                    <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_flex_flow border_025vh_dark_yellow_9 background_dark_yellow_0">\
                    \
                    </span>\
                    \
                    <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
                    \
                    </span>\
                    \
                    <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                      <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                        <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">\
                          <div class="calc_2vh_width margin_1vh position_relative float_left">\
                            <p class="font_size_2vh line_height_205vh">\
                            simple\
                            </p>\
                          </div>\
                        </div>\
                      </span>\
                    </span>\
                    \
                    </span>\
                    \
                    </span>\
                    \
                    </span>\
                    \
                  </span>\
                  \
                  <span class="margin_auto position_relative margin_2vh_bottom z_index_1 display_flex_flow">\
                    \
                    <span class="margin_auto position_relative float_left top_0">\
                    \
                    <span class="margin_auto position_relative float_left top_1vh">\
                    \
                    <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_flex_flow  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
                    \
                    <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_flex_flow border_025vh_dark_yellow_9 background_dark_yellow_0">\
                    \
                    </span>\
                    \
                    <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
                    \
                    </span>\
                    \
                    <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                      <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                        <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">\
                          <div class="calc_2vh_width margin_1vh position_relative float_left">\
                            <p class="font_size_2vh line_height_205vh">\
                            simple\
                            </p>\
                          </div>\
                        </div>\
                      </span>\
                    </span>\
                    \
                    </span>\
                    \
                    </span>\
                    \
                    </span>\
                    \
                  </span>\
                  \
                </div>\
                \
              </div>\
              \
              <div id="right_anchors" class="width_10vh calc_20vh_height float_left position_absolute top_0 bottom_0 right_0 margin_auto display_flex_flow z_index_7">\
                \
                <div class="position_relative margin_auto width_10vh float_right">\
                  \
                  <span class="margin_auto position_relative margin_2vh_bottom z_index_1 display_flex_flow">\
                    \
                    <span class="margin_auto position_relative float_left top_0">\
                    \
                    <span class="margin_auto position_relative float_left top_1vh">\
                    \
                    <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_flex_flow  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
                    \
                    <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_flex_flow border_025vh_dark_yellow_9 background_dark_yellow_0">\
                    \
                    </span>\
                    \
                    <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
                    \
                    </span>\
                    \
                    <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                      <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                        <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">\
                          <div class="calc_2vh_width margin_1vh position_relative float_left">\
                            <p class="font_size_2vh line_height_205vh">\
                            simple\
                            </p>\
                          </div>\
                        </div>\
                      </span>\
                    </span>\
                    \
                    </span>\
                    \
                    </span>\
                    \
                    </span>\
                    \
                  </span>\
                  \
                  <span class="margin_auto position_relative margin_2vh_bottom z_index_1 display_flex_flow">\
                    \
                    <span class="margin_auto position_relative float_left top_0">\
                    \
                    <span class="margin_auto position_relative float_left top_1vh">\
                    \
                    <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_flex_flow  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
                    \
                    <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_flex_flow border_025vh_dark_yellow_9 background_dark_yellow_0">\
                    \
                    </span>\
                    \
                    <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
                    \
                    </span>\
                    \
                    <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                      <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                        <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">\
                          <div class="calc_2vh_width margin_1vh position_relative float_left">\
                            <p class="font_size_2vh line_height_205vh">\
                            simple\
                            </p>\
                          </div>\
                        </div>\
                      </span>\
                    </span>\
                    \
                    </span>\
                    \
                    </span>\
                    \
                    </span>\
                    \
                  </span>\
                  \
                  <span class="margin_auto position_relative margin_2vh_bottom z_index_1 display_flex_flow">\
                    \
                    <span class="margin_auto position_relative float_left top_0">\
                    \
                    <span class="margin_auto position_relative float_left top_1vh">\
                    \
                    <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_flex_flow  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
                    \
                    <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_flex_flow border_025vh_dark_yellow_9 background_dark_yellow_0">\
                    \
                    </span>\
                    \
                    <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
                    \
                    </span>\
                    \
                    <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                      <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                        <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">\
                          <div class="calc_2vh_width margin_1vh position_relative float_left">\
                            <p class="font_size_2vh line_height_205vh">\
                            simple\
                            </p>\
                          </div>\
                        </div>\
                      </span>\
                    </span>\
                    \
                    </span>\
                    \
                    </span>\
                    \
                    </span>\
                    \
                  </span>\
                  \
                  <span class="margin_auto position_relative margin_2vh_bottom z_index_1 display_flex_flow">\
                    \
                    <span class="margin_auto position_relative float_left top_0">\
                    \
                    <span class="margin_auto position_relative float_left top_1vh">\
                    \
                    <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_flex_flow  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
                    \
                    <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_flex_flow border_025vh_dark_yellow_9 background_dark_yellow_0">\
                    \
                    </span>\
                    \
                    <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
                    \
                    </span>\
                    \
                    <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                      <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                        <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">\
                          <div class="calc_2vh_width margin_1vh position_relative float_left">\
                            <p class="font_size_2vh line_height_205vh">\
                            simple\
                            </p>\
                          </div>\
                        </div>\
                      </span>\
                    </span>\
                    \
                    </span>\
                    \
                    </span>\
                    \
                    </span>\
                    \
                  </span>\
                  \
                </div>\
              \
              </div>\
            \
          </div>\
        \
        ' + element_spaced_color() + '\
        \
        ' + element_title('feature: element_content_loading') + '\
        \
        ' + element_content_loading() + '\
        \
        ' + element_title('feature: element_content_loading_scrolling') + '\
        \
        ' + element_content_loading_scrolling() + '\
        \
        ' + element_title('feature: element_content_scrolling') + '\
        \
        ' + element_content_scrolling() + '\
        \
        ' + element_title('feature: element_center_content') + '\
        \
        ' + element_center_content('\
          \
          ' + component_keystroke_annotate_new('yes', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.') + '\
          \
          ' + component_keystroke_annotate_new('yes', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.') + '\
          \
          ' + component_keystroke_annotate_new('yes', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.') + '\
          \
        ') + '\
    ';

  let default_content_2 = '\
      \
      <div id="component_app_gui_scroll_y_fold" class="width_100 height_100vh float_left position_relative overflow_hidden">\
          \
          <div class="width_50 float_left position_absolute top_0 right_0 margin_auto overflow_hidden display_flex_flow ">\
              \
              ' + element_scroll_x_scrollbar_styled([{
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }]) + '\
              \
            \
          </div>\
          \
          <div class="width_50 calc_10vh_height float_left position_absolute top_0 left_0 margin_auto overflow_hidden display_flex_flow ">\
          \
            ' + element_content_scrolling() + '\
          \
          </div>\
          \
          <div class="width_100 float_left position_absolute bottom_0 left_0 right_0 margin_auto overflow_hidden display_flex_flow ">\
              \
              ' + element_scroll_x_scrollbar_styled([{
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }]) + '\
              \
            \
          </div>\
          \
          <div class="width_50 calc_20vh_height float_left position_absolute top_10vh right_0 margin_auto overflow_hidden display_flex_flow ">\
          \
            ' + element_content_scrolling() + '\
          \
          </div>\
          \
      </div>\
      \
    ';

  let anchors = '\
            \
            <div id="top_right_anchors" class="float_left position_absolute top_10vh right_10vh margin_auto overflow_hidden display_flex_flow z_index_1">\
            </div>\
            \
            <div id="top_left_anchors" class="float_left position_absolute top_10vh left_10vh margin_auto overflow_hidden display_flex_flow z_index_1">\
            </div>\
            \
            <div id="bottom_right_anchors" class="float_left position_absolute bottom_10vh right_10vh margin_auto overflow_hidden display_flex_flow z_index_1">\
            </div>\
            \
            <div id="bottom_left_anchors" class="float_left position_absolute bottom_10vh left_10vh margin_auto overflow_hidden display_flex_flow z_index_1">\
            </div>\
            \
            <div id="bottom_anchors" class="width_100 float_left position_absolute bottom_0 right_0 margin_auto overflow_hidden display_flex_flow z_index_1">\
            </div>\
            \
            <div id="left_anchors" class="width_10vh calc_20vh_height float_left position_absolute top_0 bottom_0 left_0 margin_auto display_flex_flow z_index_1">\
            </div>\
            \
            <div id="right_anchors" class="width_10vh calc_20vh_height float_left position_absolute top_0 bottom_0 right_0 margin_auto display_flex_flow z_index_1">\
            </div>\
    ';

  let component = '\
      \
      <div id="element_gui_scroll_y" class="width_100 float_left position_relative overflow_hidden easing_01 transform_translate3d_top0">\
        \
        <div id="component_modal_scroll_fixed_feature_3" class="width_100 height_100vh float_left position_relative display opacity_1 overflow_hidden">\
          ' + anchors + '\
        </div>\
        \
        <div id="component_app_gui_scroll_y" tabindex="1" class="calc_02vh border_01vh_dark_yellow_9 float_left position_absolute bottom_0 left_0 text_align_center overflow_y scrollbaryhidden easing_01">\
          \
          <div id="component_app_gui_scroll_y_fold" class="width_100 height_100vh float_left position_relative overflow_hidden">\
              \
              <div id="component_app_gui_scroll_y_fold_content" class="width_100 height_100 float_left position_relative scrollbaryhidden overflow_y">\
              \
              </div>\
              \
          </div>\
          \
          <div id="component_app_gui_scroll_y_content" class="width_100 float_left position_relative">\
            ' + default_content + '\
          </div>\
          \
        </div>\
        \
      </div>\
    ';

  // add event listeners
  setTimeout(() => {

    (() => {

      document.getElementById('component_app_gui_scroll_y').addEventListener('click', event => {
        console.log('click from component_app_gui_scroll_y');
      });

      document.getElementById('component_app_gui_scroll_y').addEventListener('wheel', event => {
        console.log('wheel from component_app_gui_scroll_y');
      });

      document.getElementById('component_app_gui_scroll_y_fold_content').addEventListener('scroll', event => {
        console.log('scroll from component_app_gui_scroll_y_fold_content');
        if (document.getElementById('component_app_gui_scroll_y_fold_content') != null) {

          // scrolling
          let component_app_gui_scroll_y_fold_content_position = 0;

          console.log('event.srcElement.clientWidth: ' + event.srcElement.clientWidth);
          console.log('event.srcElement.clientHeight: ' + event.srcElement.clientHeight);
          console.log('event.srcElement.scrollLeft: ' + event.srcElement.scrollLeft);
          console.log('event.srcElement.scrollTop: ' + event.srcElement.scrollTop);
          console.log('event.srcElement.scrollWidth: ' + event.srcElement.scrollWidth);
          console.log('event.srcElement.scrollHeight: ' + event.srcElement.scrollHeight);

          if (event.srcElement.scrollTop > component_app_gui_scroll_y_fold_content_position) {
            console.log('component_app_gui_scroll_y_fold_content_position increasing');
          }

          if (event.srcElement.scrollTop < component_app_gui_scroll_y_fold_content_position) {
            console.log('component_app_gui_scroll_y_fold_content_position decreasing');
          }

          if (event.srcElement.scrollTop == 0) {
            console.log('top met');
          }

          if (event.srcElement.scrollTop > 1) {
            console.log('scrolling started');
          }

          if (event.srcElement.scrollTop < event.srcElement.clientHeight) {
            console.log('inside lead');
          }

          if (event.srcElement.scrollTop > event.srcElement.clientHeight) {
            console.log('past lead');
          }

          if (event.srcElement.scrollHeight - event.srcElement.clientHeight < event.srcElement.scrollTop + event.srcElement.offsetHeight) {
            console.log('100vh before bottom met');
          }

          if (event.srcElement.scrollHeight == event.srcElement.scrollTop + event.srcElement.offsetHeight) {
            console.log('bottom met');
          }

          console.log('scroll');
          from_index.Handle_get_state_from_events();
          from_index.values_update();
        };
      });

      document.getElementById('component_app_gui_scroll_y').addEventListener('scroll', event => {
        console.log('scroll from component_app_gui_scroll_y');
        if (document.getElementById('component_app_gui_scroll_y') != null) {

          // scrolling
          let component_app_gui_scroll_y_position = 0;

          console.log('event.srcElement.clientWidth: ' + event.srcElement.clientWidth);
          console.log('event.srcElement.clientHeight: ' + event.srcElement.clientHeight);
          console.log('event.srcElement.scrollLeft: ' + event.srcElement.scrollLeft);
          console.log('event.srcElement.scrollTop: ' + event.srcElement.scrollTop);
          console.log('event.srcElement.scrollWidth: ' + event.srcElement.scrollWidth);
          console.log('event.srcElement.scrollHeight: ' + event.srcElement.scrollHeight);

          if (event.srcElement.scrollTop > component_app_gui_scroll_y_position) {
            console.log('component_app_gui_scroll_y_position increasing');
            component_app_gui_scroll_y_position = event.srcElement.scrollTop;
          }

          if (event.srcElement.scrollTop < component_app_gui_scroll_y_position) {
            console.log('component_app_gui_scroll_y_position decreasing');
            component_app_gui_scroll_y_position = event.srcElement.scrollTop;
          }

          if (event.srcElement.scrollTop == 0) {
            console.log('top met');
            document.getElementById('component_app_modal_element_nav_top').classList.remove('background_dark_yellow_0');
          }

          if (event.srcElement.scrollTop > 1) {
            console.log('scrolling started');
            document.getElementById('component_app_modal_element_nav_top').classList.add('background_dark_yellow_0');
          }

          if (event.srcElement.scrollTop < event.srcElement.clientHeight) {
            console.log('inside lead');
            document.getElementById('component_modal_scroll_fixed_feature_1').classList.remove('display');
            document.getElementById('component_modal_scroll_fixed_feature_1').classList.add('display_none');
            document.getElementById('component_modal_scroll_fixed_feature_2').classList.remove('display_none');
            document.getElementById('component_modal_scroll_fixed_feature_2').classList.add('display');
          }

          if (event.srcElement.scrollTop > event.srcElement.clientHeight) {
            console.log('past lead');
            document.getElementById('component_modal_scroll_fixed_feature_1').classList.remove('display_none');
            document.getElementById('component_modal_scroll_fixed_feature_1').classList.add('display');
            document.getElementById('component_modal_scroll_fixed_feature_2').classList.remove('display');
            document.getElementById('component_modal_scroll_fixed_feature_2').classList.add('display_none');
          }

          if (event.srcElement.scrollHeight - event.srcElement.clientHeight < event.srcElement.scrollTop + event.srcElement.offsetHeight) {
            console.log('100vh before bottom met');
          }

          if (event.srcElement.scrollHeight < event.srcElement.scrollTop + event.srcElement.offsetHeight) {
            document.getElementById('component_app_modal_element_nav_top').classList.remove('background_dark_yellow_0');
            console.log('bottom met');
          }

          console.log('scroll');
          from_index.Handle_get_state_from_events();
          from_index.values_update();
        };
      });

      document.getElementById('component_app_gui_scroll_y').addEventListener('mousemove', event => {
        console.log('mousemove from component_app_gui_scroll_y');
      });

      document.getElementById('component_app_gui_scroll_y').addEventListener('mouseup', event => {
        console.log('mouseup from component_app_gui_scroll_y');
      });

      document.getElementById('component_app_gui_scroll_y').addEventListener('mousedown', event => {
        console.log('mousedown from component_app_gui_scroll_y');
      });

      document.getElementById('component_app_gui_scroll_y').addEventListener('mouseenter', event => {
        console.log('mouseenter from component_app_gui_scroll_y');
      });

      document.getElementById('component_app_gui_scroll_y').addEventListener('mouseleave', event => {
        console.log('mouseleave from component_app_gui_scroll_y');
      });

      document.getElementById('component_app_gui_scroll_y').addEventListener('keyup', event => {
        console.log('keyup from component_app_gui_scroll_y');
      });

      document.getElementById('component_app_gui_scroll_y').addEventListener("keydown", function (event) {

        console.log('keydown from component_app_gui_scroll_y');

        if (event.keyCode == 37) {
          anchor -= 1;
          check_element();
        };

        if (event.keyCode == 39) {
          anchor += 1;
          check_element();
        };
      });

      document.getElementById('folds' + random_int + '').addEventListener('click', event => {
        anchor = 3;
        check_element();
      });

      document.getElementById('anchorUp' + random_int + '').addEventListener('click', event => {
        anchor += 1;
        check_element();
      });

      document.getElementById('anchorDown' + random_int + '').addEventListener('click', event => {
        if (anchor > 0) {
          anchor -= 1;
          check_element();
        };
      });

      check_element();
    })();
  }, 1000);

  return component;
};

// scrolls
let element_scroll_y = info => {
  let component = '\
    <div id="element_scroll_y" class="position_relative width_100 height_100 overflow_y scrollbaryhidden margin_auto float_right display opacity_1">\
      <div class="position_relative width_100 float_left">\
      ' + info + '\
      </div>\
    </div>\
    ';
  return component;
};

let element_scroll_y_scrollbar = info => {
  let component = '\
    <div id="element_scroll_y_scrollbar" class="position_relative width_100 height_100 overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-light-yellow margin_auto float_right display opacity_1">\
      <div class="position_relative width_100 float_left">\
      ' + info + '\
      </div>\
    </div>\
    ';

  return component;
};

let element_scroll_y_scrollbar_styled = (style, info) => {
  let component = '\
    <div id="element_scroll_y_scrollbar_styled" class="position_relative ' + style + ' overflow_y scrollbary scrollbary-scrollbar-track-light-yellow-9 scrollbary-scrollbar-light-yellow-9 scrollbary-light-yellow margin_auto float_right display opacity_1">\
      <div class="position_relative width_100 float_left">\
      ' + info + '\
      </div>\
    </div>\
    ';

  return component;
};

let element_scroll_x_scrollbar_styled = array => {

  let array_items = '';

  for (let i = 0; i < array.length; i++) {
    array_items += component_keystroke_annotate_new(array[i].title, array[i].title);
  }

  let component = '\
      <div class="margin_auto position_relative float_left width_100">\
        <div class="position_relative easing_01 background_light_yellow_9 width_100 text_align_center float_right display_flex_flow pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_border_01">\
          <div class="background_light_yellow_9 position_relative float_left width_100 height_100 display_flex_flow border_top_01vh_dark_yellow_9 border_bottom_01vh_dark_yellow_9 border_right_01vh_dark_yellow_9">\
            <div class="width_100 height_100 position_relative float_left top_0 left_0 overflow_x scrollbarx scrollbarx-scrollbar-track-light-yellow-9 scrollbarx-scrollbar-light-yellow-9 scrollbarx-light-yellow-border-dark-yellow inline_flex">\
              <div class="height_100 float_left position_relative display_flex_flow">\
                ' + array_items + '\
              </div>\
            </div>\
          </div>\
        </div>\
      </div>\
    ';

  return component;
};

// text
let element_title = info => {
  let element = `<h1 id="element_title" class="position_relative margin_auto font_size_5vh line_height_10vh text_align_center width_100 float_left">` + info + `</h1>`;

  return element;
};

let element_grid_cross = () => {
  let component = `
    <div id="grid_cross" class="display_none opacity_0 width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto grid_cross easing_01">
    </div>
  `;

  return component;
};

let element_grid_depth_90 = () => {
  let component = `
    <div id="grid_depth_90" class="display_none opacity_0 width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto grid_depth_90 easing_01">
    </div>
  `;

  return component;
};

// reusables

let element_slider_1 = () => {

  let anchor = 0;
  let array = [{ title: 'Shannon Sharpe' }, { title: 'Shannon Sharpe' }, { title: 'Shannon Sharpe' }];
  let random_int = randomizer();

  let element_slider_1_default_content = () => {
    let content = '';

    for (var i = 0; i < array.length; i++) {
      if (i == anchor) {
        content = '';
        content += array[i].title;
        content += 'anchor:' + anchor;
      };
    };

    return content;
  };

  let update = () => {
    document.getElementById('element_slider_1_content' + random_int + '').innerHTML = element_slider_1_default_content();
  };

  let component = '\
    <div id="element_slider_1_' + random_int + '" class="width_100 float_left position_relative margin_auto text_align_center">\
      <div id="element_slider_1_content' + random_int + '" class="width_100 float_left position_relative text_align_center">' + element_slider_1_default_content() + '</div>\
      <div id="element_slider_1_content_anchorDown" class="z_index_1 gui_arrow_left width_5vh height_5vh float_left position_relative"></div>\
      <div id="element_slider_1_content_anchorUp" class="z_index_1 gui_arrow_right width_5vh height_5vh float_right position_relative"></div>\
    </div>\
  ';

  // add event listeners
  setTimeout(() => {
    update();
    document.getElementById('element_slider_1_content_anchorUp').addEventListener('click', event => {
      if (anchor < array.length - 1) {
        anchor += 1;
        update();
      };
    });

    document.getElementById('element_slider_1_content_anchorDown').addEventListener('click', event => {
      if (anchor > 0) {
        anchor -= 1;
        update();
      };
    });
  }, 2000);

  return component;
};

let element_slider_2 = () => {

  let anchor = 0;
  let array = [{ title: 'Shannon Sharpe' }, { title: 'Shannon Sharpe' }, { title: 'Shannon Sharpe' }];
  let random_int = randomizer();

  let element_slider_2_default_content = () => {

    let content = '';

    for (var i = 0; i < array.length; i++) {
      if (i == anchor) {
        content = '';
        content += array[i].title;
        content += 'anchor:' + anchor;
      };
    };

    return content;
  };

  let update = () => {

    document.getElementById('element_slider_2_content' + random_int + '').innerHTML = element_slider_2_default_content();
  };

  let component = '\
    <div id="element_slider_2_' + random_int + '" class="width_100 float_left position_relative margin_auto text_align_center">\
    <div id="element_slider_2_content_anchorDown' + random_int + '" class="display_flex_flow width_100 height_5vh float_left position_relative"><div id="element_slider_2_content_anchorDown' + random_int + '" class="z_index_1 gui_arrow_top width_5vh height_5vh float_left position_relative"></div>\</div>\
    <div id="element_slider_2_content' + random_int + '" class="width_100 float_left position_relative text_align_center">' + element_slider_2_default_content() + '</div>\
    <div id="element_slider_2_content_anchorUp' + random_int + '" class="display_flex_flow width_100 height_5vh float_right position_relative"><div id="element_slider_2_content_anchorUp' + random_int + '" class="z_index_1 gui_arrow_down width_5vh height_5vh float_right position_relative"></div></div>\
    </div>\
  ';

  // add event listeners
  setTimeout(() => {

    update();
    document.getElementById('element_slider_2_content_anchorUp' + random_int + '').addEventListener('click', event => {
      if (anchor < array.length - 1) {
        anchor += 1;
        update();
      };
    });

    document.getElementById('element_slider_2_content_anchorDown' + random_int + '').addEventListener('click', event => {
      if (anchor > 0) {
        anchor -= 1;
        update();
      };
    });
  }, 2000);

  return component;
};

let element_slider_3 = () => {

  let anchor = 0;
  let array = [{ title: 'Shannon Sharpe' }, { title: 'Shannon Sharpe' }, { title: 'Shannon Sharpe' }];
  let random_int = randomizer();

  let element_slider_3_default_content = () => {
    let content = '';

    for (var i = 0; i < array.length; i++) {
      if (i == anchor) {
        content = '';
        content += array[i].title;
        content += 'anchor:' + anchor;
      };
    };

    return content;
  };

  let element_slider_3_pagination = () => {

    let pagination_content = '';
    let random_int = randomizer();
    let page_changer = function (index) {
      let random_int = randomizer();
      let g = '\
              <span id="element_slider_3_pagination' + random_int + '" class="margin_auto position_relative margin_05vh_left margin_05vh_right margin_1vh_bottom float_left top_0 z_index_1">\
                \
                <span class="margin_auto position_relative float_left top_0">\
                <span class="margin_auto position_relative float_left top_1vh">\
                <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_flex_flow  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
                \
                <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_flex_flow border_025vh_dark_yellow_9 background_dark_yellow_0">\
                \
                </span>\
                \
                <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
                ' + i + '\
                </span>\
                \
                <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                  <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                    <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">\
                      <div class="calc_2vh_width margin_1vh position_relative float_left">\
                        <p class="font_size_2vh line_height_205vh">\
                        ' + i + '\
                        </p>\
                      </div>\
                    </div>\
                  </span>\
                </span>\
                \
                </span>\
                </span>\
                </span>\
                \
              </span>\
        ';

      // add event listeners
      setTimeout(() => {
        document.getElementById("element_slider_3_pagination" + random_int).addEventListener('click', event => {
          anchor = index;
          update();
        });
      }, 2000);

      return g;
    };

    let page_current = function (index) {
      let random_int = randomizer();
      let g = '\
              <span id="element_slider_3_pagination' + random_int + '" class="margin_auto position_relative margin_05vh_left margin_05vh_right margin_1vh_bottom float_left top_0 z_index_1">\
                \
                <span class="margin_auto position_relative float_left top_0">\
                <span class="margin_auto position_relative float_left top_1vh">\
                <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_flex_flow  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
                \
                <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_flex_flow border_025vh_dark_yellow_9 background_dark_yellow_9">\
                \
                </span>\
                \
                <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
                ' + i + '\
                </span>\
                \
                <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                  <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                    <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">\
                      <div class="calc_2vh_width margin_1vh position_relative float_left">\
                        <p class="font_size_2vh line_height_205vh">\
                        ' + i + '\
                        </p>\
                      </div>\
                    </div>\
                  </span>\
                </span>\
                \
                </span>\
                </span>\
                </span>\
                \
              </span>\
        ';

      return g;
    };

    for (var i = 0; i < array.length; i++) {

      if (i != anchor) {

        pagination_content += page_changer(i);
      };

      if (i == anchor) {

        pagination_content += page_current(i);
      };
    };

    return pagination_content;
  };

  let update = () => {
    document.getElementById('element_slider_3_pagination' + random_int + '').innerHTML = '';
    document.getElementById('element_slider_3_pagination' + random_int + '').innerHTML = element_slider_3_pagination();
    document.getElementById('element_slider_3_content' + random_int + '').innerHTML = element_slider_3_default_content();
  };

  let component = '\
    <div id="element_slider_3_' + random_int + '" class="width_100 float_left position_relative margin_auto text_align_center">\
    <div id="element_slider_3_pagination' + random_int + '" class="display_flex_flow width_100 float_left position_relative">' + element_slider_3_pagination() + '</div>\
    <div id="element_slider_3_content' + random_int + '" class="width_100 float_left position_relative text_align_center">' + element_slider_3_default_content() + '</div>\
    </div>\
  ';

  // add event listeners
  setTimeout(() => {
    update();
  }, 1);

  return component;
};

let element_slider_4 = () => {

  let anchor = 0;
  let array = [{ title: 'Shannon Sharpe' }, { title: 'Shannon Sharpe' }, { title: 'Shannon Sharpe' }];
  let random_int = randomizer();

  let element_slider_4_default_content = () => {
    let content = '';

    for (var i = 0; i < array.length; i++) {
      if (i == anchor) {
        content = '';
        content += array[i].title;
        content += 'anchor:' + anchor;
      };
    };

    return content;
  };

  let element_slider_4_pagination = () => {

    let pagination_content = '';
    let random_int = randomizer();
    let page_changer = function (index) {
      let random_int = randomizer();
      let g = '\
              <span id="element_slider_4_pagination' + random_int + '" class="margin_auto position_relative margin_05vh_left margin_05vh_right margin_1vh_bottom float_left top_0 z_index_1">\
                \
              <span class="margin_auto position_relative float_left top_0">\
              <span class="margin_auto position_relative float_left top_1vh">\
              <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_flex_flow  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
              \
              <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_flex_flow border_025vh_dark_yellow_9 background_dark_yellow_0">\
              \
              </span>\
              \
              <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
              ' + i + '\
              </span>\
              \
              <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                  <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">\
                    <div class="calc_2vh_width margin_1vh position_relative float_left">\
                      <p class="font_size_2vh line_height_205vh">\
                      ' + i + '\
                      </p>\
                    </div>\
                  </div>\
                </span>\
              </span>\
              \
              </span>\
              </span>\
              </span>\
              </span>\
        ';

      // add event listeners
      setTimeout(() => {
        document.getElementById("element_slider_4_pagination" + random_int).addEventListener('click', event => {
          anchor = index;
          update();
        });
      }, 2000);

      return g;
    };

    let page_current = function (index) {
      let random_int = randomizer();
      let g = '\
              <span id="element_slider_4_pagination' + random_int + '" class="margin_auto position_relative margin_05vh_left margin_05vh_right margin_1vh_bottom float_left top_0 z_index_1">\
                \
              <span class="margin_auto position_relative float_left top_0">\
              <span class="margin_auto position_relative float_left top_1vh">\
              <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_flex_flow  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
              \
              <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_flex_flow border_025vh_dark_yellow_9 background_dark_yellow_9">\
              \
              </span>\
              \
              <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
              ' + i + '\
              </span>\
              \
              <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                  <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">\
                    <div class="calc_2vh_width margin_1vh position_relative float_left">\
                      <p class="font_size_2vh line_height_205vh">\
                      ' + i + '\
                      </p>\
                    </div>\
                  </div>\
                </span>\
              </span>\
              \
              </span>\
              </span>\
              </span>\
              \
              </span>\
        ';

      return g;
    };

    for (var i = 0; i < array.length; i++) {

      if (i != anchor) {

        pagination_content += page_changer(i);
      };

      if (i == anchor) {

        pagination_content += page_current(i);
      };
    };

    return pagination_content;
  };

  let update = () => {
    document.getElementById('element_slider_4_pagination' + random_int + '').innerHTML = '';
    document.getElementById('element_slider_4_pagination' + random_int + '').innerHTML += element_slider_4_pagination();
    document.getElementById('element_slider_4_content' + random_int + '').innerHTML = element_slider_4_default_content();
  };

  let component = '\
  <div id="element_slider_4_' + random_int + '" class="width_100 float_left position_relative margin_auto text_align_center">\
    <div id="element_slider_4_pagination' + random_int + '" class="display_flex_flow width_100 float_left position_relative">' + element_slider_4_pagination() + '</div>\
    <div id="element_slider_4_content' + random_int + '" class="width_100 float_left position_relative text_align_center">' + element_slider_4_default_content() + '</div>\
    <div id="element_slider_4_content_anchorDown" class="z_index_1 gui_arrow_left width_5vh height_5vh float_left position_relative"></div>\
    <div id="element_slider_4_content_anchorUp" class="z_index_1 gui_arrow_right width_5vh height_5vh float_right position_relative"></div>\
  </div>\
  ';

  // add event listeners
  setTimeout(() => {
    update();
    document.getElementById('element_slider_4_content_anchorUp').addEventListener('click', event => {
      if (anchor < array.length - 1) {
        anchor += 1;
        update();
      };
    });

    document.getElementById('element_slider_4_content_anchorDown').addEventListener('click', event => {
      if (anchor > 0) {
        anchor -= 1;
        update();
      };
    });
  }, 2000);

  return component;
};

let element_slider_5 = () => {

  let anchor = 0;
  let array = [{ title: 'Shannon Sharpe' }, { title: 'Shannon Sharpe' }, { title: 'Shannon Sharpe' }];
  let random_int = randomizer();

  let element_slider_5_default_content = () => {
    let content = '';

    for (var i = 0; i < array.length; i++) {
      if (i == anchor) {
        content = '';
        content += array[i].title;
        content += 'anchor:' + anchor;
      };
    };

    return content;
  };

  let element_slider_5_pagination = () => {

    let pagination_content = '';
    let random_int = randomizer();
    let page_changer = function (index) {
      let random_int = randomizer();
      let g = '\
              <span id="element_slider_5_pagination' + random_int + '" class="margin_auto position_relative margin_05vh_left margin_05vh_right margin_1vh_bottom float_left top_0 z_index_1">\
                \
              <span class="margin_auto position_relative float_left top_0">\
              <span class="margin_auto position_relative float_left top_1vh">\
              <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_flex_flow  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
              \
              <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_flex_flow border_025vh_dark_yellow_9 background_dark_yellow_0">\
              \
              </span>\
              \
              <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
              ' + i + '\
              </span>\
              \
              <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                  <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">\
                    <div class="calc_2vh_width margin_1vh position_relative float_left">\
                      <p class="font_size_2vh line_height_205vh">\
                      ' + i + '\
                      </p>\
                    </div>\
                  </div>\
                </span>\
              </span>\
              \
              </span>\
              </span>\
              </span>\
              </span>\
        ';

      // add event listeners
      setTimeout(() => {
        document.getElementById("element_slider_5_pagination" + random_int).addEventListener('click', event => {
          anchor = index;
          update();
        });
      }, 2000);

      return g;
    };

    let page_current = function (index) {
      let random_int = randomizer();
      let g = '\
              <span id="element_slider_5_pagination' + random_int + '" class="margin_auto position_relative margin_05vh_left margin_05vh_right margin_1vh_bottom float_left top_0 z_index_1">\
                \
              <span class="margin_auto position_relative float_left top_0">\
              <span class="margin_auto position_relative float_left top_1vh">\
              <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_flex_flow  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
              \
              <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_flex_flow border_025vh_dark_yellow_9 background_dark_yellow_9">\
              \
              </span>\
              \
              <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
              ' + i + '\
              </span>\
              \
              <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                  <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">\
                    <div class="calc_2vh_width margin_1vh position_relative float_left">\
                      <p class="font_size_2vh line_height_205vh">\
                      ' + i + '\
                      </p>\
                    </div>\
                  </div>\
                </span>\
              </span>\
              \
              </span>\
              </span>\
              </span>\
              \
              </span>\
        ';

      return g;
    };

    for (var i = 0; i < array.length; i++) {

      if (i != anchor) {

        pagination_content += page_changer(i);
      };

      if (i == anchor) {

        pagination_content += page_current(i);
      };
    };

    return pagination_content;
  };

  let update = () => {
    document.getElementById('element_slider_5_pagination' + random_int + '').innerHTML = '';
    document.getElementById('element_slider_5_pagination' + random_int + '').innerHTML += element_slider_5_pagination();
    document.getElementById('element_slider_5_content' + random_int + '').innerHTML = element_slider_5_default_content();
  };

  let component = '\
    <div id="element_slider_5_' + random_int + '" class="width_100 float_left position_relative margin_auto text_align_center">\
    <div id="element_slider_5_pagination' + random_int + '" class="display_flex_flow width_100 float_left position_relative">' + element_slider_5_pagination() + '</div>\
    <div id="element_slider_5_content_anchorDown' + random_int + '" class="display_flex_flow width_100 height_5vh float_left position_relative"><div id="element_slider_5_content_anchorDown' + random_int + '" class="z_index_1 gui_arrow_top width_5vh height_5vh float_left position_relative"></div>\</div>\
    <div id="element_slider_5_content' + random_int + '" class="width_100 float_left position_relative text_align_center">' + element_slider_5_default_content() + '</div>\
    <div id="element_slider_5_content_anchorUp' + random_int + '" class="display_flex_flow width_100 height_5vh float_right position_relative"><div id="element_slider_5_content_anchorUp' + random_int + '" class="z_index_1 gui_arrow_down width_5vh height_5vh float_right position_relative"></div></div>\
    </div>\
  ';

  // add event listeners
  setTimeout(() => {
    update();
    document.getElementById('element_slider_5_content_anchorUp' + random_int + '').addEventListener('click', event => {
      if (anchor < array.length - 1) {
        anchor += 1;
        update();
      };
    });

    document.getElementById('element_slider_5_content_anchorDown' + random_int + '').addEventListener('click', event => {
      if (anchor > 0) {
        anchor -= 1;
        update();
      };
    });
  }, 2000);

  return component;
};

let element_slider_6 = () => {

  let anchor = 0;
  let array = [{ title: 'Shannon Sharpe' }, { title: 'Shannon Sharpe' }, { title: 'Shannon Sharpe' }];
  let random_int = randomizer();

  let element_slider_6_default_content = () => {
    let content = '';

    for (var i = 0; i < array.length; i++) {
      if (i == anchor) {
        content = '';
        content += array[i].title;
        content += 'anchor:' + anchor;
      };
    };

    return content;
  };

  let element_slider_6_pagination = () => {

    let pagination_content = '';
    let random_int = randomizer();
    let page_changer = function (index) {
      let random_int = randomizer();
      let g = '\
              <span id="element_slider_6_pagination' + random_int + '" class="margin_auto position_relative margin_05vh_left margin_05vh_right margin_1vh_bottom float_left top_0 z_index_1">\
                \
              <span class="margin_auto position_relative float_left top_0">\
              <span class="margin_auto position_relative float_left top_1vh">\
              <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_flex_flow  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
              \
              <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_flex_flow border_025vh_dark_yellow_9 background_dark_yellow_0">\
              \
              </span>\
              \
              <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
              \
              </span>\
              \
              <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                  <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">\
                    <div class="calc_2vh_width margin_1vh position_relative float_left">\
                      <p class="font_size_2vh line_height_205vh">\
                      \
                      </p>\
                    </div>\
                  </div>\
                </span>\
              </span>\
              \
              </span>\
              </span>\
              </span>\
              </span>\
        ';

      // add event listeners
      setTimeout(() => {
        document.getElementById("element_slider_6_pagination" + random_int).addEventListener('click', event => {
          anchor = index;
          update();
        });
      }, 2000);

      return g;
    };

    let page_current = function (index) {
      let random_int = randomizer();
      let g = '\
              <span id="element_slider_6_pagination' + random_int + '" class="margin_auto position_relative margin_05vh_left margin_05vh_right margin_1vh_bottom float_left top_0 z_index_1">\
                \
              <span class="margin_auto position_relative float_left top_0">\
              <span class="margin_auto position_relative float_left top_1vh">\
              <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_flex_flow  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
              \
              <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_flex_flow border_025vh_dark_yellow_9 background_dark_yellow_9">\
              \
              </span>\
              \
              <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
              \
              </span>\
              \
              <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                  <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">\
                    <div class="calc_2vh_width margin_1vh position_relative float_left">\
                      <p class="font_size_2vh line_height_205vh">\
                      \
                      </p>\
                    </div>\
                  </div>\
                </span>\
              </span>\
              \
              </span>\
              </span>\
              </span>\
              \
              </span>\
        ';

      return g;
    };

    for (var i = 0; i < array.length; i++) {

      if (i != anchor) {

        pagination_content += page_changer(i);
      };

      if (i == anchor) {

        pagination_content += page_current(i);
      };
    };

    return pagination_content;
  };

  let update = () => {
    document.getElementById('element_slider_6_pagination' + random_int + '').innerHTML = '';
    document.getElementById('element_slider_6_pagination' + random_int + '').innerHTML += element_slider_6_pagination();
    document.getElementById('element_slider_6_content' + random_int + '').innerHTML = element_slider_6_default_content();
  };

  let component = '\
    <div id="element_slider_6_' + random_int + '" class="width_100 float_left position_relative margin_auto text_align_center">\
    <div id="element_slider_6_pagination' + random_int + '" class="display_flex_flow width_100 float_left position_relative">' + element_slider_6_pagination() + '</div>\
    <div id="element_slider_6_content_anchorDown' + random_int + '" class="display_flex_flow width_100 height_5vh float_left position_relative"><div id="element_slider_6_content_anchorDown' + random_int + '" class="z_index_1 gui_arrow_top width_5vh height_5vh float_left position_relative"></div>\</div>\
    <div id="element_slider_6_content' + random_int + '" class="width_100 float_left position_relative text_align_center">' + element_slider_6_default_content() + '</div>\
    <div id="element_slider_6_content_anchorUp' + random_int + '" class="display_flex_flow width_100 height_5vh float_right position_relative"><div id="element_slider_6_content_anchorUp' + random_int + '" class="z_index_1 gui_arrow_down width_5vh height_5vh float_right position_relative"></div></div>\
    </div>\
  ';

  // add event listeners
  setTimeout(() => {
    update();
    document.getElementById('element_slider_6_content_anchorUp' + random_int + '').addEventListener('click', event => {
      if (anchor < array.length - 1) {
        anchor += 1;
        update();
      };
    });

    document.getElementById('element_slider_6_content_anchorDown' + random_int + '').addEventListener('click', event => {
      if (anchor > 0) {
        anchor -= 1;
        update();
      };
    });
  }, 2000);

  return component;
};

let element_slider_7 = () => {

  let anchor = 0;
  let array = [{ title: 'Shannon Sharpe' }, { title: 'Shannon Sharpe' }, { title: 'Shannon Sharpe' }];
  let random_int = randomizer();

  let element_slider_7_default_content = () => {
    let content = '';

    for (var i = 0; i < array.length; i++) {
      if (i == anchor) {
        content = '';
        content += array[i].title;
        content += 'anchor:' + anchor;
      };
    };

    return content;
  };

  let element_slider_7_pagination = () => {

    let pagination_content = '';
    let random_int = randomizer();
    let page_changer = function (index) {
      let random_int = randomizer();
      let g = '\
              <span id="element_slider_7_pagination' + random_int + '" class="margin_auto position_relative width_100 margin_105vh_bottom float_left top_0 z_index_1">\
                \
              <span class="margin_auto position_relative float_left top_0">\
              <span class="margin_auto position_relative float_left top_1vh">\
              <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_flex_flow  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
              \
              <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_flex_flow border_025vh_dark_yellow_9 background_dark_yellow_0">\
              \
              </span>\
              \
              <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
                      \
              </span>\
              \
              <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                  <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">\
                    <div class="calc_2vh_width margin_1vh position_relative float_left">\
                      <p class="font_size_2vh line_height_205vh">\
                      \
                      </p>\
                    </div>\
                  </div>\
                </span>\
              </span>\
              \
              </span>\
              </span>\
              </span>\
              </span>\
        ';

      // add event listeners
      setTimeout(() => {
        document.getElementById("element_slider_7_pagination" + random_int).addEventListener('click', event => {
          anchor = index;
          update();
        });
      }, 2000);

      return g;
    };

    let page_current = function (index) {
      let random_int = randomizer();
      let g = '\
              <span id="element_slider_7_pagination' + random_int + '" class="margin_auto position_relative width_100 margin_2vh_bottom float_left top_0 z_index_1">\
                \
              <span class="margin_auto position_relative float_left top_0">\
              <span class="margin_auto position_relative float_left top_1vh">\
              <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_flex_flow  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">\
              \
              <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_flex_flow border_025vh_dark_yellow_9 background_dark_yellow_9">\
              \
              </span>\
              \
              <span class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">\
                      \
              </span>\
              \
              <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">\
                <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">\
                  <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">\
                    <div class="calc_2vh_width margin_1vh position_relative float_left">\
                      <p class="font_size_2vh line_height_205vh">\
                      \
                      </p>\
                    </div>\
                  </div>\
                </span>\
              </span>\
              \
              </span>\
              </span>\
              </span>\
              \
              </span>\
        ';

      return g;
    };

    for (var i = 0; i < array.length; i++) {

      if (i != anchor) {

        pagination_content += page_changer(i);
      };

      if (i == anchor) {

        pagination_content += page_current(i);
      };
    };

    return pagination_content;
  };

  let update = () => {
    document.getElementById('element_slider_7_pagination' + random_int + '').innerHTML = '';
    document.getElementById('element_slider_7_pagination' + random_int + '').innerHTML += element_slider_7_pagination();
    document.getElementById('element_slider_7_content' + random_int + '').innerHTML = element_slider_7_default_content();
  };

  let component = '\
    <div id="element_slider_7_' + random_int + '" class="width_100 float_left position_relative margin_auto text_align_center">\
    <div class="display_flex_flow width_25 float_left position_relative">\
      <div id="element_slider_7_pagination' + random_int + '" class="width_100 float_left position_relative text_align_center">' + element_slider_7_pagination() + '</div>\
    </div>\
    \
    <div class="width_75 float_left position_relative">\
      <div id="element_slider_7_content_anchorDown' + random_int + '" class="display_flex_flow width_100 height_5vh float_left position_relative"><div id="element_slider_7_content_anchorDown' + random_int + '" class="z_index_1 gui_arrow_top width_5vh height_5vh float_left position_relative"></div>\</div>\
      <div id="element_slider_7_content' + random_int + '" class="width_100 float_left position_relative text_align_center">' + element_slider_7_default_content() + '</div>\
      <div id="element_slider_7_content_anchorUp' + random_int + '" class="display_flex_flow width_100 height_5vh float_right position_relative"><div id="element_slider_7_content_anchorUp' + random_int + '" class="z_index_1 gui_arrow_down width_5vh height_5vh float_right position_relative"></div></div>\
    </div>\
    </div>\
    \
  ';

  // add event listeners
  setTimeout(() => {
    update();
    document.getElementById('element_slider_7_content_anchorUp' + random_int + '').addEventListener('click', event => {
      if (anchor < array.length - 1) {
        anchor += 1;
        update();
      };
    });

    document.getElementById('element_slider_7_content_anchorDown' + random_int + '').addEventListener('click', event => {
      if (anchor > 0) {
        anchor -= 1;
        update();
      };
    });
  }, 2000);

  return component;
};

let pieces_workspace = () => {
  let component = '\
                <div id="component_app_pieces_workspace" class=" width_100 height_100 float_left position_absolute bottom_0 left_0 display_none opacity_0 easing_01">\
                 \
                 <div id="component_app_pieces_workspace_imac" class="easing_01 piece_workspace_imac_0_0 width_100 height_100 float_left position_absolute bottom_0 left_0 display_none opacity_0">\
                 </div>\
                 <div id="component_app_pieces_workspace_monitor" class="easing_01 piece_workspace_monitor_0_0 width_100 height_100 float_left position_absolute bottom_0 left_0 display_none opacity_0">\
                 </div>\
                 <div id="component_app_pieces_workspace_mic" class="easing_01 piece_workspace_mic_0_0 width_100 height_100 float_left position_absolute bottom_0 left_0 display_none opacity_0">\
                 </div>\
                 <div id="component_app_pieces_workspace_scarlett" class="easing_01 piece_workspace_scarlett_0_0 width_100 height_100 float_left position_absolute bottom_0 left_0 display_none opacity_0">\
                 </div>\
                 <div id="component_app_pieces_workspace_speaker_1" class="easing_01 piece_workspace_speaker_1_0_0 width_100 height_100 float_left position_absolute bottom_0 left_0 display_none opacity_0">\
                 </div>\
                 <div id="component_app_pieces_workspace_speaker_2" class="easing_01 piece_workspace_speaker_2_0_0 width_100 height_100 float_left position_absolute bottom_0 left_0 display_none opacity_0">\
                 </div>\
                 <div id="component_app_pieces_workspace_speaker_3" class="easing_01 piece_workspace_speaker_3_0_0 width_100 height_100 float_left position_absolute bottom_0 left_0 display_none opacity_0">\
                 </div>\
                 <div id="component_app_pieces_workspace_books_1" class="easing_01 piece_workspace_books_1_0_0 width_100 height_100 float_left position_absolute bottom_0 left_0 display_none opacity_0">\
                 </div>\
                 <div id="component_app_pieces_workspace_books_2" class="easing_01 piece_workspace_books_2_0_0 width_100 height_100 float_left position_absolute bottom_0 left_0 display_none opacity_0">\
                 </div>\
                 \
                 <div id="component_app_pieces_workspace_desk" class="easing_01 piece_workspace_desk_0_0 width_100 height_100 float_left position_absolute bottom_0 left_0 display_none opacity_0">\
                 </div>\
                 <div id="component_app_pieces_workspace_chair_1" class="easing_01 piece_workspace_chair_0_0 width_100 height_100 float_left position_absolute bottom_0 left_0 display_none opacity_0">\
                 </div>\
                 <div id="component_app_pieces_workspace_chair_2" class="easing_01 piece_workspace_chair_2_0_0 width_100 height_100 float_left position_absolute bottom_0 left_0 display_none opacity_0">\
                 </div>\
                 \
                </div>\
                \
                ';

  return component;
};

let pieces_office = () => {
  let component = '\
        <div id="component_app_pieces_office" class="width_100 height_100 display_none opacity_0 easing_01 position_absolute top_0 left_0 bottom_0 right_0 margin_auto">\
          <div id="component_app_pieces_office_shoplights" class="width_100 height_100 display_none opacity_0 position_absolute margin_auto">\
            <span id="component_app_pieces_office_shoplight_on" class="pieces_office_shoplight_on display opacity_1 width_100 height_100 margin_auto position_absolute bottom_0 left_0 right_0 float_left margin_auto">\
            </span>\
            <span id="component_app_pieces_office_shoplight_off" class="pieces_office_shoplight_off display opacity_1 width_100 height_100 margin_auto position_absolute bottom_0 left_0 right_0 float_left margin_auto">\
            </span>\
          </div>\
        </div>\
                ';

  return component;
};

let element_images = () => {

  let element = '\
    \
    <div id="image_1" class="background_dark_yellow_9 width_100 height_25vh position_relative float_left">\
    </div>\
    \
    <div id="image_2" class="background_dark_yellow_9 width_100 height_25vh position_relative float_left">\
    </div>\
    \
    <div id="image_3" class="background_dark_yellow_9 width_100 height_25vh position_relative float_left">\
        <iframe src="https://player.vimeo.com/video/106981173?color=ffff00&title=0&byline=0&portrait=0" width="100" height="100" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\
    </div>\
    \
    <div id="image_4" class="background_dark_yellow_9 width_100 height_25vh position_relative float_left">\
        <iframe width="100" height="100" src="https://www.youtube.com/embed/BWz_PCPCIdE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>\
    </div>\
    \
    <div id="image_5" class="position_relative width_100 height_25vh float_left margin_auto ' + filtered_array_gnougn_library[i].character + ' ">\
    </div>\
    \
    <div id="image_6" class="position_relative width_100 height_25vh float_left margin_auto photo_person1">\
    \
    </div>\
    \
    <div id="image_7" class="position_relative width_100 height_25vh float_left margin_auto photo_person1">\
        <div class="gui_arrow_top_left width_25 height_25 float_left position_absolute top_0 bottom_0 left_0 margin_auto">\
        </div>\
        <div class="gui_arrow_top_right width_25 height_25 float_left position_absolute top_0 bottom_0 right_0 margin_auto">\
        </div>\
    </div>\
    \
    <div id="image_8" class="position_relative width_100 height_25vh float_left margin_auto photo_person1">\
        <div class="width_25 height_25 float_left position_absolute right_0 bottom_0 left_0 margin_auto">\
                \
                <div class="gui_arrow_top_left width_25 height_100 float_left position_relative margin_auto">\
                </div>\
                \
                <div class="gui_arrow_top_right width_25 height_100 float_left position_relative margin_auto">\
                </div>\
                \
                <div class="gui_arrow_top_left width_25 height_100 float_left position_relative margin_auto">\
                </div>\
                \
                <div class="gui_arrow_top_right width_25 height_100 float_left position_relative margin_auto">\
                </div>\
                \
        </div>\
    </div>\
    \
    <div id="image_9" class="position_relative width_100 height_25vh float_left margin_auto">\
        \
        <div class="position_relative width_50 height_50 float_left margin_auto photo_person1">\
        </div>\
        \
        <div class="position_relative width_50 height_50 float_left margin_auto photo_person1">\
        </div>\
        \
        <div class="position_relative width_50 height_50 float_left margin_auto photo_person1">\
        </div>\
        \
        <div class="position_relative width_50 height_50 float_left margin_auto photo_person1">\
        </div>\
        \
    </div>\
    \
    <div id="image_10" class="position_relative width_100 height_25vh float_left margin_auto">\
        \
        <div class="position_relative width_50 height_100 float_left margin_auto photo_person1">\
        </div>\
        \
        <div class="position_relative width_50 height_100 float_left margin_auto photo_person2">\
        </div>\
        \
    </div>\
    \
    ';

  return element;
};

// stage (collection of svgs that are full scrren)
let stage_office = () => {
  let component = '\
            <div id="component_app_stage_office" class="opacity_0 display_none easing_01 width_100 height_100 margin_auto position_absolute bottom_0 left_0 float_left margin_auto display opacity_1 transform_translate3d_top0 easing_01">\
            \
            <div id="component_app_stage_office_wall_color" class="width_100 height_100 margin_auto position_absolute bottom_0 left_0 float_left margin_auto stage_wall_90"></div>\
            <div id="component_app_stage_office_floor" class="width_100 height_100 margin_auto position_absolute bottom_0 left_0 float_left margin_auto stage_floor_90"></div>\
            <div id="component_app_stage_office_wall_lines" class="width_100 height_100 transform_translate3d_top0 easing_01 position_absolute top_0 left_0 bottom_0 right_0 margin_auto stage_wall_lines_90"></div>\
            <div id="component_app_stage_office_wall_items" class="width_100 height_100 transform_translate3d_top0 easing_01 position_absolute top_0 left_0 bottom_0 right_0 margin_auto stage_office_wall"></div>\
            \
            </div>\
        ';

  return component;
};

let stage_sky = () => {
  let component = '\
    <div id="component_app_stage_sky" class="opacity_0 display_none easing_01 width_100 height_100 position_absolute bottom_0 left_0 margin_auto overflowhidden">\
    <div class="width_100 height_100 position_absolute bottom_0 left_0 margin_auto overflow_hidden animated10 enterLeftLeaveRight infinite">\
    <div class="width_1205 height_1205 margin_auto position_absolute top_0 left_0 right_0 float_left margin_auto interaction_workspace_man_standing_1">\
    </div>\
    </div>\
    <div class="width_100 height_100 position_absolute bottom_0 left_0 margin_auto overflow_hidden animated10 enterLeftLeaveRight infinite delay5">\
    <div class="width_1205 height_1205 margin_auto position_absolute top_0 left_0 right_0 float_left margin_auto interaction_workspace_man_standing_1">\
    </div>\
    </div>\
    </div>\
    ';
  return component;
};

let stage_outside = () => {
  let component = '\
    <div id="component_app_stage_outside" class="opacity_0 display_none easing_01 width_100 height_100 position_absolute bottom_0 left_0 margin_auto overflowhidden">\
    <div class="width_100 height_100 position_absolute bottom_0 left_0 margin_auto overflow_hidden animated10 enterLeftLeaveRight infinite">\
    <div class="width_1205 height_100 margin_auto position_absolute bottom_0 left_25 float_left margin_auto interaction_workspace_man_standing_1">\
    </div>\
    </div>\
    <div class="width_100 height_100 position_absolute bottom_0 left_0 margin_auto overflow_hidden animated10 enterLeftLeaveRight infinite delay5">\
    <div class="width_1205 height_100 margin_auto position_absolute bottom_0 left_25 float_left margin_auto interaction_workspace_man_standing_1">\
    </div>\
    </div>\
    </div>\
    ';
  return component;
};

let component_app_stage_enneagon = () => {

  let component = '\
    <span id="component_app_stage_enneagon" class="display_none opacity_0 transform_translate3d_top0 easing_01 position_absolute top_0 left_0 right_0 width_100vw height_100vh webkit_box_pack_center webkit_box_align display_webkit_box">\
    <span id="column1" class="position_relative float_left width_100vw height_100vh easing_01">\
    <span class="width_100 height_100 float_left position_relative overflow_hidden webkit_box_pack_center webkit_box_align display_webkit_box">\
    <div class="width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto overflow_hidden ">\
            ' + stage_outside() + '\
    </div>landing1 Left Top</span>\
    <span class="width_100 height_100 float_left position_relative overflow_hidden webkit_box_pack_center webkit_box_align display_webkit_box">\
    <div class="width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto overflow_hidden ">\
    \
    </div>landing2 Left Center</span>\
    <span class="width_100 height_100 float_left position_relative overflow_hidden webkit_box_pack_center webkit_box_align display_webkit_box">\
    <div class="width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto overflow_hidden ">\
            ' + stage_sky() + '\
    </div>landing2 Left Bottom</span>\
    </span>\
    <span id="column1" class="position_relative float_left width_100vw height_100vh">\
    <span class="width_100 height_100 float_left position_relative overflow_hidden webkit_box_pack_center webkit_box_align display_webkit_box">\
    <div class="width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto overflow_hidden ">\
    </div>landing1 Center Top</span>\
    <span class="width_100 height_100 float_left position_relative overflow_hidden webkit_box_pack_center webkit_box_align display_webkit_box">\
    <div class="width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto overflow_hidden ">\
            ' + stage_office() + '\
            ' + pieces_workspace() + '\
            ' + pieces_office() + '\
    </div>landing2 Center Mid</span>\
    <span class="width_100 height_100 float_left position_relative overflow_hidden webkit_box_pack_center webkit_box_align display_webkit_box">\
    <div class="width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto overflow_hidden ">\
    </div>landing2 Center Bottom</span>\
    </span>\
    <span id="column1" class="position_relative float_left width_100vw height_100vh">\
    <span class="width_100 height_100 float_left position_relative overflow_hidden webkit_box_pack_center webkit_box_align display_webkit_box">\
    <div class="width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto overflow_hidden ">\
    </div>landing1 Right Top</span>\
    <span class="width_100 height_100 float_left position_relative overflow_hidden webkit_box_pack_center webkit_box_align display_webkit_box">\
    <div class="width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto overflow_hidden ">\
    </div>landing2 Right Mid</span>  <span class="width_100 height_100 float_left position_relative overflow_hidden webkit_box_pack_center webkit_box_align display_webkit_box">\
    <div class="width_100 height_100 position_absolute top_0 left_0 bottom_0 right_0 margin_auto overflow_hidden ">\
    </div>landing2 Right Bottom</span>\
    </span>\
    </span>\
  ';

  return component;
};

let element_guis = () => {
  let element = `

        <div id="component_app_gui_top_left" class="display_none opacity_0 easing_01 transform_translate3d_top0 float_left position_fixed top_0 left_0 margin_auto z_index_7">

          <div class="float_left margin_auto display_flex_flow">

            <div id="component_app_gui_logo_icon" class="gui_logo_dj_final_mark width_5vh height_5vh float_left position_relative float_left margin_auto margin_205vh_left z_index_7">
            </div>

            <div id="component_app_gui_menu_icon" class="gui_menu width_5vh height_10vh float_left position_relative float_left margin_auto z_index_7">
            </div>

          </div>

        </div>

        <div id="component_app_gui_top_center" class="display_none opacity_0 easing_01 transform_translate3d_top0 float_left display_flex_flow position_fixed calc_20vh_width top_0 left_0 right_0 margin_auto z_index_6">

          <span class="margin_auto position_relative margin_auto z_index_1 display_flex_flow height_10vh width_10vh">

            <span class="margin_auto position_relative float_left top_0">

            <span class="margin_auto position_relative float_left top_1vh">

            <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_flex_flow  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">

            <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_flex_flow border_025vh_dark_yellow_9 background_dark_yellow_0">

            </span>

            <span id="score_current_user" class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">

            </span>

            <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">
              <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">
                <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">
                  <div class="calc_2vh_width margin_1vh position_relative float_left">
                    <p class="font_size_2vh line_height_205vh">
                    simple
                    </p>
                  </div>
                </div>
              </span>
            </span>

            </span>

            </span>

            </span>

          </span>

        </div>

        <div id="component_app_gui_top_right" class="display_none opacity_0 easing_01 transform_translate3d_top0 width_10vh height_10vh float_left position_fixed top_0 right_0 margin_auto display_flex_flow z_index_6">

          <span class="margin_auto position_relative margin_auto z_index_1 display_flex_flow">

            <span class="margin_auto position_relative float_left top_0">

            <span class="margin_auto position_relative float_left top_1vh">

            <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_flex_flow  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">

            <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_flex_flow border_025vh_dark_yellow_9 background_dark_yellow_0">

            </span>

            <span id="score_current_area" class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">

            </span>

            <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">
              <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">
                <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">
                  <div class="calc_2vh_width margin_1vh position_relative float_left">
                    <p class="font_size_2vh line_height_205vh">
                    simple
                    </p>
                  </div>
                </div>
              </span>
            </span>

            </span>

            </span>

            </span>

          </span>

        </div>

        <div id="component_app_gui_right" class="display_none opacity_0 easing_01 transform_translate3d_left0 width_10vh calc_20vh_height float_left position_fixed top_0 bottom_0 right_0 margin_auto z_index_6">

          <span class="margin_auto position_absolute top_0 left_0 right_0 margin_auto margin_auto z_index_1 display_flex_flow">

            <span class="margin_auto position_relative float_left top_0">

            <span class="margin_auto position_relative float_left top_1vh">

            <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_green_9 width_100 text_align_center float_right display_flex_flow  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">

            <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_flex_flow border_025vh_dark_yellow_9 background_dark_yellow_0">

            </span>

            <span id="score_current_met" class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">

            </span>

            <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">
              <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">
                <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">
                  <div class="calc_2vh_width margin_1vh position_relative float_left">
                    <p class="font_size_2vh line_height_205vh">
                    Whats this
                    </p>
                  </div>
                </div>
              </span>
            </span>

            </span>

            </span>

            </span>

          </span>


          <div class="position_absolute top_0 left_0 bottom_0 margin_auto width_10vh height_10vh float_right">

            <div id="" class="gui_i width_50 height_50 float_left position_relative float_left margin_auto">
            </div>

            <div id="" class="gui_i width_50 height_50 float_left position_relative float_left margin_auto">
            </div>

            <div id="" class="gui_i width_50 height_50 float_left position_relative float_left margin_auto">
            </div>

            <div id="" class="gui_i width_50 height_50 float_left position_relative float_left margin_auto">
            </div>

          </div>

          <div class="position_absolute bottom_0 left_0 width_10vh height_10vh float_right display_flex_flow">

            <div id="" class=" width_100 height_100 float_left position_relative float_left margin_auto">

            <div id="" class="gui_circle width_25 height_50 float_left position_relative float_left margin_auto">
            </div>
            <div id="" class="gui_circle width_25 height_50 float_left position_relative float_left margin_auto">
            </div>
            <div id="" class="gui_circle width_25 height_50 float_left position_relative float_left margin_auto">
            </div>
            <div id="" class="gui_circle width_25 height_50 float_left position_relative float_left margin_auto">
            </div>
            <div id="" class="gui_circle width_25 height_50 float_left position_relative float_left margin_auto">
            </div>
            <div id="" class="gui_circle width_25 height_50 float_left position_relative float_left margin_auto">
            </div>
            <div id="" class="gui_circle width_25 height_50 float_left position_relative float_left margin_auto">
            </div>
            <div id="" class="gui_circle width_25 height_50 float_left position_relative float_left margin_auto">
            </div>

            </div>

          </div>

        </div>

        <div id="component_app_gui_left" class="display_none opacity_0 easing_01 transform_translate3d_left0 width_10vh calc_20vh_height float_left position_fixed top_0 bottom_0 left_0 margin_auto z_index_6">

          <span class="margin_auto position_relative margin_auto z_index_1 display_flex_flow">

            <span class="margin_auto position_relative float_left top_0">

            <span class="margin_auto position_relative float_left top_1vh">

            <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_flex_flow  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">

            <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_flex_flow border_025vh_dark_yellow_9 background_dark_yellow_0">

            </span>

            <span id="score_current_messages" class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">

            </span>

            <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">
              <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">
                <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">
                  <div class="calc_2vh_width margin_1vh position_relative float_left">
                    <p class="font_size_2vh line_height_205vh">
                    simple
                    </p>
                  </div>
                </div>
              </span>
            </span>

            </span>

            </span>

            </span>

          </span>

          <div class="position_absolute top_0 left_0 bottom_0 margin_auto width_10vh height_5vh float_right display_flex_flow">

            <div id="" class="gui_circle width_50 height_100 float_left position_relative float_left margin_auto">
            </div>

            <div id="" class="gui_circle width_50 height_100 float_left position_relative float_left margin_auto">
            </div>

            <div id="" class="gui_circle width_50 height_100 float_left position_relative float_left margin_auto">
            </div>

            <div id="" class="gui_circle width_50 height_100 float_left position_relative float_left margin_auto">
            </div>

          </div>

          <div class="position_absolute bottom_0 left_0 width_10vh height_10vh float_right">

            <div id="" class="gui_i width_100 height_50 float_left position_relative float_left margin_auto">
            </div>

            <div id="" class="gui_circle width_100 height_50 float_left position_relative float_left margin_auto">
            </div>

            <div id="time" class="position_relative float_left margin_auto">
            </div>

          </div>

        </div>

        <div id="component_app_gui_bottom_left" class="display_none opacity_0 easing_01 transform_translate3d_top0 width_10vh height_10vh float_left position_fixed bottom_0 left_0 margin_auto z_index_6">
          
          <div id="" class="gui_i width_25 height_100 float_left position_relative float_left margin_auto">
          </div>
          <div id="" class="gui_i width_25 height_100 float_left position_relative float_left margin_auto">
          </div>
          <div id="" class="gui_i width_25 height_100 float_left position_relative float_left margin_auto">
          </div>
          <div id="" class="gui_i width_25 height_100 float_left position_relative float_left margin_auto">
          </div>

          <span class="margin_auto position_relative margin_auto z_index_1 height_10vh display_flex_flow">

            <span class="margin_auto position_relative float_left top_0">

            <span class="margin_auto position_relative float_left top_1vh">

            <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_flex_flow  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">

            <span id="score_current_data" class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_flex_flow border_025vh_dark_yellow_9 background_dark_yellow_0">

            </span>

            <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">
              <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">
                <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">
                  <div class="calc_2vh_width margin_1vh position_relative float_left">
                    <p class="font_size_2vh line_height_205vh">
                    simple
                    </p>
                  </div>
                </div>
              </span>
            </span>

            </span>

            </span>

            </span>

          </span>

        </div>

        <div id="component_app_gui_bottom_center" class="display_none opacity_0 easing_01 transform_translate3d_top0 float_left display_flex_flow position_fixed calc_20vh_width bottom_0 left_0 right_0 margin_auto z_index_6">

          <span class="height_10vh margin_auto position_relative margin_auto z_index_1 display_flex_flow">

            <span class="margin_auto position_relative float_left top_0">

            <span class="margin_auto position_relative float_left top_1vh">

            <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_flex_flow  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">

            <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_flex_flow border_025vh_dark_yellow_9 background_dark_yellow_0">

            </span>

            <span id="score_current_fans" class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">

            </span>

            <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">
              <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">
                <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">
                  <div class="calc_2vh_width margin_1vh position_relative float_left">
                    <p class="font_size_2vh line_height_205vh">
                    simple
                    </p>
                  </div>
                </div>
              </span>
            </span>

            </span>

            </span>

            </span>

          </span>

        </div>

        <div id="component_app_gui_bottom_right" class="display_none opacity_0 easing_01 transform_translate3d_top0 width_10vh height_10vh float_left position_fixed bottom_0 right_0 margin_auto display_flex_flow z_index_6">

          <span class="margin_auto position_relative margin_auto z_index_1 display_flex_flow">

            <span class="margin_auto position_relative float_left top_0">

            <span class="margin_auto position_relative float_left top_1vh">

            <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_flex_flow  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">

            <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_flex_flow border_025vh_dark_yellow_9 background_dark_yellow_0">

            </span>

            <span id="score_current_likes" class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">

            </span>

            <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">
              <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">
                <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">
                  <div class="calc_2vh_width margin_1vh position_relative float_left">
                    <p class="font_size_2vh line_height_205vh">
                    simple
                    </p>
                  </div>
                </div>
              </span>
            </span>

            </span>

            </span>

            </span>

          </span>

        </div>

        <div id="footer" class="fadeIn delay10 animated1 position_fixed bottom_0 left_0 right_0 background_light_yellow_9 margin_auto width_100 height_5vh float_right z_index_6">
          
          <div class="position_relative margin_auto height_5vh float_left padding_1vh_left padding_1vh_right">
            
            <div class="position_relative margin_auto height_5vh width_5vh float_left display_flex_flow">
              
              <div id="" class="gui_i width_50 height_50 float_left position_relative float_left margin_auto">
              </div>
              
            </div>
            
            <a href="#gui_fold_component" class="position_relative margin_auto font_size_205vh line_height_5vh text_align_center float_left">
              Home
            </a>
            
          </div>

          <div class="position_relative margin_auto height_5vh float_left padding_1vh_left padding_1vh_right">
            
            <a href="#gui_content_component" class="position_relative margin_auto font_size_205vh line_height_5vh text_align_center float_left">
              Start
            </a>
            
          </div>

          <div class="position_relative margin_auto height_5vh float_left padding_1vh_left padding_1vh_right">
            
            <a href="#gui_content_component" class="position_relative margin_auto font_size_205vh line_height_5vh text_align_center float_left">
              Enter
            </a>
            
          </div>

          <div class="position_relative margin_auto height_5vh float_left padding_1vh_left padding_1vh_right">
            
            <a href="#gui_content_component" class="position_relative margin_auto font_size_205vh line_height_5vh text_align_center float_left">
              Learn
            </a>
            
          </div>
          
          <div class="position_relative margin_auto height_5vh float_left padding_1vh_left padding_1vh_right">
            
            <a href="#gui_fold_component" class="position_relative margin_auto font_size_205vh line_height_5vh text_align_center float_left">
              Search
            </a>
            
          </div>
          
          <div class="position_relative margin_auto height_5vh float_left padding_1vh_left padding_1vh_right">
            
            <a href="#gui_fold_component" class="position_relative margin_auto font_size_205vh line_height_5vh text_align_center float_left">
              About
            </a>
            
          </div>
          
          <div class="position_relative margin_auto height_5vh float_left padding_1vh_left padding_1vh_right">
            
            <a href="#gui_fold_component" class="position_relative margin_auto font_size_205vh line_height_5vh text_align_center float_left">
              Hire
            </a>
            
          </div>
          
          <div class="position_relative margin_auto height_5vh float_left padding_1vh_left padding_1vh_right">
            
            <a href="#gui_fold_component" class="position_relative margin_auto font_size_205vh line_height_5vh text_align_center float_left">
              Contact
            </a>
            
          </div>
          
          <div class="position_relative margin_auto width_5vh height_5vh float_right display_flex_flow">
            
            <div href="#gui_fold_component" class="gui_i width_50 height_50 float_left position_relative float_left margin_auto">
            </div>
            
          </div>
          
          <div class="position_relative margin_auto width_5vh height_5vh float_right display_flex_flow">
            
            <div href="#gui_fold_component" class="gui_i width_50 height_50 float_left position_relative float_left margin_auto">
            </div>
            
          </div>
          
          <div class="position_relative margin_auto width_5vh height_5vh float_right display_flex_flow">
            
            <div href="#gui_fold_component" class="gui_i width_50 height_50 float_left position_relative float_left margin_auto">
            </div>
            
          </div>
          
        </div>
    `;

  return element;
};

let wp_home_posts = () => {
  let component = "\
      <ol id='wp_component_post-home_content' class='display_none opacity_0 easing_01 transform_translate3d_top0 width_100 position_relative margin_auto float_left'>\
         <?php\
            if (have_posts()) :\
                while (have_posts()) : \
                    the_post(); ?>\
         <?php get_template_part( './wp_partials/posts/posts', 'home' ); ?>\
         <?php endwhile;\
            else:\
                echo '<p>NoContent Found</p>';\
            ?>\
         <?php endif; ?>\
      </ol>";

  return component;
};

let stage_load_verticle = () => {
  let component = '\
    <div id="component_app_stage_load_verticle" class="display_none opacity_0 easing_01 transform_translate3d_top0 width_100 height_100vh position_absolute top_0 left_0 margin_auto overflowhidden">\
      <div class="width_100 height_100 position_absolute bottom_0 left_0 margin_auto overflow_hidden animated1 enterBottomLeaveTop ">\
        <div class="width_100 height_100 margin_auto position_absolute top_0 left_0 right_0 float_left margin_auto">\
        </div>\
      </div>\
      <div class="width_100 height_100 position_absolute bottom_0 left_0 margin_auto overflow_hidden animated1 enterBottomLeaveTop delay05">\
        <div class="width_100 height_100 margin_auto position_absolute top_0 left_0 right_0 float_left margin_auto">\
        </div>\
      </div>\
      <div class="width_100 height_100 position_absolute bottom_0 left_0 margin_auto overflow_hidden animated1 enterBottomLeaveTop delay1">\
        <div class="width_100 height_100 margin_auto position_absolute top_0 left_0 right_0 float_left margin_auto">\
        </div>\
      </div>\
      <div class="width_100 height_100 position_absolute bottom_0 left_0 margin_auto overflow_hidden animated1 enterBottomLeaveTop delay15">\
        <div class="width_100 height_100 margin_auto position_absolute top_0 left_0 right_0 float_left margin_auto">\
        </div>\
      </div>\
      <div class="width_100 height_100 position_absolute bottom_0 left_0 margin_auto overflow_hidden animated1 enterBottomLeaveTop delay2">\
        <div class="width_100 height_100 margin_auto position_absolute top_0 left_0 right_0 float_left margin_auto">\
        </div>\
      </div>\
      <div class="width_100 height_100 position_absolute bottom_0 left_0 margin_auto overflow_hidden animated05 enterBottom delay25">\
        <div class="width_100 height_100 margin_auto position_absolute top_0 left_0 right_0 float_left margin_auto">\
        </div>\
      </div>\
    </div>\
    ';
  return component;
};

let stage_load_horizontal = () => {
  let component = '\
      <div id="component_app_stage_load_horizontal" class="display_none opacity_0 easing_01 transform_translate3d_top0 width_100 height_100vh position_fixed top_0 left_0 margin_auto overflowhidden">\
        <div class="width_100 height_100 position_absolute bottom_0 left_0 margin_auto overflow_hidden animated1 enterRightLeaveLeft ">\
          <div class="width_100 height_100 margin_auto position_absolute top_0 left_0 right_0 float_left margin_auto">\
          </div>\
        </div>\
        <div class="width_100 height_100 position_absolute bottom_0 left_0 margin_auto overflow_hidden animated1 enterRightLeaveLeft delay05">\
          <div class="width_100 height_100 margin_auto position_absolute top_0 left_0 right_0 float_left margin_auto">\
          </div>\
        </div>\
        <div class="width_100 height_100 position_absolute bottom_0 left_0 margin_auto overflow_hidden animated1 enterRightLeaveLeft delay1">\
          <div class="width_100 height_100 margin_auto position_absolute top_0 left_0 right_0 float_left margin_auto">\
          </div>\
        </div>\
        <div class="width_100 height_100 position_absolute bottom_0 left_0 margin_auto overflow_hidden animated1 enterRightLeaveLeft delay15">\
          <div class="width_100 height_100 margin_auto position_absolute top_0 left_0 right_0 float_left margin_auto">\
          </div>\
        </div>\
        <div class="width_100 height_100 position_absolute bottom_0 left_0 margin_auto overflow_hidden animated1 enterRightLeaveLeft delay2">\
          <div class="width_100 height_100 margin_auto position_absolute top_0 left_0 right_0 float_left margin_auto">\
          </div>\
        </div>\
        <div class="width_100 height_100 position_absolute bottom_0 left_0 margin_auto overflow_hidden animated05 enterRight delay25">\
          <div class="width_100 height_100 margin_auto position_absolute top_0 left_0 right_0 float_left margin_auto">\
          </div>\
        </div>\
      </div>\
    ';
  return component;
};

let element_colors = () => {
  let component = '\
    \
    <div id="component_color_load_light_yellow_0" class="display_none opacity_0 easing_01 transform_translate3d_top0 growverticle_from_onevh delay2 animated1 width_100vw height_100vh position_fixed top_0 left_0 margin_auto overflow_hidden">\
       \
       <div class="growhorizontal delay1 animated1 width_100 height_100 position_absolute top_0 left_0 margin_auto overflow_hidden background_light_yellow_0">\
       </div>\
    </div>\
    \
    <div id="component_color_load_dark_yellow_0" class="display_none opacity_0 easing_01 transform_translate3d_top0 growverticle_from_onevh delay2 animated1 width_100vw height_100vh position_fixed bottom_0 left_0 margin_auto overflow_hidden">\
       \
       <div class="growhorizontal delay1 animated1 width_100 height_100 position_absolute top_0 left_0 margin_auto overflow_hidden background_dark_yellow_0">\
       </div>\
       \
    </div>\
    \
    <div id="component_color_load_dark_yellow_0_radius" class="display_none opacity_0 easing_01 transform_translate3d_top0 position_fixed top_0 left_0 right_0 width_100 height_100 margin_auto">\
       \
       <div class="position_absolute top_0 bottom_0 left_0 right_0 calc_10vh z_index_1 margin_auto">\
          \
          <div class="position_absolute top_0 left_0 right_0 bottom_0 calc_5vh border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 border_01vh_dark_yellow_9 background_light_yellow_9 z_index_1 margin_auto">\
          </div>\
       </div>\
       \
    </div>\
    \
  ';

  return component;
};

let element_particles = () => {
  let component = '\
    \
        <div id="component_app_particle_game_players_1" class="display_none opacity_0 easing_01 transform_translate3d_top0 width_100 height_100vh position_fixed top_0 left_0 margin_auto">\
          <div id="component_app_particle_feature_players_player_1_think" class=" easing_01 display_none opacity_0 bottom_0 width_100 height_100 margin_auto position_absolute float_left margin_auto">\
            <div class="width_100 height_100 margin_auto position_absolute bottom_100 left_0 right_0 float_left margin_auto particle_think">\
            </div>\
          </div>\
          <div id="component_app_particle_feature_players_player_1_health_bar" class="display_none opacity_0 easing_01 transform_translate3d_top0 bottom_0 width_100 height_100 margin_auto position_absolute float_left margin_auto">\
            <div class="width_100 height_100 margin_auto position_absolute bottom_100 left_0 right_0 float_left margin_auto particle_health_bar">\
            </div>\
          </div>\
          <div id="component_app_particle_feature_players_helper_think" class="display_none opacity_0 easing_01 transform_translate3d_top0 bottom_0 width_100 height_100 margin_auto position_absolute float_left margin_auto">\
            <div class="width_100 height_100 margin_auto position_absolute bottom_100 left_0 right_0 float_left margin_auto particle_think">\
            </div>\
          </div>\
          <div id="component_app_particle_feature_players_helper_health_bar" class="display_none opacity_0 easing_01 transform_translate3d_top0 bottom_0 width_100 height_100 margin_auto position_absolute float_left margin_auto">\
            <div class="width_100 height_100 margin_auto position_absolute bottom_100 left_0 right_0 float_left margin_auto particle_health_bar">\
            </div>\
          </div>\
        </div>\
    \
  ';

  return component;
};

let element_interaction_player = () => {
  let component = `
    <div id="element_interaction_player" class="display_none opacity_0 easing_01 transform_translate3d_top0 width_100 height_100vh position_absolute top_0 left_0 margin_auto">
      
      <div id="component_app_interaction_easel" class="width_100 height_100 easing_01 position_absolute top_0 left_0 bottom_0 right_0 margin_auto">
        
      </div>
      
      <div id="bounce" class="display_none opacity_0 easing_01 transform_translate3d_top0 margin_auto position_absolute float_left margin_auto background_light_yellow_9 width_1205vw height_1205vh">
        
      </div>
      
      <div id="bullets" class="display_none opacity_0 easing_01 transform_translate3d_top0 margin_auto position_absolute float_left margin_auto width_100 height_100vh">
          
          <div id="bullets_verticle" class="margin_auto position_absolute float_left margin_auto width_100 height_100vh"></div>
          
          <div id="track_x" class="margin_auto position_absolute float_left margin_auto background_light_yellow_9 width_1vw height_1vh"></div>
          
          <div id="track_y" class="margin_auto position_absolute float_left margin_auto background_light_yellow_9 width_1vw height_1vh"></div>
          
      </div>
      
      <div id="element_ball" class="display_none opacity_0 easing_01 transform_translate3d_top0 width_5vh height_5vh background_light_yellow_9 float_left position_absolute easing_01">
        
      </div>
      
      <div id="component_app_interaction_game_players_1" class="display_none opacity_0 easing_01 transform_translate3d_top0 width_100 height_100 easing_01 position_absolute top_0 left_0 bottom_0 right_0 margin_auto">
          
          <div id="component_app_interaction_game_players_1_body" class="interaction_workspace_man_standing_1 opacity_1 easing_01 easing_01 width_1205vh height_50 margin_auto position_absolute bottom_0 left_0 float_left margin_auto">
          </div>
          
      </div>
      
      <div id="component_app_interaction_hands" class="display_none opacity_0 easing_01 transform_translate3d_top0 width_100 height_100 easing_01 position_absolute margin_auto">
          
          <div id="component_app_interaction_hand" class="interaction_hands width_100 height_100 margin_auto position_absolute bottom_0 left_-25 float_left margin_auto">
          </div>
          
      </div>
      
      <div id="component_app_interaction_enemy" class="display_none opacity_0 easing_01 transform_translate3d_top0 easing_01 margin_auto position_absolute bottom_0 left_0 float_left margin_auto interaction_workspace_man_standing_1">
        
      </div>
      
      <div id="component_app_interaction_helper_body" class="display_none opacity_0 easing_01 transform_translate3d_top0 easing_01 width_100 height_100 margin_auto position_absolute bottom_0 left_0 float_left margin_auto interaction_workspace_man_standing_1">
        
      </div>
      
      <div id="component_app_gui_logo_combo_feature_container" class="display_none opacity_0 easing_01 transform_translate3d_top0 position_absolute width_0 height_0 margin_auto float_left">
        <div id="component_app_gui_logo_combo_feature" class="position_absolute left_-50 top_-50 width_100 height_100 overflow_hidden float_left gui_keyhole">
        </div>
      </div>

      <div id="logo_load_container" class="display_none opacity_0 easing_01 transform_translate3d_top0 position_absolute margin_auto float_left width_0 height_0 ">
        <div id="component_app_gui_logo_combo_feature" class="position_absolute left_-50 top_-50 width_100 height_100 overflow_hidden float_left gui_key">
        </div>
      </div>
    </div>
    `;

  return component;
};

let element_accent_noise = () => {
  let component = '\
    <div id="component_app_accent_noise" class="display_none opacity_0 easing_01 transform_translate3d_top0 width_100 height_100vh position_fixed top_0 left_0 margin_auto">\
       \
       <div id="component_app_accent_opacity" class="width_100 height_100 opacity_01 position_absolute top_0 left_0 bottom_0 right_0 margin_auto accent_noise_1">\
       </div>\
       \
    </div>\
  ';

  return component;
};

let element_effect_vignette = () => {
  let component = '\
      <div id="effect_vignette" class="display_none opacity_0 easing_01 transform_translate3d_top0 width_100 height_100 position_fixed top_0 left_0 margin_auto effect_vignette"></div>\
  ';

  return component;
};

let value_ui_controls = '\
                \
                ' + element_scroll_y(element_container('\
                            \
                            ' + element_container('<div class="width_100 float_left position_relative">\
                            <div class="position_relative width_100 float_left font_size_4vh line_height_5vh">\
                            UI state:\
                            </div>\
                            <div class="position_relative width_100 float_left font_size_2vh line_height_3vh">\
                            Route State (Onboarding, Form, Search, Interaction):\
                            </div>\
                            <div class="width_100 float_left position_relative display opacity_1">Colors:</div>\
                                                <hr>\
                                                <div id="" class="width_100 float_left position_relative display opacity_1">load:</div>\
                                                <div class="width_100 float_left position_relative display opacity_1">player_1: \
                                                <div id="" class=" position_relative display opacity_1">null</div>\
                                                </div>\
                                                <hr>\
                                                <div class="width_100 float_left position_relative display opacity_1">Grid:</div>\
                                                <hr>\
                                                <div id="" class="width_100 float_left position_relative display opacity_1">Depth:</div>\
                                                <div class="width_100 float_left position_relative display opacity_1">90: \
                                                <div id="" class=" position_relative display opacity_1">null</div>\
                                                </div>\
                                                <div class="width_100 float_left position_relative display opacity_1">270: \
                                                <div id="" class=" position_relative display opacity_1">null</div>\
                                                </div>\
                                                <hr>\
                            <div class="width_100 float_left position_relative display opacity_1">Colors:</div>\
                                                <hr>\
                                                <div id="" class="width_100 float_left position_relative display opacity_1">load:</div>\
                                                <div class="width_100 float_left position_relative display opacity_1">player_1: \
                                                <div id="" class=" position_relative display opacity_1">null</div>\
                                                </div>\
                                                <hr>\
                                                <div class="width_100 float_left position_relative display opacity_1">Grid:</div>\
                                                <hr>\
                                                <div id="" class="width_100 float_left position_relative display opacity_1">Depth:</div>\
                                                <div class="width_100 float_left position_relative display opacity_1">90: \
                                                <div id="" class=" position_relative display opacity_1">null</div>\
                                                </div>\
                                                <div class="width_100 float_left position_relative display opacity_1">270: \
                                                <div id="" class=" position_relative display opacity_1">null</div>\
                                                </div>\
                                                <hr>\
                            <div class="width_100 float_left position_relative display opacity_1">Setting:</div>\
                                <hr>\
                                <div id="" class="width_100 float_left position_relative display opacity_1">Players:</div>\
                                <div class="width_100 float_left position_relative display opacity_1">player_1: \
                                <div id="" class=" position_relative display opacity_1">null</div>\
                                </div>\
                                <div class="width_100 float_left position_relative display opacity_1">player_2: \
                                <div id="" class=" position_relative display opacity_1">null</div>\
                                </div>\
                                <hr>\
                                <div class="width_100 float_left position_relative display opacity_1">Accent:</div>\
                                <hr>\
                                <div id="" class="width_100 float_left position_relative display opacity_1">Players:</div>\
                                <div class="width_100 float_left position_relative display opacity_1">player_1: \
                                <div id="" class=" position_relative display opacity_1">null</div>\
                                </div>\
                                <div class="width_100 float_left position_relative display opacity_1">player_2: \
                                <div id="" class=" position_relative display opacity_1">null</div>\
                                </div>\
                                <hr>\
                                <div class="width_100 float_left position_relative display opacity_1">Effect:</div>\
                                <hr>\
                                <div id="" class="width_100 float_left position_relative display opacity_1">Players:</div>\
                                <div class="width_100 float_left position_relative display opacity_1">player_1: \
                                <div id="" class=" position_relative display opacity_1">null</div>\
                                </div>\
                                <div class="width_100 float_left position_relative display opacity_1">player_2: \
                                <div id="" class=" position_relative display opacity_1">null</div>\
                                </div>\
                                <hr>\
                                <div class="width_100 float_left position_relative display opacity_1">Pieces:</div>\
                                <hr>\
                                <div id="" class="width_100 float_left position_relative display opacity_1">Players:</div>\
                                <div class="width_100 float_left position_relative display opacity_1">player_1: \
                                <div id="" class=" position_relative display opacity_1">null</div>\
                                </div>\
                                <div class="width_100 float_left position_relative display opacity_1">player_2: \
                                <div id="" class=" position_relative display opacity_1">null</div>\
                                </div>\
                                <hr>\
                                <div class="width_100 float_left position_relative display opacity_1">Particles:</div>\
                                <hr>\
                                <div id="" class="width_100 float_left position_relative display opacity_1">Players:</div>\
                                <div class="width_100 float_left position_relative display opacity_1">player_1: \
                                <div id="" class=" position_relative display opacity_1">null</div>\
                                </div>\
                                <div class="width_100 float_left position_relative display opacity_1">player_2: \
                                <div id="" class=" position_relative display opacity_1">null</div>\
                                </div>\
                                <hr>\
                                <div class="width_100 float_left position_relative display opacity_1">Interaction:</div>\
                                <hr>\
                                <div id="" class="width_100 float_left position_relative display opacity_1">Players:</div>\
                                <div class="width_100 float_left position_relative display opacity_1">player_1: \
                                <div id="" class=" position_relative display opacity_1">null</div>\
                                </div>\
                                <div class="width_100 float_left position_relative display opacity_1">player_2: \
                                <div id="" class=" position_relative display opacity_1">null</div>\
                                </div>\
                                <hr>\
                                <div id="" class="width_100 float_left position_relative display opacity_1">Characters:</div>\
                                <hr>\
                                <div class="width_100 float_left position_relative display opacity_1">enemies: \
                                <div id="" class=" position_relative display opacity_1">null</div>\
                                </div>\
                                <hr>\
                                <hr>\
                                <div class="width_100 float_left position_relative display opacity_1">Route:</div>\
                                <hr>\
                                <div class="width_100 float_left position_relative display opacity_1">Materials: \
                                <div id="route" class=" position_relative display opacity_1">materials</div>\
                                </div>\
                                <hr>\
                                <div class="width_100 float_left position_relative display opacity_1">Gui:</div>\
                                <hr>\
                                <div class="width_100 float_left position_relative display opacity_1">logo: \
                                <div id="component_app_status_display_gui_element_logo" class=" position_relative display opacity_1">null</div>\
                                </div>\
                                <hr>\
                                <div class="width_100 float_left position_relative display opacity_1">arrows: \
                                <div id="component_app_status_display_gui_element_arrows" class=" position_relative display opacity_1">null</div>\
                                </div>\
                                <hr>\
                                <div class="width_100 float_left position_relative display opacity_1">buttons: \
                                <div id="component_app_status_display_gui_element_buttons" class=" position_relative display opacity_1">null</div>\
                                </div>\
                                <hr>\
                                <div class="width_100 float_left position_relative display opacity_1 font_size_5vh line_height_10vh">Modal:</div>\
                                \
                                <div class="width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh">pop</div>\
                                \
                                <div class="width_100 float_left position_relative display opacity_1">top: \
                                </div>\
                                \
                                <div class="width_100 float_left position_relative display opacity_1">display: \
                                <div id="component_app_status_display_pop_top" class=" position_relative display opacity_1">null</div>\
                                </div>\
                                \
                                <div class="width_100 float_left position_relative display opacity_1">opacity: \
                                <div id="component_app_status_opacity_pop_top" class=" position_relative display opacity_1">null</div>\
                                </div>\
                                \
                                <div class="width_100 float_left position_relative display opacity_1">transform: \
                                <div id="component_app_status_transform_pop_top" class=" position_relative display opacity_1">null</div>\
                                </div>\
                                \
                                <hr>\
                                \
                                <div class="width_100 float_left position_relative display opacity_1">bottom: \
                                </div>\
                                \
                                <div class="width_100 float_left position_relative display opacity_1">display: \
                                <div id="component_app_status_display_pop_bottom" class=" position_relative display opacity_1">null</div>\
                                </div>\
                                \
                                <div class="width_100 float_left position_relative display opacity_1">opacity: \
                                <div id="component_app_status_opacity_pop_bottom" class=" position_relative display opacity_1">null</div>\
                                </div>\
                                \
                                <div class="width_100 float_left position_relative display opacity_1">transform: \
                                <div id="component_app_status_transform_pop_bottom" class=" position_relative display opacity_1">null</div>\
                                </div>\
                                \
                                <hr>\
                                \
                                <div class="width_100 float_left position_relative display opacity_1">left: \
                                </div>\
                                \
                                <div class="width_100 float_left position_relative display opacity_1">display: \
                                <div id="component_app_status_display_pop_left" class=" position_relative display opacity_1">null</div>\
                                </div>\
                                \
                                <div class="width_100 float_left position_relative display opacity_1">opacity: \
                                <div id="component_app_status_opacity_pop_left" class=" position_relative display opacity_1">null</div>\
                                </div>\
                                \
                                <div class="width_100 float_left position_relative display opacity_1">transform: \
                                <div id="component_app_status_transform_pop_left" class=" position_relative display opacity_1">null</div>\
                                </div>\
                                \
                                <hr>\
                                \
                        <div class="width_100 float_left position_relative display opacity_1">right: \
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">display: \
                        <div id="component_app_status_display_pop_right" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">opacity: \
                        <div id="component_app_status_opacity_pop_right" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">transform: \
                        <div id="component_app_status_transform_pop_right" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <hr>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh">nav</div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">top: \
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">display: \
                        <div id="component_app_status_display_nav_top" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">opacity: \
                        <div id="component_app_status_opacity_nav_top" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">transform: \
                        <div id="component_app_status_transform_nav_top" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <hr>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">bottom: \
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">display: \
                        <div id="component_app_status_display_nav_bottom" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">opacity: \
                        <div id="component_app_status_opacity_nav_bottom" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">transform: \
                        <div id="component_app_status_transform_nav_bottom" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <hr>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">left: \
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">display: \
                        <div id="component_app_status_display_nav_left" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">opacity: \
                        <div id="component_app_status_opacity_nav_left" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">transform: \
                        <div id="component_app_status_transform_nav_left" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <hr>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">right: \
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">display: \
                        <div id="component_app_status_display_nav_right" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">opacity: \
                        <div id="component_app_status_opacity_nav_right" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">transform: \
                        <div id="component_app_status_transform_nav_right" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <hr>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh">page</div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">top: \
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">display: \
                        <div id="component_app_status_display_page_top" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">opacity: \
                        <div id="component_app_status_opacity_page_top" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">transform: \
                        <div id="component_app_status_transform_page_top" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <hr>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">bottom: \
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">display: \
                        <div id="component_app_status_display_page_bottom" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">opacity: \
                        <div id="component_app_status_opacity_page_bottom" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">transform: \
                        <div id="component_app_status_transform_page_bottom" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <hr>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">left: \
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">display: \
                        <div id="component_app_status_display_page_left" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">opacity: \
                        <div id="component_app_status_opacity_page_left" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">transform: \
                        <div id="component_app_status_transform_page_left" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <hr>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">right: \
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">display: \
                        <div id="component_app_status_display_page_right" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">opacity: \
                        <div id="component_app_status_opacity_page_right" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">transform: \
                        <div id="component_app_status_transform_page_right" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <hr>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh">menu</div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">top: \
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">display: \
                        <div id="component_app_status_display_menu_top" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">opacity: \
                        <div id="component_app_status_opacity_menu_top" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">transform: \
                        <div id="component_app_status_transform_menu_top" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <hr>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">bottom: \
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">display: \
                        <div id="component_app_status_display_menu_bottom" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">opacity: \
                        <div id="component_app_status_opacity_menu_bottom" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">transform: \
                        <div id="component_app_status_transform_menu_bottom" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <hr>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">left: \
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">display: \
                        <div id="component_app_status_display_menu_left" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">opacity: \
                        <div id="component_app_status_opacity_menu_left" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">transform: \
                        <div id="component_app_status_transform_menu_left" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <hr>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">right: \
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">display: \
                        <div id="component_app_status_display_menu_right" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">opacity: \
                        <div id="component_app_status_opacity_menu_right" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">transform: \
                        <div id="component_app_status_transform_menu_right" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <hr>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh">morph</div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">top: \
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">display: \
                        <div id="component_app_status_display_morph_top" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">opacity: \
                        <div id="component_app_status_opacity_morph_top" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">transform: \
                        <div id="component_app_status_transform_morph_top" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <hr>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">bottom: \
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">display: \
                        <div id="component_app_status_display_morph_bottom" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">opacity: \
                        <div id="component_app_status_opacity_morph_bottom" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">transform: \
                        <div id="component_app_status_transform_morph_bottom" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <hr>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">left: \
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">display: \
                        <div id="component_app_status_display_morph_left" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">opacity: \
                        <div id="component_app_status_opacity_morph_left" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">transform: \
                        <div id="component_app_status_transform_morph_left" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <hr>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">right: \
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">display: \
                        <div id="component_app_status_display_morph_right" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">opacity: \
                        <div id="component_app_status_opacity_morph_right" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">transform: \
                        <div id="component_app_status_transform_morph_right" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <hr>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh">corner</div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">top: \
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">display: \
                        <div id="component_app_status_display_corner_top" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">opacity: \
                        <div id="component_app_status_opacity_corner_top" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">transform: \
                        <div id="component_app_status_transform_corner_top" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <hr>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">bottom: \
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">display: \
                        <div id="component_app_status_display_corner_bottom" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">opacity: \
                        <div id="component_app_status_opacity_corner_bottom" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">transform: \
                        <div id="component_app_status_transform_corner_bottom" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <hr>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">left: \
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">display: \
                        <div id="component_app_status_display_corner_left" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">opacity: \
                        <div id="component_app_status_opacity_corner_left" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">transform: \
                        <div id="component_app_status_transform_corner_left" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <hr>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">right: \
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">display: \
                        <div id="component_app_status_display_corner_right" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">opacity: \
                        <div id="component_app_status_opacity_corner_right" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">transform: \
                        <div id="component_app_status_transform_corner_right" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <hr>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh">gradient</div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">top: \
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">display: \
                        <div id="component_app_status_display_gradient_top" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">opacity: \
                        <div id="component_app_status_opacity_gradient_top" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">transform: \
                        <div id="component_app_status_transform_gradient_top" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <hr>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">bottom: \
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">display: \
                        <div id="component_app_status_display_gradient_bottom" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">opacity: \
                        <div id="component_app_status_opacity_gradient_bottom" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">transform: \
                        <div id="component_app_status_transform_gradient_bottom" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <hr>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">left: \
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">display: \
                        <div id="component_app_status_display_gradient_left" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">opacity: \
                        <div id="component_app_status_opacity_gradient_left" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">transform: \
                        <div id="component_app_status_transform_gradient_left" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <hr>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">right: \
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">display: \
                        <div id="component_app_status_display_gradient_right" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">opacity: \
                        <div id="component_app_status_opacity_gradient_right" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">transform: \
                        <div id="component_app_status_transform_gradient_right" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <hr>\
                        <hr>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh">fade</div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">top: \
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">display: \
                        <div id="component_app_status_display_fade_top" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">opacity: \
                        <div id="component_app_status_opacity_fade_top" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">transform: \
                        <div id="component_app_status_transform_fade_top" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <hr>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">bottom: \
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">display: \
                        <div id="component_app_status_display_fade_bottom" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">opacity: \
                        <div id="component_app_status_opacity_fade_bottom" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">transform: \
                        <div id="component_app_status_transform_fade_bottom" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <hr>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">left: \
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">display: \
                        <div id="component_app_status_display_fade_left" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">opacity: \
                        <div id="component_app_status_opacity_fade_left" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">transform: \
                        <div id="component_app_status_transform_fade_left" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <hr>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">right: \
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">display: \
                        <div id="component_app_status_display_fade_right" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">opacity: \
                        <div id="component_app_status_opacity_fade_right" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">transform: \
                        <div id="component_app_status_transform_fade_right" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <hr>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh">overlay</div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">top: \
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">display: \
                        <div id="component_app_status_display_overlay_top" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">opacity: \
                        <div id="component_app_status_opacity_overlay_top" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">transform: \
                        <div id="component_app_status_transform_overlay_top" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <hr>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">bottom: \
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">display: \
                        <div id="component_app_status_display_overlay_bottom" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">opacity: \
                        <div id="component_app_status_opacity_overlay_bottom" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">transform: \
                        <div id="component_app_status_transform_overlay_bottom" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <hr>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">left: \
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">display: \
                        <div id="component_app_status_display_overlay_left" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">opacity: \
                        <div id="component_app_status_opacity_overlay_left" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">transform: \
                        <div id="component_app_status_transform_overlay_left" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <hr>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">right: \
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">display: \
                        <div id="component_app_status_display_overlay_right" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">opacity: \
                        <div id="component_app_status_opacity_overlay_right" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1">transform: \
                        <div id="component_app_status_transform_overlay_right" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        <hr>\
                        \
                        <div class="width_100 float_left position_relative display opacity_1 font_size_10vh line_height_10vh">events:</div>\
                        <div class="width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh">mouse:</div>\
                        <div class="width_100 float_left position_relative display opacity_1">ClientX: \
                        <div id="component_app_status_state_events_mouse_clientX" class=" position_relative display opacity_1"></div>\
                        </div>\
                        <div class="width_100 float_left position_relative display opacity_1">ClientY: \
                        <div id="component_app_status_state_events_mouse_clientY" class=" position_relative display opacity_1"></div>\
                        </div>\
                        <div class="width_100 float_left position_relative display opacity_1">AxisX: \
                        <div id="component_app_status_state_events_mouse_x_axis" class=" position_relative display opacity_1"></div>\
                        </div>\
                        <div class="width_100 float_left position_relative display opacity_1">AxisY: \
                        <div id="component_app_status_state_events_mouse_y_axis" class=" position_relative display opacity_1"></div>\
                        </div>\
                        <div class="width_100 float_left position_relative display opacity_1">Oriontation.Absolute: \
                        <div id="component_app_status_state_events_mouse_absolute" class=" position_relative display opacity_1"></div>\
                        </div>\
                        <div class="width_100 float_left position_relative display opacity_1">Oriontation.Alpha: \
                        <div id="component_app_status_state_events_mouse_alpha" class=" position_relative display opacity_1"></div>\
                        </div>\
                        <div class="width_100 float_left position_relative display opacity_1">Oriontation.Beta: \
                        <div id="component_app_status_state_events_mouse_beta" class=" position_relative display opacity_1"></div>\
                        </div>\
                        <div class="width_100 float_left position_relative display opacity_1">Oriontation.Gamma: \
                        <div id="component_app_status_state_events_mouse_gamma" class=" position_relative display opacity_1"></div>\
                        </div>\
                        <div class="width_100 float_left position_relative display opacity_1">acceleration.x: \
                        <div id="component_app_status_state_events_mouse_acceleration_x" class=" position_relative display opacity_1"></div>\
                        </div>\
                        <div class="width_100 float_left position_relative display opacity_1">acceleration.y: \
                        <div id="component_app_status_state_events_mouse_acceleration_y" class=" position_relative display opacity_1"></div>\
                        </div>\
                        <div class="width_100 float_left position_relative display opacity_1">acceleration.z: \
                        <div id="component_app_status_state_events_mouse_acceleration_z" class=" position_relative display opacity_1"></div>\
                        </div>\
                        <div class="width_100 float_left position_relative display opacity_1">accelerationIncludingGravity.x: \
                        <div id="component_app_status_state_events_mouse_accelerationIncludingGravity_x" class=" position_relative display opacity_1"></div>\
                        </div>\
                        <div class="width_100 float_left position_relative display opacity_1">accelerationIncludingGravity.y: \
                        <div id="component_app_status_state_events_mouse_accelerationIncludingGravity_y" class=" position_relative display opacity_1"></div>\
                        </div>\
                        <div class="width_100 float_left position_relative display opacity_1">accelerationIncludingGravity.z: \
                        <div id="component_app_status_state_events_mouse_accelerationIncludingGravity_z" class=" position_relative display opacity_1"></div>\
                        </div>\
                        <div class="width_100 float_left position_relative display opacity_1">rotationRate.Alpha: \
                        <div id="component_app_status_state_events_mouse_rotationRate_alpha" class=" position_relative display opacity_1"></div>\
                        </div>\
                        <div class="width_100 float_left position_relative display opacity_1">rotationRate.Beta: \
                        <div id="component_app_status_state_events_mouse_rotationRate_beta" class=" position_relative display opacity_1"></div>\
                        </div>\
                        <div class="width_100 float_left position_relative display opacity_1">rotationRate.Gamma: \
                        <div id="component_app_status_state_events_mouse_rotationRate_gamma" class=" position_relative display opacity_1"></div>\
                        </div>\
                        <div class="width_100 float_left position_relative display opacity_1 font_size_5vh line_height_5vh">ux:</div>\
                        <div class="width_100 float_left position_relative display opacity_1">dimensions:</div>\
                        <div class="width_100 float_left position_relative display opacity_1">width: \
                        <div id="component_app_status_state_ux_dimensions_width" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        <div class="width_100 float_left position_relative display opacity_1">height: \
                        <div id="component_app_status_state_ux_dimensions_height" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        <div class="width_100 float_left position_relative display opacity_1">browser:</div>\
                        <div class="width_100 float_left position_relative display opacity_1">width: \
                        <div id="component_app_status_state_ux_browser_width" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        <div class="width_100 float_left position_relative display opacity_1">height: \
                        <div id="component_app_status_state_ux_browser_height" class=" position_relative display opacity_1">null</div>\
                        </div>\
                        \
                        </div>\
                            \
                          ', 'calc_4vh padding_1vh margin_1vh float_left position_relative') + '\
                          \
                        ', 'width_100 float_left position_relative')) + '\
                        \
                \
    ';

// navigations


let element_nav_top = `
    <div id="component_app_modal_element_nav_top" class="easing_01 display_none opacity_0 easing_01 transform_translate3d_top0 position_fixed top_0 left_0 right_0 height_10vh width_100 z_index_6 ">\
      
      <div class="position_relative display_flex_flow z_index_1 float_left width_10vh height_10vh">\
      </div>\

      <div class="position_relative display_flex_flow z_index_1 float_left">\
          
        <span class="margin_auto position_relative float_left z_index_1 ">

          <span class="margin_auto padding_205vh_top padding_205vh_bottom padding_205vh_left position_relative float_left z_index_1 ">

              <span class="margin_auto margin_1vh_left position_relative float_left z_index_1 display_flex_flow">

                <span class="margin_auto position_relative float_left top_0">

                <span class="margin_auto position_relative float_left top_1vh">

                <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_flex_flow  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">

                <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_flex_flow border_025vh_dark_yellow_9 background_dark_yellow_0">

                </span>

                <span id="" class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">
                  Library
                </span>

                <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">
                  <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">
                    <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">
                      <div class="calc_2vh_width margin_1vh position_relative float_left">
                        <p class="font_size_2vh line_height_205vh">
                        simple
                        </p>
                      </div>
                    </div>
                  </span>
                </span>

                </span>

                </span>

                </span>

              </span>

          </span>

          <span class="margin_auto padding_205vh_top padding_205vh_bottom padding_205vh_left position_relative float_left z_index_1 ">

              <span class="margin_auto margin_1vh_left position_relative float_left z_index_1 display_flex_flow">

                <span class="margin_auto position_relative float_left top_0">

                <span class="margin_auto position_relative float_left top_1vh">

                <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_flex_flow  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">

                <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_flex_flow border_025vh_dark_yellow_9 background_dark_yellow_0">

                </span>

                <span id="" class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">
                  Partners
                </span>

                <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">
                  <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">
                    <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">
                      <div class="calc_2vh_width margin_1vh position_relative float_left">
                        <p class="font_size_2vh line_height_205vh">
                        simple
                        </p>
                      </div>
                    </div>
                  </span>
                </span>

                </span>

                </span>

                </span>

              </span>

          </span>

          <span class="margin_auto padding_205vh_top padding_205vh_bottom padding_205vh_left position_relative float_left z_index_1 ">

              <span class="margin_auto margin_1vh_left position_relative float_left z_index_1 display_flex_flow">

                <span class="margin_auto position_relative float_left top_0">

                <span class="margin_auto position_relative float_left top_1vh">

                <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_flex_flow  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">

                <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_flex_flow border_025vh_dark_yellow_9 background_dark_yellow_0">

                </span>

                <span id="" class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">
                  Process
                </span>

                <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">
                  <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">
                    <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">
                      <div class="calc_2vh_width margin_1vh position_relative float_left">
                        <p class="font_size_2vh line_height_205vh">
                        simple
                        </p>
                      </div>
                    </div>
                  </span>
                </span>

                </span>

                </span>

                </span>

              </span>

          </span>

        </span>

      </div>\

      <div class="position_relative display_flex_flow z_index_1 float_right">\
          
        <span class="margin_auto position_relative float_left z_index_1 ">
          <span class="margin_auto padding_205vh_top padding_205vh_bottom position_relative float_left z_index_1 ">
              <div id="" class="gui_i width_5vh height_5vh float_left position_relative float_left margin_auto margin_1vh_left">
              </div>
          </span>

          <span class="margin_auto padding_205vh_top padding_205vh_bottom position_relative float_left z_index_1 ">
              <div id="" class="gui_circle width_5vh height_5vh float_left position_relative float_left margin_auto margin_1vh_left">
              </div>
          </span>

          <span id="hire" class="margin_auto padding_205vh_top padding_205vh_bottom padding_205vh_right position_relative float_left z_index_7 ">

                    <span class="margin_auto position_relative float_left z_index_1 display_flex_flow">

                      <span class="margin_auto position_relative float_left top_0">

                      <span class="margin_auto position_relative float_left top_1vh">

                      <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_flex_flow  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">

                      <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_flex_flow border_025vh_dark_yellow_9 background_dark_yellow_0">

                      </span>

                      <div class=" width_5vh height_5vh float_left position_relative float_left margin_auto display_flex_flow">
                        <div class="gui_i width_50 height_50 float_left position_relative float_left margin_auto margin_auto">
                        </div>
                      </div>

                      <span id="" class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh_right padding_1vh_top padding_1vh_bottom float_right">
                        Hire a Dj
                      </span>

                      <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">
                        <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">
                          <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">
                            <div class="calc_2vh_width margin_1vh position_relative float_left">
                              <p class="font_size_2vh line_height_205vh">
                              simple
                              </p>
                            </div>
                          </div>
                        </span>
                      </span>

                      </span>

                      </span>

                      </span>

                    </span>

                </span>

        </span>

      </div>\

    </div>\
    `;

let element_nav_left = '\
    <div id="component_app_modal_element_nav_left" class="easing_01 transform_translate3d_left0 display_none opacity_0 position_fixed top_0 left_0 bottom_0 height_100 width_10vh z_index_6 margin_auto">\
      \
      <div class="position_absolute bottom_0 left_0 right_0 float_left calc_02vh display_flex_flow border_01vh_dark_yellow_9">\
      </div>\
      \
    </div>\
    ';

let element_nav_bottom = '\
    <div id="component_app_modal_element_nav_bottom" class="easing_01 transform_translate3d_top0 display_none opacity_0 position_fixed bottom_0 left_0 right_0 height_10vh width_100 z_index_6 display_flex_flow margin_auto">\
      \
    </div>\
    ';

let element_nav_right = '\
    <div id="component_app_modal_element_nav_right" class="easing_01 transform_translate3d_left0 display_none opacity_0 position_fixed top_0 bottom_0 right_0 height_100 width_10vh z_index_6 margin_auto">\
      \
    </div>\
    ';

let element_page_top = `
    <div id="component_app_modal_element_page_top" class="easing_01 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 height_100vh width_100 z_index_6 margin_auto">
      <div id="component_app_modal_element_page_top_content" class="position_absolute top_0 left_0 right_0 bottom_0 calc_02vh overflow_hidden box_shadow_bottom_1vh_dark border_01vh_dark_yellow_9 background_light_yellow_9 z_index_6 margin_auto">
      
        ${element_gui_scroll_y()};

      </div>
    </div>
    `;

let element_page_left = '\
    <div id="component_app_modal_element_page_left" class="easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 left_0 bottom_0 height_100vh width_100 z_index_6 margin_auto">\
      <div id="component_app_modal_element_page_left_content" class="position_absolute top_0 left_0 right_0 bottom_0 calc_02vh overflow_hidden box_shadow_bottom_1vh_dark border_01vh_dark_yellow_9 background_light_yellow_9 z_index_6 margin_auto">\
      \
      \
      </div>\
    </div>\
    ';

let element_page_bottom = `
    <div id="component_app_modal_element_page_bottom" class="easing_01 transform_translate3d_top0 opacity_0 display_none position_fixed bottom_0 left_0 right_0 height_100vh width_100 margin_auto z_index_6">
      <div id="component_app_modal_element_page_bottom_content" class="position_absolute top_0 left_0 right_0 bottom_0 calc_02vh overflow_hidden box_shadow_bottom_1vh_dark border_01vh_dark_yellow_9 background_light_yellow_9 margin_auto">
        
      </div>
    </div>
    `;

let element_page_right = '\
    <div id="component_app_modal_element_page_right" class="easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 bottom_0 right_0 height_100vh width_100 margin_auto z_index_6">\
      <div id="component_app_modal_element_page_right_content" class="position_absolute top_0 left_0 right_0 bottom_0 calc_02vh overflow_hidden box_shadow_bottom_1vh_dark border_01vh_dark_yellow_9 background_light_yellow_9 margin_auto">\
      \
      \
      </div>\
    </div>\
    ';

let element_pop_top = `
    <div id="component_app_modal_element_pop_top" class="easing_01 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 width_100 height_100 margin_auto overflow_hidden z_index_6">
      <div id="component_app_modal_element_pop_top_content" class="position_absolute top_0 left_0 right_0 bottom_0 calc_25vh overflow_hidden border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 border_01vh_dark_yellow_9 background_light_yellow_9 margin_auto">
        ${value_ui_controls}
      </div>
    </div>
  `;

let element_pop_left = '\
  <div id="component_app_modal_element_pop_left" class="easing_01 display_none opacity_0 transform_translate3d_left0 position_fixed top_0 left_0 right_0 width_100 height_100 margin_auto z_index_6">\
      <div class="position_absolute top_0 left_0 right_0 bottom_0 calc_25vh overflow_hidden border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 border_01vh_dark_yellow_9 background_dark_yellow_9 margin_auto">\
    </div>\
  </div>\
  ';

let element_pop_bottom = '\
        <div id="component_app_modal_element_pop_bottom" class="easing_01 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 width_100 height_100 margin_auto z_index_6">\
        \
        <div class="position_absolute top_0 left_0 right_0 bottom_0 calc_25vh overflow_hidden border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 border_01vh_dark_yellow_9 background_light_yellow_9 z_index_6 margin_auto">\
        \
        </div>\
        \
        </div>\
  ';

let element_pop_right = '\
  <div id="component_app_modal_element_pop_right" class="easing_01 display_none opacity_0 transform_translate3d_left0 position_fixed top_0 left_0 right_0 width_100 height_100 margin_auto z_index_6">\
      <div class="position_absolute top_0 left_0 right_0 bottom_0 calc_25vh overflow_hidden border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 border_01vh_dark_yellow_9 background_light_yellow_9 z_index_6 margin_auto">\
    </div>\
  </div>\
  ';

let element_morph_top = '\
    <div id="component_app_modal_element_morph_top" class="easing_01 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 calc_25vh margin_auto z_index_6">\
    </div>\
    ';

let element_morph_left = '\
    <div id="component_app_modal_element_morph_left" class="easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 left_0 bottom_0 calc_25vh margin_auto z_index_6">\
    </div>\
    ';

let element_morph_bottom = '\
    <div id="component_app_modal_element_morph_bottom" class="easing_01 transform_translate3d_top0 opacity_0 display_none position_fixed bottom_0 left_0 right_0 calc_25vh margin_auto z_index_6">\
    </div>\
    ';

let element_morph_right = '\
    <div id="component_app_modal_element_morph_right" class="easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 bottom_0 right_0 calc_25vh margin_auto z_index_6">\
    </div>\
    ';

let element_corner_top = '\
    <div id="component_app_modal_element_corner_top" class="easing_01 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 calc_25vh margin_auto z_index_6">\
    </div>\
    ';

let element_corner_left = '\
    <div id="component_app_modal_element_corner_left" class="easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 left_0 bottom_0 calc_25vh margin_auto z_index_6">\
    </div>\
    ';

let element_corner_bottom = '\
    <div id="component_app_modal_element_corner_bottom" class="easing_01 transform_translate3d_top0 opacity_0 display_none position_fixed bottom_0 left_0 right_0 calc_25vh margin_auto z_index_6">\
    </div>\
    ';

let element_corner_right = '\
    <div id="component_app_modal_element_corner_right" class="easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 bottom_0 right_0 calc_25vh margin_auto z_index_6">\
    </div>\
    ';

let element_menu_top = '\
    <div id="component_app_modal_element_menu_top" class="easing_01 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 calc_25vh margin_auto z_index_6">\
    </div>\
    ';

let element_menu_left = '\
    <div id="component_app_modal_element_menu_left" class="easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 left_0 bottom_0 calc_25vh margin_auto z_index_6">\
    </div>\
    ';

let element_menu_bottom = '\
    <div id="component_app_modal_element_menu_bottom" class="easing_01 transform_translate3d_top0 opacity_0 display_none position_fixed bottom_0 left_0 right_0 calc_25vh margin_auto z_index_6">\
    </div>\
    ';

let element_menu_right = '\
    <div id="component_app_modal_element_menu_right" class="easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 bottom_0 right_0 calc_25vh margin_auto z_index_6">\
    </div>\
    ';

let element_fade_top = '\
    <div id="component_app_modal_element_fade_top" class="easing_01 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 calc_25vh margin_auto z_index_6">\
    </div>\
    ';

let element_fade_left = '\
    <div id="component_app_modal_element_fade_left" class="easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 left_0 bottom_0 calc_25vh margin_auto z_index_6">\
    </div>\
    ';

let element_fade_bottom = '\
    <div id="component_app_modal_element_fade_bottom" class="easing_01 transform_translate3d_top0 opacity_0 display_none position_fixed bottom_0 left_0 right_0 calc_25vh margin_auto z_index_6">\
    </div>\
    ';

let element_fade_right = '\
    <div id="component_app_modal_element_fade_right" class="easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 bottom_0 right_0 calc_25vh margin_auto z_index_6">\
    </div>\
    ';

let element_overlay_top = '\
    <div id="component_app_modal_element_overlay_top" class="easing_01 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 width_100 height_100 margin_auto z_index_6">\
      <div class="position_absolute top_0 left_0 right_0 bottom_0 width_100 height_100 opacity_02 overflow_hidden box_shadow_bottom_1vh_dark border_01vh_dark_yellow_9 background_light_yellow_9 margin_auto">\
      \
      </div>\
      <div id="component_app_modal_element_overlay_top_content" class="position_absolute top_0 left_0 right_0 bottom_0 calc_02vh opacity_02 overflow_hidden box_shadow_bottom_1vh_dark border_01vh_dark_yellow_9 background_light_yellow_9 margin_auto">\
      \
      </div>\
    </div>\
    ';

let element_overlay_left = '\
    <div id="component_app_modal_element_overlay_left" class="easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 left_0 bottom_0 width_100 height_100 margin_auto z_index_6">\
      <div class="position_absolute top_0 left_0 right_0 bottom_0 width_100 height_100 opacity_02 overflow_hidden box_shadow_bottom_1vh_dark border_01vh_dark_yellow_9 background_light_yellow_9 margin_auto">\
      \
      </div>\
      <div id="component_app_modal_element_overlay_left_content" class="position_absolute top_0 left_0 right_0 bottom_0 calc_02vh opacity_02 overflow_hidden box_shadow_bottom_1vh_dark border_01vh_dark_yellow_9 background_light_yellow_9 margin_auto">\
      \
      </div>\
    </div>\
    ';

let element_overlay_bottom = '\
    <div id="component_app_modal_element_overlay_bottom" class="easing_01 transform_translate3d_top0 opacity_0 display_none position_fixed bottom_0 left_0 right_0 width_100 height_100 margin_auto z_index_6">\
      <div class="position_absolute top_0 left_0 right_0 bottom_0 width_100 height_100 opacity_02 overflow_hidden box_shadow_bottom_1vh_dark border_01vh_dark_yellow_9 background_light_yellow_9 margin_auto">\
      \
      </div>\
      <div id="component_app_modal_element_overlay_bottom_content" class="position_absolute top_0 left_0 right_0 bottom_0 calc_02vh opacity_02 overflow_hidden box_shadow_bottom_1vh_dark border_01vh_dark_yellow_9 background_light_yellow_9 margin_auto">\
      \
      </div>\
    </div>\
    ';

let element_overlay_right = '\
    <div id="component_app_modal_element_overlay_right" class="easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 bottom_0 right_0 width_100 height_100 margin_auto z_index_6">\
      <div class="position_absolute top_0 left_0 right_0 bottom_0 width_100 height_100 opacity_02 overflow_hidden box_shadow_bottom_1vh_dark border_01vh_dark_yellow_9 background_light_yellow_9 margin_auto">\
      \
      </div>\
      <div id="component_app_modal_element_overlay_right_content" class="position_absolute top_0 left_0 right_0 bottom_0 calc_02vh opacity_02 overflow_hidden box_shadow_bottom_1vh_dark border_01vh_dark_yellow_9 background_light_yellow_9 margin_auto">\
      \
      </div>\
    </div>\
    ';

let element_gradient_top = '\
    <div id="component_app_modal_element_gradient_top" class="easing_01 display_none opacity_0 transform_translate3d_top0 position_fixed top_0 left_0 right_0 calc_25vh margin_auto z_index_6">\
    </div>\
    ';

let element_gradient_left = '\
    <div id="component_app_modal_element_gradient_left" class="easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 left_0 bottom_0 calc_25vh margin_auto z_index_6">\
    </div>\
    ';

let element_gradient_bottom = '\
    <div id="component_app_modal_element_gradient_bottom" class="easing_01 transform_translate3d_top0 opacity_0 display_none position_fixed bottom_0 left_0 right_0 calc_25vh margin_auto z_index_6">\
    </div>\
    ';

let element_gradient_right = '\
    <div id="component_app_modal_element_gradient_right" class="easing_01 transform_translate3d_left0 opacity_0 display_none position_fixed top_0 bottom_0 right_0 calc_25vh margin_auto z_index_6">\
    </div>\
    ';

exports.default = {
  element_gradient,
  element_gui_scroll_y,
  element_slider_1,
  element_slider_2,
  element_slider_3,
  element_slider_4,
  element_slider_5,
  element_slider_6,
  element_slider_7,
  component_app_stage_enneagon,
  element_container,
  element_grid_cross,
  element_grid_depth_90,
  randomizer,
  element_title,
  element_guis,
  wp_home_posts,
  stage_load_verticle,
  stage_load_horizontal,
  element_colors,
  element_particles,
  element_interaction_player,
  element_accent_noise,
  element_effect_vignette,
  element_scroll_x_scrollbar_styled,
  element_scroll_y,
  element_scroll_y_scrollbar,
  element_scroll_y_scrollbar_styled,
  element_nav_top,
  element_nav_left,
  element_nav_bottom,
  element_nav_right,
  element_pop_top,
  element_pop_left,
  element_pop_bottom,
  element_pop_right,
  element_page_top,
  element_page_left,
  element_page_bottom,
  element_page_right,
  element_menu_top,
  element_menu_left,
  element_menu_bottom,
  element_menu_right,
  element_morph_top,
  element_morph_left,
  element_morph_bottom,
  element_morph_right,
  element_fade_top,
  element_fade_left,
  element_fade_bottom,
  element_fade_right,
  element_gradient_top,
  element_gradient_left,
  element_gradient_bottom,
  element_gradient_right,
  element_corner_top,
  element_corner_left,
  element_corner_bottom,
  element_corner_right,
  element_overlay_top,
  element_overlay_left,
  element_overlay_bottom,
  element_overlay_right,
  element_nownigel_logo,
  element_dj_logo,
  element_form_filter_1,
  element_form_filter_2,
  element_form_filter_3,
  input_drawn,
  input_range_drag,
  input_vertical_range,
  input_horizontal_range,
  element_radio,
  element_checkbox
};
},{}],134:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _elements = require("./elements");

var _elements2 = _interopRequireDefault(_elements);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let state = '';

let colors = [{
  parent: 'component_app',
  id: '',
  classList: '',
  innerHTML: `

    <div id="gui_component">
      ${_elements2.default.element_guis()}
    </div>

    <div id="modal_component">
      ${_elements2.default.element_pop_top}
      ${_elements2.default.element_pop_left}
      ${_elements2.default.element_pop_bottom}
      ${_elements2.default.element_pop_right}

      ${_elements2.default.element_page_top}
      ${_elements2.default.element_page_left}
      ${_elements2.default.element_page_bottom}
      ${_elements2.default.element_page_right}

      ${_elements2.default.element_menu_top}
      ${_elements2.default.element_menu_left}
      ${_elements2.default.element_menu_bottom}
      ${_elements2.default.element_menu_right}

      ${_elements2.default.element_morph_top}
      ${_elements2.default.element_morph_left}
      ${_elements2.default.element_morph_bottom}
      ${_elements2.default.element_morph_right}

      ${_elements2.default.element_fade_top}
      ${_elements2.default.element_fade_left}
      ${_elements2.default.element_fade_bottom}
      ${_elements2.default.element_fade_right}

      ${_elements2.default.element_gradient_top}
      ${_elements2.default.element_gradient_left}
      ${_elements2.default.element_gradient_bottom}
      ${_elements2.default.element_gradient_right}

      ${_elements2.default.element_corner_top}
      ${_elements2.default.element_corner_left}
      ${_elements2.default.element_corner_bottom}
      ${_elements2.default.element_corner_right}

      ${_elements2.default.element_overlay_top}
      ${_elements2.default.element_overlay_left}
      ${_elements2.default.element_overlay_bottom}
      ${_elements2.default.element_overlay_right}

      ${_elements2.default.element_nav_top}
      ${_elements2.default.element_nav_left}
      ${_elements2.default.element_nav_bottom}
      ${_elements2.default.element_nav_right}
    </div>

    <div id="color_component" class="width_100 height_100vh float_left position_fixed top_0 left_0 display opacity_1 overflow_hidden">

      ${_elements2.default.element_colors()}
      ${_elements2.default.element_grid_cross()}
      ${_elements2.default.element_grid_depth_90()}
      ${_elements2.default.stage_load_verticle()}
      ${_elements2.default.stage_load_horizontal()}
      ${_elements2.default.element_accent_noise()}
      ${_elements2.default.element_effect_vignette()}

    </div>

    <div id="particles_component" class="width_100 height_100vh float_left position_fixed top_0 left_0 display opacity_1 overflow_hidden">
      ${_elements2.default.element_particles()}
    </div>

    <div id="interaction_component" class="width_100 height_100vh float_left position_fixed top_0 left_0 display opacity_1 overflow_hidden">
      ${_elements2.default.element_interaction_player()}
    </div>

    <div id="stage_component" class="width_100 float_left position_relative">

      <div id="gui_fold_component" class="width_100 float_left position_relative">

        ${_elements2.default.element_nownigel_logo('gradient_light_yellow_0_bottom')}

      </div>

      <div id="gui_content_component" class="width_100 float_left position_relative display_none">
        
        ${_elements2.default.element_gradient('gradient_light_yellow_0_bottom')}

        ${_elements2.default.element_title('feature: inputs')}


          <div class="width_50 float_left position_absolute top_0 right_0 margin_auto overflow_hidden display_flex_flow ">
              
              ${_elements2.default.element_scroll_x_scrollbar_styled([{
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }, {
    link: 'death_ride'
  }])}
              
            
          </div>
          

        <div id="component" class="width_100 float_left position_relative display opacity_1 background_light_yellow_0 display_flex_flow">

          <div id="component" class="max_width_50 width_100 float_left position_relative ">

            ${_elements2.default.element_title('feature: inputs: input_drawn')}
            <div id="component" class="width_100 float_left position_relative display opacity_1 background_light_yellow_0 display_flex_flow">
              <div class="calc_10vh position_relative float_left background_white padding_205vh margin_205vh border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                
                <span class="margin_auto padding_205vh_top padding_205vh_bottom padding_205vh_left position_relative float_left z_index_1 ">

                    <span class="margin_auto position_relative float_left z_index_1 display_flex_flow">

                      <span class="margin_auto position_relative float_left top_0">

                      <span class="margin_auto position_relative float_left top_1vh">

                      <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_flex_flow  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">

                      <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_flex_flow border_025vh_dark_yellow_9 background_dark_yellow_0">

                      </span>

                      <div class=" width_5vh height_5vh float_left position_relative float_left margin_auto display_flex_flow">
                        <div class="gui_i width_50 height_50 float_left position_relative float_left margin_auto margin_auto">
                        </div>
                      </div>

                      <span id="" class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh_right padding_1vh_top padding_1vh_bottom float_right">
                        enter site
                      </span>

                      <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">
                        <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">
                          <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">
                            <div class="calc_2vh_width margin_1vh position_relative float_left">
                              <p class="font_size_2vh line_height_205vh">
                              simple
                              </p>
                            </div>
                          </div>
                        </span>
                      </span>

                      </span>

                      </span>

                      </span>

                    </span>

                </span>

                <span class="margin_auto padding_205vh_top padding_205vh_bottom padding_205vh_left position_relative float_left z_index_1 ">

                    <span class="margin_auto position_relative float_left z_index_1 display_flex_flow">

                      <div class=" width_5vh height_5vh float_left position_relative float_left margin_auto display_flex_flow">
                        <div class="gui_i width_50 height_50 float_left position_relative float_left margin_auto margin_auto">
                        </div>
                      </div>

                      <span class="margin_auto position_relative float_left top_0">

                      <span class="margin_auto position_relative float_left top_1vh">

                      <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 width_100 text_align_center float_right display_flex_flow  pseudo_button_bottom_dark_yellow_8 pseudo_button_bottom_dark_yellow_8_shadow_border_02 pseudo_hover">

                      <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_flex_flow border_025vh_dark_yellow_9 background_dark_yellow_0">

                      </span>

                      <span id="" class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">
                        Roster
                      </span>

                      <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">
                        <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">
                          <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">
                            <div class="calc_2vh_width margin_1vh position_relative float_left">
                              <p class="font_size_2vh line_height_205vh">
                              simple
                              </p>
                            </div>
                          </div>
                        </span>
                      </span>

                      </span>

                      </span>

                      </span>

                    </span>

                </span>

                <span class="margin_auto padding_205vh_top padding_205vh_bottom padding_205vh_left position_relative float_left z_index_1 ">

                    <span class="margin_auto position_relative float_left z_index_1 display_flex_flow">

                      <span class="margin_auto position_relative float_left top_0">

                      <span class="margin_auto position_relative float_left top_1vh">

                      <span class="position_relative hover_top_0 top_-1vh easing_01 width_100 text_align_center float_right display_flex_flow">

                      <span class=" position_absolute top_0 left_0 right_0 float_left calc_05vh margin_auto display_flex_flow">

                      </span>

                      <div class=" width_5vh height_5vh float_left position_relative float_left margin_auto display_flex_flow">
                        <div class="gui_i width_50 height_50 float_left position_relative float_left margin_auto margin_auto">
                        </div>
                      </div>

                      <span id="" class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">
                        About
                      </span>

                      <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">
                        <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">
                          <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">
                            <div class="calc_2vh_width margin_1vh position_relative float_left">
                              <p class="font_size_2vh line_height_205vh">
                              simple
                              </p>
                            </div>
                          </div>
                        </span>
                      </span>

                      </span>

                      </span>

                      </span>

                    </span>

                </span>

                <span class="margin_auto padding_205vh_top padding_205vh_bottom padding_205vh_left position_relative float_left z_index_1 ">

                    <span class="margin_auto position_relative float_left z_index_1 display_flex_flow">

                      <div class=" width_5vh height_5vh float_left position_relative float_left margin_auto display_flex_flow">
                        <div class="gui_i width_50 height_50 float_left position_relative float_left margin_auto margin_auto">
                        </div>
                      </div>

                      <span class="margin_auto position_relative float_left top_0">

                      <span class="margin_auto position_relative float_left top_1vh">

                      <span class="position_relative hover_top_0 top_-1vh easing_01 background_light_yellow_9 border_radius_1vh border_025vh_dark_yellow_9 width_100 text_align_center float_right display_flex_flow ">

                      <span id="" class="position_relative text_align_center font_size_2vh line_height_3vh padding_1vh float_right">
                        Services
                      </span>

                      <span id="wp_component_meta" class="position_absolute width_25vh right_0 left_0 bottom_100 float_left line_height_5vh font_size_205vh text_shadow_01vh_dark_yellow_1 margin_205vh_bottom hover_show">
                        <span class="position_relative top_0vh left_0vh easing_01 margin_2vh calc_4vh_width border_025vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9 box_shadow_hover_none background_light_yellow_0 text_align_center float_right pseudo_arrow_bottom_left_outside_light_yellow_0">
                          <div class="overflow_hidden width_100 height_100 position_relative top_0 left_0 display_flex_flow">
                            <div class="calc_2vh_width margin_1vh position_relative float_left">
                              <p class="font_size_2vh line_height_205vh">
                              simple
                              </p>
                            </div>
                          </div>
                        </span>
                      </span>

                      </span>

                      </span>

                      </span>

                    </span>

                </span>
                
              </div>
            </div>

            ${_elements2.default.element_title('feature: inputs: input_drawn')}
            <div id="component" class="width_100 float_left position_relative display opacity_1 background_light_yellow_0 display_flex_flow">
              <div class="calc_10vh position_relative float_left background_white padding_205vh margin_205vh border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                ${_elements2.default.input_drawn()}
              </div>
            </div>

            ${_elements2.default.element_title('feature: inputs: input_range_drag')}
            <div id="component" class="width_100 float_left position_relative display opacity_1 background_light_yellow_0 display_flex_flow">
              <div class="calc_10vh position_relative float_left background_white padding_205vh margin_205vh border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                ${_elements2.default.input_range_drag()}
              </div>
            </div>

            ${_elements2.default.element_title('feature: inputs: input_vertical_range')}
            <div id="component" class="width_100 float_left position_relative display opacity_1 background_light_yellow_0 display_flex_flow">
              <div class="calc_10vh position_relative float_left background_white padding_205vh margin_205vh border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                ${_elements2.default.input_vertical_range()}
              </div>
            </div>

            ${_elements2.default.element_title('feature: inputs: input_horizontal_range')}
            <div id="component" class="width_100 float_left position_relative display opacity_1 background_light_yellow_0 display_flex_flow">
              <div class="calc_10vh position_relative float_left background_white padding_205vh margin_205vh border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                ${_elements2.default.input_horizontal_range()}
              </div>
            </div>

            ${_elements2.default.element_title('feature: inputs: element_checkbox')}
            <div id="component" class="width_100 float_left position_relative display opacity_1 background_light_yellow_0 display_flex_flow">
              <div class="calc_10vh position_relative float_left background_white padding_205vh margin_205vh border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                ${_elements2.default.element_checkbox()}
              </div>
            </div>

            ${_elements2.default.element_title('feature: inputs: element_radio')}
            <div id="component" class="width_100 float_left position_relative display opacity_1 background_light_yellow_0 display_flex_flow">
              <div class="calc_10vh position_relative float_left background_white padding_205vh margin_205vh border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                ${_elements2.default.element_radio()}
              </div>
            </div>

            ${_elements2.default.element_title('feature: inputs: form')}
            <div id="component" class="width_100 float_left position_relative display opacity_1 background_light_yellow_0 display_flex_flow">
              <div class="calc_10vh position_relative float_left background_white padding_205vh margin_205vh border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                ${_elements2.default.element_form_filter_1()}
              </div>
            </div>

          </div>

        </div>

          ${_elements2.default.element_title('feature: cards')}

          <div id="component" class="width_100 height_33vh float_left position_relative display opacity_1 background_light_yellow_0 display_flex_flow">
            <div id="component" class="width_33flex height_33vh float_left position_relative display opacity_1 background_light_yellow_0 display_flex_flow">

              <a href="http://gnougn.com" target="_blank"  class="calc_10vh position_relative float_left background_white border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                                  
                <div class="position_absolute left_0 top_0 right_0 bottom_0 margin_auto width_50 height_50 float_left">
                  <div id="" class="position_absolute left_0 top_0 right_0 margin_auto width_100 height_100 float_left gui_logo_dj_final">
                  </div>
                </div>
              
              </a>
                
            </div>
          </div>



        ${_elements2.default.element_title('feature: cards: empty')}

        <div id="component" class="width_100 height_33vh float_left position_relative display opacity_1 background_light_yellow_0 display_flex_flow">
        <div id="component" class="width_33flex height_33vh float_left position_relative display opacity_1 background_light_yellow_0 display_flex_flow">

          <div class="calc_10vh position_relative float_left background_white border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                                
              <a href="http://gnougn.com" target="_blank" class="position_absolute left_0 top_0 right_0 bottom_0 margin_auto width_50 height_50 float_left">
                <div id="" class="position_absolute left_0 top_0 right_0 margin_auto width_100 height_100 float_left gui_logo_dj_final">
                </div>
              </a>

              <div class="position_absolute bottom_0 left_0 right_0 top_0 float_left display_flex_flow height_100 width_100">
                  <div class="margin_auto position_relative float_left background_light_yellow_9 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                      <p class="font_size_205vh padding_205vh position_relative float_left">gnougn.com</p>
                  </div>
              </div>
              
          </div>
            
        </div>
        </div>

        ${_elements2.default.element_title('feature: card center')}

        <div id="component" class="width_100 height_33vh float_left position_relative display opacity_1 background_light_yellow_0 display_flex_flow">
        <div id="component" class="width_33flex height_33vh float_left position_relative display opacity_1 background_light_yellow_0 display_flex_flow">

          <div class="calc_10vh position_relative float_left background_white border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                                
              <a href="http://gnougn.com" target="_blank" class="position_absolute left_0 top_0 right_0 bottom_0 margin_auto width_50 height_50 float_left">
                <div id="" class="position_absolute left_0 top_0 right_0 margin_auto width_100 height_100 float_left gui_logo_dj_final">
                </div>
              </a>

              <div class="position_absolute bottom_0 left_0 right_0 top_0 float_left display_flex_flow height_100 width_100">
                  <div class="margin_auto position_relative float_left background_light_yellow_9 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                      <p class="font_size_205vh padding_205vh position_relative float_left">gnougn.com</p>
                  </div>
              </div>
              
          </div>
            
        </div>
        </div>

        ${_elements2.default.element_title('feature: card outside')}

        <div id="component" class="width_33flex height_33vh float_left position_relative display opacity_1 background_light_yellow_0 display_flex_flow">

          <div class="calc_10vh position_relative float_left background_white border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                                
              <a href="http://gnougn.com" target="_blank" class="position_absolute left_0 top_0 right_0 bottom_0 margin_auto width_50 height_50 float_left">
                <div id="" class="position_absolute left_0 top_0 right_0 margin_auto width_100 height_100 float_left gui_logo_dj_final">
                </div>
              </a>

              <div class="position_absolute top_-205vh left_-205vh float_left display_flex_flow">
                  <div class="position_relative float_left background_light_yellow_9 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                      <p class="font_size_205vh padding_205vh position_relative float_left">gnougn.com</p>
                  </div>
              </div>
              
          </div>
            
        </div>

        <div id="component" class="width_33flex height_33vh float_left position_relative display opacity_1 background_light_yellow_0 display_flex_flow">

          <div class="calc_10vh position_relative float_left background_white border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                                
              <a href="http://gnougn.com" target="_blank" class="position_absolute left_0 top_0 right_0 bottom_0 margin_auto width_50 height_50 float_left">
                <div id="" class="position_absolute left_0 top_0 right_0 margin_auto width_100 height_100 float_left gui_logo_dj_final">
                </div>
              </a>

              <div class="position_absolute top_-205vh left_0 right_0 float_left display_flex_flow">
                  <div class="position_relative float_left background_light_yellow_9 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                      <p class="font_size_205vh padding_205vh position_relative float_left">gnougn.com</p>
                  </div>
              </div>
              
          </div>
            
        </div>

        <div id="component" class="width_33flex height_33vh float_left position_relative display opacity_1 background_light_yellow_0 display_flex_flow">

          <div class="calc_10vh position_relative float_left background_white border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                                
              <a href="http://gnougn.com" target="_blank" class="position_absolute left_0 top_0 right_0 bottom_0 margin_auto width_50 height_50 float_left">
                <div id="" class="position_absolute left_0 top_0 right_0 margin_auto width_100 height_100 float_left gui_logo_dj_final">
                </div>
              </a>

              <div class="position_absolute top_-205vh right_-205vh float_left display_flex_flow">
                  <div class="position_relative float_left background_light_yellow_9 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                      <p class="font_size_205vh padding_205vh position_relative float_left">gnougn.com</p>
                  </div>
              </div>
              
          </div>
            
        </div>

        <div id="component" class="width_33flex height_33vh float_left position_relative display opacity_1 background_light_yellow_0 display_flex_flow">

          <div class="calc_10vh position_relative float_left background_white border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                                
              <a href="http://gnougn.com" target="_blank" class="position_absolute left_0 top_0 right_0 bottom_0 margin_auto width_50 height_50 float_left">
                <div id="" class="position_absolute left_0 top_0 right_0 margin_auto width_100 height_100 float_left gui_logo_dj_final">
                </div>
              </a>

              <div class="position_absolute bottom_0 left_-205vh top_0 float_left display_flex_flow height_100">
                  <div class="margin_auto position_relative float_left background_light_yellow_9 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                      <p class="font_size_205vh padding_205vh position_relative float_left">gnougn.com</p>
                  </div>
              </div>
              
          </div>
            
        </div>

        <div id="component" class="width_33flex height_33vh float_left position_relative display opacity_1 background_light_yellow_0 display_flex_flow">

          <div class="calc_10vh position_relative float_left background_white border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                                
              <a href="http://gnougn.com" target="_blank" class="position_absolute left_0 top_0 right_0 bottom_0 margin_auto width_50 height_50 float_left">
                <div id="" class="position_absolute left_0 top_0 right_0 margin_auto width_100 height_100 float_left gui_logo_dj_final">
                </div>
              </a>
              
          </div>
            
        </div>

        <div id="component" class="width_33flex height_33vh float_left position_relative display opacity_1 background_light_yellow_0 display_flex_flow">

          <div class="calc_10vh position_relative float_left background_white border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                                
              <a href="http://gnougn.com" target="_blank" class="position_absolute left_0 top_0 right_0 bottom_0 margin_auto width_50 height_50 float_left">
                <div id="" class="position_absolute left_0 top_0 right_0 margin_auto width_100 height_100 float_left gui_logo_dj_final">
                </div>
              </a>

              <div class="position_absolute bottom_0 right_-205vh top_0 float_left display_flex_flow height_100">
                  <div class="margin_auto position_relative float_left background_light_yellow_9 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                      <p class="font_size_205vh padding_205vh position_relative float_left">gnougn.com</p>
                  </div>
              </div>
              
          </div>
            
        </div>

        <div id="component" class="width_33flex height_33vh float_left position_relative display opacity_1 background_light_yellow_0 display_flex_flow">

          <div class="calc_10vh position_relative float_left background_white border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                                
              <a href="http://gnougn.com" target="_blank" class="position_absolute left_0 top_0 right_0 bottom_0 margin_auto width_50 height_50 float_left">
                <div id="" class="position_absolute left_0 top_0 right_0 margin_auto width_100 height_100 float_left gui_logo_dj_final">
                </div>
              </a>

              <div class="position_absolute bottom_-205vh left_-205vh float_left display_flex_flow">
                  <div class="position_relative float_left background_light_yellow_9 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                      <p class="font_size_205vh padding_205vh position_relative float_left">gnougn.com</p>
                  </div>
              </div>
              
          </div>
            
        </div>

        <div id="component" class="width_33flex height_33vh float_left position_relative display opacity_1 background_light_yellow_0 display_flex_flow">

          <div class="calc_10vh position_relative float_left background_white border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                                
              <a href="http://gnougn.com" target="_blank" class="position_absolute left_0 top_0 right_0 bottom_0 margin_auto width_50 height_50 float_left">
                <div id="" class="position_absolute left_0 top_0 right_0 margin_auto width_100 height_100 float_left gui_logo_dj_final">
                </div>
              </a>

              <div class="position_absolute bottom_-205vh left_0 right_0 float_left display_flex_flow">
                  <div class="position_relative float_left background_light_yellow_9 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                      <p class="font_size_205vh padding_205vh position_relative float_left">gnougn.com</p>
                  </div>
              </div>
              
          </div>
            
        </div>

        <div id="component" class="width_33flex height_33vh float_left position_relative display opacity_1 background_light_yellow_0 display_flex_flow">

          <div class="calc_10vh position_relative float_left background_white border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                                
              <a href="http://gnougn.com" target="_blank" class="position_absolute left_0 top_0 right_0 bottom_0 margin_auto width_50 height_50 float_left">
                <div id="" class="position_absolute left_0 top_0 right_0 margin_auto width_100 height_100 float_left gui_logo_dj_final">
                </div>
              </a>

              <div class="position_absolute bottom_-205vh right_-205vh float_left display_flex_flow">
                  <div class="position_relative float_left background_light_yellow_9 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                      <p class="font_size_205vh padding_205vh position_relative float_left">gnougn.com</p>
                  </div>
              </div>
              
          </div>
            
        </div>

        ${_elements2.default.element_title('feature: card tooltips')}
        <div id="component" class="width_25 height_33vh float_left position_relative display opacity_1 background_light_yellow_0 display_flex_flow">

          <div class="calc_10vh position_relative float_left background_white border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                                
              <a href="http://gnougn.com" target="_blank" class="position_absolute left_0 top_0 right_0 bottom_0 margin_auto width_50 height_50 float_left">
                <div id="" class="position_absolute left_0 top_0 right_0 margin_auto width_100 height_100 float_left gui_logo_dj_final">
                </div>
              </a>

              <div class="position_absolute bottom_-205vh left_-205vh float_left display_flex_flow">
                  
                  <div class="position_absolute bottom_100 left_0 right_0 float_left display_flex_flow">
                      <div class="position_relative float_left background_light_yellow_9 border_top_01vh_dark_yellow_9 border_right_01vh_dark_yellow_9 border_left_01vh_dark_yellow_9 border_radius_1vh_top box_shadow_bottom_left_1vh_dark_yellow_9">
                          <p class="font_size_2vh padding_1vh position_relative float_left">gnougn.com</p>
                      </div>
                  </div>

                  <div class="position_relative float_left background_light_yellow_9 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                      <p class="font_size_205vh padding_205vh position_relative float_left">gnougn.com</p>
                  </div>

              </div>
              
          </div>
            
        </div>

        <div id="component" class="width_25 height_33vh float_left position_relative display opacity_1 background_light_yellow_0 display_flex_flow">

          <div class="calc_10vh position_relative float_left background_white border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                                
              <a href="http://gnougn.com" target="_blank" class="position_absolute left_0 top_0 right_0 bottom_0 margin_auto width_50 height_50 float_left">
                <div id="" class="position_absolute left_0 top_0 right_0 margin_auto width_100 height_100 float_left gui_logo_dj_final">
                </div>
              </a>

              <div class="position_absolute bottom_-205vh left_-205vh float_left display_flex_flow">
                  
                  <div class="position_relative float_left background_light_yellow_9 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                      <p class="font_size_205vh padding_205vh position_relative float_left">gnougn.com</p>
                  </div>

                  <div class="position_absolute top_100 left_0 right_0 float_left display_flex_flow">
                      <div class="position_relative float_left background_light_yellow_9 border_bottom_01vh_dark_yellow_9 border_right_01vh_dark_yellow_9 border_left_01vh_dark_yellow_9 border_radius_1vh_bottom box_shadow_bottom_left_1vh_dark_yellow_9">
                          <p class="font_size_2vh padding_1vh position_relative float_left">gnougn.com</p>
                      </div>
                  </div>

              </div>
              
          </div>
            
        </div>

        <div id="component" class="width_25 height_33vh float_left position_relative display opacity_1 background_light_yellow_0 display_flex_flow">

          <div class="calc_10vh position_relative float_left background_white border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                                
              <a href="http://gnougn.com" target="_blank" class="position_absolute left_0 top_0 right_0 bottom_0 margin_auto width_50 height_50 float_left">
                <div id="" class="position_absolute left_0 top_0 right_0 margin_auto width_100 height_100 float_left gui_logo_dj_final">
                </div>
              </a>

              <div class="position_absolute bottom_-205vh left_-205vh float_left display_flex_flow">
                  
                  <div class="position_absolute top_0 bottom_0 right_100 float_left display_flex_flow height_100">
                      <div class="position_relative float_left margin_auto background_light_yellow_9 border_bottom_01vh_dark_yellow_9 border_top_01vh_dark_yellow_9 border_left_01vh_dark_yellow_9 border_radius_1vh_left box_shadow_bottom_left_1vh_dark_yellow_9">
                          <p class="font_size_2vh padding_1vh position_relative float_left">gnougn.com</p>
                      </div>
                  </div>

                  <div class="position_relative float_left background_light_yellow_9 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                      <p class="font_size_205vh padding_205vh position_relative float_left">gnougn.com</p>
                  </div>

              </div>
              
          </div>
            
        </div>

        <div id="component" class="width_25 height_33vh float_left position_relative display opacity_1 background_light_yellow_0 display_flex_flow">

          <div class="calc_10vh position_relative float_left background_white border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                                
              <a href="http://gnougn.com" target="_blank" class="position_absolute left_0 top_0 right_0 bottom_0 margin_auto width_50 height_50 float_left">
                <div id="" class="position_absolute left_0 top_0 right_0 margin_auto width_100 height_100 float_left gui_logo_dj_final">
                </div>
              </a>

              <div class="position_absolute bottom_-205vh left_-205vh float_left display_flex_flow">
                  
                  <div class="position_relative float_left background_light_yellow_9 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">
                      <p class="font_size_205vh padding_205vh position_relative float_left">gnougn.com</p>
                  </div>

                  <div class="position_absolute top_0 bottom_0 left_100 float_left display_flex_flow height_100">
                      <div class="position_relative float_left margin_auto background_light_yellow_9 border_bottom_01vh_dark_yellow_9 border_top_01vh_dark_yellow_9 border_right_01vh_dark_yellow_9 border_radius_1vh_right box_shadow_bottom_left_1vh_dark_yellow_9">
                          <p class="font_size_2vh padding_1vh position_relative float_left">gnougn.com</p>
                      </div>
                  </div>

              </div>
              
          </div>
            
        </div>

        <div id="component" class="width_100 height_100vh float_left position_relative display opacity_1 background_white">\
        
          <div class="position_absolute left_0 top_0 right_0 bottom_0 margin_auto width_100 height_50 float_left">
            <div id="" class="position_absolute left_0 top_0 right_0 margin_auto width_100 height_100 float_left gui_logo_dj_progession">
            </div>
          </div>
          
        </div>

        ${_elements2.default.element_container('\
            <div class="width_100 height_100vh position_relative float_left display_flex_flow">\
              \
              <div class="calc_10vh margin_5vh position_relative float_left display_flex_flow">\
                  \
                  <div class="width_100 height_100 position_relative float_left display_flex_flow">\
                      <div class="calc_10vh position_relative float_left photo_dj1 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
                          \
                          <div class="position_absolute bottom_0 left_0 float_left display_flex_flow">\
                              <div class="position_relative float_left background-light-yellow-0 border_01vh_dark_yellow_9 border_radius_1vh box_shadow_bottom_left_1vh_dark_yellow_9">\
                                  <p class="font_size_205vh padding_205vh position_relative float_left">top100</p>\
                              </div>\
                          </div>\
                          \
                      </div>\
                      \
                  </div>\
                  \
              </div>\
              \
            </div>\
          ', 'width_100 float_left position_relative background_light_yellow_0')}
        
        ${_elements2.default.element_title('feature: element_slider_1')}

        ${_elements2.default.element_container(_elements2.default.element_container(_elements2.default.element_container(_elements2.default.element_slider_1(), 'calc_02vh min_height_33vh float_left position_relative border_01vh_dark_yellow_9 background_light_yellow_9 display_flex_flow'), 'min_height_33vh width_33 float_left position_relative background_light_yellow_0 ') + _elements2.default.element_container(_elements2.default.element_container(_elements2.default.element_slider_2(), 'calc_02vh min_height_33vh float_left position_relative border_01vh_dark_yellow_9 background_light_yellow_9 display_flex_flow'), 'min_height_33vh width_33 float_left position_relative background_light_yellow_0 ') + _elements2.default.element_container(_elements2.default.element_container(_elements2.default.element_slider_3(), 'calc_02vh min_height_33vh float_left position_relative border_01vh_dark_yellow_9 background_light_yellow_9 display_flex_flow'), 'min_height_33vh width_33 float_left position_relative background_light_yellow_0 ') + _elements2.default.element_container(_elements2.default.element_container(_elements2.default.element_slider_4(), 'calc_02vh min_height_33vh float_left position_relative border_01vh_dark_yellow_9 background_light_yellow_9 display_flex_flow'), 'min_height_33vh width_33 float_left position_relative background_light_yellow_0 ') + _elements2.default.element_container(_elements2.default.element_container(_elements2.default.element_slider_5(), 'calc_02vh min_height_33vh float_left position_relative border_01vh_dark_yellow_9 background_light_yellow_9 display_flex_flow'), 'min_height_33vh width_33 float_left position_relative background_light_yellow_0 ') + _elements2.default.element_container(_elements2.default.element_container(_elements2.default.element_slider_6(), 'calc_02vh min_height_33vh float_left position_relative border_01vh_dark_yellow_9 background_light_yellow_9 display_flex_flow'), 'min_height_33vh width_33 float_left position_relative background_light_yellow_0 ') + _elements2.default.element_container(_elements2.default.element_container(_elements2.default.element_slider_7(), 'calc_02vh min_height_33vh float_left position_relative border_01vh_dark_yellow_9 background_light_yellow_9 display_flex_flow'), 'min_height_33vh width_33 float_left position_relative background_light_yellow_0 ') + _elements2.default.element_container(_elements2.default.element_container(_elements2.default.element_slider_7(), 'calc_02vh min_height_33vh float_left position_relative border_01vh_dark_yellow_9 background_light_yellow_9 display_flex_flow'), 'min_height_33vh width_33 float_left position_relative background_light_yellow_0 ') + _elements2.default.element_container(_elements2.default.element_container(_elements2.default.wp_home_posts(), 'calc_02vh min_height_33vh float_left position_relative border_01vh_dark_yellow_9 background_light_yellow_9 display_flex_flow'), 'min_height_33vh width_33 float_left position_relative background_light_yellow_0 '), 'calc_10vh padding_5vh float_left position_relative background_light_yellow_0')}

        ${_elements2.default.element_title(_elements2.default.randomizer())}
        ${_elements2.default.element_title('search')}

        <ul id="element_ol_firebase_roster"></ul>
        <ul id="element_ol_firebase_library"></ul>
        <ul id="element_ol_firebase_skills"></ul>
        <ul id="element_ol_firebase_abilities"></ul>
        <ul id="element_ol_firebase_services"></ul>
        <ul id="element_ol_firebase_partners"></ul>
      
      </div>

    </div>
    `
}];

exports.default = {
  colors
};
},{"./elements":139}],135:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require("../index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let get_components_handled = () => {

  let state = _index2.default.Handle_return_state();

  let components = [

  // colors
  {
    component: 'component_app_particle_game_players_1',
    component_state_transform: state.ui.stage.workspace.transform,
    //component_state_transform_true: 'transform_translate3d_top_100',
    //component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.stage.workspace.display
    // component_state_opacity:  state.ui.colors.load_light_yellow_0.opacity
  }, {
    component: 'element_interaction_player',
    component_state_transform: state.ui.colors.load_light_yellow_0.transform,
    //component_state_transform_true: 'transform_translate3d_top_100',
    //component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.colors.load_light_yellow_0.display
    // component_state_opacity:  state.ui.colors.load_light_yellow_0.opacity
  }, {
    component: 'component_app_gui_logo_combo_feature_container',
    component_state_transform: state.ui.stage.workspace.transform,
    //component_state_transform_true: 'transform_translate3d_top_100',
    //component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.stage.workspace.display
    // component_state_opacity:  state.ui.stage.workspace.opacity
  }, {
    component: 'logo_load_container',
    component_state_transform: state.ui.stage.workspace.transform,
    //component_state_transform_true: 'transform_translate3d_top_100',
    //component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.stage.workspace.display
    // component_state_opacity:  state.ui.stage.workspace.opacity
  }, {
    component: 'bounce',
    component_state_transform: state.ui.stage.workspace.transform,
    //component_state_transform_true: 'transform_translate3d_top_100',
    //component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.stage.workspace.display
    // component_state_opacity:  state.ui.colors.load_light_yellow_0.opacity
  }, {
    component: 'bullets',
    component_state_transform: state.ui.stage.workspace.transform,
    //component_state_transform_true: 'transform_translate3d_top_100',
    //component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.stage.workspace.display
    // component_state_opacity:  state.ui.colors.load_light_yellow_0.opacity
  }, {
    component: 'element_ball',
    component_state_transform: state.ui.stage.workspace.transform,
    //component_state_transform_true: 'transform_translate3d_top_100',
    //component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.stage.workspace.display
    // component_state_opacity:  state.ui.colors.load_light_yellow_0.opacity
  }, {
    component: 'component_app_interaction_helper_body',
    component_state_transform: state.ui.stage.workspace.transform,
    //component_state_transform_true: 'transform_translate3d_top_100',
    //component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.stage.workspace.display
    // component_state_opacity:  state.ui.colors.load_light_yellow_0.opacity
  }, {
    component: 'component_app_interaction_enemy',
    component_state_transform: state.ui.stage.workspace.transform,
    //component_state_transform_true: 'transform_translate3d_top_100',
    //component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.stage.workspace.display
    // component_state_opacity:  state.ui.colors.load_light_yellow_0.opacity
  }, {
    component: 'component_app_interaction_hands',
    component_state_transform: state.ui.stage.workspace.transform,
    //component_state_transform_true: 'transform_translate3d_top_100',
    //component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.stage.workspace.display
    // component_state_opacity:  state.ui.colors.load_light_yellow_0.opacity
  }, {
    component: 'component_app_interaction_game_players_1',
    component_state_transform: state.ui.stage.workspace.transform,
    //component_state_transform_true: 'transform_translate3d_top_100',
    //component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.stage.workspace.display
    // component_state_opacity:  state.ui.colors.load_light_yellow_0.opacity
  }, {
    component: 'component_color_load_light_yellow_0',
    component_state_transform: state.ui.colors.load_light_yellow_0.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.colors.load_light_yellow_0.display
    // component_state_opacity:  state.ui.colors.load_light_yellow_0.opacity
  }, {
    component: 'component_app_stage_enneagon',
    component_state_transform: state.ui.stage.enneagon.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.stage.enneagon.display
    // component_state_opacity:  state.ui.stage.enneagon.opacity
  }, {
    component: 'component_app_stage_outside',
    component_state_transform: state.ui.stage.enneagon.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.stage.enneagon.display
    // component_state_opacity:  state.ui.stage.enneagon.opacity
  }, {
    component: 'component_app_stage_sky',
    component_state_transform: state.ui.stage.enneagon.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.stage.enneagon.display
    // component_state_opacity:  state.ui.stage.enneagon.opacity
  }, {
    component: 'component_app_stage_office',
    component_state_transform: state.ui.stage.enneagon.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.stage.enneagon.display
    // component_state_opacity:  state.ui.stage.enneagon.opacity
  }, {
    component: 'component_app_stage_load_horizontal',
    component_state_transform: state.ui.stage.enneagon.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.stage.enneagon.display
    // component_state_opacity:  state.ui.stage.enneagon.opacity
  }, {
    component: 'component_app_stage_load_verticle',
    component_state_transform: state.ui.stage.enneagon.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.stage.enneagon.display
    // component_state_opacity:  state.ui.stage.enneagon.opacity
  }, {
    component: 'component_app_pieces_office',
    component_state_transform: state.ui.stage.enneagon.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.stage.enneagon.display
    // component_state_opacity:  state.ui.stage.enneagon.opacity
  },

  // gui
  {
    component: 'component_app_gui_bottom_center',
    component_state_transform: state.ui.gui.bottom.transform,
    component_state_transform_true: 'transform_translate3d_top100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.gui.bottom.display
    // component_state_opacity:  state.ui.gui.bottom.opacity
  }, {
    component: 'component_app_gui_bottom_left',
    component_state_transform: state.ui.gui.bottom_left.transform,
    component_state_transform_true: 'transform_translate3d_top100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.gui.bottom_left.display
    // component_state_opacity:  state.ui.gui.bottom_left.opacity
  }, {
    component: 'component_app_gui_bottom_right',
    component_state_transform: state.ui.gui.bottom_right.transform,
    component_state_transform_true: 'transform_translate3d_top100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.gui.bottom_right.display
    // component_state_opacity:  state.ui.gui.bottom_right.opacity
  }, {
    component: 'component_app_gui_top_center',
    component_state_transform: state.ui.gui.top.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.gui.top.display
    // component_state_opacity:  state.ui.gui.top.opacity
  }, {
    component: 'component_app_gui_top_left',
    component_state_transform: state.ui.gui.top_left.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.gui.top_left.display
    // component_state_opacity:  state.ui.gui.top_left.opacity
  }, {
    component: 'component_app_gui_top_right',
    component_state_transform: state.ui.gui.top_right.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.gui.top_right.display
    // component_state_opacity:  state.ui.gui.top_right.opacity
  }, {
    component: 'component_app_gui_left',
    component_state_transform: state.ui.gui.left.transform,
    component_state_transform_true: 'transform_translate3d_left_100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.gui.left.display
    // component_state_opacity:  state.ui.gui.left.opacity
  }, {
    component: 'component_app_gui_right',
    component_state_transform: state.ui.gui.right.transform,
    component_state_transform_true: 'transform_translate3d_left100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.gui.right.display
    // component_state_opacity:  state.ui.gui.right.opacity
  },

  // modal

  {
    component: 'component_app_modal_element_nav_top',
    component_state_transform: state.ui.modal.nav.top.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.nav.top.display
    // component_state_opacity:  state.ui.modal.nav.top.opacity
  }, {
    component: 'component_app_modal_element_nav_bottom',
    component_state_transform: state.ui.modal.nav.bottom.transform,
    component_state_transform_true: 'transform_translate3d_top100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.nav.bottom.display
    // component_state_opacity:  state.ui.modal.nav.bottom.opacity
  }, {
    component: 'component_app_modal_element_nav_left',
    component_state_transform: state.ui.modal.nav.left.transform,
    component_state_transform_true: 'transform_translate3d_left_100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.nav.left.display
    // component_state_opacity:  state.ui.modal.nav.left.opacity
  }, {
    component: 'component_app_modal_element_nav_right',
    component_state_transform: state.ui.modal.nav.right.transform,
    component_state_transform_true: 'transform_translate3d_left100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.nav.right.display
    // component_state_opacity:  state.ui.modal.nav.right.opacity
  }, {
    component: 'component_app_modal_element_page_top',
    component_state_transform: state.ui.modal.page.top.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.page.top.display
    // component_state_opacity:  state.ui.modal.page.top.opacity
  }, {
    component: 'component_app_modal_element_page_bottom',
    component_state_transform: state.ui.modal.page.bottom.transform,
    component_state_transform_true: 'transform_translate3d_top100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.page.bottom.display
    // component_state_opacity:  state.ui.modal.page.bottom.opacity
  }, {
    component: 'component_app_modal_element_page_left',
    component_state_transform: state.ui.modal.page.left.transform,
    component_state_transform_true: 'transform_translate3d_left_100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.page.left.display
    // component_state_opacity:  state.ui.modal.page.left.opacity
  }, {
    component: 'component_app_modal_element_page_right',
    component_state_transform: state.ui.modal.page.right.transform,
    component_state_transform_true: 'transform_translate3d_left100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.page.right.display
    // component_state_opacity:  state.ui.modal.page.right.opacity
  }, {
    component: 'component_app_modal_element_pop_top',
    component_state_transform: state.ui.modal.pop.top.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.pop.top.display
    // component_state_opacity:  state.ui.modal.pop.top.opacity
  }, {
    component: 'component_app_modal_element_pop_bottom',
    component_state_transform: state.ui.modal.pop.bottom.transform,
    component_state_transform_true: 'transform_translate3d_top100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.pop.bottom.display
    // component_state_opacity:  state.ui.modal.pop.bottom.opacity
  }, {
    component: 'component_app_modal_element_pop_left',
    component_state_transform: state.ui.modal.pop.left.transform,
    component_state_transform_true: 'transform_translate3d_left_100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.pop.left.display
    // component_state_opacity:  state.ui.modal.pop.left.opacity
  }, {
    component: 'component_app_modal_element_pop_right',
    component_state_transform: state.ui.modal.pop.right.transform,
    component_state_transform_true: 'transform_translate3d_left100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.pop.right.display
    // component_state_opacity:  state.ui.modal.pop.right.opacity
  }, {
    component: 'component_app_modal_element_overlay_top',
    component_state_transform: state.ui.modal.overlay.top.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.overlay.top.display
    // component_state_opacity:  state.ui.modal.overlay.top.opacity
  }, {
    component: 'component_app_modal_element_overlay_bottom',
    component_state_transform: state.ui.modal.overlay.bottom.transform,
    component_state_transform_true: 'transform_translate3d_top100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.overlay.bottom.display
    // component_state_opacity:  state.ui.modal.overlay.bottom.opacity
  }, {
    component: 'component_app_modal_element_overlay_left',
    component_state_transform: state.ui.modal.overlay.left.transform,
    component_state_transform_true: 'transform_translate3d_left_100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.overlay.left.display
    // component_state_opacity:  state.ui.modal.overlay.left.opacity
  }, {
    component: 'component_app_modal_element_overlay_right',
    component_state_transform: state.ui.modal.overlay.right.transform,
    component_state_transform_true: 'transform_translate3d_left100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.overlay.right.display
    // component_state_opacity:  state.ui.modal.overlay.right.opacity
  }, {
    component: 'component_app_modal_element_gradient_top',
    component_state_transform: state.ui.modal.gradient.top.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.gradient.top.display
    // component_state_opacity:  state.ui.modal.gradient.top.opacity
  }, {
    component: 'component_app_modal_element_gradient_bottom',
    component_state_transform: state.ui.modal.gradient.bottom.transform,
    component_state_transform_true: 'transform_translate3d_top100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.gradient.bottom.display
    // component_state_opacity:  state.ui.modal.gradient.bottom.opacity
  }, {
    component: 'component_app_modal_element_gradient_left',
    component_state_transform: state.ui.modal.gradient.left.transform,
    component_state_transform_true: 'transform_translate3d_left_100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.gradient.left.display
    // component_state_opacity:  state.ui.modal.gradient.left.opacity
  }, {
    component: 'component_app_modal_element_gradient_right',
    component_state_transform: state.ui.modal.gradient.right.transform,
    component_state_transform_true: 'transform_translate3d_left100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.gradient.right.display
    // component_state_opacity:  state.ui.modal.gradient.right.opacity
  }, {
    component: 'component_app_modal_element_menu_top',
    component_state_transform: state.ui.modal.menu.top.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.menu.top.display
    // component_state_opacity:  state.ui.modal.menu.top.opacity
  }, {
    component: 'component_app_modal_element_menu_bottom',
    component_state_transform: state.ui.modal.menu.bottom.transform,
    component_state_transform_true: 'transform_translate3d_top100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.menu.bottom.display
    // component_state_opacity:  state.ui.modal.menu.bottom.opacity
  }, {
    component: 'component_app_modal_element_menu_left',
    component_state_transform: state.ui.modal.menu.left.transform,
    component_state_transform_true: 'transform_translate3d_left_100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.menu.left.display
    // component_state_opacity:  state.ui.modal.menu.left.opacity
  }, {
    component: 'component_app_modal_element_menu_right',
    component_state_transform: state.ui.modal.menu.right.transform,
    component_state_transform_true: 'transform_translate3d_left100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.menu.right.display
    // component_state_opacity:  state.ui.modal.menu.right.opacity
  }, {
    component: 'component_app_modal_element_fade_top',
    component_state_transform: state.ui.modal.fade.top.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.fade.top.display
    // component_state_opacity:  state.ui.modal.fade.top.opacity
  }, {
    component: 'component_app_modal_element_fade_bottom',
    component_state_transform: state.ui.modal.fade.bottom.transform,
    component_state_transform_true: 'transform_translate3d_top100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.fade.bottom.display
    // component_state_opacity:  state.ui.modal.fade.bottom.opacity
  }, {
    component: 'component_app_modal_element_fade_left',
    component_state_transform: state.ui.modal.fade.left.transform,
    component_state_transform_true: 'transform_translate3d_left_100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.fade.left.display
    // component_state_opacity:  state.ui.modal.fade.left.opacity
  }, {
    component: 'component_app_modal_element_fade_right',
    component_state_transform: state.ui.modal.fade.right.transform,
    component_state_transform_true: 'transform_translate3d_left100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.fade.right.display
    // component_state_opacity:  state.ui.modal.fade.right.opacity
  }, {
    component: 'component_app_modal_element_morph_top',
    component_state_transform: state.ui.modal.morph.top.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.morph.top.display
    // component_state_opacity:  state.ui.modal.morph.top.opacity
  }, {
    component: 'component_app_modal_element_morph_bottom',
    component_state_transform: state.ui.modal.morph.bottom.transform,
    component_state_transform_true: 'transform_translate3d_top100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.morph.bottom.display
    // component_state_opacity:  state.ui.modal.morph.bottom.opacity
  }, {
    component: 'component_app_modal_element_morph_left',
    component_state_transform: state.ui.modal.morph.left.transform,
    component_state_transform_true: 'transform_translate3d_left_100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.morph.left.display
    // component_state_opacity:  state.ui.modal.morph.left.opacity
  }, {
    component: 'component_app_modal_element_morph_right',
    component_state_transform: state.ui.modal.morph.right.transform,
    component_state_transform_true: 'transform_translate3d_left100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.morph.right.display
    // component_state_opacity:  state.ui.modal.morph.right.opacity
  }, {
    component: 'component_app_modal_element_corner_top',
    component_state_transform: state.ui.modal.corner.top.transform,
    component_state_transform_true: 'transform_translate3d_top_100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.corner.top.display
    // component_state_opacity:  state.ui.modal.corner.top.opacity
  }, {
    component: 'component_app_modal_element_corner_bottom',
    component_state_transform: state.ui.modal.corner.bottom.transform,
    component_state_transform_true: 'transform_translate3d_top100',
    component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.modal.corner.bottom.display
    // component_state_opacity:  state.ui.modal.corner.bottom.opacity
  }, {
    component: 'component_app_modal_element_corner_left',
    component_state_transform: state.ui.modal.corner.left.transform,
    component_state_transform_true: 'transform_translate3d_left_100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.corner.left.display
    // component_state_opacity:  state.ui.modal.corner.left.opacity
  }, {
    component: 'component_app_modal_element_corner_right',
    component_state_transform: state.ui.modal.corner.right.transform,
    component_state_transform_true: 'transform_translate3d_left100',
    component_state_transform_false: 'transform_translate3d_left0',
    component_state_display: state.ui.modal.corner.right.display
    // component_state_opacity:  state.ui.modal.corner.right.opacity
  }, {
    component: 'wp_component_post-home_content',
    component_state_transform: state.ui.colors.load_light_yellow_0.transform,
    //component_state_transform_true: 'transform_translate3d_top_100',
    //component_state_transform_false: 'transform_translate3d_top0',
    component_state_display: state.ui.colors.load_light_yellow_0.display
    // component_state_opacity:  state.ui.colors.load_light_yellow_0.opacity
  }];

  return components;
};

exports.default = {
  get_components_handled

};
},{"../index.js":3}],136:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require("../index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let values_update = () => {

  let state = _index2.default.Handle_return_state();

  if (document.getElementById('score_current_area') != null) {
    document.getElementById('score_current_area').innerText = `area: ${state.data.score.current.area}`;
    document.getElementById('score_current_met').innerText = `met: ${state.data.score.current.met}`;
    document.getElementById('score_current_user').innerText = `user: ${state.data.score.current.met}`;
    document.getElementById('score_current_fans').innerText = `fans: ${state.data.score.current.met}`;
    document.getElementById('score_current_messages').innerText = `messages: ${state.data.score.current.met}`;
    document.getElementById('score_current_likes').innerText = `data: ${state.data.score.current.met}`;
    document.getElementById('score_current_data').innerText = `data: ${state.data.score.current.met}`;
  };

  // page
  if (document.getElementById('component_app_status_display_page_top') != null) {
    document.getElementById('component_app_status_display_page_top').innerText = state.ui.modal.page.top.display;
  };

  if (document.getElementById('component_app_status_opacity_page_top') != null) {
    document.getElementById('component_app_status_opacity_page_top').innerText = state.ui.modal.page.top.opacity;
  };

  if (document.getElementById('component_app_status_transform_page_top') != null) {
    document.getElementById('component_app_status_transform_page_top').innerText = state.ui.modal.page.top.transform;
  };

  if (document.getElementById('component_app_status_display_page_bottom') != null) {
    document.getElementById('component_app_status_display_page_bottom').innerText = state.ui.modal.page.bottom.display;
  };

  if (document.getElementById('component_app_status_opacity_page_bottom') != null) {
    document.getElementById('component_app_status_opacity_page_bottom').innerText = state.ui.modal.page.bottom.opacity;
  };

  if (document.getElementById('component_app_status_transform_page_bottom') != null) {
    document.getElementById('component_app_status_transform_page_bottom').innerText = state.ui.modal.page.bottom.transform;
  };

  if (document.getElementById('component_app_status_display_page_left') != null) {
    document.getElementById('component_app_status_display_page_left').innerText = state.ui.modal.page.left.display;
  };

  if (document.getElementById('component_app_status_opacity_page_left') != null) {
    document.getElementById('component_app_status_opacity_page_left').innerText = state.ui.modal.page.left.opacity;
  };

  if (document.getElementById('component_app_status_transform_page_left') != null) {
    document.getElementById('component_app_status_transform_page_left').innerText = state.ui.modal.page.left.transform;
  };

  if (document.getElementById('component_app_status_display_page_right') != null) {
    document.getElementById('component_app_status_display_page_right').innerText = state.ui.modal.page.right.display;
  };

  if (document.getElementById('component_app_status_opacity_page_right') != null) {
    document.getElementById('component_app_status_opacity_page_right').innerText = state.ui.modal.page.right.opacity;
  };

  if (document.getElementById('component_app_status_transform_page_right') != null) {
    document.getElementById('component_app_status_transform_page_right').innerText = state.ui.modal.page.right.transform;
  };

  // pop

  if (document.getElementById('component_app_status_display_pop_top') != null) {
    document.getElementById('component_app_status_display_pop_top').innerText = state.ui.modal.pop.top.display;
  };

  if (document.getElementById('component_app_status_opacity_pop_top') != null) {
    document.getElementById('component_app_status_opacity_pop_top').innerText = state.ui.modal.pop.top.opacity;
  };

  if (document.getElementById('component_app_status_transform_pop_top') != null) {
    document.getElementById('component_app_status_transform_pop_top').innerText = state.ui.modal.pop.top.transform;
  };

  if (document.getElementById('component_app_status_display_pop_bottom') != null) {
    document.getElementById('component_app_status_display_pop_bottom').innerText = state.ui.modal.pop.bottom.display;
  };

  if (document.getElementById('component_app_status_opacity_pop_bottom') != null) {
    document.getElementById('component_app_status_opacity_pop_bottom').innerText = state.ui.modal.pop.bottom.opacity;
  };

  if (document.getElementById('component_app_status_transform_pop_bottom') != null) {
    document.getElementById('component_app_status_transform_pop_bottom').innerText = state.ui.modal.pop.bottom.transform;
  };

  if (document.getElementById('component_app_status_display_pop_left') != null) {
    document.getElementById('component_app_status_display_pop_left').innerText = state.ui.modal.pop.left.display;
  };

  if (document.getElementById('component_app_status_opacity_pop_left') != null) {
    document.getElementById('component_app_status_opacity_pop_left').innerText = state.ui.modal.pop.left.opacity;
  };

  if (document.getElementById('component_app_status_transform_pop_left') != null) {
    document.getElementById('component_app_status_transform_pop_left').innerText = state.ui.modal.pop.left.transform;
  };

  if (document.getElementById('component_app_status_display_pop_right') != null) {
    document.getElementById('component_app_status_display_pop_right').innerText = state.ui.modal.pop.right.display;
  };

  if (document.getElementById('component_app_status_opacity_pop_right') != null) {
    document.getElementById('component_app_status_opacity_pop_right').innerText = state.ui.modal.pop.right.opacity;
  };

  if (document.getElementById('component_app_status_transform_pop_right') != null) {
    document.getElementById('component_app_status_transform_pop_right').innerText = state.ui.modal.pop.right.transform;
  };

  // overlay

  if (document.getElementById('component_app_status_display_overlay_top') != null) {
    document.getElementById('component_app_status_display_overlay_top').innerText = state.ui.modal.overlay.top.display;
  };

  if (document.getElementById('component_app_status_opacity_overlay_top') != null) {
    document.getElementById('component_app_status_opacity_overlay_top').innerText = state.ui.modal.overlay.top.opacity;
  };

  if (document.getElementById('component_app_status_transform_overlay_top') != null) {
    document.getElementById('component_app_status_transform_overlay_top').innerText = state.ui.modal.overlay.top.transform;
  };

  if (document.getElementById('component_app_status_display_overlay_bottom') != null) {
    document.getElementById('component_app_status_display_overlay_bottom').innerText = state.ui.modal.overlay.bottom.display;
  };

  if (document.getElementById('component_app_status_opacity_overlay_bottom') != null) {
    document.getElementById('component_app_status_opacity_overlay_bottom').innerText = state.ui.modal.overlay.bottom.opacity;
  };

  if (document.getElementById('component_app_status_transform_overlay_bottom') != null) {
    document.getElementById('component_app_status_transform_overlay_bottom').innerText = state.ui.modal.overlay.bottom.transform;
  };

  if (document.getElementById('component_app_status_display_overlay_left') != null) {
    document.getElementById('component_app_status_display_overlay_left').innerText = state.ui.modal.overlay.left.display;
  };

  if (document.getElementById('component_app_status_opacity_overlay_left') != null) {
    document.getElementById('component_app_status_opacity_overlay_left').innerText = state.ui.modal.overlay.left.opacity;
  };

  if (document.getElementById('component_app_status_transform_overlay_left') != null) {
    document.getElementById('component_app_status_transform_overlay_left').innerText = state.ui.modal.overlay.left.transform;
  };

  if (document.getElementById('component_app_status_display_overlay_right') != null) {
    document.getElementById('component_app_status_display_overlay_right').innerText = state.ui.modal.overlay.right.display;
  };

  if (document.getElementById('component_app_status_opacity_overlay_right') != null) {
    document.getElementById('component_app_status_opacity_overlay_right').innerText = state.ui.modal.overlay.right.opacity;
  };

  if (document.getElementById('component_app_status_transform_overlay_right') != null) {
    document.getElementById('component_app_status_transform_overlay_right').innerText = state.ui.modal.overlay.right.transform;
  };

  // menu

  if (document.getElementById('component_app_status_display_menu_top') != null) {
    document.getElementById('component_app_status_display_menu_top').innerText = state.ui.modal.menu.top.display;
  };

  if (document.getElementById('component_app_status_opacity_menu_top') != null) {
    document.getElementById('component_app_status_opacity_menu_top').innerText = state.ui.modal.menu.top.opacity;
  };

  if (document.getElementById('component_app_status_transform_menu_top') != null) {
    document.getElementById('component_app_status_transform_menu_top').innerText = state.ui.modal.menu.top.transform;
  };

  if (document.getElementById('component_app_status_display_menu_bottom') != null) {
    document.getElementById('component_app_status_display_menu_bottom').innerText = state.ui.modal.menu.bottom.display;
  };

  if (document.getElementById('component_app_status_opacity_menu_bottom') != null) {
    document.getElementById('component_app_status_opacity_menu_bottom').innerText = state.ui.modal.menu.bottom.opacity;
  };

  if (document.getElementById('component_app_status_transform_menu_bottom') != null) {
    document.getElementById('component_app_status_transform_menu_bottom').innerText = state.ui.modal.menu.bottom.transform;
  };

  if (document.getElementById('component_app_status_display_menu_left') != null) {
    document.getElementById('component_app_status_display_menu_left').innerText = state.ui.modal.menu.left.display;
  };

  if (document.getElementById('component_app_status_opacity_menu_left') != null) {
    document.getElementById('component_app_status_opacity_menu_left').innerText = state.ui.modal.menu.left.opacity;
  };

  if (document.getElementById('component_app_status_transform_menu_left') != null) {
    document.getElementById('component_app_status_transform_menu_left').innerText = state.ui.modal.menu.left.transform;
  };

  if (document.getElementById('component_app_status_display_menu_right') != null) {
    document.getElementById('component_app_status_display_menu_right').innerText = state.ui.modal.menu.right.display;
  };

  if (document.getElementById('component_app_status_opacity_menu_right') != null) {
    document.getElementById('component_app_status_opacity_menu_right').innerText = state.ui.modal.menu.right.opacity;
  };

  if (document.getElementById('component_app_status_transform_menu_right') != null) {
    document.getElementById('component_app_status_transform_menu_right').innerText = state.ui.modal.menu.right.transform;
  };

  // fade

  if (document.getElementById('component_app_status_display_fade_top') != null) {
    document.getElementById('component_app_status_display_fade_top').innerText = state.ui.modal.fade.top.display;
  };

  if (document.getElementById('component_app_status_opacity_fade_top') != null) {
    document.getElementById('component_app_status_opacity_fade_top').innerText = state.ui.modal.fade.top.opacity;
  };

  if (document.getElementById('component_app_status_transform_fade_top') != null) {
    document.getElementById('component_app_status_transform_fade_top').innerText = state.ui.modal.fade.top.transform;
  };

  if (document.getElementById('component_app_status_display_fade_bottom') != null) {
    document.getElementById('component_app_status_display_fade_bottom').innerText = state.ui.modal.fade.bottom.display;
  };

  if (document.getElementById('component_app_status_opacity_fade_bottom') != null) {
    document.getElementById('component_app_status_opacity_fade_bottom').innerText = state.ui.modal.fade.bottom.opacity;
  };

  if (document.getElementById('component_app_status_transform_fade_bottom') != null) {
    document.getElementById('component_app_status_transform_fade_bottom').innerText = state.ui.modal.fade.bottom.transform;
  };

  if (document.getElementById('component_app_status_display_fade_left') != null) {
    document.getElementById('component_app_status_display_fade_left').innerText = state.ui.modal.fade.left.display;
  };

  if (document.getElementById('component_app_status_opacity_fade_left') != null) {
    document.getElementById('component_app_status_opacity_fade_left').innerText = state.ui.modal.fade.left.opacity;
  };

  if (document.getElementById('component_app_status_transform_fade_left') != null) {
    document.getElementById('component_app_status_transform_fade_left').innerText = state.ui.modal.fade.left.transform;
  };

  if (document.getElementById('component_app_status_display_fade_right') != null) {
    document.getElementById('component_app_status_display_fade_right').innerText = state.ui.modal.fade.right.display;
  };

  if (document.getElementById('component_app_status_opacity_fade_right') != null) {
    document.getElementById('component_app_status_opacity_fade_right').innerText = state.ui.modal.fade.right.opacity;
  };

  if (document.getElementById('component_app_status_transform_fade_right') != null) {
    document.getElementById('component_app_status_transform_fade_right').innerText = state.ui.modal.fade.right.transform;
  };

  // corner

  if (document.getElementById('component_app_status_display_corner_top') != null) {
    document.getElementById('component_app_status_display_corner_top').innerText = state.ui.modal.corner.top.display;
  };

  if (document.getElementById('component_app_status_opacity_corner_top') != null) {
    document.getElementById('component_app_status_opacity_corner_top').innerText = state.ui.modal.corner.top.opacity;
  };

  if (document.getElementById('component_app_status_transform_corner_top') != null) {
    document.getElementById('component_app_status_transform_corner_top').innerText = state.ui.modal.corner.top.transform;
  };

  if (document.getElementById('component_app_status_display_corner_bottom') != null) {
    document.getElementById('component_app_status_display_corner_bottom').innerText = state.ui.modal.corner.bottom.display;
  };

  if (document.getElementById('component_app_status_opacity_corner_bottom') != null) {
    document.getElementById('component_app_status_opacity_corner_bottom').innerText = state.ui.modal.corner.bottom.opacity;
  };

  if (document.getElementById('component_app_status_transform_corner_bottom') != null) {
    document.getElementById('component_app_status_transform_corner_bottom').innerText = state.ui.modal.corner.bottom.transform;
  };

  if (document.getElementById('component_app_status_display_corner_left') != null) {
    document.getElementById('component_app_status_display_corner_left').innerText = state.ui.modal.corner.left.display;
  };

  if (document.getElementById('component_app_status_opacity_corner_left') != null) {
    document.getElementById('component_app_status_opacity_corner_left').innerText = state.ui.modal.corner.left.opacity;
  };

  if (document.getElementById('component_app_status_transform_corner_left') != null) {
    document.getElementById('component_app_status_transform_corner_left').innerText = state.ui.modal.corner.left.transform;
  };

  if (document.getElementById('component_app_status_display_corner_right') != null) {
    document.getElementById('component_app_status_display_corner_right').innerText = state.ui.modal.corner.right.display;
  };

  if (document.getElementById('component_app_status_opacity_corner_right') != null) {
    document.getElementById('component_app_status_opacity_corner_right').innerText = state.ui.modal.corner.right.opacity;
  };

  if (document.getElementById('component_app_status_transform_corner_right') != null) {
    document.getElementById('component_app_status_transform_corner_right').innerText = state.ui.modal.corner.right.transform;
  };

  // morph

  if (document.getElementById('component_app_status_display_morph_top') != null) {
    document.getElementById('component_app_status_display_morph_top').innerText = state.ui.modal.morph.top.display;
  };

  if (document.getElementById('component_app_status_opacity_morph_top') != null) {
    document.getElementById('component_app_status_opacity_morph_top').innerText = state.ui.modal.morph.top.opacity;
  };

  if (document.getElementById('component_app_status_transform_morph_top') != null) {
    document.getElementById('component_app_status_transform_morph_top').innerText = state.ui.modal.morph.top.transform;
  };

  if (document.getElementById('component_app_status_display_morph_bottom') != null) {
    document.getElementById('component_app_status_display_morph_bottom').innerText = state.ui.modal.morph.bottom.display;
  };

  if (document.getElementById('component_app_status_opacity_morph_bottom') != null) {
    document.getElementById('component_app_status_opacity_morph_bottom').innerText = state.ui.modal.morph.bottom.opacity;
  };

  if (document.getElementById('component_app_status_transform_morph_bottom') != null) {
    document.getElementById('component_app_status_transform_morph_bottom').innerText = state.ui.modal.morph.bottom.transform;
  };

  if (document.getElementById('component_app_status_display_morph_left') != null) {
    document.getElementById('component_app_status_display_morph_left').innerText = state.ui.modal.morph.left.display;
  };

  if (document.getElementById('component_app_status_opacity_morph_left') != null) {
    document.getElementById('component_app_status_opacity_morph_left').innerText = state.ui.modal.morph.left.opacity;
  };

  if (document.getElementById('component_app_status_transform_morph_left') != null) {
    document.getElementById('component_app_status_transform_morph_left').innerText = state.ui.modal.morph.left.transform;
  };

  if (document.getElementById('component_app_status_display_morph_right') != null) {
    document.getElementById('component_app_status_display_morph_right').innerText = state.ui.modal.morph.right.display;
  };

  if (document.getElementById('component_app_status_opacity_morph_right') != null) {
    document.getElementById('component_app_status_opacity_morph_right').innerText = state.ui.modal.morph.right.opacity;
  };

  if (document.getElementById('component_app_status_transform_morph_right') != null) {
    document.getElementById('component_app_status_transform_morph_right').innerText = state.ui.modal.morph.right.transform;
  };

  // gradient

  if (document.getElementById('component_app_status_display_gradient_top') != null) {
    document.getElementById('component_app_status_display_gradient_top').innerText = state.ui.modal.gradient.top.display;
  };

  if (document.getElementById('component_app_status_opacity_gradient_top') != null) {
    document.getElementById('component_app_status_opacity_gradient_top').innerText = state.ui.modal.gradient.top.opacity;
  };

  if (document.getElementById('component_app_status_transform_gradient_top') != null) {
    document.getElementById('component_app_status_transform_gradient_top').innerText = state.ui.modal.gradient.top.transform;
  };

  if (document.getElementById('component_app_status_display_gradient_bottom') != null) {
    document.getElementById('component_app_status_display_gradient_bottom').innerText = state.ui.modal.gradient.bottom.display;
  };

  if (document.getElementById('component_app_status_opacity_gradient_bottom') != null) {
    document.getElementById('component_app_status_opacity_gradient_bottom').innerText = state.ui.modal.gradient.bottom.opacity;
  };

  if (document.getElementById('component_app_status_transform_gradient_bottom') != null) {
    document.getElementById('component_app_status_transform_gradient_bottom').innerText = state.ui.modal.gradient.bottom.transform;
  };

  if (document.getElementById('component_app_status_display_gradient_left') != null) {
    document.getElementById('component_app_status_display_gradient_left').innerText = state.ui.modal.gradient.left.display;
  };

  if (document.getElementById('component_app_status_opacity_gradient_left') != null) {
    document.getElementById('component_app_status_opacity_gradient_left').innerText = state.ui.modal.gradient.left.opacity;
  };

  if (document.getElementById('component_app_status_transform_gradient_left') != null) {
    document.getElementById('component_app_status_transform_gradient_left').innerText = state.ui.modal.gradient.left.transform;
  };

  if (document.getElementById('component_app_status_display_gradient_right') != null) {
    document.getElementById('component_app_status_display_gradient_right').innerText = state.ui.modal.gradient.right.display;
  };

  if (document.getElementById('component_app_status_opacity_gradient_right') != null) {
    document.getElementById('component_app_status_opacity_gradient_right').innerText = state.ui.modal.gradient.right.opacity;
  };

  if (document.getElementById('component_app_status_transform_gradient_right') != null) {
    document.getElementById('component_app_status_transform_gradient_right').innerText = state.ui.modal.gradient.right.transform;
  };

  // nav

  if (document.getElementById('component_app_status_display_nav_top') != null) {
    document.getElementById('component_app_status_display_nav_top').innerText = state.ui.modal.nav.top.display;
  };

  if (document.getElementById('component_app_status_opacity_nav_top') != null) {
    document.getElementById('component_app_status_opacity_nav_top').innerText = state.ui.modal.nav.top.opacity;
  };

  if (document.getElementById('component_app_status_transform_nav_top') != null) {
    document.getElementById('component_app_status_transform_nav_top').innerText = state.ui.modal.nav.top.transform;
  };

  if (document.getElementById('component_app_status_display_nav_bottom') != null) {
    document.getElementById('component_app_status_display_nav_bottom').innerText = state.ui.modal.nav.bottom.display;
  };

  if (document.getElementById('component_app_status_opacity_nav_bottom') != null) {
    document.getElementById('component_app_status_opacity_nav_bottom').innerText = state.ui.modal.nav.bottom.opacity;
  };

  if (document.getElementById('component_app_status_transform_nav_bottom') != null) {
    document.getElementById('component_app_status_transform_nav_bottom').innerText = state.ui.modal.nav.bottom.transform;
  };

  if (document.getElementById('component_app_status_display_nav_left') != null) {
    document.getElementById('component_app_status_display_nav_left').innerText = state.ui.modal.nav.left.display;
  };

  if (document.getElementById('component_app_status_opacity_nav_left') != null) {
    document.getElementById('component_app_status_opacity_nav_left').innerText = state.ui.modal.nav.left.opacity;
  };

  if (document.getElementById('component_app_status_transform_nav_left') != null) {
    document.getElementById('component_app_status_transform_nav_left').innerText = state.ui.modal.nav.left.transform;
  };

  if (document.getElementById('component_app_status_display_nav_right') != null) {
    document.getElementById('component_app_status_display_nav_right').innerText = state.ui.modal.nav.right.display;
  };

  if (document.getElementById('component_app_status_opacity_nav_right') != null) {
    document.getElementById('component_app_status_opacity_nav_right').innerText = state.ui.modal.nav.right.opacity;
  };

  if (document.getElementById('component_app_status_transform_nav_right') != null) {
    document.getElementById('component_app_status_transform_nav_right').innerText = state.ui.modal.nav.right.transform;
  };

  // browser

  if (document.getElementById('component_app_status_state_ux_browser_height') != null) {
    document.getElementById('component_app_status_state_ux_browser_height').innerText = state.ux.browser.height;
  };

  if (document.getElementById('component_app_status_state_ux_browser_height') != null) {
    document.getElementById('component_app_status_state_ux_browser_width').innerText = state.ux.browser.width;
  };

  if (document.getElementById('component_app_status_state_ux_browser_height') != null) {
    document.getElementById('component_app_status_state_ux_dimensions_height').innerText = state.ux.dimensions.height;
  };

  if (document.getElementById('component_app_status_state_ux_browser_height') != null) {
    document.getElementById('component_app_status_state_ux_dimensions_width').innerText = state.ux.dimensions.width;
  };

  if (document.getElementById('component_app_status_state_ux_browser_height') != null) {
    document.getElementById('component_app_status_state_events_mouse_clientX').innerHTML = state.events.mouse.clientX;
  };

  if (document.getElementById('component_app_status_state_ux_browser_height') != null) {
    document.getElementById('component_app_status_state_events_mouse_clientY').innerHTML = state.events.mouse.clientY;
  };

  if (document.getElementById('component_app_status_state_ux_browser_height') != null) {
    document.getElementById('component_app_status_state_events_mouse_x_axis').innerHTML = state.events.mouse.x_axis;
  };

  if (document.getElementById('component_app_status_state_ux_browser_height') != null) {
    document.getElementById('component_app_status_state_events_mouse_y_axis').innerHTML = state.events.mouse.y_axis;
  };

  if (document.getElementById('component_app_status_state_ux_browser_height') != null) {
    document.getElementById('component_app_status_state_events_mouse_absolute').innerHTML = state.events.mouse.absolute;
  };

  if (document.getElementById('component_app_status_state_ux_browser_height') != null) {
    document.getElementById('component_app_status_state_events_mouse_accelerationIncludingGravity_x').innerHTML = state.events.mouse.accelerationIncludingGravity.x;
  };

  if (document.getElementById('component_app_status_state_ux_browser_height') != null) {
    document.getElementById('component_app_status_state_events_mouse_accelerationIncludingGravity_y').innerHTML = state.events.mouse.accelerationIncludingGravity.y;
  };

  if (document.getElementById('component_app_status_state_ux_browser_height') != null) {
    document.getElementById('component_app_status_state_events_mouse_accelerationIncludingGravity_z').innerHTML = state.events.mouse.accelerationIncludingGravity.z;
  };

  if (document.getElementById('component_app_status_state_ux_browser_height') != null) {
    document.getElementById('component_app_status_state_events_mouse_acceleration_x').innerHTML = state.events.mouse.acceleration.x;
  };

  if (document.getElementById('component_app_status_state_ux_browser_height') != null) {
    document.getElementById('component_app_status_state_events_mouse_acceleration_y').innerHTML = state.events.mouse.acceleration.y;
  };

  if (document.getElementById('component_app_status_state_ux_browser_height') != null) {
    document.getElementById('component_app_status_state_events_mouse_acceleration_z').innerHTML = state.events.mouse.acceleration.z;
  };

  if (document.getElementById('component_app_status_state_ux_browser_height') != null) {
    document.getElementById('component_app_status_state_events_mouse_rotationRate_alpha').innerHTML = state.events.mouse.rotationRate.alpha;
  };

  if (document.getElementById('component_app_status_state_ux_browser_height') != null) {
    document.getElementById('component_app_status_state_events_mouse_rotationRate_beta').innerHTML = state.events.mouse.rotationRate.beta;
  };

  if (document.getElementById('component_app_status_state_ux_browser_height') != null) {
    document.getElementById('component_app_status_state_events_mouse_rotationRate_gamma').innerHTML = state.events.mouse.rotationRate.gamma;
  };

  if (document.getElementById('component_app_status_state_ux_browser_height') != null) {
    document.getElementById('component_app_status_state_events_mouse_alpha').innerHTML = state.events.mouse.alpha;
  };

  if (document.getElementById('component_app_status_state_ux_browser_height') != null) {
    document.getElementById('component_app_status_state_events_mouse_beta').innerHTML = state.events.mouse.beta;
  };

  if (document.getElementById('component_app_status_state_ux_browser_height') != null) {
    document.getElementById('component_app_status_state_events_mouse_gamma').innerHTML = state.events.mouse.gamma;
  };
};

let from_Import = () => {
  let a = 'from_Import';
  return a;
};

exports.default = {
  values_update,
  from_Import
};
},{"../index.js":3}],137:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require("../index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let state = '';

let Handle_ui = () => {

  state = _index2.default.Handle_return_state();

  if (state.events.mouse.up == true) {

    if (document.getElementById('component_app_interaction_hands') != null) {
      document.getElementById('component_app_interaction_hand').classList.add('interaction_hands');
    };
  };

  if (state.events.mouse.up == false) {

    if (document.getElementById('component_app_interaction_hands') != null) {
      document.getElementById('component_app_interaction_hand').classList.remove('interaction_hands');
    };
  };

  // gui
  if (document.getElementById('component_app_gui_logo_combo_feature_container') != null) {
    let component_app_gui_logo_combo_feature_container = document.getElementById('component_app_gui_logo_combo_feature_container');
    component_app_gui_logo_combo_feature_container.style = 'height: ' + 2 * state.ux.dimensions.height8 + 'px;' + 'width: ' + 2 * state.ux.dimensions.width8 + 'px;' + 'top: ' + state.events.mouse.drop.clientY + 'px;' + 'left: ' + state.events.mouse.drop.clientX + 'px;';
  };

  if (document.getElementById('logo_load_container') != null) {
    let logo_load_container = document.getElementById('logo_load_container');
    logo_load_container.style = 'height: ' + 2 * state.ux.dimensions.height8 + 'px;' + 'width: ' + 2 * state.ux.dimensions.width8 + 'px;' + 'top: ' + state.events.mouse.drag.clientY + 'px;' + 'left: ' + state.events.mouse.drag.clientX + 'px;';
  };

  if (document.getElementById('component_app_interaction_hands') != null) {
    let component_app_interaction_hands = document.getElementById('component_app_interaction_hands');
    component_app_interaction_hands.style = 'height: ' + state.ux.dimensions.height + 'px;' + 'width: ' + state.ux.dimensions.width + 'px;' + 'bottom: ' + 0 + 'px;' + 'left: ' + state.events.mouse.drop.clientX + 'px;';
  };

  if (document.getElementById('component_app_pieces_office_shoplights') != null) {
    let component_app_pieces_office_shoplights = document.getElementById('component_app_pieces_office_shoplights');
    component_app_pieces_office_shoplights.style = 'height: ' + state.ui.stage.shoplight.height * state.ux.dimensions.height8 + 'px;' + 'width: ' + state.ui.stage.shoplight.width * state.ux.dimensions.width8 + 'px;' + 'top: ' + state.ui.stage.shoplight.yaxis * state.ux.dimensions.height8 + 'px;' + 'left: ' + state.ui.stage.shoplight.xaxis * state.ux.dimensions.width8 + 'px;';
  };
  if (document.getElementById('component_app_gui_key') != null) {
    let component_app_gui_key = document.getElementById('component_app_gui_key');
    component_app_gui_key.style = 'height: ' + state.ui.gui.key.height * state.ux.dimensions.height8 + 'px;' + 'width: ' + state.ui.gui.key.width * state.ux.dimensions.width8 + 'px;' + 'top: ' + state.events.mouse.drag.clientY + 'px;' + 'left: ' + state.events.mouse.drag.clientX + 'px;';
  };

  if (document.getElementById('component_app_gui_keyhole') != null) {
    let component_app_gui_keyhole = document.getElementById('component_app_gui_keyhole');
    component_app_gui_keyhole.style = 'height: ' + state.ui.gui.key.height * state.ux.dimensions.height8 + 'px;' + 'width: ' + state.ui.gui.key.width * state.ux.dimensions.width8 + 'px;' + 'top: ' + state.ui.gui.key.yaxis * state.ux.dimensions.height8 + 'px;' + 'left: ' + state.ui.gui.key.xaxis * state.ux.dimensions.width8 + 'px;';
  };

  // 10 is half the size of the element_ball
  // It center the positioning point to the center of the element_ball
  if (document.getElementById('element_ball') != null) {
    document.getElementById('element_ball').style.top = state.events.mouse.gamma / state.ux.dimensions.height * 100 + "%";
    document.getElementById('element_ball').style.left = state.events.mouse.beta / state.ux.dimensions.width * 100 + "%";
  };

  // pieces
  // - workspace
  if (document.getElementById('component_app_pieces_workspace') != null) {
    document.getElementById('component_app_pieces_workspace').style = 'height: ' + state.ui.stage.workspace.desk.height * state.ux.dimensions.height8 + 'px;' + 'width: ' + state.ui.stage.workspace.desk.width * state.ux.dimensions.width8 + 'px;' + 'bottom: ' + state.ui.stage.workspace.desk.yaxis * state.ux.dimensions.height8 + 'px;' + 'left: ' + state.ui.stage.workspace.desk.xaxis * state.ux.dimensions.width8 + 'px;';
  };

  // interaction
  // - game
  // - player_1
  if (document.getElementById('component_app_interaction_game_players_1_body') != null) {
    document.getElementById('component_app_interaction_game_players_1_body').style = 'height: ' + state.ui.interaction.player_1.height * state.ux.dimensions.height8 + 'px;' + 'width: ' + state.ui.interaction.player_1.width * state.ux.dimensions.width8 + 'px;' + 'bottom: ' + state.ui.interaction.player_1.yaxis * state.ux.dimensions.height8 + 'px;' + 'left: ' + state.ui.interaction.player_1.xaxis * state.ux.dimensions.width8 + 'px;';
  };

  if (document.getElementById('component_app_particle_game_players_1') != null) {
    document.getElementById('component_app_particle_game_players_1').style = 'height: ' + state.ui.interaction.player_1.height * state.ux.dimensions.height8 + 'px;' + 'width: ' + state.ui.interaction.player_1.width * state.ux.dimensions.width8 + 'px;' + 'bottom: ' + state.ui.interaction.player_1.yaxis * state.ux.dimensions.height8 + 'px;' + 'left: ' + state.ui.interaction.player_1.xaxis * state.ux.dimensions.width8 + 'px;';
  };

  // Enemy
  if (document.getElementById('component_app_interaction_enemy') != null) {
    document.getElementById('component_app_interaction_enemy').style = 'height: ' + state.ui.interaction.enemy.height * state.ux.dimensions.height8 + 'px;' + 'width: ' + state.ui.interaction.enemy.width * state.ux.dimensions.width8 + 'px;' + 'bottom: ' + state.ui.interaction.enemy.yaxis * state.ux.dimensions.height8 + 'px;' + 'left: ' + state.ui.interaction.enemy.xaxis * state.ux.dimensions.width8 + 'px;';
  };

  if (document.getElementById('bounce') != null) {
    document.getElementById('bounce').style = 'top: ' + state.ui.interaction.bounce.yaxis * state.ux.dimensions.height8 + 'px; \
        left: ' + state.ui.interaction.bounce.xaxis * state.ux.dimensions.width8 + 'px ;';
  };
  if (document.getElementById('track_x') != null) {
    document.getElementById('track_x').style = 'top: ' + 0 + 'px; \
        left: ' + state.events.mouse.clientX + 'px ;';
  };
  if (document.getElementById('track_y') != null) {
    document.getElementById('track_y').style = 'top: ' + state.events.mouse.clientY + 'px; \
        left: ' + 0 + 'px ;';
  };
  if (document.getElementById('component_app_interaction_helper_body') != null) {
    document.getElementById('component_app_interaction_helper_body').style = 'height: ' + state.ui.interaction.helper.height * state.ux.dimensions.height8 + 'px;' + 'width: ' + state.ui.interaction.helper.width * state.ux.dimensions.width8 + 'px;' + 'bottom: ' + state.ui.interaction.helper.yaxis * state.ux.dimensions.height8 + 'px;' + 'left: ' + state.ui.interaction.helper.xaxis * state.ux.dimensions.width8 + 'px;';
  };

  //stage
  // Enneagon
  if (document.getElementById('component_app_stage_enneagon') != null) {
    document.getElementById('component_app_stage_enneagon').style = "transform: translate3d(" + state.ui.stage.enneagon.xaxis * 100 + "%, " + state.ui.stage.enneagon.yaxis * 100 + "%, 0);";
  };

  if (state.events.mouse != null) {

    /*
    if (state.events.mouse.enter == true) {
        state.ui.modal.nav.top.transform = false;
        state.ui.modal.nav.bottom.transform = false;
        state.ui.modal.nav.left.transform = false;
        state.ui.modal.nav.right.transform = false;
    };
     if (state.events.mouse.leave == true) {
        state.ui.modal.nav.top.transform = true;
        state.ui.modal.nav.bottom.transform = true;
        state.ui.modal.nav.left.transform = true;
        state.ui.modal.nav.right.transform = true;
    };
    */

    if (state.events.mouse.down == true && state.events.mouse.clientX > state.ux.dimensions.width8 * 4 && state.events.mouse.clientY > state.ux.dimensions.height8 * 3 && state.events.mouse.clientX < state.ux.dimensions.width8 * 5 && state.events.mouse.clientY < state.ux.dimensions.height8 * 4) {

      alert('mouse is in x_axis:5 x y_axis:4 grid');
    };
  };

  // component_app_pieces_workspace_chair_1
  if (state.ui.interaction.player_1.display == true && document.getElementById('component_app_interaction_game_players_1_body') != null) {
    if (state.ui.interaction.player_1.xaxis == state.ui.stage.workspace.desk.xaxis) {
      state.data.score.current.area += 1;
      document.getElementById('component_app_pieces_workspace_chair_1').classList.remove('piece_workspace_chair_0_0');
      document.getElementById('component_app_pieces_workspace_chair_1').classList.add('piece_workspace_chair_sitting_0_0');
    };

    if (state.ui.interaction.player_1.xaxis != state.ui.stage.workspace.desk.xaxis) {
      document.getElementById('component_app_pieces_workspace_chair_1').classList.remove('piece_workspace_chair_sitting_0_0');
      document.getElementById('component_app_pieces_workspace_chair_1').classList.add('piece_workspace_chair_0_0');
    };
  };

  // component_app_interaction_game_players_1_body
  if (state.ui.stage.workspace.desk.display == true && document.getElementById('component_app_interaction_game_players_1_body') != null) {
    if (state.ui.interaction.player_1.xaxis == state.ui.stage.workspace.desk.xaxis) {
      document.getElementById('component_app_interaction_game_players_1_body').classList.remove('opacity_1');
      document.getElementById('component_app_interaction_game_players_1_body').classList.add('opacity_0');
    };

    if (state.ui.interaction.player_1.xaxis != state.ui.stage.workspace.desk.xaxis) {
      document.getElementById('component_app_interaction_game_players_1_body').classList.remove('opacity_0');
      document.getElementById('component_app_interaction_game_players_1_body').classList.add('opacity_1');
    };
  };
};

exports.default = {
  Handle_ui
};
},{"../index.js":3}],3:[function(require,module,exports) {
/*
es2015 or es6

Phrases to empasises:
  1) Imports
  2) Best practices
  3) Delclarions
  4) Assignments
  5) Initialize
  6) Higher Order Functions - Returning state after filter/sort
  7) Closures - Data Encapsulation for particular concern (If game items choose path do "WHAT?")
  8) Boilerplate - allows Intermediate control of state ie (Filter and return result)
  9) Edge case
  10) Case study

Questions To Answer:
  - Node Bots?
  - Social Presents?
  - brand 6

Question To know the answers to:
  use strict?

Design Patterns
  Creational patterns:
  - Module
  - Builder
  - Module
  Structural patterns:
  - Facade
  - Composites
  - Module
  Behavioral patterns:
  - Observer
  - Static
  - Reactionary

Development Pattern
  - test driven development

Programming Pattern
  - O.O.P.
  - Functional - Partial App & Currying(Seperating concerns with functions to provide fewer parameters)
  - procedural
  - event driven
  - imperative
  - declarative

Order of operations
  1) Imports
  2) Delclarions
  3) Assignments
  4) Initialize
  5) Closures
  5) Lifecycle Hooks

*/

// Imports
'use strict';

// Imports

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _state = require("./partials/state");

var _state2 = _interopRequireDefault(_state);

var _functions = require("./partials/functions");

var _functions2 = _interopRequireDefault(_functions);

var _events = require("./partials/events");

var _events2 = _interopRequireDefault(_events);

var _defaults = require("./partials/defaults");

var _defaults2 = _interopRequireDefault(_defaults);

var _components = require("./partials/components");

var _components2 = _interopRequireDefault(_components);

var _values = require("./partials/values");

var _values2 = _interopRequireDefault(_values);

var _ui = require("./partials/ui");

var _ui2 = _interopRequireDefault(_ui);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Declaration

// import imported_generators from './partials/generators';
// import imported_elements from './partials/elements';
let state;
let functions;
let defaults;
let components;

// Assignment
state = _state2.default.default_state;
functions = _functions2.default;
defaults = _defaults2.default;
components = _components2.default;

// Initialization
let config = {
  apiKey: "AIzaSyDXIXMGC_38yav7wo7E5A8ZwGK7vNavpxk",
  authDomain: "gnougn-efdc5.firebaseapp.com",
  databaseURL: "https://gnougn-efdc5.firebaseio.com",
  projectId: "gnougn-efdc5",
  storageBucket: "gnougn-efdc5.appspot.com",
  messagingSenderId: "668732840020"
};

// Functions
firebase.initializeApp(config);

// Closures
let Handle_Firebase_Refs_and_Render = () => {
  console.log('Handle_Firebase_Refs');
  const rootRef = firebase.database().ref();
  const gnougnRef = rootRef.child('gnougn');
  const wordpressRef = gnougnRef.child('wordpress');
  console.log('Handle_Firebase_Refs');

  (() => {
    rootRef.on('value', function (snapshot) {
      var obj = snapshot.val();
      state.data.firebase = obj;
      console.log('state.data.firebase');
      console.log(state.data.firebase);
    });

    state.data.refs = false;
  })();

  // set firebase data
  (() => {

    var Handle_Repeat_Firebase_Validation = setInterval(function () {

      // repeat until refs are set
      if (state.data.refs == false) {

        let temp = state.data.firebase;
        // console.log('firbase objects -> firbase array');

        if (temp.gnougn.abilities != null) {
          // abilities
          // set objects to array - part 1

          let result_abilities = Object.keys(temp.gnougn.abilities).map(function (key) {
            return temp.gnougn.abilities[key];
          });

          // set objects to array - part 2
          state.data.firebase.gnougn.abilities = result_abilities;
          // console.log('abilities');
          // console.log(state.data.firebase.gnougn.abilities);
        };

        if (temp.gnougn.library != null) {
          // library
          // set objects to array - part 1
          let result_library = Object.keys(temp.gnougn.library).map(function (key) {
            return temp.gnougn.library[key];
          });

          // set objects to array - part 2
          state.data.firebase.gnougn.library = result_library;
          // console.log('library');
          // console.log(state.data.firebase.gnougn.library);
        };

        if (temp.gnougn.partners != null) {
          // partners
          // set objects to array - part 1
          let result_partners = Object.keys(temp.gnougn.partners).map(function (key) {
            return temp.gnougn.partners[key];
          });

          // set objects to array - part 2
          state.data.firebase.gnougn.partners = result_partners;
          // console.log('partners');
          // console.log(state.data.firebase.gnougn.partners);
        };

        if (temp.gnougn.services != null) {
          // services
          // set objects to array - part 1
          let result_services = Object.keys(temp.gnougn.services).map(function (key) {
            return temp.gnougn.services[key];
          });

          // set objects to array - part 2
          state.data.firebase.gnougn.services = result_services;
          // console.log('services');
          // console.log(state.data.firebase.gnougn.services);
        };

        if (temp.gnougn.roster != null) {
          // roster
          // set objects to array - part 1
          let result_roster = Object.keys(temp.gnougn.roster).map(function (key) {
            return temp.gnougn.roster[key];
          });

          // set objects to array - part 2
          state.data.firebase.gnougn.roster = result_roster;
          // console.log('roster');
          // console.log(state.data.firebase.gnougn.roster);
        };

        if (temp.gnougn.skills != null) {
          // skills
          // set objects to array - part 1
          let result_skills = Object.keys(temp.gnougn.skills).map(function (key) {
            return temp.gnougn.skills[key];
          });

          // set objects to array - part 2
          state.data.firebase.gnougn.skills = result_skills;
          // console.log('skills');
          // console.log(state.data.firebase.gnougn.skills);
        };

        if (temp.gnougn.skills != null) {

          console.log(state.data.firebase.gnougn);

          // Render listtings to front_end
          setTimeout(function () {
            state.data.refs = true;
            Handle_firebase_render();
            console.clear();

            // check ui state
            setTimeout(function () {

              setInterval(function () {
                Handle_check_states();
              }, 1000 / 24);
            }, 1000);
          }, 0);
        };
      };
    }, 0);
  })();
};

let Handle_firebase_render = () => {

  // render library
  (() => {

    setTimeout(function () {

      // *********************** "Order of operations" ************************

      // 1.) set array
      let array = state.data.firebase;

      // 2.) sort array
      let array_gnougn_library = array.gnougn.library.sort(find_sort());
      let filtered_array_gnougn_library = [];

      // 3.) filter array
      for (var i = 0; i < array_gnougn_library.length; i++) {
        if (array_gnougn_library[i].id.toString().toLowerCase().includes(document.getElementById('element_input_filter').value)) {
          filtered_array_gnougn_library.push(array_gnougn_library[i]);
        };
      };

      // 4.) empty ol element
      document.getElementById('element_ol_firebase_library').innerHTML = '';

      // 5.) fill ol element
      for (var i = 0; i < filtered_array_gnougn_library.length; i++) {
        // console.log(filtered_array_gnougn_library[i]);
        document.getElementById('element_ol_firebase_library').appendChild(_functions2.default.Generate_new_fragment.appendChild(_functions2.default.Generate_new_li(filtered_array_gnougn_library[i])));
      }

      // 6.) add events later
      find_view();
      find_type();
    }, 0);
  })();

  state.data.refs = true;
};

let Handle_return_state = () => {
  return state;
};

let Handle_check_route = (route, info) => {

  state.app.route = route;

  (() => {

    // null
    if (route == 'null') {

      if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {

        // reset

        // stages

        // particles

        // interaction

        // modals
        setTimeout(function () {
          // - nav
          state.ui.modal.nav.top.display = true;
          state.ui.modal.nav.top.transform = true;
          state.ui.modal.nav.bottom.display = true;
          state.ui.modal.nav.bottom.transform = true;
          state.ui.modal.nav.left.display = true;
          state.ui.modal.nav.left.transform = true;
          state.ui.modal.nav.right.display = true;
          state.ui.modal.nav.right.transform = true;
        }, 2000);

        // colors
        setTimeout(function () {
          state.ui.colors.load_light_yellow_0.display = true;
        }, 1000);

        // gui
        setTimeout(function () {

          state.ui.gui.top.display = false;
          state.ui.gui.top.opacity = false;
          state.ui.gui.top.transform = false;

          state.ui.gui.top_right.display = false;
          state.ui.gui.top_right.opacity = false;
          state.ui.gui.top_right.transform = false;

          state.ui.gui.top_left.display = true;
          state.ui.gui.top_left.opacity = true;
          state.ui.gui.top_left.transform = false;

          state.ui.gui.right.display = false;
          state.ui.gui.right.opacity = false;
          state.ui.gui.right.transform = false;

          state.ui.gui.left.display = false;
          state.ui.gui.left.opacity = false;
          state.ui.gui.left.transform = false;

          state.ui.gui.bottom.display = false;
          state.ui.gui.bottom.opacity = false;
          state.ui.gui.bottom.transform = false;

          state.ui.gui.bottom_right.display = false;
          state.ui.gui.bottom_right.opacity = false;
          state.ui.gui.bottom_right.transform = false;

          state.ui.gui.bottom_left.display = false;
          state.ui.gui.bottom_left.opacity = false;
          state.ui.gui.bottom_left.transform = false;

          state.ui.gui.scroll.y.display = false;
          state.ui.gui.scroll.y.opacity = false;
          state.ui.gui.scroll.y.transform = true;

          state.ui.stage.enneagon.display = true;
          state.ui.stage.enneagon.opacity = true;
          state.ui.stage.enneagon.transform = false;
        }, 1000);
      };

      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {

        // reset

        // stages

        // particles

        // interaction

        // modals
        setTimeout(function () {
          // - nav
          state.ui.modal.nav.top.display = true;
          state.ui.modal.nav.top.transform = true;
          state.ui.modal.nav.bottom.display = true;
          state.ui.modal.nav.bottom.transform = true;
          state.ui.modal.nav.left.display = true;
          state.ui.modal.nav.left.transform = true;
          state.ui.modal.nav.right.display = true;
          state.ui.modal.nav.right.transform = true;
        }, 2000);

        // colors
        setTimeout(function () {
          state.ui.colors.load_light_yellow_0.display = true;
        }, 1000);

        // gui
        setTimeout(function () {

          state.ui.gui.top.display = false;
          state.ui.gui.top.opacity = false;
          state.ui.gui.top.transform = false;

          state.ui.gui.top_right.display = false;
          state.ui.gui.top_right.opacity = false;
          state.ui.gui.top_right.transform = false;

          state.ui.gui.top_left.display = true;
          state.ui.gui.top_left.opacity = true;
          state.ui.gui.top_left.transform = false;

          state.ui.gui.right.display = false;
          state.ui.gui.right.opacity = false;
          state.ui.gui.right.transform = false;

          state.ui.gui.left.display = false;
          state.ui.gui.left.opacity = false;
          state.ui.gui.left.transform = false;

          state.ui.gui.bottom.display = false;
          state.ui.gui.bottom.opacity = false;
          state.ui.gui.bottom.transform = false;

          state.ui.gui.bottom_right.display = false;
          state.ui.gui.bottom_right.opacity = false;
          state.ui.gui.bottom_right.transform = false;

          state.ui.gui.bottom_left.display = false;
          state.ui.gui.bottom_left.opacity = false;
          state.ui.gui.bottom_left.transform = false;

          state.ui.gui.scroll.y.display = false;
          state.ui.gui.scroll.y.opacity = false;
          state.ui.gui.scroll.y.transform = true;

          state.ui.stage.enneagon.display = true;
          state.ui.stage.enneagon.opacity = true;
          state.ui.stage.enneagon.transform = false;
        }, 1000);
      };
    };

    // ON TO Preview
    if (route == 'library_preview') {

      // function start (Preview)
      let number = Math.floor(Math.random() * 1000000000000000 + 1);

      document.getElementById('component_app_modal_element_pop_top_content').innerHTML = '';
      document.getElementById('component_app_modal_element_pop_top_content').innerHTML += info;
      document.getElementById('component_app_modal_element_pop_top_content').innerHTML += '<div id="close' + number + '" class="gui_close width_10vh height_10vh float_left position_relative"></div>';
      document.getElementById('component_app_modal_element_pop_top_content').innerHTML += '<div id="enter' + number + '" class="gui_arrow_left width_10vh height_10vh float_left position_relative"></div>';

      state.ui.modal.pop.top.display = true;

      setTimeout(function () {
        state.ui.modal.pop.top.transform = false;
      }, 200);

      // add event listeners
      setTimeout(() => {

        document.getElementById('close' + number + '').addEventListener('click', event => {
          // function start (Preview close)
          state.ui.modal.pop.top.display = true;
          state.ui.modal.pop.top.transform = true;
        });

        // ON TO DETAIL
        document.getElementById('enter' + number + '').addEventListener('click', event => {

          // function start (Detail)
          document.getElementById('component_app_modal_element_page_top_content').innerHTML = '<div id="component_app_modal_element_page_top_content_close' + number + '" class="gui_close width_10vh height_10vh float_left position_relative"></div>';
          document.getElementById('component_app_modal_element_page_top_content').innerHTML += '<div id="component_app_modal_element_page_top_content_enter' + number + '" class="gui_arrow_left width_10vh height_10vh float_left position_relative"></div>';

          state.ui.modal.page.top.display = true;

          setTimeout(() => {
            state.ui.modal.page.top.transform = false;
          }, 200);

          // add event listeners
          setTimeout(() => {

            document.getElementById('component_app_modal_element_page_top_content_close' + number + '').addEventListener('click', event => {
              // function start (Preview close)
              state.ui.modal.page.top.display = true;
              state.ui.modal.page.top.transform = true;
            });

            // ON TO TOUR
            document.getElementById('component_app_modal_element_page_top_content_enter' + number + '').addEventListener('click', event => {

              state.ui.modal.overlay.top.display = true;
              state.ui.modal.overlay.top.transform = true;

              // function start (Tour)
              document.getElementById('component_app_modal_element_overlay_top_content').innerHTML = '<div id="component_app_modal_element_overlay_top_content_close' + number + '" class="gui_close width_10vh height_10vh float_left position_relative"></div>';
              document.getElementById('component_app_modal_element_overlay_top_content').innerHTML += '<div id="component_app_modal_element_overlay_top_content_enter' + number + '" class="gui_arrow_left width_10vh height_10vh float_left position_relative"></div>';

              state.ui.modal.overlay.top.display = true;

              setTimeout(() => {
                state.ui.modal.overlay.top.transform = false;
              }, 200);

              // add event listeners
              setTimeout(() => {
                document.getElementById('component_app_modal_element_overlay_top_content_close' + number + '').addEventListener('click', event => {

                  // function start (Preview close)
                  state.ui.modal.overlay.top.display = true;
                  state.ui.modal.overlay.top.transform = true;
                });

                // ON TO DONE
                document.getElementById('component_app_modal_element_overlay_top_content_enter' + number + '').addEventListener('click', event => {

                  alert('DONE!');
                });
              }, 1000);
            });
          }, 1000);
        });
      }, 1000);
    };

    if (route == 'reset') {

      // gui
      state.ui.gui.top.display = false;
      state.ui.gui.top.opacity = false;
      state.ui.gui.top.transform = false;
      state.ui.gui.top_left.display = false;
      state.ui.gui.top_left.opacity = false;
      state.ui.gui.top_left.transform = false;
      state.ui.gui.top_right.display = false;
      state.ui.gui.top_right.opacity = false;
      state.ui.gui.top_right.transform = false;
      state.ui.gui.left.display = false;
      state.ui.gui.left.opacity = false;
      state.ui.gui.left.transform = false;
      state.ui.gui.right.display = false;
      state.ui.gui.right.opacity = false;
      state.ui.gui.right.transform = false;
      state.ui.gui.bottom.display = false;
      state.ui.gui.bottom.opacity = false;
      state.ui.gui.bottom.transform = false;
      state.ui.gui.bottom_left.display = false;
      state.ui.gui.bottom_left.opacity = false;
      state.ui.gui.bottom_left.transform = false;
      state.ui.gui.bottom_right.display = false;
      state.ui.gui.bottom_right.opacity = false;
      state.ui.gui.bottom_right.transform = false;

      // state.ui.gui.scroll.y.display = false;
      // state.ui.gui.scroll.y.opacity = false;
      // state.ui.gui.scroll.y.transform = false;

      // - modal

      // -- nav
      state.ui.modal.nav.top.display = false;
      state.ui.modal.nav.top.transform = false;
      state.ui.modal.nav.bottom.display = false;
      state.ui.modal.nav.bottom.transform = false;
      state.ui.modal.nav.left.display = false;
      state.ui.modal.nav.left.transform = false;
      state.ui.modal.nav.right.display = false;
      state.ui.modal.nav.right.transform = false;

      // - - page
      state.ui.modal.page.top.display = false;
      state.ui.modal.page.top.transform = false;
      state.ui.modal.page.bottom.display = false;
      state.ui.modal.page.bottom.transform = false;
      state.ui.modal.page.left.display = false;
      state.ui.modal.page.left.transform = false;
      state.ui.modal.page.right.display = false;
      state.ui.modal.page.right.transform = false;

      // - - pop
      state.ui.modal.pop.top.display = false;
      state.ui.modal.pop.top.transform = false;
      state.ui.modal.pop.bottom.display = false;
      state.ui.modal.pop.bottom.transform = false;
      state.ui.modal.pop.left.display = false;
      state.ui.modal.pop.left.transform = false;
      state.ui.modal.pop.right.display = false;
      state.ui.modal.pop.right.transform = false;
    };

    if (route == 'start') {

      state.ui.gui.top_right.display = true;
      state.ui.gui.top.display = true;
      state.ui.gui.top_left.display = true;

      state.ui.gui.left.display = true;
      state.ui.gui.right.display = true;

      state.ui.gui.bottom_right.display = true;
      state.ui.gui.bottom.display = true;
      state.ui.gui.bottom_left.display = true;

      state.ui.modal.nav.bottom.transform = true;
      state.ui.modal.nav.left.transform = true;
      state.ui.modal.nav.top.transform = true;
      state.ui.modal.nav.right.transform = true;

      state.ui.modal.pop.bottom.transform = true;
      state.ui.modal.pop.left.transform = true;
      state.ui.modal.pop.top.transform = true;
      state.ui.modal.pop.right.transform = true;

      state.ui.modal.page.bottom.transform = true;
      state.ui.modal.page.left.transform = true;
      state.ui.modal.page.top.transform = true;
      state.ui.modal.page.right.transform = true;
    };

    if (route == 'home') {

      state.ui.gui.top_right.display = false;
      state.ui.gui.top.display = false;
      state.ui.gui.top_left.display = true;

      state.ui.gui.left.display = false;
      state.ui.gui.right.display = false;

      state.ui.gui.bottom_right.display = false;
      state.ui.gui.bottom.display = false;
      state.ui.gui.bottom_left.display = false;

      state.ui.modal.nav.bottom.transform = true;
      state.ui.modal.nav.left.transform = true;
      state.ui.modal.nav.top.transform = true;
      state.ui.modal.nav.right.transform = true;

      state.ui.modal.pop.bottom.transform = true;
      state.ui.modal.pop.left.transform = true;
      state.ui.modal.pop.top.transform = true;
      state.ui.modal.pop.right.transform = true;

      state.ui.modal.page.bottom.transform = true;
      state.ui.modal.page.left.transform = true;
      state.ui.modal.page.top.transform = true;
      state.ui.modal.page.right.transform = true;
    };
  })();
};

let values_update = () => {
  _values2.default.values_update();
};

let Handle_render = () => {

  document.getElementById('component_app').innerHTML = '';
  for (var i = 0; i < defaults.colors.length; i++) {
    console.log('defaults.colors[i]: ' + defaults.colors[i]);
    document.getElementById(defaults.colors[i].parent).appendChild(_functions2.default.Generate_new_fragment.appendChild(_functions2.default.Generate_new_div(defaults.colors[i].innerHTML, defaults.colors[i].classList, defaults.colors[i].id, '')));
  };
};

let Handle_display_with_delay = () => {

  for (var i = 0; i < components.length; i++) {
    // console.log(components[i].component);
    // console.log(components[i].component_state);

    // colors
    if (document.getElementById(components[i].component) != null) {
      _functions2.default.Toggle_functions_IF_State(_functions2.default.Toggle_display_and_opacity_on_with_no_delay, _functions2.default.Toggle_display_and_opacity_off_with_delay, components[i].component, components[i].component_state_display);
    };
  };
};

let Handle_transform = () => {

  for (var i = 0; i < components.length; i++) {
    // console.log(components[i].component);
    // console.log(components[i].component_state);

    // colors
    if (document.getElementById(components[i].component) != null) {
      _functions2.default.Toggle_classes_IF_State(components[i].component_state_transform_false, components[i].component_state_transform_true, components[i].component, components[i].component_state_transform);
    };
  };
};

let Handle_opacity = () => {

  for (var i = 0; i < components.length; i++) {

    // colors
    if (document.getElementById(components[i].component) != null) {
      _functions2.default.Toggle_classes_IF_State('opacity_0', 'opacity_1', components[i].component, components[i].component_state_opacity);
    };
  };
};

let Handle_init = () => {
  //console.log('Handle_init');
};

let Handle_check_states = () => {
  //console.log('Handle_check_states');
  components = _components2.default.get_components_handled();
  _ui2.default.Handle_ui();
  Handle_display_with_delay();
  Handle_opacity();
  Handle_transform();
  Handle_init();
};

let Handle_get_state_from_events = () => {
  state = _events2.default.Handle_return_state_from_events();
  values_update();
  console.log('state in index from events');
  // console.log(state);
};

let Handle_EventListeners = () => {

  document.getElementById('hire').addEventListener("click", function (event) {
    state.ui.modal.pop.top.display = true;

    setTimeout(() => {
      state.ui.modal.pop.top.transform = !state.ui.modal.pop.top.transform;

      if (state.ui.modal.pop.top.transform == false) {
        document.getElementById('component_app_gui_logo_icon').classList.remove('gui_logo_dj_final_mark');
        document.getElementById('component_app_gui_logo_icon').classList.add('gui_close');
      };

      if (state.ui.modal.pop.top.transform == true) {
        document.getElementById('component_app_gui_logo_icon').classList.remove('gui_close');
        document.getElementById('component_app_gui_logo_icon').classList.add('gui_logo_dj_final_mark');
      };
    }, 100);
  });

  document.getElementById('component_app_gui_logo_icon').addEventListener("click", function (event) {
    state.ui.modal.pop.top.display = true;

    setTimeout(() => {
      state.ui.modal.pop.top.transform = !state.ui.modal.pop.top.transform;

      if (state.ui.modal.pop.top.transform == false) {
        document.getElementById('component_app_gui_logo_icon').classList.remove('gui_logo_dj_final_mark');
        document.getElementById('component_app_gui_logo_icon').classList.add('gui_close');
      };

      if (state.ui.modal.pop.top.transform == true) {
        document.getElementById('component_app_gui_logo_icon').classList.remove('gui_close');
        document.getElementById('component_app_gui_logo_icon').classList.add('gui_logo_dj_final_mark');
      };
    }, 100);
  });

  document.getElementById('component_app_gui_menu_icon').addEventListener("click", function (event) {
    state.ui.modal.nav.top.display = true;

    setTimeout(() => {
      state.ui.modal.nav.top.transform = !state.ui.modal.nav.top.transform;

      if (state.ui.modal.nav.top.transform == false) {
        document.getElementById('component_app_gui_menu_icon').classList.remove('gui_menu');
        document.getElementById('component_app_gui_menu_icon').classList.add('gui_close');
      };

      if (state.ui.modal.nav.top.transform == true) {
        document.getElementById('component_app_gui_menu_icon').classList.remove('gui_close');
        document.getElementById('component_app_gui_menu_icon').classList.add('gui_menu');
      };
    }, 100);
  });

  document.getElementById('component_content_scroll').addEventListener("click", function (event) {

    setTimeout(() => {
      state.ui.gui.scroll.y.display = !state.ui.gui.scroll.y.display;

      if (state.ui.gui.scroll.y.display == true) {
        document.getElementById('component_content_scroll').classList.remove('display');
        document.getElementById('component_content_scroll').classList.add('display_none');
      };

      if (state.ui.gui.scroll.y.display == false) {
        document.getElementById('component_content_scroll').classList.remove('display_none');
        document.getElementById('component_content_scroll').classList.add('display');
      };

      if (state.ui.gui.scroll.y.display == true) {
        document.getElementById('gui_content_component').classList.add('display');
        document.getElementById('gui_content_component').classList.remove('display_none');
      };

      if (state.ui.gui.scroll.y.display == false) {
        document.getElementById('gui_content_component').classList.add('display_none');
        document.getElementById('gui_content_component').classList.remove('display');
      };
    }, 100);
  });

  document.getElementById('learn_more').addEventListener("click", function (event) {
    state.ui.modal.page.bottom.display = true;

    setTimeout(() => {
      state.ui.modal.pop.top.transform = !state.ui.modal.pop.top.transform;

      if (state.ui.modal.pop.top.transform == false) {
        document.getElementById('learn_more').classList.remove('display');
        document.getElementById('learn_more').classList.add('display_none');
      };

      if (state.ui.modal.pop.top.transform == true) {
        document.getElementById('learn_more').classList.remove('display_none');
        document.getElementById('learn_more').classList.add('display');
      };
    }, 100);
  });

  document.getElementById('enter_site').addEventListener("click", function (event) {
    state.ui.modal.pop.top.display = true;

    setTimeout(() => {
      state.ui.modal.pop.top.transform = !state.ui.modal.pop.top.transform;

      if (state.ui.modal.pop.top.transform == false) {
        document.getElementById('enter_site').classList.remove('display');
        document.getElementById('enter_site').classList.add('display_none');
      };

      if (state.ui.modal.pop.top.transform == true) {
        document.getElementById('enter_site').classList.remove('display_none');
        document.getElementById('enter_site').classList.add('display');
      };
    }, 100);
  });

  document.getElementById('component_app_gui_top_left').addEventListener("click", function (event) {});

  document.getElementById('component_app_gui_top_right').addEventListener("click", function (event) {});

  document.getElementById('component_app_gui_top_center').addEventListener("click", function (event) {});

  document.getElementById('component_app_gui_left').addEventListener("click", function (event) {
    state.ui.modal.pop.left.display = true;
    state.ui.modal.pop.left.transform = !state.ui.modal.pop.left.transform;
  });

  document.getElementById('component_app_gui_right').addEventListener("click", function (event) {
    state.ui.modal.pop.right.display = true;
    state.ui.modal.pop.right.transform = !state.ui.modal.pop.right.transform;
  });

  document.getElementById('component_app_gui_bottom_center').addEventListener("click", function (event) {
    state.ui.modal.pop.bottom.display = true;
    state.ui.modal.pop.bottom.transform = !state.ui.modal.pop.bottom.transform;
  });

  document.getElementById('component_app_gui_bottom_left').addEventListener("click", function (event) {
    state.ui.modal.pop.top.display = true;
    state.ui.modal.pop.top.transform = !state.ui.modal.pop.top.transform;
  });

  document.getElementById('component_app_gui_bottom_right').addEventListener("click", function (event) {
    state.ui.modal.pop.top.display = true;
    state.ui.modal.pop.top.transform = !state.ui.modal.pop.top.transform;
  });

  document.getElementById('component_app_status_display_nav_top').addEventListener("click", function (event) {
    state.ui.modal.nav.top.display = !state.ui.modal.nav.top.display;
  });

  document.getElementById('component_app_status_opacity_nav_top').addEventListener("click", function (event) {
    state.ui.modal.nav.top.opacity = !state.ui.modal.nav.top.opacity;
  });

  document.getElementById('component_app_status_transform_nav_top').addEventListener("click", function (event) {
    state.ui.modal.nav.top.transform = !state.ui.modal.nav.top.transform;
  });

  // nav - left
  document.getElementById('component_app_status_display_nav_left').addEventListener("click", function (event) {
    state.ui.modal.nav.left.display = !state.ui.modal.nav.left.display;
  });

  document.getElementById('component_app_status_opacity_nav_left').addEventListener("click", function (event) {
    state.ui.modal.nav.left.opacity = !state.ui.modal.nav.left.opacity;
  });

  document.getElementById('component_app_status_transform_nav_left').addEventListener("click", function (event) {
    state.ui.modal.nav.left.transform = !state.ui.modal.nav.left.transform;
  });

  // nav - bottom
  document.getElementById('component_app_status_display_nav_bottom').addEventListener("click", function (event) {
    state.ui.modal.nav.bottom.display = !state.ui.modal.nav.bottom.display;
  });

  document.getElementById('component_app_status_opacity_nav_bottom').addEventListener("click", function (event) {
    state.ui.modal.nav.bottom.opacity = !state.ui.modal.nav.bottom.opacity;
  });

  document.getElementById('component_app_status_transform_nav_bottom').addEventListener("click", function (event) {
    state.ui.modal.nav.bottom.transform = !state.ui.modal.nav.bottom.transform;
  });

  // nav - right
  document.getElementById('component_app_status_display_nav_right').addEventListener("click", function (event) {
    state.ui.modal.nav.right.display = !state.ui.modal.nav.right.display;
  });

  document.getElementById('component_app_status_opacity_nav_right').addEventListener("click", function (event) {
    state.ui.modal.nav.right.opacity = !state.ui.modal.nav.right.opacity;
  });

  document.getElementById('component_app_status_transform_nav_right').addEventListener("click", function (event) {
    state.ui.modal.nav.right.transform = !state.ui.modal.nav.right.transform;
  });

  // pop - top
  document.getElementById('component_app_status_display_pop_top').addEventListener("click", function (event) {
    state.ui.modal.pop.top.display = !state.ui.modal.pop.top.display;
  });

  document.getElementById('component_app_status_opacity_pop_top').addEventListener("click", function (event) {
    state.ui.modal.pop.top.opacity = !state.ui.modal.pop.top.opacity;
  });

  document.getElementById('component_app_status_transform_pop_top').addEventListener("click", function (event) {
    state.ui.modal.pop.top.transform = !state.ui.modal.pop.top.transform;
  });

  // pop - left
  document.getElementById('component_app_status_display_pop_left').addEventListener("click", function (event) {
    state.ui.modal.pop.left.display = !state.ui.modal.pop.left.display;
  });

  document.getElementById('component_app_status_opacity_pop_left').addEventListener("click", function (event) {
    state.ui.modal.pop.left.opacity = !state.ui.modal.pop.left.opacity;
  });

  document.getElementById('component_app_status_transform_pop_left').addEventListener("click", function (event) {
    state.ui.modal.pop.left.transform = !state.ui.modal.pop.left.transform;
  });

  // pop - bottom
  document.getElementById('component_app_status_display_pop_bottom').addEventListener("click", function (event) {
    state.ui.modal.pop.bottom.display = !state.ui.modal.pop.bottom.display;
  });

  document.getElementById('component_app_status_opacity_pop_bottom').addEventListener("click", function (event) {
    state.ui.modal.pop.bottom.opacity = !state.ui.modal.pop.bottom.opacity;
  });

  document.getElementById('component_app_status_transform_pop_bottom').addEventListener("click", function (event) {
    state.ui.modal.pop.bottom.transform = !state.ui.modal.pop.bottom.transform;
  });

  // pop - right
  document.getElementById('component_app_status_display_pop_right').addEventListener("click", function (event) {
    state.ui.modal.pop.right.display = !state.ui.modal.pop.right.display;
  });

  document.getElementById('component_app_status_opacity_pop_right').addEventListener("click", function (event) {
    state.ui.modal.pop.right.opacity = !state.ui.modal.pop.right.opacity;
  });

  document.getElementById('component_app_status_transform_pop_right').addEventListener("click", function (event) {
    state.ui.modal.pop.right.transform = !state.ui.modal.pop.right.transform;
  });

  // page - top
  document.getElementById('component_app_status_display_page_top').addEventListener("click", function (event) {
    state.ui.modal.page.top.display = !state.ui.modal.page.top.display;
  });

  document.getElementById('component_app_status_opacity_page_top').addEventListener("click", function (event) {
    state.ui.modal.page.top.opacity = !state.ui.modal.page.top.opacity;
  });

  document.getElementById('component_app_status_transform_page_top').addEventListener("click", function (event) {
    state.ui.modal.page.top.transform = !state.ui.modal.page.top.transform;
  });

  // page - left
  document.getElementById('component_app_status_display_page_left').addEventListener("click", function (event) {
    state.ui.modal.page.left.display = !state.ui.modal.page.left.display;
  });

  document.getElementById('component_app_status_opacity_page_left').addEventListener("click", function (event) {
    state.ui.modal.page.left.opacity = !state.ui.modal.page.left.opacity;
  });

  document.getElementById('component_app_status_transform_page_left').addEventListener("click", function (event) {
    state.ui.modal.page.left.transform = !state.ui.modal.page.left.transform;
  });

  // page - bottom
  document.getElementById('component_app_status_display_page_bottom').addEventListener("click", function (event) {
    state.ui.modal.page.bottom.display = !state.ui.modal.page.bottom.display;
  });

  document.getElementById('component_app_status_opacity_page_bottom').addEventListener("click", function (event) {
    state.ui.modal.page.bottom.opacity = !state.ui.modal.page.bottom.opacity;
  });

  document.getElementById('component_app_status_transform_page_bottom').addEventListener("click", function (event) {
    state.ui.modal.page.bottom.transform = !state.ui.modal.page.bottom.transform;
  });

  // page - right
  document.getElementById('component_app_status_display_page_right').addEventListener("click", function (event) {
    state.ui.modal.page.right.display = !state.ui.modal.page.right.display;
  });

  document.getElementById('component_app_status_opacity_page_right').addEventListener("click", function (event) {
    state.ui.modal.page.right.opacity = !state.ui.modal.page.right.opacity;
  });

  document.getElementById('component_app_status_transform_page_right').addEventListener("click", function (event) {
    state.ui.modal.page.right.transform = !state.ui.modal.page.right.transform;
  });

  // morph - top
  document.getElementById('component_app_status_display_morph_top').addEventListener("click", function (event) {
    state.ui.modal.morph.top.display = !state.ui.modal.morph.top.display;
  });

  document.getElementById('component_app_status_opacity_morph_top').addEventListener("click", function (event) {
    state.ui.modal.morph.top.opacity = !state.ui.modal.morph.top.opacity;
  });

  document.getElementById('component_app_status_transform_morph_top').addEventListener("click", function (event) {
    state.ui.modal.morph.top.transform = !state.ui.modal.morph.top.transform;
  });

  // morph - left
  document.getElementById('component_app_status_display_morph_left').addEventListener("click", function (event) {
    state.ui.modal.morph.left.display = !state.ui.modal.morph.left.display;
  });

  document.getElementById('component_app_status_opacity_morph_left').addEventListener("click", function (event) {
    state.ui.modal.morph.left.opacity = !state.ui.modal.morph.left.opacity;
  });

  document.getElementById('component_app_status_transform_morph_left').addEventListener("click", function (event) {
    state.ui.modal.morph.left.transform = !state.ui.modal.morph.left.transform;
  });

  // morph - bottom
  document.getElementById('component_app_status_display_morph_bottom').addEventListener("click", function (event) {
    state.ui.modal.morph.bottom.display = !state.ui.modal.morph.bottom.display;
  });

  document.getElementById('component_app_status_opacity_morph_bottom').addEventListener("click", function (event) {
    state.ui.modal.morph.bottom.opacity = !state.ui.modal.morph.bottom.opacity;
  });

  document.getElementById('component_app_status_transform_morph_bottom').addEventListener("click", function (event) {
    state.ui.modal.morph.bottom.transform = !state.ui.modal.morph.bottom.transform;
  });

  // morph - right
  document.getElementById('component_app_status_display_morph_right').addEventListener("click", function (event) {
    state.ui.modal.morph.right.display = !state.ui.modal.morph.right.display;
  });

  document.getElementById('component_app_status_opacity_morph_right').addEventListener("click", function (event) {
    state.ui.modal.morph.right.opacity = !state.ui.modal.morph.right.opacity;
  });

  document.getElementById('component_app_status_transform_morph_right').addEventListener("click", function (event) {
    state.ui.modal.morph.right.transform = !state.ui.modal.morph.right.transform;
  });

  // corner - top
  document.getElementById('component_app_status_display_corner_top').addEventListener("click", function (event) {
    state.ui.modal.corner.top.display = !state.ui.modal.corner.top.display;
  });

  document.getElementById('component_app_status_opacity_corner_top').addEventListener("click", function (event) {
    state.ui.modal.corner.top.opacity = !state.ui.modal.corner.top.opacity;
  });

  document.getElementById('component_app_status_transform_corner_top').addEventListener("click", function (event) {
    state.ui.modal.corner.top.transform = !state.ui.modal.corner.top.transform;
  });

  // corner - left
  document.getElementById('component_app_status_display_corner_left').addEventListener("click", function (event) {
    state.ui.modal.corner.left.display = !state.ui.modal.corner.left.display;
  });

  document.getElementById('component_app_status_opacity_corner_left').addEventListener("click", function (event) {
    state.ui.modal.corner.left.opacity = !state.ui.modal.corner.left.opacity;
  });

  document.getElementById('component_app_status_transform_corner_left').addEventListener("click", function (event) {
    state.ui.modal.corner.left.transform = !state.ui.modal.corner.left.transform;
  });

  // corner - bottom
  document.getElementById('component_app_status_display_corner_bottom').addEventListener("click", function (event) {
    state.ui.modal.corner.bottom.display = !state.ui.modal.corner.bottom.display;
  });

  document.getElementById('component_app_status_opacity_corner_bottom').addEventListener("click", function (event) {
    state.ui.modal.corner.bottom.opacity = !state.ui.modal.corner.bottom.opacity;
  });

  document.getElementById('component_app_status_transform_corner_bottom').addEventListener("click", function (event) {
    state.ui.modal.corner.bottom.transform = !state.ui.modal.corner.bottom.transform;
  });

  // corner - right
  document.getElementById('component_app_status_display_corner_right').addEventListener("click", function (event) {
    state.ui.modal.corner.right.display = !state.ui.modal.corner.right.display;
  });

  document.getElementById('component_app_status_opacity_corner_right').addEventListener("click", function (event) {
    state.ui.modal.corner.right.opacity = !state.ui.modal.corner.right.opacity;
  });

  document.getElementById('component_app_status_transform_corner_right').addEventListener("click", function (event) {
    state.ui.modal.corner.right.transform = !state.ui.modal.corner.right.transform;
  });

  // fade - top
  document.getElementById('component_app_status_display_fade_top').addEventListener("click", function (event) {
    state.ui.modal.fade.top.display = !state.ui.modal.fade.top.display;
  });

  document.getElementById('component_app_status_opacity_fade_top').addEventListener("click", function (event) {
    state.ui.modal.fade.top.opacity = !state.ui.modal.fade.top.opacity;
  });

  document.getElementById('component_app_status_transform_fade_top').addEventListener("click", function (event) {
    state.ui.modal.fade.top.transform = !state.ui.modal.fade.top.transform;
  });

  // fade - left
  document.getElementById('component_app_status_display_fade_left').addEventListener("click", function (event) {
    state.ui.modal.fade.left.display = !state.ui.modal.fade.left.display;
  });

  document.getElementById('component_app_status_opacity_fade_left').addEventListener("click", function (event) {
    state.ui.modal.fade.left.opacity = !state.ui.modal.fade.left.opacity;
  });

  document.getElementById('component_app_status_transform_fade_left').addEventListener("click", function (event) {
    state.ui.modal.fade.left.transform = !state.ui.modal.fade.left.transform;
  });

  // fade - bottom
  document.getElementById('component_app_status_display_fade_bottom').addEventListener("click", function (event) {
    state.ui.modal.fade.bottom.display = !state.ui.modal.fade.bottom.display;
  });

  document.getElementById('component_app_status_opacity_fade_bottom').addEventListener("click", function (event) {
    state.ui.modal.fade.bottom.opacity = !state.ui.modal.fade.bottom.opacity;
  });

  document.getElementById('component_app_status_transform_fade_bottom').addEventListener("click", function (event) {
    state.ui.modal.fade.bottom.transform = !state.ui.modal.fade.bottom.transform;
  });

  // fade - right
  document.getElementById('component_app_status_display_fade_right').addEventListener("click", function (event) {
    state.ui.modal.fade.right.display = !state.ui.modal.fade.right.display;
  });

  document.getElementById('component_app_status_opacity_fade_right').addEventListener("click", function (event) {
    state.ui.modal.fade.right.opacity = !state.ui.modal.fade.right.opacity;
  });

  document.getElementById('component_app_status_transform_fade_right').addEventListener("click", function (event) {
    state.ui.modal.fade.right.transform = !state.ui.modal.fade.right.transform;
  });

  // gradient - top
  document.getElementById('component_app_status_display_gradient_top').addEventListener("click", function (event) {
    state.ui.modal.gradient.top.display = !state.ui.modal.gradient.top.display;
  });

  document.getElementById('component_app_status_opacity_gradient_top').addEventListener("click", function (event) {
    state.ui.modal.gradient.top.opacity = !state.ui.modal.gradient.top.opacity;
  });

  document.getElementById('component_app_status_transform_gradient_top').addEventListener("click", function (event) {
    state.ui.modal.gradient.top.transform = !state.ui.modal.gradient.top.transform;
  });

  // gradient - left
  document.getElementById('component_app_status_display_gradient_left').addEventListener("click", function (event) {
    state.ui.modal.gradient.left.display = !state.ui.modal.gradient.left.display;
  });

  document.getElementById('component_app_status_opacity_gradient_left').addEventListener("click", function (event) {
    state.ui.modal.gradient.left.opacity = !state.ui.modal.gradient.left.opacity;
  });

  document.getElementById('component_app_status_transform_gradient_left').addEventListener("click", function (event) {
    state.ui.modal.gradient.left.transform = !state.ui.modal.gradient.left.transform;
  });

  // gradient - bottom
  document.getElementById('component_app_status_display_gradient_bottom').addEventListener("click", function (event) {
    state.ui.modal.gradient.bottom.display = !state.ui.modal.gradient.bottom.display;
  });

  document.getElementById('component_app_status_opacity_gradient_bottom').addEventListener("click", function (event) {
    state.ui.modal.gradient.bottom.opacity = !state.ui.modal.gradient.bottom.opacity;
  });

  document.getElementById('component_app_status_transform_gradient_bottom').addEventListener("click", function (event) {
    state.ui.modal.gradient.bottom.transform = !state.ui.modal.gradient.bottom.transform;
  });

  // gradient - right
  document.getElementById('component_app_status_display_gradient_right').addEventListener("click", function (event) {
    state.ui.modal.gradient.right.display = !state.ui.modal.gradient.right.display;
  });

  document.getElementById('component_app_status_opacity_gradient_right').addEventListener("click", function (event) {
    state.ui.modal.gradient.right.opacity = !state.ui.modal.gradient.right.opacity;
  });

  document.getElementById('component_app_status_transform_gradient_right').addEventListener("click", function (event) {
    state.ui.modal.gradient.right.transform = !state.ui.modal.gradient.right.transform;
  });

  // menu - top
  document.getElementById('component_app_status_display_menu_top').addEventListener("click", function (event) {
    state.ui.modal.menu.top.display = !state.ui.modal.menu.top.display;
  });

  document.getElementById('component_app_status_opacity_menu_top').addEventListener("click", function (event) {
    state.ui.modal.menu.top.opacity = !state.ui.modal.menu.top.opacity;
  });

  document.getElementById('component_app_status_transform_menu_top').addEventListener("click", function (event) {
    state.ui.modal.menu.top.transform = !state.ui.modal.menu.top.transform;
  });

  // menu - left
  document.getElementById('component_app_status_display_menu_left').addEventListener("click", function (event) {
    state.ui.modal.menu.left.display = !state.ui.modal.menu.left.display;
  });

  document.getElementById('component_app_status_opacity_menu_left').addEventListener("click", function (event) {
    state.ui.modal.menu.left.opacity = !state.ui.modal.menu.left.opacity;
  });

  document.getElementById('component_app_status_transform_menu_left').addEventListener("click", function (event) {
    state.ui.modal.menu.left.transform = !state.ui.modal.menu.left.transform;
  });

  // menu - bottom
  document.getElementById('component_app_status_display_menu_bottom').addEventListener("click", function (event) {
    state.ui.modal.menu.bottom.display = !state.ui.modal.menu.bottom.display;
  });

  document.getElementById('component_app_status_opacity_menu_bottom').addEventListener("click", function (event) {
    state.ui.modal.menu.bottom.opacity = !state.ui.modal.menu.bottom.opacity;
  });

  document.getElementById('component_app_status_transform_menu_bottom').addEventListener("click", function (event) {
    state.ui.modal.menu.bottom.transform = !state.ui.modal.menu.bottom.transform;
  });

  // menu - right
  document.getElementById('component_app_status_display_menu_right').addEventListener("click", function (event) {
    state.ui.modal.menu.right.display = !state.ui.modal.menu.right.display;
  });

  document.getElementById('component_app_status_opacity_menu_right').addEventListener("click", function (event) {
    state.ui.modal.menu.right.opacity = !state.ui.modal.menu.right.opacity;
  });

  document.getElementById('component_app_status_transform_menu_right').addEventListener("click", function (event) {
    state.ui.modal.menu.right.transform = !state.ui.modal.menu.right.transform;
  });

  // overlay - top
  document.getElementById('component_app_status_display_overlay_top').addEventListener("click", function (event) {
    state.ui.modal.overlay.top.display = !state.ui.modal.overlay.top.display;
  });

  document.getElementById('component_app_status_opacity_overlay_top').addEventListener("click", function (event) {
    state.ui.modal.overlay.top.opacity = !state.ui.modal.overlay.top.opacity;
  });

  document.getElementById('component_app_status_transform_overlay_top').addEventListener("click", function (event) {
    state.ui.modal.overlay.top.transform = !state.ui.modal.overlay.top.transform;
  });

  // overlay - left
  document.getElementById('component_app_status_display_overlay_left').addEventListener("click", function (event) {
    state.ui.modal.overlay.left.display = !state.ui.modal.overlay.left.display;
  });

  document.getElementById('component_app_status_opacity_overlay_left').addEventListener("click", function (event) {
    state.ui.modal.overlay.left.opacity = !state.ui.modal.overlay.left.opacity;
  });

  document.getElementById('component_app_status_transform_overlay_left').addEventListener("click", function (event) {
    state.ui.modal.overlay.left.transform = !state.ui.modal.overlay.left.transform;
  });

  // overlay - bottom
  document.getElementById('component_app_status_display_overlay_bottom').addEventListener("click", function (event) {
    state.ui.modal.overlay.bottom.display = !state.ui.modal.overlay.bottom.display;
  });

  document.getElementById('component_app_status_opacity_overlay_bottom').addEventListener("click", function (event) {
    state.ui.modal.overlay.bottom.opacity = !state.ui.modal.overlay.bottom.opacity;
  });

  document.getElementById('component_app_status_transform_overlay_bottom').addEventListener("click", function (event) {
    state.ui.modal.overlay.bottom.transform = !state.ui.modal.overlay.bottom.transform;
  });

  // overlay - right
  document.getElementById('component_app_status_display_overlay_right').addEventListener("click", function (event) {
    state.ui.modal.overlay.right.display = !state.ui.modal.overlay.right.display;
  });

  document.getElementById('component_app_status_opacity_overlay_right').addEventListener("click", function (event) {
    state.ui.modal.overlay.right.opacity = !state.ui.modal.overlay.right.opacity;
  });

  document.getElementById('component_app_status_transform_overlay_right').addEventListener("click", function (event) {
    state.ui.modal.overlay.right.transform = !state.ui.modal.overlay.right.transform;
  });
};

// Create
let addListings = child => {

  let default_item = {
    id: 0,
    title: document.getElementById('element_input_title').value,
    subtitle: document.getElementById('element_input_subtitle').value,
    paragraph: document.getElementById('element_input_paragraph').value,
    category: document.getElementById('element_input_category').value,
    tag: document.getElementById('element_input_tag').value,
    type: document.getElementById('element_input_type').value,
    feature: [{
      title: "interaction_workspace_man_standing_1"
    }, {
      title: "interaction_workspace_man_standing_2"
    }, {
      title: "interaction_workspace_man_standing_3"
    }, {
      title: "interaction_workspace_man_standing_4"
    }, {
      title: "interaction_workspace_man_standing_5"
    }, {
      title: "interaction_workspace_man_standing_6"
    }, {
      title: "interaction_workspace_man_standing_7"
    }, {
      title: "interaction_workspace_man_standing_8"
    }, {
      title: "interaction_workspace_man_standing_9"
    }, {
      title: "interaction_workspace_man_standing_10"
    }, {
      title: "interaction_workspace_man_standing_11"
    }, {
      title: "interaction_workspace_man_standing_12"
    }, {
      title: "interaction_workspace_man_standing_13"
    }, {
      title: "interaction_workspace_man_standing_14"
    }, {
      title: "interaction_workspace_man_standing_15"
    }, {
      title: "interaction_workspace_man_standing_16"
    }],
    categories: [{
      title: "developer"
    }, {
      title: "design"
    }, {
      title: "graphic"
    }, {
      title: "motion"
    }, {
      title: "strategy"
    }, {
      title: "content"
    }],
    tags: [{
      title: "developer"
    }, {
      title: "design"
    }, {
      title: "graphic"
    }, {
      title: "motion"
    }, {
      title: "strategy"
    }, {
      title: "content"
    }],
    character: "interaction_workspace_man_standing_1",
    author: {
      "profile_picture": "photo_person1"
    },

    dislikes: 0,
    likes: 0,
    views: 0,
    meh: 0,
    previews: 0,
    "abilities": [{
      "fullname": "4240",
      "id": "-LGHD8-62MwWnnPzUw7g",
      "likescount": 0,
      "title": "dummy420",
      "employers": [{
        "fullname": "4240",
        "id": "-LGHD8-62MwWnnPzUw7g",
        "likescount": 0,
        "title": "dummy420"
      }, {
        "fullname": "420",
        "id": "-LGHD8-62MwWnn23",
        "likescount": 0,
        "title": "dummy420"
      }]
    }, {
      "fullname": "420",
      "id": "-LGHD8-62MwWnn23",
      "likescount": 0,
      "title": "dummy420",
      "employers": [{
        "fullname": "4240",
        "id": "-LGHD8-62MwWnnPzUw7g",
        "likescount": 0,
        "title": "dummy420"
      }, {
        "fullname": "420",
        "id": "-LGHD8-62MwWnn23",
        "likescount": 0,
        "title": "dummy420"
      }]
    }],
    "info": {
      "subtitle": "and 3d animator",
      "summary": "If the formula doesn't work, we change the formula.",
      "testimonials": [{
        "experience": 7,
        "id": 1
      }]
    }
  };

  document.getElementById('element_input_title').value = '';

  // Firebase References
  // Firebase Database
  const rootRef = firebase.database().ref();
  const gnougnRef = rootRef.child('gnougn');
  const Ref = gnougnRef.child(child);

  Ref.push(default_item).then(snap => {
    const key = snap.key;
    console.log('from addListing' + key);
    // update created item with snap.key
    Ref.child(key).update({
      id: key
    });

    // Set firebase data
    setTimeout(function () {
      Handle_Firebase_Refs_and_Render();
    }, 0);
  });
};

// Delete
let deleteWhoListings = (child, id) => {

  // Firebase References
  // Firebase Database
  const rootRef = firebase.database().ref();
  const gnougnRef = rootRef.child('gnougn');
  const Ref = gnougnRef.child(child);
  console.log(id, 'from deleteWhoListings service');
  Ref.child(id).remove();

  // Set firebase data
  setTimeout(function () {
    Handle_Firebase_Refs_and_Render();
  }, 0);
};

// Update
let likeWhoListings = (child, id) => {

  // Firebase References
  // Firebase Database
  const rootRef = firebase.database().ref();
  const gnougnRef = rootRef.child('gnougn');
  const Ref = gnougnRef.child(child);
  console.log(id, 'from likeWhoListings service');
  var changeThisValue;
  Ref.child(id).once('value', function (snap) {
    changeThisValue = snap.val(); // Keep the local user object synced with the Firebase userRef
  });

  changeThisValue.likes += 1;
  Ref.child(id).set(changeThisValue);
  console.log(id);
  // Set firebase data
  setTimeout(function () {
    Handle_Firebase_Refs_and_Render();
  }, 0);
};

// Update
let dislikeWhoListings = (child, id) => {

  // Firebase References
  // Firebase Database
  const rootRef = firebase.database().ref();
  const gnougnRef = rootRef.child('gnougn');
  const Ref = gnougnRef.child(child);
  console.log(id, 'from likeWhoListings service');
  var changeThisValue;
  Ref.child(id).once('value', function (snap) {
    changeThisValue = snap.val(); // Keep the local user object synced with the Firebase userRef
  });

  changeThisValue.likes -= 1;

  Ref.child(id).set(changeThisValue);

  console.log(id);
  console.log(changeThisValue);

  // Set firebase data
  setTimeout(function () {
    Handle_Firebase_Refs_and_Render();
  }, 0);
};

let find_sort = () => {
  if (document.getElementById('element_input_sort').value == 'likesup' || '') {
    return function (a, b) {
      return a.likes - b.likes;
    };
  };
  if (document.getElementById('element_input_sort').value == 'likesdown') {
    return function (a, b) {
      return b.likes - a.likes;
    };
  };
};

let find_view = () => {
  if (document.getElementById('element_input_view').value == 'card' || document.getElementById('element_input_view').value == '') {
    document.getElementById('element_ol_firebase_library').classList.add('card');
    document.getElementById('element_ol_firebase_library').classList.remove('grid');
    document.getElementById('element_ol_firebase_library').classList.remove('list');
  };

  if (document.getElementById('element_input_view').value == 'grid') {
    document.getElementById('element_ol_firebase_library').classList.add('grid');
    document.getElementById('element_ol_firebase_library').classList.remove('card');
    document.getElementById('element_ol_firebase_library').classList.remove('list');
  };

  if (document.getElementById('element_input_view').value == 'list') {
    document.getElementById('element_ol_firebase_library').classList.add('list');
    document.getElementById('element_ol_firebase_library').classList.remove('card');
    document.getElementById('element_ol_firebase_library').classList.remove('grid');
  };
};

let find_type = () => {
  if (document.getElementById('element_input_type').value == 'ux/ui' || document.getElementById('element_input_type').value == '') {
    document.getElementById('element_ol_firebase_library').classList.add('ux/ui');
    document.getElementById('element_ol_firebase_library').classList.remove('slider');
    document.getElementById('element_ol_firebase_library').classList.remove('photo');
    document.getElementById('element_ol_firebase_library').classList.remove('graphic');
    document.getElementById('element_ol_firebase_library').classList.remove('read');
    document.getElementById('element_ol_firebase_library').classList.remove('video');
    document.getElementById('element_ol_firebase_library').classList.remove('code');
    document.getElementById('element_ol_firebase_library').classList.remove('gallery');
  };

  if (document.getElementById('element_input_type').value == 'code') {
    document.getElementById('element_ol_firebase_library').classList.add('code');
    document.getElementById('element_ol_firebase_library').classList.remove('slider');
    document.getElementById('element_ol_firebase_library').classList.remove('photo');
    document.getElementById('element_ol_firebase_library').classList.remove('graphic');
    document.getElementById('element_ol_firebase_library').classList.remove('read');
    document.getElementById('element_ol_firebase_library').classList.remove('video');
    document.getElementById('element_ol_firebase_library').classList.remove('gallery');
    document.getElementById('element_ol_firebase_library').classList.remove('ux/ui');
  };

  if (document.getElementById('element_input_type').value == 'gallery') {
    document.getElementById('element_ol_firebase_library').classList.add('gallery');
    document.getElementById('element_ol_firebase_library').classList.remove('slider');
    document.getElementById('element_ol_firebase_library').classList.remove('photo');
    document.getElementById('element_ol_firebase_library').classList.remove('graphic');
    document.getElementById('element_ol_firebase_library').classList.remove('read');
    document.getElementById('element_ol_firebase_library').classList.remove('video');
    document.getElementById('element_ol_firebase_library').classList.remove('code');
    document.getElementById('element_ol_firebase_library').classList.remove('ux/ui');
  };

  if (document.getElementById('element_input_type').value == 'video') {
    document.getElementById('element_ol_firebase_library').classList.add('video');
    document.getElementById('element_ol_firebase_library').classList.remove('slider');
    document.getElementById('element_ol_firebase_library').classList.remove('photo');
    document.getElementById('element_ol_firebase_library').classList.remove('graphic');
    document.getElementById('element_ol_firebase_library').classList.remove('read');
    document.getElementById('element_ol_firebase_library').classList.remove('gallery');
    document.getElementById('element_ol_firebase_library').classList.remove('code');
    document.getElementById('element_ol_firebase_library').classList.remove('ux/ui');
  };

  if (document.getElementById('element_input_type').value == 'read') {
    document.getElementById('element_ol_firebase_library').classList.add('read');
    document.getElementById('element_ol_firebase_library').classList.remove('slider');
    document.getElementById('element_ol_firebase_library').classList.remove('photo');
    document.getElementById('element_ol_firebase_library').classList.remove('graphic');
    document.getElementById('element_ol_firebase_library').classList.remove('video');
    document.getElementById('element_ol_firebase_library').classList.remove('gallery');
    document.getElementById('element_ol_firebase_library').classList.remove('code');
    document.getElementById('element_ol_firebase_library').classList.remove('ux/ui');
  };

  if (document.getElementById('element_input_type').value == 'graphic') {
    document.getElementById('element_ol_firebase_library').classList.add('graphic');
    document.getElementById('element_ol_firebase_library').classList.remove('slider');
    document.getElementById('element_ol_firebase_library').classList.remove('photo');
    document.getElementById('element_ol_firebase_library').classList.remove('video');
    document.getElementById('element_ol_firebase_library').classList.remove('read');
    document.getElementById('element_ol_firebase_library').classList.remove('gallery');
    document.getElementById('element_ol_firebase_library').classList.remove('code');
    document.getElementById('element_ol_firebase_library').classList.remove('ux/ui');
  };

  if (document.getElementById('element_input_type').value == 'photo') {
    document.getElementById('element_ol_firebase_library').classList.add('photo');
    document.getElementById('element_ol_firebase_library').classList.remove('slider');
    document.getElementById('element_ol_firebase_library').classList.remove('video');
    document.getElementById('element_ol_firebase_library').classList.remove('graphic');
    document.getElementById('element_ol_firebase_library').classList.remove('read');
    document.getElementById('element_ol_firebase_library').classList.remove('gallery');
    document.getElementById('element_ol_firebase_library').classList.remove('code');
    document.getElementById('element_ol_firebase_library').classList.remove('ux/ui');
  };

  if (document.getElementById('element_input_type').value == 'slider') {
    document.getElementById('element_ol_firebase_library').classList.add('slider');
    document.getElementById('element_ol_firebase_library').classList.remove('video');
    document.getElementById('element_ol_firebase_library').classList.remove('photo');
    document.getElementById('element_ol_firebase_library').classList.remove('graphic');
    document.getElementById('element_ol_firebase_library').classList.remove('read');
    document.getElementById('element_ol_firebase_library').classList.remove('gallery');
    document.getElementById('element_ol_firebase_library').classList.remove('code');
    document.getElementById('element_ol_firebase_library').classList.remove('ux/ui');
  };
};

// Lifecycle hooks
window.onload = () => {

  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
    document.getElementById('component_app').classList.remove('height_100vh');
    document.getElementById('component_app').classList.remove('overflow_y');
  }

  if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
    document.getElementById('component_app').classList.add('height_100vh');
    document.getElementById('component_app').classList.add('overflow_y');
  }

  // garage('monster', 'monster');
  console.log(localStorage);
  console.log(localStorage.username);
  console.log(localStorage.userid);
  console.log(localStorage.userpassword);
  console.log(localStorage.useremail);
  console.log(window);
  console.log(screen);
  console.log(screen.height);
  console.log(screen.width);
  console.log(navigator);
  console.log(history);
  console.log(history.length);
  console.log(location);
  console.log(location.pathname);

  // render view
  Handle_render();

  // render firebase data
  Handle_Firebase_Refs_and_Render();

  // render route: null
  Handle_check_route(state.app.route);

  // add events
  Handle_EventListeners();

  // start timer
  (() => {
    let int = 0;
    setInterval(function () {

      console.log(state.events.key.keys);

      if (state.events.key.keys.length == 0) {
        state.events.key.up = true;
        state.events.key.down = false;
      };

      if (state.events.key.keys.length != 0) {
        state.events.key.up = false;
        state.events.key.down = true;
      };

      if (state.events.key.up == true) {
        state.events.key.timer -= 1;
        console.log('state.events.key.timer: ' + state.events.key.timer);
      }

      if (state.events.key.up == false) {
        state.events.key.timer += 1;
        console.log('state.events.key.timer: ' + state.events.key.timer);
      }

      if (state.events.mouse.up == true) {
        state.events.mouse.timer -= 1;
        console.log('state.events.mouse.timer: ' + state.events.mouse.timer);
      }

      if (state.events.mouse.up == false) {
        state.events.mouse.timer += 1;
        console.log('state.events.mouse.timer: ' + state.events.mouse.timer);
      }
      int += 1;
      console.log(int);
    }, 1000);
  })();

  // alert(state.ui.interaction.dice);
  // alert(state.ui.interaction.random);
  // get date
  // get date
  (() => {
    setInterval(function () {
      let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      let date = new Date();
      state.data.time = 'Today is ' + days[date.getDay()] + ', ' + months[date.getMonth()] + ', ' + date.getDay() + ', ' + date.getFullYear() + '. Current time: ' + date.getHours() + ':' + date.getMinutes() + '.' + date.getSeconds() + '.' + date.getMilliseconds();
      console.log(state.data.time);
      document.getElementById('time').innerText = state.data.time;
    }, 1000);
  })();

  /*
   // Player 1 Spin
  (function () {
      let frame = 1;
      setInterval(
          function () {
               let MANIPULATED = document.getElementById('component_app_interaction_player_1_body');
              let MANIPULATED_Length = 16;
              if (MANIPULATED != null) {
                   if (frame == 1) {
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_1');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_2');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_3');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_4');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_5');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_6');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_7');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_8');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_9');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_10');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_11');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_12');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_13');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_14');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_15');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_16');
                      MANIPULATED.classList.add('interaction_workspace_man_standing_1');
                  };
                   if (frame == 2) {
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_1');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_2');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_3');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_4');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_5');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_6');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_7');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_8');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_9');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_10');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_11');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_12');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_13');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_14');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_15');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_16');
                      MANIPULATED.classList.add('interaction_workspace_man_standing_2');
                  };
                   if (frame == 3) {
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_1');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_2');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_3');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_4');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_5');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_6');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_7');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_8');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_9');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_10');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_11');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_12');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_13');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_14');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_15');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_16');
                      MANIPULATED.classList.add('interaction_workspace_man_standing_3');
                  };
                   if (frame == 4) {
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_1');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_2');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_3');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_4');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_5');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_6');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_7');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_8');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_9');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_10');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_11');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_12');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_13');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_14');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_15');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_16');
                      MANIPULATED.classList.add('interaction_workspace_man_standing_4');
                  };
                   if (frame == 5) {
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_1');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_2');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_3');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_4');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_5');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_6');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_7');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_8');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_9');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_10');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_11');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_12');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_13');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_14');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_15');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_16');
                      MANIPULATED.classList.add('interaction_workspace_man_standing_5');
                  };
                   if (frame == 6) {
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_1');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_2');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_3');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_4');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_5');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_6');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_7');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_8');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_9');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_10');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_11');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_12');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_13');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_14');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_15');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_16');
                      MANIPULATED.classList.add('interaction_workspace_man_standing_6');
                  };
                   if (frame == 7) {
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_1');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_2');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_3');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_4');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_5');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_6');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_7');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_8');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_9');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_10');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_11');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_12');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_13');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_14');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_15');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_16');
                      MANIPULATED.classList.add('interaction_workspace_man_standing_7');
                  };
                   if (frame == 8) {
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_1');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_2');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_3');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_4');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_5');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_6');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_7');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_8');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_9');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_10');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_11');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_12');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_13');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_14');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_15');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_16');
                      MANIPULATED.classList.add('interaction_workspace_man_standing_8');
                  };
                   if (frame == 9) {
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_1');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_2');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_3');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_4');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_5');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_6');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_7');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_8');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_9');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_10');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_11');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_12');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_13');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_14');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_15');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_16');
                      MANIPULATED.classList.add('interaction_workspace_man_standing_9');
                  };
                   if (frame == 10) {
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_1');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_2');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_3');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_4');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_5');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_6');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_7');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_8');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_9');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_10');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_11');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_12');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_13');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_14');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_15');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_16');
                      MANIPULATED.classList.add('interaction_workspace_man_standing_10');
                  };
                   if (frame == 11) {
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_1');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_2');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_3');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_4');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_5');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_6');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_7');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_8');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_9');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_10');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_11');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_12');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_13');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_14');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_15');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_16');
                      MANIPULATED.classList.add('interaction_workspace_man_standing_11');
                  };
                   if (frame == 12) {
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_1');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_2');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_3');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_4');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_5');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_6');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_7');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_8');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_9');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_10');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_11');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_12');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_13');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_14');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_15');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_16');
                      MANIPULATED.classList.add('interaction_workspace_man_standing_12');
                  };
                   if (frame == 13) {
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_1');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_2');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_3');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_4');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_5');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_6');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_7');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_8');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_9');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_10');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_11');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_12');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_13');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_14');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_15');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_16');
                      MANIPULATED.classList.add('interaction_workspace_man_standing_13');
                  };
                   if (frame == 14) {
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_1');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_2');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_3');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_4');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_5');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_6');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_7');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_8');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_9');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_10');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_11');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_12');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_13');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_14');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_15');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_16');
                      MANIPULATED.classList.add('interaction_workspace_man_standing_14');
                  };
                   if (frame == 15) {
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_1');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_2');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_3');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_4');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_5');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_6');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_7');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_8');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_9');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_10');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_11');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_12');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_13');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_14');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_15');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_16');
                      MANIPULATED.classList.add('interaction_workspace_man_standing_15');
                  };
                   if (frame == 16) {
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_1');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_2');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_3');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_4');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_5');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_6');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_7');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_8');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_9');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_10');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_11');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_12');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_13');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_14');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_15');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_16');
                      MANIPULATED.classList.add('interaction_workspace_man_standing_16');
                  };
               };
               frame += 1;
              if (frame > MANIPULATED_Length) {
                  frame = 1;
              };
           }, 1000 / state.animation.framerate);
  }());
   // Helper
  (function () {
      let frame = 1;
      setInterval(
          function () {
               let MANIPULATED = document.getElementById('component_app_interaction_helper_body');
              let MANIPULATED_Length = 16;
               if (MANIPULATED != null) {
                   if (frame == 1) {
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_1');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_2');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_3');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_4');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_5');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_6');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_7');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_8');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_9');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_10');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_11');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_12');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_13');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_14');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_15');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_16');
                      MANIPULATED.classList.add('interaction_workspace_man_standing_1');
                  };
                   if (frame == 2) {
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_1');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_2');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_3');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_4');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_5');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_6');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_7');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_8');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_9');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_10');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_11');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_12');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_13');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_14');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_15');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_16');
                      MANIPULATED.classList.add('interaction_workspace_man_standing_2');
                  };
                   if (frame == 3) {
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_1');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_2');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_3');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_4');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_5');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_6');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_7');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_8');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_9');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_10');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_11');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_12');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_13');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_14');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_15');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_16');
                      MANIPULATED.classList.add('interaction_workspace_man_standing_3');
                  };
                   if (frame == 4) {
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_1');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_2');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_3');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_4');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_5');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_6');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_7');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_8');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_9');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_10');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_11');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_12');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_13');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_14');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_15');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_16');
                      MANIPULATED.classList.add('interaction_workspace_man_standing_4');
                  };
                   if (frame == 5) {
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_1');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_2');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_3');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_4');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_5');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_6');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_7');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_8');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_9');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_10');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_11');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_12');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_13');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_14');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_15');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_16');
                      MANIPULATED.classList.add('interaction_workspace_man_standing_5');
                  };
                   if (frame == 6) {
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_1');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_2');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_3');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_4');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_5');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_6');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_7');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_8');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_9');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_10');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_11');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_12');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_13');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_14');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_15');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_16');
                      MANIPULATED.classList.add('interaction_workspace_man_standing_6');
                  };
                   if (frame == 7) {
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_1');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_2');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_3');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_4');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_5');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_6');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_7');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_8');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_9');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_10');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_11');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_12');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_13');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_14');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_15');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_16');
                      MANIPULATED.classList.add('interaction_workspace_man_standing_7');
                  };
                   if (frame == 8) {
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_1');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_2');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_3');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_4');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_5');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_6');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_7');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_8');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_9');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_10');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_11');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_12');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_13');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_14');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_15');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_16');
                      MANIPULATED.classList.add('interaction_workspace_man_standing_8');
                  };
                   if (frame == 9) {
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_1');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_2');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_3');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_4');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_5');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_6');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_7');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_8');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_9');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_10');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_11');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_12');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_13');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_14');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_15');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_16');
                      MANIPULATED.classList.add('interaction_workspace_man_standing_9');
                  };
                   if (frame == 10) {
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_1');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_2');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_3');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_4');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_5');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_6');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_7');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_8');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_9');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_10');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_11');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_12');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_13');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_14');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_15');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_16');
                      MANIPULATED.classList.add('interaction_workspace_man_standing_10');
                  };
                   if (frame == 11) {
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_1');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_2');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_3');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_4');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_5');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_6');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_7');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_8');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_9');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_10');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_11');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_12');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_13');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_14');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_15');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_16');
                      MANIPULATED.classList.add('interaction_workspace_man_standing_11');
                  };
                   if (frame == 12) {
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_1');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_2');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_3');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_4');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_5');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_6');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_7');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_8');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_9');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_10');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_11');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_12');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_13');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_14');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_15');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_16');
                      MANIPULATED.classList.add('interaction_workspace_man_standing_12');
                  };
                   if (frame == 13) {
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_1');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_2');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_3');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_4');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_5');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_6');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_7');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_8');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_9');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_10');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_11');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_12');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_13');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_14');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_15');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_16');
                      MANIPULATED.classList.add('interaction_workspace_man_standing_13');
                  };
                   if (frame == 14) {
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_1');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_2');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_3');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_4');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_5');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_6');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_7');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_8');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_9');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_10');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_11');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_12');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_13');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_14');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_15');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_16');
                      MANIPULATED.classList.add('interaction_workspace_man_standing_14');
                  };
                   if (frame == 15) {
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_1');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_2');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_3');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_4');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_5');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_6');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_7');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_8');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_9');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_10');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_11');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_12');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_13');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_14');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_15');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_16');
                      MANIPULATED.classList.add('interaction_workspace_man_standing_15');
                  };
                   if (frame == 16) {
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_1');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_2');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_3');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_4');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_5');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_6');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_7');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_8');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_9');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_10');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_11');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_12');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_13');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_14');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_15');
                      MANIPULATED.classList.remove('interaction_workspace_man_standing_16');
                      MANIPULATED.classList.add('interaction_workspace_man_standing_16');
                  };
               };
               frame += 1;
              if (frame > MANIPULATED_Length) {
                  frame = 1;
              };
           }, 1000 / state.animation.framerate);
  }());
   // Logo 1
  (function() {
      let interval = 1;
      let MANIPULATED = document.getElementById('component_app_gui_logo_combo_layer_feature');
       setInterval(
          function() {
                if (MANIPULATED != null) {
                  MANIPULATED.innerHTML = '';
                  if (interval == 1) {
                      MANIPULATED.classList.remove('gui_logo_combo_frame_1');
                      MANIPULATED.classList.remove('gui_logo_combo_frame_2');
                      MANIPULATED.classList.remove('gui_logo_combo_frame_3');
                      MANIPULATED.classList.remove('gui_logo_combo_frame_4');
                      MANIPULATED.classList.add('gui_logo_combo_frame_1');
                  };
                  if (interval == 2) {
                      MANIPULATED.classList.remove('gui_logo_combo_frame_1');
                      MANIPULATED.classList.remove('gui_logo_combo_frame_2');
                      MANIPULATED.classList.remove('gui_logo_combo_frame_3');
                      MANIPULATED.classList.remove('gui_logo_combo_frame_4');
                      MANIPULATED.classList.add('gui_logo_combo_frame_2');
                  };
                  if (interval == 3) {
                      MANIPULATED.classList.remove('gui_logo_combo_frame_1');
                      MANIPULATED.classList.remove('gui_logo_combo_frame_2');
                      MANIPULATED.classList.remove('gui_logo_combo_frame_3');
                      MANIPULATED.classList.remove('gui_logo_combo_frame_4');
                      MANIPULATED.classList.add('gui_logo_combo_frame_3');
                  };
                  if (interval == 4) {
                      MANIPULATED.classList.remove('gui_logo_combo_frame_1');
                      MANIPULATED.classList.remove('gui_logo_combo_frame_2');
                      MANIPULATED.classList.remove('gui_logo_combo_frame_3');
                      MANIPULATED.classList.remove('gui_logo_combo_frame_4');
                      MANIPULATED.classList.add('gui_logo_combo_frame_4');
                      interval = 0;
                  };
                   interval += 1;
              }
           }, (1000 / state.animation.framerate) * 4);
   }());
   // Logo 2
  (function() {
      let interval = 1;
      let MANIPULATED = document.getElementById('component_app_gui_logo_combo_layer');
       setInterval(
          function() {
                if (MANIPULATED != null) {
                  MANIPULATED.innerHTML = '';
                  if (interval == 1) {
                      MANIPULATED.classList.remove('gui_logo_combo_frame_1');
                      MANIPULATED.classList.remove('gui_logo_combo_frame_2');
                      MANIPULATED.classList.remove('gui_logo_combo_frame_3');
                      MANIPULATED.classList.remove('gui_logo_combo_frame_4');
                      MANIPULATED.classList.add('gui_logo_combo_frame_1');
                  };
                  if (interval == 2) {
                      MANIPULATED.classList.remove('gui_logo_combo_frame_1');
                      MANIPULATED.classList.remove('gui_logo_combo_frame_2');
                      MANIPULATED.classList.remove('gui_logo_combo_frame_3');
                      MANIPULATED.classList.remove('gui_logo_combo_frame_4');
                      MANIPULATED.classList.add('gui_logo_combo_frame_2');
                  };
                  if (interval == 3) {
                      MANIPULATED.classList.remove('gui_logo_combo_frame_1');
                      MANIPULATED.classList.remove('gui_logo_combo_frame_2');
                      MANIPULATED.classList.remove('gui_logo_combo_frame_3');
                      MANIPULATED.classList.remove('gui_logo_combo_frame_4');
                      MANIPULATED.classList.add('gui_logo_combo_frame_3');
                  };
                  if (interval == 4) {
                      MANIPULATED.classList.remove('gui_logo_combo_frame_1');
                      MANIPULATED.classList.remove('gui_logo_combo_frame_2');
                      MANIPULATED.classList.remove('gui_logo_combo_frame_3');
                      MANIPULATED.classList.remove('gui_logo_combo_frame_4');
                      MANIPULATED.classList.add('gui_logo_combo_frame_4');
                      interval = 0;
                  };
                   interval += 1;
              }
           }, (1000 / state.animation.framerate) * 4);
   }());
   // Noise animation
  ( function() {
      let interval = 1;
       setInterval(
      function() {
                let MANIPULATED = document.getElementById('component_app_accent_noise');
                  if ( MANIPULATED != null) {
                  MANIPULATED.innerHTML = '';
                  if (interval == 1) {
                      MANIPULATED.classList.remove('accent_noise_1');
                      MANIPULATED.classList.remove('accent_noise_2');
                      MANIPULATED.classList.remove('accent_noise_3');
                      MANIPULATED.classList.remove('accent_noise_4');
                      MANIPULATED.classList.add('accent_noise_1');
                  };
                  if (interval == 2) {
                      MANIPULATED.classList.remove('accent_noise_1');
                      MANIPULATED.classList.remove('accent_noise_2');
                      MANIPULATED.classList.remove('accent_noise_3');
                      MANIPULATED.classList.remove('accent_noise_4');
                      MANIPULATED.classList.add('accent_noise_2');
                  };
                  if (interval == 3) {
                      MANIPULATED.classList.remove('accent_noise_1');
                      MANIPULATED.classList.remove('accent_noise_2');
                      MANIPULATED.classList.remove('accent_noise_3');
                      MANIPULATED.classList.remove('accent_noise_4');
                      MANIPULATED.classList.add('accent_noise_3');
                  };
                  if (interval == 4) {
                      MANIPULATED.classList.remove('accent_noise_1');
                      MANIPULATED.classList.remove('accent_noise_2');
                      MANIPULATED.classList.remove('accent_noise_3');
                      MANIPULATED.classList.remove('accent_noise_4');
                      MANIPULATED.classList.add('accent_noise_4');
                      interval = 0;
                  };
                   interval += 1;
           }
       }, 1000/state.framerate);
  }());
   // icon_handdrawn_iphone
  (function() {
      let interval = 1;
       setInterval(
          function() {
       let MANIPULATED = document.getElementById('icon_handdrawn_iphone');
               if (MANIPULATED != null) {
                  MANIPULATED.innerHTML = '';
                  if (interval == 1) {
                      MANIPULATED.classList.remove('icon_handdrawn_iphone_0_0_frame_1');
                      MANIPULATED.classList.remove('icon_handdrawn_iphone_0_0_frame_2');
                      MANIPULATED.classList.remove('icon_handdrawn_iphone_0_0_frame_3');
                      MANIPULATED.classList.remove('icon_handdrawn_iphone_0_0_frame_4');
                      MANIPULATED.classList.add('icon_handdrawn_iphone_0_0_frame_1');
                  };
                  if (interval == 2) {
                      MANIPULATED.classList.remove('icon_handdrawn_iphone_0_0_frame_1');
                      MANIPULATED.classList.remove('icon_handdrawn_iphone_0_0_frame_2');
                      MANIPULATED.classList.remove('icon_handdrawn_iphone_0_0_frame_3');
                      MANIPULATED.classList.remove('icon_handdrawn_iphone_0_0_frame_4');
                      MANIPULATED.classList.add('icon_handdrawn_iphone_0_0_frame_2');
                  };
                  if (interval == 3) {
                      MANIPULATED.classList.remove('icon_handdrawn_iphone_0_0_frame_1');
                      MANIPULATED.classList.remove('icon_handdrawn_iphone_0_0_frame_2');
                      MANIPULATED.classList.remove('icon_handdrawn_iphone_0_0_frame_3');
                      MANIPULATED.classList.remove('icon_handdrawn_iphone_0_0_frame_4');
                      MANIPULATED.classList.add('icon_handdrawn_iphone_0_0_frame_3');
                  };
                  if (interval == 4) {
                      MANIPULATED.classList.remove('icon_handdrawn_iphone_0_0_frame_1');
                      MANIPULATED.classList.remove('icon_handdrawn_iphone_0_0_frame_2');
                      MANIPULATED.classList.remove('icon_handdrawn_iphone_0_0_frame_3');
                      MANIPULATED.classList.remove('icon_handdrawn_iphone_0_0_frame_4');
                      MANIPULATED.classList.add('icon_handdrawn_iphone_0_0_frame_4');
                      interval = 0;
                  };
                   interval += 1;
              }
           }, 1000 / state.animation.framerate);
   }());
   // icon_handdrawn_vr
  (function() {
      let interval = 1;
       setInterval(
          function() {
               let MANIPULATED = document.getElementById('icon_handdrawn_vr');
               if (MANIPULATED != null) {
                  MANIPULATED.innerHTML = '';
                  if (interval == 1) {
                      MANIPULATED.classList.remove('icon_handdrawn_vr_0_0_frame_1');
                      MANIPULATED.classList.remove('icon_handdrawn_vr_0_0_frame_2');
                      MANIPULATED.classList.remove('icon_handdrawn_vr_0_0_frame_3');
                      MANIPULATED.classList.remove('icon_handdrawn_vr_0_0_frame_4');
                      MANIPULATED.classList.add('icon_handdrawn_vr_0_0_frame_1');
                  };
                  if (interval == 2) {
                      MANIPULATED.classList.remove('icon_handdrawn_vr_0_0_frame_1');
                      MANIPULATED.classList.remove('icon_handdrawn_vr_0_0_frame_2');
                      MANIPULATED.classList.remove('icon_handdrawn_vr_0_0_frame_3');
                      MANIPULATED.classList.remove('icon_handdrawn_vr_0_0_frame_4');
                      MANIPULATED.classList.add('icon_handdrawn_vr_0_0_frame_2');
                  };
                  if (interval == 3) {
                      MANIPULATED.classList.remove('icon_handdrawn_vr_0_0_frame_1');
                      MANIPULATED.classList.remove('icon_handdrawn_vr_0_0_frame_2');
                      MANIPULATED.classList.remove('icon_handdrawn_vr_0_0_frame_3');
                      MANIPULATED.classList.remove('icon_handdrawn_vr_0_0_frame_4');
                      MANIPULATED.classList.add('icon_handdrawn_vr_0_0_frame_3');
                  };
                  if (interval == 4) {
                      MANIPULATED.classList.remove('icon_handdrawn_vr_0_0_frame_1');
                      MANIPULATED.classList.remove('icon_handdrawn_vr_0_0_frame_2');
                      MANIPULATED.classList.remove('icon_handdrawn_vr_0_0_frame_3');
                      MANIPULATED.classList.remove('icon_handdrawn_vr_0_0_frame_4');
                      MANIPULATED.classList.add('icon_handdrawn_vr_0_0_frame_4');
                      interval = 0;
                  };
                   interval += 1;
              }
           }, 1000 / state.animation.framerate);
   }());
   // icon_handdrawn_desktop
  (function() {
      let interval = 1;
       setInterval(
          function() {
        let MANIPULATED = document.getElementById('icon_handdrawn_desktop');
              if (MANIPULATED != null) {
                  MANIPULATED.innerHTML = '';
                  if (interval == 1) {
                      MANIPULATED.classList.remove('icon_handdrawn_desktop_0_0_frame_1');
                      MANIPULATED.classList.remove('icon_handdrawn_desktop_0_0_frame_2');
                      MANIPULATED.classList.remove('icon_handdrawn_desktop_0_0_frame_3');
                      MANIPULATED.classList.remove('icon_handdrawn_desktop_0_0_frame_4');
                      MANIPULATED.classList.add('icon_handdrawn_desktop_0_0_frame_1');
                  };
                  if (interval == 2) {
                      MANIPULATED.classList.remove('icon_handdrawn_desktop_0_0_frame_1');
                      MANIPULATED.classList.remove('icon_handdrawn_desktop_0_0_frame_2');
                      MANIPULATED.classList.remove('icon_handdrawn_desktop_0_0_frame_3');
                      MANIPULATED.classList.remove('icon_handdrawn_desktop_0_0_frame_4');
                      MANIPULATED.classList.add('icon_handdrawn_desktop_0_0_frame_2');
                  };
                  if (interval == 3) {
                      MANIPULATED.classList.remove('icon_handdrawn_desktop_0_0_frame_1');
                      MANIPULATED.classList.remove('icon_handdrawn_desktop_0_0_frame_2');
                      MANIPULATED.classList.remove('icon_handdrawn_desktop_0_0_frame_3');
                      MANIPULATED.classList.remove('icon_handdrawn_desktop_0_0_frame_4');
                      MANIPULATED.classList.add('icon_handdrawn_desktop_0_0_frame_3');
                  };
                  if (interval == 4) {
                      MANIPULATED.classList.remove('icon_handdrawn_desktop_0_0_frame_1');
                      MANIPULATED.classList.remove('icon_handdrawn_desktop_0_0_frame_2');
                      MANIPULATED.classList.remove('icon_handdrawn_desktop_0_0_frame_3');
                      MANIPULATED.classList.remove('icon_handdrawn_desktop_0_0_frame_4');
                      MANIPULATED.classList.add('icon_handdrawn_desktop_0_0_frame_4');
                      interval = 0;
                  };
                   interval += 1;
              }
           }, 1000 / state.animation.framerate);
   }());
   // icon_handdrawn_head
  (function() {
      let interval = 1;
       setInterval(
          function() {
       let MANIPULATED = document.getElementById('icon_handdrawn_head');
               if (MANIPULATED != null) {
                  MANIPULATED.innerHTML = '';
                  if (interval == 1) {
                      MANIPULATED.classList.remove('icon_handdrawn_head_0_0_frame_1');
                      MANIPULATED.classList.remove('icon_handdrawn_head_0_0_frame_2');
                      MANIPULATED.classList.remove('icon_handdrawn_head_0_0_frame_3');
                      MANIPULATED.classList.remove('icon_handdrawn_head_0_0_frame_4');
                      MANIPULATED.classList.add('icon_handdrawn_head_0_0_frame_1');
                  };
                  if (interval == 2) {
                      MANIPULATED.classList.remove('icon_handdrawn_head_0_0_frame_1');
                      MANIPULATED.classList.remove('icon_handdrawn_head_0_0_frame_2');
                      MANIPULATED.classList.remove('icon_handdrawn_head_0_0_frame_3');
                      MANIPULATED.classList.remove('icon_handdrawn_head_0_0_frame_4');
                      MANIPULATED.classList.add('icon_handdrawn_head_0_0_frame_2');
                  };
                  if (interval == 3) {
                      MANIPULATED.classList.remove('icon_handdrawn_head_0_0_frame_1');
                      MANIPULATED.classList.remove('icon_handdrawn_head_0_0_frame_2');
                      MANIPULATED.classList.remove('icon_handdrawn_head_0_0_frame_3');
                      MANIPULATED.classList.remove('icon_handdrawn_head_0_0_frame_4');
                      MANIPULATED.classList.add('icon_handdrawn_head_0_0_frame_3');
                  };
                  if (interval == 4) {
                      MANIPULATED.classList.remove('icon_handdrawn_head_0_0_frame_1');
                      MANIPULATED.classList.remove('icon_handdrawn_head_0_0_frame_2');
                      MANIPULATED.classList.remove('icon_handdrawn_head_0_0_frame_3');
                      MANIPULATED.classList.remove('icon_handdrawn_head_0_0_frame_4');
                      MANIPULATED.classList.add('icon_handdrawn_head_0_0_frame_4');
                      interval = 0;
                  };
                   interval += 1;
              }
           }, 1000 / state.animation.framerate);
   }());
   */

  // icon_handdrawn_head
  (function () {
    let interval = 1;

    setInterval(function () {

      let MANIPULATED = document.getElementById('icon_dj_animation');

      if (MANIPULATED != null) {
        MANIPULATED.innerHTML = '';
        if (interval == 1) {
          MANIPULATED.classList.remove('icon_dj_animation_1');
          MANIPULATED.classList.remove('icon_dj_animation_2');
          MANIPULATED.classList.remove('icon_dj_animation_3');
          MANIPULATED.classList.remove('icon_dj_animation_4');
          MANIPULATED.classList.add('icon_dj_animation_1');
        };
        if (interval == 2) {
          MANIPULATED.classList.remove('icon_dj_animation_1');
          MANIPULATED.classList.remove('icon_dj_animation_2');
          MANIPULATED.classList.remove('icon_dj_animation_3');
          MANIPULATED.classList.remove('icon_dj_animation_4');
          MANIPULATED.classList.add('icon_dj_animation_2');
        };
        if (interval == 3) {
          MANIPULATED.classList.remove('icon_dj_animation_1');
          MANIPULATED.classList.remove('icon_dj_animation_2');
          MANIPULATED.classList.remove('icon_dj_animation_3');
          MANIPULATED.classList.remove('icon_dj_animation_4');
          MANIPULATED.classList.add('icon_dj_animation_3');
        };
        if (interval == 4) {
          MANIPULATED.classList.remove('icon_dj_animation_1');
          MANIPULATED.classList.remove('icon_dj_animation_2');
          MANIPULATED.classList.remove('icon_dj_animation_3');
          MANIPULATED.classList.remove('icon_dj_animation_4');
          MANIPULATED.classList.add('icon_dj_animation_4');
          interval = 0;
        };

        interval += 1;
      }
    }, 1000 / state.animation.framerate);
  })();

  /* 1000 ms */
  // Bounce
  // Enemy
  (function () {
    let frame = 1;
    setInterval(function () {

      (function () {

        if (state.ui.interaction.bounce.yaxis == 0) {
          state.ui.interaction.bounce.yaxisascending = true;
        }

        if (state.ui.interaction.bounce.yaxis == state.ux.dimensions.current - 1) {
          state.ui.interaction.bounce.yaxisascending = false;
        }

        if (state.ui.interaction.bounce.xaxis == 0) {
          state.ui.interaction.bounce.xaxisascending = true;
        }

        if (state.ui.interaction.bounce.xaxis == state.ux.dimensions.current - 1) {
          state.ui.interaction.bounce.xaxisascending = false;
        }

        if (state.ui.interaction.bounce.yaxisascending == false) {
          state.ui.interaction.bounce.yaxis -= 1;
        }

        if (state.ui.interaction.bounce.yaxisascending == true) {
          state.ui.interaction.bounce.yaxis += 1;
        }

        if (state.ui.interaction.bounce.xaxisascending == false) {
          state.ui.interaction.bounce.xaxis -= 1;
        }

        if (state.ui.interaction.bounce.xaxisascending == true) {
          state.ui.interaction.bounce.xaxis += 1;
        }
      })();

      (function () {

        if (state.ui.interaction.enemy.xaxis == 0) {
          state.ui.interaction.enemy.xaxisascending = true;
        }

        if (state.ui.interaction.enemy.xaxis == state.ux.dimensions.current - 1) {
          state.ui.interaction.enemy.xaxisascending = false;
        }

        if (state.ui.interaction.enemy.xaxisascending == false) {
          state.ui.interaction.enemy.xaxis -= 1;
        }

        if (state.ui.interaction.enemy.xaxisascending == true) {
          state.ui.interaction.enemy.xaxis += 1;
        }

        if (state.ui.interaction.player_1.xaxis == state.ui.interaction.enemy.xaxis && state.ui.interaction.player_1.yaxis == state.ui.interaction.enemy.yaxis) {
          // alert('Game over');
        };
      })();
    }, 1000);
  })();
};

// resize
window.onresize = () => {

  console.log('onresize');

  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
    document.getElementById('component_app').classList.remove('height_100vh');
    document.getElementById('component_app').classList.remove('overflow_y');
  }

  if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
    document.getElementById('component_app').classList.add('height_100vh');
    document.getElementById('component_app').classList.add('overflow_y');
  }

  state.ux = {
    browser: {
      height: window.outerHeight,
      width: window.outerWidth
    },

    window: {
      height: window.innerHeight,
      width: window.innerWidth
    },

    screen: {
      height: window.screen.height,
      width: window.screen.width,
      orientation: window.screen.orientation
    },

    dimensions: {
      current: 8,
      height: window.innerHeight,
      width: window.innerWidth,
      height8: window.innerHeight / 8,
      width8: window.innerWidth / 8,
      height16: window.innerHeight / 16,
      width16: window.innerWidth / 16,
      height32: window.innerHeight / 32,
      width32: window.innerWidth / 32,
      height64: window.innerHeight / 64,
      width64: window.innerWidth / 64,
      height128: window.innerHeight / 128,
      width128: window.innerWidth / 128,
      height256: window.innerHeight / 256,
      width256: window.innerWidth / 256
    }
  };

  values_update();
};

// Exports
exports.default = {
  Handle_get_state_from_events,
  Handle_return_state,
  Handle_check_route,
  values_update
};
},{"./partials/state":131,"./partials/functions":132,"./partials/events":133,"./partials/defaults":134,"./partials/components":135,"./partials/values":136,"./partials/ui":137}],0:[function(require,module,exports) {
var global = (1, eval)('this');
var OldModule = module.bundle.Module;
function Module() {
  OldModule.call(this);
  this.hot = {
    accept: function (fn) {
      this._acceptCallback = fn || function () {};
    },
    dispose: function (fn) {
      this._disposeCallback = fn;
    }
  };
}

module.bundle.Module = Module;

if (!module.bundle.parent && typeof WebSocket !== 'undefined') {
  var ws = new WebSocket('ws://' + window.location.hostname + ':53316/');
  ws.onmessage = function(event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      data.assets.forEach(function (asset) {
        hmrApply(global.require, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.require, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        window.location.reload();
      }
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + 'data.error.stack');
    }
  };
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || (Array.isArray(dep) && dep[dep.length - 1] === id)) {
        parents.push(+k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  if (cached && cached.hot._disposeCallback) {
    cached.hot._disposeCallback();
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallback) {
    cached.hot._acceptCallback();
    return true;
  }

  return getParents(global.require, id).some(function (id) {
    return hmrAccept(global.require, id)
  });
}
},{}]},{},[0,3])