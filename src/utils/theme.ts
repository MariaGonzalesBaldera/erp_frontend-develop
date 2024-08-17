import {
	createTheme,
	PaletteOptions,
	ThemeOptions,
	useTheme,
} from "@mui/material";

import { TypographyOptions } from "@mui/material/styles/createTypography";

type CustomPaletteOptions = {
	main: string;
};

declare module "@mui/material/styles/createPalette" {
	interface Palette {
		surface: CustomPaletteOptions;
		accent: CustomPaletteOptions;
		icon: CustomPaletteOptions;
		outline: CustomPaletteOptions;
		menu: CustomPaletteOptions;
		textMain: CustomPaletteOptions;
		textPrimary: CustomPaletteOptions;
		textSecondary: CustomPaletteOptions;
	}
	interface PaletteOptions {
		surface: CustomPaletteOptions;
		accent: CustomPaletteOptions;
		icon: CustomPaletteOptions;
		outline: CustomPaletteOptions;
		menu: CustomPaletteOptions;
		textMain: CustomPaletteOptions;
		textPrimary: CustomPaletteOptions;
		textSecondary: CustomPaletteOptions;
	}
}

interface ExtendedPaletteOptions extends PaletteOptions {
	surface: CustomPaletteOptions;
	accent: CustomPaletteOptions;
	icon: CustomPaletteOptions;
	outline: CustomPaletteOptions;
	menu: CustomPaletteOptions;
	textMain: CustomPaletteOptions;
	textPrimary: CustomPaletteOptions;
	textSecondary: CustomPaletteOptions;
}

declare module "@mui/material/Typography" {
	interface TypographyPropsVariantOverrides {
		display: true;
		headlineLarge: true;
		headlineMedium: true;
		headlineSmall: true;
		titleMedium: true;
		titleSmall: true;
		bodyLarge: true;
		bodyLargeBold: true;
		bodyMedium: true;
		bodySmall: true;
		labelLarge: true;
		labelMedium: true;
		labelSmall: true;
		titleTableHeader: true;
		bodyOptionHelp: true;
		titleSmallOptionHelp: true;
	}
}

interface ExtendedTypographyOptions extends TypographyOptions {
	display?: React.CSSProperties;
	headlineLarge?: React.CSSProperties;
	headlineMedium?: React.CSSProperties;
	headlineSmall?: React.CSSProperties;
	titleMedium?: React.CSSProperties;
	titleSmall?: React.CSSProperties;
	bodyLarge?: React.CSSProperties;
	bodyLargeBold?: React.CSSProperties;
	bodyMedium?: React.CSSProperties;
	bodySmall?: React.CSSProperties;
	labelLarge?: React.CSSProperties;
	labelMedium?: React.CSSProperties;
	labelSmall?: React.CSSProperties;
	titleTableHeader?: React.CSSProperties;
	bodyOptionHelp?: React.CSSProperties;
	titleSmallOptionHelp?: React.CSSProperties;
}

const themeNew = createTheme({
	palette: {
		primary: {
			main:"#1e1b4b",
		},

		secondary: {
			main: "#c7d2fe"
		},
		error: {
			main: "#AB0707",
			light: "#FCD6D0",
			dark: "#AB0707",
		},
		warning: {
			main: "#F8955B",
			light: "#FFE7E0",
			dark: "#F26716",
		},
		surface: {
			main: "#767582",
			light: "#FFFFFF",
			dark: "#E9D0F4",
		},
		accent: {
			main: "#52197B",
		},
		icon: {
			main: "#ADA6B3",
			light: "#D9D1DD",
			dark: "#4C4C56",
			dark2: "#52197B",
		},
		outline: {
			main: "#D9D1DD",
			light: "#E4DEE9",
			dark: "#ADA6B3",
			dark2: "#4C4C56",
		},
		menu: {
			main: "#4529d1",
		},
		textMain: {
			main: "#f8f7fb",
			main2: "#79797D",
			main3: "#BAA3CA",
			light: "#FFFFFF",
			dark: "#edefff",
			light2: "#FCFCFC",
			dark2: "#1F2026",
			light3: "#F8F8F8",
			dark3: "#F26716",
			light4: "#F5F5F5",
			dark4: "#005757",
		},
		textPrimary: {
			main: "#1F2026",
			light: "#1F2026",
		},
		textSecondary: {
			main: "#79797D",
			light: "#BAA3CA",
		},
	} as ExtendedPaletteOptions,
	typography: {
		display: {
			fontWeight: "900",
			fontSize: "4rem",
			lineHeight: "5.5rem",
		},
		headlineLarge: {
			fontWeight: "bold",
			fontSize: "3rem",
			lineHeight: "4rem",
		},
		headlineMedium: {
			fontWeight: "bold",
			fontSize: "2rem",
			lineHeight: "2.5rem",
		},
		headlineSmall: {
			fontWeight: "bold",
			fontSize: "1.5rem",
			lineHeight: "2rem",
		},
		titleMedium: {
			fontWeight: "900",
			fontSize: "1.25rem", // 20px
			lineHeight: "1.5rem",
		},
		titleSmall: {
			fontWeight: "700",
			fontSize: "18px",
			lineHeight: "1.25rem",
		},
		titleTableHeader: {
			fontWeight: "600",
			fontSize: "14px",
			lineHeight: "1.5rem",
		},
		titleSmallOptionHelp: {
			fontWeight: "700",
			fontSize: "18px",
			lineHeight: "1.5rem",
		},
		bodyLarge: {
			fontWeight: "normal",
			fontSize: "1rem", //16px
			lineHeight: "1.5rem",
		},
		bodyLargeBold: {
			fontWeight: "bold",
			fontSize: "1rem", //16px
			lineHeight: "1.5rem",
		},
		bodyMedium: {
			fontWeight: "normal",
			fontSize: "0.875rem",
			lineHeight: "1.25rem",
		},
		bodySmall: {
			fontWeight: "normal",
			fontSize: "0.75rem",
			lineHeight: "1rem",
		},
		bodyOptionHelp: {
			fontWeight: "normal",
			fontSize: "1rem",
			lineHeight: "1.5rem",
		},
		labelLarge: {
			fontWeight: "300",
			fontSize: "1rem",
			lineHeight: "1.5rem",
		},
		labelMedium: {
			fontWeight: "300",
			fontSize: "0.75rem",
			lineHeight: "1.5rem",
		},
		labelSmall: {
			fontWeight: "300",
			fontSize: "11px",
			lineHeight: "1rem",
		},
	} as ExtendedTypographyOptions,
} as ThemeOptions);

export default themeNew;

export type AppTheme = typeof themeNew;

export const useAppTheme = () => useTheme<AppTheme>();
