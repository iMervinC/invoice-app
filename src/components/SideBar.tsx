import { useTheme } from 'hooks'

const SideBar = () => {
  const { dark, toggleTheme } = useTheme()

  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <img src="/assets/logo.svg" alt="logo" />
      </div>
      <div className="sidebar__theme-toggle" onClick={toggleTheme}>
        {dark ? (
          <img src="/assets/icon-sun.svg" alt="logo" />
        ) : (
          <img src="/assets/icon-moon.svg" alt="logo" />
        )}
      </div>
      <div className="sidebar__picture">
        <img src="/assets/image-avatar.jpg" alt="avatar" />
      </div>
    </div>
  )
}

export default SideBar
