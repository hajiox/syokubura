export function Footer() {
  return (
    <footer className="bg-stone-800 text-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="border-t border-stone-700 pt-8">
          <div className="text-center mb-4">
            <a
              href="https://goo.gl/maps/xouijXj1vWXz7aR47"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-amber-700 hover:bg-amber-800 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              お店へ地図はこちら
            </a>
          </div>
          <p className="text-stone-400 text-center">Copyright © 2020 Technical Staff Inc. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
