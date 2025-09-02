<script lang="ts">
  import Prism from 'svelte-prism';
</script>

<h1>Fonts</h1>

<h2>Font families</h2>

<Prism language="css">
  {`
  --fontfamily--primary: "Breaking", var(--fontfamily--secondary);
  --fontfamily--secondary: "Breaking Text", Arial, Helvetica, sans-serif;
  `}
</Prism>

<h2>Fontsizes</h2>

<Prism language="css">
  {`
  --fs-rem-large: 1.125rem; /* 18px */
  --fs-rem-medium: 1rem; /* 16px */
  --fs-rem-small: .875rem; /* 14px */
  --fs-rem-xlarge: 1.25rem; /* 20px */
  --fs-rem-xsmall: .75rem; /* 12px */
  --fs-rem-xxlarge: 1.5rem; /* 24px */
  --fs-rem-xxsmall: .625rem; /* 10px */
  --fs-rem-xxxlarge: 1.75rem; /* 28px */
  --fs-rem-xxxsmall: .4375rem; /* 7px */
  --fs-rem-xxxxlarge: 2.5rem; /* 40px */
  --fs-rem-xxxxxlarge: 4.5rem; /* 72px */
  --fs-large: var(--fs-rem-large);
  --fs-medium: var(--fs-rem-medium);
  --fs-small: var(--fs-rem-small);
  --fs-xlarge: var(--fs-rem-xlarge);
  --fs-xsmall: var(--fs-rem-xsmall);
  --fs-xxlarge: var(--fs-rem-xxlarge);
  --fs-xxsmall: var(--fs-rem-xxsmall);
  --fs-xxxlarge: var(--fs-rem-xxxlarge);
  --fs-xxxxlarge: var(--fs-rem-xxxxlarge);
  --fs-xxxxxlarge: var(--fs-rem-xxxxxlarge);
  `}
</Prism>

<h2>Aliased Fontsizes</h2>

<Prism language="css">
  {`
  --fs-ads: var(--fs-xxsmall);
  --fs-bodytext: var(--fs-large);
  --fs-caption: var(--fs-small);
  --fs-quote: var(--fs-xxlarge);
  --fs-showmore: var(--fs-medium);
  --fs-subtitle: var(--fs-xxlarge);
  --fs-timestamp: var(--fs-xsmall);
  --fs-title: var(--fs-xxxxxlarge);
  `}
</Prism>

<h2>SMARTPHONE Fontsizes</h2>

<Prism language="css">
  {`
  --fs-large: var(--fs-rem-large);
  --fs-medium: var(--fs-rem-medium);
  --fs-small: var(--fs-rem-xsmall);
  --fs-xlarge: var(--fs-rem-xlarge);
  --fs-xsmall: var(--fs-rem-xxsmall);
  --fs-xxlarge: var(--fs-rem-xxlarge);
  --fs-xxsmall: var(--fs-rem-xxxsmall);
  --fs-xxxlarge: var(--fs-rem-xxxxlarge);
  `}
</Prism>

<h2>SMARTPHONE Aliased Fontsizes</h2>

<Prism language="css">
  {`
  --fs-ads: var(--fs-xxsmall);
  --fs-bodytext: var(--fs-large);
  --fs-caption: var(--fs-small);
  --fs-quote: var(--fs-xxlarge);
  --fs-showmore: var(--fs-medium);
  --fs-subtitle: var(--fs-xlarge);
  --fs-timestamp: var(--fs-xsmall);
  --fs-title: var(--fs-xxxlarge);
`}
</Prism>
