import React from 'react';

const Home = () => {
	return (
		<div className="border-2 border-green-500 w-full h-full   ">
			{/* <h1>
				Tailwind CSS home page v3.2.7 Tailwind CSS v3.2 Dynamic breakpoints,
				multi-config, container queries, and more Docs Components Blog
				ShowcaseNew Theme Tailwind CSS on GitHub Quick search... Ctrl K
				Documentation Components Templates Screencasts Playground Resources
				Community Getting Started Installation Editor Setup Using with
				Preprocessors Optimizing for Production Browser Support Upgrade Guide
				Core Concepts Utility-First Fundamentals Hover, Focus, and Other States
				Responsive Design Dark Mode Reusing Styles Adding Custom Styles
				Functions & Directives Customization Configuration Content Theme Screens
				Colors Spacing Plugins Presets Base Styles Preflight Layout Aspect Ratio
				Container Columns Break After Break Before Break Inside Box Decoration
				Break Box Sizing Display Floats Clear Isolation Object Fit Object
				Position Overflow Overscroll Behavior Position Top / Right / Bottom /
				Left Visibility Z-Index Flexbox & Grid Flex Basis Flex Direction Flex
				Wrap Flex Flex Grow Flex Shrink Order Grid Template Columns Grid Column
				Start / End Grid Template Rows Grid Row Start / End Grid Auto Flow Grid
				Auto Columns Grid Auto Rows Gap Justify Content Justify Items Justify
				Self Align Content Align Items Align Self Place Content Place Items
				Place Self Spacing Padding Margin Space Between Sizing Width Min-Width
				Max-Width Height Min-Height Max-Height Typography Font Family Font Size
				Font Smoothing Font Style Font Weight Font Variant Numeric Letter
				Spacing Line Height List Style Type List Style Position Text Align Text
				Color Text Decoration Text Decoration Color Text Decoration Style Text
				Decoration Thickness Text Underline Offset Text Transform Text Overflow
				Text Indent Vertical Align Whitespace Word Break Content Backgrounds
				Background Attachment Background Clip Background Color Background Origin
				Background Position Background Repeat Background Size Background Image
				Gradient Color Stops Borders Border Radius Border Width Border Color
				Border Style Divide Width Divide Color Divide Style Outline Width
				Outline Color Outline Style Outline Offset Ring Width Ring Color Ring
				Offset Width Ring Offset Color Effects Box Shadow Box Shadow Color
				Opacity Mix Blend Mode Background Blend Mode Filters Blur Brightness
				Contrast Drop Shadow Grayscale Hue Rotate Invert Saturate Sepia Backdrop
				Blur Backdrop Brightness Backdrop Contrast Backdrop Grayscale Backdrop
				Hue Rotate Backdrop Invert Backdrop Opacity Backdrop Saturate Backdrop
				Sepia Tables Border Collapse Border Spacing Table Layout Transitions &
				Animation Transition Property Transition Duration Transition Timing
				Function Transition Delay Animation Transforms Scale Rotate Translate
				Skew Transform Origin Interactivity Accent Color Appearance Cursor Caret
				Color Pointer Events Resize Scroll Behavior Scroll Margin Scroll Padding
				Scroll Snap Align Scroll Snap Stop Scroll Snap Type Touch Action User
				Select Will Change SVG Fill Stroke Stroke Width Accessibility Screen
				Readers Official Plugins Typography Forms Aspect Ratio Line Clamp
				Container Queries Borders Border Width Utilities for controlling the
				width of an element's borders. ​ Quick reference Class Properties
				border-0 border-width: 0px; border-2 border-width: 2px; border-4
				border-width: 4px; border-8 border-width: 8px; border border-width: 1px;
				border-x-0 border-left-width: 0px; border-right-width: 0px; border-x-2
				border-left-width: 2px; border-right-width: 2px; border-x-4
				border-left-width: 4px; border-right-width: 4px; border-x-8
				border-left-width: 8px; border-right-width: 8px; border-x
				border-left-width: 1px; border-right-width: 1px; border-y-0
				border-top-width: 0px; border-bottom-width: 0px; border-y-2
				border-top-width: 2px; border-bottom-width: 2px; border-y-4
				border-top-width: 4px; border-bottom-width: 4px; border-y-8
				border-top-width: 8px; border-bottom-width: 8px; border-y
				border-top-width: 1px; border-bottom-width: 1px; border-t-0
				border-top-width: 0px; border-t-2 border-top-width: 2px; border-t-4
				border-top-width: 4px; border-t-8 border-top-width: 8px; border-t
				border-top-width: 1px; border-r-0 border-right-width: 0px; border-r-2
				border-right-width: 2px; border-r-4 border-right-width: 4px; border-r-8
				border-right-width: 8px; border-r border-right-width: 1px; border-b-0
				border-bottom-width: 0px; border-b-2 border-bottom-width: 2px;
				border-b-4 border-bottom-width: 4px; border-b-8 border-bottom-width:
				8px; border-b border-bottom-width: 1px; border-l-0 border-left-width:
				0px; border-l-2 border-left-width: 2px; border-l-4 border-left-width:
				4px; border-l-8 border-left-width: 8px; border-l border-left-width: 1px;
				​ Basic usage ​ All sides Use the border, border-0, border-2, border-4,
				or border-8 utilities to set the border width for all sides of an
				element. border border-2 border-4 border-8 Learn more in the Divide
				Width and Divide Color documentation. ​ Using without Preflight If
				you’ve disabled Preflight in your project, you’ll need to include a
				border style utility any time you use one of the border-width utilities
				for the border to actually take effect: This is because browsers set the
				border-style of most elements to none by default, so adding a
				border-width on its own isn’t enough to render a border. Preflight
				applies a global border reset that sets border-style to solid and
				border-width to 0, which is what makes it possible to add a border to an
				element using just a border-width utility in projects using Preflight. ​
				Applying conditionally ​ Hover, focus, and other states Tailwind lets
				you conditionally apply utility classes in different states using
				variant modifiers. For example, use hover:border-t-4 to only apply the
				border-t-4 utility on hover. For a complete list of all available state
				modifiers, check out the Hover, Focus, & Other States documentation. ​
				Breakpoints and media queries You can also use variant modifiers to
				target media queries like responsive breakpoints, dark mode,
				prefers-reduced-motion, and more. For example, use md:border-t-4 to
				apply the border-t-4 utility at only medium screen sizes and above. To
				learn more, check out the documentation on Responsive Design, Dark Mode
				and other media query modifiers. ​ Using custom values ​ Customizing
				your theme By default, Tailwind provides five border-width utilities,
				and the same number of utilities per side (horizontal, vertical, top,
				right, bottom, and left). You change, add, or remove these by editing
				the theme.borderWidth section of your Tailwind config. Learn more about
				customizing the default theme in the theme customization documentation.
				​ Arbitrary values If you need to use a one-off border value that
				doesn’t make sense to include in your theme, use square brackets to
				generate a property on the fly using any arbitrary value. Learn more
				about arbitrary value support in the arbitrary values documentation.
				Border Radius Border Color Copyright © 2023 Tailwind Labs Inc. Trademark
				Policy Edit this page on GitHub On this page Quick reference Basic usage
				All sides Individual sides Horizontal and vertical sides Between
				elements Using without Preflight Applying conditionally Hover, focus,
				and other states Breakpoints and media queries Using custom values
				Customizing your theme Arbitrary values Refactoring UI by Adam Wathan
				and Steve Schoger From the creators of Tailwind CSS Make your ideas look
				awesome, without relying on a designer. “This is the survival kit I wish
				I had when I started building apps.” Derrick Reimer, SavvyCal
			</h1> */}
		</div>
	);
};

export default Home;
