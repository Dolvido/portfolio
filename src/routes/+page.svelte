<script lang='ts'>
    let name = 'Luke Payne';
    let bio = 'Bridging the gap between cutting-edge AI research and real-world applications, I specialize in machine learning and blockchain technologies. I thrive in the gray areas of tech, pushing boundaries and questioning conventional wisdom.';
    let posts = [
      {
        title: 'The Symbiosis of AI and Blockchain in a Quantum World', 
        snippet: 'Ever wondered how quantum computing could revolutionize AI and blockchain? Dive into a future where decentralized networks could be more than just transactional—they could be sentient.', 
        link: 'Link to Blog Post 1'
      },
      {
        title: 'AI’s Self-Reflection: A Journey Into Existential Algorithms', 
        snippet: 'Is it possible for AI to ponder its own existence? Join me as I delve into the theoretical frameworks that could enable machine learning models to ask the big questions.', 
        link: 'Link to Blog Post 2'
      },
      // Add more blog posts as needed
    ];
</script>

<main class="p-6 bg-gray-100">
    <h1 class="text-4xl font-bold mb-4">{name}</h1>
    <p class="text-lg mb-8">{bio}</p>
    
    <h2 class="text-2xl font-bold mb-4">Recent Blog Posts</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      {#each posts as post (post.title)}
        <div class="card bordered">
          <figure>
            <!-- You can add an image for each blog post if you want -->
            <!-- <img src="{post.image}"> -->
          </figure> 
          <div class="card-body">
            <h2 class="card-title">{post.title}</h2> 
            <p>{post.snippet}</p> 
            <div class="card-actions">
              <a href="{post.link}" class="btn btn-primary">Read More</a>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </main>