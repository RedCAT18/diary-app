import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.666,
  googleFont: [
    {
      name: 'Raleway',
      styles: ['200', '400']
    }
  ],
  headerFontFamily: [],
  bodyFontFamily: ['Raleway', 'sans-serif']
});

typography.injectStyles();

export default typography;
