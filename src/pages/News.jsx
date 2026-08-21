import React, { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import './News.css';
import { newsAPI } from "../services/api";
import SEO from '../components/SEO';
import { getSEOData } from '../config/seoConfig';

const _apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
const API_BASE_URL = _apiUrl.startsWith('http') ? _apiUrl.replace(/\/api$/, '') : '';

const STATIC_NEWS = [
  {
    id: 'static-1',
    title: "Sophos Asia Pacific and Japan 2025 Partner Excellence Award Winners",
    tag: "Sophos",
    link: "https://partnernews.sophos.com/en-us/2025/05/partner-program/sophos-asia-pacific-and-japan-2025-partner-excellence-award-winners/",
    image: "/assets/images/event.jpg"
  },
  {
    id: 'static-2',
    title: "Sophos Honours Top Partners at India and SAARC Partner Awards 2025.",
    tag: "Digital Terminal",
    link: "https://digitalterminal.in/channel/sophos-honours-top-partners-at-india-and-saarc-partner-awards-2025",
    image: "/assets/images/event.jpg"
  },
  {
    id: 'static-3',
    title: "Sophos Announces Winners of India and SAARC Partner Awards 2025.",
    tag: "CRN",
    link: "https://www.crn.in/news/sophos-announces-winners-of-sophos-india-and-saarc-partner-awards-2025/?utm_source=chatgpt.com",
    image: "/assets/images/event.jpg"
  },
  {
    id: 'static-4',
    title: "Sophos Recognizes Top Performing Partners in India and SAARC.",
    tag: "Var India",
    link: "https://varindia.com/news/sophos-recognizes-top-performing-partners-in-india-and-saarc?utm_source=chatgpt.com",
    image: "/assets/images/event.jpg"
  },
  {
    id: 'static-5',
    title: "Sophos Announces Winners of Partner Awards 2025.",
    tag: "CXO Today",
    link: "https://cxotoday.com/press-release/sophos-announces-winners-of-sophos-india-and-saarc-partner-awards-2025/?utm_source=chatgpt.com",
    image: "/assets/images/event.jpg"
  },
  {
    id: 'static-6',
    title: "Sophos India and SAARC Partner Awards 2025 Coverage.",
    tag: "APN",
    link: "https://www.apnnews.com/sophos-announces-winners-of-sophos-india-and-saarc-partner-awards-2025/?utm_source=chatgpt.com",
    image: "/assets/images/event.jpg"
  },
  {
    id: 'static-7',
    title: "Sophos India & SAARC Partner Awards 2025 Recognition.",
    tag: "National Computrade",
    link: "https://www.ncnonline.net/sophos-announces-winners-of-sophos-india-and-saarc-partner-awards-2025/",
    image: "/assets/images/event.jpg"
  },
  {
    id: 'static-8',
    title: "Sophos Honors Top Partners Across India and SAARC at 2025 Awards.",
    tag: "SME Channels",
    link: "https://www.smechannels.com/sophos-honors-top-partners-across-india-and-saarc-at-2025-awards/?utm_source=chatgpt.com",
    image: "/assets/images/event.jpg"
  },
  {
    id: 'static-9',
    title: "Sophos Announces India & SAARC Partner Awards 2025.",
    tag: "News",
    link: "https://thenfapost.com/sophos-announces-winners-of-sophos-india-and-saarc-partner-awards-2025/?utm_source=chatgpt.com",
    image: "/assets/images/event.jpg"
  }
];

export default function News() {
  const seoData = getSEOData('news');

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [dbNews, setDbNews] = useState([]);
  const [loadingNews, setLoadingNews] = useState(true);
  const itemsPerPage = 6;

  useEffect(() => {
    async function fetchNews() {
      try {
        setLoadingNews(true);
        const data = await newsAPI.getAll();
        setDbNews(data || []);
      } catch (err) {
        console.error("Error loading news from database:", err);
      } finally {
        setLoadingNews(false);
      }
    }
    fetchNews();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Aggressively prevent Owl Carousel and clean up any cloned elements
    const cleanupAndPreventOwl = () => {
      if (window.$) {
        // Remove any owl-carousel classes from the news container
        const newsSection = document.querySelector('[style*="background: rgb(26, 26, 46)"]');
        if (newsSection) {
          // Remove owl carousel from any elements
          window.$('.owl-carousel, .owl-loaded').each(function() {
            const $this = window.$(this);
            if ($this.data('owl.carousel')) {
              $this.trigger('destroy.owl.carousel');
            }
            $this.removeClass('owl-carousel owl-loaded owl-drag owl-grab');
          });
          
          // Remove cloned items that Owl Carousel creates
          window.$('.owl-stage-outer, .owl-stage, .cloned').remove();
          
          // Remove any duplicate news items
          const newsItems = document.querySelectorAll('[data-news-id]');
          const seenIds = new Set();
          newsItems.forEach(item => {
            const id = item.getAttribute('data-news-id');
            if (seenIds.has(id)) {
              item.remove(); // Remove duplicate
            } else {
              seenIds.add(id);
            }
          });
        }
      }
    };
    
    // Run immediately and after delays to catch any late initializations
    cleanupAndPreventOwl();
    const timer1 = setTimeout(cleanupAndPreventOwl, 100);
    const timer2 = setTimeout(cleanupAndPreventOwl, 500);
    const timer3 = setTimeout(cleanupAndPreventOwl, 1000);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const newsItems = useMemo(() => {
    // Map database news items and resolve image paths
    const apiNews = dbNews.map(item => ({
      id: `db-${item.id}`,
      title: item.title,
      tag: item.tag || 'News',
      link: item.link || '#',
      image: item.image ? (item.image.startsWith('http') || item.image.startsWith('data:') ? item.image : `${API_BASE_URL}${item.image}`) : '/assets/images/event.jpg'
    }));

    return [...apiNews, ...STATIC_NEWS];
  }, [dbNews]);

  const filteredNews = newsItems.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.tag.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredNews.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 300, behavior: 'smooth' });
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
      />

      <section className="page-header">
        <div className="page-header__bg" style={{ backgroundImage: "url(/assets/images/backgrounds/page-header-bg.jpg)" }}>
        </div>
        <div className="container">
          <div className="page-header__inner">
            <h2>Latest News</h2>
            <div className="thm-breadcrumb__box">
              <ul className="thm-breadcrumb list-unstyled">
                <li><Link to="/"><i className="fas fa-home"></i>Home</Link></li>
                <li><span className="icon-right-arrow-1"></span></li>
                <li>News</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div id="react-news-page" style={{ background: '#1a1a2e', padding: '60px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          <div className="section-title text-center">
            <h2 className="section-title__title" style={{ color: '#fff', marginBottom: '40px' }}>
              Press <span>Releases</span>
            </h2>
          </div>

          {/* Search Bar */}
          <div style={{ 
              maxWidth: '600px', 
              margin: '0 auto 40px',
              display: 'flex',
              gap: '10px'
          }}>
              <input
                  type="text"
                  placeholder="Search news by title or publisher..."
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

          <p style={{ textAlign: 'center', color: '#ccc', marginBottom: '30px', fontSize: '14px' }}>
              {filteredNews.length === newsItems.length 
                  ? `Showing all ${newsItems.length} articles`
                  : `Found ${filteredNews.length} article${filteredNews.length !== 1 ? 's' : ''} matching "${searchTerm}"`
              }
          </p>

          <div 
              id="news-grid-container"
              style={{ 
                  display: 'flex', 
                  flexWrap: 'wrap', 
                  justifyContent: 'center', 
                  gap: '30px',
                  minHeight: '400px'
              }}>
              {filteredNews.length === 0 ? (
                  <div style={{ textAlign: 'center', padding: '40px', color: '#fff', width: '100%' }}>
                      <p style={{ fontSize: '18px', marginBottom: '10px' }}>
                          No news articles found matching "{searchTerm}"
                      </p>
                  </div>
              ) : (
                  currentItems.map((item) => (
                      <div 
                          className="news-card" 
                          key={`news-item-${item.id}`} 
                          data-news-id={item.id}
                          style={{ 
                              width: '350px', 
                              background: '#fff', 
                              borderRadius: '12px',
                              overflow: 'hidden',
                              boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                              transition: 'transform 0.3s ease',
                              display: 'flex',
                              flexDirection: 'column'
                          }}
                          onMouseEnter={(e) => {
                              e.currentTarget.style.transform = 'translateY(-10px)';
                          }}
                          onMouseLeave={(e) => {
                              e.currentTarget.style.transform = 'translateY(0)';
                          }}>
                          <div className="news-card__img" style={{ position: 'relative' }}>
                              <img loading="lazy" src={item.image} alt={item.title} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
                              <div className="news-card__tags" style={{
                                  position: 'absolute',
                                  bottom: '-15px',
                                  left: '20px',
                                  background: '#ff7a00',
                                  color: '#fff',
                                  padding: '5px 15px',
                                  borderRadius: '20px',
                                  fontWeight: 'bold',
                                  fontSize: '12px',
                                  textTransform: 'uppercase'
                              }}>
                                  <span>{item.tag}</span>
                              </div>
                          </div>
                          
                          <div className="news-card__content" style={{ padding: '30px 20px 20px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                              <h3 style={{ 
                                  fontSize: '18px', 
                                  lineHeight: '1.4', 
                                  color: '#1a1a2e',
                                  marginBottom: '20px',
                                  fontWeight: '700'
                              }}>
                                  {item.title}
                              </h3>
                              
                              <div style={{ marginTop: 'auto' }}>
                                  <a href={item.link} target="_blank" rel="noopener noreferrer" style={{
                                      display: 'inline-flex',
                                      alignItems: 'center',
                                      color: '#ff7a00',
                                      fontWeight: 'bold',
                                      textDecoration: 'none',
                                      transition: 'color 0.3s ease'
                                  }}
                                  onMouseEnter={(e) => e.target.style.color = '#e65c00'}
                                  onMouseLeave={(e) => e.target.style.color = '#ff7a00'}>
                                      Read Full Article <i className="icon-right-arrow" style={{ marginLeft: '8px', fontSize: '12px' }}></i>
                                  </a>
                              </div>
                          </div>
                      </div>
                  ))
              )}
          </div>

          {/* Pagination */}
          {filteredNews.length > itemsPerPage && (
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
                          fontWeight: 'bold',
                          transition: 'background 0.3s'
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
                              fontWeight: 'bold',
                              transition: 'all 0.3s'
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
                          fontWeight: 'bold',
                          transition: 'background 0.3s'
                      }}
                  >
                      Next
                  </button>
              </div>
          )}
        </div>
      </div>
    </>
  );
}
