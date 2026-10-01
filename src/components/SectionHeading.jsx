export default function SectionHeading({
  tag,
  title,
  subtitle,
  centered = true,
  className = "",
}) {
  return (
    <div
      className={`space-y-3 ${
        centered ? "text-center max-w-2xl mx-auto" : "max-w-xl text-left"
      } ${className}`}
    >
      {tag && (
        <div
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-blush/30 border border-brand-gold/30 text-brand-rose text-xs font-semibold tracking-wider uppercase ${
            centered ? "mx-auto" : ""
          }`}
        >
          {tag}
        </div>
      )}

      {title && (
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-4xl text-brand-charcoal font-medium tracking-tight leading-tight">
          {title}
        </h2>
      )}

      {subtitle && (
        <p className="text-brand-muted text-sm sm:text-base leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
