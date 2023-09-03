<script>
    // JavaScript code for component logic can go here
  </script>
  
  <div class="card bordered">
    <div class="card-body">
        <!-- Add your blog post title here-->
      <h1 class="card-title"></h1>
        <!-- Add your blog post subtitile here-->
      <h2></h2>
      <!-- Add your blog post content here as card-content -->
      <card-content></card-content>
    </div>
  </div>
  
  <style>
    /* Basic reset */
    body, h1, h2, h3, p {
      margin: 0;
      padding: 0;
    }
  
    /* Base styling for the card */
    .card {
      max-width: 800px;
      margin: 30px auto;
      border: 1px solid #ccc;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }
  
    .card-body {
      padding: 20px;
    }
  
    /* Typography */
    .card-title {
      font-size: 36px;
      color: #333;
      margin-bottom: 10px;
    }
  
    .card-subtitle {
      font-size: 18px;
      color: #666;
      margin-bottom: 20px;
    }
  
    .card-content h3 {
      font-size: 24px;
      margin-top: 20px;
      margin-bottom: 10px;
      color: #444;
    }
  
    .card-content p {
      font-size: 16px;
      line-height: 1.6;
      margin-bottom: 20px;
      color: #555;
    }
  
  </style>