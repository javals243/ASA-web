import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import Image from "next/image"
import style from "../styles/About.module.css"
import {dataTeams} from "../data"
function About() {
    return (
      <div className={style.wrapper}>
      <h1 style={{textAlign:"center"}}>Notre Teams</h1>
          <section className={style.our_team_section}>
        <div className={style.container}>
            <div className={style.row}>
                <div className={style.grid}>
{
  dataTeams.map((item)=>(

            <div className={style.our_team} key={item.id}>
                        <div className={style.pic}>
                            <Image className={style.img} src={`${process.env.NEXT_PUBLIC_URLl}/img/teams/${item.photo}`} 
                              width={100}

                        height={100} 
                        alt="image" />
                        </div>
                        <div className={style.team_content}>
                            <h3 className={style.title}>{item.name}</h3>
                            <span className={style.post}>{item.grade}</span>
                        </div>
                        
      </div>
  ))
}
                
                  
            </div>
        </div>
</div>
    </section>
    </div>

    );
}

export default About
