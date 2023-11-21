import { createTheme } from "@mui/material";

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    headline: true;
    headline2: true;
    searchBtnLabel: true;
    themeBtnLabel: true;
  }
}

const CustomTheme = createTheme({
	components: {
		/* ==================== TYPOGRAPHY ==================== */
		MuiTypography: {
			defaultProps: {
				// The props to change the default for.
				fontFamily: ['Roboto', 'sans-serif'].join(','),
				fontStyle: 'normal',
			},
			variants: [
				{
					props: { variant: 'headline' },
					style: {
						fontFamily: "Roboto",
						fontSize: "24px",
						fontStyle: "normal",
						fontWeight: 600,
					},
				},
				{
					props: { variant: 'headline2' },
					style: {
						fontFamily: "Roboto",
						fontSize: "22px",
						fontStyle: "normal",
						fontWeight: 600,
					},
				},
				{
					props: { variant: 'searchBtnLabel' },
					style: {
						fontFamily: "Roboto",
						fontSize: "14px",
						fontStyle: "normal",
						fontWeight: 400,
						textTransform: "none",
					},
				},
				{
					props: { variant: 'themeBtnLabel' },
					style: {
						fontFamily: "Roboto",
						fontSize: "14px",
						fontStyle: "normal",
						fontWeight: 400,
						textTransform: "uppercase",
					},
				},
			],
		},
	}
});

export default CustomTheme;
