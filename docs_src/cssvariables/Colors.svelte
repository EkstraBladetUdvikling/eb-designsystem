<script lang="ts">
  import { link } from 'svelte-spa-router';
  import Prism from 'svelte-prism';

  import { utilities } from '../routes/utilities';

  const colorRoute = utilities.routes.find((util) => util.title === 'Color');
</script>

<h1>Colors</h1>

<div>
  <p>Named colors for ease of use</p>
  <p><a href="#a11y" use:link={{ disabled: false, href: colorRoute.href }}>See list of colors</a></p>
</div>

<Prism language="css">
  {`
  --color--accept: var(--color--green);
  --fgcolor--accept: var(--fgcolor--green);
  --color--cancel: var(--color--red);
  --fgcolor--cancel: var(--fgcolor--red);
  --color--default: var(--color--bluedark);
  --fgcolor--default: var(--fgcolor--bluedark);
  --color--primary: var(--color--bruger);
  --fgcolor--primary: var(--fgcolor--bruger);
  --color--secondary: var(--color--graa3);
  --fgcolor--secondary: var(--fgcolor--graa3);
  `}
</Prism>
