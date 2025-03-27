import React from 'react';

function NotFound(): React.JSX.Element {
  return (
    <div className="page page--gray page--main" style={{ textAlign: 'center', padding: '80px 20px' }}>
      <h1 style={{ fontSize: '48px', marginBottom: '16px' }}>404</h1>
      <p style={{ fontSize: '20px', marginBottom: '24px' }}>Страница не найдена</p>
      <a href="/" style={{ color: '#4481c3', textDecoration: 'underline' }}>Вернуться на главную</a>
    </div>
  );
}

export default NotFound;
