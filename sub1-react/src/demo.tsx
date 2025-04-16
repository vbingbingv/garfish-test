import Garfish from 'garfish';

export function Home() {
  const onClick = () => {
    Garfish.router.push({
      path: '/sub-vue3',
      query: {
        path: '/sub-vue3',
      },
    });
  };
  return (
    <div>
      <div onClick={onClick}>子应用sub-vue3</div>
    </div>
  );
}

export function Sub1() {
  return <div id="sub-vue3"></div>;
}
