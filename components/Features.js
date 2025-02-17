import styles from "@/styles/features.module.css";

const featuresData = [
  { number: "1", title: "FortiFit", text: "Your Ultimate Fitness Destination" },
  { number: "2", title: "Expert Trainers", text: "Our team of certified trainers brings years of experience and expertise to help you reach your fitness goals effectively." },
  { number: "3", title: "Variety Of Equipment", text: "With over 30 types of equipment, including cardio machines, weightlifting stations, and functional training gear, there’s something for everyone at FortiFit." },
  { number: "4", title: "Community Atmosphere", text: "Join a vibrant community of fitness enthusiasts at FortiFit, where camaraderie and motivation flourish, making every workout a rewarding experience." },
  { number: "5", title: "Group Fitness Classes", text: "From high-intensity interval training (HIIT) to calming yoga sessions, our diverse group fitness classes cater to all fitness levels and preferences." },
  { number: "6", title: "Nutrition Counseling", text: "Our nutrition experts offer personalized advice and support to help you fuel your body for optimal performance and results." },
  { number: "7", title: "State-Of-The-Art Facilities", text: "FortiFit is equipped with modern facilities, including locker rooms, showers, and a spacious workout area, to enhance your fitness experience." }
];

export default function Features() {
  return (
    
    <section className={styles.features}>
        {/* <h2 className={styles.title}>About<span className={styles.highlight}>FortiFit</span></h2> */}
      {featuresData.map((feature, index) => (
        <div key={index} className={styles["feature-box"]}>
          <span className={styles["feature-number"]}>{feature.number}</span>
          <h3 className={styles["feature-title"]}>{feature.title}</h3>
          <p className={styles["feature-text"]}>{feature.text}</p>
        </div>
      ))}
    </section>
  );
}
