import headerMobile from "./../images/bg-header-mobile.svg";
import headerDesktop from "./../images/bg-header-desktop.svg";

export function Background() {
  return (
    <div className="bg-darkCyan">
      <picture>
        <source srcSet={`${headerDesktop}`} media="(min-width:780px)" />
        <img
          className="w-full h-[150px]"
          src={`${headerMobile}`}
          alt="Background pattern"
        />
      </picture>
    </div>
  );
}
