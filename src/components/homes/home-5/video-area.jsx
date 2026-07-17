import React from "react";

const VideoArea = () => {
  return (
    <section className="tp-vedio-area p-relative pt-120">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="tp-vedio-sction-box pb-70">
              <h4 className="tp-vedio-title">
                The most trusted communication <br />
                platform for modern <br />
                business
              </h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="tp-vedio-wrap">
              <div className="tp-vedio-wrapper">
                <video
                  className="play-video"
                  id="myVideo"
                  autoPlay
                  loop
                  playsInline
                  muted
                  src="/assets/video/yg.mp4"
                />
                <div className="tp-vedio-overlay">
                  <div className="tp-vedio-gradient" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoArea;
