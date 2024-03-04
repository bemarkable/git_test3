exports.id = 233;
exports.ids = [233];
exports.modules = {

/***/ 89679:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 43872));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 33987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50954, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 79536, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 20094, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 74147, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 61272, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6176, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 43610, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 19868, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 48547, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 93429, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 20807));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 24937));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 31670));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 49882));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 85938))

/***/ }),

/***/ 37957:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 31232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 52987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 56926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 44282, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 16505, 23))

/***/ }),

/***/ 85938:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ThemeRegistry)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/styles/index.js
var styles = __webpack_require__(83476);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/CssBaseline/index.js
var CssBaseline = __webpack_require__(98331);
// EXTERNAL MODULE: ./node_modules/@emotion/cache/dist/emotion-cache.esm.js + 7 modules
var emotion_cache_esm = __webpack_require__(68941);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(57114);
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-element-6bdfffb2.esm.js + 1 modules
var emotion_element_6bdfffb2_esm = __webpack_require__(7904);
;// CONCATENATED MODULE: ./src/components/ThemeRegistry/EmotionCache.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 




// Adapted from https://github.com/garronej/tss-react/blob/main/src/next/appDir.tsx
function NextAppDirEmotionCacheProvider(props) {
    const { options, CacheProvider = emotion_element_6bdfffb2_esm.C, children } = props;
    const [registry] = react_.useState(()=>{
        const cache = (0,emotion_cache_esm["default"])(options);
        cache.compat = true;
        const prevInsert = cache.insert;
        let inserted = [];
        cache.insert = (...args)=>{
            const [selector, serialized] = args;
            if (cache.inserted[serialized.name] === undefined) {
                inserted.push({
                    name: serialized.name,
                    isGlobal: !selector
                });
            }
            return prevInsert(...args);
        };
        const flush = ()=>{
            const prevInserted = inserted;
            inserted = [];
            return prevInserted;
        };
        return {
            cache,
            flush
        };
    });
    (0,navigation.useServerInsertedHTML)(()=>{
        const inserted = registry.flush();
        if (inserted.length === 0) {
            return null;
        }
        let styles = "";
        let dataEmotionAttribute = registry.cache.key;
        const globals = [];
        inserted.forEach(({ name, isGlobal })=>{
            const style = registry.cache.inserted[name];
            if (typeof style !== "boolean") {
                if (isGlobal) {
                    globals.push({
                        name,
                        style
                    });
                } else {
                    styles += style;
                    dataEmotionAttribute += ` ${name}`;
                }
            }
        });
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Fragment, {
            children: [
                globals.map(({ name, style })=>/*#__PURE__*/ jsx_runtime_.jsx("style", {
                        "data-emotion": `${registry.cache.key}-global ${name}`,
                        // eslint-disable-next-line react/no-danger
                        dangerouslySetInnerHTML: {
                            __html: style
                        }
                    }, name)),
                styles && /*#__PURE__*/ jsx_runtime_.jsx("style", {
                    "data-emotion": dataEmotionAttribute,
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML: {
                        __html: styles
                    }
                })
            ]
        });
    });
    return /*#__PURE__*/ jsx_runtime_.jsx(CacheProvider, {
        value: registry.cache,
        children: children
    });
}

// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src/components/ThemeRegistry/theme.ts","import":"Roboto","arguments":[{"weight":["300","400","500","700"],"subsets":["latin"],"display":"swap"}],"variableName":"roboto"}
var theme_ts_import_Roboto_arguments_weight_300_400_500_700_subsets_latin_display_swap_variableName_roboto_ = __webpack_require__(35701);
var theme_ts_import_Roboto_arguments_weight_300_400_500_700_subsets_latin_display_swap_variableName_roboto_default = /*#__PURE__*/__webpack_require__.n(theme_ts_import_Roboto_arguments_weight_300_400_500_700_subsets_latin_display_swap_variableName_roboto_);
;// CONCATENATED MODULE: ./src/components/ThemeRegistry/theme.ts


const theme = (0,styles.createTheme)({
    palette: {
        mode: "light"
    },
    typography: {
        fontFamily: (theme_ts_import_Roboto_arguments_weight_300_400_500_700_subsets_latin_display_swap_variableName_roboto_default()).style.fontFamily
    },
    components: {
        MuiAlert: {
            styleOverrides: {
                root: ({ ownerState })=>({
                        ...ownerState.severity === "info" && {
                            backgroundColor: "#60a5fa"
                        }
                    })
            }
        }
    }
});
/* harmony default export */ const ThemeRegistry_theme = (theme);

;// CONCATENATED MODULE: ./src/components/ThemeRegistry/ThemeRegistry.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 





function ThemeRegistry({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(NextAppDirEmotionCacheProvider, {
        options: {
            key: "mui"
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles.ThemeProvider, {
            theme: ThemeRegistry_theme,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(CssBaseline/* default */.Z, {}),
                children
            ]
        })
    });
}


/***/ }),

