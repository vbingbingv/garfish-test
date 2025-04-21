import { useNavigate } from 'react-router';

export function Home() {
  const navigate = useNavigate();
  return (
    <div>
      home
      <button onClick={() => navigate('/about')}>go2about</button>
    </div>
  );
}

export function About() {
  const navigate = useNavigate();
  return (
    <div>
      about
      <button onClick={() => navigate('/')}>go2home</button>
    </div>
  );
}
