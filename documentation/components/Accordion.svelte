<script lang="ts">
import Accordion from "../../src/_components/accordion";

let tabs = [{title: "tab 1", content: "content 1"}, {title: "tab 2", content: "content 2"}]
</script>

<div class="grid-width--small">
  <h1 style="color:#12507b;font-weight: bolder">Accordion</h1>
  <code>import Accordion from "path/to/accordion";</code>
  <Accordion tabs={tabs}/>
  <Accordion dataTheme="lightmode" tabs={tabs}/>
  <Accordion dataTheme="darkmode" tabs={tabs}/>
</div>