/***/ 64127:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(62947);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(25124);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/AppBar/index.js
var AppBar = __webpack_require__(40881);
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Box/index.js
var Box = __webpack_require__(58811);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Drawer/index.js
var Drawer = __webpack_require__(84945);
var Drawer_default = /*#__PURE__*/__webpack_require__.n(Drawer);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Toolbar/index.js
var Toolbar = __webpack_require__(87117);
var Toolbar_default = /*#__PURE__*/__webpack_require__.n(Toolbar);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Typography/index.js
var Typography = __webpack_require__(48476);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Divider/index.js
var Divider = __webpack_require__(47351);
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/List/index.js
var List = __webpack_require__(82834);
var List_default = /*#__PURE__*/__webpack_require__.n(List);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/ListItem/index.js
var ListItem = __webpack_require__(17470);
var ListItem_default = /*#__PURE__*/__webpack_require__.n(ListItem);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/ListItemButton/index.js
var ListItemButton = __webpack_require__(52049);
var ListItemButton_default = /*#__PURE__*/__webpack_require__.n(ListItemButton);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/ListItemIcon/index.js
var ListItemIcon = __webpack_require__(19314);
var ListItemIcon_default = /*#__PURE__*/__webpack_require__.n(ListItemIcon);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/ListItemText/index.js
var ListItemText = __webpack_require__(85974);
var ListItemText_default = /*#__PURE__*/__webpack_require__.n(ListItemText);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Dashboard.js
var Dashboard = __webpack_require__(85989);
var Dashboard_default = /*#__PURE__*/__webpack_require__.n(Dashboard);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Home.js
var Home = __webpack_require__(7775);
var Home_default = /*#__PURE__*/__webpack_require__.n(Home);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Star.js
var Star = __webpack_require__(15054);
var Star_default = /*#__PURE__*/__webpack_require__.n(Star);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Checklist.js
var Checklist = __webpack_require__(70830);
var Checklist_default = /*#__PURE__*/__webpack_require__.n(Checklist);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(61363);
;// CONCATENATED MODULE: ./src/components/ThemeRegistry/ThemeRegistry.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/inome/works/999_study/next/sample01/git_test3/src/components/ThemeRegistry/ThemeRegistry.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const ThemeRegistry = (__default__);
;// CONCATENATED MODULE: ./src/app/layout.tsx



















const metadata = {
    title: "Next.js App Router + Material UI v5",
    description: "Next.js App Router + Material UI v5"
};
const DRAWER_WIDTH = 240;
const LINKS = [
    {
        text: "Page1",
        href: "/",
        icon: (Home_default())
    },
    {
        text: "Page2",
        href: "/starred",
        icon: (Star_default())
    },
    {
        text: "Page3",
        href: "/tasks",
        icon: (Checklist_default())
    }
];
const PLACEHOLDER_LINKS = (/* unused pure expression or super */ null && ([]));
// { text: 'Settings', icon: SettingsIcon },
// { text: 'Support', icon: SupportIcon },
// { text: 'Logout', icon: LogoutIcon },
//];
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ThemeRegistry, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((AppBar_default()), {
                        position: "fixed",
                        sx: {
                            zIndex: 2000
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Toolbar_default()), {
                            sx: {
                                backgroundColor: "background.paper"
                            },
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((Dashboard_default()), {
                                    sx: {
                                        color: "#444",
                                        mr: 2,
                                        transform: "translateY(-2px)"
                                    }
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    variant: "h6",
                                    noWrap: true,
                                    component: "div",
                                    color: "black",
                                    children: "Next.js App"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Drawer_default()), {
                        sx: {
                            width: DRAWER_WIDTH,
                            flexShrink: 0,
                            "& .MuiDrawer-paper": {
                                width: DRAWER_WIDTH,
                                boxSizing: "border-box",
                                top: [
                                    "48px",
                                    "56px",
                                    "64px"
                                ],
                                height: "auto",
                                bottom: 0
                            }
                        },
                        variant: "permanent",
                        anchor: "left",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {}),
                            /*#__PURE__*/ jsx_runtime_.jsx((List_default()), {
                                children: LINKS.map(({ text, href, icon: Icon })=>/*#__PURE__*/ jsx_runtime_.jsx((ListItem_default()), {
                                        disablePadding: true,
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((ListItemButton_default()), {
                                            component: (link_default()),
                                            href: href,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((ListItemIcon_default()), {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Icon, {})
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                                    primary: text
                                                })
                                            ]
                                        })
                                    }, href))
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {
                                sx: {
                                    mt: "auto"
                                }
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                        component: "main",
                        sx: {
                            flexGrow: 1,
                            bgcolor: "background.default",
                            ml: `${DRAWER_WIDTH}px`,
                            mt: [
                                "48px",
                                "56px",
                                "64px"
                            ],
                            p: 3
                        },
                        children: children
                    })
                ]
            })
        })
    });
}


/***/ }),

/***/ 73881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80085);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"16x16"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ })

};
;