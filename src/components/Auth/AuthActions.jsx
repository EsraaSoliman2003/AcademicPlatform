export default function AuthActions({
  buttonText,
  bottomText,
  bottomLinkText,
  bottomLinkHref,
}) {
  return (
    <>
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-primary to-primaryHover text-white font-bold py-3 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-navbar"
      >
        {buttonText}
      </button>

      <div className="text-center pt-4 border-t border-white/10 mt-6">
        <p className="text-gray-300 text-sm">
          {bottomText}{" "}
          <a
            href={bottomLinkHref}
            className="text-primary font-medium hover:text-primaryHover transition-colors duration-navbar"
          >
            {bottomLinkText}
          </a>
        </p>
      </div>
    </>
  );
}
