<script lang="ts">
  import HorizontalScroll from '../../src/_components/horizontalScroll';

  let tabs = [
    { title: 'tab 1', content: 'content 1' },
    { title: 'tab 2', content: 'content 2' },
  ];
</script>

<div class="grid-width--small">
  <h1 style="color:#bd1118;font-weight: bolder">Horizontal Scroll</h1>
  <HorizontalScroll>
    <div class="flex-item width-1of3 padding-m" style="min-width: 300px;">
      <a href="#d" class="card height-1of1">
        <div class="card-content">
          <p class="card-meta color--graa3"><small><span class="color--flash">flash!</span> - 2 timer siden</small></p>
          <h3 class="card-title">Aliquam ultricies felis eget orci commodo fringilla</h3>
        </div>
      </a>
    </div>
    <div class="flex-item width-1of3 padding-m" style="min-width: 300px;">
      <a href="#c" class="card height-1of1">
        <div class="card-content">
          <p class="card-meta color--graa3"><small><span class="color--tv">TV</span> - 3 timer siden</small></p>
          <h3 class="card-title">felis eget orci commodo ulimito</h3>
        </div>
      </a>
    </div>
    <div class="flex-item width-1of3 padding-m" style="min-width: 300px;">
      <a href="#b" class="card height-1of1">
        <div class="card-content">
          <p class="card-meta color--graa3"><small><span class="color--sport">sport</span> - 5 timer siden</small></p>
          <h3 class="card-title">Ultricies commodo lecos mania</h3>
        </div>
      </a>
    </div>
    <div class="flex-item width-1of3 padding-m" style="min-width: 300px;">
      <a href="#a" class="card height-1of1">
        <div class="card-content">
          <p class="card-meta color--graa3"><small><span class="color--flash">nyheder</span> - 8 timer siden</small></p>
          <h3 class="card-title">Fringilla levos tumio arcadia</h3>
        </div>
      </a>
    </div>
  </HorizontalScroll>
</div>
