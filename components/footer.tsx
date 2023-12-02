import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; {new Date().getFullYear()} Leila Adams. All rights reserved.
      </small>
      <p className="text-xs">
        Built with React 18 & Next.js 13, TypeScript, Tailwind CSS,
        Framer Motion, & deployed with GitHub Actions.
      </p>
    </footer>
  );
}
