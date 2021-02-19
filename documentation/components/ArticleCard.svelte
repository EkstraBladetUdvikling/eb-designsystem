<script lang="ts">
import ArticleCard from "../../src/_components/articlecard";

let article =
  {
    media: 'https://via.placeholder.com/610x343&text=610x343',
    section: "Sport",
    timestamp: '2 timer siden',
    title: "tab 1",
  };
</script>

<div class="grid-width--small">
  <h1 style="color:#12507b;font-weight: bolder">ArticleCard</h1>

  <ArticleCard {...article} />
</div>
