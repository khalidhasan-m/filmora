import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MovieDetailsModal from "./MovieDetailsModal";

export default function PageLayout({
  children,
  selectedShow,
  onCloseModal,
  className = "",
}) {
  const [internalShow, setInternalShow] = useState(null);
  const show = selectedShow !== undefined ? selectedShow : internalShow;
  const handleClose = onCloseModal ?? (() => setInternalShow(null));

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-[#0b0c10] text-slate-900 dark:text-slate-100 transition-colors duration-250">
      <Navbar />

      <main className={`flex-1 ${className}`}>
        {children}
      </main>

      <Footer />

      {show && (
        <MovieDetailsModal show={show} onClose={handleClose} />
      )}
    </div>
  );
}
