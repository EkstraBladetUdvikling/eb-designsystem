<script>
  import { BluedarkCSSClass, GreenCSSClass, GreendarkCSSClass } from '@ekstra-bladet/eb-colors';

  import Prism from 'svelte-prism';

  import Badge from '../../src/_components/badge';

  const language = 'html';
</script>

<h1 class="color--eb">Badge</h1>

<p>Badges kan benyttes som mærkater eller som indikation af tags. Størrelsen af et badge kan styres vha. font-sizes.</p>

<Prism language="js" source={`import Badge from '@ekstra-bladet/designsystem/src/_components/badge';`} />

<div class="margin-l--tb">
  <Badge className="margin-s">Standard badge</Badge>
</div>
<Prism
  {language}
  source={`
  <div class="margin-l--tb">
    <Badge className="margin-s">Standard badge</Badge>
  </div>
  `}
/>

<p>Prædefinerede farver:</p>
<div class="margin-l--tb">
  <Badge className="margin-s" type="primary">Primary</Badge>
  <Badge className="margin-s" type="secondary">Secondary</Badge>
  <Badge className="margin-s" type="success">Success</Badge>
  <Badge className="margin-s" type="danger">Danger</Badge>
</div>

<Prism
  {language}
  source={`
  <div class="margin-l--tb">
    <Badge className="margin-s" type="primary">Primary</Badge>
    <Badge className="margin-s" type="secondary">Secondary</Badge>
    <Badge className="margin-s" type="success">Success</Badge>
    <Badge className="margin-s" type="danger">Danger</Badge>
  </div>
  `}
/>

<p>Som links / aktive tags:</p>
<div class="margin-l--tb">
  <Badge href="#" className="margin-s {BluedarkCSSClass}">Bandekriminialitet</Badge>
  <Badge href="#" className="margin-s {GreenCSSClass}">Sport</Badge>
  <Badge href="#" className="margin-s {GreendarkCSSClass}">Nicklas Bendtner</Badge>
</div>

<Prism
  {language}
  source={`
  <div class="margin-l--tb">
    <Badge href="#" className="margin-s {BluedarkCSSClass}">Bandekriminialitet</Badge>
    <Badge href="#" className="margin-s {GreenCSSClass}">Sport</Badge>
    <Badge href="#" className="margin-s {GreendarkCSSClass}">Nicklas Bendtner</Badge>
  </div>
  `}
/>

<p>Andre farver og variationer:</p>

<div class="margin-l--tb">
  <Badge className="text-transform--uppercase"><small>Small text uppercase</small></Badge>
  <Badge className="bg--native">Native</Badge>
  <Badge className="badge--small fontsize-xsmall {GreendarkCSSClass}">Greendark xsmall</Badge>
  <Badge>Badge with icon <i class="fa fal fa-trash" /></Badge>
</div>

<Prism
  {language}
  source={`
  <div class="margin-l--tb">
    <Badge className="text-transform--uppercase"><small>Small text uppercase</small></Badge>
    <Badge className="bg--native">Native</Badge>
    <Badge className="badge--small {GreendarkCSSClass} fontsize-xsmall">Greendark xsmall</Badge>
    <Badge>Badge with icon <i class="fa fal fa-trash" /></Badge>
  </div>
  `}
/>
