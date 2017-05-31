webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Everyone__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Everyone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_Everyone__);




__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  routes: [{
    path: '/',
    name: 'Everyone',
    component: __WEBPACK_IMPORTED_MODULE_2__components_Everyone___default.a
  }]
}));

/***/ }),
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(45)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(38),
  /* template */
  __webpack_require__(53),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(48)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(39),
  /* template */
  __webpack_require__(57),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(47)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(40),
  /* template */
  __webpack_require__(56),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(46)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(41),
  /* template */
  __webpack_require__(54),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_common__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_common_components_Navigation_Identity__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_common_components_Navigation_Identity___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_common_components_Navigation_Identity__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_common_components_Footer_Standard__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_common_components_Footer_Standard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_common_components_Footer_Standard__);







global.$ = window.jQuery = window.$ = __webpack_require__(13);
global.Tether = __webpack_require__(14);
global.Bootstrap = __webpack_require__(12);

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false;

var currentChannel = __WEBPACK_IMPORTED_MODULE_3_common___default.a.DataStore.channels.park;

new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  el: '#navigation',
  data: function data() {
    return {
      channel: currentChannel
    };
  },

  template: '<NavigationWithIdentity/>',
  components: { NavigationWithIdentity: __WEBPACK_IMPORTED_MODULE_4_common_components_Navigation_Identity___default.a }
});

__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].component('modal-auth', __webpack_require__(16));
new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App___default.a }
});

new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  el: '#footer',
  template: '<FooterStandard/>',
  components: { FooterStandard: __WEBPACK_IMPORTED_MODULE_5_common_components_Footer_Standard___default.a }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(3)))

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__index__);




var social = [{
  type: 'facebook',
  image: 'https://graph.facebook.com/watchout.tw/picture?type=large',
  message: '追蹤我們的最新動態！',
  link: 'https://facebook.com/watchout.tw/'
}, {
  type: 'LINE',
  image: 'https://watchout.tw/asset/social/LINE/goodfriend.png',
  message: '阿草好朋友',
  link: 'https://store.line.me/stickershop/product/1024870/zh-Hant'
}, {
  type: 'LINE',
  image: 'https://watchout.tw/asset/social/LINE/goodcitizen.png',
  message: '阿草督督好',
  link: 'https://store.line.me/stickershop/product/1224270/zh-Hant'
}];
var cluster = [{
  title: '沃草產品',
  links: [{
    title: '國會無雙',
    link: 'https://musou.tw/'
  }, {
    title: '給問擂台',
    link: 'https://ask.watchout.tw/'
  }, {
    title: '公民學院',
    link: 'https://citizenedu.tw/'
  }]
}, {
  title: '關於沃草',
  links: [{
    title: '2014 透明報告',
    link: __WEBPACK_IMPORTED_MODULE_0__index___default.a.DataStore.links.home + 'transparency/2014'
  }, {
    title: '歷年影響力報告',
    link: __WEBPACK_IMPORTED_MODULE_0__index___default.a.DataStore.links.home + 'impact'
  }, {
    title: '聯絡我們',
    link: __WEBPACK_IMPORTED_MODULE_0__index___default.a.DataStore.links.home + 'contact'
  }, {
    title: '授權條款',
    link: __WEBPACK_IMPORTED_MODULE_0__index___default.a.DataStore.links.home + 'license'
  }]
}];
var trees = [{
  type: 'tree',
  name: 'deliberate',
  filetype: 'png'
}, {
  type: 'tree',
  name: 'discover',
  filetype: 'png'
}, {
  type: 'tree',
  name: 'investigate',
  filetype: 'png'
}, {
  type: 'farmer',
  name: 'tangerine',
  filetype: 'png'
}, {
  type: 'farmer',
  name: 'green',
  filetype: 'png'
}, {
  type: 'farmer',
  name: 'brown',
  filetype: 'png'
}, {
  type: 'tree',
  name: 'sprout',
  filetype: 'png'
}];

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'footer-standard',
  data: function data() {
    return {
      DataStore: __WEBPACK_IMPORTED_MODULE_0__index___default.a.DataStore,
      social: social,
      cluster: cluster,
      trees: trees
    };
  },

  methods: {
    patchCount: function patchCount() {
      return 4 + Math.round(Math.random() * 2);
    },
    patchSize: function patchSize() {
      return Math.random() > 0.5 ? 'big' : 'small';
    },
    patchStyles: function patchStyles(i) {
      return {
        transform: 'translateX(' + (Math.round(Math.random()) * 2 - 1) * Math.round(Math.random() * 16) + 'rem)'
      };
    },
    getTreeAssetURL: function getTreeAssetURL(tree) {
      return this.DataStore.links.home + 'asset/footer/' + tree.type + '/' + tree.name + '.' + tree.filetype;
    },
    getTreeClasses: function getTreeClasses(tree) {
      return [tree.type, tree.type + '-' + tree.name];
    }
  },
  computed: {
    cptSocialGroups: function cptSocialGroups() {
      var arr = this.social;
      var result = [];
      var types = {};
      for (var i = 0; i < arr.length; i++) {
        var cur = arr[i];
        if (!(cur.type in types)) {
          types[cur.type] = { type: cur.type, items: [] };
          result.push(types[cur.type]);
        }
        types[cur.type].items.push(cur);
      }
      return result;
    }
  }
});

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_common__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_common__);




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'modal-auth',
  data: function data() {
    return {
      DataStore: __WEBPACK_IMPORTED_MODULE_0_common___default.a.DataStore
    };
  }
});

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(global) {

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'navigation-with-identity',
  mounted: function mounted() {
    console.log('#' + this.channel.id);
    console.log('Navigation with identity initiated.');
  },
  data: function data() {
    return {
      channel: this.$parent.$data.channel
    };
  },

  methods: {
    promptAuth: function promptAuth() {
      var $ = global.$;
      $('#modal-auth').modal('show');
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(3)))

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_common__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_common__);



