import FacebookIcon from "../images/Facebook.svg";
import TwitterIcon from "../images/Twitter.svg";
import YouTubeIcon from "../images/YouTube.svg";
import InstagramIcon from "../images/Instagram.svg";

const Socials = () => {
  return (
    <div className="soci">
      <ul class="social-list">
        <li>
          <img href="#" className="social-icon" alt="" src={FacebookIcon} />
        </li>
        <li>
          <img
            href="https://twitter.com/pokeballmint"
            className="social-icon"
            alt=""
            src={TwitterIcon}
          />
        </li>
        <li>
          <img href="#" className="social-icon" alt="" src={YouTubeIcon} />
        </li>
        <li>
          <img href="#" className="social-icon" alt="" src={InstagramIcon} />
        </li>
      </ul>
    </div>
  );
};
export default Socials;
