<script lang='ts'>
    let name = 'Luke Payne';
    let bio = 'Bridging the gap between cutting-edge AI research and real-world applications, I specialize in machine learning and blockchain technologies. I thrive in the gray areas of tech, pushing boundaries and questioning conventional wisdom.';
    let posts = [
      {
        title: 'The Symbiosis of AI and Blockchain in a Quantum World', 
        snippet: 'Ever wondered how quantum computing could revolutionize AI and blockchain? Dive into a future where decentralized networks could be more than just transactional—they could be sentient.', 
        link: 'general'
      },
      {
        title: 'AI’s Self-Reflection: A Journey Into Existential Algorithms', 
        snippet: 'Is it possible for AI to ponder its own existence? Join me as I delve into the theoretical frameworks that could enable machine learning models to ask the big questions.', 
        link: 'self'
      },
      {
          title: 'Ethical AI: Navigating the Moral Labyrinth', 
          snippet: 'As AI systems become more integrated into our lives, ethical considerations can\'t be ignored. Explore the moral complexities and how we can build more responsible algorithms.', 
          link: 'ethics'
        },
        {
          title: 'Decentralized Finance (DeFi): A Blockchain Revolution', 
          snippet: 'Decentralized finance is more than a buzzword—it’s a paradigm shift in how we think about financial systems. Discover how blockchain is disrupting traditional finance, for the better.', 
          link: 'defi'
        }
    ];
</script>

<main class="p-6 bg-gray-100">
    <h1 class="text-4xl font-bold mb-4">{name}</h1>
    <p class="text-lg mb-8">{bio}</p>
    <p class="text-lg mb-8" > Working in the governmnet sector has left me with a gap in demonstrable projects for my portfolio. I am in the process of rectifying this with a few personal projects which can be found on my github</p>
    <a href="https://github.com/dolvido" class="btn btn-primary">Github</a>

    <h2 class="text-2xl font-bold mb-4">Recent Blog Posts</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      {#each posts as post (post.title)}
      <div class="card shadow-lg rounded-lg flex flex-col items-center">
        <figure>
          <!-- You can add an image for each blog post if you want -->
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
  
