import { FC } from "react";
import s from "./Layout.module.css";
import { Footer, Navbar } from "@components/common";
import { Sidebar } from "@components/ui";
import { CartSidebar } from "@components/cart";
import { useUI } from "@components/ui/context";
import { ApiProvider } from "@framework";

const Layout: FC = ({ children }) => {
  const ui = useUI();

  return (
    <ApiProvider>
      <div className={s.root}>
        <Navbar />
        <Sidebar isOpen={ui.isSidebarOpen} onClose={ui.closeSidebar}>
          <CartSidebar />
        </Sidebar>
        <main className="fit">{children}</main>
        <Footer />
      </div>
    </ApiProvider>
  );
};

export default Layout;
