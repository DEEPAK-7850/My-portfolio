export default function Footer() {
    return (
      <footer className="bg-gray-100 py-6 mt-12">
        <div className="container mx-auto text-center">
          <p>© {new Date().getFullYear()} Deepak Lakhara. All rights reserved.</p>
        </div>
      </footer>
    );
  }