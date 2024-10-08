import { useLocation } from "react-router-dom"
import * as NavigationMenu from "@radix-ui/react-navigation-menu"
import styles from "./Navigation.module.css"

const navigationRoutes = [{ name: "Dashboard", href: "/dashboard" }]

const Navigation = () => {
  const location = useLocation()

  return (
    <NavigationMenu.Root className={styles["navigation"]}>
      <NavigationMenu.List className={styles["navigation-menu-list"]}>
        {navigationRoutes.map((navigationRoute, i) => {
          return (
            <NavigationMenu.Item key={i}>
              <NavigationMenu.Link
                data-active={location.pathname === navigationRoute.href ? true : false}
                className={styles["navigation-menu-link"]}
                href={navigationRoute.href}
              >
                {navigationRoute.name}
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          )
        })}
      </NavigationMenu.List>
      <NavigationMenu.List className={styles["navigation-menu-list"]}>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className={styles["navigation-menu-trigger"]}>
            {"käyttäjä tähän"}
          </NavigationMenu.Trigger>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  )
}

export default Navigation
