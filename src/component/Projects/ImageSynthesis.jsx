import React from "react";

const ImageSynthesis = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-start gap-3 border-4 border-gray-600 rounded-3xl p-3 transition duration-500 ease-in-out hover:scale-110 hover:shadow-lg shadow-gray-800 hover:z-10 bg-[#44494F] hover:blur-0">
        <a
          href="https://ieeexplore.ieee.org/document/10263208"
          target="_blank"
          className="flex items-center px-4 py-2 border-2 border-indigo-500 rounded-md shadow-sm"
        >
          Image Synthesis
        </a>
        <p className="w-full border-b-2 border-gray-800 border-dashed"></p>
        <p className="text-pretty">
          This paper compares Generative Adversarial Networks (GANs) and
          Diffusion Models (DMs) for image synthesis, discussing their
          architectures, advantages, disadvantages, and unique features.
          Additionally, the paper evaluates the performance of these models
          using metrics like Inception Score (IS) and Frechet Inception Distance
          (FID), while emphasizing the importance of human evaluation for
          assessing image quality.
        </p>
      </div>
    </>
  );
};

export default ImageSynthesis;
