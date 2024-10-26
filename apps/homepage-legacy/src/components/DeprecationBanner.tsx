import style from "./DeprecationBanner.module.css";

export function DeprecationBanner() {
  return (
    <div className={style.banner__wrapper}>
      <section className={style.banner}>
        <div className={style.banner__inner}>
          <div className={style.icon_container}>
            <img alt="bicycle" src="/bicycle.svg" height="80px" width="80px" />
            <img
              alt="walking person"
              src="/walk.svg"
              height="60px"
              width="60px"
            />
          </div>
          <h3>DETOUR</h3>
          <div>
            <img
              alt="detour-arrow"
              src="/detour-arrow.svg"
              height="40px"
              width="40px"
            />
          </div>
          The site is deprecated. Please visit our new site at
          <div>
            <a href="https://simple-pie.netlify.app">
              https://simple-pie.netlify.app
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
