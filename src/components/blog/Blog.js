import { useEffect, useState } from 'react';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const keywords = [
    'marketing',
    'tecnología',
    'SEO',
    'inteligencia artificial',
    'ágencia digital',
    'AI',
    'marketing',
    'tecnología',
    'startup',
    'empresa',
    'innovación',
    'digital',
    'redes sociales',
    'desarrollo web',
    'auditoría digital',
    'consultoría digital',
  ];

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          'https://newsapi.org/v2/top-headlines?category=technology&apiKey=ecce01f6400142dba22fa5c177bef6a9'
        );

        if (!response.ok) {
          throw new Error(`Error en la API: ${response.statusText}`);
        }

        const data = await response.json();
        console.log('Datos recibidos:', data); // 🔍 Debug

        if (!Array.isArray(data.articles) || data.articles.length === 0) {
          setError('No se encontraron artículos.');
          setLoading(false);
          return;
        }

        console.log('Antes de filtrar:', data.articles); // 🔍 Debug

        // Filtrar y mapear artículos
        const filteredArticles = data.articles
          .filter((article) => {
            if (!article.title || !article.urlToImage || !article.description)
              return false;

            const text = `${article.title.toLowerCase()} ${article.description.toLowerCase()}`;

            return keywords.some((keyword) =>
              text.includes(keyword.toLowerCase())
            );
          })
          .slice(0, 12)
          .map((article, index) => ({
            id: index,
            title: article.title,
            description: article.description || 'Sin descripción',
            link: article.url,
            image: article.urlToImage,
          }));

        console.log('Artículos filtrados:', filteredArticles); // 🔍 Debug
        setPosts(filteredArticles);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial' }}>
      <h1
        style={{
          textAlign: 'center',
          marginBottom: '40px',
          marginTop: '80px',
          color: 'darkgray',
        }}
      >
        Blog
      </h1>

      {error && (
        <p style={{ color: 'red', textAlign: 'center' }}>Error: {error}</p>
      )}
      {loading ? (
        <p style={{ textAlign: 'center' }}>Cargando artículos...</p>
      ) : null}

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
        }}
      >
        {posts.map((post) => (
          <div
            key={post.id}
            style={{
              border: '1px solid #ddd',
              borderRadius: '5px',
              padding: '15px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              backgroundColor: 'white',
              overflow: 'hidden',
            }}
          >
            <img
              src={post.image}
              alt={post.title}
              style={{
                width: '100%',
                height: '150px',
                objectFit: 'cover',
                borderRadius: '5px',
                marginBottom: '10px',
              }}
            />
            <h2 style={{ fontSize: '16px', margin: '0 0 10px 0' }}>
              {post.title}
            </h2>
            <p
              style={{ fontSize: '14px', color: '#555', marginBottom: '15px' }}
            >
              {post.description}
            </p>
            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                textAlign: 'center',
                backgroundColor: '#007BFF',
                color: 'white',
                padding: '10px 15px',
                borderRadius: '5px',
                textDecoration: 'none',
              }}
            >
              Leer más
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
