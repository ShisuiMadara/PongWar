import React, { useEffect, useRef } from "react";
import { init, Sprite } from "kontra";




function Home() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const { width, height } = canvasRef.current;


    init(canvasRef.current);


    const sprite = Sprite({
      x: 100,
      y: 80,
      color: "red",
      width: 20,
      height: 20,
      dx: 2,
      dy: 2,
    });


    const update = () => {
      sprite.update();
      sprite.render();
    };

    const loop = () => {
      update();
      requestAnimationFrame(loop);
    };
    loop();


    return () => {

    };
  }, []);

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={800}
        height={600}
        className="bg-cyan-700 px-8 py-8"
      />
    </div>
  );
}

export default Home;