__WEBPACK_IMPORTED_MODULE_0_common___default.a.hello();

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'app',
  data: function data() {
    return {
      DataStore: __WEBPACK_IMPORTED_MODULE_0_common___default.a.DataStore
    };
  }
});

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);




var baseURL = 'https://apidev.watchout.tw';
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      everyone: []
    };
  },
  mounted: function mounted() {
    var _this = this;

    __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(baseURL + '/citizen/wesley_chia_wei_lin').then(function (response) {
      _this.everyone = response.data;
    }, function (response) {
      _this.everyone.push('error');
    });
  }
});

/***/ }),
/* 43 */,
/* 44 */,
/* 45 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 46 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 47 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 48 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(42),
  /* template */
  __webpack_require__(55),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('footer', {
    staticClass: "standard"
  }, [_c('div', {
    staticClass: "land"
  }, [_c('div', {
    staticClass: "green"
  }), _vm._v(" "), _c('div', {
    staticClass: "soil"
  }, [_c('div', {
    staticClass: "light"
  }), _vm._v(" "), _c('div', {
    staticClass: "dark"
  }), _vm._v(" "), _c('div', {
    staticClass: "deep"
  }, [_c('div', {
    staticClass: "social"
  }, _vm._l((_vm.cptSocialGroups), function(group) {
    return _c('div', {
      staticClass: "group d-flex flex-row justify-content-around",
      attrs: {
        "type": group.type
      }
    }, _vm._l((group.items), function(item) {
      return _c('a', {
        staticClass: "link a-block",
        attrs: {
          "href": item.link,
          "target": "social"
        }
      }, [_c('div', {
        staticClass: "image"
      }, [_c('img', {
        attrs: {
          "src": item.image
        }
      }), _vm._v(" "), _c('div', {
        staticClass: "type"
      })]), _vm._v(" "), _c('div', {
        staticClass: "message"
      }, [_vm._v(_vm._s(item.message))])])
    }))
  })), _vm._v(" "), _c('div', {
    staticClass: "cluster d-flex flex-row justify-content-center"
  }, _vm._l((_vm.cluster), function(group) {
    return _c('div', {
      staticClass: "group"
    }, [_c('h5', [_vm._v(_vm._s(group.title))]), _vm._v(" "), _vm._l((group.links), function(item) {
      return _c('div', {
        staticClass: "item"
      }, [_c('a', {
        staticClass: "a-text",
        attrs: {
          "href": item.link
        }
      }, [_vm._v(_vm._s(item.title))])])
    })], 2)
  }))])]), _vm._v(" "), _c('div', {
    staticClass: "elements"
  }, [_c('div', {
    staticClass: "grass d-flex align-items-end justify-content-between"
  }, _vm._l((_vm.patchCount()), function(i) {
    return _c('div', {
      staticClass: "patch",
      class: _vm.patchSize(),
      style: (_vm.patchStyles(i))
    })
  })), _vm._v(" "), _vm._l((_vm.trees), function(tree) {
    return _c('img', {
      class: _vm.getTreeClasses(tree),
      attrs: {
        "src": _vm.getTreeAssetURL(tree)
      }
    })
  })], 2)])])
},staticRenderFns: []}

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('router-view'), _vm._v(" "), _c('modal-auth')], 1)
},staticRenderFns: []}

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "everyone"
  }, [_c('h1', [_vm._v("線上草民")]), _vm._v("\n  " + _vm._s(_vm.everyone) + "\n")])
},staticRenderFns: []}

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('nav', {
    staticClass: "navbar sticky-top navbar-light",
    class: _vm.channel.classes.bg
  }, [_c('a', {
    staticClass: "navbar-brand",
    attrs: {
      "href": _vm.channel.links.home
    }
  }, [_c('img', {
    staticClass: "logo-type",
    style: (_vm.channel.asset.logoWithType.regular.style),
    attrs: {
      "src": _vm.channel.asset.logoWithType.regular.src
    }
  })]), _vm._v(" "), _c('a', {
    staticClass: "navbar-button",
    attrs: {
      "id": "navbar-identity"
    },
    on: {
      "click": _vm.promptAuth
    }
  }, [_vm._v("Login")])])
},staticRenderFns: []}

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "modal",
    attrs: {
      "id": "modal-auth"
    }
  }, [_c('div', {
    staticClass: "modal-dialog"
  }, [_c('div', {
    staticClass: "accordion",
    attrs: {
      "id": "modal-auth-accordion"
    }
  }, [_c('div', {
    staticClass: "card"
  }, [_c('a', {
    staticClass: "card-head",
    attrs: {
      "data-toggle": "collapse",
      "href": "#form-join",
      "data-parent": "#modal-auth-accordion"
    }
  }, [_c('h4', [_vm._v("成為草民")])]), _vm._v(" "), _c('div', {
    staticClass: "card-body collapse show",
    attrs: {
      "id": "form-join"
    }
  }, [_c('div', {
    staticClass: "padding"
  }, [_c('div', {
    staticClass: "field d-flex justify-content-between align-items-end"
  }, [_c('input', {
    attrs: {
      "type": "text",
      "name": "id",
      "placeholder": "草民代號"
    }
  }), _c('button', {
    staticClass: "small"
  }, [_vm._v("隨機")])]), _vm._v(" "), _c('div', {
    staticClass: "field"
  }, [_c('input', {
    staticClass: "full-width",
    attrs: {
      "type": "email",
      "name": "email",
      "placeholder": "Email"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "field"
  }, [_c('input', {
    staticClass: "full-width",
    attrs: {
      "type": "password",
      "name": "password",
      "placeholder": "密碼"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "field d-flex justify-content-between align-items-center"
  }, [_c('button', [_vm._v("註冊")]), _c('label', {
    staticClass: "form-check-label"
  }, [_c('input', {
    attrs: {
      "type": "checkbox"
    }
  }), _c('span', [_vm._v("我同意使用條款")])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "card dark"
  }, [_c('a', {
    staticClass: "card-head",
    attrs: {
      "data-toggle": "collapse",
      "href": "#form-login",
      "data-parent": "#modal-auth-accordion"
    }
  }, [_c('label', {
    staticClass: "text-color-park"
  }, [_vm._v("已經有帳號了？")]), _vm._v(" "), _c('h4', [_vm._v("草民登入")])]), _vm._v(" "), _c('div', {
    staticClass: "card-body collapse",
    attrs: {
      "id": "form-login"
    }
  }, [_c('div', {
    staticClass: "padding"
  }, [_c('div', {
    staticClass: "field"
  }, [_c('input', {
    staticClass: "full-width",
    attrs: {
      "type": "text",
      "name": "id-or-email",
      "placeholder": "草民代號或Email"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "field"
  }, [_c('input', {
    staticClass: "full-width",
    attrs: {
      "type": "password",
      "name": "password",
      "placeholder": "密碼"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "field"
  }, [_c('button', [_vm._v("登入")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "card dark"
  }, [_c('div', {
    staticClass: "card-body"
  }, [_c('div', {
    staticClass: "padding"
  }, [_c('label', {
    staticClass: "text-color-park"
  }, [_vm._v("你在找Facebook登入嗎？")])])])])])])])
}]}

/***/ })
],[37]);
//# sourceMappingURL=app.3e49cfdd894000d9a7d1.js.map