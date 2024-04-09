import food from "../assets/images/hotel-facility-one.jpg"

const Food = () => {
  return (
    <div className="bg-slate-100 flex items-center justify-center p-10 w-[1000px] h-[325px] mx-auto gap-8">
      <figure>
        <img src={food} alt="" className="w-[43rem] h-[255px]" />
      </figure>
      <div className="space-y-2">
        <p>THE WORLD CLASS</p>
        <h2 className="text-4xl">RESTAURANT & BANQUETS</h2>
        <p>
          Semper ac dolor vitae accumsan. Cras interdum hendrerit lacinia.
          Phasellus accumsan urna vitae molestie interdum. Nam sed placerat
          libero, non eleifend dolor. <br />
          Cras ac justo et augue suscipit euismod vel eget lectus. Proin
          vehicula nunc arcu, pulvinar accumsan nulla porta vel. Vivamus
          malesuada vitae sem ac pellentesque.
        </p>
        <p className="space-x-4 text-sky-800">
            <a href="/">SERVICE HOURS; 19.00-22:00 </a>
            <a href="/">SERVICE CHARGE : $15</a>
        </p>
      </div>
    </div>
  );
};

export default Food;
