import "@/styles/ui/card.scss";

export default function Card() {
  return (
    <div className="card">
      <div className="card--left">
        <img
          className="card--left__img"
          alt=""
          src="https://images.unsplash.com/photo-1689046194076-62199393c464?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0M3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        />
      </div>
      <div className="card--right">
        <div className="card--right__title">
          <h3>Spiderman</h3>
        </div>
        <div className="card--right__desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatum, quibusdam, quia, quos voluptates voluptatibus consequuntur
          quod voluptate quas quibusdam, quia, quos voluptates
        </div>
        <div className="card--right__tech">react,nextjs,html,css,js</div>
        <div className="card--right__links">
          <a href="">Live</a>
        </div>
      </div>
    </div>
  );
}
