import * as React from 'react';
import React__default, { HTMLAttributes, ImgHTMLAttributes, InputHTMLAttributes, ReactElement } from 'react';
import * as _stitches_react_types_css from '@stitches/react/types/css';
import * as _stitches_react_types_styled_component from '@stitches/react/types/styled-component';
import * as _stitches_react_types_stitches from '@stitches/react/types/stitches';
import * as _stitches_react_types_css_util from '@stitches/react/types/css-util';
import * as _stitches_react_types_util from '@stitches/react/types/util';
import * as _stitches_react_types_config from '@stitches/react/types/config';
import * as Stitches from '@stitches/react';
import { PropertyValue } from '@stitches/react';
import SlickSlider, { Settings } from 'react-slick';
import * as CheckboxBase from '@radix-ui/react-checkbox';
import * as RadioGroupBase from '@radix-ui/react-radio-group';
import * as Tabs from '@radix-ui/react-tabs';
import * as _radix_ui_react_switch from '@radix-ui/react-switch';
import { SwitchProps } from '@radix-ui/react-switch';
import { TextareaAutosizeProps } from 'react-textarea-autosize';
import { VisuallyHiddenProps } from '@radix-ui/react-visually-hidden';

declare type VariantProps<T> = Stitches.VariantProps<T>;
declare type CSS = Stitches.CSS<typeof config>;
declare type ComponentProps<T> = Stitches.ComponentProps<T>;
declare const config: {
    prefix: "";
    media: {
        sm: "(min-width: 576px)";
        md: "(min-width: 768px)";
        lg: "(min-width: 992px)";
        xl: "(min-width: 1200px)";
        '2xl': "(min-width: 1400px)";
    };
    theme: {
        colors: {
            white: string;
            black: string;
            'pink-500': string;
            'pink-600': string;
            'pink-700': string;
            'grey-400': string;
            'grey-600': string;
            'grey-700': string;
            'grey-800': string;
            'grey-900': string;
            'red-500': string;
            'red-900': string;
            'teal-500': string;
            'yellow-500': string;
            'yellow-900': string;
            'green-500': string;
            'green-900': string;
        };
        transitions: {
            fast: string;
        };
        fonts: {
            system: string;
        };
        fontSizes: {
            '3xs': string;
            '2xs': string;
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
            '2xl': string;
            '3xl': string;
            '4xl': string;
        };
        fontWeights: {
            thin: number;
            normal: number;
            medium: number;
            bold: number;
            extrabold: number;
        };
        radii: {
            full: string;
            half: string;
            sm: string;
            md: string;
        };
        sizes: {
            full: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
            '2xl': string;
        };
        space: {
            0: string;
            1: string;
            2: string;
            3: string;
            4: string;
            5: string;
            6: string;
            7: string;
            8: string;
            9: string;
            10: string;
            11: string;
            12: string;
            13: string;
            14: string;
            15: string;
            16: string;
            17: string;
            18: string;
            19: string;
            20: string;
        };
        zIndices: {
            hide: number;
            auto: string;
            base: number;
            docked: number;
            dropdown: number;
            sticky: number;
            banner: number;
            overlay: number;
            modal: number;
            popover: number;
            skipLink: number;
            toast: number;
            tooltip: number;
        };
        breakpoints: {
            sm: string;
            md: string;
            lg: string;
            xl: string;
            '2xl': string;
        };
    };
    themeMap: _stitches_react_types_config.DefaultThemeMap;
    utils: {
        m: (value: PropertyValue<'margin'>) => {
            margin: {
                readonly [$$PropertyValue]: "margin";
            };
        };
        mt: (value: PropertyValue<'margin'>) => {
            marginTop: {
                readonly [$$PropertyValue]: "margin";
            };
        };
        mr: (value: PropertyValue<'margin'>) => {
            marginRight: {
                readonly [$$PropertyValue]: "margin";
            };
        };
        mb: (value: PropertyValue<'margin'>) => {
            marginBottom: {
                readonly [$$PropertyValue]: "margin";
            };
        };
        ml: (value: PropertyValue<'margin'>) => {
            marginLeft: {
                readonly [$$PropertyValue]: "margin";
            };
        };
        mx: (value: PropertyValue<'margin'>) => {
            marginLeft: {
                readonly [$$PropertyValue]: "margin";
            };
            marginRight: {
                readonly [$$PropertyValue]: "margin";
            };
        };
        my: (value: PropertyValue<'margin'>) => {
            marginTop: {
                readonly [$$PropertyValue]: "margin";
            };
            marginBottom: {
                readonly [$$PropertyValue]: "margin";
            };
        };
        p: (value: PropertyValue<'padding'>) => {
            padding: {
                readonly [$$PropertyValue]: "padding";
            };
        };
        pt: (value: PropertyValue<'padding'>) => {
            paddingTop: {
                readonly [$$PropertyValue]: "padding";
            };
        };
        pr: (value: PropertyValue<'padding'>) => {
            paddingRight: {
                readonly [$$PropertyValue]: "padding";
            };
        };
        pb: (value: PropertyValue<'padding'>) => {
            paddingBottom: {
                readonly [$$PropertyValue]: "padding";
            };
        };
        pl: (value: PropertyValue<'padding'>) => {
            paddingLeft: {
                readonly [$$PropertyValue]: "padding";
            };
        };
        px: (value: PropertyValue<'padding'>) => {
            paddingLeft: {
                readonly [$$PropertyValue]: "padding";
            };
            paddingRight: {
                readonly [$$PropertyValue]: "padding";
            };
        };
        py: (value: PropertyValue<'padding'>) => {
            paddingTop: {
                readonly [$$PropertyValue]: "padding";
            };
            paddingBottom: {
                readonly [$$PropertyValue]: "padding";
            };
        };
        bg: (value: PropertyValue<'background'>) => {
            background: {
                readonly [$$PropertyValue]: "background";
            };
        };
        size: (value: PropertyValue<'width'> | PropertyValue<'height'>) => {
            width: {
                readonly [$$PropertyValue]: "width";
            } | {
                readonly [$$PropertyValue]: "height";
            };
            height: {
                readonly [$$PropertyValue]: "width";
            } | {
                readonly [$$PropertyValue]: "height";
            };
        };
        br: (value: PropertyValue<'borderRadius'>) => {
            borderRadius: {
                readonly [$$PropertyValue]: "borderRadius";
            };
        };
        bs: (value: PropertyValue<'boxShadow'>) => {
            boxShadow: {
                readonly [$$PropertyValue]: "boxShadow";
            };
        };
        justify: (value: PropertyValue<'justifyContent'>) => {
            justifyContent: {
                readonly [$$PropertyValue]: "justifyContent";
            };
        };
        align: (value: PropertyValue<'alignItems'>) => {
            alignItems: {
                readonly [$$PropertyValue]: "alignItems";
            };
        };
        h: (value: PropertyValue<'height'>) => {
            height: {
                readonly [$$PropertyValue]: "height";
            };
        };
        maxH: (value: PropertyValue<'maxHeight'>) => {
            maxHeight: {
                readonly [$$PropertyValue]: "maxHeight";
            };
        };
        minH: (value: PropertyValue<'minHeight'>) => {
            minHeight: {
                readonly [$$PropertyValue]: "minHeight";
            };
        };
        w: (value: PropertyValue<'width'>) => {
            width: {
                readonly [$$PropertyValue]: "width";
            };
        };
        maxW: (value: PropertyValue<'maxWidth'>) => {
            maxWidth: {
                readonly [$$PropertyValue]: "maxWidth";
            };
        };
        minW: (value: PropertyValue<'minWidth'>) => {
            minWidth: {
                readonly [$$PropertyValue]: "minWidth";
            };
        };
        d: (value: PropertyValue<'display'>) => {
            display: {
                readonly [$$PropertyValue]: "display";
            };
        };
        columns: (value: PropertyValue<'gridTemplateColumns'>) => {
            gridTemplateColumns: {
                readonly [$$PropertyValue]: "gridTemplateColumns";
            };
        };
        rows: (value: PropertyValue<'gridTemplateRows'>) => {
            gridTemplateRows: {
                readonly [$$PropertyValue]: "gridTemplateRows";
            };
        };
    };
};
declare const css: <Composers extends (string | _stitches_react_types_util.Function | React.JSXElementConstructor<any> | React.ExoticComponent<any> | {
    [name: string]: unknown;
})[], CSS_1 = _stitches_react_types_css_util.CSS<{
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
}, {
    colors: {
        white: string;
        black: string;
        'pink-500': string;
        'pink-600': string;
        'pink-700': string;
        'grey-400': string;
        'grey-600': string;
        'grey-700': string;
        'grey-800': string;
        'grey-900': string;
        'red-500': string;
        'red-900': string;
        'teal-500': string;
        'yellow-500': string;
        'yellow-900': string;
        'green-500': string;
        'green-900': string;
    };
    transitions: {
        fast: string;
    };
    fonts: {
        system: string;
    };
    fontSizes: {
        '3xs': string;
        '2xs': string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
    };
    fontWeights: {
        thin: number;
        normal: number;
        medium: number;
        bold: number;
        extrabold: number;
    };
    radii: {
        full: string;
        half: string;
        sm: string;
        md: string;
    };
    sizes: {
        full: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    space: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        13: string;
        14: string;
        15: string;
        16: string;
        17: string;
        18: string;
        19: string;
        20: string;
    };
    zIndices: {
        hide: number;
        auto: string;
        base: number;
        docked: number;
        dropdown: number;
        sticky: number;
        banner: number;
        overlay: number;
        modal: number;
        popover: number;
        skipLink: number;
        toast: number;
        tooltip: number;
    };
    breakpoints: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
}, _stitches_react_types_config.DefaultThemeMap, {
    m: (value: PropertyValue<'margin'>) => {
        margin: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mt: (value: PropertyValue<'margin'>) => {
        marginTop: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mr: (value: PropertyValue<'margin'>) => {
        marginRight: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mb: (value: PropertyValue<'margin'>) => {
        marginBottom: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    ml: (value: PropertyValue<'margin'>) => {
        marginLeft: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mx: (value: PropertyValue<'margin'>) => {
        marginLeft: {
            readonly [$$PropertyValue]: "margin";
        };
        marginRight: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    my: (value: PropertyValue<'margin'>) => {
        marginTop: {
            readonly [$$PropertyValue]: "margin";
        };
        marginBottom: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    p: (value: PropertyValue<'padding'>) => {
        padding: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pt: (value: PropertyValue<'padding'>) => {
        paddingTop: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pr: (value: PropertyValue<'padding'>) => {
        paddingRight: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pb: (value: PropertyValue<'padding'>) => {
        paddingBottom: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pl: (value: PropertyValue<'padding'>) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    px: (value: PropertyValue<'padding'>) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "padding";
        };
        paddingRight: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    py: (value: PropertyValue<'padding'>) => {
        paddingTop: {
            readonly [$$PropertyValue]: "padding";
        };
        paddingBottom: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    bg: (value: PropertyValue<'background'>) => {
        background: {
            readonly [$$PropertyValue]: "background";
        };
    };
    size: (value: PropertyValue<'width'> | PropertyValue<'height'>) => {
        width: {
            readonly [$$PropertyValue]: "width";
        } | {
            readonly [$$PropertyValue]: "height";
        };
        height: {
            readonly [$$PropertyValue]: "width";
        } | {
            readonly [$$PropertyValue]: "height";
        };
    };
    br: (value: PropertyValue<'borderRadius'>) => {
        borderRadius: {
            readonly [$$PropertyValue]: "borderRadius";
        };
    };
    bs: (value: PropertyValue<'boxShadow'>) => {
        boxShadow: {
            readonly [$$PropertyValue]: "boxShadow";
        };
    };
    justify: (value: PropertyValue<'justifyContent'>) => {
        justifyContent: {
            readonly [$$PropertyValue]: "justifyContent";
        };
    };
    align: (value: PropertyValue<'alignItems'>) => {
        alignItems: {
            readonly [$$PropertyValue]: "alignItems";
        };
    };
    h: (value: PropertyValue<'height'>) => {
        height: {
            readonly [$$PropertyValue]: "height";
        };
    };
    maxH: (value: PropertyValue<'maxHeight'>) => {
        maxHeight: {
            readonly [$$PropertyValue]: "maxHeight";
        };
    };
    minH: (value: PropertyValue<'minHeight'>) => {
        minHeight: {
            readonly [$$PropertyValue]: "minHeight";
        };
    };
    w: (value: PropertyValue<'width'>) => {
        width: {
            readonly [$$PropertyValue]: "width";
        };
    };
    maxW: (value: PropertyValue<'maxWidth'>) => {
        maxWidth: {
            readonly [$$PropertyValue]: "maxWidth";
        };
    };
    minW: (value: PropertyValue<'minWidth'>) => {
        minWidth: {
            readonly [$$PropertyValue]: "minWidth";
        };
    };
    d: (value: PropertyValue<'display'>) => {
        display: {
            readonly [$$PropertyValue]: "display";
        };
    };
    columns: (value: PropertyValue<'gridTemplateColumns'>) => {
        gridTemplateColumns: {
            readonly [$$PropertyValue]: "gridTemplateColumns";
        };
    };
    rows: (value: PropertyValue<'gridTemplateRows'>) => {
        gridTemplateRows: {
            readonly [$$PropertyValue]: "gridTemplateRows";
        };
    };
}>>(...composers: { [K in keyof Composers]: Composers[K] extends string | _stitches_react_types_util.Function | React.JSXElementConstructor<any> | React.ExoticComponent<any> ? Composers[K] : _stitches_react_types_stitches.RemoveIndex<CSS_1> & {
    variants?: {
        [x: string]: {
            [x: string]: CSS_1;
            [x: number]: CSS_1;
        };
    } | undefined;
    compoundVariants?: (("variants" extends keyof Composers[K] ? { [Name in keyof Composers[K][keyof Composers[K] & "variants"]]?: _stitches_react_types_util.String | _stitches_react_types_util.Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name]> | undefined; } : _stitches_react_types_util.WideObject) & {
        css: CSS_1;
    })[] | undefined;
    defaultVariants?: ("variants" extends keyof Composers[K] ? { [Name_1 in keyof Composers[K][keyof Composers[K] & "variants"]]?: _stitches_react_types_util.String | _stitches_react_types_util.Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name_1]> | undefined; } : _stitches_react_types_util.WideObject) | undefined;
} & CSS_1 & { [K2 in keyof Composers[K]]: K2 extends "compoundVariants" | "defaultVariants" | "variants" ? unknown : K2 extends keyof CSS_1 ? CSS_1[K2] : unknown; }; }) => _stitches_react_types_styled_component.CssComponent<_stitches_react_types_styled_component.StyledComponentType<Composers>, _stitches_react_types_styled_component.StyledComponentProps<Composers>, {
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
}, CSS_1>;
declare const globalCss: <Styles extends {
    [K: string]: any;
}>(...styles: ({
    '@import'?: unknown;
    '@font-face'?: unknown;
} & { [K in keyof Styles]: K extends "@import" ? string | string[] : K extends "@font-face" ? _stitches_react_types_css.AtRule.FontFace | _stitches_react_types_css.AtRule.FontFace[] : K extends `@keyframes ${string}` ? {
    [x: string]: _stitches_react_types_css_util.CSS<{
        sm: "(min-width: 576px)";
        md: "(min-width: 768px)";
        lg: "(min-width: 992px)";
        xl: "(min-width: 1200px)";
        '2xl': "(min-width: 1400px)";
    }, {
        colors: {
            white: string;
            black: string;
            'pink-500': string;
            'pink-600': string;
            'pink-700': string;
            'grey-400': string;
            'grey-600': string;
            'grey-700': string;
            'grey-800': string;
            'grey-900': string;
            'red-500': string;
            'red-900': string;
            'teal-500': string;
            'yellow-500': string;
            'yellow-900': string;
            'green-500': string;
            'green-900': string;
        };
        transitions: {
            fast: string;
        };
        fonts: {
            system: string;
        };
        fontSizes: {
            '3xs': string;
            '2xs': string;
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
            '2xl': string;
            '3xl': string;
            '4xl': string;
        };
        fontWeights: {
            thin: number;
            normal: number;
            medium: number;
            bold: number;
            extrabold: number;
        };
        radii: {
            full: string;
            half: string;
            sm: string;
            md: string;
        };
        sizes: {
            full: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
            '2xl': string;
        };
        space: {
            0: string;
            1: string;
            2: string;
            3: string;
            4: string;
            5: string;
            6: string;
            7: string;
            8: string;
            9: string;
            10: string;
            11: string;
            12: string;
            13: string;
            14: string;
            15: string;
            16: string;
            17: string;
            18: string;
            19: string;
            20: string;
        };
        zIndices: {
            hide: number;
            auto: string;
            base: number;
            docked: number;
            dropdown: number;
            sticky: number;
            banner: number;
            overlay: number;
            modal: number;
            popover: number;
            skipLink: number;
            toast: number;
            tooltip: number;
        };
        breakpoints: {
            sm: string;
            md: string;
            lg: string;
            xl: string;
            '2xl': string;
        };
    }, _stitches_react_types_config.DefaultThemeMap, {
        m: (value: PropertyValue<'margin'>) => {
            margin: {
                readonly [$$PropertyValue]: "margin";
            };
        };
        mt: (value: PropertyValue<'margin'>) => {
            marginTop: {
                readonly [$$PropertyValue]: "margin";
            };
        };
        mr: (value: PropertyValue<'margin'>) => {
            marginRight: {
                readonly [$$PropertyValue]: "margin";
            };
        };
        mb: (value: PropertyValue<'margin'>) => {
            marginBottom: {
                readonly [$$PropertyValue]: "margin";
            };
        };
        ml: (value: PropertyValue<'margin'>) => {
            marginLeft: {
                readonly [$$PropertyValue]: "margin";
            };
        };
        mx: (value: PropertyValue<'margin'>) => {
            marginLeft: {
                readonly [$$PropertyValue]: "margin";
            };
            marginRight: {
                readonly [$$PropertyValue]: "margin";
            };
        };
        my: (value: PropertyValue<'margin'>) => {
            marginTop: {
                readonly [$$PropertyValue]: "margin";
            };
            marginBottom: {
                readonly [$$PropertyValue]: "margin";
            };
        };
        p: (value: PropertyValue<'padding'>) => {
            padding: {
                readonly [$$PropertyValue]: "padding";
            };
        };
        pt: (value: PropertyValue<'padding'>) => {
            paddingTop: {
                readonly [$$PropertyValue]: "padding";
            };
        };
        pr: (value: PropertyValue<'padding'>) => {
            paddingRight: {
                readonly [$$PropertyValue]: "padding";
            };
        };
        pb: (value: PropertyValue<'padding'>) => {
            paddingBottom: {
                readonly [$$PropertyValue]: "padding";
            };
        };
        pl: (value: PropertyValue<'padding'>) => {
            paddingLeft: {
                readonly [$$PropertyValue]: "padding";
            };
        };
        px: (value: PropertyValue<'padding'>) => {
            paddingLeft: {
                readonly [$$PropertyValue]: "padding";
            };
            paddingRight: {
                readonly [$$PropertyValue]: "padding";
            };
        };
        py: (value: PropertyValue<'padding'>) => {
            paddingTop: {
                readonly [$$PropertyValue]: "padding";
            };
            paddingBottom: {
                readonly [$$PropertyValue]: "padding";
            };
        };
        bg: (value: PropertyValue<'background'>) => {
            background: {
                readonly [$$PropertyValue]: "background";
            };
        };
        size: (value: PropertyValue<'width'> | PropertyValue<'height'>) => {
            width: {
                readonly [$$PropertyValue]: "width";
            } | {
                readonly [$$PropertyValue]: "height";
            };
            height: {
                readonly [$$PropertyValue]: "width";
            } | {
                readonly [$$PropertyValue]: "height";
            };
        };
        br: (value: PropertyValue<'borderRadius'>) => {
            borderRadius: {
                readonly [$$PropertyValue]: "borderRadius";
            };
        };
        bs: (value: PropertyValue<'boxShadow'>) => {
            boxShadow: {
                readonly [$$PropertyValue]: "boxShadow";
            };
        };
        justify: (value: PropertyValue<'justifyContent'>) => {
            justifyContent: {
                readonly [$$PropertyValue]: "justifyContent";
            };
        };
        align: (value: PropertyValue<'alignItems'>) => {
            alignItems: {
                readonly [$$PropertyValue]: "alignItems";
            };
        };
        h: (value: PropertyValue<'height'>) => {
            height: {
                readonly [$$PropertyValue]: "height";
            };
        };
        maxH: (value: PropertyValue<'maxHeight'>) => {
            maxHeight: {
                readonly [$$PropertyValue]: "maxHeight";
            };
        };
        minH: (value: PropertyValue<'minHeight'>) => {
            minHeight: {
                readonly [$$PropertyValue]: "minHeight";
            };
        };
        w: (value: PropertyValue<'width'>) => {
            width: {
                readonly [$$PropertyValue]: "width";
            };
        };
        maxW: (value: PropertyValue<'maxWidth'>) => {
            maxWidth: {
                readonly [$$PropertyValue]: "maxWidth";
            };
        };
        minW: (value: PropertyValue<'minWidth'>) => {
            minWidth: {
                readonly [$$PropertyValue]: "minWidth";
            };
        };
        d: (value: PropertyValue<'display'>) => {
            display: {
                readonly [$$PropertyValue]: "display";
            };
        };
        columns: (value: PropertyValue<'gridTemplateColumns'>) => {
            gridTemplateColumns: {
                readonly [$$PropertyValue]: "gridTemplateColumns";
            };
        };
        rows: (value: PropertyValue<'gridTemplateRows'>) => {
            gridTemplateRows: {
                readonly [$$PropertyValue]: "gridTemplateRows";
            };
        };
    }>;
} : K extends `@property ${string}` ? _stitches_react_types_css.AtRule.Property : _stitches_react_types_css_util.CSS<{
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
}, {
    colors: {
        white: string;
        black: string;
        'pink-500': string;
        'pink-600': string;
        'pink-700': string;
        'grey-400': string;
        'grey-600': string;
        'grey-700': string;
        'grey-800': string;
        'grey-900': string;
        'red-500': string;
        'red-900': string;
        'teal-500': string;
        'yellow-500': string;
        'yellow-900': string;
        'green-500': string;
        'green-900': string;
    };
    transitions: {
        fast: string;
    };
    fonts: {
        system: string;
    };
    fontSizes: {
        '3xs': string;
        '2xs': string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
    };
    fontWeights: {
        thin: number;
        normal: number;
        medium: number;
        bold: number;
        extrabold: number;
    };
    radii: {
        full: string;
        half: string;
        sm: string;
        md: string;
    };
    sizes: {
        full: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    space: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        13: string;
        14: string;
        15: string;
        16: string;
        17: string;
        18: string;
        19: string;
        20: string;
    };
    zIndices: {
        hide: number;
        auto: string;
        base: number;
        docked: number;
        dropdown: number;
        sticky: number;
        banner: number;
        overlay: number;
        modal: number;
        popover: number;
        skipLink: number;
        toast: number;
        tooltip: number;
    };
    breakpoints: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
}, _stitches_react_types_config.DefaultThemeMap, {
    m: (value: PropertyValue<'margin'>) => {
        margin: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mt: (value: PropertyValue<'margin'>) => {
        marginTop: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mr: (value: PropertyValue<'margin'>) => {
        marginRight: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mb: (value: PropertyValue<'margin'>) => {
        marginBottom: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    ml: (value: PropertyValue<'margin'>) => {
        marginLeft: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mx: (value: PropertyValue<'margin'>) => {
        marginLeft: {
            readonly [$$PropertyValue]: "margin";
        };
        marginRight: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    my: (value: PropertyValue<'margin'>) => {
        marginTop: {
            readonly [$$PropertyValue]: "margin";
        };
        marginBottom: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    p: (value: PropertyValue<'padding'>) => {
        padding: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pt: (value: PropertyValue<'padding'>) => {
        paddingTop: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pr: (value: PropertyValue<'padding'>) => {
        paddingRight: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pb: (value: PropertyValue<'padding'>) => {
        paddingBottom: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pl: (value: PropertyValue<'padding'>) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    px: (value: PropertyValue<'padding'>) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "padding";
        };
        paddingRight: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    py: (value: PropertyValue<'padding'>) => {
        paddingTop: {
            readonly [$$PropertyValue]: "padding";
        };
        paddingBottom: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    bg: (value: PropertyValue<'background'>) => {
        background: {
            readonly [$$PropertyValue]: "background";
        };
    };
    size: (value: PropertyValue<'width'> | PropertyValue<'height'>) => {
        width: {
            readonly [$$PropertyValue]: "width";
        } | {
            readonly [$$PropertyValue]: "height";
        };
        height: {
            readonly [$$PropertyValue]: "width";
        } | {
            readonly [$$PropertyValue]: "height";
        };
    };
    br: (value: PropertyValue<'borderRadius'>) => {
        borderRadius: {
            readonly [$$PropertyValue]: "borderRadius";
        };
    };
    bs: (value: PropertyValue<'boxShadow'>) => {
        boxShadow: {
            readonly [$$PropertyValue]: "boxShadow";
        };
    };
    justify: (value: PropertyValue<'justifyContent'>) => {
        justifyContent: {
            readonly [$$PropertyValue]: "justifyContent";
        };
    };
    align: (value: PropertyValue<'alignItems'>) => {
        alignItems: {
            readonly [$$PropertyValue]: "alignItems";
        };
    };
    h: (value: PropertyValue<'height'>) => {
        height: {
            readonly [$$PropertyValue]: "height";
        };
    };
    maxH: (value: PropertyValue<'maxHeight'>) => {
        maxHeight: {
            readonly [$$PropertyValue]: "maxHeight";
        };
    };
    minH: (value: PropertyValue<'minHeight'>) => {
        minHeight: {
            readonly [$$PropertyValue]: "minHeight";
        };
    };
    w: (value: PropertyValue<'width'>) => {
        width: {
            readonly [$$PropertyValue]: "width";
        };
    };
    maxW: (value: PropertyValue<'maxWidth'>) => {
        maxWidth: {
            readonly [$$PropertyValue]: "maxWidth";
        };
    };
    minW: (value: PropertyValue<'minWidth'>) => {
        minWidth: {
            readonly [$$PropertyValue]: "minWidth";
        };
    };
    d: (value: PropertyValue<'display'>) => {
        display: {
            readonly [$$PropertyValue]: "display";
        };
    };
    columns: (value: PropertyValue<'gridTemplateColumns'>) => {
        gridTemplateColumns: {
            readonly [$$PropertyValue]: "gridTemplateColumns";
        };
    };
    rows: (value: PropertyValue<'gridTemplateRows'>) => {
        gridTemplateRows: {
            readonly [$$PropertyValue]: "gridTemplateRows";
        };
    };
}>; })[]) => () => string;
declare const styled: <Type extends _stitches_react_types_util.Function | keyof JSX.IntrinsicElements | React.ComponentType<any>, Composers extends (string | _stitches_react_types_util.Function | React.ComponentType<any> | {
    [name: string]: unknown;
})[], CSS_1 = _stitches_react_types_css_util.CSS<{
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
}, {
    colors: {
        white: string;
        black: string;
        'pink-500': string;
        'pink-600': string;
        'pink-700': string;
        'grey-400': string;
        'grey-600': string;
        'grey-700': string;
        'grey-800': string;
        'grey-900': string;
        'red-500': string;
        'red-900': string;
        'teal-500': string;
        'yellow-500': string;
        'yellow-900': string;
        'green-500': string;
        'green-900': string;
    };
    transitions: {
        fast: string;
    };
    fonts: {
        system: string;
    };
    fontSizes: {
        '3xs': string;
        '2xs': string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
    };
    fontWeights: {
        thin: number;
        normal: number;
        medium: number;
        bold: number;
        extrabold: number;
    };
    radii: {
        full: string;
        half: string;
        sm: string;
        md: string;
    };
    sizes: {
        full: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    space: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        13: string;
        14: string;
        15: string;
        16: string;
        17: string;
        18: string;
        19: string;
        20: string;
    };
    zIndices: {
        hide: number;
        auto: string;
        base: number;
        docked: number;
        dropdown: number;
        sticky: number;
        banner: number;
        overlay: number;
        modal: number;
        popover: number;
        skipLink: number;
        toast: number;
        tooltip: number;
    };
    breakpoints: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
}, _stitches_react_types_config.DefaultThemeMap, {
    m: (value: PropertyValue<'margin'>) => {
        margin: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mt: (value: PropertyValue<'margin'>) => {
        marginTop: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mr: (value: PropertyValue<'margin'>) => {
        marginRight: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mb: (value: PropertyValue<'margin'>) => {
        marginBottom: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    ml: (value: PropertyValue<'margin'>) => {
        marginLeft: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mx: (value: PropertyValue<'margin'>) => {
        marginLeft: {
            readonly [$$PropertyValue]: "margin";
        };
        marginRight: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    my: (value: PropertyValue<'margin'>) => {
        marginTop: {
            readonly [$$PropertyValue]: "margin";
        };
        marginBottom: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    p: (value: PropertyValue<'padding'>) => {
        padding: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pt: (value: PropertyValue<'padding'>) => {
        paddingTop: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pr: (value: PropertyValue<'padding'>) => {
        paddingRight: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pb: (value: PropertyValue<'padding'>) => {
        paddingBottom: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pl: (value: PropertyValue<'padding'>) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    px: (value: PropertyValue<'padding'>) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "padding";
        };
        paddingRight: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    py: (value: PropertyValue<'padding'>) => {
        paddingTop: {
            readonly [$$PropertyValue]: "padding";
        };
        paddingBottom: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    bg: (value: PropertyValue<'background'>) => {
        background: {
            readonly [$$PropertyValue]: "background";
        };
    };
    size: (value: PropertyValue<'width'> | PropertyValue<'height'>) => {
        width: {
            readonly [$$PropertyValue]: "width";
        } | {
            readonly [$$PropertyValue]: "height";
        };
        height: {
            readonly [$$PropertyValue]: "width";
        } | {
            readonly [$$PropertyValue]: "height";
        };
    };
    br: (value: PropertyValue<'borderRadius'>) => {
        borderRadius: {
            readonly [$$PropertyValue]: "borderRadius";
        };
    };
    bs: (value: PropertyValue<'boxShadow'>) => {
        boxShadow: {
            readonly [$$PropertyValue]: "boxShadow";
        };
    };
    justify: (value: PropertyValue<'justifyContent'>) => {
        justifyContent: {
            readonly [$$PropertyValue]: "justifyContent";
        };
    };
    align: (value: PropertyValue<'alignItems'>) => {
        alignItems: {
            readonly [$$PropertyValue]: "alignItems";
        };
    };
    h: (value: PropertyValue<'height'>) => {
        height: {
            readonly [$$PropertyValue]: "height";
        };
    };
    maxH: (value: PropertyValue<'maxHeight'>) => {
        maxHeight: {
            readonly [$$PropertyValue]: "maxHeight";
        };
    };
    minH: (value: PropertyValue<'minHeight'>) => {
        minHeight: {
            readonly [$$PropertyValue]: "minHeight";
        };
    };
    w: (value: PropertyValue<'width'>) => {
        width: {
            readonly [$$PropertyValue]: "width";
        };
    };
    maxW: (value: PropertyValue<'maxWidth'>) => {
        maxWidth: {
            readonly [$$PropertyValue]: "maxWidth";
        };
    };
    minW: (value: PropertyValue<'minWidth'>) => {
        minWidth: {
            readonly [$$PropertyValue]: "minWidth";
        };
    };
    d: (value: PropertyValue<'display'>) => {
        display: {
            readonly [$$PropertyValue]: "display";
        };
    };
    columns: (value: PropertyValue<'gridTemplateColumns'>) => {
        gridTemplateColumns: {
            readonly [$$PropertyValue]: "gridTemplateColumns";
        };
    };
    rows: (value: PropertyValue<'gridTemplateRows'>) => {
        gridTemplateRows: {
            readonly [$$PropertyValue]: "gridTemplateRows";
        };
    };
}>>(type: Type, ...composers: { [K in keyof Composers]: Composers[K] extends string | _stitches_react_types_util.Function | React.ComponentType<any> ? Composers[K] : _stitches_react_types_stitches.RemoveIndex<CSS_1> & {
    variants?: {
        [x: string]: {
            [x: string]: CSS_1;
            [x: number]: CSS_1;
        };
    } | undefined;
    compoundVariants?: (("variants" extends keyof Composers[K] ? { [Name in keyof Composers[K][keyof Composers[K] & "variants"]]?: _stitches_react_types_util.String | _stitches_react_types_util.Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name]> | undefined; } : _stitches_react_types_util.WideObject) & {
        css: CSS_1;
    })[] | undefined;
    defaultVariants?: ("variants" extends keyof Composers[K] ? { [Name_1 in keyof Composers[K][keyof Composers[K] & "variants"]]?: _stitches_react_types_util.String | _stitches_react_types_util.Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name_1]> | undefined; } : _stitches_react_types_util.WideObject) | undefined;
} & CSS_1 & { [K2 in keyof Composers[K]]: K2 extends "compoundVariants" | "defaultVariants" | "variants" ? unknown : K2 extends keyof CSS_1 ? CSS_1[K2] : unknown; }; }) => _stitches_react_types_styled_component.StyledComponent<Type, _stitches_react_types_styled_component.StyledComponentProps<Composers>, {
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
}, _stitches_react_types_css_util.CSS<{
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
}, {
    colors: {
        white: string;
        black: string;
        'pink-500': string;
        'pink-600': string;
        'pink-700': string;
        'grey-400': string;
        'grey-600': string;
        'grey-700': string;
        'grey-800': string;
        'grey-900': string;
        'red-500': string;
        'red-900': string;
        'teal-500': string;
        'yellow-500': string;
        'yellow-900': string;
        'green-500': string;
        'green-900': string;
    };
    transitions: {
        fast: string;
    };
    fonts: {
        system: string;
    };
    fontSizes: {
        '3xs': string;
        '2xs': string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
    };
    fontWeights: {
        thin: number;
        normal: number;
        medium: number;
        bold: number;
        extrabold: number;
    };
    radii: {
        full: string;
        half: string;
        sm: string;
        md: string;
    };
    sizes: {
        full: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    space: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        13: string;
        14: string;
        15: string;
        16: string;
        17: string;
        18: string;
        19: string;
        20: string;
    };
    zIndices: {
        hide: number;
        auto: string;
        base: number;
        docked: number;
        dropdown: number;
        sticky: number;
        banner: number;
        overlay: number;
        modal: number;
        popover: number;
        skipLink: number;
        toast: number;
        tooltip: number;
    };
    breakpoints: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
}, _stitches_react_types_config.DefaultThemeMap, {
    m: (value: PropertyValue<'margin'>) => {
        margin: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mt: (value: PropertyValue<'margin'>) => {
        marginTop: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mr: (value: PropertyValue<'margin'>) => {
        marginRight: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mb: (value: PropertyValue<'margin'>) => {
        marginBottom: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    ml: (value: PropertyValue<'margin'>) => {
        marginLeft: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mx: (value: PropertyValue<'margin'>) => {
        marginLeft: {
            readonly [$$PropertyValue]: "margin";
        };
        marginRight: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    my: (value: PropertyValue<'margin'>) => {
        marginTop: {
            readonly [$$PropertyValue]: "margin";
        };
        marginBottom: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    p: (value: PropertyValue<'padding'>) => {
        padding: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pt: (value: PropertyValue<'padding'>) => {
        paddingTop: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pr: (value: PropertyValue<'padding'>) => {
        paddingRight: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pb: (value: PropertyValue<'padding'>) => {
        paddingBottom: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pl: (value: PropertyValue<'padding'>) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    px: (value: PropertyValue<'padding'>) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "padding";
        };
        paddingRight: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    py: (value: PropertyValue<'padding'>) => {
        paddingTop: {
            readonly [$$PropertyValue]: "padding";
        };
        paddingBottom: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    bg: (value: PropertyValue<'background'>) => {
        background: {
            readonly [$$PropertyValue]: "background";
        };
    };
    size: (value: PropertyValue<'width'> | PropertyValue<'height'>) => {
        width: {
            readonly [$$PropertyValue]: "width";
        } | {
            readonly [$$PropertyValue]: "height";
        };
        height: {
            readonly [$$PropertyValue]: "width";
        } | {
            readonly [$$PropertyValue]: "height";
        };
    };
    br: (value: PropertyValue<'borderRadius'>) => {
        borderRadius: {
            readonly [$$PropertyValue]: "borderRadius";
        };
    };
    bs: (value: PropertyValue<'boxShadow'>) => {
        boxShadow: {
            readonly [$$PropertyValue]: "boxShadow";
        };
    };
    justify: (value: PropertyValue<'justifyContent'>) => {
        justifyContent: {
            readonly [$$PropertyValue]: "justifyContent";
        };
    };
    align: (value: PropertyValue<'alignItems'>) => {
        alignItems: {
            readonly [$$PropertyValue]: "alignItems";
        };
    };
    h: (value: PropertyValue<'height'>) => {
        height: {
            readonly [$$PropertyValue]: "height";
        };
    };
    maxH: (value: PropertyValue<'maxHeight'>) => {
        maxHeight: {
            readonly [$$PropertyValue]: "maxHeight";
        };
    };
    minH: (value: PropertyValue<'minHeight'>) => {
        minHeight: {
            readonly [$$PropertyValue]: "minHeight";
        };
    };
    w: (value: PropertyValue<'width'>) => {
        width: {
            readonly [$$PropertyValue]: "width";
        };
    };
    maxW: (value: PropertyValue<'maxWidth'>) => {
        maxWidth: {
            readonly [$$PropertyValue]: "maxWidth";
        };
    };
    minW: (value: PropertyValue<'minWidth'>) => {
        minWidth: {
            readonly [$$PropertyValue]: "minWidth";
        };
    };
    d: (value: PropertyValue<'display'>) => {
        display: {
            readonly [$$PropertyValue]: "display";
        };
    };
    columns: (value: PropertyValue<'gridTemplateColumns'>) => {
        gridTemplateColumns: {
            readonly [$$PropertyValue]: "gridTemplateColumns";
        };
    };
    rows: (value: PropertyValue<'gridTemplateRows'>) => {
        gridTemplateRows: {
            readonly [$$PropertyValue]: "gridTemplateRows";
        };
    };
}>>;
declare const getCssText: () => string;
declare const keyframes: (style: {
    [offset: string]: _stitches_react_types_css_util.CSS<{
        sm: "(min-width: 576px)";
        md: "(min-width: 768px)";
        lg: "(min-width: 992px)";
        xl: "(min-width: 1200px)";
        '2xl': "(min-width: 1400px)";
    }, {
        colors: {
            white: string;
            black: string;
            'pink-500': string;
            'pink-600': string;
            'pink-700': string;
            'grey-400': string;
            'grey-600': string;
            'grey-700': string;
            'grey-800': string;
            'grey-900': string;
            'red-500': string;
            'red-900': string;
            'teal-500': string;
            'yellow-500': string;
            'yellow-900': string;
            'green-500': string;
            'green-900': string;
        };
        transitions: {
            fast: string;
        };
        fonts: {
            system: string;
        };
        fontSizes: {
            '3xs': string;
            '2xs': string;
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
            '2xl': string;
            '3xl': string;
            '4xl': string;
        };
        fontWeights: {
            thin: number;
            normal: number;
            medium: number;
            bold: number;
            extrabold: number;
        };
        radii: {
            full: string;
            half: string;
            sm: string;
            md: string;
        };
        sizes: {
            full: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
            '2xl': string;
        };
        space: {
            0: string;
            1: string;
            2: string;
            3: string;
            4: string;
            5: string;
            6: string;
            7: string;
            8: string;
            9: string;
            10: string;
            11: string;
            12: string;
            13: string;
            14: string;
            15: string;
            16: string;
            17: string;
            18: string;
            19: string;
            20: string;
        };
        zIndices: {
            hide: number;
            auto: string;
            base: number;
            docked: number;
            dropdown: number;
            sticky: number;
            banner: number;
            overlay: number;
            modal: number;
            popover: number;
            skipLink: number;
            toast: number;
            tooltip: number;
        };
        breakpoints: {
            sm: string;
            md: string;
            lg: string;
            xl: string;
            '2xl': string;
        };
    }, _stitches_react_types_config.DefaultThemeMap, {
        m: (value: PropertyValue<'margin'>) => {
            margin: {
                readonly [$$PropertyValue]: "margin";
            };
        };
        mt: (value: PropertyValue<'margin'>) => {
            marginTop: {
                readonly [$$PropertyValue]: "margin";
            };
        };
        mr: (value: PropertyValue<'margin'>) => {
            marginRight: {
                readonly [$$PropertyValue]: "margin";
            };
        };
        mb: (value: PropertyValue<'margin'>) => {
            marginBottom: {
                readonly [$$PropertyValue]: "margin";
            };
        };
        ml: (value: PropertyValue<'margin'>) => {
            marginLeft: {
                readonly [$$PropertyValue]: "margin";
            };
        };
        mx: (value: PropertyValue<'margin'>) => {
            marginLeft: {
                readonly [$$PropertyValue]: "margin";
            };
            marginRight: {
                readonly [$$PropertyValue]: "margin";
            };
        };
        my: (value: PropertyValue<'margin'>) => {
            marginTop: {
                readonly [$$PropertyValue]: "margin";
            };
            marginBottom: {
                readonly [$$PropertyValue]: "margin";
            };
        };
        p: (value: PropertyValue<'padding'>) => {
            padding: {
                readonly [$$PropertyValue]: "padding";
            };
        };
        pt: (value: PropertyValue<'padding'>) => {
            paddingTop: {
                readonly [$$PropertyValue]: "padding";
            };
        };
        pr: (value: PropertyValue<'padding'>) => {
            paddingRight: {
                readonly [$$PropertyValue]: "padding";
            };
        };
        pb: (value: PropertyValue<'padding'>) => {
            paddingBottom: {
                readonly [$$PropertyValue]: "padding";
            };
        };
        pl: (value: PropertyValue<'padding'>) => {
            paddingLeft: {
                readonly [$$PropertyValue]: "padding";
            };
        };
        px: (value: PropertyValue<'padding'>) => {
            paddingLeft: {
                readonly [$$PropertyValue]: "padding";
            };
            paddingRight: {
                readonly [$$PropertyValue]: "padding";
            };
        };
        py: (value: PropertyValue<'padding'>) => {
            paddingTop: {
                readonly [$$PropertyValue]: "padding";
            };
            paddingBottom: {
                readonly [$$PropertyValue]: "padding";
            };
        };
        bg: (value: PropertyValue<'background'>) => {
            background: {
                readonly [$$PropertyValue]: "background";
            };
        };
        size: (value: PropertyValue<'width'> | PropertyValue<'height'>) => {
            width: {
                readonly [$$PropertyValue]: "width";
            } | {
                readonly [$$PropertyValue]: "height";
            };
            height: {
                readonly [$$PropertyValue]: "width";
            } | {
                readonly [$$PropertyValue]: "height";
            };
        };
        br: (value: PropertyValue<'borderRadius'>) => {
            borderRadius: {
                readonly [$$PropertyValue]: "borderRadius";
            };
        };
        bs: (value: PropertyValue<'boxShadow'>) => {
            boxShadow: {
                readonly [$$PropertyValue]: "boxShadow";
            };
        };
        justify: (value: PropertyValue<'justifyContent'>) => {
            justifyContent: {
                readonly [$$PropertyValue]: "justifyContent";
            };
        };
        align: (value: PropertyValue<'alignItems'>) => {
            alignItems: {
                readonly [$$PropertyValue]: "alignItems";
            };
        };
        h: (value: PropertyValue<'height'>) => {
            height: {
                readonly [$$PropertyValue]: "height";
            };
        };
        maxH: (value: PropertyValue<'maxHeight'>) => {
            maxHeight: {
                readonly [$$PropertyValue]: "maxHeight";
            };
        };
        minH: (value: PropertyValue<'minHeight'>) => {
            minHeight: {
                readonly [$$PropertyValue]: "minHeight";
            };
        };
        w: (value: PropertyValue<'width'>) => {
            width: {
                readonly [$$PropertyValue]: "width";
            };
        };
        maxW: (value: PropertyValue<'maxWidth'>) => {
            maxWidth: {
                readonly [$$PropertyValue]: "maxWidth";
            };
        };
        minW: (value: PropertyValue<'minWidth'>) => {
            minWidth: {
                readonly [$$PropertyValue]: "minWidth";
            };
        };
        d: (value: PropertyValue<'display'>) => {
            display: {
                readonly [$$PropertyValue]: "display";
            };
        };
        columns: (value: PropertyValue<'gridTemplateColumns'>) => {
            gridTemplateColumns: {
                readonly [$$PropertyValue]: "gridTemplateColumns";
            };
        };
        rows: (value: PropertyValue<'gridTemplateRows'>) => {
            gridTemplateRows: {
                readonly [$$PropertyValue]: "gridTemplateRows";
            };
        };
    }>;
}) => {
    (): string;
    name: string;
};

declare type SpinnerProps = {
    /**
     * CSS properties
     */
    css?: CSS;
} & HTMLAttributes<HTMLDivElement>;
/**
 * Spinner component
 *
 * @description provide a visual cue that an action is either processing, awaiting a course of change or a result.
 *
 * @example
 * ```jsx
 * <Spinner css={{
 *    $$color: '$colors$white',
 *    $$size: '16px',
 *    $$thickness: 2,
 *    $$speed: '0.4s'
 * }}
 * ```
 */
declare const Spinner: ({ ...props }: SpinnerProps) => JSX.Element;

declare const Button$1: _stitches_react_types_styled_component.StyledComponent<"button", {
    variant?: "outline" | "primary" | "secondary" | "destructive" | "naked" | undefined;
    shape?: "rounded" | "squared" | undefined;
    size?: "sm" | "md" | undefined;
    loading?: boolean | "true" | undefined;
    onlyIcon?: boolean | "true" | undefined;
}, {
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
}, _stitches_react_types_css_util.CSS<{
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
}, {
    colors: {
        white: string;
        black: string;
        'pink-500': string;
        'pink-600': string;
        'pink-700': string;
        'grey-400': string;
        'grey-600': string;
        'grey-700': string;
        'grey-800': string;
        'grey-900': string;
        'red-500': string;
        'red-900': string;
        'teal-500': string;
        'yellow-500': string;
        'yellow-900': string;
        'green-500': string;
        'green-900': string;
    };
    transitions: {
        fast: string;
    };
    fonts: {
        system: string;
    };
    fontSizes: {
        '3xs': string;
        '2xs': string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
    };
    fontWeights: {
        thin: number;
        normal: number;
        medium: number;
        bold: number;
        extrabold: number;
    };
    radii: {
        full: string;
        half: string;
        sm: string;
        md: string;
    };
    sizes: {
        full: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    space: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        13: string;
        14: string;
        15: string;
        16: string;
        17: string;
        18: string;
        19: string;
        20: string;
    };
    zIndices: {
        hide: number;
        auto: string;
        base: number;
        docked: number;
        dropdown: number;
        sticky: number;
        banner: number;
        overlay: number;
        modal: number;
        popover: number;
        skipLink: number;
        toast: number;
        tooltip: number;
    };
    breakpoints: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
}, _stitches_react_types_config.DefaultThemeMap, {
    m: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        margin: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mt: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginTop: {
            readonly [$$PropertyValue]: "margin";
        }; /**
         * Variant variant
         */
    };
    mr: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginRight: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mb: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginBottom: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    ml: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginLeft: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mx: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginLeft: {
            readonly [$$PropertyValue]: "margin";
        };
        marginRight: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    my: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginTop: {
            readonly [$$PropertyValue]: "margin";
        };
        marginBottom: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    p: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        padding: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pt: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingTop: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pr: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingRight: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pb: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingBottom: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pl: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    px: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "padding";
        };
        paddingRight: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    py: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingTop: {
            readonly [$$PropertyValue]: "padding";
        };
        paddingBottom: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    bg: (value: {
        readonly [$$PropertyValue]: "background";
    }) => {
        background: {
            readonly [$$PropertyValue]: "background";
        };
    };
    size: (value: {
        readonly [$$PropertyValue]: "width";
    } | {
        readonly [$$PropertyValue]: "height";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
        } | {
            readonly [$$PropertyValue]: "height";
        };
        height: {
            readonly [$$PropertyValue]: "width";
        } | {
            readonly [$$PropertyValue]: "height";
        };
    };
    br: (value: {
        readonly [$$PropertyValue]: "borderRadius";
    }) => {
        borderRadius: {
            readonly [$$PropertyValue]: "borderRadius";
        };
    };
    bs: (value: {
        readonly [$$PropertyValue]: "boxShadow";
    }) => {
        boxShadow: {
            readonly [$$PropertyValue]: "boxShadow";
        };
    };
    justify: (value: {
        readonly [$$PropertyValue]: "justifyContent";
    }) => {
        justifyContent: {
            readonly [$$PropertyValue]: "justifyContent";
        };
    };
    align: (value: {
        readonly [$$PropertyValue]: "alignItems";
    }) => {
        alignItems: {
            readonly [$$PropertyValue]: "alignItems";
        };
    };
    h: (value: {
        readonly [$$PropertyValue]: "height";
    }) => {
        height: {
            readonly [$$PropertyValue]: "height";
        };
    };
    maxH: (value: {
        readonly [$$PropertyValue]: "maxHeight";
    }) => {
        maxHeight: {
            readonly [$$PropertyValue]: "maxHeight";
        };
    };
    minH: (value: {
        readonly [$$PropertyValue]: "minHeight";
    }) => {
        minHeight: {
            readonly [$$PropertyValue]: "minHeight";
        };
    };
    w: (value: {
        readonly [$$PropertyValue]: "width";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
        };
    };
    maxW: (value: {
        readonly [$$PropertyValue]: "maxWidth";
    }) => {
        maxWidth: {
            readonly [$$PropertyValue]: "maxWidth";
        };
    };
    minW: (value: {
        readonly [$$PropertyValue]: "minWidth";
    }) => {
        minWidth: {
            readonly [$$PropertyValue]: "minWidth";
        };
    };
    d: (value: {
        readonly [$$PropertyValue]: "display";
    }) => {
        display: {
            readonly [$$PropertyValue]: "display";
        };
    };
    columns: (value: {
        readonly [$$PropertyValue]: "gridTemplateColumns";
    }) => {
        gridTemplateColumns: {
            readonly [$$PropertyValue]: "gridTemplateColumns";
        };
    };
    rows: (value: {
        readonly [$$PropertyValue]: "gridTemplateRows";
    }) => {
        gridTemplateRows: {
            readonly [$$PropertyValue]: "gridTemplateRows";
        };
    };
}>>;

declare type ButtonProps = {
    /**
     * Variant style of the button
     * @default "primary"
     */
    variant?: VariantProps<typeof Button$1>['variant'];
    /**
     * Size of the button
     * @default "md"
     */
    size?: VariantProps<typeof Button$1>['size'];
    /**
     * Shape of the button
     * @default "squared"
     */
    shape?: VariantProps<typeof Button$1>['shape'];
    /**
     * If `true`, the button will show a spinner.
     * @default "false"
     */
    loading?: boolean;
    /**
     * Add an icon beside text
     */
    icon?: React__default.ReactNode;
    /**
     * Position of the icon
     * @default "left"
     */
    iconPosition?: 'left' | 'right';
    /**
     * Button text
     */
    children?: React__default.ReactNode;
    /**
     * CSS properties
     */
    css?: CSS;
} & React__default.ButtonHTMLAttributes<HTMLButtonElement>;
/**
 * Button component
 *
 * @description used to trigger an action or event.
 */
declare const Button: React__default.ForwardRefExoticComponent<{
    /**
     * Variant style of the button
     * @default "primary"
     */
    variant?: VariantProps<typeof Button$1>['variant'];
    /**
     * Size of the button
     * @default "md"
     */
    size?: VariantProps<typeof Button$1>['size'];
    /**
     * Shape of the button
     * @default "squared"
     */
    shape?: VariantProps<typeof Button$1>['shape'];
    /**
     * If `true`, the button will show a spinner.
     * @default "false"
     */
    loading?: boolean | undefined;
    /**
     * Add an icon beside text
     */
    icon?: React__default.ReactNode;
    /**
     * Position of the icon
     * @default "left"
     */
    iconPosition?: "left" | "right" | undefined;
    /**
     * Button text
     */
    children?: React__default.ReactNode;
    /**
     * CSS properties
     */
    css?: CSS | undefined;
} & React__default.ButtonHTMLAttributes<HTMLButtonElement> & React__default.RefAttributes<HTMLButtonElement>>;

declare const Wrapper$2: _stitches_react_types_styled_component.StyledComponent<"div", {
    variant?: "outline" | "solid" | undefined;
    type?: "default" | "success" | "error" | "warning" | undefined;
}, {
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
}, _stitches_react_types_css_util.CSS<{
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
}, {
    colors: {
        white: string;
        black: string;
        'pink-500': string;
        'pink-600': string;
        'pink-700': string;
        'grey-400': string;
        'grey-600': string;
        'grey-700': string;
        'grey-800': string;
        'grey-900': string;
        'red-500': string;
        'red-900': string;
        'teal-500': string;
        'yellow-500': string;
        'yellow-900': string;
        'green-500': string;
        'green-900': string;
    };
    transitions: {
        fast: string;
    };
    fonts: {
        system: string;
    };
    fontSizes: {
        '3xs': string;
        '2xs': string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
    };
    fontWeights: {
        thin: number;
        normal: number;
        medium: number;
        bold: number;
        extrabold: number;
    };
    radii: {
        full: string;
        half: string;
        sm: string;
        md: string;
    };
    sizes: {
        full: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    space: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        13: string;
        14: string;
        15: string;
        16: string;
        17: string;
        18: string;
        19: string;
        20: string;
    };
    zIndices: {
        hide: number;
        auto: string;
        base: number;
        docked: number;
        dropdown: number;
        sticky: number;
        banner: number;
        overlay: number;
        modal: number;
        popover: number;
        skipLink: number;
        toast: number;
        tooltip: number;
    };
    breakpoints: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
}, _stitches_react_types_config.DefaultThemeMap, {
    m: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        margin: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mt: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginTop: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mr: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginRight: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mb: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginBottom: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    ml: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginLeft: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mx: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginLeft: {
            readonly [$$PropertyValue]: "margin";
        };
        marginRight: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    my: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginTop: {
            readonly [$$PropertyValue]: "margin";
        };
        marginBottom: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    p: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        padding: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pt: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingTop: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pr: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingRight: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pb: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingBottom: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pl: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    px: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "padding";
        };
        paddingRight: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    py: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingTop: {
            readonly [$$PropertyValue]: "padding";
        };
        paddingBottom: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    bg: (value: {
        readonly [$$PropertyValue]: "background";
    }) => {
        background: {
            readonly [$$PropertyValue]: "background";
        };
    };
    size: (value: {
        readonly [$$PropertyValue]: "width";
    } | {
        readonly [$$PropertyValue]: "height";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
        } | {
            readonly [$$PropertyValue]: "height";
        };
        height: {
            readonly [$$PropertyValue]: "width";
        } | {
            readonly [$$PropertyValue]: "height";
        };
    };
    br: (value: {
        readonly [$$PropertyValue]: "borderRadius";
    }) => {
        borderRadius: {
            readonly [$$PropertyValue]: "borderRadius";
        };
    };
    bs: (value: {
        readonly [$$PropertyValue]: "boxShadow";
    }) => {
        boxShadow: {
            readonly [$$PropertyValue]: "boxShadow";
        };
    };
    justify: (value: {
        readonly [$$PropertyValue]: "justifyContent";
    }) => {
        justifyContent: {
            readonly [$$PropertyValue]: "justifyContent";
        };
    };
    align: (value: {
        readonly [$$PropertyValue]: "alignItems";
    }) => {
        alignItems: {
            readonly [$$PropertyValue]: "alignItems";
        };
    };
    h: (value: {
        readonly [$$PropertyValue]: "height";
    }) => {
        height: {
            readonly [$$PropertyValue]: "height";
        };
    };
    maxH: (value: {
        readonly [$$PropertyValue]: "maxHeight";
    }) => {
        maxHeight: {
            readonly [$$PropertyValue]: "maxHeight";
        };
    };
    minH: (value: {
        readonly [$$PropertyValue]: "minHeight";
    }) => {
        minHeight: {
            readonly [$$PropertyValue]: "minHeight";
        };
    };
    w: (value: {
        readonly [$$PropertyValue]: "width";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
        };
    };
    maxW: (value: {
        readonly [$$PropertyValue]: "maxWidth";
    }) => {
        maxWidth: {
            readonly [$$PropertyValue]: "maxWidth";
        };
    };
    minW: (value: {
        readonly [$$PropertyValue]: "minWidth";
    }) => {
        minWidth: {
            readonly [$$PropertyValue]: "minWidth";
        };
    };
    d: (value: {
        readonly [$$PropertyValue]: "display";
    }) => {
        display: {
            readonly [$$PropertyValue]: "display";
        };
    };
    columns: (value: {
        readonly [$$PropertyValue]: "gridTemplateColumns";
    }) => {
        gridTemplateColumns: {
            readonly [$$PropertyValue]: "gridTemplateColumns";
        };
    };
    rows: (value: {
        readonly [$$PropertyValue]: "gridTemplateRows";
    }) => {
        gridTemplateRows: {
            readonly [$$PropertyValue]: "gridTemplateRows";
        };
    };
}>>;

declare type AlertProps = {
    /**
     * Title of the alert
     */
    title?: string;
    /**
     * Message of the alert
     */
    message?: string;
    /**
     * Variant style of the alert
     * @default "solid"
     */
    variant?: VariantProps<typeof Wrapper$2>['variant'];
    /**
     * It adds a color to the alert
     * @default "default"
     */
    type?: VariantProps<typeof Wrapper$2>['type'];
    /**
     * Action button of the alert
     */
    button?: React__default.ReactNode;
};
/**
 * Alert component
 *
 * @description used to communicate a state that affects a system, feature or page.
 */
declare const Alert: ({ title, message, button, ...props }: AlertProps) => JSX.Element;

declare const Image$1: _stitches_react_types_styled_component.StyledComponent<"img", {
    objectFit?: boolean | "true" | "false" | undefined;
    cover?: boolean | "true" | "false" | undefined;
}, {
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
}, _stitches_react_types_css_util.CSS<{
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
}, {
    colors: {
        white: string;
        black: string;
        'pink-500': string;
        'pink-600': string;
        'pink-700': string;
        'grey-400': string;
        'grey-600': string;
        'grey-700': string;
        'grey-800': string;
        'grey-900': string;
        'red-500': string;
        'red-900': string;
        'teal-500': string;
        'yellow-500': string;
        'yellow-900': string;
        'green-500': string;
        'green-900': string;
    };
    transitions: {
        fast: string;
    };
    fonts: {
        system: string;
    };
    fontSizes: {
        '3xs': string;
        '2xs': string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
    };
    fontWeights: {
        thin: number;
        normal: number;
        medium: number;
        bold: number;
        extrabold: number;
    };
    radii: {
        full: string;
        half: string;
        sm: string;
        md: string;
    };
    sizes: {
        full: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    space: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        13: string;
        14: string;
        15: string;
        16: string;
        17: string;
        18: string;
        19: string;
        20: string;
    };
    zIndices: {
        hide: number;
        auto: string;
        base: number;
        docked: number;
        dropdown: number;
        sticky: number;
        banner: number;
        overlay: number;
        modal: number;
        popover: number;
        skipLink: number;
        toast: number;
        tooltip: number;
    };
    breakpoints: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
}, _stitches_react_types_config.DefaultThemeMap, {
    m: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        margin: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mt: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginTop: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mr: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginRight: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mb: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginBottom: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    ml: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginLeft: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mx: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginLeft: {
            readonly [$$PropertyValue]: "margin";
        };
        marginRight: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    my: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginTop: {
            readonly [$$PropertyValue]: "margin";
        };
        marginBottom: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    p: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        padding: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pt: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingTop: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pr: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingRight: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pb: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingBottom: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pl: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    px: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "padding";
        };
        paddingRight: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    py: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingTop: {
            readonly [$$PropertyValue]: "padding";
        };
        paddingBottom: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    bg: (value: {
        readonly [$$PropertyValue]: "background";
    }) => {
        background: {
            readonly [$$PropertyValue]: "background";
        };
    };
    size: (value: {
        readonly [$$PropertyValue]: "width";
    } | {
        readonly [$$PropertyValue]: "height";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
        } | {
            readonly [$$PropertyValue]: "height";
        };
        height: {
            readonly [$$PropertyValue]: "width";
        } | {
            readonly [$$PropertyValue]: "height";
        };
    };
    br: (value: {
        readonly [$$PropertyValue]: "borderRadius";
    }) => {
        borderRadius: {
            readonly [$$PropertyValue]: "borderRadius";
        };
    };
    bs: (value: {
        readonly [$$PropertyValue]: "boxShadow";
    }) => {
        boxShadow: {
            readonly [$$PropertyValue]: "boxShadow";
        };
    };
    justify: (value: {
        readonly [$$PropertyValue]: "justifyContent";
    }) => {
        justifyContent: {
            readonly [$$PropertyValue]: "justifyContent";
        };
    };
    align: (value: {
        readonly [$$PropertyValue]: "alignItems";
    }) => {
        alignItems: {
            readonly [$$PropertyValue]: "alignItems";
        };
    };
    h: (value: {
        readonly [$$PropertyValue]: "height";
    }) => {
        height: {
            readonly [$$PropertyValue]: "height";
        };
    };
    maxH: (value: {
        readonly [$$PropertyValue]: "maxHeight";
    }) => {
        maxHeight: {
            readonly [$$PropertyValue]: "maxHeight";
        };
    };
    minH: (value: {
        readonly [$$PropertyValue]: "minHeight";
    }) => {
        minHeight: {
            readonly [$$PropertyValue]: "minHeight";
        };
    };
    w: (value: {
        readonly [$$PropertyValue]: "width";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
        };
    };
    maxW: (value: {
        readonly [$$PropertyValue]: "maxWidth";
    }) => {
        maxWidth: {
            readonly [$$PropertyValue]: "maxWidth";
        };
    };
    minW: (value: {
        readonly [$$PropertyValue]: "minWidth";
    }) => {
        minWidth: {
            readonly [$$PropertyValue]: "minWidth";
        };
    };
    d: (value: {
        readonly [$$PropertyValue]: "display";
    }) => {
        display: {
            readonly [$$PropertyValue]: "display";
        };
    };
    columns: (value: {
        readonly [$$PropertyValue]: "gridTemplateColumns";
    }) => {
        gridTemplateColumns: {
            readonly [$$PropertyValue]: "gridTemplateColumns";
        };
    };
    rows: (value: {
        readonly [$$PropertyValue]: "gridTemplateRows";
    }) => {
        gridTemplateRows: {
            readonly [$$PropertyValue]: "gridTemplateRows";
        };
    };
}>>;

declare type ImageProps = {
    /**
     * Src of the image
     */
    src: string;
    /**
     * Alt text of the image
     *
     */
    alt: string;
    /**
     * if `true`, add objectFit "cover" to image
     *
     * @default "true"
     */
    objectFit?: VariantProps<typeof Image$1>['objectFit'];
    /**
     * if `true`, add backgroundSize "cover" to image
     *
     * @default "true"
     */
    cover?: VariantProps<typeof Image$1>['cover'];
    /**
     * Fallback image `src` to show if image is loading or image fails.
     *
     * Note 🚨: We recommend you use a local image
     *
     */
    fallbackSrc?: string;
    /**
     * CSS properties
     */
    css?: CSS;
} & ImgHTMLAttributes<HTMLImageElement>;
/**
 * Image component
 *
 * @description used to display images.
 */
declare const Image: React__default.ForwardRefExoticComponent<{
    /**
     * Src of the image
     */
    src: string;
    /**
     * Alt text of the image
     *
     */
    alt: string;
    /**
     * if `true`, add objectFit "cover" to image
     *
     * @default "true"
     */
    objectFit?: VariantProps<typeof Image$1>['objectFit'];
    /**
     * if `true`, add backgroundSize "cover" to image
     *
     * @default "true"
     */
    cover?: VariantProps<typeof Image$1>['cover'];
    /**
     * Fallback image `src` to show if image is loading or image fails.
     *
     * Note 🚨: We recommend you use a local image
     *
     */
    fallbackSrc?: string | undefined;
    /**
     * CSS properties
     */
    css?: CSS | undefined;
} & React__default.ImgHTMLAttributes<HTMLImageElement> & React__default.RefAttributes<HTMLImageElement>>;

declare const Avatar$1: _stitches_react_types_styled_component.StyledComponent<React.ForwardRefExoticComponent<{
    src: string;
    alt: string;
    objectFit?: boolean | "true" | "false" | ({
        "@sm"?: boolean | "true" | "false" | undefined;
        "@md"?: boolean | "true" | "false" | undefined;
        "@lg"?: boolean | "true" | "false" | undefined;
        "@xl"?: boolean | "true" | "false" | undefined;
        "@2xl"?: boolean | "true" | "false" | undefined;
        "@initial"?: boolean | "true" | "false" | undefined;
    } & {
        [x: string]: boolean | "true" | "false" | undefined;
    }) | undefined;
    cover?: boolean | "true" | "false" | ({
        "@sm"?: boolean | "true" | "false" | undefined;
        "@md"?: boolean | "true" | "false" | undefined;
        "@lg"?: boolean | "true" | "false" | undefined;
        "@xl"?: boolean | "true" | "false" | undefined;
        "@2xl"?: boolean | "true" | "false" | undefined;
        "@initial"?: boolean | "true" | "false" | undefined;
    } & {
        [x: string]: boolean | "true" | "false" | undefined;
    }) | undefined;
    fallbackSrc?: string | undefined;
    css?: CSS | undefined;
} & React.ImgHTMLAttributes<HTMLImageElement> & React.RefAttributes<HTMLImageElement>>, {
    size?: number | "24" | "32" | "40" | "64" | "80" | "88" | "160" | "192" | "240" | undefined;
}, {
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
}, _stitches_react_types_css_util.CSS<{
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
}, {
    colors: {
        white: string;
        black: string;
        'pink-500': string;
        'pink-600': string;
        'pink-700': string;
        'grey-400': string;
        'grey-600': string;
        'grey-700': string;
        'grey-800': string;
        'grey-900': string;
        'red-500': string;
        'red-900': string;
        'teal-500': string;
        'yellow-500': string;
        'yellow-900': string;
        'green-500': string;
        'green-900': string;
    };
    transitions: {
        fast: string;
    };
    fonts: {
        system: string;
    };
    fontSizes: {
        '3xs': string;
        '2xs': string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
    };
    fontWeights: {
        thin: number;
        normal: number;
        medium: number;
        bold: number;
        extrabold: number;
    };
    radii: {
        full: string;
        half: string;
        sm: string;
        md: string;
    };
    sizes: {
        full: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    space: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        13: string;
        14: string;
        15: string;
        16: string;
        17: string;
        18: string;
        19: string;
        20: string;
    };
    zIndices: {
        hide: number;
        auto: string;
        base: number;
        docked: number;
        dropdown: number;
        sticky: number;
        banner: number;
        overlay: number;
        modal: number;
        popover: number;
        skipLink: number;
        toast: number;
        tooltip: number;
    };
    breakpoints: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
}, _stitches_react_types_config.DefaultThemeMap, {
    m: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        margin: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mt: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginTop: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mr: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginRight: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mb: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginBottom: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    ml: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginLeft: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mx: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginLeft: {
            readonly [$$PropertyValue]: "margin";
        };
        marginRight: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    my: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginTop: {
            readonly [$$PropertyValue]: "margin";
        };
        marginBottom: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    p: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        padding: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pt: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingTop: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pr: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingRight: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pb: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingBottom: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pl: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    px: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "padding";
        };
        paddingRight: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    py: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingTop: {
            readonly [$$PropertyValue]: "padding";
        };
        paddingBottom: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    bg: (value: {
        readonly [$$PropertyValue]: "background";
    }) => {
        background: {
            readonly [$$PropertyValue]: "background";
        };
    };
    size: (value: {
        readonly [$$PropertyValue]: "width";
    } | {
        readonly [$$PropertyValue]: "height";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
        } | {
            readonly [$$PropertyValue]: "height";
        };
        height: {
            readonly [$$PropertyValue]: "width";
        } | {
            readonly [$$PropertyValue]: "height";
        };
    };
    br: (value: {
        readonly [$$PropertyValue]: "borderRadius";
    }) => {
        borderRadius: {
            readonly [$$PropertyValue]: "borderRadius";
        };
    };
    bs: (value: {
        readonly [$$PropertyValue]: "boxShadow";
    }) => {
        boxShadow: {
            readonly [$$PropertyValue]: "boxShadow";
        };
    };
    justify: (value: {
        readonly [$$PropertyValue]: "justifyContent";
    }) => {
        justifyContent: {
            readonly [$$PropertyValue]: "justifyContent";
        };
    };
    align: (value: {
        readonly [$$PropertyValue]: "alignItems";
    }) => {
        alignItems: {
            readonly [$$PropertyValue]: "alignItems";
        };
    };
    h: (value: {
        readonly [$$PropertyValue]: "height";
    }) => {
        height: {
            readonly [$$PropertyValue]: "height";
        };
    };
    maxH: (value: {
        readonly [$$PropertyValue]: "maxHeight";
    }) => {
        maxHeight: {
            readonly [$$PropertyValue]: "maxHeight";
        };
    };
    minH: (value: {
        readonly [$$PropertyValue]: "minHeight";
    }) => {
        minHeight: {
            readonly [$$PropertyValue]: "minHeight";
        };
    };
    w: (value: {
        readonly [$$PropertyValue]: "width";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
        };
    };
    maxW: (value: {
        readonly [$$PropertyValue]: "maxWidth";
    }) => {
        maxWidth: {
            readonly [$$PropertyValue]: "maxWidth";
        };
    };
    minW: (value: {
        readonly [$$PropertyValue]: "minWidth";
    }) => {
        minWidth: {
            readonly [$$PropertyValue]: "minWidth";
        };
    };
    d: (value: {
        readonly [$$PropertyValue]: "display";
    }) => {
        display: {
            readonly [$$PropertyValue]: "display";
        };
    };
    columns: (value: {
        readonly [$$PropertyValue]: "gridTemplateColumns";
    }) => {
        gridTemplateColumns: {
            readonly [$$PropertyValue]: "gridTemplateColumns";
        };
    };
    rows: (value: {
        readonly [$$PropertyValue]: "gridTemplateRows";
    }) => {
        gridTemplateRows: {
            readonly [$$PropertyValue]: "gridTemplateRows";
        };
    };
}>>;

declare type AvatarProps = {
    /**
     * Avatar size
     * @default 80
     */
    size?: VariantProps<typeof Avatar$1>['size'];
} & ImageProps;
/**
 * Avatar component
 *
 * @description is used to represent a character and displays the picture.
 */
declare const Avatar: ({ ...props }: AvatarProps) => JSX.Element;

declare const Wrapper$1: _stitches_react_types_styled_component.StyledComponent<"div", {
    rarity?: "rare" | "common" | "uncommon" | "ultraRare" | "legendary" | undefined;
}, {
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
}, _stitches_react_types_css_util.CSS<{
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
}, {
    colors: {
        white: string;
        black: string;
        'pink-500': string;
        'pink-600': string;
        'pink-700': string;
        'grey-400': string;
        'grey-600': string;
        'grey-700': string;
        'grey-800': string;
        'grey-900': string;
        'red-500': string;
        'red-900': string;
        'teal-500': string;
        'yellow-500': string;
        'yellow-900': string;
        'green-500': string;
        'green-900': string;
    };
    transitions: {
        fast: string;
    };
    fonts: {
        system: string;
    };
    fontSizes: {
        '3xs': string;
        '2xs': string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
    };
    fontWeights: {
        thin: number;
        normal: number;
        medium: number;
        bold: number;
        extrabold: number;
    };
    radii: {
        full: string;
        half: string;
        sm: string;
        md: string;
    };
    sizes: {
        full: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    space: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        13: string;
        14: string;
        15: string;
        16: string;
        17: string;
        18: string;
        19: string;
        20: string;
    };
    zIndices: {
        hide: number;
        auto: string;
        base: number;
        docked: number;
        dropdown: number;
        sticky: number;
        banner: number;
        overlay: number;
        modal: number;
        popover: number;
        skipLink: number;
        toast: number;
        tooltip: number;
    };
    breakpoints: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
}, _stitches_react_types_config.DefaultThemeMap, {
    m: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        margin: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mt: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginTop: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mr: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginRight: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mb: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginBottom: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    ml: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginLeft: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mx: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginLeft: {
            readonly [$$PropertyValue]: "margin";
        };
        marginRight: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    my: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginTop: {
            readonly [$$PropertyValue]: "margin";
        };
        marginBottom: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    p: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        padding: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pt: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingTop: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pr: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingRight: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pb: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingBottom: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pl: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    px: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "padding";
        };
        paddingRight: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    py: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingTop: {
            readonly [$$PropertyValue]: "padding";
        };
        paddingBottom: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    bg: (value: {
        readonly [$$PropertyValue]: "background";
    }) => {
        background: {
            readonly [$$PropertyValue]: "background";
        };
    };
    size: (value: {
        readonly [$$PropertyValue]: "width";
    } | {
        readonly [$$PropertyValue]: "height";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
        } | {
            readonly [$$PropertyValue]: "height";
        };
        height: {
            readonly [$$PropertyValue]: "width";
        } | {
            readonly [$$PropertyValue]: "height";
        };
    };
    br: (value: {
        readonly [$$PropertyValue]: "borderRadius";
    }) => {
        borderRadius: {
            readonly [$$PropertyValue]: "borderRadius";
        };
    };
    bs: (value: {
        readonly [$$PropertyValue]: "boxShadow";
    }) => {
        boxShadow: {
            readonly [$$PropertyValue]: "boxShadow";
        };
    };
    justify: (value: {
        readonly [$$PropertyValue]: "justifyContent";
    }) => {
        justifyContent: {
            readonly [$$PropertyValue]: "justifyContent";
        };
    };
    align: (value: {
        readonly [$$PropertyValue]: "alignItems";
    }) => {
        alignItems: {
            readonly [$$PropertyValue]: "alignItems";
        };
    };
    h: (value: {
        readonly [$$PropertyValue]: "height";
    }) => {
        height: {
            readonly [$$PropertyValue]: "height";
        };
    };
    maxH: (value: {
        readonly [$$PropertyValue]: "maxHeight";
    }) => {
        maxHeight: {
            readonly [$$PropertyValue]: "maxHeight";
        };
    };
    minH: (value: {
        readonly [$$PropertyValue]: "minHeight";
    }) => {
        minHeight: {
            readonly [$$PropertyValue]: "minHeight";
        };
    };
    w: (value: {
        readonly [$$PropertyValue]: "width";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
        };
    };
    maxW: (value: {
        readonly [$$PropertyValue]: "maxWidth";
    }) => {
        maxWidth: {
            readonly [$$PropertyValue]: "maxWidth";
        };
    };
    minW: (value: {
        readonly [$$PropertyValue]: "minWidth";
    }) => {
        minWidth: {
            readonly [$$PropertyValue]: "minWidth";
        };
    };
    d: (value: {
        readonly [$$PropertyValue]: "display";
    }) => {
        display: {
            readonly [$$PropertyValue]: "display";
        };
    };
    columns: (value: {
        readonly [$$PropertyValue]: "gridTemplateColumns";
    }) => {
        gridTemplateColumns: {
            readonly [$$PropertyValue]: "gridTemplateColumns";
        };
    };
    rows: (value: {
        readonly [$$PropertyValue]: "gridTemplateRows";
    }) => {
        gridTemplateRows: {
            readonly [$$PropertyValue]: "gridTemplateRows";
        };
    };
}>>;

declare type BadgeProps = {
    /**
     * Rarity of the item badge.
     * @default "common"
     */
    rarity?: VariantProps<typeof Wrapper$1>['rarity'];
    /**
     * CSS properties
     */
    css?: CSS;
} & HTMLAttributes<HTMLDivElement>;
/**
 * Badge component
 *
 * @description Badges are used to highlight an item's status for quick recognition.
 */
declare const Badge: ({ rarity, ...props }: BadgeProps) => JSX.Element;

declare type BaseCarouselSettings = Settings;
declare type BaseCarouselProps = {
    /**
     *
     */
    settings: BaseCarouselSettings;
    /**
     *
     */
    children: React__default.ReactNode;
};
declare const BaseCarousel: React__default.ForwardRefExoticComponent<BaseCarouselProps & React__default.RefAttributes<SlickSlider>>;

declare type BoxProps = {
    css?: CSS;
} & HTMLAttributes<HTMLDivElement>;
/**
 * Box component
 *
 * @description abstract component. By default, it renders a div element.
 */
declare const Box: _stitches_react_types_styled_component.StyledComponent<"div", {}, {
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
}, _stitches_react_types_css_util.CSS<{
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
}, {
    colors: {
        white: string;
        black: string;
        'pink-500': string;
        'pink-600': string;
        'pink-700': string;
        'grey-400': string;
        'grey-600': string;
        'grey-700': string;
        'grey-800': string;
        'grey-900': string;
        'red-500': string;
        'red-900': string;
        'teal-500': string;
        'yellow-500': string;
        'yellow-900': string;
        'green-500': string;
        'green-900': string;
    };
    transitions: {
        fast: string;
    };
    fonts: {
        system: string;
    };
    fontSizes: {
        '3xs': string;
        '2xs': string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
    };
    fontWeights: {
        thin: number;
        normal: number;
        medium: number;
        bold: number;
        extrabold: number;
    };
    radii: {
        full: string;
        half: string;
        sm: string;
        md: string;
    };
    sizes: {
        full: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    space: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        13: string;
        14: string;
        15: string;
        16: string;
        17: string;
        18: string;
        19: string;
        20: string;
    };
    zIndices: {
        hide: number;
        auto: string;
        base: number;
        docked: number;
        dropdown: number;
        sticky: number;
        banner: number;
        overlay: number;
        modal: number;
        popover: number;
        skipLink: number;
        toast: number;
        tooltip: number;
    };
    breakpoints: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
}, _stitches_react_types_config.DefaultThemeMap, {
    m: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        margin: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mt: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginTop: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mr: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginRight: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mb: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginBottom: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    ml: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginLeft: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mx: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginLeft: {
            readonly [$$PropertyValue]: "margin";
        };
        marginRight: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    my: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginTop: {
            readonly [$$PropertyValue]: "margin";
        };
        marginBottom: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    p: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        padding: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pt: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingTop: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pr: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingRight: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pb: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingBottom: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pl: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    px: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "padding";
        };
        paddingRight: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    py: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingTop: {
            readonly [$$PropertyValue]: "padding";
        };
        paddingBottom: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    bg: (value: {
        readonly [$$PropertyValue]: "background";
    }) => {
        background: {
            readonly [$$PropertyValue]: "background";
        };
    };
    size: (value: {
        readonly [$$PropertyValue]: "width";
    } | {
        readonly [$$PropertyValue]: "height";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
        } | {
            readonly [$$PropertyValue]: "height";
        };
        height: {
            readonly [$$PropertyValue]: "width";
        } | {
            readonly [$$PropertyValue]: "height";
        };
    };
    br: (value: {
        readonly [$$PropertyValue]: "borderRadius";
    }) => {
        borderRadius: {
            readonly [$$PropertyValue]: "borderRadius";
        };
    };
    bs: (value: {
        readonly [$$PropertyValue]: "boxShadow";
    }) => {
        boxShadow: {
            readonly [$$PropertyValue]: "boxShadow";
        };
    };
    justify: (value: {
        readonly [$$PropertyValue]: "justifyContent";
    }) => {
        justifyContent: {
            readonly [$$PropertyValue]: "justifyContent";
        };
    };
    align: (value: {
        readonly [$$PropertyValue]: "alignItems";
    }) => {
        alignItems: {
            readonly [$$PropertyValue]: "alignItems";
        };
    };
    h: (value: {
        readonly [$$PropertyValue]: "height";
    }) => {
        height: {
            readonly [$$PropertyValue]: "height";
        };
    };
    maxH: (value: {
        readonly [$$PropertyValue]: "maxHeight";
    }) => {
        maxHeight: {
            readonly [$$PropertyValue]: "maxHeight";
        };
    };
    minH: (value: {
        readonly [$$PropertyValue]: "minHeight";
    }) => {
        minHeight: {
            readonly [$$PropertyValue]: "minHeight";
        };
    };
    w: (value: {
        readonly [$$PropertyValue]: "width";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
        };
    };
    maxW: (value: {
        readonly [$$PropertyValue]: "maxWidth";
    }) => {
        maxWidth: {
            readonly [$$PropertyValue]: "maxWidth";
        };
    };
    minW: (value: {
        readonly [$$PropertyValue]: "minWidth";
    }) => {
        minWidth: {
            readonly [$$PropertyValue]: "minWidth";
        };
    };
    d: (value: {
        readonly [$$PropertyValue]: "display";
    }) => {
        display: {
            readonly [$$PropertyValue]: "display";
        };
    };
    columns: (value: {
        readonly [$$PropertyValue]: "gridTemplateColumns";
    }) => {
        gridTemplateColumns: {
            readonly [$$PropertyValue]: "gridTemplateColumns";
        };
    };
    rows: (value: {
        readonly [$$PropertyValue]: "gridTemplateRows";
    }) => {
        gridTemplateRows: {
            readonly [$$PropertyValue]: "gridTemplateRows";
        };
    };
}>>;

declare type BreadcrumbProps = {
    /**
     * The breadcrumb items.
     */
    items: BreadcrumbItemProps[];
    /**
     * Replace the `a` tag to another element.
     *
     * @default "a"
     */
    as?: React__default.ElementType;
    /**
     * CSS properties
     */
    css?: CSS;
} & HTMLAttributes<HTMLDivElement>;
declare type BreadcrumbItemProps = {
    /**
     * Link of the breadcrumb item
     */
    href: string;
    /**
     * Label of the breadcrumb item
     */
    label: string;
};
/**
 * Breadcrumb components
 *
 * @description The breadcrumb component is used to display a list of items that
 */
declare const Breadcrumb: ({ as, items, ...props }: BreadcrumbProps) => JSX.Element;

declare type CarouselProps = {
    /**
     * Items to be displayed in the carousel
     */
    items?: CarouselItemProps[];
    /**
     * Settings for the carousel
     */
    settings?: BaseCarouselSettings;
};
/**
 * Carousel component
 *
 * @description wrapper of the carousel component
 */
declare const Carousel: ({ items, settings, ...props }: CarouselProps) => JSX.Element;
/**
 * CarouselItem component
 *
 * @description Used to display an item in the carousel
 */
declare type CarouselItemProps = {
    /**
     * Src of the image
     */
    src: string;
    /**
     * Alt description of the image
     */
    alt: string;
    /**
     * Label for the item
     */
    label?: string;
};

declare type CharacterProps = {
    /**
     *  If the character is selected or not.
     */
    active: boolean;
    /**
     * The character index in the team list
     */
    index?: number;
    /**
     * The character class type
     */
    type?: string;
    /**
     * The source of the image (url)
     */
    src: string;
    /**
     *  Alt text for image
     */
    alt: string;
};
/**
 * Character component
 *
 * @description can be used to represent people or objects.
 */
declare const Character: ({ active, index, type, src, alt, }: CharacterProps) => JSX.Element;

declare type CheckboxProps = {
    /**
     * Checkbox size
     *
     * @default "md"
     */
    size?: 'sm' | 'md' | 'lg';
    /**
     * CSS properties
     */
    css?: CSS;
    /**
     * Checkbox text
     */
    children: React__default.ReactNode;
} & CheckboxBase.CheckboxProps;
/**
 * Checkbox component
 *
 * @description used in forms when a user needs to select multiple values from several options.
 *
 * @see https://www.radix-ui.com/docs/primitives/components/checkbox
 */
declare const Checkbox: React__default.ForwardRefExoticComponent<{
    /**
     * Checkbox size
     *
     * @default "md"
     */
    size?: "sm" | "md" | "lg" | undefined;
    /**
     * CSS properties
     */
    css?: CSS | undefined;
    /**
     * Checkbox text
     */
    children: React__default.ReactNode;
} & CheckboxBase.CheckboxProps & React__default.RefAttributes<HTMLButtonElement>>;

declare type ContainerProps = ComponentProps<typeof Container>;
/**
 * Container component
 *
 * @description A container component that can be used to wrap other components.
 */
declare const Container: _stitches_react_types_styled_component.StyledComponent<"div", {}, {
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
}, _stitches_react_types_css_util.CSS<{
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
}, {
    colors: {
        white: string;
        black: string;
        'pink-500': string;
        'pink-600': string;
        'pink-700': string;
        'grey-400': string;
        'grey-600': string;
        'grey-700': string;
        'grey-800': string;
        'grey-900': string;
        'red-500': string;
        'red-900': string;
        'teal-500': string;
        'yellow-500': string;
        'yellow-900': string;
        'green-500': string;
        'green-900': string;
    };
    transitions: {
        fast: string;
    };
    fonts: {
        system: string;
    };
    fontSizes: {
        '3xs': string;
        '2xs': string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
    };
    fontWeights: {
        thin: number;
        normal: number;
        medium: number;
        bold: number;
        extrabold: number;
    };
    radii: {
        full: string;
        half: string;
        sm: string;
        md: string;
    };
    sizes: {
        full: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    space: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        13: string;
        14: string;
        15: string;
        16: string;
        17: string;
        18: string;
        19: string;
        20: string;
    };
    zIndices: {
        hide: number;
        auto: string;
        base: number;
        docked: number;
        dropdown: number;
        sticky: number;
        banner: number;
        overlay: number;
        modal: number;
        popover: number;
        skipLink: number;
        toast: number;
        tooltip: number;
    };
    breakpoints: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
}, _stitches_react_types_config.DefaultThemeMap, {
    m: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        margin: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mt: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginTop: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mr: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginRight: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mb: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginBottom: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    ml: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginLeft: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mx: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginLeft: {
            readonly [$$PropertyValue]: "margin";
        };
        marginRight: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    my: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginTop: {
            readonly [$$PropertyValue]: "margin";
        };
        marginBottom: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    p: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        padding: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pt: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingTop: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pr: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingRight: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pb: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingBottom: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pl: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    px: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "padding";
        };
        paddingRight: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    py: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingTop: {
            readonly [$$PropertyValue]: "padding";
        };
        paddingBottom: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    bg: (value: {
        readonly [$$PropertyValue]: "background";
    }) => {
        background: {
            readonly [$$PropertyValue]: "background";
        };
    };
    size: (value: {
        readonly [$$PropertyValue]: "width";
    } | {
        readonly [$$PropertyValue]: "height";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
        } | {
            readonly [$$PropertyValue]: "height";
        };
        height: {
            readonly [$$PropertyValue]: "width";
        } | {
            readonly [$$PropertyValue]: "height";
        };
    };
    br: (value: {
        readonly [$$PropertyValue]: "borderRadius";
    }) => {
        borderRadius: {
            readonly [$$PropertyValue]: "borderRadius";
        };
    };
    bs: (value: {
        readonly [$$PropertyValue]: "boxShadow";
    }) => {
        boxShadow: {
            readonly [$$PropertyValue]: "boxShadow";
        };
    };
    justify: (value: {
        readonly [$$PropertyValue]: "justifyContent";
    }) => {
        justifyContent: {
            readonly [$$PropertyValue]: "justifyContent";
        };
    };
    align: (value: {
        readonly [$$PropertyValue]: "alignItems";
    }) => {
        alignItems: {
            readonly [$$PropertyValue]: "alignItems";
        };
    };
    h: (value: {
        readonly [$$PropertyValue]: "height";
    }) => {
        height: {
            readonly [$$PropertyValue]: "height";
        };
    };
    maxH: (value: {
        readonly [$$PropertyValue]: "maxHeight";
    }) => {
        maxHeight: {
            readonly [$$PropertyValue]: "maxHeight";
        };
    };
    minH: (value: {
        readonly [$$PropertyValue]: "minHeight";
    }) => {
        minHeight: {
            readonly [$$PropertyValue]: "minHeight";
        };
    };
    w: (value: {
        readonly [$$PropertyValue]: "width";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
        };
    };
    maxW: (value: {
        readonly [$$PropertyValue]: "maxWidth";
    }) => {
        maxWidth: {
            readonly [$$PropertyValue]: "maxWidth";
        };
    };
    minW: (value: {
        readonly [$$PropertyValue]: "minWidth";
    }) => {
        minWidth: {
            readonly [$$PropertyValue]: "minWidth";
        };
    };
    d: (value: {
        readonly [$$PropertyValue]: "display";
    }) => {
        display: {
            readonly [$$PropertyValue]: "display";
        };
    };
    columns: (value: {
        readonly [$$PropertyValue]: "gridTemplateColumns";
    }) => {
        gridTemplateColumns: {
            readonly [$$PropertyValue]: "gridTemplateColumns";
        };
    };
    rows: (value: {
        readonly [$$PropertyValue]: "gridTemplateRows";
    }) => {
        gridTemplateRows: {
            readonly [$$PropertyValue]: "gridTemplateRows";
        };
    };
}>>;

declare type ContentHeadingProps = {
    /**
     *
     */
    title?: string;
    /**
     *
     */
    description?: string;
    /**
     *
     * @default `false
     */
    info?: boolean;
    /**
     *
     * @default `true`
     */
    line?: boolean;
};
/**
 * ContentHeading component
 *
 * @description A component to display a title and description
 */
declare const ContentHeading: ({ title, description, line, info, }: ContentHeadingProps) => JSX.Element;

declare type FlexProps = {
    css?: CSS;
} & HTMLAttributes<HTMLDivElement>;
/**
 * Flex component
 *
 * @description Flex is Box with display. It renders a div element.
 */
declare const Flex: _stitches_react_types_styled_component.StyledComponent<"div", {}, {
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
}, _stitches_react_types_css_util.CSS<{
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
}, {
    colors: {
        white: string;
        black: string;
        'pink-500': string;
        'pink-600': string;
        'pink-700': string;
        'grey-400': string;
        'grey-600': string;
        'grey-700': string;
        'grey-800': string;
        'grey-900': string;
        'red-500': string;
        'red-900': string;
        'teal-500': string;
        'yellow-500': string;
        'yellow-900': string;
        'green-500': string;
        'green-900': string;
    };
    transitions: {
        fast: string;
    };
    fonts: {
        system: string;
    };
    fontSizes: {
        '3xs': string;
        '2xs': string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
    };
    fontWeights: {
        thin: number;
        normal: number;
        medium: number;
        bold: number;
        extrabold: number;
    };
    radii: {
        full: string;
        half: string;
        sm: string;
        md: string;
    };
    sizes: {
        full: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    space: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        13: string;
        14: string;
        15: string;
        16: string;
        17: string;
        18: string;
        19: string;
        20: string;
    };
    zIndices: {
        hide: number;
        auto: string;
        base: number;
        docked: number;
        dropdown: number;
        sticky: number;
        banner: number;
        overlay: number;
        modal: number;
        popover: number;
        skipLink: number;
        toast: number;
        tooltip: number;
    };
    breakpoints: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
}, _stitches_react_types_config.DefaultThemeMap, {
    m: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        margin: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mt: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginTop: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mr: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginRight: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mb: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginBottom: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    ml: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginLeft: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mx: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginLeft: {
            readonly [$$PropertyValue]: "margin";
        };
        marginRight: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    my: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginTop: {
            readonly [$$PropertyValue]: "margin";
        };
        marginBottom: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    p: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        padding: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pt: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingTop: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pr: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingRight: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pb: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingBottom: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pl: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    px: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "padding";
        };
        paddingRight: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    py: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingTop: {
            readonly [$$PropertyValue]: "padding";
        };
        paddingBottom: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    bg: (value: {
        readonly [$$PropertyValue]: "background";
    }) => {
        background: {
            readonly [$$PropertyValue]: "background";
        };
    };
    size: (value: {
        readonly [$$PropertyValue]: "width";
    } | {
        readonly [$$PropertyValue]: "height";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
        } | {
            readonly [$$PropertyValue]: "height";
        };
        height: {
            readonly [$$PropertyValue]: "width";
        } | {
            readonly [$$PropertyValue]: "height";
        };
    };
    br: (value: {
        readonly [$$PropertyValue]: "borderRadius";
    }) => {
        borderRadius: {
            readonly [$$PropertyValue]: "borderRadius";
        };
    };
    bs: (value: {
        readonly [$$PropertyValue]: "boxShadow";
    }) => {
        boxShadow: {
            readonly [$$PropertyValue]: "boxShadow";
        };
    };
    justify: (value: {
        readonly [$$PropertyValue]: "justifyContent";
    }) => {
        justifyContent: {
            readonly [$$PropertyValue]: "justifyContent";
        };
    };
    align: (value: {
        readonly [$$PropertyValue]: "alignItems";
    }) => {
        alignItems: {
            readonly [$$PropertyValue]: "alignItems";
        };
    };
    h: (value: {
        readonly [$$PropertyValue]: "height";
    }) => {
        height: {
            readonly [$$PropertyValue]: "height";
        };
    };
    maxH: (value: {
        readonly [$$PropertyValue]: "maxHeight";
    }) => {
        maxHeight: {
            readonly [$$PropertyValue]: "maxHeight";
        };
    };
    minH: (value: {
        readonly [$$PropertyValue]: "minHeight";
    }) => {
        minHeight: {
            readonly [$$PropertyValue]: "minHeight";
        };
    };
    w: (value: {
        readonly [$$PropertyValue]: "width";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
        };
    };
    maxW: (value: {
        readonly [$$PropertyValue]: "maxWidth";
    }) => {
        maxWidth: {
            readonly [$$PropertyValue]: "maxWidth";
        };
    };
    minW: (value: {
        readonly [$$PropertyValue]: "minWidth";
    }) => {
        minWidth: {
            readonly [$$PropertyValue]: "minWidth";
        };
    };
    d: (value: {
        readonly [$$PropertyValue]: "display";
    }) => {
        display: {
            readonly [$$PropertyValue]: "display";
        };
    };
    columns: (value: {
        readonly [$$PropertyValue]: "gridTemplateColumns";
    }) => {
        gridTemplateColumns: {
            readonly [$$PropertyValue]: "gridTemplateColumns";
        };
    };
    rows: (value: {
        readonly [$$PropertyValue]: "gridTemplateRows";
    }) => {
        gridTemplateRows: {
            readonly [$$PropertyValue]: "gridTemplateRows";
        };
    };
}>>;

declare type GridProps = {
    css?: CSS;
} & HTMLAttributes<HTMLDivElement>;
/**
 * Grid component
 *
 * @description is a Box with d: grid and it comes with helpful style shorthand. It renders a div element.
 */
declare const Grid: _stitches_react_types_styled_component.StyledComponent<"div", {}, {
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
}, _stitches_react_types_css_util.CSS<{
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
}, {
    colors: {
        white: string;
        black: string;
        'pink-500': string;
        'pink-600': string;
        'pink-700': string;
        'grey-400': string;
        'grey-600': string;
        'grey-700': string;
        'grey-800': string;
        'grey-900': string;
        'red-500': string;
        'red-900': string;
        'teal-500': string;
        'yellow-500': string;
        'yellow-900': string;
        'green-500': string;
        'green-900': string;
    };
    transitions: {
        fast: string;
    };
    fonts: {
        system: string;
    };
    fontSizes: {
        '3xs': string;
        '2xs': string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
    };
    fontWeights: {
        thin: number;
        normal: number;
        medium: number;
        bold: number;
        extrabold: number;
    };
    radii: {
        full: string;
        half: string;
        sm: string;
        md: string;
    };
    sizes: {
        full: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    space: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        13: string;
        14: string;
        15: string;
        16: string;
        17: string;
        18: string;
        19: string;
        20: string;
    };
    zIndices: {
        hide: number;
        auto: string;
        base: number;
        docked: number;
        dropdown: number;
        sticky: number;
        banner: number;
        overlay: number;
        modal: number;
        popover: number;
        skipLink: number;
        toast: number;
        tooltip: number;
    };
    breakpoints: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
}, _stitches_react_types_config.DefaultThemeMap, {
    m: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        margin: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mt: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginTop: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mr: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginRight: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mb: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginBottom: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    ml: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginLeft: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mx: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginLeft: {
            readonly [$$PropertyValue]: "margin";
        };
        marginRight: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    my: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginTop: {
            readonly [$$PropertyValue]: "margin";
        };
        marginBottom: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    p: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        padding: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pt: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingTop: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pr: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingRight: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pb: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingBottom: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pl: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    px: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "padding";
        };
        paddingRight: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    py: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingTop: {
            readonly [$$PropertyValue]: "padding";
        };
        paddingBottom: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    bg: (value: {
        readonly [$$PropertyValue]: "background";
    }) => {
        background: {
            readonly [$$PropertyValue]: "background";
        };
    };
    size: (value: {
        readonly [$$PropertyValue]: "width";
    } | {
        readonly [$$PropertyValue]: "height";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
        } | {
            readonly [$$PropertyValue]: "height";
        };
        height: {
            readonly [$$PropertyValue]: "width";
        } | {
            readonly [$$PropertyValue]: "height";
        };
    };
    br: (value: {
        readonly [$$PropertyValue]: "borderRadius";
    }) => {
        borderRadius: {
            readonly [$$PropertyValue]: "borderRadius";
        };
    };
    bs: (value: {
        readonly [$$PropertyValue]: "boxShadow";
    }) => {
        boxShadow: {
            readonly [$$PropertyValue]: "boxShadow";
        };
    };
    justify: (value: {
        readonly [$$PropertyValue]: "justifyContent";
    }) => {
        justifyContent: {
            readonly [$$PropertyValue]: "justifyContent";
        };
    };
    align: (value: {
        readonly [$$PropertyValue]: "alignItems";
    }) => {
        alignItems: {
            readonly [$$PropertyValue]: "alignItems";
        };
    };
    h: (value: {
        readonly [$$PropertyValue]: "height";
    }) => {
        height: {
            readonly [$$PropertyValue]: "height";
        };
    };
    maxH: (value: {
        readonly [$$PropertyValue]: "maxHeight";
    }) => {
        maxHeight: {
            readonly [$$PropertyValue]: "maxHeight";
        };
    };
    minH: (value: {
        readonly [$$PropertyValue]: "minHeight";
    }) => {
        minHeight: {
            readonly [$$PropertyValue]: "minHeight";
        };
    };
    w: (value: {
        readonly [$$PropertyValue]: "width";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
        };
    };
    maxW: (value: {
        readonly [$$PropertyValue]: "maxWidth";
    }) => {
        maxWidth: {
            readonly [$$PropertyValue]: "maxWidth";
        };
    };
    minW: (value: {
        readonly [$$PropertyValue]: "minWidth";
    }) => {
        minWidth: {
            readonly [$$PropertyValue]: "minWidth";
        };
    };
    d: (value: {
        readonly [$$PropertyValue]: "display";
    }) => {
        display: {
            readonly [$$PropertyValue]: "display";
        };
    };
    columns: (value: {
        readonly [$$PropertyValue]: "gridTemplateColumns";
    }) => {
        gridTemplateColumns: {
            readonly [$$PropertyValue]: "gridTemplateColumns";
        };
    };
    rows: (value: {
        readonly [$$PropertyValue]: "gridTemplateRows";
    }) => {
        gridTemplateRows: {
            readonly [$$PropertyValue]: "gridTemplateRows";
        };
    };
}>>;

declare type InputProps = {
    /**
     * Input label
     */
    label?: string;
    /**
     * Show input message
     */
    hint?: string | string[];
    /**
     * Show input error
     */
    error?: string | string[];
    /**
     *
     * @default "default"
     */
    variant?: 'default' | 'line';
    /**
     * CSS properties
     */
    leftIcon?: React__default.ReactNode;
    /**
     * CSS properties
     */
    rightIcon?: React__default.ReactNode;
    /**
     * CSS properties
     */
    css?: CSS;
} & InputHTMLAttributes<HTMLInputElement>;
/**
 * Input component
 *
 * @description is a component that is used to get user input in a text field.
 */
declare const Input: React__default.ForwardRefExoticComponent<{
    /**
     * Input label
     */
    label?: string | undefined;
    /**
     * Show input message
     */
    hint?: string | string[] | undefined;
    /**
     * Show input error
     */
    error?: string | string[] | undefined;
    /**
     *
     * @default "default"
     */
    variant?: "default" | "line" | undefined;
    /**
     * CSS properties
     */
    leftIcon?: React__default.ReactNode;
    /**
     * CSS properties
     */
    rightIcon?: React__default.ReactNode;
    /**
     * CSS properties
     */
    css?: CSS | undefined;
} & React__default.InputHTMLAttributes<HTMLInputElement> & React__default.RefAttributes<HTMLInputElement>>;

declare type LabelProps = {
    /**
     * Label variant of style
     *
     * @default "success"
     */
    variant?: 'success' | 'danger' | 'warning';
    /**
     * Icon to show
     */
    icon?: React__default.ReactNode;
    /**
     * Label text
     */
    children: React__default.ReactNode;
};
/**
 * Label component
 *
 * @description are used to highlight an item's status for quick recognition.
 */
declare const Label: ({ children, icon, variant }: LabelProps) => JSX.Element;

declare type LogoProps = {
    /**
     * Logo variant
     */
    variant?: 'minimal' | 'full';
    /**
     * CSS properties
     */
    css?: CSS;
} & HTMLAttributes<HTMLOrSVGElement>;
/**
 * Logo component
 *
 * @description Show the logo of Neon District
 */
declare const Logo: ({ variant }: LogoProps) => JSX.Element;

declare const RadioInputGroup: _stitches_react_types_styled_component.StyledComponent<React.ForwardRefExoticComponent<RadioGroupBase.RadioGroupProps & React.RefAttributes<HTMLDivElement>>, {
    direction?: "column" | "row" | undefined;
}, {
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
}, _stitches_react_types_css_util.CSS<{
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
}, {
    colors: {
        white: string;
        black: string;
        'pink-500': string;
        'pink-600': string;
        'pink-700': string;
        'grey-400': string;
        'grey-600': string;
        'grey-700': string;
        'grey-800': string;
        'grey-900': string;
        'red-500': string;
        'red-900': string;
        'teal-500': string;
        'yellow-500': string;
        'yellow-900': string;
        'green-500': string;
        'green-900': string;
    };
    transitions: {
        fast: string;
    };
    fonts: {
        system: string;
    };
    fontSizes: {
        '3xs': string;
        '2xs': string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
    };
    fontWeights: {
        thin: number;
        normal: number;
        medium: number;
        bold: number;
        extrabold: number;
    };
    radii: {
        full: string;
        half: string;
        sm: string;
        md: string;
    };
    sizes: {
        full: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    space: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        13: string;
        14: string;
        15: string;
        16: string;
        17: string;
        18: string;
        19: string;
        20: string;
    };
    zIndices: {
        hide: number;
        auto: string;
        base: number;
        docked: number;
        dropdown: number;
        sticky: number;
        banner: number;
        overlay: number;
        modal: number;
        popover: number;
        skipLink: number;
        toast: number;
        tooltip: number;
    };
    breakpoints: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
}, _stitches_react_types_config.DefaultThemeMap, {
    m: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        margin: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mt: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginTop: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mr: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginRight: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mb: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginBottom: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    ml: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginLeft: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mx: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginLeft: {
            readonly [$$PropertyValue]: "margin";
        };
        marginRight: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    my: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginTop: {
            readonly [$$PropertyValue]: "margin";
        };
        marginBottom: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    p: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        padding: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pt: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingTop: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pr: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingRight: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pb: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingBottom: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pl: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    px: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "padding";
        };
        paddingRight: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    py: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingTop: {
            readonly [$$PropertyValue]: "padding";
        };
        paddingBottom: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    bg: (value: {
        readonly [$$PropertyValue]: "background";
    }) => {
        background: {
            readonly [$$PropertyValue]: "background";
        };
    };
    size: (value: {
        readonly [$$PropertyValue]: "width";
    } | {
        readonly [$$PropertyValue]: "height";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
        } | {
            readonly [$$PropertyValue]: "height";
        };
        height: {
            readonly [$$PropertyValue]: "width";
        } | {
            readonly [$$PropertyValue]: "height";
        };
    };
    br: (value: {
        readonly [$$PropertyValue]: "borderRadius";
    }) => {
        borderRadius: {
            readonly [$$PropertyValue]: "borderRadius";
        };
    };
    bs: (value: {
        readonly [$$PropertyValue]: "boxShadow";
    }) => {
        boxShadow: {
            readonly [$$PropertyValue]: "boxShadow";
        };
    };
    justify: (value: {
        readonly [$$PropertyValue]: "justifyContent";
    }) => {
        justifyContent: {
            readonly [$$PropertyValue]: "justifyContent";
        };
    };
    align: (value: {
        readonly [$$PropertyValue]: "alignItems";
    }) => {
        alignItems: {
            readonly [$$PropertyValue]: "alignItems";
        };
    };
    h: (value: {
        readonly [$$PropertyValue]: "height";
    }) => {
        height: {
            readonly [$$PropertyValue]: "height";
        };
    };
    maxH: (value: {
        readonly [$$PropertyValue]: "maxHeight";
    }) => {
        maxHeight: {
            readonly [$$PropertyValue]: "maxHeight";
        };
    };
    minH: (value: {
        readonly [$$PropertyValue]: "minHeight";
    }) => {
        minHeight: {
            readonly [$$PropertyValue]: "minHeight";
        };
    };
    w: (value: {
        readonly [$$PropertyValue]: "width";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
        };
    };
    maxW: (value: {
        readonly [$$PropertyValue]: "maxWidth";
    }) => {
        maxWidth: {
            readonly [$$PropertyValue]: "maxWidth";
        };
    };
    minW: (value: {
        readonly [$$PropertyValue]: "minWidth";
    }) => {
        minWidth: {
            readonly [$$PropertyValue]: "minWidth";
        };
    };
    d: (value: {
        readonly [$$PropertyValue]: "display";
    }) => {
        display: {
            readonly [$$PropertyValue]: "display";
        };
    };
    columns: (value: {
        readonly [$$PropertyValue]: "gridTemplateColumns";
    }) => {
        gridTemplateColumns: {
            readonly [$$PropertyValue]: "gridTemplateColumns";
        };
    };
    rows: (value: {
        readonly [$$PropertyValue]: "gridTemplateRows";
    }) => {
        gridTemplateRows: {
            readonly [$$PropertyValue]: "gridTemplateRows";
        };
    };
}>>;

declare type RadioGroupProps = {
    /**
     * Radio group direction
     *
     * @default "column"
     */
    direction?: VariantProps<typeof RadioInputGroup>['direction'];
    /**
     * Show radio group label
     */
    label?: string;
    /**
     * Item of radio group
     */
    children?: React__default.ReactNode;
    /**
     * CSS properties
     */
    css?: CSS;
} & RadioGroupBase.RadioGroupProps;
/**
 * Radio group component
 *
 * @description are used when only one choice may be selected in a series of options.
 */
declare const RadioGroup: React__default.ForwardRefExoticComponent<{
    /**
     * Radio group direction
     *
     * @default "column"
     */
    direction?: VariantProps<typeof RadioInputGroup>['direction'];
    /**
     * Show radio group label
     */
    label?: string | undefined;
    /**
     * Item of radio group
     */
    children?: React__default.ReactNode;
    /**
     * CSS properties
     */
    css?: CSS | undefined;
} & RadioGroupBase.RadioGroupProps & React__default.RefAttributes<HTMLDivElement>>;
declare type RadioItemProps = {
    /**
     * Radio item
     */
    children?: React__default.ReactNode;
    /**
     * Contains a error
     */
    error?: boolean;
    /**
     * CSS properties
     */
    css?: CSS;
} & RadioGroupBase.RadioGroupItemProps;
declare const RadioItem: ({ children, error, disabled, ...props }: RadioItemProps) => JSX.Element;

declare type SelectProps = {
    items: {
        value: string;
        label: string;
    }[];
    /**
     * id of the select
     */
    id?: string;
    /**
     * Style of the select
     *
     * @default 'outline'
     */
    variant?: 'outline' | 'solid';
    /**
     * Size of the select
     *
     * @default 'default'
     */
    size?: 'tiny' | 'small' | 'default';
    /**
     * Show label text
     */
    label?: string;
    /**
     * Show hint text
     */
    hint?: string;
    /**
     * If `true` apply error style
     */
    error?: string | string[];
    /**
     * If `true` disable select
     *
     * @default false
     */
    disabled?: boolean;
};
declare type SelectItemProps = {
    /**
     * Value of the select item
     */
    value: string;
    /**
     * Option item to be shown in the select
     */
    children?: React__default.ReactNode;
};
/**
 * Select component
 *
 * @description is a component that allows users pick a value from predefined options. Ideally, it should be used when there are more than 5 options, otherwise you might consider using a radio group instead.
 */
declare const Select: ({ items, ...props }: SelectProps) => JSX.Element;

/**
 * Step component
 */
declare type StepperProps = {
    /**
     * The active item
     */
    activeItem: number;
    /**
     * Array of steps
     */
    items: string[];
    /**
     * CSS properties
     */
    css?: CSS;
} & HTMLAttributes<HTMLDivElement>;
/**
 * Steps component
 *
 * @description This component is used to render a list of steps.
 */
declare const Stepper: ({ ...props }: StepperProps) => JSX.Element;

declare type TabProps = {
    /**
     * Default active tab
     *
     * @default "tab1"
     */
    defaultValue?: string;
    /**
     * CSS properties
     */
    css?: CSS;
    /**
     * Children of the tab
     */
    children: ReactElement<typeof TabList> | ReactElement<typeof TabContent> | ReactElement<typeof TabList>[] | ReactElement<typeof TabContent>[];
} & Tabs.TabsProps;
/**
 * Tab component
 *
 * @description Used to display a list of tabs
 * @example
 * ```jsx
 * <Tab>
 *  <TabList>
 *    <TabItem value="tab1">Tab 1</TabItem>
 *    <TabItem value="tab2">Tab 2</TabItem>
 *  </TabList>
 *  <TabContent value="tab1">Tab 1 content</TabContent>
 *  <TabContent value="tab2">Tab 2 content</TabContent>
 * </Tab>
 * ```
 */
declare const Tab: ({ defaultValue, children, ...props }: TabProps) => JSX.Element;
declare type TabListProps = {
    /**
     * CSS properties
     */
    css?: CSS;
    /**
     * Children of the tab list
     */
    children: ReactElement<typeof TabItem>[] | ReactElement<typeof TabItem>;
} & Tabs.TabsListProps;
declare const TabList: ({ children, ...props }: TabListProps) => JSX.Element;
declare type TabItemProps = {
    /**
     * Value of the tab
     * @default "tab1"
     */
    value: string;
    /**
     * CSS properties
     */
    css?: CSS;
    /**
     * Label of the tab
     */
    children: React__default.ReactNode;
} & Tabs.TabsTriggerProps;
declare const TabItem: ({ children, value, ...props }: TabItemProps) => JSX.Element;
declare type TabContentProps = {
    /**
     * Value of the tab
     */
    value: string;
    /**
     * CSS properties
     */
    css?: CSS;
    /**
     * The content of the tab
     */
    children: React__default.ReactNode;
} & Tabs.TabsContentProps;
declare const TabContent: ({ children, value }: TabContentProps) => JSX.Element;

declare const Switch: _stitches_react_types_styled_component.StyledComponent<React.ForwardRefExoticComponent<_radix_ui_react_switch.SwitchProps & React.RefAttributes<HTMLButtonElement>>, {
    size?: "sm" | "md" | undefined;
}, {
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
}, _stitches_react_types_css_util.CSS<{
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
}, {
    colors: {
        white: string;
        black: string;
        'pink-500': string;
        'pink-600': string;
        'pink-700': string;
        'grey-400': string;
        'grey-600': string;
        'grey-700': string;
        'grey-800': string;
        'grey-900': string;
        'red-500': string;
        'red-900': string;
        'teal-500': string;
        'yellow-500': string;
        'yellow-900': string;
        'green-500': string;
        'green-900': string;
    };
    transitions: {
        fast: string;
    };
    fonts: {
        system: string;
    };
    fontSizes: {
        '3xs': string;
        '2xs': string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
    };
    fontWeights: {
        thin: number;
        normal: number;
        medium: number;
        bold: number;
        extrabold: number;
    };
    radii: {
        full: string;
        half: string;
        sm: string;
        md: string;
    };
    sizes: {
        full: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    space: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        13: string;
        14: string;
        15: string;
        16: string;
        17: string;
        18: string;
        19: string;
        20: string;
    };
    zIndices: {
        hide: number;
        auto: string;
        base: number;
        docked: number;
        dropdown: number;
        sticky: number;
        banner: number;
        overlay: number;
        modal: number;
        popover: number;
        skipLink: number;
        toast: number;
        tooltip: number;
    };
    breakpoints: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
}, _stitches_react_types_config.DefaultThemeMap, {
    m: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        margin: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mt: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginTop: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mr: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginRight: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mb: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginBottom: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    ml: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginLeft: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mx: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginLeft: {
            readonly [$$PropertyValue]: "margin";
        };
        marginRight: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    my: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginTop: {
            readonly [$$PropertyValue]: "margin";
        };
        marginBottom: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    p: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        padding: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pt: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingTop: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pr: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingRight: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pb: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingBottom: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pl: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    px: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "padding";
        };
        paddingRight: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    py: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingTop: {
            readonly [$$PropertyValue]: "padding";
        };
        paddingBottom: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    bg: (value: {
        readonly [$$PropertyValue]: "background";
    }) => {
        background: {
            readonly [$$PropertyValue]: "background";
        };
    };
    size: (value: {
        readonly [$$PropertyValue]: "width";
    } | {
        readonly [$$PropertyValue]: "height";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
        } | {
            readonly [$$PropertyValue]: "height";
        };
        height: {
            readonly [$$PropertyValue]: "width";
        } | {
            readonly [$$PropertyValue]: "height";
        };
    };
    br: (value: {
        readonly [$$PropertyValue]: "borderRadius";
    }) => {
        borderRadius: {
            readonly [$$PropertyValue]: "borderRadius";
        };
    };
    bs: (value: {
        readonly [$$PropertyValue]: "boxShadow";
    }) => {
        boxShadow: {
            readonly [$$PropertyValue]: "boxShadow";
        };
    };
    justify: (value: {
        readonly [$$PropertyValue]: "justifyContent";
    }) => {
        justifyContent: {
            readonly [$$PropertyValue]: "justifyContent";
        };
    };
    align: (value: {
        readonly [$$PropertyValue]: "alignItems";
    }) => {
        alignItems: {
            readonly [$$PropertyValue]: "alignItems";
        };
    };
    h: (value: {
        readonly [$$PropertyValue]: "height";
    }) => {
        height: {
            readonly [$$PropertyValue]: "height";
        };
    };
    maxH: (value: {
        readonly [$$PropertyValue]: "maxHeight";
    }) => {
        maxHeight: {
            readonly [$$PropertyValue]: "maxHeight";
        };
    };
    minH: (value: {
        readonly [$$PropertyValue]: "minHeight";
    }) => {
        minHeight: {
            readonly [$$PropertyValue]: "minHeight";
        };
    };
    w: (value: {
        readonly [$$PropertyValue]: "width";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
        };
    };
    maxW: (value: {
        readonly [$$PropertyValue]: "maxWidth";
    }) => {
        maxWidth: {
            readonly [$$PropertyValue]: "maxWidth";
        };
    };
    minW: (value: {
        readonly [$$PropertyValue]: "minWidth";
    }) => {
        minWidth: {
            readonly [$$PropertyValue]: "minWidth";
        };
    };
    d: (value: {
        readonly [$$PropertyValue]: "display";
    }) => {
        display: {
            readonly [$$PropertyValue]: "display";
        };
    };
    columns: (value: {
        readonly [$$PropertyValue]: "gridTemplateColumns";
    }) => {
        gridTemplateColumns: {
            readonly [$$PropertyValue]: "gridTemplateColumns";
        };
    };
    rows: (value: {
        readonly [$$PropertyValue]: "gridTemplateRows";
    }) => {
        gridTemplateRows: {
            readonly [$$PropertyValue]: "gridTemplateRows";
        };
    };
}>>;

declare type ToggleProps = {
    /**
     * Size of the toggle.
     *
     * @default "md"
     */
    size?: VariantProps<typeof Switch>['size'];
    /**
     * CSS properties
     */
    css?: CSS;
} & SwitchProps & HTMLAttributes<HTMLDivElement>;
/**
 * Toggle component
 *
 * @description can switch between enabled or disabled states.
 */
declare const Toggle: ({ css, ...props }: ToggleProps) => JSX.Element;

declare type TagPropsBase = {
    /**
     *
     */
    label: string;
    /**
     * Style of the tag
     * @default 'grey'
     */
    style?: 'grey' | 'outlined';
    /**
     *
     */
    removable?: boolean;
    /**
     *
     */
    onRemove?: () => void;
};
declare type TagPropsWithImage = TagPropsBase & {
    icon?: never;
    image: string;
};
declare type TagPropsWithIcon = TagPropsBase & {
    icon?: boolean;
    image?: never;
};
declare type TagProps = TagPropsWithIcon | TagPropsWithImage;
declare type StyledTagProps = TagPropsBase & {
    image: string | boolean;
    icon?: boolean;
};
/**
 * Tag component
 *
 * @description for categorizing or markup.
 */
declare const Tag: ({ label, style, removable, onRemove, image, icon, ...args }: TagProps) => JSX.Element;

declare type TextareaProps = {
    /**
     *
     */
    label?: string;
    /**
     *
     */
    hint?: string | string[];
    /**
     *
     */
    error?: string | string[];
    css?: CSS;
} & TextareaAutosizeProps;
declare const Textarea: React__default.ForwardRefExoticComponent<{
    /**
     *
     */
    label?: string | undefined;
    /**
     *
     */
    hint?: string | string[] | undefined;
    /**
     *
     */
    error?: string | string[] | undefined;
    css?: CSS | undefined;
} & TextareaAutosizeProps & React__default.RefAttributes<HTMLTextAreaElement>>;

declare type TextProps = {
    /**
     * fontSize of the text
     *
     * @default "md"
     */
    size?: VariantProps<typeof Text>['size'];
    /**
     * fontWeight of the text
     *
     * @default "normal"
     */
    weight?: VariantProps<typeof Text>['weight'];
};
declare const Text: _stitches_react_types_styled_component.StyledComponent<"span", {
    size?: "sm" | "md" | "lg" | "xl" | "2xl" | "xs" | "3xl" | "4xl" | undefined;
    weight?: "normal" | "medium" | "thin" | "bold" | "extrabold" | undefined;
}, {
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
}, _stitches_react_types_css_util.CSS<{
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
}, {
    colors: {
        white: string;
        black: string;
        'pink-500': string;
        'pink-600': string;
        'pink-700': string;
        'grey-400': string;
        'grey-600': string;
        'grey-700': string;
        'grey-800': string;
        'grey-900': string;
        'red-500': string;
        'red-900': string;
        'teal-500': string;
        'yellow-500': string;
        'yellow-900': string;
        'green-500': string;
        'green-900': string;
    };
    transitions: {
        fast: string;
    };
    fonts: {
        system: string;
    };
    fontSizes: {
        '3xs': string;
        '2xs': string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
    };
    fontWeights: {
        thin: number;
        normal: number;
        medium: number;
        bold: number;
        extrabold: number;
    };
    radii: {
        full: string;
        half: string;
        sm: string;
        md: string;
    };
    sizes: {
        full: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    space: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        13: string;
        14: string;
        15: string;
        16: string;
        17: string;
        18: string;
        19: string;
        20: string;
    };
    zIndices: {
        hide: number;
        auto: string;
        base: number;
        docked: number;
        dropdown: number;
        sticky: number;
        banner: number;
        overlay: number;
        modal: number;
        popover: number;
        skipLink: number;
        toast: number;
        tooltip: number;
    };
    breakpoints: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
}, _stitches_react_types_config.DefaultThemeMap, {
    m: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        margin: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mt: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginTop: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mr: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginRight: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mb: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginBottom: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    ml: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginLeft: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mx: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginLeft: {
            readonly [$$PropertyValue]: "margin";
        };
        marginRight: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    my: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginTop: {
            readonly [$$PropertyValue]: "margin";
        };
        marginBottom: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    p: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        padding: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pt: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingTop: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pr: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingRight: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pb: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingBottom: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pl: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    px: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "padding";
        };
        paddingRight: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    py: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingTop: {
            readonly [$$PropertyValue]: "padding";
        };
        paddingBottom: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    bg: (value: {
        readonly [$$PropertyValue]: "background";
    }) => {
        background: {
            readonly [$$PropertyValue]: "background";
        };
    };
    size: (value: {
        readonly [$$PropertyValue]: "width";
    } | {
        readonly [$$PropertyValue]: "height";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
        } | {
            readonly [$$PropertyValue]: "height";
        };
        height: {
            readonly [$$PropertyValue]: "width";
        } | {
            readonly [$$PropertyValue]: "height";
        };
    };
    br: (value: {
        readonly [$$PropertyValue]: "borderRadius";
    }) => {
        borderRadius: {
            readonly [$$PropertyValue]: "borderRadius";
        };
    };
    bs: (value: {
        readonly [$$PropertyValue]: "boxShadow";
    }) => {
        boxShadow: {
            readonly [$$PropertyValue]: "boxShadow";
        };
    };
    justify: (value: {
        readonly [$$PropertyValue]: "justifyContent";
    }) => {
        justifyContent: {
            readonly [$$PropertyValue]: "justifyContent";
        };
    };
    align: (value: {
        readonly [$$PropertyValue]: "alignItems";
    }) => {
        alignItems: {
            readonly [$$PropertyValue]: "alignItems";
        };
    };
    h: (value: {
        readonly [$$PropertyValue]: "height";
    }) => {
        height: {
            readonly [$$PropertyValue]: "height";
        };
    };
    maxH: (value: {
        readonly [$$PropertyValue]: "maxHeight";
    }) => {
        maxHeight: {
            readonly [$$PropertyValue]: "maxHeight";
        };
    };
    minH: (value: {
        readonly [$$PropertyValue]: "minHeight";
    }) => {
        minHeight: {
            readonly [$$PropertyValue]: "minHeight";
        };
    };
    w: (value: {
        readonly [$$PropertyValue]: "width";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
        };
    };
    maxW: (value: {
        readonly [$$PropertyValue]: "maxWidth";
    }) => {
        maxWidth: {
            readonly [$$PropertyValue]: "maxWidth";
        };
    };
    minW: (value: {
        readonly [$$PropertyValue]: "minWidth";
    }) => {
        minWidth: {
            readonly [$$PropertyValue]: "minWidth";
        };
    };
    d: (value: {
        readonly [$$PropertyValue]: "display";
    }) => {
        display: {
            readonly [$$PropertyValue]: "display";
        };
    };
    columns: (value: {
        readonly [$$PropertyValue]: "gridTemplateColumns";
    }) => {
        gridTemplateColumns: {
            readonly [$$PropertyValue]: "gridTemplateColumns";
        };
    };
    rows: (value: {
        readonly [$$PropertyValue]: "gridTemplateRows";
    }) => {
        gridTemplateRows: {
            readonly [$$PropertyValue]: "gridTemplateRows";
        };
    };
}>>;

declare type HeadingProps = {
    /**
     * The text to display in the heading.
     */
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    /**
     * Heading text
     */
    children?: React__default.ReactNode;
} & TextProps;
/**
 * Heading component
 *
 * @description Headings are used for rendering headlines. It renders an h2 by default.
 */
declare const Heading: ({ level, children, ...props }: HeadingProps) => JSX.Element;

declare type PageHeadingProps = {
    /**
     *
     */
    title: string;
    /**
     *
     */
    description?: string;
    /**
     *
     */
    children?: React__default.ReactNode;
};
/**
 * PageHeading component
 *
 * @description Headings are used for rendering headlines.
 */
declare const PageHeading: ({ description, children, title, ...args }: PageHeadingProps) => JSX.Element;

declare type PaginationProps = {
    /**
     * The total number of pages.
     */
    totalCount: number;
    /**
     * The size of the pagination.
     */
    pageSize: number;
    /**
     * The current page.
     */
    currentPage: number;
    /**
     * The React state hook to update the current page.
     */
    setCurrentPage: (page: number) => void;
    /**
     * A boolean to indicate if we can go to the previous page.
     */
    canPrevious: boolean;
    /**
     * A boolean to indicate if we can go to the next page.
     */
    canNext: boolean;
    /**
     *  Number of pages that will show in the component.
     *  @default 5
     */
    limit?: number;
    /**
     * A boolean to indicate if the component should have the go to first/go to last buttons.
     */
    quickJumpButton?: boolean;
};
/**
 * Pagination component
 *
 * @description enables the user to select a specific page from a range of pages.
 */
declare const Pagination: ({ quickJumpButton, currentPage, setCurrentPage, limit, ...args }: PaginationProps) => JSX.Element;

declare type StackProps = {
    /**
     * Stack children direction
     * @default "row"
     */
    direction?: VariantProps<typeof Stack>['direction'];
    /**
     * CSS properties
     */
    css?: CSS;
} & HTMLAttributes<HTMLDivElement>;
/**
 * Stack component
 *
 * @description Stack component is used to display a group of elements in a vertical or horizontal direction.
 */
declare const Stack: _stitches_react_types_styled_component.StyledComponent<"div", {
    direction?: "column" | "column-reverse" | "row" | "row-reverse" | undefined;
}, {
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
}, _stitches_react_types_css_util.CSS<{
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
}, {
    colors: {
        white: string;
        black: string;
        'pink-500': string;
        'pink-600': string;
        'pink-700': string;
        'grey-400': string;
        'grey-600': string;
        'grey-700': string;
        'grey-800': string;
        'grey-900': string;
        'red-500': string;
        'red-900': string;
        'teal-500': string;
        'yellow-500': string;
        'yellow-900': string;
        'green-500': string;
        'green-900': string;
    };
    transitions: {
        fast: string;
    };
    fonts: {
        system: string;
    };
    fontSizes: {
        '3xs': string;
        '2xs': string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
    };
    fontWeights: {
        thin: number;
        normal: number;
        medium: number;
        bold: number;
        extrabold: number;
    };
    radii: {
        full: string;
        half: string;
        sm: string;
        md: string;
    };
    sizes: {
        full: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    space: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        13: string;
        14: string;
        15: string;
        16: string;
        17: string;
        18: string;
        19: string;
        20: string;
    };
    zIndices: {
        hide: number;
        auto: string;
        base: number;
        docked: number;
        dropdown: number;
        sticky: number;
        banner: number;
        overlay: number;
        modal: number;
        popover: number;
        skipLink: number;
        toast: number;
        tooltip: number;
    };
    breakpoints: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
}, _stitches_react_types_config.DefaultThemeMap, {
    m: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        margin: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mt: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginTop: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mr: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginRight: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mb: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginBottom: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    ml: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginLeft: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mx: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginLeft: {
            readonly [$$PropertyValue]: "margin";
        };
        marginRight: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    my: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginTop: {
            readonly [$$PropertyValue]: "margin";
        };
        marginBottom: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    p: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        padding: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pt: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingTop: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pr: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingRight: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pb: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingBottom: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pl: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    px: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "padding";
        };
        paddingRight: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    py: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingTop: {
            readonly [$$PropertyValue]: "padding";
        };
        paddingBottom: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    bg: (value: {
        readonly [$$PropertyValue]: "background";
    }) => {
        background: {
            readonly [$$PropertyValue]: "background";
        };
    };
    size: (value: {
        readonly [$$PropertyValue]: "width";
    } | {
        readonly [$$PropertyValue]: "height";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
        } | {
            readonly [$$PropertyValue]: "height";
        };
        height: {
            readonly [$$PropertyValue]: "width";
        } | {
            readonly [$$PropertyValue]: "height";
        };
    };
    br: (value: {
        readonly [$$PropertyValue]: "borderRadius";
    }) => {
        borderRadius: {
            readonly [$$PropertyValue]: "borderRadius";
        };
    };
    bs: (value: {
        readonly [$$PropertyValue]: "boxShadow";
    }) => {
        boxShadow: {
            readonly [$$PropertyValue]: "boxShadow";
        };
    };
    justify: (value: {
        readonly [$$PropertyValue]: "justifyContent";
    }) => {
        justifyContent: {
            readonly [$$PropertyValue]: "justifyContent";
        };
    };
    align: (value: {
        readonly [$$PropertyValue]: "alignItems";
    }) => {
        alignItems: {
            readonly [$$PropertyValue]: "alignItems";
        };
    };
    h: (value: {
        readonly [$$PropertyValue]: "height";
    }) => {
        height: {
            readonly [$$PropertyValue]: "height";
        };
    };
    maxH: (value: {
        readonly [$$PropertyValue]: "maxHeight";
    }) => {
        maxHeight: {
            readonly [$$PropertyValue]: "maxHeight";
        };
    };
    minH: (value: {
        readonly [$$PropertyValue]: "minHeight";
    }) => {
        minHeight: {
            readonly [$$PropertyValue]: "minHeight";
        };
    };
    w: (value: {
        readonly [$$PropertyValue]: "width";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
        };
    };
    maxW: (value: {
        readonly [$$PropertyValue]: "maxWidth";
    }) => {
        maxWidth: {
            readonly [$$PropertyValue]: "maxWidth";
        };
    };
    minW: (value: {
        readonly [$$PropertyValue]: "minWidth";
    }) => {
        minWidth: {
            readonly [$$PropertyValue]: "minWidth";
        };
    };
    d: (value: {
        readonly [$$PropertyValue]: "display";
    }) => {
        display: {
            readonly [$$PropertyValue]: "display";
        };
    };
    columns: (value: {
        readonly [$$PropertyValue]: "gridTemplateColumns";
    }) => {
        gridTemplateColumns: {
            readonly [$$PropertyValue]: "gridTemplateColumns";
        };
    };
    rows: (value: {
        readonly [$$PropertyValue]: "gridTemplateRows";
    }) => {
        gridTemplateRows: {
            readonly [$$PropertyValue]: "gridTemplateRows";
        };
    };
}>>;

declare const VisuallyHidden: ({ children }: VisuallyHiddenProps) => JSX.Element;

declare const Wrapper: _stitches_react_types_styled_component.StyledComponent<"div", {
    size?: "sm" | "md" | undefined;
}, {
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
}, _stitches_react_types_css_util.CSS<{
    sm: "(min-width: 576px)";
    md: "(min-width: 768px)";
    lg: "(min-width: 992px)";
    xl: "(min-width: 1200px)";
    '2xl': "(min-width: 1400px)";
}, {
    colors: {
        white: string;
        black: string;
        'pink-500': string;
        'pink-600': string;
        'pink-700': string;
        'grey-400': string;
        'grey-600': string;
        'grey-700': string;
        'grey-800': string;
        'grey-900': string;
        'red-500': string;
        'red-900': string;
        'teal-500': string;
        'yellow-500': string;
        'yellow-900': string;
        'green-500': string;
        'green-900': string;
    };
    transitions: {
        fast: string;
    };
    fonts: {
        system: string;
    };
    fontSizes: {
        '3xs': string;
        '2xs': string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
    };
    fontWeights: {
        thin: number;
        normal: number;
        medium: number;
        bold: number;
        extrabold: number;
    };
    radii: {
        full: string;
        half: string;
        sm: string;
        md: string;
    };
    sizes: {
        full: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    space: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        13: string;
        14: string;
        15: string;
        16: string;
        17: string;
        18: string;
        19: string;
        20: string;
    };
    zIndices: {
        hide: number;
        auto: string;
        base: number;
        docked: number;
        dropdown: number;
        sticky: number;
        banner: number;
        overlay: number;
        modal: number;
        popover: number;
        skipLink: number;
        toast: number;
        tooltip: number;
    };
    breakpoints: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
}, _stitches_react_types_config.DefaultThemeMap, {
    m: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        margin: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mt: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginTop: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mr: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginRight: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mb: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginBottom: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    ml: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginLeft: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    mx: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginLeft: {
            readonly [$$PropertyValue]: "margin";
        };
        marginRight: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    my: (value: {
        readonly [$$PropertyValue]: "margin";
    }) => {
        marginTop: {
            readonly [$$PropertyValue]: "margin";
        };
        marginBottom: {
            readonly [$$PropertyValue]: "margin";
        };
    };
    p: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        padding: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pt: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingTop: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pr: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingRight: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pb: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingBottom: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    pl: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    px: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingLeft: {
            readonly [$$PropertyValue]: "padding";
        };
        paddingRight: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    py: (value: {
        readonly [$$PropertyValue]: "padding";
    }) => {
        paddingTop: {
            readonly [$$PropertyValue]: "padding";
        };
        paddingBottom: {
            readonly [$$PropertyValue]: "padding";
        };
    };
    bg: (value: {
        readonly [$$PropertyValue]: "background";
    }) => {
        background: {
            readonly [$$PropertyValue]: "background";
        };
    };
    size: (value: {
        readonly [$$PropertyValue]: "width";
    } | {
        readonly [$$PropertyValue]: "height";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
        } | {
            readonly [$$PropertyValue]: "height";
        };
        height: {
            readonly [$$PropertyValue]: "width";
        } | {
            readonly [$$PropertyValue]: "height";
        };
    };
    br: (value: {
        readonly [$$PropertyValue]: "borderRadius";
    }) => {
        borderRadius: {
            readonly [$$PropertyValue]: "borderRadius";
        };
    };
    bs: (value: {
        readonly [$$PropertyValue]: "boxShadow";
    }) => {
        boxShadow: {
            readonly [$$PropertyValue]: "boxShadow";
        };
    };
    justify: (value: {
        readonly [$$PropertyValue]: "justifyContent";
    }) => {
        justifyContent: {
            readonly [$$PropertyValue]: "justifyContent";
        };
    };
    align: (value: {
        readonly [$$PropertyValue]: "alignItems";
    }) => {
        alignItems: {
            readonly [$$PropertyValue]: "alignItems";
        };
    };
    h: (value: {
        readonly [$$PropertyValue]: "height";
    }) => {
        height: {
            readonly [$$PropertyValue]: "height";
        };
    };
    maxH: (value: {
        readonly [$$PropertyValue]: "maxHeight";
    }) => {
        maxHeight: {
            readonly [$$PropertyValue]: "maxHeight";
        };
    };
    minH: (value: {
        readonly [$$PropertyValue]: "minHeight";
    }) => {
        minHeight: {
            readonly [$$PropertyValue]: "minHeight";
        };
    };
    w: (value: {
        readonly [$$PropertyValue]: "width";
    }) => {
        width: {
            readonly [$$PropertyValue]: "width";
        };
    };
    maxW: (value: {
        readonly [$$PropertyValue]: "maxWidth";
    }) => {
        maxWidth: {
            readonly [$$PropertyValue]: "maxWidth";
        };
    };
    minW: (value: {
        readonly [$$PropertyValue]: "minWidth";
    }) => {
        minWidth: {
            readonly [$$PropertyValue]: "minWidth";
        };
    };
    d: (value: {
        readonly [$$PropertyValue]: "display";
    }) => {
        display: {
            readonly [$$PropertyValue]: "display";
        };
    };
    columns: (value: {
        readonly [$$PropertyValue]: "gridTemplateColumns";
    }) => {
        gridTemplateColumns: {
            readonly [$$PropertyValue]: "gridTemplateColumns";
        };
    };
    rows: (value: {
        readonly [$$PropertyValue]: "gridTemplateRows";
    }) => {
        gridTemplateRows: {
            readonly [$$PropertyValue]: "gridTemplateRows";
        };
    };
}>>;

declare type CountdownProps = {
    /**
     * Countdown size
     *
     * @default 'md'
     */
    size?: VariantProps<typeof Wrapper>['size'];
    /**
     * time in unix timestamp
     *
     * @example 1637680036
     */
    endDate: number;
    /**
     * CSS properties
     */
    css?: CSS;
    /**
     * The time in milliseconds to count down from.
     *
     * @example HH:mm:ss
     */
    onFinish: () => void;
} & HTMLAttributes<HTMLDivElement>;
declare const Countdown: ({ endDate, onFinish, ...props }: CountdownProps) => JSX.Element;

/**
 * React hook that tracks state of a CSS media query
 *
 * @param query the media query to match
 */
declare const useMediaQuery: (query: string) => boolean;

declare type useBreakpointProps = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
/**
 * React hook that tracks state of a CSS media query
 *
 * @param query 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
 */
declare const useBreakpoint: (query?: useBreakpointProps) => boolean;

declare const IdProvider: React.FC;
declare function useId(prefix?: string): string;

declare type Theme = typeof theme;
declare const theme: {
    colors: {
        white: string;
        black: string;
        'pink-500': string;
        'pink-600': string;
        'pink-700': string;
        'grey-400': string;
        'grey-600': string;
        'grey-700': string;
        'grey-800': string;
        'grey-900': string;
        'red-500': string;
        'red-900': string;
        'teal-500': string;
        'yellow-500': string;
        'yellow-900': string;
        'green-500': string;
        'green-900': string;
    };
    transitions: {
        fast: string;
    };
    fonts: {
        system: string;
    };
    fontSizes: {
        '3xs': string;
        '2xs': string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
    };
    fontWeights: {
        thin: number;
        normal: number;
        medium: number;
        bold: number;
        extrabold: number;
    };
    radii: {
        full: string;
        half: string;
        sm: string;
        md: string;
    };
    sizes: {
        full: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
    space: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        13: string;
        14: string;
        15: string;
        16: string;
        17: string;
        18: string;
        19: string;
        20: string;
    };
    zIndices: {
        hide: number;
        auto: string;
        base: number;
        docked: number;
        dropdown: number;
        sticky: number;
        banner: number;
        overlay: number;
        modal: number;
        popover: number;
        skipLink: number;
        toast: number;
        tooltip: number;
    };
    breakpoints: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
    };
};

export { Alert, AlertProps, Avatar, AvatarProps, Badge, BadgeProps, BaseCarousel, BaseCarouselProps, BaseCarouselSettings, Box, BoxProps, Breadcrumb, BreadcrumbItemProps, BreadcrumbProps, Button, ButtonProps, CSS, Carousel, CarouselProps, Character, CharacterProps, Checkbox, CheckboxProps, ComponentProps, Container, ContainerProps, ContentHeading, ContentHeadingProps, Countdown, CountdownProps, Flex, FlexProps, Grid, GridProps, Heading, HeadingProps, IdProvider, Image, ImageProps, Input, InputProps, Label, LabelProps, Logo, LogoProps, PageHeading, PageHeadingProps, Pagination, PaginationProps, RadioGroup, RadioGroupProps, RadioItem, RadioItemProps, Select, SelectItemProps, SelectProps, Spinner, SpinnerProps, Stack, StackProps, Stepper, StepperProps, StyledTagProps, Tab, TabContent, TabContentProps, TabItem, TabItemProps, TabList, TabListProps, TabProps, Tag, TagProps, TagPropsBase, Text, TextProps, Textarea, TextareaProps, Theme, Toggle, ToggleProps, VariantProps, VisuallyHidden, config, css, getCssText, globalCss, keyframes, styled, theme, useBreakpoint, useId, useMediaQuery };
