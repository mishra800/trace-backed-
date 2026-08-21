import React, { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { blogAPI } from '../services/api';
import SEO from '../components/SEO';
import { getSEOData } from '../config/seoConfig';

// Derive base URL for /uploads image paths.
// Production: VITE_API_URL is a full https URL — strip /api suffix.
// Local dev:  VITE_API_URL is /api (Vite proxy) — use '' so /uploads stays relative.
const _apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
const API_BASE_URL = _apiUrl.startsWith('http') ? _apiUrl.replace(/\/api$/, '') : '';

// Resolve the hero image URL from whichever field is populated
function getBlogImage(blog) {
    if (blog.image1) {
        return blog.image1.startsWith('http') || blog.image1.startsWith('data:') ? blog.image1 : `${API_BASE_URL}${blog.image1}`;
    }
    if (blog.image1_url) return blog.image1_url;
    if (blog.hero_image_link) return blog.hero_image_link;
    return null;
}

// Strip HTML tags so excerpts show plain text
function stripHtml(html) {
    if (!html) return '';
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
}

export default function Blogs() {
  const seoData = getSEOData('blogs');

    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 6;

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                setLoading(true);
                const data = await blogAPI.getAll();
                setBlogs(Array.isArray(data) ? data : []);
            } catch (err) {
                console.error('Error fetching blogs:', err);
                setBlogs([]);
            } finally {
                setLoading(false);
            }
        };
        fetchBlogs();
    }, []);

    const filteredBlogs = useMemo(() => {
        if (!searchTerm) return blogs;
        return blogs.filter(blog =>
            blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            blog.content.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [blogs, searchTerm]);

    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
    const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1);
    };

    return (
        <>

      <SEO 
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        ogImage={seoData.ogImage}
        canonical={seoData.canonical}
        structuredData={seoData.structuredData}
      />

            <section className="page-header">
                <div className="page-header__bg" style={{ backgroundImage: "url(/assets/images/backgrounds/page-header-bg.jpg)" }}>
                </div>
                <div className="container">
                    <div className="page-header__inner">
                        <h2>Blogs</h2>
                        <div className="thm-breadcrumb__box">
                            <ul className="thm-breadcrumb list-unstyled">
                                <li><Link to="/"><i className="fas fa-home"></i>Home</Link></li>
                                <li><span className="icon-right-arrow-1"></span></li>
                                <li>Blogs</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <div style={{ background: '#1a1a2e', padding: '60px 20px' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

                    <div className="section-title text-center">
                        <h2 className="section-title__title" style={{ color: '#fff', marginBottom: '40px' }}>
                            All <span>Blogs</span>
                        </h2>
                    </div>

                    {/* Search Bar */}
                    <div style={{ maxWidth: '600px', margin: '0 auto 40px', display: 'flex', gap: '10px' }}>
                        <input
                            type="text"
                            placeholder="Search blogs by title or content..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                            style={{
                                flex: 1,
                                padding: '12px 20px',
                                fontSize: '16px',
                                border: '2px solid #ff7a00',
                                borderRadius: '25px',
                                outline: 'none',
                                backgroundColor: 'rgba(255,255,255,0.9)',
                                color: '#333'
                            }}
                        />
                        {searchTerm && (
                            <button
                                onClick={() => setSearchTerm('')}
                                style={{
                                    padding: '12px 24px',
                                    background: '#ff7a00',
                                    color: '#fff',
                                    border: 'none',
                                    borderRadius: '25px',
                                    cursor: 'pointer',
                                    fontSize: '16px',
                                    fontWeight: 'bold'
                                }}
                            >
                                Clear
                            </button>
                        )}
                    </div>

                    {loading ? (
                        <div style={{ textAlign: 'center', padding: '60px', color: '#fff' }}>
                            <div style={{
                                border: '4px solid rgba(255,255,255,0.1)',
                                borderTop: '4px solid #ff7a00',
                                borderRadius: '50%',
                                width: '50px',
                                height: '50px',
                                animation: 'spin 1s linear infinite',
                                margin: '0 auto'
                            }}></div>
                            <p style={{ marginTop: '20px' }}>Loading blogs...</p>
                        </div>
                    ) : (
                        <>
                            {/* Results count */}
                            {filteredBlogs.length > 0 && (
                                <p style={{ textAlign: 'center', color: '#ccc', marginBottom: '30px', fontSize: '14px' }}>
                                    {filteredBlogs.length === blogs.length
                                        ? `Showing all ${blogs.length} blog${blogs.length !== 1 ? 's' : ''}`
                                        : `Found ${filteredBlogs.length} blog${filteredBlogs.length !== 1 ? 's' : ''} matching "${searchTerm}"`
                                    }
                                </p>
                            )}

                            {/* Cards */}
                            <div className="card-container">
                                {currentBlogs.length > 0 ? (
                                    currentBlogs.map(blog => (
                                        <div className="card" key={blog.id}>
                                            {getBlogImage(blog) && (
                                                <img loading="lazy"
                                                    src={getBlogImage(blog)}
                                                    alt={blog.title}
                                                    onError={(e) => { e.target.style.display = 'none'; }}
                                                />
                                            )}
                                            <h3>{blog.title}</h3>
                                            <p>{stripHtml(blog.content).substring(0, 120)}...</p>
                                            <Link className="btn" to={`/view-blog/${blog.slug || blog.id}`}>Read More</Link>
                                        </div>
                                    ))
                                ) : (
                                    <div style={{ textAlign: 'center', padding: '60px', color: '#ccc', width: '100%' }}>
                                        <p style={{ fontSize: '18px' }}>
                                            {searchTerm
                                                ? `No blogs found matching "${searchTerm}"`
                                                : 'No blogs available yet. Check back soon!'
                                            }
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* Pagination */}
                            {filteredBlogs.length > blogsPerPage && (
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: '10px',
                                    marginTop: '50px',
                                    flexWrap: 'wrap'
                                }}>
                                    <button
                                        onClick={() => handlePageChange(currentPage - 1)}
                                        disabled={currentPage === 1}
                                        style={{
                                            padding: '10px 20px',
                                            background: currentPage === 1 ? '#333' : '#ff7a00',
                                            color: '#fff',
                                            border: 'none',
                                            borderRadius: '25px',
                                            cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                                            fontSize: '14px',
                                            fontWeight: 'bold'
                                        }}
                                    >
                                        Previous
                                    </button>
                                    {[...Array(totalPages)].map((_, index) => (
                                        <button
                                            key={index + 1}
                                            onClick={() => handlePageChange(index + 1)}
                                            style={{
                                                width: '40px',
                                                height: '40px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                background: currentPage === index + 1 ? '#ff7a00' : 'transparent',
                                                color: '#fff',
                                                border: currentPage === index + 1 ? 'none' : '2px solid #555',
                                                borderRadius: '50%',
                                                cursor: 'pointer',
                                                fontSize: '14px',
                                                fontWeight: 'bold'
                                            }}
                                        >
                                            {index + 1}
                                        </button>
                                    ))}
                                    <button
                                        onClick={() => handlePageChange(currentPage + 1)}
                                        disabled={currentPage === totalPages}
                                        style={{
                                            padding: '10px 20px',
                                            background: currentPage === totalPages ? '#333' : '#ff7a00',
                                            color: '#fff',
                                            border: 'none',
                                            borderRadius: '25px',
                                            cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                                            fontSize: '14px',
                                            fontWeight: 'bold'
                                        }}
                                    >
                                        Next
                                    </button>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>

            <style>{`
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                .card-container {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 20px;
                    padding: 20px;
                }
                .card {
                    border-radius: 8px;
                    overflow: hidden;
                    width: 400px;
                    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
                    transition: transform 0.2s;
                    background: #fff;
                }
                .card:hover {
                    transform: translateY(-5px);
                }
                .card img {
                    width: 100%;
                    height: 200px;
                    object-fit: cover;
                }
                .card h3 {
                    margin: 10px;
                    font-size: 1.2em;
                    color: #d44a00 !important;
                }
                .card p {
                    margin: 10px;
                    color: #555;
                    font-size: 0.95em;
                }
                .card a.btn {
                    display: inline-block;
                    background: #d44a00;
                    color: white;
                    padding: 10px 15px;
                    text-decoration: none;
                    border-radius: 15px;
                    margin: 15px;
                }
                @media (max-width: 1200px) { .card { width: 300px; } }
                @media (max-width: 992px) { .card-container { gap: 15px; } .card { width: 280px; } }
                @media (max-width: 768px) { .card-container { flex-direction: column; align-items: center; padding: 10px; } .card { width: 90%; max-width: 400px; } }
                @media (max-width: 480px) { .card { width: 95%; } }
            `}</style>
        </>
    );
}
