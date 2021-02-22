<script lang="ts">
  import Button from '../../src/_components/button';
  import Card from "../../src/_components/card";
</script>

<div class="grid-width--small">
  <h1 style="color:#12507b;font-weight: bolder">Card</h1>
  <Card className="margin-l">
    <div slot="header">
      Header
    </div>
    <div slot="content">
      Her er der indhold, der bare er godt
    </div>
    <div slot="footer">
      Vi har også en footer
    </div>
  </Card>
  <Card className="margin-l">
    <div class="text-align--center" slot="header">
      <b>Avisen</b>
    </div>
    <div slot="content">
      <p class="margin-none margin-l--b">Cras sed viverra tortor. Sed dictum lacus nec velit ultricies viverra sed tincidunt mi. Nulla mi velit, dictum sed tempor vitae, mattis a felis.</p>
      <p class="card-meta color--graa2 text-align--center">Buy for only:</p>
      <h3 class="card-title text-align--center">120<small>,-</small></h3>
    </div>
    <div class="text-align--center" slot="footer">
      <Button>Vælg</Button>
    </div>
  </Card>
</div>
