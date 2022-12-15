import User from "./User";

export default function Header() {
   const styles = {
     headerLayout: "flex justify-between p-5 text-sm text-gray-700",
      LinkSet: "flex space-x-4 items-center",
     hoverEffect: "link", //this is a custom component I created in the global.css file that looks something like the Google hover effect
    
   };
  return (
    <header className={styles.headerLayout}>
      <div className={styles.LinkSet}>
        <p className={styles.hoverEffect}>About</p>
        <p className={styles.hoverEffect}>Store</p>
      </div>
      <div className={styles.LinkSet}>
        <p className={styles.hoverEffect}>Gmail</p>
           <p className={styles.hoverEffect}>Images</p>
           <User/>
      </div>
    </header>
  );
}
