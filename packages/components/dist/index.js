import { jsx, jsxs } from 'react/jsx-runtime';
import 'react';

/**
 * Primary UI component for user interaction
 */ const Button = ({ primary =false , size ="medium" , backgroundColor , label , ...props })=>{
    const mode = primary ? "storybook-button--primary" : "storybook-button--secondary";
    return /*#__PURE__*/ jsx("button", {
        type: "button",
        className: [
            "storybook-button",
            `storybook-button--${size}`,
            mode
        ].join(" "),
        style: {
            backgroundColor
        },
        ...props,
        children: label
    });
};

const Header = ({ onLogin , onLogout , onCreateAccount  })=>/*#__PURE__*/ jsx("header", {
        children: /*#__PURE__*/ jsxs("div", {
            className: "wrapper",
            children: [
                /*#__PURE__*/ jsxs("div", {
                    children: [
                        /*#__PURE__*/ jsx("svg", {
                            width: "32",
                            height: "32",
                            viewBox: "0 0 32 32",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: /*#__PURE__*/ jsxs("g", {
                                fill: "none",
                                fillRule: "evenodd",
                                children: [
                                    /*#__PURE__*/ jsx("path", {
                                        d: "M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z",
                                        fill: "#FFF"
                                    }),
                                    /*#__PURE__*/ jsx("path", {
                                        d: "M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z",
                                        fill: "#555AB9"
                                    }),
                                    /*#__PURE__*/ jsx("path", {
                                        d: "M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z",
                                        fill: "#91BAF8"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx("h1", {
                            children: "Acme"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx("div", {
                    children: /*#__PURE__*/ jsx("span", {
                        className: "welcome",
                        children: "Welcome!"
                    })
                })
            ]
        })
    });

export { Button, Header };
