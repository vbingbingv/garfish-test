import { useNavigate } from 'react-router';
export function Home() {
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/sub-vue3');
  };
  return (
    <div>
      <button onClick={onClick}>子应用sub-vue3</button>
    </div>
  );
}

export function Sub1() {
  return <div id="sub-vue3">loading...</div>;
}
