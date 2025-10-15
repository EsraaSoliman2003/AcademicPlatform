import libraryBg from "../../assets/library.jpg";
import personImg from "../../assets/person.png";
import styles from "./HomeMain.module.css";

const fullText = "مرحبا بكم في منصتنا ";

export default function Home() {

  return (
    <div 
      className="relative w-full h-[100vh] flex items-center justify-center"
      style={{
        backgroundImage: `url(${libraryBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* طبقة داكنة متدرجة */}
      <div className="absolute inset-0 bg-black/80"></div>

      <main className={styles.mainSection}>
        {/* الصورة على الشمال */}
        <div className={styles.imgSection}>
          <img src={personImg} alt="hero" className={styles.heroImage} />
        </div>

        {/* النص على اليمين */}
        <div className={styles.textSection}>
          <h1>{fullText}</h1>
        </div>
      </main>
    </div>
  );
}
