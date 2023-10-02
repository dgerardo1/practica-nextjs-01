import Users from "@/components/Users"

export const metadata = {
  title: 'Mi página especial Home'
}

const HomePage = () => {
  // server component
  return (
    <section>
      {/* client component */}
      <Users/>

    </section>
  )
}

export default HomePage