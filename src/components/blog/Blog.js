import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: 'Cómo mejorar tu estrategia de marketing digital',
      description:
        'Descubre las mejores prácticas para optimizar tu presencia en línea.',
      link: '/blog/estrategia-marketing',
    },
    {
      id: 2,
      title: 'Tendencias de diseño web en 2025',
      description:
        'Explora las últimas tendencias en diseño web para destacar en el mercado.',
      link: '/blog/tendencias-diseno-web',
    },
    {
      id: 3,
      title: 'SEO: Claves para posicionar tu sitio web',
      description:
        'Aprende cómo mejorar el SEO de tu sitio web y atraer más tráfico.',
      link: '/blog/seo-claves',
    },
  ];

  return (
    <div style={{ padding: '60px', fontFamily: 'Arial' }}>
      <h1
        style={{
          textAlign: 'center',
          marginBottom: '60px',
          marginTop: '80px',
          fontSize: '18px',
        }}
      >
        Blog
      </h1>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          justifyContent: 'center',
        }}
      >
        {posts.map((post) => (
          <div
            key={post.id}
            style={{
              flex: '0 1 calc(33.33% - 20px)',
              border: '1px solid #ddd',
              borderRadius: '5px',
              padding: '15px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              boxSizing: 'border-box',
              overflow: 'hidden',
            }}
          >
            <img
              src={`https://picsum.photos/400/200?random=${post.id}`}
              alt={post.title}
              style={{
                width: '100%',
                height: '150px',
                objectFit: 'cover',
                marginBottom: '10px',
              }}
            />
            <h2 style={{ margin: '0 0 10px 0' }}>{post.title}</h2>
            <p style={{ margin: '0 0 15px 0', color: '#555' }}>
              {post.description}
            </p>

            <Link
              to={`/blog/${post.link}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                onClick={() =>
                  window.open(`${window.location.origin}${post.link}`, '_blank')
                }
                style={{
                  textDecoration: 'none',
                  color: 'white',
                  backgroundColor: '#007BFF',
                  padding: '10px 15px',
                  borderRadius: '5px',
                  display: 'inline-block',
                  textAlign: 'center',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Leer más
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
