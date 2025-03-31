import { useParams } from 'react-router-dom';
const posts = [
  {
    id: 1,
    title: 'Cómo mejorar tu estrategia de marketing digital',
    content:
      'Aquí tienes un artículo detallado sobre cómo mejorar tu marketing digital...',
    slug: 'estrategia-marketing',
  },
  {
    id: 2,
    title: 'Tendencias de diseño web en 2025',
    content:
      'Las tendencias más innovadoras de diseño web para 2025 incluyen...',
    slug: 'tendencias-diseno-web',
  },
  {
    id: 3,
    title: 'SEO: Claves para posicionar tu sitio web',
    content: 'Si quieres mejorar tu SEO, aquí tienes algunos consejos clave...',
    slug: 'seo-claves',
  },
];

const BlogPost = () => {
  const { slug } = useParams(); // Captura el slug de la URL

  // Busca el post que coincide con el slug
  const post = posts.find((p) => p.slug === slug);

  // Si no se encuentra el post, mostrar un mensaje de error
  if (!post) {
    return <h2>Post no encontrado</h2>;
  }

  return (
    <div style={{ padding: '125px 102px', color: 'darkblue' }}>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default BlogPost;
