import { useState } from "react";
import BiographyIcon from "../../../assets/details/biography_icon.svg";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Biography = () => {
  const [expand, setExpand] = useState(false);

  function handleExpand() {
    setExpand(!expand);
  }

  return (
    <>
      <div className="biography" onClick={handleExpand}>
        <div className="biography__icon">
          <img src={BiographyIcon} alt="" />
        </div>
        <div className="biography__heading">
          <span>Biography</span>
        </div>
        <div className="biography__expand">
          {expand ? <KeyboardArrowUpIcon /> : <ExpandMoreIcon />}
        </div>
      </div>
      {expand && (
        <div className="biographyExpansion">
          <p>
            Ranbir Kapoor is a Bollywood Superstar. A recipient of several
            accolades including five FILMFARE AWARDS, he is one of the most
            popular and highest paid celebrities in India. He is the grandson of
            well acclaimed Actor-Director Raj Kapoor and the son of actors Neetu
            Kapoor & Rishi Kapoor. At the LEE STRASBERG and THEATER AND FILM
            INSTITUTE & SCHOOL OF VISUAL ARTS, Ranbir pursued film-making and
            method acting respectively, following which he assisted SANJAY LEELA
            BHANSALI on the film BLACK (2005). Ranbir Kapoor kick-started his
            acting debut with Bhansali's Tragic-Romance SAAWARIYA (2007), a
            performance so ecstatic that he bagged a Filmfare Award for THE BEST
            MALE DEBUT 3 hit flicks, namely Ajab Prem Ki Ghazab Kahani, Rocket
            Singh-Salesman Of The Year & Wake Up Sid earned him 3 Filmfare
            Critics Awards for Best Actor Ranbir Kapoor’s award winning spree
            was extended with 2 BEST ACTOR awards at FILMFARE with stellar
            performances in ROCKSTAR (Drama, 2011) and BARFI (Drama-Comedy,
            2012), where he played a troubled musician and a deaf-mute man
            respectively He further proved his versatile acting skills by
            engaging the audiences in films like BOMBAY TALKIES (Appearance),
            YEH JAWAANI HAI DIWANI (RomanticComedy,2013) & RAJNEETI (Drama,
            2010) Films aside, Kapoor is a stern supporter of charitable causes
            and initiatives. He happens to be the Co-Owner of the INDIAN SUPER
            LEAGUE football team, MUMBAI CITY FC and the Co-Founder of Picture
            Shuru Productions
          </p>
        </div>
      )}
    </>
  );
};

export default Biography;
