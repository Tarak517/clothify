import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";

const Slider = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75; // 
    }
  }, []);

  return (
    <div className="w-full h-[60vh] md:h-[80vh] lg:h-[90vh] relative overflow-hidden">

      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="text-white text-3xl md:text-6xl font-bold mb-6">
          Explore New Collection
        </h1>

        <button
          onClick={() => navigate("/shop")}
          className="bg-white text-black px-6 py-3 rounded"
        >
          Shop Now
        </button>
      </div>

    </div>
  );
};

export default Slider;