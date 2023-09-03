<script lang='ts'>
    // Simulated list of blog posts (you might fetch this data from an API instead)
    let posts = [
      {
        title: 'How AI is Changing the World',
        snippet: 'A look at the various ways in which AI is shaping our future.',
        link: '/general/ai-world',
      },
      {
        title: 'Blockchain and its Applications',
        snippet: 'Understanding blockchain technology and its diverse applications.',
        link: '/general/blockchain-applications',
      },
      // Add more posts here
    ];
  </script>
  
  <main class="p-6 bg-gray-100">
    <h1 class="text-4xl font-bold mb-4">Blog Posts</h1>
  
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      {#each posts as post (post.title)}
      <div class="card shadow-lg rounded-lg flex flex-col items-center">
        <figure>
          <!-- Optional image for each blog post -->
          <!-- <img src="{post.image}"> -->
        </figure>
        <div class="card-body">
          <h2 class="card-title text-xl font-bold">{post.title}</h2>
          <p class="text-gray-600">{post.snippet}</p>
          <div class="card-actions flex items-center">
            <a href="{post.link}" class="btn btn-primary">Read More</a>
          </div>
        </div>
      </div>
      {/each}
    </div>
  </main>