
export default function Footer() {
   const styles = {
      footer: "absolute bottom-0 w-full text-center mb-4 whitespace-nowrap p-1 text-sm text-gray-600"
   }
  return (
     <footer className={styles.footer}>
        <p>Copyright &copy; {new Date().getFullYear() } by Art Beckett</p>
     </footer>
  )
}
